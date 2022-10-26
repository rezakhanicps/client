import { ActionType } from '../action-types';

export interface SignIn {
    type: ActionType.SIGN_IN;
    payload: string
}

export interface SignOut {
    type: ActionType.SIGN_OUT;
}

export type Action = SignIn | SignOut;
