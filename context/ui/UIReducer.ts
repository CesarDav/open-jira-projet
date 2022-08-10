import { UIState } from '.';

// La funcion pura no tiene que ser asincrono.
// Se epsera que siempre regre un nuevo estado y no una mutacion del estado.

type UIActionType =
    | { type: 'UI - Open Sidebar', }
    | { type: 'UI - Close Sidebar', }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case 'UI - Open Sidebar':
            return {
                ...state,
                sideMenuOpen: true
            }
        case 'UI - Close Sidebar':
            return {
                ...state,
                sideMenuOpen: false
            }

        default:
            return state
    }
}