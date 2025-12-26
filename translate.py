import json
from pathlib import Path
from typing import List, Tuple, Set
import os
import re
from openai import OpenAI
from tqdm import tqdm
from dotenv import load_dotenv
from concurrent.futures import ThreadPoolExecutor, as_completed

load_dotenv()

LANG_MAP = {
    "af": "Afrikaans",
    "am": "Amharic",
    "ar-EG": "Egyptian Arabic",
    "ar-MA": "Moroccan Arabic",
    "ar-SA": "Saudi Arabic",
    "ar": "Arabic",
    "az": "Azerbaijani",
    "bg": "Bulgarian",
    "bho": "Bhojpuri",
    "bn": "Bengali",
    "bs": "Bosnian",
    "ca": "Catalan",
    "cs": "Czech",
    "da": "Danish",
    "de": "German",
    "el": "Greek",
    "en-GB": "British English",
    "es-419": "Latin American Spanish",
    "es-AR": "Argentine Spanish",
    "es-MX": "Mexican Spanish",
    "es": "Spanish",
    "et": "Estonian",
    "eu": "Basque",
    "fa": "Persian",
    "fi": "Finnish",
    "fil": "Filipino",
    "fr-CA": "Canadian French",
    "fr": "French",
    "gl": "Galician",
    "gu": "Gujarati",
    "he": "Hebrew",
    "hi": "Hindi",
    "hr": "Croatian",
    "hu": "Hungarian",
    "id": "Indonesian",
    "is": "Icelandic",
    "it": "Italian",
    "ja": "Japanese",
    "kn": "Kannada",
    "ko": "Korean",
    "lt": "Lithuanian",
    "lv": "Latvian",
    "mk": "Macedonian",
    "ml": "Malayalam",
    "mr": "Marathi",
    "ms": "Malay",
    "nb": "Norwegian Bokmål",
    "ne": "Nepali",
    "nl": "Dutch",
    "or": "Odia",
    "pa-IN": "Punjabi (India)",
    "pa-PK": "Punjabi (Pakistan)",
    "pl": "Polish",
    "pt-BR": "Brazilian Portuguese",
    "pt-PT": "European Portuguese",
    "ro": "Romanian",
    "ru": "Russian",
    "sk": "Slovak",
    "sl": "Slovenian",
    "sr": "Serbian",
    "sv": "Swedish",
    "sw": "Swahili",
    "ta": "Tamil",
    "te": "Telugu",
    "th": "Thai",
    "tr": "Turkish",
    "uk": "Ukrainian",
    "ur": "Urdu",
    "vi": "Vietnamese",
    "zh-CN": "Simplified Chinese",
    "zh-HK": "Hong Kong Chinese",
    "zh-TW": "Traditional Chinese",
    "zu": "Zulu",
}


class TranslationModel:
    def __init__(self, api_key: str = None):
        self.client = OpenAI(
            api_key=api_key or os.getenv("DEEPINFRA_API_KEY"),
            base_url="https://api.deepinfra.com/v1/openai",
        )
        self.model = "Qwen/Qwen3-235B-A22B-Instruct-2507"

    def translate(self, text: str, target_lang: str) -> str:
        try:
            response = self.client.chat.completions.create(
                model=self.model,
                messages=[
                    {
                        "role": "user",
                        "content": f"Translate the following text to {target_lang}. Output only the translation, no explanations:\n\n{text}",
                    }
                ],
                temperature=0.3,
                max_tokens=2048,
                top_p=0.8,
            )
            return response.choices[0].message.content.strip()
        except Exception as e:
            print(f"\nError ({target_lang}): {e}")
            return text


def flatten_json(obj: dict, path: str = "") -> Tuple[List[str], List[str]]:
    texts, paths = [], []

    def collect(o, p):
        if isinstance(o, str) and o.strip():
            texts.append(o)
            paths.append(p)
        elif isinstance(o, dict):
            for k, v in o.items():
                collect(v, f"{p}.{k}" if p else k)
        elif isinstance(o, list):
            for i, item in enumerate(o):
                collect(item, f"{p}[{i}]")

    collect(obj, path)
    return texts, paths


def reconstruct_json(obj, mapping: dict, path: str = ""):
    if isinstance(obj, str):
        return mapping.get(path, obj)
    elif isinstance(obj, dict):
        return {
            k: reconstruct_json(v, mapping, f"{path}.{k}" if path else k)
            for k, v in obj.items()
        }
    elif isinstance(obj, list):
        return [
            reconstruct_json(item, mapping, f"{path}[{i}]")
            for i, item in enumerate(obj)
        ]
    return obj


def get_source_files(src_dir: Path):
    for ext in ["*.ts", "*.tsx", "*.js", "*.jsx"]:
        yield from src_dir.rglob(ext)


