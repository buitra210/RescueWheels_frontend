import { ExpandMoreRounded } from "@mui/icons-material";
import { darken, Theme, ThemeOptions } from "@mui/material";
import React from "react";

// eslint-disable-next-line quotes
export type THEME_MODE = "dark" | "light";

const round = (value: number): number => Math.round(value * 1e5) / 1e5;
const pxToRem = (size: number): string => `${size / 16}rem`;
const buildVariant = (
  fontWeight: number,
  size: number,
  lineHeight: number,
  letterSpacing?: number
) => ({
  fontWeight,
  fontSize: pxToRem(size),
  lineHeight: `${round(lineHeight / size)}`,
  ...(letterSpacing !== undefined
    ? { letterSpacing: `${round(letterSpacing / size)}em` }
    : {}),
});

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    default: string;
    paper: string;
    primary: string;
    secondary: string;
    header: string;
    paperHover: string;
    contentHeader: string;
    headerTable: string;
    playground: string;
    hover: string;
    search: string;
  }

  interface Palette {
    gradient: {
      main: string;
    };
  }

  interface PaletteOptions {
    gradient: {
      main: string;
    };
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xsm: true;
    xxl: true;
  }

  interface TypographyVariants {
    body3: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    caption2: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    caption2: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    gradient: true;
  }
}

declare module "@mui/material/Hidden" {
  interface HiddenProps {
    xsmDown?: boolean;
    xsmUp?: boolean;
  }
}

