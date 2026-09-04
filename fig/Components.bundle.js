// Components bundle — 16 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 4468:154482 Icon/General/Message_square_more
function IconGeneralMessageSquareMore(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "inherit",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18.996,
    viewBox: "0 0 20 18.996",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 3,
      width: 20,
      height: 18.996
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20 14 C 20 14.53 19.789 15.039 19.414 15.414 C 19.039 15.789 18.53 16 18 16 L 4.828 16 C 4.298 16 3.789 16.211 3.414 16.586 L 1.212 18.788 C 1.113 18.887 0.986 18.955 0.848 18.982 C 0.711 19.01 0.568 18.996 0.438 18.942 C 0.309 18.888 0.198 18.797 0.12 18.68 C 0.042 18.564 0 18.426 0 18.286 L 0 2 C 0 1.47 0.211 0.961 0.586 0.586 C 0.961 0.211 1.47 0 2 0 L 18 0 C 18.53 0 19.039 0.211 19.414 0.586 C 19.789 0.961 20 1.47 20 2 L 20 14 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10 8 L 10.01 8 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 14 8 L 14.01 8 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6 8 L 6.01 8 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 4468:154440 Icon/Navigation/Expand_down
function IconNavigationExpandDown(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--icon-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6,
      height: 12,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Vector 9"));
}

// figma node: 4677:185162 Button (78 variants)
const __venc_Button = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Button = p => "size=" + __venc_Button(p.size) + '|' + "type=" + __venc_Button(p.type) + '|' + "state=" + __venc_Button(p.state);
function Button(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "sm",
    type: _p.type ?? "primary",
    showRightIcon: _p.showRightIcon ?? true,
    showLeftIcon: _p.showLeftIcon ?? true,
    state: _p.state ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--brand-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, null)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--state-error)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, null)));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--state-error-hover)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, null)));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--background-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-disabled)",
      flexShrink: 0
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, null)));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--brand-primary-hover)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, null)));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--brand-primary-pressed)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, null)));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--brand-primary)",
      boxShadow: "inset 0 0 0 2px var(--border-focus)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, null)));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--background-primary)",
      boxShadow: "inset 0 0 0 1px var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, null)));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--background-secondary)",
      boxShadow: "inset 0 0 0 1px var(--border-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, null)));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--background-disabled)",
      boxShadow: "inset 0 0 0 1px var(--border-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-disabled)",
      flexShrink: 0
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, null)));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--background-primary)",
      boxShadow: "inset 0 0 0 1px var(--border-focus)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, null)));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 36,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, null)));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--background-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-primary-2)",
      flexShrink: 0
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, null)));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-primary-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--brand-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 36,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-disabled)",
      flexShrink: 0
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, null)));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-disabled)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      borderRadius: 8,
      backgroundColor: "var(--brand-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 20px 10px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      borderRadius: 8,
      backgroundColor: "var(--state-error)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 20px 10px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      borderRadius: 8,
      backgroundColor: "var(--state-error-hover)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 20px 10px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      borderRadius: 8,
      backgroundColor: "var(--state-error-pressed)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 20px 10px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      borderRadius: 8,
      backgroundColor: "var(--background-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 20px 10px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-disabled)",
      flexShrink: 0
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      borderRadius: 8,
      backgroundColor: "var(--brand-primary-hover)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 20px 10px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      borderRadius: 8,
      backgroundColor: "var(--brand-primary-pressed)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 20px 10px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      borderRadius: 8,
      backgroundColor: "var(--brand-primary)",
      boxShadow: "inset 0 0 0 2px var(--border-focus)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 20px 10px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      borderRadius: 8,
      backgroundColor: "var(--background-primary)",
      boxShadow: "inset 0 0 0 1px var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 20px 10px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      borderRadius: 8,
      backgroundColor: "var(--background-secondary)",
      boxShadow: "inset 0 0 0 1px var(--border-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 20px 10px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      borderRadius: 8,
      backgroundColor: "var(--background-disabled)",
      boxShadow: "inset 0 0 0 1px var(--border-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 20px 10px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-disabled)",
      flexShrink: 0
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      borderRadius: 8,
      backgroundColor: "var(--background-primary)",
      boxShadow: "inset 0 0 0 1px var(--border-focus)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 20px 10px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 20px 10px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      borderRadius: 8,
      backgroundColor: "var(--background-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 20px 10px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-primary-2)",
      flexShrink: 0
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-primary-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--brand-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 44,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 20px 10px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-disabled)",
      flexShrink: 0
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-disabled)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Medium Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 12,
      backgroundColor: "var(--brand-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 12,
      backgroundColor: "var(--state-error)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 12,
      backgroundColor: "var(--state-error-hover)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 12,
      backgroundColor: "var(--state-error-pressed)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 12,
      backgroundColor: "var(--background-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-disabled)",
      flexShrink: 0
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body42 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 12,
      backgroundColor: "var(--brand-primary-hover)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body43 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 12,
      backgroundColor: "var(--brand-primary-pressed)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body44 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 12,
      backgroundColor: "var(--brand-primary)",
      boxShadow: "inset 0 0 0 2px var(--border-focus)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body45 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 12,
      backgroundColor: "var(--background-primary)",
      boxShadow: "inset 0 0 0 1px var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body46 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 12,
      backgroundColor: "var(--background-secondary)",
      boxShadow: "inset 0 0 0 1px var(--border-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body47 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 12,
      backgroundColor: "var(--background-disabled)",
      boxShadow: "inset 0 0 0 1px var(--border-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-disabled)",
      flexShrink: 0
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body48 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 12,
      backgroundColor: "var(--background-primary)",
      boxShadow: "inset 0 0 0 1px var(--border-focus)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body49 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 12,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body50 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 12,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body51 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 12,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body52 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 12,
      backgroundColor: "var(--background-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-primary-2)",
      flexShrink: 0
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body53 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 12,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-primary-2)",
      flexShrink: 0
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body54 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 12,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-primary-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body55 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 12,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--brand-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body56 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 52,
      borderRadius: 12,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 24px 10px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-disabled)",
      flexShrink: 0
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body57 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 12,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-disabled)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Large Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })));
  const __body58 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 36,
      borderRadius: 8,
      backgroundColor: "var(--state-error-pressed)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.showLeftIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconGeneralMessageSquareMore, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Small Button"), props.showRightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconNavigationExpandDown, null)));
  const __impls = {
    // figma: Size=Small, Type=Primary, State=Default
    "size=sm|type=primary|state=default": __body0,
    // figma: Size=Small, Type=Danger, State=Default
    "size=sm|type=danger|state=default": __body1,
    // figma: Size=Small, Type=Danger, State=Hover
    "size=sm|type=danger|state=hover": __body2,
    // figma: Size=Small, Type=Danger, State=Disabled
    "size=sm|type=danger|state=disabled": __body3,
    // figma: Size=Small, Type=Primary, State=Hover
    "size=sm|type=primary|state=hover": __body4,
    // figma: Size=Small, Type=Primary, State=Pressed
    "size=sm|type=primary|state=pressed": __body5,
    // figma: Size=Small, Type=Primary, State=Disabled
    "size=sm|type=primary|state=disabled": __body3,
    // figma: Size=Small, Type=Primary, State=Focus
    "size=sm|type=primary|state=focus": __body6,
    // figma: Size=Small, Type=Secondary, State=Default
    "size=sm|type=secondary|state=default": __body7,
    // figma: Size=Small, Type=Secondary, State=Hover
    "size=sm|type=secondary|state=hover": __body8,
    // figma: Size=Small, Type=Secondary, State=Pressed
    "size=sm|type=secondary|state=pressed": __body8,
    // figma: Size=Small, Type=Secondary, State=Disabled
    "size=sm|type=secondary|state=disabled": __body9,
    // figma: Size=Small, Type=Secondary, State=Focus
    "size=sm|type=secondary|state=focus": __body10,
    // figma: Size=Small, Type=Ghost, State=Default
    "size=sm|type=ghost|state=default": __body11,
    // figma: Size=Small, Type=Text, State=Default
    "size=sm|type=text|state=default": __body12,
    // figma: Size=Small, Type=Underline, State=Default
    "size=sm|type=underline|state=default": __body12,
    // figma: Size=Small, Type=Ghost, State=Hover
    "size=sm|type=ghost|state=hover": __body13,
    // figma: Size=Small, Type=Text, State=Hover
    "size=sm|type=text|state=hover": __body14,
    // figma: Size=Small, Type=Underline, State=Hover
    "size=sm|type=underline|state=hover": __body14,
    // figma: Size=Small, Type=Ghost, State=Pressed
    "size=sm|type=ghost|state=pressed": __body13,
    // figma: Size=Small, Type=Text, State=Pressed
    "size=sm|type=text|state=pressed": __body15,
    // figma: Size=Small, Type=Underline, State=Pressed
    "size=sm|type=underline|state=pressed": __body15,
    // figma: Size=Small, Type=Ghost, State=Disabled
    "size=sm|type=ghost|state=disabled": __body16,
    // figma: Size=Small, Type=Text, State=Disabled
    "size=sm|type=text|state=disabled": __body17,
    // figma: Size=Small, Type=Underline, State=Disabled
    "size=sm|type=underline|state=disabled": __body17,
    // figma: Size=Medium, Type=Primary, State=Default
    "size=md|type=primary|state=default": __body18,
    // figma: Size=Medium, Type=Danger, State=Default
    "size=md|type=danger|state=default": __body19,
    // figma: Size=Medium, Type=Danger, State=Hover
    "size=md|type=danger|state=hover": __body20,
    // figma: Size=Medium, Type=Danger, State=Pressed
    "size=md|type=danger|state=pressed": __body21,
    // figma: Size=Medium, Type=Danger, State=Disabled
    "size=md|type=danger|state=disabled": __body22,
    // figma: Size=Medium, Type=Primary, State=Hover
    "size=md|type=primary|state=hover": __body23,
    // figma: Size=Medium, Type=Primary, State=Pressed
    "size=md|type=primary|state=pressed": __body24,
    // figma: Size=Medium, Type=Primary, State=Disabled
    "size=md|type=primary|state=disabled": __body22,
    // figma: Size=Medium, Type=Primary, State=Focus
    "size=md|type=primary|state=focus": __body25,
    // figma: Size=Medium, Type=Secondary, State=Default
    "size=md|type=secondary|state=default": __body26,
    // figma: Size=Medium, Type=Secondary, State=Hover
    "size=md|type=secondary|state=hover": __body27,
    // figma: Size=Medium, Type=Secondary, State=Pressed
    "size=md|type=secondary|state=pressed": __body27,
    // figma: Size=Medium, Type=Secondary, State=Disabled
    "size=md|type=secondary|state=disabled": __body28,
    // figma: Size=Medium, Type=Secondary, State=Focus
    "size=md|type=secondary|state=focus": __body29,
    // figma: Size=Medium, Type=Ghost, State=Default
    "size=md|type=ghost|state=default": __body30,
    // figma: Size=Medium, Type=Text, State=Default
    "size=md|type=text|state=default": __body31,
    // figma: Size=Medium, Type=Underline, State=Default
    "size=md|type=underline|state=default": __body31,
    // figma: Size=Medium, Type=Ghost, State=Hover
    "size=md|type=ghost|state=hover": __body32,
    // figma: Size=Medium, Type=Text, State=Hover
    "size=md|type=text|state=hover": __body33,
    // figma: Size=Medium, Type=Underline, State=Hover
    "size=md|type=underline|state=hover": __body33,
    // figma: Size=Medium, Type=Ghost, State=Pressed
    "size=md|type=ghost|state=pressed": __body32,
    // figma: Size=Medium, Type=Text, State=Pressed
    "size=md|type=text|state=pressed": __body34,
    // figma: Size=Medium, Type=Underline, State=Pressed
    "size=md|type=underline|state=pressed": __body34,
    // figma: Size=Medium, Type=Ghost, State=Disabled
    "size=md|type=ghost|state=disabled": __body35,
    // figma: Size=Medium, Type=Text, State=Disabled
    "size=md|type=text|state=disabled": __body36,
    // figma: Size=Medium, Type=Underline, State=Disabled
    "size=md|type=underline|state=disabled": __body36,
    // figma: Size=Large, Type=Primary, State=Default
    "size=lg|type=primary|state=default": __body37,
    // figma: Size=Large, Type=Danger, State=Default
    "size=lg|type=danger|state=default": __body38,
    // figma: Size=Large, Type=Danger, State=Hover
    "size=lg|type=danger|state=hover": __body39,
    // figma: Size=Large, Type=Danger, State=Pressed
    "size=lg|type=danger|state=pressed": __body40,
    // figma: Size=Large, Type=Danger, State=Disabled
    "size=lg|type=danger|state=disabled": __body41,
    // figma: Size=Large, Type=Primary, State=Hover
    "size=lg|type=primary|state=hover": __body42,
    // figma: Size=Large, Type=Primary, State=Pressed
    "size=lg|type=primary|state=pressed": __body43,
    // figma: Size=Large, Type=Primary, State=Disabled
    "size=lg|type=primary|state=disabled": __body41,
    // figma: Size=Large, Type=Primary, State=Focus
    "size=lg|type=primary|state=focus": __body44,
    // figma: Size=Large, Type=Secondary, State=Default
    "size=lg|type=secondary|state=default": __body45,
    // figma: Size=Large, Type=Secondary, State=Hover
    "size=lg|type=secondary|state=hover": __body46,
    // figma: Size=Large, Type=Secondary, State=Pressed
    "size=lg|type=secondary|state=pressed": __body46,
    // figma: Size=Large, Type=Secondary, State=Disabled
    "size=lg|type=secondary|state=disabled": __body47,
    // figma: Size=Large, Type=Secondary, State=Focus
    "size=lg|type=secondary|state=focus": __body48,
    // figma: Size=Large, Type=Ghost, State=Default
    "size=lg|type=ghost|state=default": __body49,
    // figma: Size=Large, Type=Text, State=Default
    "size=lg|type=text|state=default": __body50,
    // figma: Size=Large, Type=Underline, State=Default
    "size=lg|type=underline|state=default": __body51,
    // figma: Size=Large, Type=Ghost, State=Hover
    "size=lg|type=ghost|state=hover": __body52,
    // figma: Size=Large, Type=Text, State=Hover
    "size=lg|type=text|state=hover": __body53,
    // figma: Size=Large, Type=Underline, State=Hover
    "size=lg|type=underline|state=hover": __body54,
    // figma: Size=Large, Type=Ghost, State=Pressed
    "size=lg|type=ghost|state=pressed": __body52,
    // figma: Size=Large, Type=Text, State=Pressed
    "size=lg|type=text|state=pressed": __body55,
    // figma: Size=Large, Type=Underline, State=Pressed
    "size=lg|type=underline|state=pressed": __body55,
    // figma: Size=Large, Type=Ghost, State=Disabled
    "size=lg|type=ghost|state=disabled": __body56,
    // figma: Size=Large, Type=Text, State=Disabled
    "size=lg|type=text|state=disabled": __body57,
    // figma: Size=Large, Type=Underline, State=Disabled
    "size=lg|type=underline|state=disabled": __body57,
    // figma: Size=Small, Type=Danger, State=Pressed
    "size=sm|type=danger|state=pressed": __body58
  };
  return (__impls[__vkey_Button(props)] ?? __body0)();
}

