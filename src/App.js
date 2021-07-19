import Editor from './Editor';

const initialValue = [
    {
        type: 'p',
        children: [
            {
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, eius. Omnis possimus quia maxime vero, sint iusto et illo accusamus!',
            },
        ],
    },
];

function App() {
    const handleChange = (value) => {
    };

    return (
        <div className='App'>
            <Editor
                initialValue={initialValue}
                onChange={handleChange}
                inputFormat={'slate'}
                outputFormat={'slate'}
            />
        </div>
    );
}

export default App;
