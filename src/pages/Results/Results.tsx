import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ApplicationState } from "../../store/root/applicationState";
import { RouteComponentProps, Link, Redirect } from "react-router-dom";
import PageWrapper from "../../containers/Layout/PageWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { ITestState, IQuestion } from "../../store/test/types";
import { analyzeTest, destroyTest } from "../../store/test/actions";
import QuestionSummary from "../../components/question/QuestionSummary";
import "./results.scss";
interface IPropsFromDispatch {
    analyzeTest: typeof analyzeTest;
    destroyTest: typeof destroyTest;
}
type AllProps = ITestState & IPropsFromDispatch & RouteComponentProps;

class Results extends React.Component<AllProps> {
    constructor(props: AllProps) {
        super(props);
        const { analyzeTest, questions } = this.props;
        analyzeTest(questions);
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
        this.props.destroyTest();
    }
    render() {
        const { questions, correct, total_count } = this.props;
        if (questions.length <= 0) {
            return <Redirect to="/" />;
        }

        return (
            <PageWrapper>
                <div className="results bg-light">
                    <h1>{`You Scored: ${correct} / ${total_count}`}</h1>
                    {
                        questions.length > 0 &&
                        questions.map((question: IQuestion, i) => {
                            return <QuestionSummary question={question} key={`question_${i}`} />;
                        })
                    }

                    <div className="text-center">
                        <Link to="/" className="btn btn-success btn-lg" ><FontAwesomeIcon icon={faCheckCircle} /> Play Again?</Link>
                    </div>
                </div>
            </PageWrapper>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    analyzeTest: (questions: IQuestion[]) => dispatch(analyzeTest(questions)),
    destroyTest:  () => dispatch(destroyTest()),
});
const mapStateToProps = ({ test }: ApplicationState) => ({
    questions: test.questions,
    correct: test.correct,
    total_count: test.total_count
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);

