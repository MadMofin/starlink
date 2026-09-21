const THEMES = {
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
    primary: "#E3ACAE",
    secondary: "#ECD2D5",
    tertiary: "#9CDBE4",
    textPrimary: "#171717",
    divider: "#828282",
    contrast: "#FFFFFF",
    sidebar: "#F2F2F2",
    topbar: "#242424",
    border: "#EAEAEA",
  },
} as const;

export type ThemeName = keyof typeof themes;
