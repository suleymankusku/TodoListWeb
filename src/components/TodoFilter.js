import React from 'react'

const TodoFilter = (props) => {
    const dropdownChange=(event)=>{
        props.onChangeFilter(event.target.value);
    }


  return (
    <div className='expenses-filter'>
        <h1>
          Filtreleme İşlemleri
        </h1>
      <div className='expenses-filter__control'>
        <select className='todo-input-filter1' value={props.selected} onChange={dropdownChange}>
          <option value="Hepsi">Hepsi</option>
          <option value="Günlük">Günlük</option>
          <option value="Haftalık">Haftalık</option>
          <option value="Aylık"> Aylık</option>
        </select>
      </div>
    </div>
  )
}

export default TodoFilter