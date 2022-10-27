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

export interface FetchStreams {
    type: ActionType.FETCH_STREAMS;
    payload: string;
}
export interface FetchStream {
    type: ActionType.FETCH_STREAM;
    payload: string;
}
export interface EditStream {
    type: ActionType.EDIT_STREAM;
    payload: string;
}
export interface DeleteStream {
    type: ActionType.DELETE_STREAM;
    payload: string;
}

export type Action =
    | SignIn
    | SignOut
    | CreateStream
    | FetchStreams
    | FetchStream
    | EditStream
    | DeleteStream;
