import React, { useState, useEffect, useRef} from 'react';

import 'react-calendar/dist/Calendar.css';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value :'');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id:Math.random(),
      text: input
    });
    setInput('');
  };
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Güncelleyiniz'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Güncelleyiniz
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Ekle...'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input'
          />
          <button onClick={handleSubmit} className='todo-button'>
            Ekle
          </button>

          <div className="filter-btns">
            <select name="todos">
                <option value="hepsi">Hepsi</option>
                <option value="gunluk">Günlük</option>
                <option value="haftalik">Hafttalık</option>
                <option value="aylik"> Aylık</option>
            </select>
           </div>
        </>
      )}
    </form>
  );
}

export default TodoForm;
