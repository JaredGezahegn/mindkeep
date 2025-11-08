import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="flex justify-between items-center p-4 shadow bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-semibold text-black dark:text-white">MindKeep</h1>
      <button
        onClick={toggleTheme}
        className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white"
      >
        {darkMode ? <MdLightMode   className="text-2xl ml-[-50px] hover:text-blue-500 transition-colors"/> : <MdDarkMode  className="text-2xl ml-[-50px] hover:text-blue-500 transition-colors"/>}
      </button>
    </header>
  );
}

export default Header;
