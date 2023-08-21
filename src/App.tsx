import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
//import dataMock from './mock';

export type IssueUndef = Issue | undefined;
export type TaskListUndef = TaskList | undefined;

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
    return (
        <div className='wrapper'>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;