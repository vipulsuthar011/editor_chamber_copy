const { createContext } = require("react");

export const Theme = createContext();

const ThemeProvider = ({ children }) => {
  const navigate = (id) => {
    let elem = document.getElementById(id);
    elem.scrollIntoView({ behavior: "smooth" });
  };

  return <Theme.Provider value={{ navigate }}>{children}</Theme.Provider>;
};

export default ThemeProvider;
