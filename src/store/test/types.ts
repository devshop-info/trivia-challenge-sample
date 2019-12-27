/*
*  File:            test/types.ts
*  Description:     Holds types and constants for managing test
*  Author:          RK
*/
import keyMirror from "keymirror";

export interface IQuestion {
    // questionId: number; // should come from the db but for prototype will be the index in test array
    category: string;
    type: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    user_answer?: string;
    isCorrect?: boolean;
}

// Description state for a test
export interface ITestState {
    testId: number; // should come from the db but for prototype will be random
    correct: number; // number of correctly answered questions
    total_count: number; // Total number of questions in test
    current_index: number; // the current active question index
    questions: IQuestion[]; // question arrays
}


export const TestActionTypes = keyMirror({
    FETCH_TEST: null,
    FETCH_TEST_ERROR: null,
    FETCH_TEST_SUCCESS: null,
    RECORD_ANSWER: null,
    ANALYZE_TEST: null,
    DESTROY_TEST: null
});

