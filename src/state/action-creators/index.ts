import { ActionType } from '../action-types';
import { SignIn, SignOut } from '../actions';

export const signIn = (userId:string): SignIn => {
    return {
        type: ActionType.SIGN_IN,
        payload: userId,
    };
};

export const signOut = (): SignOut => {
    return {
        type: ActionType.SIGN_OUT,
    };
};
