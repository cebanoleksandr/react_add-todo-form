(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(2),s=a(6),c=a(1),o=(a(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),l=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}];var d=a(8),u=a.n(d),m=a(0),j=function(e){var t=e.user;return Object(m.jsx)("a",{className:"UserInfo",href:t.email,children:t.name})},b=function(e){var t=e.todo,a=e.user;return Object(m.jsxs)("article",{"data-id":t.id,className:u()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:t.title}),a&&Object(m.jsx)(j,{user:a})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e,user:(t=e.userId,o.find((function(e){return e.id===t})))},e.id);var t}))})};function O(e){return Math.max.apply(Math,Object(s.a)(e.map((function(e){return e.id}))))+1}var f=function(){var e=Object(c.useState)(l),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(""),d=Object(r.a)(i,2),u=d[0],j=d[1],b=Object(c.useState)(0),f=Object(r.a)(b,2),p=f[0],x=f[1],v=Object(c.useState)(!1),y=Object(r.a)(v,2),S=y[0],N=y[1],I=Object(c.useState)(!1),g=Object(r.a)(I,2),C=g[0],_=g[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),N(!u),_(!p),u&&p){var t={id:O(a),title:u,completed:!1,userId:p};n((function(e){return[].concat(Object(s.a)(e),[t])})),j(""),x(0),N(!1),_(!1)}},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(m.jsx)("input",{type:"text",id:"title","data-cy":"titleInput",placeholder:"Enter a title",value:u,onChange:function(e){j(e.target.value),N(!1)}}),S&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{htmlFor:"user",children:"User: "}),Object(m.jsxs)("select",{"data-cy":"userSelect",id:"user",value:p,onChange:function(e){x(+e.target.value),_(!1)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),o.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),C&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:a})]})};i.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f9ae4423.chunk.js.map