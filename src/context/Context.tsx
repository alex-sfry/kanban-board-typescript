import { useState, useEffect, createContext } from "react";
import initialState from '../emptyMock';
import { TaskList } from '../App';

interface Data {
    tasks: TaskList[];
    setTasks: any;
    updateTasks: (updatedListTasks: TaskList, updatedPrevListTasks?: TaskList) => void;
}

export type globalContextData = Data | null

// global context
export const boardContext = createContext<globalContextData>(null);

const TasksContextProvider = ({ children }: any) => {
    // empty localstorage --> initial state = array with list titles and empty issues arrays	
    const [tasks, setTasks] = useState<TaskList[]>(JSON.parse(window.localStorage.getItem('tasks') as string) || initialState)

    useEffect(() => {
        window.localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const updateTasks = (updatedListTasks: TaskList, updatedPrevListTasks?: TaskList): void => {
		const updatedListIndex: number = tasks.findIndex((task: TaskList) => task.title === updatedListTasks.title)
		const updatedTasks: TaskList[] = tasks.map((item: TaskList, index: number) => {
			if (index === updatedListIndex) {
				return updatedListTasks;
			}
            
            if (typeof(updatedPrevListTasks) !== 'undefined') {
                if (index === updatedListIndex - 1) {
                    return updatedPrevListTasks;
                }
            }
			
			return item;
		})
		setTasks(updatedTasks)
	}

    const data: Data = {
        tasks: tasks,
        setTasks: setTasks,
        updateTasks: updateTasks
    }

    return (
        <boardContext.Provider value={data}>
            {children}
        </boardContext.Provider>
    );

}

export default TasksContextProvider;
