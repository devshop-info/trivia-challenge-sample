import * as React from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../../containers/Layout/PageWrapper";
import { RouteComponentProps } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./dashboard.scss";

type AllProps = RouteComponentProps;

class DashboardPage extends React.Component<AllProps> {
  componentDidMount() {
    document.title = "Dashboard";
  }

  render() {
    return (
      <PageWrapper>
        <Jumbotron>
          <h1>Welcome to the Trivia Challenge!</h1>
          <p>
            You will be presented with 10 True or False questions.
          </p>
          <p>
            Can you score 100%?
          </p>
          <div className="text-center">
           <Link to="/test" className="btn btn-primary btn-lg" ><FontAwesomeIcon icon={faUserGraduate} /> Begin Challenge</Link>
          </div>
        </Jumbotron>
      </PageWrapper>
    );
  }
}


export { DashboardPage as Dashboard };
