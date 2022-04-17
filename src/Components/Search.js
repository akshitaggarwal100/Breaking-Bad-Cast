import { useState } from 'react';
import '../App.css';

function Search({ getQuery }) {
    const [text, setText] = useState('');

    function onChange(q) {
        setText(q);
        getQuery(q);
    }

    return (
        <div className='search'>
            <input value={text} onInput={e => onChange(e.target.value)} type="text" className='form-control' placeholder='Search Characters' />
        </div>
    )
}

export default Search