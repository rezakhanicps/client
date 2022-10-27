import _ from 'lodash';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface StreamState {
    id?: string;
    title?: string;
    description?: string;
}

const initialState: StreamState = {};

const reducer = (state: StreamState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case ActionType.FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case ActionType.CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case ActionType.EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case ActionType.DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};

export default reducer;
