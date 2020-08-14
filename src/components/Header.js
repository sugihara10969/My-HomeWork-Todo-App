import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

import styled from 'styled-components';
import media from 'styled-media-query';

const Header = () => {
   const { state, activeSubjectIndex } = useContext(AppContext);
   const displayTitleName = () => {
      if (activeSubjectIndex === -1) {
         return 'My HomeWork Todo';
      } else {
         return state.subjectList[activeSubjectIndex].title;
      }
   };
   return (
      <>
         <Wrapper>
            <TitleBar>
               <h3>{displayTitleName()}</h3>
            </TitleBar>
         </Wrapper>
      </>
   );
};

const Wrapper = styled.div`
   position: fixed;
   display: flex;
   width: calc(92% - 230px);
   height: 48px;
   background-color: rgba(33, 33, 33, 0.96);
   ${media.lessThan('medium')`
   width: 94%;
  `}
`;

const TitleBar = styled.div`
   display: flex;

   background-color: rgba(33, 33, 33, 0.96);
   margin-left: 45px;
   ${media.lessThan('small')`
      margin: 0 auto;
  `}
   h3 {
      margin: auto 0;
      user-select: none;
   }
`;

export default Header;
