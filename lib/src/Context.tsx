import * as React from "react";

type Action = { type: "toggle" | "close" };
type Dispatch = (action: Action) => void;
type State = { isOpen: boolean };
type OffCanvasProviderProps = { children: React.ReactNode };

const OffCanvasStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const offCanvasReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "toggle": {
      return { isOpen: !state.isOpen };
    }

    case "close": {
      return { isOpen: false };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const OffCanvasProvider = ({ children }: OffCanvasProviderProps) => {
  const [state, dispatch] = React.useReducer(offCanvasReducer, {
    isOpen: false,
  });

  const value = { state, dispatch };

  return (
    <OffCanvasStateContext.Provider value={value}>
      {children}
    </OffCanvasStateContext.Provider>
  );
};

const useOffCanvas = () => {
  const context = React.useContext(OffCanvasStateContext);
  if (context === undefined) {
    throw new Error("useOffCanvas must be used within a OffCanvasProvider");
  }
  return context;
};

export { OffCanvasProvider, useOffCanvas };
