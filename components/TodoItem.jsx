import Button from "./Button";
import { useDeleteTodoMutation, useToggleCompleteMutation } from "../store/todosApi";

export default function TodoItem({ item }) {
    const [deleteTodo] = useDeleteTodoMutation();
    const [toggleCompleteTodo] = useToggleCompleteMutation();
    const {id, title, completed} = item;

    const handleDelete = async (id) => {
        await deleteTodo(id)
    }

    const handleToggle = async (item) => {
        await toggleCompleteTodo({...item, completed: !completed})
    }

    return (
        <li className={!completed
            ? "p-2 bg-white rounded-lg mb-2"
            : "p-2 bg-lime-400 rounded-lg mb-2"}>
            <div className="flex align-middle flex-row justify-between">
                <div className="p-2">
                    <input
                        className=" h-6 w-6"
                        type="checkbox"
                        checked={completed}
                        onChange={() => handleToggle(item)}
                    />
                </div>
                <div className="p-2">
                    <p className="text-lg text-black">
                        {title}
                    </p>
                </div>

                <Button
                    className="text-red-500 border-2 border-red-500 px-3 rounded-lg"
                    onClick={() => handleDelete(id)}
                    text={"X"}
                />      
            </div>

        </li>
    )
};
