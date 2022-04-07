import './style.scss'
import React from 'react';

export const Toolbar = ({search, setSearch, isAmount, setisAmount}: any) => {

  return <div className='toolbar'>
    <input type='text'
           placeholder='Search'
           className='search'
           value={search}
           onChange={event => setSearch(event.target.value)}/>
    <p>In stock</p>
    <input type='checkbox'
           id="box"
           value={isAmount}
           onChange={event => setisAmount(event.target.value)}/>
  </div>
}