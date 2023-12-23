import Button from './Button'

export default function Input({ value, changeText, handleAction }) {
    return (
        <div className="mt-4 flex">
            <input
                className="w-80 border-b-2 border-gray-500 text-black pl-2"
                type='text'
                placeholder='Текст задачи'
                value={value}
                onChange={(e) => changeText(e.target.value)}
            />
            <Button
                className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg"
                text='Добавить'
                onClick={handleAction}
            />
        </div>
    )
}; 