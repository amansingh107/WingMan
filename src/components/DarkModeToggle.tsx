import React, { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the stored dark mode preference in local storage
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Store the mode preference in local storage
    localStorage.setItem('darkMode', !isDarkMode ? 'true' : 'false');
  };

  return (
    <button onClick={toggleDarkMode} className="p-2 border border-gray-300 rounded">
      {isDarkMode ? '🌙 Dark' : '🌞 Light'}
    </button>
  );
};

export default DarkModeToggle;
