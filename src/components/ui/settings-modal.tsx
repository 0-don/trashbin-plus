import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { SELECTORS } from "../../lib/constants";
import { cn } from "../../lib/utils";
import { useTrashbinStore } from "../../store/trashbin-store";
import { TRASH_ICON } from "../icons";

const Tooltip: React.FC<{
  children: React.ReactNode;
  content: string;
}> = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = (e: React.MouseEvent) => {
    clearTimeout(timeoutRef.current);
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
    });
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 100);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <>
      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </span>
      {isVisible && (
        <div
          className="pointer-events-none fixed z-50 rounded bg-black px-2 py-1 text-xs text-white shadow-lg"
          style={{
            left: position.x,
            top: position.y,
            transform: "translate(-50%, -100%)",
            maxWidth: "200px",
            wordWrap: "break-word",
          }}
        >
          {content}
          <div className="absolute top-full left-1/2 -translate-x-1/2 transform border-4 border-transparent border-t-black" />
        </div>
      )}
    </>
  );
};

const Toggle: React.FC<{
  label: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  description?: string;
}> = ({ label, enabled, onChange, description }) => (
  <div className="flex items-center justify-between gap-2.5! py-2.5!">
    <label className="flex w-full items-center gap-1.5! pr-4">
      {label}
      {description && (
        <Tooltip content={description}>
          <span className="inline-flex! cursor-help! text-[rgba(var(--spice-rgb-text),0.5)]! transition-colors! hover:text-(--spice-text)!">
            <HiOutlineQuestionMarkCircle size={14} />
          </span>
        </Tooltip>
      )}
    </label>
    <div className="text-right">
      <button
        className={cn(
          "flex! cursor-pointer! items-center! rounded-full! border-0!",
          "ml-3! p-2! transition-colors!",
          "bg-[rgba(var(--spice-rgb-shadow),0.7)]! text-(--spice-text)!",
          !enabled && "text-[rgba(var(--spice-rgb-text),0.3)]!",
        )}
        onClick={() => onChange(!enabled)}
      >
        <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
          {enabled && (
            <path d="M8.797 2.5a.5.5 0 0 0-.594 0L2.5 6.5v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-7l-5.703-4z" />
          )}
        </svg>
      </button>
    </div>
  </div>
);

const ActionButton: React.FC<{
  label: string;
  description: string;
  onClick: () => void;
}> = ({ label, description, onClick }) => (
  <div className="flex items-center justify-between gap-2.5! py-2.5!">
    <label className="w-full pr-4">{description}</label>
    <div className="text-right">
      <button
        className={cn(
          "rounded-full! bg-transparent! font-bold! transition-transform!",
          "border! border-[#727272]! px-[15px]! duration-33!",
          "min-h-8! cursor-pointer! text-(--spice-text)!",
          "hover:scale-[1.04]! hover:border-(--spice-text)!",
        )}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  </div>
);

