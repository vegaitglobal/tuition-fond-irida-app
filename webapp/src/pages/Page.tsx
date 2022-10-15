import { ReactNode } from "react";

interface Props {
    modules: ReactNode[];
}
export const Page = (props: Props) => {
    const { modules } = props;

    return <>{modules}</>;
};
