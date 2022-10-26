import { ActionType } from '../action-types';
import { SignIn, SignOut } from '../actions';

export const signIn = (): SignIn => {
    return {
        type: ActionType.SIGN_IN,
    };
};

export const signOut = (): SignOut => {
    return {
        type: ActionType.SIGN_OUT,
    };
};
