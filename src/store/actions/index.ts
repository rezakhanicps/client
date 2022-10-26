import { ActionType } from '../action-types';

export interface SignIn {
    type: ActionType.SIGN_IN;
}

export interface SignOut {
    type: ActionType.SIGN_OUT;
}
