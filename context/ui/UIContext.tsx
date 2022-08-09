import { createContext } from 'react'


interface ContexProps {
    sideMenuOpen: boolean;
}


export const UIContext = createContext({} as ContexProps)