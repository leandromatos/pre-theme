module.exports = {
  name: "pre",
  displayName: "Pre",
  theme: {
    background: {
      default: "#292929",
      success: "#23ff5e",
      notice: "#fff64f",
      warning: "#ff991b",
      danger: "#fe0026",
      surprise: "#bd58fd",
      info: "#00e5ff",
    },
    foreground: {
      default: "#f8f8f8",
      success: "#0e6626",
      notice: "#666220",
      warning: "#663d0b",
      danger: "#66000f",
      surprise: "#4d2466",
      info: "#005c66",
    },
    highlight: {
      default: "#7b7b7b",
      xxs: "#7b7b7b",
      xs: "#292929",
      sm: "#454545",
      md: "#454545",
      lg: "#7b7b7b",
      xl: "#7b7b7b",
    },
    styles: {
      sidebar: {
        background: {
          default: "#191919",
        },
      },
      dialog: {
        background: {
          default: "#292929",
        },
      },
      paneHeader: {
        background: {
          success: "#23ff5e",
          notice: "#fff64f",
          warning: "#ff991b",
          danger: "#fe0026",
          surprise: "#bd58fd",
          info: "#00e5ff",
        },
      },
      transparentOverlay: {
        background: {
          default: "rgba(25, 25, 25, 0.5)",
        },
      },
    },
    rawCss: `
      .sidebar .sidebar__header h1,
      .sidebar .sidebar__header h1 * {
        font-size: var(--font-size-l);
      }

      .editor .cm-nunjucks-variable {
        color: var(--color-success);
      }

      .tooltip a {
        color: var(--color-font) !important;
        text-shadow: none;
        background: transparent;
      }
    `,
  },
};
