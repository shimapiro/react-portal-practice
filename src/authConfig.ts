// src/authConfig.ts

export const msalConfig = {
    auth: {
      clientId: "19a717b0-4739-4e16-9cd3-091c2524d448", // ← 本当は企業からもらう値（今は仮でOK）
      authority: "https://login.microsoftonline.com/common", // 固定でOK
      redirectUri: "http://localhost:5173", // Viteの場合このままでOK
    },
  };
  