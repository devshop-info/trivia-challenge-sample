import React, {useState} from "react";
import { IQuestion } from "../../store/test/types";
import AnswerBoolean from "../Answers/AnswerBoolean";
import Button from "react-bootstrap/Button";
import {parseHTMLString} from "../../lib/utilities";

type AllProps = {
    question: IQuestion,
    count: number,
    total: number,
    handleAnswer: (answeredQuestion: IQuestion) => void;  // Description: switch play/pause functionality
}

const Question: React.FC<AllProps> = (props: AllProps) => {
    const [userAnswer, setValue] = useState("");
    const submitQuestionAnswer = () => {
        props.handleAnswer(Object.assign({}, props.question,
            {
                user_answer: userAnswer,
                isCorrect: userAnswer === props.question.correct_answer
            }));
    }
    return (
        <React.Fragment>
            <div>
                <h1>{props.question.category}</h1>
                <p dangerouslySetInnerHTML={parseHTMLString(props.question.question)} ></p>
            </div>
            <AnswerBoolean handleAnswerClick={(answer: string) => {setValue(answer); }} />
            <div className="text-center">
                <p className="text-primary">{`${props.count} of  ${props.total}`} </p>
                <Button
                    variant="primary"
                    onClick={submitQuestionAnswer} >{props.count < props.total ? "Next" : "Finished! See your results"}</Button>
            </div>
        </React.Fragment>
    )
};
export default Question;
