import React, { useState, useEffect, useRef} from 'react';

import 'react-calendar/dist/Calendar.css';
import TodoFilter from './TodoFilter';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value :'');
  const [date, setDate] = useState(props.edit ? props.edit.date :'');
  const [status, setStatus] = useState(props.edit ? props.edit.status :'');
  const[selective,setSelective] = useState('Günlük');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  const handleChange = e => {
    setInput(e.target.value);
  };
  const statusChange = (e) => {
    setStatus(e.target.value); 
  };

  const dateChange = (e) => {
    setDate(e.target.value);
  };

  const filterChange = e =>{
    props.applyFilter(e);
    setSelective(e);
  }
  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random()*100),
      input: input,
      status: status,
      date: new Date(date).toLocaleDateString(),
    });
    setInput('');
    setStatus('');
    setDate('');
  };
  

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <div className='new-expense__controls'>
            <div>
              <input
              placeholder='Güncelleyiniz'
              value={input}
              onChange={handleChange}
              name='text'
              ref={inputRef}
              className='todo-input edit'
            />
            </div>
          <div>
            <input
                required
                onChange={dateChange}
                value={date}
                type="date"
                min='2021-12-31'
                max='2032-12-31'
                className='todo-input edit1'
              />
          </div>

          <div>
            <select 
            required
            type="text"
            value={status}
            onChange={statusChange}
            className='todo-input-filter1 edit'
            >
                <option value="Günlük">Günlük</option>
                <option value="Haftalık">Haftalık</option>
                <option value="Aylık"> Aylık</option>
            </select>
           </div>
          <button onClick={handleSubmit} className='todo-button edit'>
            Güncelleyiniz
          </button>
          </div>

        </>
      ) : (
        <>
        <div className='new-expense__controls'>
        <div>
          <input
              required
              type="text"
              placeholder='Ekle...'
              value={input}
              onChange={handleChange}
              ref={inputRef}
              className='todo-input'
            />
        </div>
        <div>
          <input
              required
              onChange={dateChange}
              value={date}
              type="date"
              min='2021-12-31'
              max='2032-12-31'
              className='todo-input'
            />
        </div>

          <div>
            <select 
            required
            type="text"
            value={status}
            onChange={statusChange}
            className='todo-input-filter'
            >
                <option value=""></option>
                <option value="Günlük">Günlük</option>
                <option value="Hafttalık">Hafttalık</option>
                <option value="Aylık"> Aylık</option>
            </select>
           </div>
           <button onClick={handleSubmit} className='todo-button'>
            Ekle
          </button>
        </div>
          <TodoFilter status = {selective} onChangeFilter={filterChange}/>
        </>
      )}
    </form>
  );
}

export default TodoForm;