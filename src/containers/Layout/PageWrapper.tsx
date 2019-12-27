import * as React from "react";
import Header from "./Header";

interface IOtherProps {
    children: any;
}
type AllProps = IOtherProps;

class PageWrapper extends React.Component<AllProps> {
    render() {
        const { children } = this.props;
         // NOTE: TBD - User information will be populated after authentication and retrieved from store
        const username = "[User Name]";
        return (
            <div className="wrapper">
                <Header username={username} />
                <div className="container py-4">
                    {children}
                </div>
            </div>
        );
    }
}

export default PageWrapper;