import {ReactNode} from "react";
import {PageContext} from "./context";
import {pageStore} from "./page";

type Props = {
    children?: ReactNode;
};


export const PageProvider: React.FC<Props> = ({children}) => (
    <PageContext.Provider value={pageStore}>
        {children}
    </PageContext.Provider>
);