// figma node: 4887:1697 자동저장 (4 variants)
const __venc_Component2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Component2 = p => "state=" + __venc_Component2(p.state);
function Component2(_p = {}) {
  const props = {
    ..._p,
    leftIcon: _p.leftIcon ?? false,
    state: _p.state ?? "default",
    rightIcon: _p.rightIcon ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-disabled)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "09 : 57 : 00 자동저장"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-disabled)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "저장 중"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-disabled)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "-- : -- : -- 자동저장"));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--state-error)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "저장 안 됨"));
  const __impls = {
    // figma: State=Saved
    "state=saved": __body0,
    // figma: State=ing
    "state=ing": __body1,
    // figma: State=Default
    "state=default": __body2,
    // figma: State=Error
    "state=error": __body3
  };
  return (__impls[__vkey_Component2(props)] ?? __body2)();
}

// figma node: 4788:122 Icon/Action/Pen
function IconActionPen(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "inherit",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 6C14.0005 5.78874 13.9592 5.57947 13.8784 5.38427C13.7976 5.18906 13.679 5.01179 13.5293 4.86267L11.1373 2.47067C10.9882 2.32102 10.8109 2.20238 10.6157 2.12159C10.4205 2.04081 10.2113 1.99949 10 2M14 6V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33334C2 2.97972 2.14048 2.64058 2.39052 2.39053C2.64057 2.14048 2.97971 2 3.33333 2H10M14 6L10.6667 6C10.4899 6 10.3203 5.92976 10.1953 5.80474C10.0702 5.67971 10 5.51014 10 5.33333V2",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

// figma node: 4468:154830 Icon/Custom/Clock
function IconCustomClock(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "inherit",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 5V10H13.3333M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

// figma node: 4858:221 Manuscrpt cell (4 variants)
const __venc_ManuscrptCell = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ManuscrptCell = p => "state=" + __venc_ManuscrptCell(p.state);
function ManuscrptCell(_p = {}) {
  const props = {
    ..._p,
    text: _p.text ?? false,
    state: _p.state ?? "empty"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 27,
      height: 27,
      backgroundColor: "var(--background-primary)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "2px 6px 1px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  });
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 27,
      height: 27,
      backgroundColor: "var(--background-primary)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "2px 6px 1px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "가"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 27,
      height: 27,
      backgroundColor: "var(--background-primary)",
      boxShadow: "inset 0 0 0 1px var(--border-focus)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "2px 6px 1px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "가"));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 27,
      height: 27,
      backgroundColor: "var(--state-error-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "2px 6px 1px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "가"));
  const __impls = {
    // figma: State=Empty
    "state=empty": __body0,
    // figma: State=Filled
    "state=filled": __body1,
    // figma: State=Focus
    "state=focus": __body2,
    // figma: State=Over-limit
    "state=over-limit": __body3
  };
  return (__impls[__vkey_ManuscrptCell(props)] ?? __body0)();
}

