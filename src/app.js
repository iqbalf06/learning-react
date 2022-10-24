const root = document.querySelector('#root')

function App() {
    const [login, setLogin] = React.useState(false);

        return (
            <>
                <h1>Application</h1>
                <p>{login === true && <b>kamu sudah login</b>}</p>
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
