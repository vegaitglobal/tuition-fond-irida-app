import { FullWidthImageWithTextModule } from "../../containers";
import { Module, modulesMock } from "./modulesMock";
import { TextWithCtaModule } from "../../containers";

export const HomePage = () => {
    const getModule = ({ type, title, description, image, buttons }: Module) => {
        switch (type) {
            case "fullWidthImageText":
                return (
                    <FullWidthImageWithTextModule
                        key={`home-${title}`}
                        title={title}
                        description={description}
                        image={image!}
                        buttons={buttons!}
                    />
                );
            case "textWithCta":
                return (
                    <TextWithCtaModule
                        key={`home-${title}`}
                        title={title}
                        description={description}
                        button={buttons![0]}
                    />
                );
        }
    };

    const modules = modulesMock.map((module) => getModule(module));

    return <>{modules}</>;
};
