/**
 * Created by sb on 10.05.2016.
 */

import React from 'react';

export function Todo( props )
{
  const { todo } = props;

  if( todo.isDone )
  {
    return <strike>{todo.text}</strike>;
  }
  else
  {
    return <span>{todo.text}</span>;
  }
}

export function TodoList( props )
{
  const { todos, toggleTodo, addTodo } = props;

  const onSubmit = ( event ) =>
  {
    const input        = event.target;
    const text         = input.value;
    const isEnterKey   = (event.which == 13);
    const isLongEnough = text.length > 0;

    if( isEnterKey && isLongEnough )
    {
      input.value = '';
      addTodo( text );
    }
  };

  const toggleClick = id => event => toggleTodo( id );

  return (
    <div className='todo'>
      <input type='text'
             className='todo__entry'
             placeholder='Добавить запись'
             onKeyDown={ onSubmit } />

      <ul className='todo__list'>
        { todos.map( todo => (
          <li key={ todo.get( 'id' ) }
              className='todo__item'
              onClick={ toggleClick( todo.get( 'id' ) ) } >

            <Todo todo={ todo.toJS() } />
          </li>
        ) )}
      </ul>
    </div>
  );
}