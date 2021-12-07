import {SET_PERSON_DATA, SET_PERSON_LOADING, SET_PERSON_ERROR} from "../../types";

const handlers = {

    [SET_PERSON_DATA]: (state, {payload}) => ({ ...state, data: payload}),
    [SET_PERSON_LOADING]: (state, {payload}) => ({...state, loading: payload}),
    [SET_PERSON_ERROR]: (state, {payload}) => ({...state, error: payload}),

    DEFAULT: state => state
};

const initialState = {
    data: {
        totalTime: null,        // 1. Общее время от старта до финиша
        feedbackTime: null,     // 2. Время на изучение фидбека
        timeByQuestion: null,   // 3. Время прохождения каждого вопроса учитывая ошибки - накопительный бар
        scoreByQuestion: null,  // 4. Количество очков для каждого вопроса учитывая ошибки - накопительный бар

        timeByStage: null,      // 5. Время прохождения каждого этапа - бар
        scoreByStage: null,     // 6. Баллы за каждый этап - бар
        percentByStage: null,   // 7. Проценты за каждый этап

        personData: null        // Инфо о пользователе
    },
    loading: false,
    error: false
};

export const person = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;

    return handle(state, action);
}