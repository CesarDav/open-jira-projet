import { FC, useEffect, useReducer } from 'react';

import { useSnackbar } from 'notistack'


import { EntriesContext, entriesReducer } from '.';
import { Entry } from 'interfaces';
import { entriesApi } from 'apis';


export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: []
}

interface Props {
    children: React.ReactNode
}

export const EntriesProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
    const { enqueueSnackbar } = useSnackbar();


    const refreshEntries = async () => {
        const { data } = await entriesApi.get<Entry[]>('entries');
        dispatch({ type: '[Entry] Initial-Entries', payload: data })

    }

    useEffect(() => {
        refreshEntries()
    }, [])

    const addNewEntry = async (description: string) => {
        const { data } = await entriesApi.post<Entry>('/entries', { description });

        dispatch({ type: '[Entry] Add-Entry', payload: data })
    }

    const updateEntry = async ({ description, _id, status }: Entry, showSnackbar = false) => {
        try {
            const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status });
            dispatch({ type: '[Entry] Entry-Udated', payload: data });
            if (showSnackbar) {

                enqueueSnackbar('Updated entry', {
                    variant: 'success',
                    autoHideDuration: 1500,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'

                    }
                })
            }

        } catch (error) {
            console.log({ error })
        }

    }

    return (
        <EntriesContext.Provider value={{
            ...state,
            // Methods
            addNewEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}