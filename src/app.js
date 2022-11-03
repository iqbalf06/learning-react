const root = document.querySelector('#root')

function App() {
    const [activity, setActivity] = React.useState('');
    const [todos, setTodos] = React.useState([])

    function generateId() {
        return Date.now();
    }
     
    function addTodoHandler(event) {
        event.preventDefault();

        setTodos([
            ...todos, 
            {
                id: generateId(),
                activity: activity,
            },
        ]);
        setActivity('');    
    }

    function removeTodoHandler(todoId) {
        const filteredTodos = todos.filter(function (todo) {
            return todo.id !== todoId
        });

        setTodos(filteredTodos)
    }

    return (
        <>
        <h1>Simple To do List</h1>
        <form onSubmit={addTodoHandler}>
            <input type="text" 
            placeholder="Nama aktivitas" 
            value={activity}
            onChange={function (event) {
                setActivity(event.target.value);
            }}>
            </input>
            <button type="submit">Tambah</button>
        </form>
        <ul>
            {todos.map(function (todo) {
                return (
                <li key={todo.id}>{todo.activity}
                <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
                </li>
                );
            })}
        </ul>
        </>
    )
}

ReactDOM.render(<App />, root);