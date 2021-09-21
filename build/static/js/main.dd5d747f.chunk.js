(this["webpackJsonptogo-list"]=this["webpackJsonptogo-list"]||[]).push([[0],{15:function(A,c,e){},24:function(A,c,e){"use strict";e.r(c);e(15);var i=e(4),t=e.n(i),s=e(1),n=e(3),a=e(6),B={name:"taskListReducer",initialState:{taskList:null,isLoaded:!1,inputFilterValue:"",displayedList:"all"},reducers:{setTaskList:function(A,c){A.taskList=c.payload,A.isLoaded=!0},importanceTask:function(A,c){var e=A.taskList;A.taskList=e.map((function(A){var e=A.id,i=A.importance;return Object(n.a)(Object(n.a)({},A),{},{importance:c.payload===e?!i:i})}))},activeTask:function(A,c){var e=A.taskList;A.taskList=e.map((function(A){var e=A.id,i=A.active;return Object(n.a)(Object(n.a)({},A),{},{active:c.payload===e?!i:i})}))},deleteTask:function(A,c){var e=A.taskList;A.taskList=e.filter((function(A){if(c.payload!==A.id)return Object(n.a)({},A)}))},addNewTask:function(A,c){var e=A.taskList,i=e.map((function(A){return A.id})),t={id:0===i.length?1:Math.max.apply(null,i)+1,name:c.payload,importance:!0,active:!0},s=e;s.push(t),A.taskList=s},displayedTaskList:function(A,c){A.displayedList=c.payload},filteredTasks:function(A,c){A.inputFilterValue=c.payload}}},r=Object(a.b)(B),l=r.reducer,k=r.actions,o=Object(a.a)({reducer:l}),D=o.dispatch,j=k.setTaskList,w=k.importanceTask,H=k.deleteTask,R=k.activeTask,g=k.addNewTask,u=k.displayedTaskList,O=k.filteredTasks,h=function(A){return D(g(A))},x=function(A){return D(u(A))},C=e(0),Q=function(A){var c=A.id;return Object(C.jsx)("div",{className:"btn",onClick:function(){return function(A){return D(w(A))}(c)},children:Object(C.jsx)("img",{className:"rotate importance",src:"data:image/png;base64,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",alt:"importanceTask"})})},E=e(2),I=e.n(E),d=function(A){var c=A.id,e=!1===A.active?"data:image/png;base64,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":"data:image/png;base64,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";return Object(C.jsx)("div",{className:"btn",onClick:function(){return function(A){return D(R(A))}(c)},children:Object(C.jsx)("img",{className:"checkCompleted",src:e,alt:"\u0433\u043e\u0442\u043e\u0432\u043e"})})};d.PropTypes={id:I.a.number.isRequired,active:I.a.bool.isRequired};var Y=e.p+"static/media/delete.dc25d9ba.png",J=function(A){var c=A.id,e=A.importance,i=A.active,t=A.name,s=!0===e?Object(C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAvVBMVEUAAADQYWHrYGDVgIDNSEviSErsZ2nsSk7bZ2f5t7niRUf3nZ7qMzTiISLqKCnyXF31n6HXRkj0LS7uiIrwgoPNQkTucnTUS03MR0ruXV7samrqeHrsYGPtUFTYR0vQU1bic3PQVFf0Z2fuQUX9Fxj/Fxf+x8j+wMD6ZWf9Q0X7Z2n7XV/7WFn9JCX8Ghz+u7z9paj5m538gIL7YmT9UlP9TU7rQkPzNzn9NDb4KSr0Jyn6HiD6HR7+HB3qGhtbcmfFAAAAJHRSTlMAHgwGe1Y0JyL+/Pv4+PTy8eTTzczAsKqmpZGQiIB9XFBMRTtxBkmYAAAAl0lEQVQoz73RVRLDQAwD0HBSZubWzu6Gygz3P1ZPYH3Gv29GY42sMi/YAlzkdO2LuiT6HoYiD5jy/VzkMdND+SJ7xCYORd58+BI7IttPTmO5l3vncwX0vrFuA65y0gPc4WQGeMR6DXhFOgJsv1MX7fnK4Nz1FmQHqt9oBuCzH5mjHOAVZNRE5KigTE3l9C6daqh4uLPKuz/gZwyZt9PWZAAAAABJRU5ErkJggg==",alt:"important"}):null,n={backgroundColor:!1===i?"#42b856":"#b8b800"};return Object(C.jsxs)("li",{className:"line",style:n,children:[Object(C.jsx)(d,{active:i,id:c}),Object(C.jsxs)("div",{className:"taskRotate",children:[Object(C.jsxs)("div",{className:"tasks",children:[Object(C.jsx)("div",{className:"rotate importanceMark",children:s}),Object(C.jsx)("div",{children:t})]}),Object(C.jsxs)("div",{className:"buttonLine",children:[Object(C.jsx)(Q,{importance:e,id:c}),Object(C.jsx)("div",{className:"btn",onClick:function(){return function(A){return D(H(A))}(c)},children:Object(C.jsx)("img",{className:"rotate",src:Y,alt:"delete"})})]})]})]})};J.ProTypes={id:I.a.number.isRequired,name:I.a.string.isRequired,importance:I.a.bool.isRequired,active:I.a.bool.isRequired};var M=function(A){var c=A.taskList;return Object(C.jsx)("ul",{children:c.map((function(A){var c=Object.assign({},A);return Object(C.jsx)(J,Object(n.a)({},c),A.id)}))})},p=function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("button",{onClick:function(){return x("all")},children:"\u0432\u0441\u0435"},101),Object(C.jsx)("button",{onClick:function(){return x("active")},children:"\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435"},102),Object(C.jsx)("button",{onClick:function(){return x("completed")},children:"\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"},103)]})},S=e(12),b=function(){var A=Object(s.useState)(""),c=Object(S.a)(A,2),e=c[0],i=c[1],t=""===e;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("input",{value:e,onChange:function(A){return i(A.target.value)},onKeyPress:function(A){return function(A){13===(A.keyCode||A.which)&&(h(e),i(""))}(A)}}),Object(C.jsx)("div",{children:" "}),Object(C.jsx)("button",{className:"enter",disabled:t,onClick:function(){return h(e),void i("")},children:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"})]})},m=function(){return Object(C.jsx)("div",{className:"loader",children:Object(C.jsx)("div",{className:"load",children:"Loading..."})})},y=e(10),U=e(11),v=e(14),G=e(13),T=function(A){Object(v.a)(e,A);var c=Object(G.a)(e);function e(){var A;Object(y.a)(this,e);for(var i=arguments.length,t=new Array(i),s=0;s<i;s++)t[s]=arguments[s];return(A=c.call.apply(c,[this].concat(t))).state={hasError:!1},A}return Object(U.a)(e,[{key:"componentDidCatch",value:function(A,c){console.log(A,c)}},{key:"render",value:function(){return this.state.hasError?Object(C.jsx)("div",{children:"\u043e\u043f\u044f\u0442\u044c \u0432\u0441\u0435 \u043f\u043e\u043b\u043e\u043c\u0430\u043b\u043e\u0441\u044c"}):Object(C.jsx)("div",{className:"error",children:this.props.children})}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),e}(s.Component),N=e(5),L=function(){var A=Object(N.b)((function(A){return A})),c=A.taskList,e=A.isLoaded,i=A.inputFilterValue,t=A.displayedList;if(Object(s.useEffect)((function(){new Promise((function(A){A(JSON.parse(localStorage.getItem("todoList"))||[])})).then((function(A){!function(A){D(j(A))}(A)}))}),[]),Object(s.useEffect)((function(){localStorage.setItem("todoList",JSON.stringify(c))}),[c]),!e)return Object(C.jsx)(m,{});var n=null;return n=""!==i?c.filter((function(A){return A.name.includes(i)})):"completed"===t?c.filter((function(A){return!1===A.active})):"active"===t?c.filter((function(A){return!0===A.active})):c,Object(C.jsx)(T,{children:Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:"panel",children:[Object(C.jsx)("div",{className:"addTask",children:Object(C.jsx)(b,{})}),Object(C.jsx)("div",{className:"search",children:Object(C.jsx)("input",{onChange:function(A){return c=A.target.value,D(O(c));var c},value:i,type:"text",placeholder:"\u043d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430"})}),Object(C.jsx)("div",{className:"title",children:Object(C.jsx)("h1",{children:"\u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"})}),Object(C.jsx)("div",{className:"buttonTask",children:Object(C.jsx)(p,{})})]}),Object(C.jsx)("div",{children:Object(C.jsx)(M,{taskList:n})})]})})};t.a.render(Object(C.jsx)(N.a,{store:o,children:Object(C.jsx)(L,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.dd5d747f.chunk.js.map