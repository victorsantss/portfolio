import React, { createContext, useState } from 'react';

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {}
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState<string>('en');

  const contextValue: LanguageContextType = {
    language,
    setLanguage
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
