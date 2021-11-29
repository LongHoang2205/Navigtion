module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [
            "ios.ts",
            "android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".txs",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "@src": "./src",
            "@common": "./src/common",
            "@features": "./src/features",
            "@components": "./src/components",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
