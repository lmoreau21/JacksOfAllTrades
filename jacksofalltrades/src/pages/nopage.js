import { AmplifyProvider } from "@aws-amplify/ui-react";
import studioTheme from "../ui-components/studioTheme";
import { useDarkMode } from "./darkMode";
import React from "react";
//404 page appears on every url that doesnt have a graphic

function NoPage() {
    const mode = useDarkMode();
    return (
    <html>
        <div className={`App ${mode}`}>
        <h1>Hey! Don't look! There is nothing here yet...</h1>
        </div>
        </html>
    );
}
export default NoPage;