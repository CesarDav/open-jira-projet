import { FC, useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';


import { EntriesContext, entriesReducer } from '.';
import { Entry } from 'interfaces';


export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: ipsum dolor sit amet consectetur Quibusdam non tempora reprehenderit quam nam, cum omnis',
            status: 'pending',
            createdAT: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'En-Progreso ipsum dolor sit amet consectetur Quibusdam non tempora reprehenderit quam nam, cum omnis',
            status: 'in-progress',
            createdAT: Date.now() - 1000000
        },
        {
            _id: uuidv4(),
            description: 'Terminadas: ipsum dolor sit amet consectetur Quibusdam non tempora reprehenderit quam nam, cum omnis',
            status: 'finished',
            createdAT: Date.now() - 100000
        }
    ]
}

interface Props {
    children: React.ReactNode
}

export const EntriesProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

    return (
        <EntriesContext.Provider value={{
            ...state
        }}>
            {children}
        </EntriesContext.Provider>
    )
}