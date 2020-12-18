(this["webpackJsonpfinal-frontend"]=this["webpackJsonpfinal-frontend"]||[]).push([[0],{16:function(e,t){t.SERVER_URL=""},191:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),o=n(69),r=n.n(o),l=(n(76),n(4)),i=n.n(l),j=n(8),d=n(2),u=n(3),b=n(5),h=n(6),O=n.n(h),x=Object(a.createContext)(null);function p(){return Object(c.jsx)("div",{children:Object(c.jsxs)("header",{id:"sheader",children:[Object(c.jsx)(u.b,{class:"button",to:"/budget",children:"Add Budget"}),Object(c.jsx)(u.b,{class:"button",to:"/expense",children:"Add Expense"}),Object(c.jsx)(u.b,{class:"button",to:"/updateExpenses",children:"UpdateExpenses"}),Object(c.jsx)(u.b,{class:"button",to:"/updateBudgets",children:"UpdateBudgets"})]})})}var v=n(27),m=n.n(v),g=n(41);function f(){var e=Object(a.useState)(),t=Object(d.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(),r=Object(d.a)(o,2),l=r[0],u=r[1],b=Object(a.useState)(),h=Object(d.a)(b,2),x=h[0],p=h[1],v=Object(a.useState)(),f=Object(d.a)(v,2),y=f[0],E=f[1],k=Object(a.useState)(),S=Object(d.a)(k,2),C=(S[0],S[1]),F=Object(a.useState)(),B=Object(d.a)(F,2),I=B[0],w=B[1],N=Object(a.useState)(),R=Object(d.a)(N,2),D=R[0],M=R[1],A=Object(a.useState)(),L=Object(d.a)(A,2),U=L[0],J=L[1],_={datasets:[{data:[],backgroundColor:["#2ecc71","#3498db","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e"]}],labels:[]},Y={datasets:[{data:[],backgroundColor:["#2ecc71","#3498db","#95a5a6","#9b59b6","#f1c40f","#e74c3c","#34495e"]}],labels:[]},P=function(){var e=Object(j.a)(i.a.mark((function e(t){var c,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{c=function(){var e=document.getElementById("myChart").getContext("2d");new m.a(e,{type:"pie",data:_,options:{title:{display:!0,text:"Budgets"}}})},a=function(){var e=document.getElementById("myChartExp").getContext("2d");new m.a(e,{type:"pie",data:Y,options:{title:{display:!0,text:"Expenses"}}})},s=localStorage.getItem("auth-token"),O.a.get("http://localhost:5000/budgets/getTimedBudgets",{params:{month:n,year:l},headers:{"x-auth-token":"".concat(s)}}).then((function(e){for(var t=[],n=[],a=0;a<e.data.length;a++)_.datasets[0].data[a]=e.data[a].budget,_.labels[a]=e.data[a].budgetName,t.push(e.data[a].budgetName),n.push(e.data[a].budget);M(n),w(t),console.log(_),e&&(p(!0),c())})).catch((function(e){e.response&&e.response.data.msg&&C(e.response.data.msg)})),O.a.get("http://localhost:5000/expenses/getTimedExpenses",{params:{month:n,year:l},headers:{"x-auth-token":"".concat(s)}}).then((function(e){for(var t=[],n=0;n<e.data.length;n++)t.push(e.data[n].expense),Y.labels[n]=e.data[n].expenseName,Y.datasets[0].data[n]=e.data[n].expense;J(t),console.log(Y),e&&(E(!0),a())})).catch((function(e){e.response&&e.response.data.msg&&C(e.response.data.msg)}))}catch(o){o.response.data.msg&&C(o.response.data.msg)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log("budget data: ",D),Object(c.jsxs)("div",{children:[Object(c.jsxs)("form",{className:"form",onSubmit:P,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"expense-month",children:"Month Of Expense"}),Object(c.jsx)("input",{id:"expense-month",type:"text",onChange:function(e){return s(e.target.value)}})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"expense-year",children:"Year of Expense"}),Object(c.jsx)("input",{id:"expense-year",type:"text",onChange:function(e){return u(e.target.value)}})]}),Object(c.jsx)("input",{type:"submit",value:"submit"})]}),x?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("canvas",{id:"myChart"})}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h2",{children:".."})}),y?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("canvas",{id:"myChartExp"})}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h2",{children:"No Expenses and Budgets for current Month and Year"})}),void 0===D?null:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g.Bar,{data:{labels:I,datasets:[{label:"Budgets",backgroundColor:"orange",hoverBackgroundColor:"rgba(255,99,132,0.4)",borderWidth:1,data:D},{label:"Expenses",backgroundColor:"red",hoverBackgroundColor:"rgba(155,231,91,0.4)",borderWidth:1,data:U}]},width:null,height:null,options:{responsive:!0,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},title:"Personal Budget",redraw:!0}),Object(c.jsx)(g.Line,{data:{labels:I,datasets:[{label:"Budgets",fill:!1,lineTension:0,backgroundColor:"rgba(255,99,132,0.2)",borderColor:"orange",borderWidth:2,data:D},{label:"Expenses",fill:!1,lineTension:0,backgroundColor:"rgba(155,231,91,0.2)",borderColor:"red",borderWidth:2,data:U}]},options:{responsive:!0,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},title:"Personal Budget"})]})]})}function y(){return Object(c.jsx)("div",{children:Object(c.jsx)(f,{})})}n(68);function E(){var e=Object(a.useContext)(x).userData,t=Object(b.f)();return Object(a.useEffect)((function(){e.user||t.push("/login")})),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"page",children:e.user?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p,{}),Object(c.jsx)(y,{})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"You are not logged in"}),Object(c.jsx)(u.b,{to:"/login",children:"Log in"})]})})})}function k(){var e=Object(a.useContext)(x),t=e.userData,n=e.setUserData,s=Object(b.f)();return Object(c.jsx)("nav",{className:"auth-options",children:t.user?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u.b,{class:"Homebutton",to:"/",children:"Home/DashBoard"}),Object(c.jsxs)("h1",{className:"welcome",children:["Welcome ",t.user.displayName]}),Object(c.jsx)("button",{onClick:function(){n({token:void 0,user:void 0}),localStorage.setItem("auth-token",""),s.push("/")},children:"Log out"})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:function(){return s.push("/register")},children:"Register"}),Object(c.jsx)("button",{onClick:function(){return s.push("/login")},children:"Log in"})]})})}function S(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)(u.b,{to:"/",children:Object(c.jsx)("h1",{className:"title",children:"Personal Budget App"})}),Object(c.jsx)(k,{})]})}function C(e){return Object(c.jsxs)("div",{className:"error-notice",children:[Object(c.jsx)("span",{children:e.message}),Object(c.jsx)("button",{onClick:e.clearError,children:"X"})]})}var F=n(16).SERVER_URL;function B(){var e=Object(a.useState)(),t=Object(d.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(),r=Object(d.a)(o,2),l=r[0],u=r[1],h=Object(a.useState)(),p=Object(d.a)(h,2),v=p[0],m=p[1],g=Object(a.useContext)(x).setUserData,f=Object(b.f)(),y=function(){var e=Object(j.a)(i.a.mark((function e(t){var c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,c={email:n,password:l},e.next=5,O.a.post(F+"/users/login",c);case 5:a=e.sent,g({token:a.data.token,user:a.data.user}),localStorage.setItem("auth-token",a.data.token),f.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.response.data.msg&&m(e.t0.response.data.msg);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"page",children:[Object(c.jsx)("h2",{children:"Login"}),v&&Object(c.jsx)(C,{message:v,clearError:function(){return m(void 0)}}),Object(c.jsxs)("form",{className:"form",onSubmit:y,children:[Object(c.jsx)("label",{htmlFor:"login-email",children:"Email"}),Object(c.jsx)("input",{id:"login-email",type:"email",onChange:function(e){return s(e.target.value)}}),Object(c.jsx)("label",{htmlFor:"login-password",children:"Password"}),Object(c.jsx)("input",{id:"login-password",type:"password",onChange:function(e){return u(e.target.value)}}),Object(c.jsx)("input",{type:"submit",value:"Login"})]})]})}var I=n(16).SERVER_URL;function w(){var e=Object(a.useState)(),t=Object(d.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(),r=Object(d.a)(o,2),l=r[0],u=r[1],h=Object(a.useState)(),p=Object(d.a)(h,2),v=p[0],m=p[1],g=Object(a.useState)(),f=Object(d.a)(g,2),y=f[0],E=f[1],k=Object(a.useState)(),S=Object(d.a)(k,2),F=S[0],B=S[1],w=Object(a.useContext)(x).setUserData,N=Object(b.f)(),R=function(){var e=Object(j.a)(i.a.mark((function e(t){var c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,c={email:n,password:l,passwordCheck:v,displayName:y},e.next=5,O.a.post(I+"/users/register",c);case 5:return e.next=7,O.a.post(I+"/users/login",{email:n,password:l});case 7:a=e.sent,w({token:a.data.token,user:a.data.user}),localStorage.setItem("auth-token",a.data.token),N.push("/"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),e.t0.response.data.msg&&B(e.t0.response.data.msg);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"page",children:[Object(c.jsx)("h2",{children:"Register"}),F&&Object(c.jsx)(C,{message:F,clearError:function(){return B(void 0)}}),Object(c.jsxs)("form",{className:"form",onSubmit:R,children:[Object(c.jsx)("label",{htmlFor:"register-email",children:"Email"}),Object(c.jsx)("input",{id:"register-email",type:"email",onChange:function(e){return s(e.target.value)}}),Object(c.jsx)("label",{htmlFor:"register-password",children:"Password"}),Object(c.jsx)("input",{id:"register-password",type:"password",onChange:function(e){return u(e.target.value)}}),Object(c.jsx)("input",{type:"password",placeholder:"Verify password",onChange:function(e){return m(e.target.value)}}),Object(c.jsx)("label",{htmlFor:"register-display-name",children:"Display name"}),Object(c.jsx)("input",{id:"register-display-name",type:"text",onChange:function(e){return E(e.target.value)}}),Object(c.jsx)("input",{type:"submit",value:"Register"})]})]})}var N=n(16).SERVER_URL;function R(){var e=Object(a.useState)(),t=Object(d.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(),r=Object(d.a)(o,2),l=r[0],h=r[1],v=Object(a.useState)(),m=Object(d.a)(v,2),g=m[0],f=m[1],y=Object(a.useState)(),E=Object(d.a)(y,2),k=E[0],S=E[1],F=Object(a.useState)(),B=Object(d.a)(F,2),I=B[0],w=B[1],R=Object(a.useContext)(x),D=R.userData,M=(R.setUserData,Object(b.f)());Object(a.useEffect)((function(){D.user||M.push("/login")}));var A=function(){var e=Object(j.a)(i.a.mark((function e(t){var c,a,o,r,j,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,c=localStorage.getItem("auth-token"),a={budget:k,month:l,year:g,budgetName:n},console.log(c),console.log(a),e.next=8,O.a.post(N+"/budgets",a,{headers:{"x-auth-token":"".concat(c)}});case 8:200===e.sent.status&&(o=document.getElementById("title"),s(void 0),o.selectedIndex="none",r=document.getElementById("month"),h(void 0),r.selectedIndex="none",j=document.getElementById("year"),f(void 0),j.selectedIndex="none",d=document.getElementById("cost"),S(void 0),d.value="",alert("Budget added successfully")),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),e.t0.response.data.msg&&w(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"page",children:D.user?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p,{}),Object(c.jsx)("h1",{children:"choose budget from below categories "}),I&&Object(c.jsx)(C,{message:I,clearError:function(){return w(void 0)}}),Object(c.jsxs)("form",{id:"MyForm",className:"form",onSubmit:A,children:[Object(c.jsx)("label",{htmlFor:"title",children:"BudgetName"}),Object(c.jsxs)("select",{id:"title",onChange:function(e){return s(e.target.value)},children:[Object(c.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:"choose budget"}),Object(c.jsx)("option",{value:"Electricity",children:"Electricity"}),Object(c.jsx)("option",{value:"Rent",children:"Rent"}),Object(c.jsx)("option",{value:"Medicines",children:"Medicines"}),Object(c.jsx)("option",{value:"Grocery",children:"Grocery"}),Object(c.jsx)("option",{value:"EatOut",children:"EatOut"}),Object(c.jsx)("option",{value:"Entertainment",children:"Entertainment"}),Object(c.jsx)("option",{value:"Others",children:"Others"})]}),Object(c.jsx)("label",{htmlFor:"month",children:"Month"}),Object(c.jsxs)("select",{id:"month",name:"month",onChange:function(e){return h(e.target.value)},children:[Object(c.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:"---"}),Object(c.jsx)("option",{value:"1",children:"January"}),Object(c.jsx)("option",{value:"2",children:"February"}),Object(c.jsx)("option",{value:"3",children:"March"}),Object(c.jsx)("option",{value:"4",children:"April"}),Object(c.jsx)("option",{value:"5",children:"May"}),Object(c.jsx)("option",{value:"6",children:"June"}),Object(c.jsx)("option",{value:"7",children:"July"}),Object(c.jsx)("option",{value:"8",children:"August"}),Object(c.jsx)("option",{value:"9",children:"September"}),Object(c.jsx)("option",{value:"10",children:"October"}),Object(c.jsx)("option",{value:"11",children:"November"}),Object(c.jsx)("option",{value:"12",children:"December"})]}),Object(c.jsx)("label",{htmlFor:"year",children:"Year"}),Object(c.jsxs)("select",{id:"year",name:"year",onChange:function(e){return f(e.target.value)},children:[Object(c.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:"---"}),Object(c.jsx)("option",{value:"1995",children:"1995"}),Object(c.jsx)("option",{value:"1996",children:"1996"}),Object(c.jsx)("option",{value:"1997",children:"1997"}),Object(c.jsx)("option",{value:"1998",children:"1998"}),Object(c.jsx)("option",{value:"1999",children:"1999"}),Object(c.jsx)("option",{value:"2000",children:"2000"}),Object(c.jsx)("option",{value:"2001",children:"2001"}),Object(c.jsx)("option",{value:"2002",children:"2002"}),Object(c.jsx)("option",{value:"2003",children:"2003"}),Object(c.jsx)("option",{value:"2004",children:"2004"}),Object(c.jsx)("option",{value:"2005",children:"2005"}),Object(c.jsx)("option",{value:"2006",children:"2006"}),Object(c.jsx)("option",{value:"2007",children:"2007"}),Object(c.jsx)("option",{value:"2008",children:"2008"}),Object(c.jsx)("option",{value:"2009",children:"2009"}),Object(c.jsx)("option",{value:"2010",children:"2010"}),Object(c.jsx)("option",{value:"2011",children:"2011"}),Object(c.jsx)("option",{value:"2012",children:"2012"}),Object(c.jsx)("option",{value:"2013",children:"2013"}),Object(c.jsx)("option",{value:"2014",children:"2014"}),Object(c.jsx)("option",{value:"2015",children:"2015"}),Object(c.jsx)("option",{value:"2016",children:"2016"}),Object(c.jsx)("option",{value:"2017",children:"2017"}),Object(c.jsx)("option",{value:"2018",children:"2018"}),Object(c.jsx)("option",{value:"2019",children:"2019"}),Object(c.jsx)("option",{value:"2020",children:"2020"})]}),Object(c.jsx)("label",{htmlFor:"cost",children:"budget"}),Object(c.jsx)("input",{id:"cost",type:"text",onChange:function(e){return S(e.target.value)}}),Object(c.jsx)("input",{type:"submit",value:"Add Budget"})]})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"You are not logged in"}),Object(c.jsx)(u.b,{to:"/login",children:"Click here to Log in"})]})})})}var D=n(16).SERVER_URL;function M(){var e=Object(a.useState)(),t=Object(d.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(),r=Object(d.a)(o,2),l=r[0],h=r[1],v=Object(a.useState)(),m=Object(d.a)(v,2),g=m[0],f=m[1],y=Object(a.useState)(),E=Object(d.a)(y,2),k=E[0],S=E[1],F=Object(a.useState)(),B=Object(d.a)(F,2),I=B[0],w=B[1],N=Object(a.useContext)(x),R=N.userData,M=(N.setUserData,Object(b.f)());Object(a.useEffect)((function(){R.user||M.push("/login")}));var A=function(){var e=Object(j.a)(i.a.mark((function e(t){var c,a,o,r,j,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,c=localStorage.getItem("auth-token"),a={expense:k,month:l,year:g,expenseName:n},e.next=6,O.a.post(D+"/expenses",a,{headers:{"x-auth-token":"".concat(c)}});case 6:200===e.sent.status&&(o=document.getElementById("title"),s(void 0),o.selectedIndex="none",r=document.getElementById("month"),h(void 0),r.selectedIndex="none",j=document.getElementById("year"),f(void 0),j.selectedIndex="none",d=document.getElementById("cost"),S(void 0),d.value="",alert("Expense added successfully")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),e.t0.response.data.msg&&w(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"page",children:R.user?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p,{}),Object(c.jsx)("h1",{children:"Add Expense"}),I&&Object(c.jsx)(C,{message:I,clearError:function(){return w(void 0)}}),Object(c.jsxs)("form",{className:"form",onSubmit:A,children:[Object(c.jsx)("label",{htmlFor:"title",children:"ExpenseName"}),Object(c.jsxs)("select",{id:"title",onChange:function(e){return s(e.target.value)},children:[Object(c.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:"choose expense"}),Object(c.jsx)("option",{value:"Electricity",children:"Electricity"}),Object(c.jsx)("option",{value:"Rent",children:"Rent"}),Object(c.jsx)("option",{value:"Medicines",children:"Medicines"}),Object(c.jsx)("option",{value:"Grocery",children:"Grocery"}),Object(c.jsx)("option",{value:"EatOut",children:"EatOut"}),Object(c.jsx)("option",{value:"Entertainment",children:"Entertainment"}),Object(c.jsx)("option",{value:"Others",children:"Others"})]}),Object(c.jsx)("label",{htmlFor:"month",children:"Month"}),Object(c.jsxs)("select",{id:"month",name:"month",onChange:function(e){return h(e.target.value)},children:[Object(c.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:"---"}),Object(c.jsx)("option",{value:"1",children:"January"}),Object(c.jsx)("option",{value:"2",children:"February"}),Object(c.jsx)("option",{value:"3",children:"March"}),Object(c.jsx)("option",{value:"4",children:"April"}),Object(c.jsx)("option",{value:"5",children:"May"}),Object(c.jsx)("option",{value:"6",children:"June"}),Object(c.jsx)("option",{value:"7",children:"July"}),Object(c.jsx)("option",{value:"8",children:"August"}),Object(c.jsx)("option",{value:"9",children:"September"}),Object(c.jsx)("option",{value:"10",children:"October"}),Object(c.jsx)("option",{value:"11",children:"November"}),Object(c.jsx)("option",{value:"12",children:"December"})]}),Object(c.jsx)("label",{htmlFor:"year",children:"Year"}),Object(c.jsxs)("select",{id:"year",name:"year",onChange:function(e){return f(e.target.value)},children:[Object(c.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:"---"}),Object(c.jsx)("option",{value:"1995",children:"1995"}),Object(c.jsx)("option",{value:"1996",children:"1996"}),Object(c.jsx)("option",{value:"1997",children:"1997"}),Object(c.jsx)("option",{value:"1998",children:"1998"}),Object(c.jsx)("option",{value:"1999",children:"1999"}),Object(c.jsx)("option",{value:"2000",children:"2000"}),Object(c.jsx)("option",{value:"2001",children:"2001"}),Object(c.jsx)("option",{value:"2002",children:"2002"}),Object(c.jsx)("option",{value:"2003",children:"2003"}),Object(c.jsx)("option",{value:"2004",children:"2004"}),Object(c.jsx)("option",{value:"2005",children:"2005"}),Object(c.jsx)("option",{value:"2006",children:"2006"}),Object(c.jsx)("option",{value:"2007",children:"2007"}),Object(c.jsx)("option",{value:"2008",children:"2008"}),Object(c.jsx)("option",{value:"2009",children:"2009"}),Object(c.jsx)("option",{value:"2010",children:"2010"}),Object(c.jsx)("option",{value:"2011",children:"2011"}),Object(c.jsx)("option",{value:"2012",children:"2012"}),Object(c.jsx)("option",{value:"2013",children:"2013"}),Object(c.jsx)("option",{value:"2014",children:"2014"}),Object(c.jsx)("option",{value:"2015",children:"2015"}),Object(c.jsx)("option",{value:"2016",children:"2016"}),Object(c.jsx)("option",{value:"2017",children:"2017"}),Object(c.jsx)("option",{value:"2018",children:"2018"}),Object(c.jsx)("option",{value:"2019",children:"2019"}),Object(c.jsx)("option",{value:"2020",children:"2020"})]}),Object(c.jsx)("label",{htmlFor:"cost",children:"Cost"}),Object(c.jsx)("input",{id:"cost",type:"text",onChange:function(e){return S(e.target.value)}}),Object(c.jsx)("input",{type:"submit",value:"Add Expense"})]})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"You are not logged in"}),Object(c.jsx)(u.b,{to:"/login",children:"Log in"})]})})})}var A=n(16).SERVER_URL;function L(){var e=Object(a.useState)(),t=Object(d.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(),r=Object(d.a)(o,2),l=r[0],h=r[1],v=Object(a.useState)(),m=Object(d.a)(v,2),g=m[0],f=m[1],y=Object(a.useState)(),E=Object(d.a)(y,2),k=E[0],S=E[1],F=Object(a.useState)(),B=Object(d.a)(F,2),I=B[0],w=B[1],N=Object(a.useContext)(x),R=N.userData,D=(N.setUserData,Object(b.f)());Object(a.useEffect)((function(){R.user||D.push("/login")}));var M=function(){var e=Object(j.a)(i.a.mark((function e(t){var c,a,o,r,j,d,u,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,c=localStorage.getItem("auth-token"),a={budget:k,month:l,year:g,budgetName:n},console.log(c),console.log(a),!(k&&l&&g&&n)){e.next=18;break}return e.next=9,O.a.get(A+"/budgets/findBudget",{params:{budgetName:n},headers:{"x-auth-token":"".concat(c)}});case 9:return o=e.sent,console.log(o.data[0]._id),e.next=13,O.a.put(A+"/budgets/update/",a,{params:{_id:o.data[0]._id},headers:{"x-auth-token":"".concat(c)}});case 13:r=e.sent,console.log(r),200===r.status&&(j=document.getElementById("title"),s(void 0),j.selectedIndex="none",d=document.getElementById("month"),h(void 0),d.selectedIndex="none",u=document.getElementById("year"),f(void 0),u.selectedIndex="none",b=document.getElementById("cost"),S(void 0),b.value="",alert("Budget updated successfully")),e.next=19;break;case 18:alert("Please enter all the fields");case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),e.t0.response.data.msg&&w(e.t0.response.data.msg);case 24:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"page",children:R.user?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p,{}),Object(c.jsx)("h1",{children:"choose budget from below categories "}),I&&Object(c.jsx)(C,{message:I,clearError:function(){return w(void 0)}}),Object(c.jsxs)("form",{id:"MyForm",className:"form",onSubmit:M,children:[Object(c.jsx)("label",{htmlFor:"title",children:"BudgetName"}),Object(c.jsxs)("select",{id:"title",onChange:function(e){return s(e.target.value)},children:[Object(c.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:"choose budget"}),Object(c.jsx)("option",{value:"Electricity",children:"Electricity"}),Object(c.jsx)("option",{value:"Rent",children:"Rent"}),Object(c.jsx)("option",{value:"Medicines",children:"Medicines"}),Object(c.jsx)("option",{value:"Grocery",children:"Grocery"}),Object(c.jsx)("option",{value:"EatOut",children:"EatOut"}),Object(c.jsx)("option",{value:"Entertainment",children:"Entertainment"}),Object(c.jsx)("option",{value:"Others",children:"Others"})]}),Object(c.jsx)("label",{htmlFor:"month",children:"Month"}),Object(c.jsxs)("select",{id:"month",name:"month",onChange:function(e){return h(e.target.value)},children:[Object(c.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:"---"}),Object(c.jsx)("option",{value:"1",children:"January"}),Object(c.jsx)("option",{value:"2",children:"February"}),Object(c.jsx)("option",{value:"3",children:"March"}),Object(c.jsx)("option",{value:"4",children:"April"}),Object(c.jsx)("option",{value:"5",children:"May"}),Object(c.jsx)("option",{value:"6",children:"June"}),Object(c.jsx)("option",{value:"7",children:"July"}),Object(c.jsx)("option",{value:"8",children:"August"}),Object(c.jsx)("option",{value:"9",children:"September"}),Object(c.jsx)("option",{value:"10",children:"October"}),Object(c.jsx)("option",{value:"11",children:"November"}),Object(c.jsx)("option",{value:"12",children:"December"})]}),Object(c.jsx)("label",{htmlFor:"year",children:"Year"}),Object(c.jsxs)("select",{id:"year",name:"year",onChange:function(e){return f(e.target.value)},children:[Object(c.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:"---"}),Object(c.jsx)("option",{value:"1995",children:"1995"}),Object(c.jsx)("option",{value:"1996",children:"1996"}),Object(c.jsx)("option",{value:"1997",children:"1997"}),Object(c.jsx)("option",{value:"1998",children:"1998"}),Object(c.jsx)("option",{value:"1999",children:"1999"}),Object(c.jsx)("option",{value:"2000",children:"2000"}),Object(c.jsx)("option",{value:"2001",children:"2001"}),Object(c.jsx)("option",{value:"2002",children:"2002"}),Object(c.jsx)("option",{value:"2003",children:"2003"}),Object(c.jsx)("option",{value:"2004",children:"2004"}),Object(c.jsx)("option",{value:"2005",children:"2005"}),Object(c.jsx)("option",{value:"2006",children:"2006"}),Object(c.jsx)("option",{value:"2007",children:"2007"}),Object(c.jsx)("option",{value:"2008",children:"2008"}),Object(c.jsx)("option",{value:"2009",children:"2009"}),Object(c.jsx)("option",{value:"2010",children:"2010"}),Object(c.jsx)("option",{value:"2011",children:"2011"}),Object(c.jsx)("option",{value:"2012",children:"2012"}),Object(c.jsx)("option",{value:"2013",children:"2013"}),Object(c.jsx)("option",{value:"2014",children:"2014"}),Object(c.jsx)("option",{value:"2015",children:"2015"}),Object(c.jsx)("option",{value:"2016",children:"2016"}),Object(c.jsx)("option",{value:"2017",children:"2017"}),Object(c.jsx)("option",{value:"2018",children:"2018"}),Object(c.jsx)("option",{value:"2019",children:"2019"}),Object(c.jsx)("option",{value:"2020",children:"2020"})]}),Object(c.jsx)("label",{htmlFor:"cost",children:"budget"}),Object(c.jsx)("input",{id:"cost",type:"text",onChange:function(e){return S(e.target.value)}}),Object(c.jsx)("input",{type:"submit",value:"Add Budget"})]})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"You are not logged in"}),Object(c.jsx)(u.b,{to:"/login",children:"Click here to Log in"})]})})})}var U=n(16).SERVER_URL;function J(){var e=Object(a.useState)(),t=Object(d.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(),r=Object(d.a)(o,2),l=r[0],h=r[1],v=Object(a.useState)(),m=Object(d.a)(v,2),g=m[0],f=m[1],y=Object(a.useState)(),E=Object(d.a)(y,2),k=E[0],S=E[1],F=Object(a.useState)(),B=Object(d.a)(F,2),I=B[0],w=B[1],N=Object(a.useContext)(x),R=N.userData,D=(N.setUserData,Object(b.f)());Object(a.useEffect)((function(){R.user||D.push("/login")}));var M=function(){var e=Object(j.a)(i.a.mark((function e(t){var c,a,o,r,j,d,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,c=localStorage.getItem("auth-token"),a={expense:k,month:l,year:g,expenseName:n},console.log(c),console.log(a),!(k&&l&&g&&n)){e.next=17;break}return e.next=9,O.a.get(U+"/expenses/findExpense",{params:{expenseName:n},headers:{"x-auth-token":"".concat(c)}});case 9:return o=e.sent,console.log(o.data[0]._id),e.next=13,O.a.post(U+"/expenses/update",a,{params:{_id:o.data[0]._id},headers:{"x-auth-token":"".concat(c)}});case 13:200===e.sent.status&&(r=document.getElementById("title"),s(void 0),r.selectedIndex="none",j=document.getElementById("month"),h(void 0),j.selectedIndex="none",d=document.getElementById("year"),f(void 0),d.selectedIndex="none",u=document.getElementById("cost"),S(void 0),u.value="",alert("Expense added successfully")),e.next=18;break;case 17:alert("Please enter all the fields");case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(1),e.t0.response.data.msg&&w(e.t0.response.data.msg);case 23:case"end":return e.stop()}}),e,null,[[1,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"page",children:R.user?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p,{}),Object(c.jsx)("h1",{children:"Add Expense"}),I&&Object(c.jsx)(C,{message:I,clearError:function(){return w(void 0)}}),Object(c.jsxs)("form",{className:"form",onSubmit:M,children:[Object(c.jsx)("label",{htmlFor:"title",children:"ExpenseName"}),Object(c.jsxs)("select",{id:"title",onChange:function(e){return s(e.target.value)},children:[Object(c.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:"choose expense"}),Object(c.jsx)("option",{value:"Electricity",children:"Electricity"}),Object(c.jsx)("option",{value:"Rent",children:"Rent"}),Object(c.jsx)("option",{value:"Medicines",children:"Medicines"}),Object(c.jsx)("option",{value:"Grocery",children:"Grocery"}),Object(c.jsx)("option",{value:"EatOut",children:"EatOut"}),Object(c.jsx)("option",{value:"Entertainment",children:"Entertainment"}),Object(c.jsx)("option",{value:"Others",children:"Others"})]}),Object(c.jsx)("label",{htmlFor:"month",children:"Month"}),Object(c.jsxs)("select",{id:"month",name:"month",onChange:function(e){return h(e.target.value)},children:[Object(c.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:"---"}),Object(c.jsx)("option",{value:"1",children:"January"}),Object(c.jsx)("option",{value:"2",children:"February"}),Object(c.jsx)("option",{value:"3",children:"March"}),Object(c.jsx)("option",{value:"4",children:"April"}),Object(c.jsx)("option",{value:"5",children:"May"}),Object(c.jsx)("option",{value:"6",children:"June"}),Object(c.jsx)("option",{value:"7",children:"July"}),Object(c.jsx)("option",{value:"8",children:"August"}),Object(c.jsx)("option",{value:"9",children:"September"}),Object(c.jsx)("option",{value:"10",children:"October"}),Object(c.jsx)("option",{value:"11",children:"November"}),Object(c.jsx)("option",{value:"12",children:"December"})]}),Object(c.jsx)("label",{htmlFor:"year",children:"Year"}),Object(c.jsxs)("select",{id:"year",name:"year",onChange:function(e){return f(e.target.value)},children:[Object(c.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:"---"}),Object(c.jsx)("option",{value:"1995",children:"1995"}),Object(c.jsx)("option",{value:"1996",children:"1996"}),Object(c.jsx)("option",{value:"1997",children:"1997"}),Object(c.jsx)("option",{value:"1998",children:"1998"}),Object(c.jsx)("option",{value:"1999",children:"1999"}),Object(c.jsx)("option",{value:"2000",children:"2000"}),Object(c.jsx)("option",{value:"2001",children:"2001"}),Object(c.jsx)("option",{value:"2002",children:"2002"}),Object(c.jsx)("option",{value:"2003",children:"2003"}),Object(c.jsx)("option",{value:"2004",children:"2004"}),Object(c.jsx)("option",{value:"2005",children:"2005"}),Object(c.jsx)("option",{value:"2006",children:"2006"}),Object(c.jsx)("option",{value:"2007",children:"2007"}),Object(c.jsx)("option",{value:"2008",children:"2008"}),Object(c.jsx)("option",{value:"2009",children:"2009"}),Object(c.jsx)("option",{value:"2010",children:"2010"}),Object(c.jsx)("option",{value:"2011",children:"2011"}),Object(c.jsx)("option",{value:"2012",children:"2012"}),Object(c.jsx)("option",{value:"2013",children:"2013"}),Object(c.jsx)("option",{value:"2014",children:"2014"}),Object(c.jsx)("option",{value:"2015",children:"2015"}),Object(c.jsx)("option",{value:"2016",children:"2016"}),Object(c.jsx)("option",{value:"2017",children:"2017"}),Object(c.jsx)("option",{value:"2018",children:"2018"}),Object(c.jsx)("option",{value:"2019",children:"2019"}),Object(c.jsx)("option",{value:"2020",children:"2020"})]}),Object(c.jsx)("label",{htmlFor:"cost",children:"Cost"}),Object(c.jsx)("input",{id:"cost",type:"text",onChange:function(e){return S(e.target.value)}}),Object(c.jsx)("input",{type:"submit",value:"Add Expense"})]})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"You are not logged in"}),Object(c.jsx)(u.b,{to:"/login",children:"Log in"})]})})})}var _=n(16).SERVER_URL;var Y=function(){var e=Object(a.useState)({token:void 0,user:void 0}),t=Object(d.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(j.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(t=localStorage.getItem("auth-token"))&&(localStorage.setItem("auth-token",""),t=""),e.next=4,O.a.post(_+"/users/tokenIsValid",null,{headers:{"x-auth-token":t}});case 4:if(!e.sent.data){e.next=10;break}return e.next=8,O.a.get(_+"/users/",{headers:{"x-auth-token":t}});case 8:n=e.sent,s({token:t,user:n.data});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(u.a,{children:Object(c.jsxs)(x.Provider,{value:{userData:n,setUserData:s},children:[Object(c.jsx)(S,{}),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)(b.c,{children:[Object(c.jsx)(b.a,{exact:!0,path:"/",component:E}),Object(c.jsx)(b.a,{exact:!0,path:"/login",component:B}),Object(c.jsx)(b.a,{exact:!0,path:"/register",component:w}),Object(c.jsx)(b.a,{path:"/budget",component:R}),Object(c.jsx)(b.a,{path:"/expense",component:M}),Object(c.jsx)(b.a,{path:"/dashboard",component:y}),Object(c.jsx)(b.a,{path:"/updateBudgets",component:L}),Object(c.jsx)(b.a,{path:"/updateExpenses",component:J})]})})]})})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,192)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(Y,{})}),document.getElementById("root")),P()},68:function(e,t,n){},76:function(e,t,n){}},[[191,1,2]]]);
//# sourceMappingURL=main.e506c4d5.chunk.js.map