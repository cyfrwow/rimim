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
                outputFormat={'slate'}
            />
        </div>
    );
}

export default App;
