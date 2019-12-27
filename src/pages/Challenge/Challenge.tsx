import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import PageWrapper from "../../containers/Layout/PageWrapper";
import { RouteComponentProps, Redirect } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { ApplicationState } from "../../store/root/applicationState";
import { fetchTest, recordAnswer } from "../../store/test/actions";
import { ITestState, IQuestion } from "../../store/test/types";
import Question from "../../components/question/Question";
import "./challenge.scss";


interface IPropsFromDispatch {
  fetchTest: typeof fetchTest;
  recordAnswer: typeof recordAnswer;
}
type AllProps = ITestState & IPropsFromDispatch & RouteComponentProps;

class Challenge extends React.Component<AllProps, {show: boolean}> {
  constructor(props: AllProps) {
    super(props);
    const { fetchTest } = this.props;
    this.state = {show: false};
    fetchTest();
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  recordAnswer(answeredQuestion: IQuestion) {
    const { recordAnswer, questions, current_index } = this.props;
    this.setState({show: false});
    Object.assign(questions[current_index], answeredQuestion);
    recordAnswer(questions);
  }

  handleAnswer(answeredQuestion?: IQuestion) {
    !!answeredQuestion?.user_answer ?
      this.recordAnswer(answeredQuestion) :
        this.setState({show: true});
  }

  render() {
    const { questions, current_index, total_count } = this.props;
    // Note: this should be abstracted out to a messaging component
    const ToasterBox = (
      <div className="toast-wrapper danger">
      <Toast onClose={() =>  this.setState({show: false})} show={this.state.show} delay={10000} autohide>
       <Toast.Header>
       <strong className="mr-auto"><FontAwesomeIcon icon={faExclamationCircle} /> Heads Up!</strong>
       </Toast.Header>
       <Toast.Body>Please, answer the questiont to continue.</Toast.Body>
     </Toast>
     </div>
    )

    if (questions?.length && current_index >= total_count) {
      return <Redirect to="/results"/>;
    }

    return (
      <PageWrapper>
        {ToasterBox}
        {
          (!!questions && !!questions[current_index]) &&
            <Jumbotron >
              <Question
                question={questions[current_index]}
                count={(current_index + 1)}
                total={total_count}
                handleAnswer={this.handleAnswer} />
            </Jumbotron>
          }
      </PageWrapper>
    );
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchTest: () => dispatch(fetchTest()),
  recordAnswer: (questions: IQuestion[]) => dispatch(recordAnswer(questions))
});

const mapStateToProps = ({ test }: ApplicationState) => ({
  questions: test.questions,
  current_index: test.current_index,
  total_count: test.total_count
});

export default connect(mapStateToProps, mapDispatchToProps)(Challenge);
