import {createContext, useContext} from "react";
import {pageStore} from "./page";

export const PageContext = createContext(pageStore);

export const usePage = () => useContext<typeof pageStore>(PageContext);
