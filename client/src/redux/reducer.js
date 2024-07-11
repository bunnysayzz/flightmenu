import { ADD_MEAL, REMOVE_MEAL, SET_PERSON, SET_TAG_FILTER, SELECT_DRINK, SET_MEALS } from './actions';

const initialState = {
    allMeals: [],
    labels: [],
    selectedMeals: [],
    selectedPerson: '1',
    tagFilter: null,
};

const mealReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MEALS:
            return {
                ...state,
                allMeals: action.payload.meals,
                labels: action.payload.labels,
            };
        case ADD_MEAL:
            return {
                ...state,
                selectedMeals: [...state.selectedMeals, { ...action.payload.meal, selectedDrink: action.payload.drink, person: action.payload.person }],
            };
        case REMOVE_MEAL:
            return {
                ...state,
                selectedMeals: state.selectedMeals.filter(meal => meal.id !== action.payload.mealId || meal.person !== action.payload.person),
            };
        case SET_PERSON:
            return {
                ...state,
                selectedPerson: action.payload,
            };
        case SET_TAG_FILTER:
            return {
                ...state,
                tagFilter: action.payload,
            };
        case SELECT_DRINK:
            return {
                ...state,
                selectedMeals: state.selectedMeals.map(meal =>
                    meal.id === action.payload.mealId
                        ? { ...meal, selectedDrink: action.payload.drink }
                        : meal
                ),
            };
        default:
            return state;
    }
};

export default mealReducer;