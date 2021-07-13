import Editor from './Editor';

function App() {
    const handleChange = (value) => {
        console.log(value);
    };

    return (
        <div className='App'>
            <Editor
                initialValue={'sadasd'}
                onChange={handleChange}
                inputFormat={'markdown'}
                outputFormat={'markdown'}
            />
        </div>
    );
}

export default App;
