import { useState, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import css from './List.module.css';
import { Button } from '../Button/Button';
import image from '../../Assets/plus.svg';
import MoveTask from '../MoveTask';
import AddTask from '../AddTask';
import { TaskList, Issue } from '../../App';
import { boardContext, globalContextData } from '../../context/Context';

interface ListProps {
    title: string,
    listTasks: TaskList,
    prevListTasks: TaskList,
}

interface listData {
    listTasks: TaskList;
    optionList: TaskList;
}

export type listContextData = listData | null

export const listContext = createContext<listContextData>(null);

const List = ({ title, listTasks, prevListTasks }: ListProps) => {
    const listData: listData = {
        listTasks: listTasks,
        optionList: prevListTasks
    }

    const data: globalContextData = useContext(boardContext);
    const { updateTasks, setTasks } = data!;

    const [isButtonClicked, setIsButtonClicked] = useState<Boolean>(false)
    const btnDisabled: boolean = listTasks.title !== 'backlog' && !prevListTasks.issues.length ? true : false

    const handleClick = (): void => {
        setIsButtonClicked(!isButtonClicked)
    }

    const handleChange = (e: any): void => {
        const delTaskId: any = e.target.parentElement.getAttribute('data-id');
        const issues: Issue[] = listTasks.issues.filter((issue) => issue.id !== delTaskId)
        
        const updatedListTasks: TaskList = {
            title: listTasks.title,
            issues: issues
        }

        setTasks(updateTasks(updatedListTasks));
	}

    const listControls = (): JSX.Element => {
        if (isButtonClicked && title === 'Backlog')
            return <AddTask
                setButtonClicked={setIsButtonClicked}
            />
        if (isButtonClicked && title !== 'Backlog')
            return <MoveTask
                setButtonClicked={setIsButtonClicked}
            />
        return (
            <Button
                type={'submit'}
                btnClass={'btnAdd'}
                disabled={btnDisabled}
                handleClick={handleClick}>
                <img src={image} className={css.icon} alt='icon' />
                Add card
            </Button>
        )
    }

    return (
        <listContext.Provider value={listData}>
            <div className={css.container}>
                <div className={css.card}>
                    <h2 className={css.listTitle}>{title}</h2>
                    <ul className={css.list}>
                        {listTasks.issues.map((issue: Issue) => {
                            return (
                                <div key={issue.id} data-id={issue.id}>
                                    <Link to={`/tasks/${issue.id}`} key={issue.id}>
                                        <li className={css.listItem}>{issue.name}</li>                                    
                                    </Link>
                                    <button className={css.deleteBtn} onClick={handleChange}></button>
                                </div>
                                
                            )
                        })}
                    </ul>
                    {listControls()}
                </div>
            </div>
        </listContext.Provider>
    )
}

export default List;