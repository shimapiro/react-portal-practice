// src/authConfig.ts

export const msalConfig = {
    auth: {
      clientId: "150623b2-e614-49dc-a46d-7e809471b26f", // ← 本当は企業からもらう値（今は仮でOK）
      authority: "https://login.microsoftonline.com/common", // 固定でOK
      redirectUri: "http://localhost:5173", // Viteの場合このままでOK
    },
  };
  