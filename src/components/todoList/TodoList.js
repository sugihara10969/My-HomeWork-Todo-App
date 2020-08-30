import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import styled from 'styled-components';
// import { color as c } from '../color';

import TodoItem from './TodoItem';

const TodoList = () => {
   const { state, activeIndex } = useContext(AppContext);

   const todos = state.todoList
      .map((todo, index) => {
         return <TodoItem todo={todo} key={index} index={index} />;
      })
      .filter(comp => {
         const todo = comp.props.todo;
         if (activeIndex === -1) {
            return true;
         } else if (activeIndex === -2) {
            return todo.subjectIndex === -1;
         } else {
            return todo.subjectIndex === activeIndex;
         }
      });

   return <Wrapper>{todos}</Wrapper>;
   // return <Wrapper>{todos === {} ? <p>タスクがありません</p> : todos}</Wrapper>;
};

const Wrapper = styled.div`
   margin: 48px 0 58.5px 0;
   width: 100%;
   position: relative;
   width: 100%;
`;

export default TodoList;