import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import initialState from './emptyMock'
//import dataMock from './mock';

export type IssueUndef = Issue | undefined;
export type TaskListUndef =  TaskList | undefined;

export interface Issue {
    id: string | number,
    name: string,
    description: string
}

export interface TaskList {
    title: string,
    issues: Issue[]
}

function App() {
	// empty localstorage --> initial state = array with list titles and empty issues arrays	
	const [tasks, setTasks] = useState<TaskList[]>(JSON.parse(window.localStorage.getItem('tasks') as string) || initialState)

	useEffect(() => {
		window.localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])
	
	return (	
		<div className='wrapper'>
			<Header />
			<Main tasks={tasks} setTasks={setTasks} />
			<Footer tasks={tasks} />
		</div>
	);
}

export default App;