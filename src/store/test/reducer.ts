import { Reducer } from "redux";
import { ITestState, TestActionTypes } from "./types";

const initialState: ITestState = {
    testId: 0,
    questions: [],
    correct: 0,
    total_count: 0,
    current_index: 0
};

const reducer: Reducer<ITestState> = (state = initialState, action) => {
    switch (action.type) {
        case TestActionTypes.FETCH_TEST: {
            return { ...state };
        }
        // NOTE: generating a random id in this reducer, but it should come from DB
        case TestActionTypes.FETCH_TEST_SUCCESS: {
            const testId =  (Math.round(Math.random() * 100));
            const total_count = action.payload.length;
            return { ...state, questions: action.payload, testId, total_count };
        }
        //  NOTE: ERROR HANDLING needs global development (dialogs, toaster, etc)
        case TestActionTypes.FETCH_TEST_ERROR: {
            return { ...state  };
        }

        case TestActionTypes.RECORD_ANSWER: {
            const current_index = state.current_index + 1;
            return { ...state,
                questions: action.payload,
                current_index
            };
        }
        case TestActionTypes.ANALYZE_TEST: {
            return { ...state, correct: action.payload  };
        }

        case TestActionTypes.DESTROY_TEST: {
            return { ...state, ...initialState };
        }
        default: {
            return state;
        }
    }
};

export { reducer as testReducer };