// figma node: 4887:1714 Memo list (3 variants)
const __venc_MemoList = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_MemoList = p => "state=" + __venc_MemoList(p.state);
function MemoList(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "memo_default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 778,
      borderRadius: 12,
      backgroundColor: "var(--background-primary)",
      boxShadow: "inset 0 0 0 1px var(--border-primary)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 20px 12px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--brand-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 669,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 700,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", { style: { position: "absolute", left: 0, top: 0, width: 18, height: 1, backgroundColor: "rgb(229,231,235)" } }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, props.text1 ?? "“예절을 높이고 착한 것을 밝혀서 사나운 마음과 쟁탈하는 기운을 이겨내도록 가르쳤다.”")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 700,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text2 ?? "개인 자유 최우선 → (나)의 공동체 우선 관점과 대조해서 쓸 것"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 29,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Button, {
    text1: "편집",
    size: "sm",
    type: "text",
    state: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 29,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 9.498,
    viewBox: "0 0 10 9.498",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1.5,
      width: 10,
      height: 9.498,
      color: "var(--icon-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.414 8 L 2.414 7.5 L 2.414 7.5 L 2.414 8 Z M 1.707 8.293 L 2.061 8.647 L 2.061 8.647 L 1.707 8.293 Z M 0.606 9.394 L 0.96 9.748 L 0.96 9.748 L 0.606 9.394 Z M 0 9.143 L -0.5 9.143 L -0.5 9.143 L 0 9.143 Z M 1 0 L 1 -0.5 L 1 0 Z M 9 0 L 9 -0.5 L 9 0 Z M 5 3.5 C 4.724 3.5 4.5 3.724 4.5 4 C 4.5 4.276 4.724 4.5 5 4.5 L 5 4 L 5 3.5 Z M 5.005 4.5 C 5.281 4.5 5.505 4.276 5.505 4 C 5.505 3.724 5.281 3.5 5.005 3.5 L 5.005 4 L 5.005 4.5 Z M 7 3.5 C 6.724 3.5 6.5 3.724 6.5 4 C 6.5 4.276 6.724 4.5 7 4.5 L 7 4 L 7 3.5 Z M 7.005 4.5 C 7.281 4.5 7.505 4.276 7.505 4 C 7.505 3.724 7.281 3.5 7.005 3.5 L 7.005 4 L 7.005 4.5 Z M 3 3.5 C 2.724 3.5 2.5 3.724 2.5 4 C 2.5 4.276 2.724 4.5 3 4.5 L 3 4 L 3 3.5 Z M 3.005 4.5 C 3.281 4.5 3.505 4.276 3.505 4 C 3.505 3.724 3.281 3.5 3.005 3.5 L 3.005 4 L 3.005 4.5 Z M 10 7 L 9.5 7 C 9.5 7.133 9.447 7.26 9.354 7.354 L 9.707 7.707 L 10.061 8.061 C 10.342 7.779 10.5 7.398 10.5 7 L 10 7 Z M 9.707 7.707 L 9.354 7.354 C 9.26 7.447 9.133 7.5 9 7.5 L 9 8 L 9 8.5 C 9.398 8.5 9.779 8.342 10.061 8.061 L 9.707 7.707 Z M 9 8 L 9 7.5 L 2.414 7.5 L 2.414 8 L 2.414 8.5 L 9 8.5 L 9 8 Z M 2.414 8 L 2.414 7.5 C 2.016 7.5 1.635 7.658 1.353 7.94 L 1.707 8.293 L 2.061 8.647 C 2.154 8.553 2.282 8.5 2.414 8.5 L 2.414 8 Z M 1.707 8.293 L 1.353 7.939 L 0.252 9.04 L 0.606 9.394 L 0.96 9.748 L 2.061 8.647 L 1.707 8.293 Z M 0.606 9.394 L 0.252 9.04 C 0.273 9.02 0.299 9.006 0.327 9.001 L 0.424 9.491 L 0.522 9.982 C 0.688 9.949 0.84 9.867 0.96 9.748 L 0.606 9.394 Z M 0.424 9.491 L 0.327 9.001 C 0.355 8.995 0.384 8.998 0.41 9.009 L 0.219 9.471 L 0.028 9.933 C 0.184 9.998 0.356 10.015 0.522 9.982 L 0.424 9.491 Z M 0.219 9.471 L 0.41 9.009 C 0.437 9.02 0.46 9.039 0.476 9.062 L 0.06 9.34 L -0.356 9.618 C -0.262 9.759 -0.128 9.868 0.028 9.933 L 0.219 9.471 Z M 0.06 9.34 L 0.476 9.062 C 0.491 9.086 0.5 9.114 0.5 9.143 L 0 9.143 L -0.5 9.143 C -0.5 9.312 -0.45 9.477 -0.356 9.618 L 0.06 9.34 Z M 0 9.143 L 0.5 9.143 L 0.5 1 L 0 1 L -0.5 1 L -0.5 9.143 L 0 9.143 Z M 0 1 L 0.5 1 C 0.5 0.867 0.553 0.74 0.646 0.646 L 0.293 0.293 L -0.061 -0.061 C -0.342 0.221 -0.5 0.602 -0.5 1 L 0 1 Z M 0.293 0.293 L 0.646 0.646 C 0.74 0.553 0.867 0.5 1 0.5 L 1 0 L 1 -0.5 C 0.602 -0.5 0.221 -0.342 -0.061 -0.061 L 0.293 0.293 Z M 1 0 L 1 0.5 L 9 0.5 L 9 0 L 9 -0.5 L 1 -0.5 L 1 0 Z M 9 0 L 9 0.5 C 9.133 0.5 9.26 0.553 9.354 0.646 L 9.707 0.293 L 10.061 -0.061 C 9.779 -0.342 9.398 -0.5 9 -0.5 L 9 0 Z M 9.707 0.293 L 9.354 0.646 C 9.447 0.74 9.5 0.867 9.5 1 L 10 1 L 10.5 1 C 10.5 0.602 10.342 0.221 10.061 -0.061 L 9.707 0.293 Z M 10 1 L 9.5 1 L 9.5 7 L 10 7 L 10.5 7 L 10.5 1 L 10 1 Z M 5 4 L 5 4.5 L 5.005 4.5 L 5.005 4 L 5.005 3.5 L 5 3.5 L 5 4 Z M 7 4 L 7 4.5 L 7.005 4.5 L 7.005 4 L 7.005 3.5 L 7 3.5 L 7 4 Z M 3 4 L 3 4.5 L 3.005 4.5 L 3.005 4 L 3.005 3.5 L 3 3.5 L 3 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, "\uC0AD\uC81C"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,-1,0,9,7.500)",
      transformOrigin: "0 0",
      width: 3,
      height: 6,
      borderRadius: 2,
      color: "var(--icon-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.354 0.354 C 3.549 0.158 3.549 -0.158 3.354 -0.354 C 3.158 -0.549 2.842 -0.549 2.646 -0.354 L 3 0 L 3.354 0.354 Z M 0 3 L -0.354 2.646 C -0.549 2.842 -0.549 3.158 -0.354 3.354 L 0 3 Z M 2.646 6.354 C 2.842 6.549 3.158 6.549 3.354 6.354 C 3.549 6.158 3.549 5.842 3.354 5.646 L 3 6 L 2.646 6.354 Z M 3 0 L 2.646 -0.354 L -0.354 2.646 L 0 3 L 0.354 3.354 L 3.354 0.354 L 3 0 Z M 0 3 L -0.354 3.354 L 2.646 6.354 L 3 6 L 3.354 5.646 L 0.354 2.646 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 778,
      borderRadius: 12,
      backgroundColor: "var(--background-primary)",
      boxShadow: "inset 0 0 0 1px var(--border-primary)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 20px 12px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--brand-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 669,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 700,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", { style: { position: "absolute", left: 0, top: 0, width: 18, height: 1, backgroundColor: "rgb(229,231,235)" } }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, props.text1 ?? "“예절을 높이고 착한 것을 밝혀서 사나운 마음과 쟁탈하는 기운을 이겨내도록 가르쳤다.”"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 29,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 9.498,
    viewBox: "0 0 10 9.498",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1.5,
      width: 10,
      height: 9.498,
      color: "var(--icon-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.414 8 L 2.414 7.5 L 2.414 7.5 L 2.414 8 Z M 1.707 8.293 L 2.061 8.647 L 2.061 8.647 L 1.707 8.293 Z M 0.606 9.394 L 0.96 9.748 L 0.96 9.748 L 0.606 9.394 Z M 0 9.143 L -0.5 9.143 L -0.5 9.143 L 0 9.143 Z M 1 0 L 1 -0.5 L 1 0 Z M 9 0 L 9 -0.5 L 9 0 Z M 5 3.5 C 4.724 3.5 4.5 3.724 4.5 4 C 4.5 4.276 4.724 4.5 5 4.5 L 5 4 L 5 3.5 Z M 5.005 4.5 C 5.281 4.5 5.505 4.276 5.505 4 C 5.505 3.724 5.281 3.5 5.005 3.5 L 5.005 4 L 5.005 4.5 Z M 7 3.5 C 6.724 3.5 6.5 3.724 6.5 4 C 6.5 4.276 6.724 4.5 7 4.5 L 7 4 L 7 3.5 Z M 7.005 4.5 C 7.281 4.5 7.505 4.276 7.505 4 C 7.505 3.724 7.281 3.5 7.005 3.5 L 7.005 4 L 7.005 4.5 Z M 3 3.5 C 2.724 3.5 2.5 3.724 2.5 4 C 2.5 4.276 2.724 4.5 3 4.5 L 3 4 L 3 3.5 Z M 3.005 4.5 C 3.281 4.5 3.505 4.276 3.505 4 C 3.505 3.724 3.281 3.5 3.005 3.5 L 3.005 4 L 3.005 4.5 Z M 10 7 L 9.5 7 C 9.5 7.133 9.447 7.26 9.354 7.354 L 9.707 7.707 L 10.061 8.061 C 10.342 7.779 10.5 7.398 10.5 7 L 10 7 Z M 9.707 7.707 L 9.354 7.354 C 9.26 7.447 9.133 7.5 9 7.5 L 9 8 L 9 8.5 C 9.398 8.5 9.779 8.342 10.061 8.061 L 9.707 7.707 Z M 9 8 L 9 7.5 L 2.414 7.5 L 2.414 8 L 2.414 8.5 L 9 8.5 L 9 8 Z M 2.414 8 L 2.414 7.5 C 2.016 7.5 1.635 7.658 1.353 7.94 L 1.707 8.293 L 2.061 8.647 C 2.154 8.553 2.282 8.5 2.414 8.5 L 2.414 8 Z M 1.707 8.293 L 1.353 7.939 L 0.252 9.04 L 0.606 9.394 L 0.96 9.748 L 2.061 8.647 L 1.707 8.293 Z M 0.606 9.394 L 0.252 9.04 C 0.273 9.02 0.299 9.006 0.327 9.001 L 0.424 9.491 L 0.522 9.982 C 0.688 9.949 0.84 9.867 0.96 9.748 L 0.606 9.394 Z M 0.424 9.491 L 0.327 9.001 C 0.355 8.995 0.384 8.998 0.41 9.009 L 0.219 9.471 L 0.028 9.933 C 0.184 9.998 0.356 10.015 0.522 9.982 L 0.424 9.491 Z M 0.219 9.471 L 0.41 9.009 C 0.437 9.02 0.46 9.039 0.476 9.062 L 0.06 9.34 L -0.356 9.618 C -0.262 9.759 -0.128 9.868 0.028 9.933 L 0.219 9.471 Z M 0.06 9.34 L 0.476 9.062 C 0.491 9.086 0.5 9.114 0.5 9.143 L 0 9.143 L -0.5 9.143 C -0.5 9.312 -0.45 9.477 -0.356 9.618 L 0.06 9.34 Z M 0 9.143 L 0.5 9.143 L 0.5 1 L 0 1 L -0.5 1 L -0.5 9.143 L 0 9.143 Z M 0 1 L 0.5 1 C 0.5 0.867 0.553 0.74 0.646 0.646 L 0.293 0.293 L -0.061 -0.061 C -0.342 0.221 -0.5 0.602 -0.5 1 L 0 1 Z M 0.293 0.293 L 0.646 0.646 C 0.74 0.553 0.867 0.5 1 0.5 L 1 0 L 1 -0.5 C 0.602 -0.5 0.221 -0.342 -0.061 -0.061 L 0.293 0.293 Z M 1 0 L 1 0.5 L 9 0.5 L 9 0 L 9 -0.5 L 1 -0.5 L 1 0 Z M 9 0 L 9 0.5 C 9.133 0.5 9.26 0.553 9.354 0.646 L 9.707 0.293 L 10.061 -0.061 C 9.779 -0.342 9.398 -0.5 9 -0.5 L 9 0 Z M 9.707 0.293 L 9.354 0.646 C 9.447 0.74 9.5 0.867 9.5 1 L 10 1 L 10.5 1 C 10.5 0.602 10.342 0.221 10.061 -0.061 L 9.707 0.293 Z M 10 1 L 9.5 1 L 9.5 7 L 10 7 L 10.5 7 L 10.5 1 L 10 1 Z M 5 4 L 5 4.5 L 5.005 4.5 L 5.005 4 L 5.005 3.5 L 5 3.5 L 5 4 Z M 7 4 L 7 4.5 L 7.005 4.5 L 7.005 4 L 7.005 3.5 L 7 3.5 L 7 4 Z M 3 4 L 3 4.5 L 3.005 4.5 L 3.005 4 L 3.005 3.5 L 3 3.5 L 3 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "rgb(75,85,99)",
      flexShrink: 0
    }
  }, "\uC0AD\uC81C"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,-1,0,9,7.500)",
      transformOrigin: "0 0",
      width: 3,
      height: 6,
      borderRadius: 2,
      color: "var(--icon-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.354 0.354 C 3.549 0.158 3.549 -0.158 3.354 -0.354 C 3.158 -0.549 2.842 -0.549 2.646 -0.354 L 3 0 L 3.354 0.354 Z M 0 3 L -0.354 2.646 C -0.549 2.842 -0.549 3.158 -0.354 3.354 L 0 3 Z M 2.646 6.354 C 2.842 6.549 3.158 6.549 3.354 6.354 C 3.549 6.158 3.549 5.842 3.354 5.646 L 3 6 L 2.646 6.354 Z M 3 0 L 2.646 -0.354 L -0.354 2.646 L 0 3 L 0.354 3.354 L 3.354 0.354 L 3 0 Z M 0 3 L -0.354 3.354 L 2.646 6.354 L 3 6 L 3.354 5.646 L 0.354 2.646 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 778,
      borderRadius: 12,
      backgroundColor: "var(--background-primary)",
      boxShadow: "inset 0 0 0 1px var(--border-primary)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 20px 12px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--brand-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 669,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 700,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", { style: { position: "absolute", left: 0, top: 0, width: 18, height: 1, backgroundColor: "rgb(229,231,235)" } }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, props.text1 ?? "“예절을 높이고 착한 것을 밝혀서 사나운 마음과 쟁탈하는 기운을 이겨내도록 가르쳤다.”")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "var(--background-primary)",
      boxShadow: "inset 0 0 0 1px var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.600000023841858,
      color: "var(--text-secondary)",
      flexGrow: 1
    }
  }, props.text2 ?? "개인 자유 최우선 → (나)의 공동체 우선 관점과 대조해서 쓸 것")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      width: 70,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Button, {
    text1: "취소",
    size: "sm",
    type: "secondary",
    state: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 36,
      width: 70,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Button, {
    text1: "저장",
    size: "sm",
    type: "primary",
    state: "default"
  }))))));
  const __impls = {
    // figma: State=Memo_default
    "state=memo_default": __body0,
    // figma: State=Memo_x
    "state=memo_x": __body1,
    // figma: State=Memo_edit
    "state=memo_edit": __body2
  };
  return (__impls[__vkey_MemoList(props)] ?? __body0)();
}

