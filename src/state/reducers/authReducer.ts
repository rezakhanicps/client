import { ActionType } from '../action-types';
import { Action } from '../actions';

interface AuthState {
    isSignedIn: boolean | null;
    userId: null | string;
}

const initialState: AuthState = {
    isSignedIn: null,
    userId: null,
};

const reducer = (state: AuthState = initialState, action: Action): AuthState => {
    switch (action.type) {
        case ActionType.SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload };
        case ActionType.SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null };
        default:
            return state;
    }
};

export default reducer;
