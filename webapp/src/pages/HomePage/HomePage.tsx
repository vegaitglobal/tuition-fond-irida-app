import { FullWidthImageWithTextModule } from "../../containers";
import { Module, modulesMock } from "./modulesMock";

export const HomePage = () => {
    const getModule = ({ type, title, description, image, buttons }: Module) => {
        switch (type) {
            case "full-width-image-text-module":
                return (
                    <FullWidthImageWithTextModule
                        key={`home-${title}`}
                        title={title}
                        description={description}
                        image={image!}
                        buttons={buttons!}
                    />
                );
        }
    };

    const modules = modulesMock.map((module) => getModule(module));

    return <>{modules}</>;
};
