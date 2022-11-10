import React from "react";
import '@aws-amplify/ui-react/styles.css'
import { AmplifyProvider, withAuthenticator } from "@aws-amplify/ui-react";
import ContactForm from "../ui-components/ContactForm";
import { studioTheme } from "../ui-components";

//calls contact form component
function SkillSuggest() {
    return(
        <AmplifyProvider theme={studioTheme}  >
            <ContactForm />
        </AmplifyProvider>
    );
}

export default withAuthenticator(SkillSuggest);