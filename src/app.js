const root = document.querySelector('#root')

function App() {
    const [login, setLogin] = React.useState(false);

    if (login) {
        return (
            <>
                <h1>Udah Login, Bang</h1>
                <button
                    onClick={function () {
                        setLogin(false);
                    }}>
                    Logout
                </button>
            </>
        );
    }

    return (
        <>
            <h1>Login Dulu, Bang</h1>
            <button
                onClick={function () {
                    setLogin(true);
                }}>
                Login
            </button>
        </>
    );
}

ReactDOM.render(<App />, root);
