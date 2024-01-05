import * as React from "react";

type Action = { type: "toggle" | "close" | "open" };

type State = { isOpen: boolean; onClose?: () => void };

type OffCanvasProviderProps = {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
};

const OffCanvasStateContext = React.createContext<
  | {
      isOpen: boolean;
      onClose?: () => void;
      close: () => void;
      open: () => void;
      toggle: () => void;
    }
  | undefined
>(undefined);

const offCanvasReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "toggle": {
      if (state.isOpen && state.onClose) {
        state.onClose();
      }

      return { ...state, isOpen: !state.isOpen };
    }

    case "open": {
      return { ...state, isOpen: true };
    }

    case "close": {
      if (state.onClose) {
        state.onClose();
      }

      return { ...state, isOpen: false };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const OffCanvasProvider = ({
  children,
  isOpen,
  onClose,
}: OffCanvasProviderProps) => {
  const [state, dispatch] = React.useReducer(offCanvasReducer, {
    isOpen: isOpen ?? false,
    onClose,
  });

  const value = {
    isOpen: state.isOpen,
    onClose: state.onClose,
    close: () => dispatch({ type: "close" }),
    open: () => dispatch({ type: "open" }),
    toggle: () => dispatch({ type: "toggle" }),
  };

  return (
    <OffCanvasStateContext.Provider value={value}>
      {children}
    </OffCanvasStateContext.Provider>
  );
};

const useOffCanvas = () => {
  const context = React.useContext(OffCanvasStateContext);
  if (context === undefined) {
    throw new Error("useOffCanvas must be used within an OffCanvasProvider");
  }
  return context;
};

export { OffCanvasProvider, useOffCanvas };
