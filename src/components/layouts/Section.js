import React, {Component} from "react";
import Preloader from "./Preloader";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";
import Topbar from "./Topbar";
import Header from "./Header";
import Navbar from "./Navbar";
import BreadcrumbArea from "./BreadcrumbArea";
import Footer from "./Footer";
import SignupArea from "./SignupArea";

class Section extends Component {
    render() {
        return (
            <>
                <Preloader />
                <Signin />
                <Signup />
                <Topbar design={this.props.design} />
                <Header design={this.props.design} />
                <Navbar />
                {this.props.breadcrumb ? (<BreadcrumbArea title={this.props.title} />) : ''}
                {this.props.children}
                <SignupArea design={this.props.design} />
                <Footer design={this.props.design} />
            </>
        );
    }
}

export default Section;