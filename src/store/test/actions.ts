import { action } from "typesafe-actions";
import { TestActionTypes, ITestState, IQuestion } from "./types";


export const fetchTest = () => action(TestActionTypes.FETCH_TEST);
export const fetchTestSuccess = (test: ITestState) => action(TestActionTypes.FETCH_TEST_SUCCESS, test);
export const fetchTestError = (error: string) => action(TestActionTypes.FETCH_TEST_ERROR, error);
export const destroyTest = () => action(TestActionTypes.DESTROY_TEST);
export const recordAnswer = (questions: IQuestion[]) => action(TestActionTypes.RECORD_ANSWER, questions);

export const analyzeTest = (questions: IQuestion[]) => {
    const correct = questions.filter((q) => {return q.isCorrect; });
    return action(TestActionTypes.ANALYZE_TEST, correct.length);
};
