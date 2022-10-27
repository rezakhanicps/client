import { Dispatch } from 'redux';
import streams from '../../apis/streams';
import { ActionType } from '../action-types';
import { Action, SignIn, SignOut } from '../actions';

export const signIn = (userId: string): SignIn => {
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

export const createStream =
    (formValues: any) => async (dispatch: Dispatch<Action>) => {
        const response = await streams.post('/streams', formValues);
        dispatch({ type: ActionType.CREATE_STREAM, payload: response.data });
    };

export const fetchStreams = () => async (dispatch: Dispatch<Action>) => {
    const response = await streams.get('/streams');
    dispatch({ type: ActionType.FETCH_STREAMS, payload: response.data });
};

export const fetchStream =
    (id: string) => async (dispatch: Dispatch<Action>) => {
        const response = await streams.get(`/stream/${id}`);
        dispatch({ type: ActionType.FETCH_STREAM, payload: response.data });
    };

export const editStream =
    (id: string, formValues: any) => async (dispatch: Dispatch<Action>) => {
        const response = await streams.put(`/streams/${id}`, formValues);
        dispatch({ type: ActionType.EDIT_STREAM, payload: response.data });
    };
export const deleteStream =
    (id: string) => async (dispatch: Dispatch<Action>) => {
        await streams.get(`/streams/${id}`);
        dispatch({ type: ActionType.DELETE_STREAM, payload: id });
    };
