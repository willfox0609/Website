import { createContext, useEffect, useState } from "react";

type Settings = {
  displayName: string;
  email: string;

  emailNotif: boolean;
  smsNotif: boolean;
  pushNotif: boolean;

  accountId: string;
  memberSince: string;

  isLoggedIn: boolean;
};

type SettingsContextType = {
  settings: Settings;
  updateSettings: (updates: Partial<Settings>) => void;
};

const defaultSettings: Settings = {
  displayName: "",
  email: "",

  emailNotif: true,
  smsNotif: false,
  pushNotif: true,

  accountId: "",
  memberSince: "",

  isLoggedIn: false,
};

export const SettingsContext = createContext<SettingsContextType>({
  settings: defaultSettings,
  updateSettings: () => {},
});

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  // Load from localStorage on startup
  useEffect(() => {
    const saved = localStorage.getItem("appSettings");
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever settings change
  useEffect(() => {
    localStorage.setItem("appSettings", JSON.stringify(settings));
  }, [settings]);

  function updateSettings(updates: Partial<Settings>) {
    setSettings((prev) => ({ ...prev, ...updates }));
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}
