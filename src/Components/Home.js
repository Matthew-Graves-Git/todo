import useFetch from "../Hooks/useFetch";
import TodoList from './TodoList';

const Home = () => {
    const {data:todo, isLoading, error} = useFetch('http://localhost:8000/todos');

    return ( 
    <div className="home">
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {todo && <TodoList todos = {todo} ></TodoList>}
    </div> 
    );
}
 
export default Home;