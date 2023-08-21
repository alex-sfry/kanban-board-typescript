import { Routes, Route } from 'react-router-dom';
import css from './Main.module.css';
import Board from '../Board';
import TaskDetails from '../TaskDetails';

const Main = () => {
	return (
		<main className={css.main}>
			<div className={css.container}>
				<Routes>
					<Route path='/' element={<Board />} />
					<Route path='/tasks/:id' element={<TaskDetails />} />
				</Routes>
			</div>
		</main>
	)
}

export default Main;