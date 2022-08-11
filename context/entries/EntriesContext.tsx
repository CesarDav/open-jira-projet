import { createContext } from 'react'
import { Entry } from 'interfaces';



interface ContexProps {
    entries: Entry[];
}


export const EntriesContext = createContext({} as ContexProps)