import React, { createContext, useState } from 'react';

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'pt',
  setLanguage: () => {}
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState<string>('pt');

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
