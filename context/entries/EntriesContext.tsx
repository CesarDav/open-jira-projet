import { createContext } from 'react'
import { Entry } from 'interfaces';



interface ContexProps {
    entries: Entry[];

    //methos
    addNewEntry: (description: string) => void;
    updateEntry: (entry: Entry, showSnackbar?: true) => void;
}


export const EntriesContext = createContext({} as ContexProps)