export function getThemeConfig(mode: THEME_MODE): ThemeOptions {
  const getColor = (darkColor: string, lightColor: string) => {
    return mode === "dark" ? darkColor : lightColor;
  };

  return {
    breakpoints: {
      keys: ["xs", "xsm", "sm", "md", "lg", "xl", "xxl"],
      values: {
        xs: 0,
        xsm: 600,
        sm: 760,
        md: 960,
        lg: 1280,
        xl: 1440,
        xxl: 1800,
      },
    },
    shadows: [
      "none",
      getColor(
        "0px 0px 6px 0px rgba(41, 41, 41, 0.52) inset",
        "inset 0px 0px 6px #D5D9D985, 0px 3px 6px #00000014"
      ), // 1
      getColor(
        "0px 4px 4px 0px rgba(0, 0, 0, 0.12)",
        "0px 4px 4px 0px rgba(0, 0, 0, 0.12)"
      ), // 2
      getColor("0px 0px 15px 0px #317F9E", "0px 0px 15px 0px #8EDFFF"), // 3
      getColor("0px 2px 6px #406373", "0px 2px 6px #00000029"), //4
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    palette: {
      mode: "dark",
      divider: getColor("#595F5A", "#131c183b"),
      background: {
        default: "#030B10",
        paper: "#0d1921",
        primary: "#030B10",
        header: "#2A3C48",
        playground: "#0A1116",
        paperHover: "#10202B",
        hover: "#12212C",
        search: "#010305",
      },
      gradient: {
        main: "linear-gradient(100.42deg, #2C85EE 16.07%, #4FB5FF 79.2%)",
      },
      primary: {
        main: "#E2EDFF", // mau xanh button theme light
        light: "#6CB7D426",
      },
      secondary: {
        main: "#97A8BC",
        dark: "#111C18",
        light: "#566474",
      },
      info: {
        main: "#1C8CF3",
        light: "#25A0E226",
      },
      success: {
        main: "#03BD9D",
        light: "#00BD9026",
      },
      warning: {
        main: "#FFBC0A",
        light: "#FFBC0A26",
      },
      error: {
        main: "#F06542",
        light: "#F0654226",
      },
      text: {
        // primary: getColor('#FFFFFF', '#566474'),
        primary: "#E2EDFF",
        secondary: "#97A8BC",
        // active: "#009FDB",
        // active2: "#5185AA",
        // active3: "#15C381",
        // active4: "#A9AAF2",
        // label1: "#6D8198",
        // revoked: "#DB8686",
        // jsonKey: "#0072DB",
        // jsonValue: "#FFF",
        // score: "#1FBDD9",
        // error: "#FF6767",
        // filter: "#85CCFF",
        // success: "#52B95F",
        // disabled: getColor('', '')
      },
      action: {
        selected: getColor("#021C39", "#6cb7d42b"),
        hover: getColor("#FFFFFF0F", "#0000000F"),
        hoverOpacity: 0.06,
      },
    },
    typography: {
      fontFamily: "'Open Sans', sans-serif",
      h1: buildVariant(600, 60, 54),
      h2: buildVariant(800, 80, 40),
      h3: buildVariant(600, 26, 36),
      h4: buildVariant(600, 24, 33),
      h5: buildVariant(600, 20, 27),
      h6: buildVariant(600, 18, 24),
      body1: buildVariant(400, 16, 10),
      body2: buildVariant(400, 14, 19),
      body3: buildVariant(400, 12, 14),
      subtitle1: buildVariant(600, 20, 27, 0),
      subtitle2: buildVariant(400, 16, 22, 0),
      caption: buildVariant(400, 14, 19, 0.15),
      caption2: buildVariant(500, 12, 17),
      button: {
        ...buildVariant(600, 14, 19),
        textTransform: "capitalize",
      },
    },
  };
}
// #6cb7d42b

export function getThemedComponent(theme: Theme): ThemeOptions {
  return {
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ".SnackbarItem-wrappedRoot .SnackbarItem-contentRoot .SnackbarItem-message":
            {
              ...theme.typography.body3,
            },
          // disable arrow from input number
          // Chrome, Safari, Edge, Opera
          "input::-webkit-outer-spin-button,input::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
          // Firefox
          "input[type=number]": {
            MozAppearance: "textfield",
          },
          "div.MuiBox-root": {
            "::-webkit-scrollbar": {
              height:
                "4px" /* height of horizontal scrollbar ← You're missing this */,
              width: "4px" /* width of vertical scrollbar */,
            },
            "::-webkit-scrollbar-track": {
              borderRadius: 0,
              background: theme.palette.mode == "dark" ? "#1b2626" : "#f7f7f7",
            },

            "::-webkit-scrollbar-thumb": {
              borderRadius: 10,
              background: theme.palette.mode == "dark" ? "#777777" : "#D5D5D5",
              cursor: "pointer",
              "&:hover": {
                background: "#d3d3d3",
              },
            },
          },
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backdropFilter: "blur(3px)",
          },
        },
      },
      MuiInputAdornment: {
        styleOverrides: {
          root: {
            "& .MuiTypography-root": {
              color: "white",
              fontWeight: 600,
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            borderColor: "#C3C4C3!important",
            borderRadius: 24,
            height: "46px",
            ".MuiInputBase-root.MuiOutlinedInput-root": {
              background: "#111C18",
              borderRadius: "24px!important",
              color: "white",
              height: "46px",
              paddingRight: "33px",
              ".MuiInputBase-input": {
                padding: "13px 33px",
                "&.Mui-disabled": {
                  WebkitTextFillColor: "#FFDF57",
                  opacity: 1,
                  fontWeight: 600,
                },
              },
              ".MuiOutlinedInput-notchedOutline": {
                borderRadius: "24px!important",
                border: "none",
                outline: "none",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "2px solid",
                borderColor: theme.palette.primary.main + "!important",
              },
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {},
        styleOverrides: {
          root: {
            minHeight: "38px",
            textTransform: "none",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: 600,
            py: "10px",
            px: "16px",
          },
          containedPrimary: {
            backgroundColor: "#009FDB",
            color: "#FFFFFF",
            border: "none",
            ":hover": {
              backgroundColor: "#0179A5",
              color: "#FFFFFF",
            },
          },
          outlinedPrimary: {
            backgroundColor: "transparent",
            color: "#009FDB",
            border: "1px solid #009FDB",
            ":hover": {
              backgroundColor: "#081924",
              color: "#009FDB",
              border: "1px solid #009FDB",
            },
          },
          containedSecondary: {
            backgroundColor: "#12212C",
            color: "#5185AA",
            border: "none",
            ":hover": {
              backgroundColor: "#1D384B",
              color: "#5185AA",
            },
          },
          outlinedSecondary: {
            backgroundColor: "transparent",
            color: "#009FDB",
            border: "1px sid #009FDB",
            ":hover": {
              backgroundColor: "#0179A5",
              color: "#FFFFFF",
              border: "1px sid #009FDB",
            },
          },
          textPrimary: {
            backgroundColor: "transparent",
            border: "none",
            color: "#5185AA",
            ":hover": {
              backgroundColor: "transparent",
              color: "#009FDB",
            },
          },
        },
        variants: [
          {
            props: { variant: "gradient" },
            style: {
              color: theme.palette.common.white,
              background: theme.palette.gradient.main,
              transition: "all 250ms ease",
              "&:hover, &.Mui-focusVisible": {
                opacity: 0.9,
              },
            },
          },
        ],
      },
      MuiTypography: {
        defaultProps: {
          variant: "body1",
          variantMapping: {
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            h5: "h5",
            h6: "h6",
            body1: "p",
            body2: "p",
            body3: "p",
            subtitle1: "p",
            subtitle2: "p",
            button: "p",
            caption: "p",
            caption2: "p",
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fontSize: pxToRem(30),
          },
          fontSizeSmall: {
            fontSize: pxToRem(30),
          },
          fontSizeLarge: {
            fontSize: pxToRem(40),
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            borderRadius: "14px",
          },
        },
      },
      MuiDialog: {
        defaultProps: {
          scroll: "body",
          PaperProps: {
            style: {
              backgroundColor: "#0D1921",
            },
            elevation: 0,
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            paddingTop: theme.spacing(2.5),
            // paddingTop: `${theme.spacing(2.5)} !important`, // prevent override
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            padding: theme.spacing(2, 2.5),
            backgroundColor:
              theme.palette.mode === "dark" ? "#1F353C" : "#EDEDED",
            "&.MuiDialogTitle-root+.MuiDialogContent-root": {
              paddingTop: theme.spacing(2.5),
            },
          },
        },
      },
      MuiUseMediaQuery: {
        defaultProps: {
          noSsr: true,
        },
      },
      MuiTooltip: {
        defaultProps: {
          arrow: true,
          placement: "top",
        },
        styleOverrides: {
          tooltip: {
            ...theme.typography.body3,
            boxShadow:
              "rgb(0 0 0 / 20%) 0px 0px 2px, rgb(0 0 0 / 10%) 0px 2px 10px",
            backgroundColor: "rgba(0,0,0,0.9)",
            padding: theme.spacing(1),
            maxWidth: 400,
            color: "#fff",
          },
          arrow: {
            "&:before": {
              boxShadow:
                "rgb(0 0 0 / 20%) 0px 0px 2px, rgb(0 0 0 / 10%) 0px 2px 10px",
              backgroundColor: "rgba(0,0,0,0.9)",
            },
            color: "#fff",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            "&:not(.Mui-focused):hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.secondary.dark,
              borderWidth: 2,
            },
          },
          focused: {
            "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline":
              {
                borderColor: theme.palette.primary.main,
              },
          },
          input: {
            // padding: theme.spacing(1.5, 2),
          },
          notchedOutline: {
            borderColor: theme.palette.secondary.dark,
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            overflow: "hidden",
            borderRadius: 20,
            "&:first-of-type, &:last-of-type": {
              borderRadius: 20,
            },
            "&:before": {
              display: "none",
            },
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            padding: theme.spacing(1, 2.5),
            backgroundColor: theme.palette.background.paper,
            // boxShadow: theme.palette.mode == 'dark' ? theme.shadows[1] : 'inset 0px 0px 6px #D5D9D985, 0px 3px 6px #00000014',
            "& .MuiAccordionSummary-content": {
              margin: 0,
              "&.Mui-expanded": {
                margin: 0,
              },
            },
          },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            padding: theme.spacing(3, 4.5),
            background: theme.palette.mode == "dark" ? "#1F353C" : "",
            [theme.breakpoints.down("xsm")]: {
              padding: theme.spacing(3),
            },
          },
        },
      },
      MuiButtonGroup: {
        styleOverrides: {
          root: {
            backgroundColor: "#C3C4C3",
            border: "1px solid #B8BEB9",
            borderRadius: 18,
            overflow: "hidden",
            ".MuiButtonBase-root": {
              paddingRight: "16px",
              paddingLeft: "16px",
            },
          },

          grouped: {
            minWidth: "85px",
            "&:not(:last-of-type)": {
              borderTopRightRadius: 18,
              borderBottomRightRadius: 18,
              borderRightColor: "inherit",
            },
            "&:not(:first-of-type)": {
              borderTopLeftRadius: 18,
              borderBottomLeftRadius: 18,
            },
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          root: {
            "& .MuiBackdrop-root": {
              backdropFilter: "none",
            },
          },
        },
      },
      MuiPagination: {
        defaultProps: {
          color: "primary",
          shape: "rounded",
        },
      },
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              color: "#fff",
              boxShadow: "0px 0px 10px 1px rgba(196, 196, 196, 0.5)",
            },
          },
        },
      },
      MuiSelect: {
        defaultProps: {
          IconComponent: ExpandMoreRounded,

          sx: {
            pl: 1,
            fieldset: {
              borderColor: "#E5E5E5",
            },
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: "#030B10",
            boxShadow: "0px 2px 8px 0px #5185AA66",
            "& .MuiMenuItem-root.Mui-selected": {
              backgroundColor: "transparent",
              fontWeight: 600,
              color: "#009FDB",
            },
            "& .MuiMenuItem-root": {
              fontWeight: 400,
              color: "#C1ECFD",
            },
            "& .MuiMenuItem-root:hover": {
              backgroundColor: "transparent",
              fontWeight: 600,
            },
          },
          list: {
            backgroundColor: "#030B10",
          },
        },
      },
    },
  };
}