def extract_strings_from_line(line: str) -> List[tuple[str, bool]]:
    results = []
    for match in re.finditer(r"'([^']*)'|\"([^\"]*)\"", line):
        results.append((match.group(1) or match.group(2), False))
    for match in re.finditer(r"`([^`]*)`", line):
        content = match.group(1)
        results.append((content, "${" in content))
    return results


def looks_like_translation_key(s: str) -> bool:
    # Match dotted keys (e.g., "settings.title") or SCREAMING_SNAKE_CASE keys (e.g., "ACTION_THROW")
    return "." in s or (s.isupper() and "_" in s)


# def find_used_keys(src_dir: Path) -> Tuple[Set[str], Set[str]]:
#     used_keys = set()
#     dynamic_prefixes = set()

#     for file_path in get_source_files(src_dir):
#         try:
#             with open(file_path, "r", encoding="utf-8") as f:
#                 for line in f:
#                     if line.strip().startswith("//"):
#                         continue
#                     for string, is_dynamic in extract_strings_from_line(line):
#                         if is_dynamic and looks_like_translation_key(
#                             string.split("${")[0].strip()
#                         ):
#                             parts = string.split(".")
#                             prefix_parts = []
#                             for part in parts:
#                                 if (
#                                     "${" in part
#                                     or "[" in part
#                                     or "}" in part
#                                     or "]" in part
#                                 ):
#                                     break
#                                 prefix_parts.append(part)
#                             if prefix_parts:
#                                 dynamic_prefixes.add(".".join(prefix_parts))
#                         elif not is_dynamic:
#                             cleaned = string.strip()
#                             if looks_like_translation_key(cleaned):
#                                 used_keys.add(cleaned)
#         except Exception:
#             pass

#     return used_keys, dynamic_prefixes


# def filter_unused_keys(
#     obj: dict, used_keys: Set[str], dynamic_prefixes: Set[str], prefix: str = ""
# ) -> dict:
#     if not isinstance(obj, dict):
#         return obj

#     result = {}
#     for k, v in obj.items():
#         current_key = f"{prefix}.{k}" if prefix else k

#         is_protected = any(
#             current_key.startswith(dp + ".") or current_key == dp
#             for dp in dynamic_prefixes
#         )
#         is_used = current_key in used_keys

#         if is_protected or is_used:
#             result[k] = (
#                 filter_unused_keys(v, used_keys, dynamic_prefixes, current_key)
#                 if isinstance(v, dict)
#                 else v
#             )
#         elif isinstance(v, dict):
#             prefix_with_dot = current_key + "."
#             has_descendant = any(
#                 key.startswith(prefix_with_dot) for key in used_keys
#             ) or any(dp.startswith(prefix_with_dot) for dp in dynamic_prefixes)

#             if has_descendant:
#                 filtered = filter_unused_keys(
#                     v, used_keys, dynamic_prefixes, current_key
#                 )
#                 if filtered:
#                     result[k] = filtered

#     return result


def main():
    i18n_dir = Path("src/i18n")
    src_dir = Path("src")
    source_file = i18n_dir / "en.json"

    # print("Finding used keys...")
    # used_keys, dynamic_prefixes = find_used_keys(src_dir)

    # print("Cleaning source file...")
    data = json.loads(source_file.read_text(encoding="utf-8"))
    # cleaned_data = filter_unused_keys(data, used_keys, dynamic_prefixes)
    # source_file.write_text(
    #     json.dumps(cleaned_data, ensure_ascii=False, indent=2), encoding="utf-8"
    # )

    print("Flattening translations...")
    texts, paths = flatten_json(data)

    model = TranslationModel()
    translations_by_lang = {lang_code: {} for lang_code in LANG_MAP}

    print(f"Translating {len(texts)} strings to {len(LANG_MAP)} languages")

    with ThreadPoolExecutor(max_workers=len(LANG_MAP)) as executor:
        with tqdm(total=len(texts) * len(LANG_MAP)) as pbar:
            for text, path in zip(texts, paths):
                future_to_lang = {
                    executor.submit(model.translate, text, lang_name): lang_code
                    for lang_code, lang_name in LANG_MAP.items()
                }
                for future in as_completed(future_to_lang):
                    translations_by_lang[future_to_lang[future]][path] = future.result()
                    pbar.update(1)

    for lang_code in LANG_MAP:
        file_path = i18n_dir / f"{lang_code}.json"
        file_path.write_text(
            json.dumps(
                reconstruct_json(data, translations_by_lang[lang_code]),
                ensure_ascii=False,
                indent=2,
            ),
            encoding="utf-8",
        )

    print("✓ Translation done")


if __name__ == "__main__":
    main()
