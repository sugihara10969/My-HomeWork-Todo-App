import React, { useState } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { color as c } from '../../constant/color';

import Checkbox from '@material-ui/core/Checkbox';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { getActiveIndex } from '../../selector';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../reducers/todoList';

const TodoForm = () => {
   const selector = useSelector(state => state);
   const activeIndex = getActiveIndex(selector);
   const subjectList = useSelector(state => state.subjectList);
   const dispatch = useDispatch();
   const [title, setTitle] = useState('');
   const [isImportant, setIsImportant] = useState(false);

   const createTodo = () => {
      if (title.trim() === '') {
         return;
      }
      const isTask = activeIndex === -2 || activeIndex === -1 ? true : false;
      const subjectKey = isTask ? '' : subjectList[activeIndex].key;
      dispatch(
         addTodo({
            title,
            isImportant,
            subjectKey,
            isTask,
         })
      );
      setTitle('');
      setIsImportant(false);
   };
   const handleSubmitCreateTodo = (e: React.FormEvent) => {
      e.preventDefault();
      createTodo();
   };
   const handleClickIsImportant = () => {
      setIsImportant(prev => !prev);
   };
   const handleChangeSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputTitle = e.target.value;
      setTitle(inputTitle);
   };

   return (
      <Wrapper>
         <Form onSubmit={handleSubmitCreateTodo}>
            <IconButton color="primary" type="submit">
               <AddIcon color="primary" />
            </IconButton>
            <InputOfTitle
               type="text"
               placeholder="タスクを追加"
               value={title}
               onChange={handleChangeSetTitle}
            />
            <Checkbox
               style={{ marginLeft: 'auto' }}
               icon={<StarBorderIcon color="primary" />}
               checkedIcon={<StarIcon color="primary" />}
               color="primary"
               checked={isImportant}
               onClick={handleClickIsImportant}
            />
         </Form>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   position: fixed;
   bottom: 0;
   background-color: ${c.blackOfBackground(0.96)};
   width: calc(92% - 230px);
   height: 58.5px;
   padding: 7.5px 0 7.5px 0;
   margin-right: 5%;
   ${media.lessThan('medium')`
   width: 94%;
   margin-right: 3%;
  `}
`;

const Form = styled.form`
   display: flex;
   height: 100%;
   width: 100%;
   background-color: ${c.grayOfForm};
   border-radius: 5px;
   :hover {
      background-color: ${c.grayOfHoverForm};
   }
   ${media.lessThan('medium')`
  `}
`;

const InputOfTitle = styled.input`
   width: 90%;
   height: 100%;
   margin-left: 3px;
   font-size: 13.5px;
   background-color: ${c.grayOfForm};
   color: white;
   border-style: none;
   :hover {
      background-color: ${c.grayOfHoverForm};
   }
   :focus {
      outline: 0;
      ::placeholder {
         color: transparent;
      }
   }
   ${media.lessThan('medium')`
   margin: 0;
  `}
`;

export default TodoForm;
