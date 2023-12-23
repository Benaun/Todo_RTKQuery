import TodoItem from "./TodoItem";
import { useGetTodosQuery } from '../store/todosApi'

export default function TodoList() {
    const {isError, isLoading, data: todos } = useGetTodosQuery();
    {isError && <h3 className="text-2xl text-red-400 font-bold">Ошибка при загрузке...</h3>}
    {isLoading && <h3 className="text-2xl font-bold">Идет загрузка...</h3>}
    return <div className="mt-8">
        {todos?.length
            ? <ul>
                {todos?.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        item={todo}
                    />
                ))}
            </ul>
            : <h3 className="text-2xl font-bold">Список дел пуст...</h3>
        }
    </div>

}