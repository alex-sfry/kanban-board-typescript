import css from './Footer.module.css'
import { LIST_TYPES } from '../../config';
import { TaskList } from '../../App';

interface FooterProps {
    tasks: TaskList[]
}

const Footer = ({ tasks }: FooterProps) => {
    const backlogTaskList: TaskList | undefined = tasks.find((list: TaskList) => list.title === LIST_TYPES.BACKLOG);
    const finishedTaskList: TaskList | undefined = tasks.find((list: TaskList) => list.title === LIST_TYPES.FINISHED);

    if (!backlogTaskList || !finishedTaskList) throw new TypeError('The value was promised to always be there!');

	const backlogCount: number = backlogTaskList.issues.length
	const finishedCount: number = finishedTaskList.issues.length

	return (
		<footer className={css.footer}>
			<div className={css.container}>
				<div className={css.counter}>
					<p>Active tasks: {backlogCount}</p>
					<p>Finished tasks: {finishedCount}</p>
				</div>
				<p>Kanban board by AlexT, 2023</p>
			</div>
		</footer>
	)
}

export default Footer;