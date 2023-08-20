import { Routes, Route } from 'react-router-dom';
import css from './Main.module.css';
import Board from '../Board';
import TaskDetails from '../TaskDetails';
import { TaskList } from '../../App';

export interface MainProps {
    tasks: TaskList[],
    setTasks: any
}

const Main = (props: MainProps) => {
	return (
		<main className={css.main}>
			<div className={css.container}>
				<Routes>
					<Route path='/' element={<Board {...props} />} />
					<Route path='/tasks/:id' element={<TaskDetails {...props} />} />
				</Routes>
			</div>
		</main>
	)
}

export default Main;