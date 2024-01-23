import React, { createContext, useContext, useState ,ReactNode} from "react";

interface WindowContextType {
  windowWidth: number | 0;

   refreshWindowWidth: (width: number) => void;
}
interface WindowProviderProps {
  children: ReactNode;
}

const windowWidthContext = createContext<WindowContextType | undefined>(undefined);

const WindowWidthProvider: React.FC<WindowProviderProps> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  
  const refreshWindowWidth = (width: number) => {
    setWindowWidth(width);
  };

  return (
    <windowWidthContext.Provider
      value={{
        windowWidth: windowWidth || 0,
        refreshWindowWidth
      }}
    >
      {children}
    </windowWidthContext.Provider>
  );
};

const useContextWindowWidth = (): WindowContextType => {
  const context = useContext(windowWidthContext);

  if (!context) {
    throw new Error("useContextCategory must be used within an AppProvider");
  }

  return context;
};

export { WindowWidthProvider, useContextWindowWidth };
