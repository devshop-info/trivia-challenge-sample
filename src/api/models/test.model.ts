/*
*   File:           test.model.ts
*   Description:    Model for test item props
*   Author:         RK
*/
import axios from 'axios';


// ----------------------------------------------------------------
// Description: callApi(method: string, url: string, path: string, data?: any) {}
// "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"; 
// ----------------------------------------------------------------
const url = `${process.env.REACT_APP_API_TEST_URL}`;
export default class TestModel {
    // Description: get test questions...
    // NOTES: can be built on by adding additional params
    static fetchTest() {
        return axios.get(url);
    }

}