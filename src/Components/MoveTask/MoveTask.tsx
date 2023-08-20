import css from './MoveTask.module.css';
import { TaskList, Issue, IssueUndef } from '../../App';

interface MoveTaskProps {
    updateTasks: (updatedListTasks: TaskList, updatedPrevListTasks?: TaskList)=> void, 
    optionList: TaskList,
    listTasks: TaskList, 
    setButtonClicked: any
}

function MoveTask({ updateTasks, optionList, listTasks, setButtonClicked }: MoveTaskProps) {
	const handleChange = (e: any) => {
		const newTask: IssueUndef = optionList.issues.find((issue: Issue) => issue.name === e.target.value)

        if (!newTask) throw new TypeError('The value was promised to always be there!');

		const updatedListTasks: TaskList = {
			title: listTasks.title,
			issues: [...listTasks.issues, newTask]
		}
		const updatedPrevListTasks: TaskList = {
			title: optionList.title,
			issues: [...optionList.issues].filter((issue: Issue) => issue.name !== e.target.value)
		}

		updateTasks(updatedListTasks, updatedPrevListTasks)
		setButtonClicked(false)
	}

	return (
		<select name='select' id='select' className={css.select} onChange={handleChange}>
			<option value=''></option>
			{optionList.issues.map((issue: Issue) => {
				return <option
					key={issue.id}
					value={issue.name}
					className={css.option}>
					{issue.name}
				</option>
			})}
		</select>
	)
}

export default MoveTask;