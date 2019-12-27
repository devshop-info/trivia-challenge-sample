import * as React from "react";
import PageWrapper from "../../containers/Layout/PageWrapper";
import Alert from "react-bootstrap/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "./not-found.scss";


class NotFoundPage extends React.Component {
    componentDidMount() {
        document.title = "Page Not Found";
    }

    render() {
        return (
            <PageWrapper>
                <Alert variant="danger">
                   <h1><FontAwesomeIcon icon={faExclamationCircle} /> 404</h1>
                   <p>
                     Page Not Found! <Alert.Link href="/">Go home</Alert.Link>.
                   </p>
                </Alert>
            </PageWrapper>
        );
    }
}

export { NotFoundPage as NotFound };
