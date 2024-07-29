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
import InvestorArea from "./layouts/InvestorArea";
import BlogArea from "./layouts/BlogArea";
import PartnerArea from "./layouts/PartnerArea";

class HomeTwo extends Component {
    render() {
        return (
            <Section design={'home_2'} breadcrumb={false}>
                <Banner design={'home_2'} />
                <MoneyOption design={'home_2'} />
                <AboutArea design={'home_2'} />
                <ServiceArea design={'home_2'} />
                <PricingArea design={'home_2'} />
                <FunFactArea />
                <TransactionArea />
                <WorkArea />
                <InvestorArea design={'home_2'} />
                <BlogArea design={'home_2'} />
                <PartnerArea />
            </Section>
        );
    }
}

export default HomeTwo;