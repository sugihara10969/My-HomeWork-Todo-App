import React, { FC } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { color as c } from '../../constant/color';

import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { todoListState } from '../../types/types';
import { useSelector, useDispatch } from 'react-redux';
import { getActiveIndex, getSeparate } from '../../selector';
import {
   toggleIsDone,
   toggleIsImportant,
   deleteTodo as deleteTodoItem,
} from '../../reducers/todoList';

type TodoItemProps = {
   todo: todoListState;
   index: number;
};

const TodoItem: FC<TodoItemProps> = props => {
   const selector = useSelector(state => state);
   const activeIndex = getActiveIndex(selector);
   const separate = getSeparate(selector);
   const subjectList = useSelector(state => state.subjectList);
   const dispatch = useDispatch();

   const handleClickIsDone = () => {
      dispatch(toggleIsDone({ index: props.index }));
   };
   const displaySubjectName = () => {
      if (props.todo.isTask) {
         return 'Task';
      } else {
         const subject = subjectList.find(subjectItem => {
            return subjectItem.key === props.todo.subjectKey;
         });
         if (subject) {
            return subject.title;
         } else {
            return 'no title';
         }
      }
   };
   const handleClickIsImportant = () => {
      dispatch(toggleIsImportant({ index: props.index }));
   };
   const deleteTodo = () => {
      dispatch(deleteTodoItem({ index: props.index }));
   };
   const opacity = () => {
      if (separate) {
         return { opacity: props.todo.isDone ? 0.6 : 1 };
      } else {
         return { opacity: 1 };
      }
   };
   return (
      <Wrapper style={opacity()}>
         <Checkbox
            icon={<RadioButtonUncheckedIcon color="primary" fontSize="small" />}
            checkedIcon={<CheckCircleIcon color="primary" fontSize="small" />}
            color="primary"
            checked={props.todo.isDone}
            onClick={handleClickIsDone}
         />
         <div>
            <TodoTitle
               style={{
                  textDecoration: props.todo.isDone ? 'line-through' : 'none',
               }}
            >
               {props.todo.title}
            </TodoTitle>
            <SubjectName
               style={{
                  display: activeIndex === -1 ? 'flex' : 'none',
               }}
            >
               <KeyboardArrowRightIcon
                  fontSize="small"
                  style={{ margin: 'auto 0' }}
               ></KeyboardArrowRightIcon>
               <p>{displaySubjectName()}</p>
            </SubjectName>
         </div>
         <StarIconContainer>
            <Checkbox
               icon={<StarBorderIcon color="primary" fontSize="small" />}
               checkedIcon={<StarIcon color="primary" fontSize="small" />}
               color="primary"
               checked={props.todo.isImportant}
               onClick={handleClickIsImportant}
            />
         </StarIconContainer>
         <Tooltip
            title="削除"
            enterDelay={600}
            leaveDelay={100}
            TransitionComponent={Zoom}
         >
            <IconButton onClick={deleteTodo} style={{ height: '100%' }}>
               <DeleteOutlineOutlinedIcon
                  color="secondary"
                  fontSize="small"
               ></DeleteOutlineOutlinedIcon>
            </IconButton>
         </Tooltip>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   display: flex;
   max-width: 100%;
   min-height: 45px;
   list-style: none;
   background-color: ${c.grayOfItem};
   border-radius: 5px;
   margin: 3.5px 0;
   :hover {
      background-color: ${c.grayOfHoverItem};
   }
   > div {
      display: flex;
      ${media.lessThan('small')`
      flex-direction: column;
  `}
   }
`;
const TodoTitle = styled.p`
   margin: auto 0 auto 3.5px;
   font-size: 16.5px;
   word-break: break-all;

   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 2;
   overflow: hidden;
   ${media.lessThan('small')`
      font-size: 15px;
  `}
`;
const SubjectName = styled.div`
   max-width: 170px;
   font-size: 11px;
   margin: auto 0 auto 8px;
   ${media.lessThan('small')`
   max-width: 160px;
   flex-direction: row;
   margin: auto 0 auto 6px;
  `}

   > p {
      margin-top: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
   }
`;
const StarIconContainer = styled.div`
   margin-left: auto;
   z-index: 0;
`;

export default TodoItem;
