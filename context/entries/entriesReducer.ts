import { EntriesState } from '.';

// La funcion pura no tiene que ser asincrono.
// Se epsera que siempre regre un nuevo estado y no una mutacion del estado.

type EntriesActionType =
    | { type: '[Entries] - ActionName', }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

    switch (action.type) {
        // case '[Entries] - ActionName':
        //     return {
        //         ...state,
        //     }

        default:
            return state
    }
}