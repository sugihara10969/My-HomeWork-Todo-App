import {
   CREATE_TODO_ITEM,
   DELETE_TODO_ITEM,
   TOGGLE_IS_IMPORTANT,
   TOGGLE_IS_DONE,
} from '../actions/index';
import axios from 'axios';

const todoList = (state = [], action) => {
   const apiUrl = 'http://localhost:3001/api/todo_lists/';
   switch (action.type) {
      case CREATE_TODO_ITEM: {
         const getUniqueKey = () => {
            return new Date().toISOString() + '~' + Math.random().toString(36);
         };
         const newTodoItem = {
            key: getUniqueKey(),
            title: action.title,
            isImportant: action.isImportant,
            isDone: false,
            subjectIndex: action.subjectIndex,
         };

         // axios.post(apiUrl, { ...newTodoItem }).then(todo => {
         //    console.log(todo.data);
         //    return [...state, todo.data];
         // });

         // const todo = {};
         // async function callApi() {
         //    const res = await axios.post(apiUrl, { ...newTodoItem });
         //    todo = await res.data;
         //    return [...state, todo]
         // }
         // callApi();

         axios.post(apiUrl, newTodoItem ).then(res => {
            console.log(res);
         });

         return [...state, newTodoItem];
      }
      case DELETE_TODO_ITEM: {
         const newState = [...state];
         newState.splice(action.index, 1);

         const key = state[action.index].key;
         axios.delete(apiUrl, { data: { key } }).then(res => {
            console.log(res);
         });

         return newState;
      }

      case TOGGLE_IS_IMPORTANT: {
         const index = action.index;
         const newState = [...state];
         newState[index].isImportant = !newState[index].isImportant;

         const key = state[action.index].key;
         axios.patch(apiUrl + 'is_important/', { key }).then(res => {
            console.log(res);
         });

         return newState;
      }

      case TOGGLE_IS_DONE: {
         const index = action.index;
         const newState = [...state];
         newState[index].isDone = !newState[index].isDone;

         const key = state[action.index].key;
         axios.patch(apiUrl + 'is_done/', { key }).then(res => {
            console.log(res);
         });

         return newState;
      }

      default: {
         return state;
      }
   }
};

export default todoList;