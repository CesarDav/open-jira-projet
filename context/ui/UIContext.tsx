import { createContext } from 'react'


interface ContexProps {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;

    // methosds
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setIsAddingEntry: (isAdding: boolean) => void;
    startDragging: () => void;
    endDragging: () => void

}


export const UIContext = createContext({} as ContexProps)