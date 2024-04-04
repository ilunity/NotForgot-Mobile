import {FontProvider} from "./providers"
import {TasksListProvider} from "@entities/task";
import {PageProvider} from "@shared/store";
import {Router} from "@app/router";

export const App: React.FC = () => {
    return (
        <FontProvider>
            <PageProvider>
                <TasksListProvider>
                    <Router/>
                </TasksListProvider>
            </PageProvider>
        </FontProvider>
    );
}