const SettingsModal: React.FC = () => {
  const { t } = useTranslation();
  const store = useTrashbinStore();

  const handleFileImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          store.importTrashData(data.songs || {}, data.artists || {});
          Spicetify.showNotification(t("BACKUP_RESTORE_SUCCESS"));
        } catch {
          Spicetify.showNotification(t("BACKUP_FILE_READ_FAILED"), true);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const handleExport = async () => {
    try {
      const handle = await window.showSaveFilePicker?.({
        suggestedName: t("BACKUP_SUGGESTED_FILENAME"),
        types: [{ accept: { "application/json": [".json"] } }],
      });
      const writable = await handle?.createWritable();
      await writable?.write(JSON.stringify(store.exportData()));
      await writable?.close();
      Spicetify.showNotification(t("BACKUP_SAVE_SUCCESS"));
    } catch {
      Spicetify.showNotification(t("BACKUP_SAVE_FAILED"));
    }
  };

  const handleCopy = () => {
    Spicetify.Platform.ClipboardAPI.copy(JSON.stringify(store.exportData()));
    Spicetify.showNotification(t("MESSAGE_COPIED"));
  };

  const handleClear = () => {
    store.clearTrashbin();
    Spicetify.showNotification(t("MESSAGE_CLEARED"));
  };

  return (
    <div className="p-4">
      <h2 className="my-2.5! text-lg font-bold text-(--spice-text) first-of-type:mt-0">
        {t("SETTINGS_OPTIONS")}
      </h2>
      <Toggle
        label={t("SETTINGS_ENABLED")}
        enabled={store.trashbinEnabled}
        onChange={store.setTrashbinEnabled}
        description={t("DESCRIPTION_SETTINGS_ENABLED")}
      />
      <Toggle
        label={t("SETTINGS_SHOW_WIDGET")}
        enabled={store.widgetEnabled}
        onChange={store.setWidgetEnabled}
        description={t("DESCRIPTION_SETTINGS_SHOW_WIDGET")}
      />

      <h2 className="my-2.5! text-lg font-bold text-(--spice-text) first-of-type:mt-0">
        {t("SETTINGS_FEATURES")}
      </h2>
      <Toggle
        label={t("SETTINGS_AUTOPLAY")}
        enabled={store.autoplayOnStart}
        onChange={store.setAutoplayOnStart}
        description={t("DESCRIPTION_SETTINGS_AUTOPLAY")}
      />
      <Toggle
        label={t("SETTINGS_QUEUE_TRASHBIN")}
        enabled={store.queueTrashbinEnabled}
        onChange={store.setQueueTrashbinEnabled}
        description={t("DESCRIPTION_SETTINGS_QUEUE_TRASHBIN")}
      />
      <Toggle
        label={t("SETTINGS_TRACKLIST_TRASHBIN")}
        enabled={store.tracklistTrashbinEnabled}
        onChange={store.setTracklistTrashbinEnabled}
        description={t("DESCRIPTION_SETTINGS_TRACKLIST_TRASHBIN")}
      />
      <Toggle
        label={t("SETTINGS_RESHUFFLE_ON_SKIP")}
        enabled={store.reshuffleOnSkip}
        onChange={store.setReshuffleOnSkip}
        description={t("DESCRIPTION_SETTINGS_RESHUFFLE_ON_SKIP")}
      />
      <Toggle
        label={t("SETTINGS_PLAYLIST_MONITOR")}
        enabled={store.playlistMonitorEnabled}
        onChange={store.setPlaylistMonitorEnabled}
        description={t("DESCRIPTION_SETTINGS_PLAYLIST_MONITOR")}
      />

      <h2 className="my-2.5! text-lg font-bold text-(--spice-text) first-of-type:mt-0">
        {t("SETTINGS_LOCAL_STORAGE")}
      </h2>
      <ActionButton
        label={t("ACTION_COPY")}
        description={t("DESCRIPTION_COPY")}
        onClick={handleCopy}
      />
      <ActionButton
        label={t("ACTION_EXPORT")}
        description={t("DESCRIPTION_EXPORT")}
        onClick={handleExport}
      />
      <ActionButton
        label={t("ACTION_IMPORT")}
        description={t("DESCRIPTION_IMPORT")}
        onClick={handleFileImport}
      />
      <ActionButton
        label={t("ACTION_CLEAR")}
        description={t("DESCRIPTION_CLEAR")}
        onClick={handleClear}
      />
    </div>
  );
};

export function TrashbinSettings() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menuItem = new Spicetify.Menu.Item(
      t("TRASHBIN_NAME"),
      false,
      () => setIsOpen(true),
      TRASH_ICON(15),
    );
    menuItem.register();
    return () => menuItem.deregister();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    Spicetify.PopupModal.display({
      title: t("SETTINGS_TITLE"),
      content: (<SettingsModal />) as unknown as Element,
    });

    const observer = new MutationObserver(() => {
      if (!document.querySelector(SELECTORS.TRACK_CREDITS_MODAL_CONTAINER)) {
        setIsOpen(false);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [isOpen]);

  return null;
}
