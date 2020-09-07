export const initialState = {
   todoList: [],
   subjectList: [],
   config: { activeIndex: -1, separate: true },
};
export const initialConfig = {
   activeIndex: -1,
   separate: false,
};

export const todoListTemplate = {
   key: '',
   title: '',
   isDone: false,
   isImportant: false,
   isTask: false,
};

export const subjectListTemplate = {
   title: '',
};