// figma node: 4887:1747 Reading Area (2 variants)
const __venc_ReadingArea = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ReadingArea = p => "state=" + __venc_ReadingArea(p.state);
function ReadingArea(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 840,
      height: 759,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--border-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      borderRadius: "12px 12px 0px 0px",
      backgroundColor: "var(--background-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 30px 0px 30px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text1 ?? "<제시문>"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 127,
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 16,
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconActionMinus, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text2 ?? "100%"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 16,
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconActionPlus, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  })))), /*#__PURE__*/React.createElement("div", { style: { position: "absolute", left: 0, top: 0, width: 18, height: 1, backgroundColor: "rgb(229,231,235)" } }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 16,
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconActionPen, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "0px 0px 12px 12px",
      backgroundColor: "var(--background-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "50px 50px 50px 50px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.600000023841858,
      color: "var(--text-primary-2)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, props.text3 ?? "(가) 인간은 스스로 판단하고 선택할 때 비로소 자신의 삶의 주인이 된다. 타인에게 해를 끼치지 않는 한, 개인의 사상과 행동은 어떠한 간섭으로부터도 자유로워야 한다. 사회가 개인의 선택을 대신해 주려는 순간, 그 사회는 구성원을 성숙한 인격체가 아니라 보호와 교정의 대상으로 격하시킨다. 다수가 옳다고 믿는 관행이라 할지라도 그것이 개인에게 강제되는 순간 진리를 향한 토론의 가능성은 닫히고 만다.\n개별성의 발휘야말로 사회가 진보하는 유일한 원천이다. 관습이 명하는 대로만 사는 사람은 선택이라는 인간 고유의 능력을 사용하지 않는 것이며, 그러한 삶이 아무리 안전해 보일지라도 그것은 모방이지 삶이 아니다. 따라서 좋은 사회란 서로 다른 삶의 실험이 최대한 허용되는 사회이다.\n\n(나) 개인은 홀로 존재하지 않는다. 우리가 무엇을 원하고 무엇을 옳다고 여기는지조차 공동체가 물려준 언어와 서사 속에서 형성된다. 자아는 공동체에 앞서 완성된 채로 주어지는 것이 아니라, 가족과 이웃, 동료 시민과 맺는 관계 속에서 비로소 구성된다. 따라서 공동체의 요청으로부터 완전히 분리된 '무연고적 자아'란 철학적 허구에 지나지 않는다.\n권리의 언어만으로는 좋은 삶을 설명할 수 없다. 시민적 덕성, 곧 공동선에 대한 헌신과 서로에 대한 책임이 뒷받침되지 않는 자유는 고립과 무관심으로 귀결된다. 공동체가 개인에게 부과하는 의무는 자유의 제약이 아니라, 개인이 의미 있는 삶을 살아가기 위한 조건이다.\n\n(다) A시는 도심의 오래된 골목 상권이 관광지로 알려지면서 소음과 쓰레기 문제로 몸살을 앓자, 주민 투표를 거쳐 야간 영업시간을 제한하는 조례를 제정하였다. 상인 일부는 \"영업의 자유에 대한 과도한 침해\"라며 반발했지만, 다수 주민은 \"마을의 삶을 지키기 위한 최소한의 약속\"이라며 찬성하였다. 조례 시행 후 관광객은 줄었으나 주민 만족도는 크게 높아졌고, 일부 상인은 매출 감소를 이유로 조례 폐지를 청구하는 소송을 제기하였다.\n\n(라) 인간은 스스로 판단하고 선택할 때 비로소 자신의 삶의 주인이 된다. 타인에게 해를 끼치지 않는 한, 개인의 사상과 행동은 어떠한 간섭으로부터도 자유로워야 한다. 사회가 개인의 선택을 대신해 주려는 순간, 그 사회는 구성원을 성숙한 인격체가 아니라 보호와 교정의 대상으로 격하시킨다. 다수가 옳다고 믿는 관행이라 할지라도 그것이 개인에게 강제되는 순간 진리를 향한 토론의 가능성은 닫히고 만다.\n개별성의 발휘야말로 사회가 진보하는 유일한 원천이다. 관습이 명하는 대로만 사는 사람은 선택이라는 인간 고유의 능력을 사용하지 않는 것이며, 그러한 삶이 아무리 안전해 보일지라도 그것은 모방이지 삶이 아니다. 따라서 좋은 사회란 서로 다른 삶의 실험이 최대한 허용되는 사회이다.")));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 840,
      height: 759,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--border-primary)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      borderRadius: "12px 12px 0px 0px",
      backgroundColor: "var(--background-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 30px 0px 30px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text1 ?? "<제시문>"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 127,
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 16,
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconActionMinus, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text2 ?? "100%"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 16,
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconActionPlus, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  })))), /*#__PURE__*/React.createElement("div", { style: { position: "absolute", left: 0, top: 0, width: 18, height: 1, backgroundColor: "rgb(229,231,235)" } }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 16,
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconActionPen, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      backgroundColor: "var(--background-secondary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 30px 0px 30px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "pre-wrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, "메모 목록 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(0,139,72)"
    }
  }, "(3)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 160,
      overflow: "hidden",
      backgroundColor: "var(--background-secondary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 30px 12px 30px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(MemoList, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "memo_default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(MemoList, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "memo_x"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "0px 0px 12px 12px",
      backgroundColor: "var(--background-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "50px 50px 50px 50px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.600000023841858,
      color: "var(--text-primary-2)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, props.text3 ?? "(가) 인간은 스스로 판단하고 선택할 때 비로소 자신의 삶의 주인이 된다. 타인에게 해를 끼치지 않는 한, 개인의 사상과 행동은 어떠한 간섭으로부터도 자유로워야 한다. 사회가 개인의 선택을 대신해 주려는 순간, 그 사회는 구성원을 성숙한 인격체가 아니라 보호와 교정의 대상으로 격하시킨다. 다수가 옳다고 믿는 관행이라 할지라도 그것이 개인에게 강제되는 순간 진리를 향한 토론의 가능성은 닫히고 만다.\n개별성의 발휘야말로 사회가 진보하는 유일한 원천이다. 관습이 명하는 대로만 사는 사람은 선택이라는 인간 고유의 능력을 사용하지 않는 것이며, 그러한 삶이 아무리 안전해 보일지라도 그것은 모방이지 삶이 아니다. 따라서 좋은 사회란 서로 다른 삶의 실험이 최대한 허용되는 사회이다.\n\n(나) 개인은 홀로 존재하지 않는다. 우리가 무엇을 원하고 무엇을 옳다고 여기는지조차 공동체가 물려준 언어와 서사 속에서 형성된다. 자아는 공동체에 앞서 완성된 채로 주어지는 것이 아니라, 가족과 이웃, 동료 시민과 맺는 관계 속에서 비로소 구성된다. 따라서 공동체의 요청으로부터 완전히 분리된 '무연고적 자아'란 철학적 허구에 지나지 않는다.\n권리의 언어만으로는 좋은 삶을 설명할 수 없다. 시민적 덕성, 곧 공동선에 대한 헌신과 서로에 대한 책임이 뒷받침되지 않는 자유는 고립과 무관심으로 귀결된다. 공동체가 개인에게 부과하는 의무는 자유의 제약이 아니라, 개인이 의미 있는 삶을 살아가기 위한 조건이다.\n\n(다) A시는 도심의 오래된 골목 상권이 관광지로 알려지면서 소음과 쓰레기 문제로 몸살을 앓자, 주민 투표를 거쳐 야간 영업시간을 제한하는 조례를 제정하였다. 상인 일부는 \"영업의 자유에 대한 과도한 침해\"라며 반발했지만, 다수 주민은 \"마을의 삶을 지키기 위한 최소한의 약속\"이라며 찬성하였다. 조례 시행 후 관광객은 줄었으나 주민 만족도는 크게 높아졌고, 일부 상인은 매출 감소를 이유로 조례 폐지를 청구하는 소송을 제기하였다.\n\n(라) 인간은 스스로 판단하고 선택할 때 비로소 자신의 삶의 주인이 된다. 타인에게 해를 끼치지 않는 한, 개인의 사상과 행동은 어떠한 간섭으로부터도 자유로워야 한다. 사회가 개인의 선택을 대신해 주려는 순간, 그 사회는 구성원을 성숙한 인격체가 아니라 보호와 교정의 대상으로 격하시킨다. 다수가 옳다고 믿는 관행이라 할지라도 그것이 개인에게 강제되는 순간 진리를 향한 토론의 가능성은 닫히고 만다.\n개별성의 발휘야말로 사회가 진보하는 유일한 원천이다. 관습이 명하는 대로만 사는 사람은 선택이라는 인간 고유의 능력을 사용하지 않는 것이며, 그러한 삶이 아무리 안전해 보일지라도 그것은 모방이지 삶이 아니다. 따라서 좋은 사회란 서로 다른 삶의 실험이 최대한 허용되는 사회이다.")));
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Open
    "state=open": __body1
  };
  return (__impls[__vkey_ReadingArea(props)] ?? __body0)();
}

