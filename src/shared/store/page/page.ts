import {PAGES_NAMES, PAGES_PROPS} from "./page.types";
import {makeAutoObservable} from "mobx";

class Page {
    current: `${PAGES_NAMES}` = PAGES_NAMES.TASKS;
    props: PAGES_PROPS<any>;

    constructor() {
        makeAutoObservable(this);
    }

    goTo<T extends `${PAGES_NAMES}`>(pageName: T, props?: PAGES_PROPS<T>) {
        this.current = pageName;

        if (props) {
            this.props = props;
        }
    }

    getProps<T extends `${PAGES_NAMES}`>(): PAGES_PROPS<T> {
        return this.props as PAGES_PROPS<T>;
    }
}

export const pageStore = new Page();
