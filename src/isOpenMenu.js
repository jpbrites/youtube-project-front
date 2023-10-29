import { createContext, useState } from 'react';

export const MenuContext = createContext();


export const MenuProvider = ({children}) => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
        {children}
    </MenuContext.Provider>
  );
};
