export const ADD_MEAL = 'ADD_MEAL';
export const REMOVE_MEAL = 'REMOVE_MEAL';
export const SET_PERSON = 'SET_PERSON';
export const SET_TAG_FILTER = 'SET_TAG_FILTER';
export const SELECT_DRINK = 'SELECT_DRINK';
export const SET_MEALS = 'SET_MEALS';

export const addMeal = (meal, drink, person) => ({
    type: ADD_MEAL,
    payload: { meal, drink, person },
});

export const removeMeal = (mealId, person) => ({
    type: REMOVE_MEAL,
    payload: { mealId, person },
});

export const setPerson = (person) => ({
    type: SET_PERSON,
    payload: person,
});

export const setTagFilter = (tag) => ({
    type: SET_TAG_FILTER,
    payload: tag,
});

export const selectDrink = (mealId, drink) => ({
    type: SELECT_DRINK,
    payload: { mealId, drink },
});

export const setMeals = (meals) => ({
    type: SET_MEALS,
    payload: meals,
});

export const fetchMeals = () => {
    return async (dispatch) => {
        const response = await fetch('http://localhost:5001/api/meals');
        const data = await response.json();
        dispatch(setMeals(data));
    };
};