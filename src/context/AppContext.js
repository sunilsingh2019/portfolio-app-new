import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // show sidebar
  const [showSidebar, setShowSidebar] = useState(false);

  const value = {
    show,
    handleClose,
    handleShow,
    showSidebar,
    setShowSidebar,
  };
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;