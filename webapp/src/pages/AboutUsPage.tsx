import { AboutUsContentModule } from "containers/AboutUsContent/AboutUsContentModule";

export const AboutUsPage = () => {
    return (
        <>
            <AboutUsContentModule
                title1="Title 1"
                description1="Description one"
                image1="../../public/logo512.png"
                image1Left={true}
                title2="Title 2"
                description2="Description two"
                image2="../../public/logo512.png"
                image2Left={false}
            />
        </>
    );
};
