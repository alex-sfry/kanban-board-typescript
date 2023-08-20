import css from './Board.module.css';
import { LIST_TYPES, LIST_TITLES } from '../../config'
import List from '../List';
import { TaskList } from '../../App';

interface BoardProps {
    tasks: TaskList[], 
    setTasks: any
}

const Board = ({ tasks, setTasks }: BoardProps) => {
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

	return (
		<div className={css.board}>
			{Object.values(LIST_TYPES).map((type: string) => {
				const currListIndex: number = tasks.findIndex((item: TaskList) => item.title === type)
                const listTasks: TaskList | undefined = tasks.find((item: TaskList) => item.title === type);
                
                if (listTasks === undefined) throw new TypeError('The value was promised to always be there!');

				return (
					<List
						key={type}
						title={LIST_TITLES[type]}
						listTasks={listTasks}
						//if localstorage is empty prevListTasks is the same as listTasks --> both are empty
						prevListTasks={tasks[currListIndex - 1] || tasks[currListIndex]}
						updateTasks={updateTasks}
					/>
				)
			})}
		</div>
	)
}

export default Board;