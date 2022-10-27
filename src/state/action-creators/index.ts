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
