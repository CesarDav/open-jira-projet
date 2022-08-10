import { createContext } from 'react'


interface ContexProps {
    sideMenuOpen: boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void
}


export const UIContext = createContext({} as ContexProps)