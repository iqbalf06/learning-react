const root = document.querySelector('#root')

function App() {
    const [nama, setNama] = React.useState('');

    function ketikaSubmit(event) {
        event.preventDefault();

        console.log('Nama:', nama);
    }

    return (
        <form onSubmit={ketikaSubmit}>
            <div>
                <label>Nama: </label>
                <input type="text" name="nama" onChange={function () {
                    setNama(event.target.value);
                }} />
            </div>
            <button type="submit">Kirim</button>
        </form>
    );
}

ReactDOM.render(<App />, root);