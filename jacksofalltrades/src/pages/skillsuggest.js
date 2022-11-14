import React, { Component } from "react";
import '@aws-amplify/ui-react/styles.css'
import { AmplifyProvider, withAuthenticator } from "@aws-amplify/ui-react";
import ContactForm from "../ui-components/ContactForm";
import { studioTheme } from "../ui-components";

//calls contact form component
class SkillSuggest extends Component{
    render() {
    return(
            <ContactForm />
    );
}
}
export default withAuthenticator(SkillSuggest);