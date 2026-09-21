export const THEMES = {
  ONE_LIGHT: "one_light",
};

export type ThemeListItem = {
  name: string;
  description: string;
  image: string;
};

export const themes = {
  [THEMES.ONE_LIGHT]: {
    background: "#F8F7F8",
    foreground: "#F8F7F8",

    green: "#98A086",
    rose: "#D16F6F",
    tam: "#C4A071",
    beige: "#DFCCB1",
    brown: "#846044",

    textPrimary: "#171717",
    divider: "#828282",
    contrast: "#FFFFFF",
    sidebar: "#F2F2F2",
    topbar: "#242424",
    border: "#EAEAEA",
  },
} as const;

export type ThemeName = (typeof THEMES)[keyof typeof THEMES];
