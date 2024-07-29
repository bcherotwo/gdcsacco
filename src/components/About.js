import React, {Component} from "react";
import Section from "./layouts/Section";
import AboutArea from "./layouts/AboutArea";
import ServiceArea from "./layouts/ServiceArea";
import PricingArea from "./layouts/PricingArea";
import WorkArea from "./layouts/WorkArea";
import PartnerArea from "./layouts/PartnerArea";

class About extends Component {
    render() {
        return (
            <Section design={'home_1'} breadcrumb={true} title={'About Us'}>
                <AboutArea design={'home_1'} />
                <ServiceArea design={'home_1'} />
                <PricingArea design={'home_1'} />
                <WorkArea />
                <PartnerArea />
            </Section>
        );
    }
}

export default About;