// figma node: 4858:237 Text_Nav (3 variants)
const __venc_TextNav = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_TextNav = p => "state=" + __venc_TextNav(p.state);
function TextNav(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 120,
      height: 44,
      backgroundColor: "var(--background-secondary)",
      borderTop: "1px solid var(--background-secondary)",
      borderRight: "1px solid var(--background-secondary)",
      borderBottom: "3px solid var(--background-secondary)",
      borderLeft: "1px solid var(--background-secondary)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-brand)",
      flexShrink: 0
    }
  }, props.text1 ?? "문제 1-1"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 120,
      height: 44,
      backgroundColor: "var(--background-secondary)",
      borderTop: "1px solid var(--background-secondary)",
      borderRight: "1px solid var(--background-secondary)",
      borderBottom: "3px solid var(--background-secondary)",
      borderLeft: "1px solid var(--background-secondary)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text1 ?? "문제 1-1"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 120,
      height: 44,
      backgroundColor: "var(--background-disabled)",
      borderTop: "1px solid var(--background-tertiary)",
      borderRight: "1px solid var(--background-tertiary)",
      borderBottom: "1px solid var(--background-tertiary)",
      borderLeft: "1px solid var(--background-tertiary)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-disabled)",
      flexShrink: 0
    }
  }, props.text1 ?? "문제 1-2"));
  const __impls = {
    // figma: State=Pressed
    "state=pressed": __body0,
    // figma: State=Hover
    "state=hover": __body1,
    // figma: State=Default
    "state=default": __body2
  };
  return (__impls[__vkey_TextNav(props)] ?? __body2)();
}

