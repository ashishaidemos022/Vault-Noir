"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    TalkdeskChatSDK?: (node: string, props: Record<string, unknown>) => {
      init: (configs: Record<string, unknown>) => void;
    };
  }
}

const TALKDESK_SCRIPT_ID = "tdwebchatscript";
const TALKDESK_CONTAINER_ID = "tdWebchat";

export const TalkdeskWidgetLoader = () => {
  useEffect(() => {
    if (window.TalkdeskChatSDK) {
      return;
    }

    if (!document.getElementById(TALKDESK_CONTAINER_ID)) {
      const container = document.createElement("div");
      container.id = TALKDESK_CONTAINER_ID;
      document.body.appendChild(container);
    }

    if (document.getElementById(TALKDESK_SCRIPT_ID)) {
      return;
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.charset = "UTF-8";
    script.id = TALKDESK_SCRIPT_ID;
    script.src = "https://talkdeskchatsdk.talkdeskapp.com/v2/talkdeskchatsdk.js";
    script.async = true;

    script.onload = () => {
      if (!window.TalkdeskChatSDK) return;

      const webchat = window.TalkdeskChatSDK(TALKDESK_CONTAINER_ID, {
        touchpointId: "2eed799607614813b933d25fb14816d0",
        accountId: "",
        region: "td-us-1"
      });

      webchat.init({
        enableValidation: false,
        enableEmoji: true,
        enableUserInput: true,
        enableAttachments: true
      });
    };

    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  }, []);

  return null;
};
