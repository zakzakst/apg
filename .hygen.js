module.exports = {
  helpers: {
    pascalizePath: (path) => {
      const result = path
        .split("/")
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
        .join("");
      return result;
    },
  },
};