// figma node: 4912:6697 응시중_Default
function Default(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      height: 1080,
      overflow: "hidden",
      backgroundColor: "var(--background-secondary)",
      boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 610,
      height: 76,
      backgroundColor: "var(--background-primary)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 40px 0px 40px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8.523077964782715,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 23.436,
      height: 31.962,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11.717,
      top: 0,
      width: 11.719,
      height: 31.962,
      borderRadius: "1064.319px 1064.319px 0px 0px",
      backgroundColor: "rgb(0,139,72)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.719,
      height: 31.962,
      borderRadius: "1064.319px 1064.319px 0px 0px",
      backgroundColor: "rgb(181,232,42)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0.002,
      top: 0,
      width: 11.72,
      height: 31.962,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Intersect")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "SUIT, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 24,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "-0.010em",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "\uB17C\uC232"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 700,
      height: 76,
      backgroundColor: "var(--background-primary)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 10px 0px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 20,
      textAlign: "center",
      lineHeight: 1.5,
      color: "var(--text-primary-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "2026\uD559\uB144\uB3C4 \uC219\uBA85\uC5EC\uB300 \uBAA8\uC758\uB17C\uC220 v3"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      lineHeight: 1.5,
      color: "var(--text-tertiary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uAE30\uCD9C\uBCC0\uD615 / 2026\uB144 / \uC219\uBA85\uC5EC\uC790\uB300\uD559\uAD50"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 610,
      height: 76,
      backgroundColor: "var(--background-primary)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 40px 0px 0px",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 103,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Component2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    state: "default"
  }), /*#__PURE__*/React.createElement("div", { style: { position: "absolute", left: 0, top: 0, width: 8, height: 1, backgroundColor: "rgb(229,231,235)" } })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 140.862,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4.861538410186768,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconCustomClock, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 17.015384674072266,
      whiteSpace: "nowrap",
      lineHeight: 1.600000023841858,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, "01 : 40 : 00")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconActionPen, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      height: 44,
      width: 77,
      flexShrink: 0
    },
    text1: "나가기",
    size: "md",
    type: "secondary",
    state: "default"
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      height: 44,
      width: 92,
      flexShrink: 0
    },
    text1: "답안 제출",
    size: "md",
    type: "primary",
    state: "default"
  })))))), /*#__PURE__*/React.createElement("div", { style: { position: "absolute", left: 0, top: 0, width: 60, height: 1, backgroundColor: "rgb(229,231,235)" } }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30,
      top: 150,
      width: 840,
      borderRadius: 12,
      backgroundColor: "var(--background-primary)",
      boxShadow: "inset 0 0 0 1px var(--border-primary)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 30px 0px 30px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "28px 0px 28px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 20,
      lineHeight: 1.5,
      color: "var(--text-primary-2)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uC81C\uC2DC\uBB38 (\uAC00)\uC640 (\uB098)\uC758 \uAD00\uC810\uC744 \uC885\uD569\uD558\uC5EC, \uBC14\uB78C\uC9C1\uD55C \uACF5\uB3D9\uCCB4\uC758 \uC870\uAC74\uC744 \uB17C\uD558\uC2DC\uC624."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.5,
      color: "var(--text-tertiary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "100\uC810")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 891,
      top: 150,
      width: 1001,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      borderRadius: "12px 12px 0px 0px",
      backgroundColor: "var(--background-primary)",
      boxShadow: "inset 0 0 0 1px var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 30px 0px 30px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, "1-1 \uB2F5\uC548\uC9C0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, "6\uC790 (\uC801\uC815 800\uC790 ~ 1200\uC790)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 791,
      backgroundColor: "var(--background-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "column",
      padding: "10px 10px 10px 10px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--background-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    text1: "안",
    state: "filled"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    text1: "녕",
    state: "filled"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    text1: "ha",
    state: "filled"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    text1: "se",
    state: "filled"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    text1: "요",
    state: "filled"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    text1: "12",
    state: "filled"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--border-primary)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "empty"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--background-primary)",
      borderTop: "1px solid var(--error-300)",
      borderRight: "1px solid var(--error-300)",
      borderBottom: "1px solid var(--error-300)",
      borderLeft: "1px solid var(--error-300)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--error-300)",
      borderTop: "1px solid var(--error-300)",
      borderRight: "1px solid var(--error-300)",
      borderBottom: "1px solid var(--error-300)",
      borderLeft: "1px solid var(--error-300)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--error-300)",
      borderTop: "1px solid var(--error-300)",
      borderRight: "1px solid var(--error-300)",
      borderBottom: "1px solid var(--error-300)",
      borderLeft: "1px solid var(--error-300)",
      display: "flex",
      flexDirection: "row",
      gap: 1,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }), /*#__PURE__*/React.createElement(ManuscrptCell, {
    style: {
      position: "relative",
      width: 27,
      height: 27,
      flexShrink: 0
    },
    state: "over-limit"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      borderRadius: "0px 0px 12px 12px",
      backgroundColor: "var(--background-primary)",
      boxShadow: "inset 0 0 0 1px var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 30px 0px 30px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 159,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 159,
      height: 20,
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "rgb(107,114,128)"
    }
  }, "\uCD5C\uC18C 401\uC790 \uB354 \uC785\uB825\uD574\uC8FC\uC138\uC694.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 209,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, "35\uC790 x 20\uD589"), /*#__PURE__*/React.createElement("div", { style: { position: "absolute", left: 0, top: 0, width: 18, height: 1, backgroundColor: "rgb(229,231,235)" } }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: 1.399999976158142,
      color: "var(--state-error)",
      flexShrink: 0
    }
  }, "\uCD08\uACFC \uC785\uB825 \uAC00\uB2A5 +2\uC904")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 76,
      width: 1920,
      height: 44,
      backgroundColor: "var(--background-disabled)",
      borderTop: "1px solid var(--border-primary)",
      borderRight: "1px solid var(--border-primary)",
      borderBottom: "1px solid var(--border-primary)",
      borderLeft: "1px solid var(--border-primary)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement(TextNav, {
    style: {
      position: "relative",
      width: 120,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    state: "pressed"
  }), /*#__PURE__*/React.createElement(TextNav, {
    style: {
      position: "relative",
      width: 120,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    state: "default"
  }), /*#__PURE__*/React.createElement(TextNav, {
    style: {
      position: "relative",
      width: 120,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "문제 2-1",
    state: "default"
  }), /*#__PURE__*/React.createElement(TextNav, {
    style: {
      position: "relative",
      width: 120,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "문제 2-2",
    state: "default"
  })), /*#__PURE__*/React.createElement(ReadingArea, {
    style: {
      position: "absolute",
      left: 30,
      top: 282,
      width: 840,
      height: 759
    },
    state: "default"
  }));
}

