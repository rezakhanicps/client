import { Dispatch } from 'redux';
import streams from '../../apis/streams';
import history from '../../history';
import { ActionType } from '../action-types';
import { Action, SignIn, SignOut } from '../actions';
import { RootState } from '../reducers';

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
    (formValues: any) =>
    async (dispatch: Dispatch<Action>, getState: () => RootState) => {
        const { userId } = getState().auth;
        const response = await streams.post('/streams', {
            ...formValues,
            userId,
        });
        dispatch({ type: ActionType.CREATE_STREAM, payload: response.data });
        history.push('/');
    };

export const fetchStreams = () => async (dispatch: Dispatch<Action>) => {
    const response = await streams.get('/streams');
    dispatch({ type: ActionType.FETCH_STREAMS, payload: response.data });
};

export const fetchStream =
    (id: string) => async (dispatch: Dispatch<Action>) => {
        const response = await streams.get(`/streams/${id}`);
        dispatch({ type: ActionType.FETCH_STREAM, payload: response.data });
    };

export const editStream =
    (id: string, formValues: any) => async (dispatch: Dispatch<Action>) => {
        const response = await streams.patch(`/streams/${id}`, formValues);
        dispatch({ type: ActionType.EDIT_STREAM, payload: response.data });
        history.push('/');
    };
export const deleteStream =
    (id: string) => async (dispatch: Dispatch<Action>) => {
        await streams.delete(`/streams/${id}`);
        dispatch({ type: ActionType.DELETE_STREAM, payload: id });
        history.push('/');
    };
