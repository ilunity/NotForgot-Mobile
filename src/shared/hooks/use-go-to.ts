import {PAGES_NAMES, PAGES_PROPS, usePage} from "@shared/store";

export const useGoTo = <T extends `${PAGES_NAMES}`>(pageName: T, props?: PAGES_PROPS<T>) => {
    const page = usePage();
    return () => page.goTo<T>(pageName, props);
};
