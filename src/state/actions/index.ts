import { ActionType } from '../action-types';

export interface SignIn {
    type: ActionType.SIGN_IN;
    payload: string;
}

export interface SignOut {
    type: ActionType.SIGN_OUT;
}

export interface CreateStream {
    type: ActionType.CREATE_STREAM;
    payload: string;
}

export type Action = SignIn | SignOut | CreateStream;
