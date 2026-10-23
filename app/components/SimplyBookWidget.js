"use client";

import { useEffect } from "react";

export default function SimplyBookWidget() {
  useEffect(() => {
    const existingScript = document.getElementById("simplybook-widget-script");

    const initializeWidget = () => {
      if (!window.SimplybookWidget) return;

      const container = document.getElementById("simplybook-widget-container");

      if (!container) return;

      // Voorkomt dat de widget dubbel wordt geladen
      if (container.dataset.loaded === "true") return;

      container.dataset.loaded = "true";

      new window.SimplybookWidget({
        widget_type: "iframe",
        url: "https://aesthefit.simplybook.it",
        theme: "belle",

        theme_settings: {
          timeline_hide_unavailable: "1",
          hide_past_days: "0",
          timeline_show_end_time: "0",
          timeline_modern_display: "as_slots",

          sb_base_color: "#60708c",
          display_item_mode: "block",
          sb_review_image: "",
          dark_font_color: "#2f4858",
          light_font_color: "#ffffff",
          btn_color_1: "#a8bfe7",
          sb_company_label_color: "#50566b",

          hide_img_mode: "0",
          show_sidebar: "1",

          sb_busy: "#c7b3b3",
          sb_available: "#d6ebff",
        },

        timeline: "modern",
        datepicker: "top_calendar",
        is_rtl: false,

        app_config: {
          clear_session: 0,
          allow_switch_to_ada: 0,
          predefined: [],
        },

        container_id: "simplybook-widget-container",
      });
    };

    if (existingScript) {
      if (window.SimplybookWidget) {
        initializeWidget();
      } else {
        existingScript.addEventListener("load", initializeWidget);
      }

      return;
    }

    const script = document.createElement("script");

    script.id = "simplybook-widget-script";
    script.src = "https://widget.simplybook.it/v2/widget/widget.js";
    script.async = true;

    script.onload = initializeWidget;

    document.body.appendChild(script);

    return () => {
      if (existingScript) {
        existingScript.removeEventListener("load", initializeWidget);
      }
    };
  }, []);

  return (
    <div
      id="simplybook-widget-container"
      className="simplyBookWidget"
    />
  );
}
