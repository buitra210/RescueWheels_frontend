import {
  CssBaseline,
  responsiveFontSizes,
  Theme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { BaseContextProps } from "src/global-config";
import BaseChartStyle from "src/theme/chart";
import {
  getThemeConfig,
  getThemedComponent,
  THEME_MODE,
} from "src/theme/theme";

export interface ThemeContextProps {
  toggleThemeMode: () => void;
  mode: THEME_MODE;
  breakPoint: {
    downMD: boolean;
    downXSM: boolean;
  };
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export function ThemeCustomProvider({ children }: BaseContextProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<THEME_MODE>((): THEME_MODE => {
    let initialMode = localStorage.getItem("theme") as THEME_MODE;
    if (!initialMode) {
      initialMode = prefersDarkMode ? "dark" : "light";
      localStorage.setItem("theme", initialMode);
    }
    return initialMode;
    // return 'light';
  });

  const toggleThemeMode = useCallback(() => {
    setMode((prevMode: THEME_MODE) => {
      const newMode: THEME_MODE = prevMode === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newMode);
      return newMode;
    });
  }, []);

  const theme = useMemo<Theme>(() => {
    const _t = createTheme(getThemeConfig(mode));
    return responsiveFontSizes(deepmerge(_t, getThemedComponent(_t)), {
      breakpoints: ["xs", "xsm"],
    });
  }, [mode]);

  const downMD = useMediaQuery(theme.breakpoints.down("md"));
  const downXSM = useMediaQuery(theme.breakpoints.down("xsm"));

  return (
    <ThemeContext.Provider
      value={{ toggleThemeMode, mode, breakPoint: { downMD, downXSM } }}
    >
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <BaseChartStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
