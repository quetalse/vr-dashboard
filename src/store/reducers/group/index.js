import {SET_GROUP_DATA, SET_GROUP_LOADING, SET_GROUP_ERROR} from "../../types";

const handlers = {

    [SET_GROUP_DATA]: (state, {payload}) => ({ ...state, data: payload}),
    [SET_GROUP_LOADING]: (state, {payload}) => ({...state, loading: payload}),
    [SET_GROUP_ERROR]: (state, {payload}) => ({...state, error: payload}),

    DEFAULT: state => state
};

const initialState = {
    data: {
        scoreByStage: null,     // 1. Баллы по этапам бары
        timeByStage: null,      // 2. Среднее время по этапам бары
        percentByStage: null,   // 3. Проценты по этапам бары
        averageTime: null,      // 4. Среднее время просмотра
        repeatByQuestion: null, // 5. Количество повторных нажатий по вопросам
        personList: null,        // 6. Список прошедших обучение поимённо
        usersCount: null
    },
    loading: false,
    error: false
};

export const group = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;

    return handle(state, action);
}