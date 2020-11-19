// import _ from 'lodash';
import axios from 'axios';
import { todoListState } from '../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import {
//    CREATE_TODO_ITEM,
//    DELETE_TODO_ITEM,
//    TOGGLE_IS_IMPORTANT,
//    TOGGLE_IS_DONE,
//    MOUNT_TODO_LIST,
//    PERGE_TODO_ITEM,
//    PERGE_TASKS,
// } from '../actions/index';
import { v4 as uuidv4 } from 'uuid';
// type todoListActionType = {
//    type: string;
//    payload: {
//       index: number;
//       data?: todoListState[];
//    } & Partial<todoListState>;
// };

// const todoList = (
//    state: todoListState[] = [],
//    action: todoListActionType
// ): todoListState[] => {
//    const apiUrl = `${process.env.REACT_APP_SERVER_URL}api/todo_lists/`;
//    switch (action.type) {
//       case CREATE_TODO_ITEM: {
//          const getUniqueKey = () => {
//             return new Date().toISOString() + '~' + Math.random().toString(36);
//          };
//          const newTodoItem = {
//             key: getUniqueKey(),
//             title: action.payload.title!,
//             isImportant: action.payload.isImportant!,
//             isDone: false,
//             subjectKey: action.payload.subjectKey!,
//             isTask: action.payload.isTask!,
//          };
//          axios.post(apiUrl, newTodoItem);

//          return [...state, newTodoItem];
//       }
//       case DELETE_TODO_ITEM: {
//          const newTodoList = _.cloneDeep(state);
//          newTodoList.splice(action.payload.index, 1);

//          const key = state[action.payload.index].key;
//          axios.delete(apiUrl, { data: { key } });

//          return newTodoList;
//       }

//       case TOGGLE_IS_IMPORTANT: {
//          const newTodoList = _.cloneDeep(state);
//          const focusedTodoItem = newTodoList[action.payload.index];
//          focusedTodoItem.isImportant = !focusedTodoItem.isImportant;

//          const key = focusedTodoItem.key;
//          axios.patch(apiUrl + 'is_important/', { key });

//          return newTodoList;
//       }

//       case TOGGLE_IS_DONE: {
//          const newTodoList = _.cloneDeep(state);
//          const focusedTodoItem = newTodoList[action.payload.index];
//          focusedTodoItem.isDone = !focusedTodoItem.isDone;

//          const key = focusedTodoItem.key;
//          axios.patch(apiUrl + 'is_done/', { key });

//          return newTodoList;
//       }
//       case MOUNT_TODO_LIST: {
//          return action.payload.data!;
//       }

//       case PERGE_TODO_ITEM: {
//          const newTodoList = state.filter(todoItem => {
//             return todoItem.subjectKey !== action.payload.subjectKey;
//          });

//          axios.post(apiUrl + 'delete_subject/', {
//             subjectKey: action.payload.subjectKey,
//          });

//          return newTodoList;
//       }
//       case PERGE_TASKS: {
//          const newTodoList = state.filter(todoItem => {
//             return !todoItem.isTask;
//          });

//          axios.post(apiUrl + 'perge_tasks/');

//          return newTodoList;
//       }

//       default: {
//          return state;
//       }
//    }
// };

const apiUrl = `${process.env.REACT_APP_SERVER_URL}api/todo_lists/`;

const todoListSlice = createSlice({
   name: 'todoList',
   initialState: [] as todoListState[],
   reducers: {
      addTodo(state, action: PayloadAction<addTodoPayloadType>) {
         const newTodoItem = {
            key: uuidv4(),
            title: action.payload.title,
            isImportant: action.payload.isImportant,
            isDone: false,
            subjectKey: action.payload.subjectKey,
            isTask: action.payload.isTask,
         };
         axios.post(apiUrl, newTodoItem);
         state.push(newTodoItem);
      },
      deleteTodo(state, action: PayloadAction<{ index: number }>) {
         state.splice(action.payload.index, 1);

         const key = state[action.payload.index].key;
         axios.delete(apiUrl, { data: { key } });
      },
      toggleIsDone(state, action: PayloadAction<{ index: number }>) {
         const focusedTodoItem = state[action.payload.index];
         focusedTodoItem.isDone = !focusedTodoItem.isDone;

         const key = focusedTodoItem.key;
         axios.patch(apiUrl + 'is_done/', { key });
      },
      toggleIsImportant(state, action: PayloadAction<{ index: number }>) {
         const focusedTodoItem = state[action.payload.index];
         focusedTodoItem.isImportant = !focusedTodoItem.isImportant;

         const key = focusedTodoItem.key;
         axios.patch(apiUrl + 'is_important/', { key });
      },
      mountTodoList(state, action: PayloadAction<{ data: todoListState[] }>) {
         state = action.payload.data;
      },
      pergeTodoItem(state, action: PayloadAction<{ subjectKey: string }>) {
         const newTodoList = state.filter(todoItem => {
            return todoItem.subjectKey !== action.payload.subjectKey;
         });

         axios.post(apiUrl + 'delete_subject/', {
            subjectKey: action.payload.subjectKey,
         });
         return newTodoList;
      },
      pergeTasks(state) {
         const newTodoList = state.filter(todoItem => {
            return !todoItem.isTask;
         });

         axios.post(apiUrl + 'perge_tasks/');

         return newTodoList;
      },
   },
});

type addTodoPayloadType = {
   title: string;
   isImportant: boolean;
   subjectKey: string;
   isTask: boolean;
};

export const {
   addTodo,
   deleteTodo,
   toggleIsImportant,
   toggleIsDone,
   mountTodoList,
   pergeTodoItem,
   pergeTasks,
} = todoListSlice.actions;

export default todoListSlice.reducer;
