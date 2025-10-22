import next from "eslint-config-next";

const config = [
  ...next,
  {
    ignores: ["app/generated/**"],
  },
];

export default config;
