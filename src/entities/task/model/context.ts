import {createContext, useContext} from "react";
import {tasksListStore} from "@entities/task/model/store";

export const TasksListContext = createContext(tasksListStore);

export const useTasksList = () =>  useContext<typeof tasksListStore>(TasksListContext);