// figma node: 4858:194 Icon Button (4 variants)
const __venc_IconButton = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_IconButton = p => "state=" + __venc_IconButton(p.state);
function IconButton(_p = {}) {
  const props = {
    ..._p,
    showNumber: _p.showNumber ?? false,
    state: _p.state ?? "default",
    text: _p.text ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 20,
      display: "flex",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconActionRotateCw, {
    style: {
      transform: "scale(0.667, 0.667)",
      transformOrigin: "0 0"
    }
  }))));
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Hover
    "state=hover": __body0,
    // figma: State=Pressed
    "state=pressed": __body0,
    // figma: State=Disabled
    "state=disabled": __body0
  };
  return (__impls[__vkey_IconButton(props)] ?? __body0)();
}

// figma node: 4788:130 Icon/Action/Rotate-cw
function IconActionRotateCw(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "inherit",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 9 C 18 10.78 17.472 12.52 16.483 14 C 15.494 15.48 14.089 16.634 12.444 17.315 C 10.8 17.996 8.99 18.174 7.244 17.827 C 5.498 17.48 3.895 16.623 2.636 15.364 C 1.377 14.105 0.52 12.502 0.173 10.756 C -0.174 9.01 0.004 7.2 0.685 5.556 C 1.366 3.911 2.52 2.506 4 1.517 C 5.48 0.528 7.22 0 9 0 C 11.52 0 13.93 1 15.74 2.74 L 18 5 Z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18 0 L 18 5 L 13 5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

// figma node: 4788:120 Icon/Action/Minus
function IconActionMinus(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "inherit",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.33333 8H12.6667",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

// figma node: 4725:48966 Icon/Action/Plus
function IconActionPlus(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "inherit",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.33333 8H12.6667",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 3.33333V12.6667",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}

// figma node: 4788:124 Icon/Action/Sticky-note
function IconActionStickyNote(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "inherit",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 6 C 18.001 5.683 17.939 5.369 17.818 5.076 C 17.696 4.784 17.518 4.518 17.294 4.294 L 13.706 0.706 C 13.482 0.482 13.216 0.304 12.924 0.182 C 12.631 0.061 12.317 -0.001 12 0 L 2 0 C 1.47 0 0.961 0.211 0.586 0.586 C 0.211 0.961 0 1.47 0 2 L 0 16 C 0 16.53 0.211 17.039 0.586 17.414 C 0.961 17.789 1.47 18 2 18 L 16 18 C 16.53 18 17.039 17.789 17.414 17.414 C 17.789 17.039 18 16.53 18 16 L 18 6 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12 0 L 12 5 C 12 5.265 12.105 5.52 12.293 5.707 C 12.48 5.895 12.735 6 13 6 L 18 6 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// Globals for scripts loaded after this file.
window.IconGeneralMessageSquareMore = IconGeneralMessageSquareMore;
window.IconNavigationExpandDown = IconNavigationExpandDown;
window.Button = Button;
window.Component2 = Component2;
window.IconActionPen = IconActionPen;
window.IconCustomClock = IconCustomClock;
window.ManuscrptCell = ManuscrptCell;
window.MemoList = MemoList;
window.ReadingArea = ReadingArea;
window.TextNav = TextNav;
window.Default = Default;
window.IconButton = IconButton;
window.IconActionRotateCw = IconActionRotateCw;
window.IconActionMinus = IconActionMinus;
window.IconActionPlus = IconActionPlus;
window.IconActionStickyNote = IconActionStickyNote;