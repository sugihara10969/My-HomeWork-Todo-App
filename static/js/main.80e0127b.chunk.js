(this["webpackJsonpmy-homework-todo-app"]=this["webpackJsonpmy-homework-todo-app"]||[]).push([[0],{63:function(n,e,t){n.exports=t(74)},74:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(14),i=t.n(o),c=t(2),u=t(6),l=t(43),s=Object(r.createContext)(),d={todoList:[],subjectList:[],activeSubjectIndex:void 0},m={title:"",isDone:!1,isImportant:!1,subjectIndex:void 0},b={title:""},f=[{title:"JavaScript",isDone:!1,isImportant:!1,subjectIndex:2},{title:"Report",isDone:!0,isImportant:!0,subjectIndex:0},{title:"\u5b9f\u9a13\u30ec\u30dd\u30fc\u30c8",isDone:!1,isImportant:!1,subjectIndex:1},{title:"Python",isDone:!1,isImportant:!1,subjectIndex:2}],p=[{title:"English"},{title:"\u7406\u79d1"},{title:"Computer Science"}],v={title:"",isImportant:!1,subjectTitle:""},x=t(40),h=t(4);function j(){var n=Object(c.a)(["\n   display: flex;\n   height: 37.5px;\n   width: 100%;\n   font-size: 15px;\n   margin: auto 0;\n   :hover {\n      background-color: rgb(50, 50, 50);\n      cursor: pointer;\n   }\n   p {\n      margin: auto 0 auto 15px;\n   }\n"]);return j=function(){return n},n}function g(){var n=Object(c.a)(["\n   display: flex;\n   :hover {\n      background-color: rgb(50, 50, 50);\n      cursor: pointer;\n   }\n"]);return g=function(){return n},n}var E=h.b.div(g()),O=h.b.div(j()),y=function(n){var e=Object(r.useContext)(s).setState;return a.a.createElement(a.a.Fragment,null,a.a.createElement(E,null,a.a.createElement(O,{onClick:function(){e((function(e){return Object(u.a)({},e,{activeSubjectIndex:n.index})}))}},a.a.createElement("p",null,n.subject.title))))},k=t(5),I=t(96),S=t(35),w=t.n(S),T=t(53),L=t.n(T);function C(){var n=Object(c.a)(["\n   margin: 0;\n  "]);return C=function(){return n},n}function z(){var n=Object(c.a)(["\n   width: 90%;\n   height: 100%;\n   margin-left: 3px;\n   font-size: 13.5px;\n   background-color: rgb(43, 43, 43);\n   border-radius: 5px;\n   color: white;\n   border-style: none;\n   :hover {\n      background-color: rgb(50, 50, 50);\n   }\n   :focus {\n      outline: 0;\n      ::placeholder {\n         color: transparent;\n      }\n   }\n   ","\n"]);return z=function(){return n},n}function D(){var n=Object(c.a)(["\n  "]);return D=function(){return n},n}function F(){var n=Object(c.a)(["\n   display: flex;\n   height: 36px;\n   width: 100%;\n   margin-top: 15px;\n   background-color: rgb(43, 43, 43);\n   border-radius: 5px;\n   :hover {\n      background-color: rgb(50, 50, 50);\n   }\n   ","\n"]);return F=function(){return n},n}function M(){var n=Object(c.a)([""]);return M=function(){return n},n}function B(){var n=Object(c.a)(["\n    left: -300px;\n    transition: all 0.2s;\n  "]);return B=function(){return n},n}function J(){var n=Object(c.a)(["\n      display: block;\n  "]);return J=function(){return n},n}function N(){var n=Object(c.a)(["\n      display: none;\n  "]);return N=function(){return n},n}function P(){var n=Object(c.a)(["\n      display: block;\n  "]);return P=function(){return n},n}function H(){var n=Object(c.a)(["\n   position: fixed;\n   z-index: 6;\n   height: 100%;\n   width: 230px;\n   padding-top: 10px;\n   background-color: rgb(43, 43, 43);\n   .close {\n      display: none;\n      width: 24px;\n      margin-left: auto;\n      ","\n   }\n   #firstLabel {\n      display: block;\n      ","\n   }\n   #secondLabel {\n      display: none;\n      ","\n   }\n\n   ","\n"]);return H=function(){return n},n}function R(){var n=Object(c.a)(["\n      display: flex;\n  "]);return R=function(){return n},n}function W(){var n=Object(c.a)(["\n   width: 300px;\n   height: 100%;\n   background-color: rgb(43, 43, 43);\n\n   input[type='checkbox'] {\n      position: fixed;\n      left: -200%;\n      :checked ~ #sideMenuContainer {\n         left: 0;\n      }\n\n      :checked ~ .back {\n         position: fixed;\n         width: 100%;\n         height: 100%;\n         background: rgba(0, 0, 0, 0.8);\n         z-index: 4;\n      }\n   }\n   .open {\n      display: none;\n      position: fixed;\n      left: 3%;\n      top: 0;\n      z-index: 3;\n      width: 48px;\n      height: 48px;\n      border-radius: 50%;\n      p {\n         width: 24px;\n         height: 24px;\n         margin: auto;\n      }\n      ","\n   }\n"]);return W=function(){return n},n}var q=h.b.div(W(),k.a.lessThan("medium")(R())),A=h.b.aside(H(),k.a.lessThan("medium")(P()),k.a.lessThan("medium")(N()),k.a.lessThan("medium")(J()),k.a.lessThan("medium")(B())),G=h.b.div(M()),K=h.b.form(F(),k.a.lessThan("medium")(D())),Q=h.b.input(z(),k.a.lessThan("medium")(C())),U=function(){var n=Object(r.useContext)(s),e=n.state,t=n.setState,o=n.item,i=n.setItem,c=e.subjectList.map((function(n,e){return a.a.createElement(y,{subject:n,key:e,index:e})})),l=function(){t((function(n){return Object(u.a)({},n,{activeSubjectIndex:void 0})}))},d=function(){""!==o.subjectTitle.trim()&&(t((function(n){return Object(u.a)({},n,{subjectList:[].concat(Object(x.a)(n.subjectList),[Object(u.a)({},b,{title:o.subjectTitle})])})})),i((function(n){return Object(u.a)({},n,{subjectTitle:""})})))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(q,null,a.a.createElement("input",{id:"menu",type:"checkbox"}),a.a.createElement("label",{htmlFor:"menu",className:"open"},a.a.createElement("p",null,a.a.createElement(L.a,{className:"menuIcon"}))),a.a.createElement("label",{htmlFor:"menu",className:"back"}),a.a.createElement(A,{id:"sideMenuContainer"},a.a.createElement("label",{id:"firstLabel"},a.a.createElement(O,{onClick:l},a.a.createElement("p",{style:{color:"tomato"}},"\u3059\u3079\u3066")),a.a.createElement(G,null,c)),a.a.createElement("label",{htmlFor:"menu",id:"secondLabel"},a.a.createElement(O,{onClick:l},a.a.createElement("p",{style:{color:"tomato"}},"\u3059\u3079\u3066")),a.a.createElement(G,null,c))," ",a.a.createElement(K,{onSubmit:function(n){n.preventDefault(),d()}},a.a.createElement(I.a,{color:"primary",onClick:function(n){n.preventDefault(),d()}},a.a.createElement(w.a,{color:"primary"})),a.a.createElement(Q,{type:"text",placeholder:"Subject\u3092\u8ffd\u52a0",value:o.subjectTitle,onChange:function(n){var e=n.target.value;i((function(n){return Object(u.a)({},n,{subjectTitle:e})}))}})))))};function V(){var n=Object(c.a)(["\n      margin: 0 auto;\n  "]);return V=function(){return n},n}function X(){var n=Object(c.a)(["\n   display: flex;\n\n   background-color: rgba(33, 33, 33, 0.96);\n   margin-left: 45px;\n   ","\n   h3 {\n      margin: auto 0;\n      user-select: none;\n   }\n"]);return X=function(){return n},n}function Y(){var n=Object(c.a)(["\n   width: 94%;\n  "]);return Y=function(){return n},n}function Z(){var n=Object(c.a)(["\n   position: fixed;\n   display: flex;\n   width: calc(92% - 230px);\n   height: 48px;\n   background-color: rgba(33, 33, 33, 0.96);\n   ","\n"]);return Z=function(){return n},n}var $=h.b.div(Z(),k.a.lessThan("medium")(Y())),_=h.b.div(X(),k.a.lessThan("small")(V())),nn=function(){var n=Object(r.useContext)(s).state;return a.a.createElement(a.a.Fragment,null,a.a.createElement($,null,a.a.createElement(_,null,a.a.createElement("h3",null,void 0===n.activeSubjectIndex?"My HomeWork Todo":n.subjectList[n.activeSubjectIndex].title))))},en=t(95),tn=t(56),rn=t.n(tn),an=t(55),on=t.n(an),cn=t(59),un=t.n(cn),ln=t(38),sn=t.n(ln),dn=t(37),mn=t.n(dn),bn=t(97),fn=t(94),pn=t(57),vn=t.n(pn);function xn(){var n=Object(c.a)([""]);return xn=function(){return n},n}function hn(){var n=Object(c.a)(["\n   flex-direction: row;\n   margin: auto 0 auto 6px;\n  "]);return hn=function(){return n},n}function jn(){var n=Object(c.a)(["\n   width: auto;\n   font-size: 11px;\n   margin: auto 0 auto 15px;\n   ","\n\n   >p {\n      margin-top: 2px;\n   }\n"]);return jn=function(){return n},n}function gn(){var n=Object(c.a)(["\n   margin: auto 0 auto 3.5px;\n   font-size: 16.5px;\n"]);return gn=function(){return n},n}function En(){var n=Object(c.a)(["\n      flex-direction: column;\n  "]);return En=function(){return n},n}function On(){var n=Object(c.a)(["\n   display: flex;\n   height: 45px;\n   list-style: none;\n   background-color: rgba(43, 43, 43);\n   border-radius: 5px;\n   margin: 3.5px 0;\n   :hover {\n      background-color: rgb(50, 50, 50);\n   }\n   > div {\n      display: flex;\n      ","\n   }\n"]);return On=function(){return n},n}var yn=h.b.div(On(),k.a.lessThan("small")(En())),kn=h.b.p(gn()),In=h.b.div(jn(),k.a.lessThan("small")(hn())),Sn=h.b.div(xn()),wn=function(n){var e=Object(r.useContext)(s),t=e.state,o=e.setState;return a.a.createElement(yn,{style:{display:void 0===t.activeSubjectIndex||t.activeSubjectIndex===n.todo.subjectIndex?"flex":"none"}},a.a.createElement(en.a,{icon:a.a.createElement(on.a,{color:"primary",fontSize:"small"}),checkedIcon:a.a.createElement(rn.a,{color:"primary",fontSize:"small"}),color:"primary",checked:n.todo.isDone,onClick:function(){var e=Object(u.a)({},t);e.todoList[n.index].isDone=!e.todoList[n.index].isDone,o(e)}}),a.a.createElement("div",null,a.a.createElement(kn,null,n.todo.title),a.a.createElement(In,{style:{display:void 0===t.activeSubjectIndex?"flex":"none"}},a.a.createElement(vn.a,{fontSize:"small",style:{margin:"auto 0"}}),a.a.createElement("p",null,void 0===n.todo.subjectIndex?"Task":t.subjectList[n.todo.subjectIndex].title))),a.a.createElement(en.a,{style:{marginLeft:"auto"},icon:a.a.createElement(mn.a,{color:"primary",fontSize:"small"}),checkedIcon:a.a.createElement(sn.a,{color:"primary",fontSize:"small"}),color:"primary",checked:n.todo.isImportant,onClick:function(){var e=Object(u.a)({},t);e.todoList[n.index].isImportant=!e.todoList[n.index].isImportant,o(e)}}),a.a.createElement(bn.a,{title:"delete",enterDelay:600,leaveDelay:100,TransitionComponent:fn.a},a.a.createElement(Sn,{onClick:function(){var e=Object(u.a)({},t);e.todoList.splice(n.index,1),o(e)}},a.a.createElement(I.a,{color:"secondary",fontSize:"small",style:{height:"100%"}},a.a.createElement(un.a,{color:"secondary",fontSize:"small"})))))};function Tn(){var n=Object(c.a)(["\n   margin: 48px 0 22.5px 0;\n   width: 100%;\n"]);return Tn=function(){return n},n}var Ln=h.b.div(Tn()),Cn=function(){var n=Object(r.useContext)(s).state.todoList.map((function(n,e){return a.a.createElement(wn,{todo:n,key:e,index:e})}));return a.a.createElement(Ln,null,n)};function zn(){var n=Object(c.a)(["\n   margin: 0;\n  "]);return zn=function(){return n},n}function Dn(){var n=Object(c.a)(["\n   width: 90%;\n   height: 100%;\n   margin-left: 3px;\n   font-size: 13.5px;\n   background-color: rgb(43, 43, 43);\n   border-radius: 5px;\n   color: white;\n   border-style: none;\n   :hover {\n      background-color: rgb(50, 50, 50);\n   }\n   :focus {\n      outline: 0;\n      ::placeholder {\n         color: transparent;\n      }\n   }\n   ","\n"]);return Dn=function(){return n},n}function Fn(){var n=Object(c.a)(["\n  "]);return Fn=function(){return n},n}function Mn(){var n=Object(c.a)(["\n   display: flex;\n   height: 100%;\n   width: 100%;\n   background-color: rgb(43, 43, 43);\n   border-radius: 5px;\n   :hover {\n      background-color: rgb(50, 50, 50);\n   }\n   ","\n"]);return Mn=function(){return n},n}function Bn(){var n=Object(c.a)(["\n   width: 94%;\n   margin-right: 3%;\n  "]);return Bn=function(){return n},n}function Jn(){var n=Object(c.a)(["\n   position: fixed;\n   bottom: 0;\n   background-color: rgba(33, 33, 33, 0.95);\n   width: calc(92% - 230px);\n   height: 58.5px;\n   padding: 7.5px 0 7.5px 0;\n   margin-right: 5%;\n   ","\n"]);return Jn=function(){return n},n}var Nn=h.b.div(Jn(),k.a.lessThan("medium")(Bn())),Pn=h.b.form(Mn(),k.a.lessThan("medium")(Fn())),Hn=h.b.input(Dn(),k.a.lessThan("medium")(zn())),Rn=function(){var n=Object(r.useContext)(s),e=n.state,t=n.setState,o=n.item,i=n.setItem,c=function(){""!==o.title.trim()&&(t((function(n){return Object(u.a)({},n,{todoList:[].concat(Object(x.a)(n.todoList),[Object(u.a)({},m,{title:o.title,isImportant:o.isImportant,subjectIndex:e.activeSubjectIndex})])})})),i((function(n){return Object(u.a)({},v,{cancelIsBlock:n.cancelIsBlock})})))};return a.a.createElement(Nn,null,a.a.createElement(Pn,{onSubmit:function(n){n.preventDefault(),c()}},a.a.createElement(I.a,{color:"primary",onClick:function(n){n.preventDefault(),c()}},a.a.createElement(w.a,{color:"primary"})),a.a.createElement(Hn,{type:"text",placeholder:"\u30bf\u30b9\u30af\u3092\u8ffd\u52a0",value:o.title,onChange:function(n){var e=n.target.value;i((function(n){return Object(u.a)({},n,{title:e})}))}}),a.a.createElement(en.a,{style:{marginLeft:"auto"},icon:a.a.createElement(mn.a,{color:"primary"}),checkedIcon:a.a.createElement(sn.a,{color:"primary"}),color:"primary",checked:o.isImportant,onClick:function(){i((function(n){return Object(u.a)({},n,{isImportant:!n.isImportant})}))}})))};function Wn(){var n=Object(c.a)(["\n   position: relative;\n   grid-area: container;\n   height: 100%;\n"]);return Wn=function(){return n},n}function qn(){var n=Object(c.a)(["\n   grid-template:\n      ' ... ...... ... ' 0px\n      ' ... container ... ' 1fr\n      ' ... ...... ... ' 10px\n      / 3% 1fr 3%;\n    \n  "]);return qn=function(){return n},n}function An(){var n=Object(c.a)(["\n   display: grid;\n   grid-template:\n      ' ... ... ...... ... ' 0px\n      ' ... ... container ... ' 1fr\n      ' ... ... ...... ... ' 10px\n      / 230px 4% 1fr 4%;\n   height: 100%;\n   width: 100%;\n   ","\n"]);return An=function(){return n},n}var Gn=h.b.div(An(),k.a.lessThan("medium")(qn())),Kn=h.b.div(Wn()),Qn=function(){var n=Object(r.useState)(Object(u.a)({},d,{todoList:f,subjectList:p,activeSubjectIndex:void 0})),e=Object(l.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(v),c=Object(l.a)(i,2),m=c[0],b=c[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(s.Provider,{value:{state:t,setState:o,item:m,setItem:b}},a.a.createElement(Gn,null,a.a.createElement(U,null),a.a.createElement(Kn,null,a.a.createElement(nn,null),a.a.createElement(Cn,null),a.a.createElement(Rn,null)))))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Qn,null)),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.80e0127b.chunk.js.map