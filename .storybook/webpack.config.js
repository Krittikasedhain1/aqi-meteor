const path = require("path");

module.exports = ({ config }) => {
  config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];
  config.resolve.alias = {
    ...config.resolve.alias,
    "@/hooks": path.resolve(__dirname, "../hooks"),
    "@/components": path.resolve(__dirname, "../components"),
    "@/constants": path.resolve(__dirname, "../constants"),
    "@/hooks": path.resolve(__dirname, "../hooks"),
    "@/utils": path.resolve(__dirname, "../utils"),
  };
  return config;
};
