import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import css from './TaskDetails.module.css'
import { Button, Close } from '../Button/Button'
import { TaskList, Issue } from '../../App';
import { MainProps } from '../Main/Main'
import { IssueUndef } from '../../App';

type IssueNum =  [Issue, number];
type IssueNumNull = IssueNum | null;
type IssueNumNullUndef = IssueNumNull | undefined;


const TaskDetails = ({ tasks, setTasks }: MainProps) => {
	const [isActive, setIsActive] = useState<boolean>(false)
	const [textValue, setTextValue] = useState<string>('')
	const { id } = useParams()
	const defaultDescription: string = 'This task has no description'

	const getIssue = (): IssueNum => {
		const currentIssue: IssueNumNull[] = tasks.map((task: TaskList, index: number): IssueNumNull => {
			const findIssue: IssueUndef = task.issues.find((issue: Issue) => issue.id === id)
			//return array: 1st element - issue object, 2nd element - index of task list
			if (findIssue) return [findIssue, index]
			//return null for all other issues
			return null;
		})

        const currentIssueItem: IssueNumNullUndef = currentIssue.find((item: IssueNumNull) => item !== null)

        if (!currentIssueItem) throw new TypeError('The value was promised to always be there!');

		return currentIssueItem
	}
	const handleClick = (): void => {
		setIsActive(!isActive)
		const currentIssue: Issue = getIssue()[0]
		currentIssue.description ? setTextValue(currentIssue.description) : setTextValue(defaultDescription)
	}
	const onChange = (e: any) => {
		setTextValue(e.target.value)
	}
	const handleSubmit = (e: any) => {
		e.preventDefault()
		const currentIssue: IssueNum = getIssue()
		currentIssue[0].description = textValue;

		const updatedTasks: TaskList[] = tasks.map((item: TaskList, index: number) => {
			if (index === currentIssue[1]) {
				item.issues[item.issues.indexOf(currentIssue[0])] = currentIssue[0]
			}
			return item
		})

		setTasks(updatedTasks)
		setIsActive(!isActive)
	}
	const renderConditions = () => {
		const currentIssue: Issue = getIssue()[0]
		if (!isActive) {
			return (
				<>
					<p className={css.description}>{currentIssue.description || defaultDescription}</p>
					<Button
						type={'button'}
						btnClass={'btnEdit'}
						disabled={false}
						handleClick={handleClick}
					>
						Edit...
					</Button>
				</>
			)
		} else {
			return (
				<form className={css.form} onSubmit={handleSubmit}>
					<textarea name='description' className={css.editDescription} value={textValue} onChange={onChange}></textarea>
					<Button
						type={'submit'}
						btnClass={'btnSubmit'}
						disabled={false}>
						Submit
					</Button>
				</form>
			)
		}
	}

	return (
		<div className={isActive ? `${css.taskDetails} ${css.isEditActive}` : `${css.taskDetails}`}>
			<h2 className={css.title}>{getIssue()[0].name}</h2>
			{renderConditions()}
			<Link to={'/'}>
				<Close />
			</Link>
		</div>
	)
}

export default TaskDetails;