import React, {Component} from "react";
import Section from "./layouts/Section";
import Banner from "./layouts/Banner";
import MoneyOption from "./layouts/MoneyOption";
import AboutArea from "./layouts/AboutArea";
import ServiceArea from "./layouts/ServiceArea";
import PricingArea from "./layouts/PricingArea";
import FunFactArea from "./layouts/FunFactArea";
import TransactionArea from "./layouts/TransactionArea";
import WorkArea from "./layouts/WorkArea";
import PaymentArea from "./layouts/PaymentArea";
import InvestorArea from "./layouts/InvestorArea";
import BlogArea from "./layouts/BlogArea";
import PartnerArea from "./layouts/PartnerArea";

class Home extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={false}>
                <Banner design={'home_1'} />
                <MoneyOption design={'home_1'} />
                <AboutArea design={'home_1'} />
                <ServiceArea design={'home_1'} />
                <PricingArea design={'home_1'} />
                <FunFactArea />
                <TransactionArea />
                <WorkArea />
                <PaymentArea />
                <InvestorArea design={'home_1'} />
                <BlogArea design={'home_1'} />
                <PartnerArea />
            </Section>
        );
    }
}

export default Home;