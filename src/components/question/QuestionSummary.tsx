import React from "react";
import { IQuestion } from "../../store/test/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import {parseHTMLString} from "../../lib/utilities";

const QuestionSummary: React.FC<{ question: IQuestion }> = (props) => {
    const question = props.question;
    return (
        <Card className="mb-4">
             <Card.Header>{question.category}</Card.Header>
             <Card.Body>
             <p dangerouslySetInnerHTML={parseHTMLString(props.question.question)} ></p>
             <div className="answer">
                <h4>Your answer: </h4>
                <p className={question.isCorrect ? "text-success" : "text-danger"}>
                    <span className="mr-2">
                        {(question.isCorrect) ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faTimesCircle} />}
                    </span>
                    {question.user_answer}
                </p>
            </div>
             </Card.Body>
        </Card>
    )
};
export default QuestionSummary;
