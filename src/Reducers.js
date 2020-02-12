import {
    INCREMENT,
    DECREMENT,
    RESET
} from './Actions';

export function count (state= 'm', action){
    let newState= state
    switch (action.type){
        case INCREMENT:
            newState += 1;
            break;
        case DECREMENT:
            newState -= 1;
            break;
        case RESET:
            newState = 'm'
    }
    return newState
}