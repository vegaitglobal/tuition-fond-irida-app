import { Button, Form } from "components";
import { useEffect, useState } from "react";
import { ContentModule } from "../../core/services/contentful/queries/getModulesByPageId";
import { StyledContactUsModule } from "./ContactUsModule.style";

interface Props {
    moduleEntry: ContentModule;
}

export const ContactUsModule = (props: Props) => {
    const onButtonClick = () => {};

    return (
        <StyledContactUsModule>
            <div className="first-section"></div>
            {/* <img className="second-section" src={backgroundImage?.url} alt=""></img> */}
        </StyledContactUsModule>
    );
};
