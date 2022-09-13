import { Entry } from 'interfaces';
import { EntriesState } from '.';

// La funcion pura no tiene que ser asincrono.
// Se epsera que siempre regre un nuevo estado y no una mutacion del estado.

type EntriesActionType =
    | { type: '[Entry] Add-Entry', payload: Entry }
    | { type: '[Entry] Entry-Udated', payload: Entry }
    | { type: '[Entry] Initial-Entries', payload: Entry[] }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

    switch (action.type) {
        case '[Entry] Add-Entry':
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        case "[Entry] Entry-Udated":
            return {
                ...state,
                entries: state.entries.map(entry => {
                    if (entry._id === action.payload._id) {
                        entry.status = action.payload.status
                        entry.description = action.payload.description
                    }
                    return entry
                })

            }
        case "[Entry] Initial-Entries":
            return {
                ...state,
                entries: [...action.payload]
            }

        default:
            return state
    }
}