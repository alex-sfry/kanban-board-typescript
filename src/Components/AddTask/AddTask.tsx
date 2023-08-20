import { useState } from 'react';
import css from './AddTask.module.css';
import { Button } from '../Button/Button';
import { v4 as uuidv4 } from 'uuid';
import { TaskList } from '../../App';

interface AddTaskProps {
    updateTasks: (updatedListTasks: TaskList, updatedPrevListTasks?: TaskList)=> void, 
    setButtonClicked: any,
    listTasks: TaskList
}

function AddTask({ updateTasks, setButtonClicked, listTasks }: AddTaskProps) {
	const [title, setValue] = useState('')

	const handleChange = (e:any): void => {
		setValue(e.target.value)
	}
	const handleSubmit = (e:any): void => {
		e.preventDefault()
		if (title) {
			const updatedListTasks: TaskList = {
				title: listTasks.title,
				issues: [...listTasks.issues, { id: uuidv4(), name: title, description: '' }]
			}
			updateTasks(updatedListTasks)
		}
		setButtonClicked(false)
	}

	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<input type='text' className={css.input} onChange={handleChange} value={title} placeholder='New task title... '></input>
			<Button
				type={'submit'}
				btnClass={'btnSubmit'}
				disabled={false}>
				Submit
			</Button>
		</form>
	)
}

export default AddTask;