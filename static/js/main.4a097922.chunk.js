(this["webpackJsonppoker-home"]=this["webpackJsonppoker-home"]||[]).push([[0],{16:function(e,t,c){},24:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),i=c(17),l=c.n(i),r=c(10),j=c(2),o=c(6),d=(c(24),"memaberInfo"),h=function(){var e=localStorage.getItem(d);if(null!=e){var t=JSON.parse(e);return[t.id,t.pw,!0]}return["","",!1]}();var b=function(){var e=Object(a.useState)(h[0]),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(h[1]),l=Object(o.a)(i,2),j=l[0],b=l[1],u=Object(a.useState)(h[2]),O=Object(o.a)(u,2),m=O[0],x=O[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"logo"}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("div",{className:"inp_area",children:[Object(n.jsxs)("div",{className:"inp_txt",children:[Object(n.jsx)("input",{className:"inp_id",onChange:function(e){s(e.target.value)},value:c,type:"id",placeholder:"ID"}),Object(n.jsx)("div",{className:"txt_clear",onClick:function(){s("")},children:"\u274c"})]}),Object(n.jsxs)("div",{className:"inp_txt",children:[Object(n.jsx)("input",{className:"inp_pw",onChange:function(e){b(e.target.value)},value:j,type:"password",placeholder:"PASSWORD"}),Object(n.jsx)("div",{className:"txt_clear",onClick:function(){b("")},children:"\u274c"})]})]}),Object(n.jsxs)("div",{className:"chk_area",children:[Object(n.jsx)("input",{className:"chk_box",checked:m,onChange:function(e){return x(e.target.checked)},type:"checkbox"}),Object(n.jsx)("div",{className:"chk_detail",children:"REMEMBER USER ID/PW"})]}),Object(n.jsx)("button",{className:"btn_area",onClick:function(){"admin"===c&&"1234"===j&&(!function(e,t,c){if(e){var n={id:t,pw:c};localStorage.setItem(d,JSON.stringify(n))}else localStorage.removeItem(d)}(m,c,j),window.location.href="home")},children:"LOG IN"}),Object(n.jsx)(r.b,{to:"/join_check",children:Object(n.jsx)("button",{className:"btn_area",children:"JOIN MEMBER"})})]})})]})},u=(c(30),"limi");var O=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"logo"}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("input",{className:"inp_code",value:c,onChange:function(e){s(e.target.value)},placeholder:"Enter Invite Code"}),Object(n.jsx)("button",{className:"btn_area",onClick:function(){return function(e){e===u?window.location.href="join_member":alert("Invite Code does not matched")}(c)},children:"Send"})]})})]})};c(31);var m=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),r=l[0],j=l[1],d=Object(a.useState)(""),h=Object(o.a)(d,2),b=h[0],u=h[1],O=Object(a.useState)(""),m=Object(o.a)(O,2),x=m[0],p=m[1],v=Object(a.useState)(""),N=Object(o.a)(v,2),f=N[0],_=N[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"logo"}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("h3",{className:"join_title",children:"ID"}),Object(n.jsx)("h3",{className:"info_check",children:""===c?"enter ID":""}),Object(n.jsx)("div",{className:"inp_join",children:Object(n.jsx)("input",{className:"inp_id",onChange:function(e){s(e.target.value)},type:"id",value:c,placeholder:"\ub85c\uadf8\uc778 \uc544\uc774\ub514"})}),Object(n.jsx)("h3",{className:"join_title",children:"PASSWORD"}),Object(n.jsx)("h3",{className:"info_check",children:""===r?"enter PW":""}),Object(n.jsx)("div",{className:"inp_join",children:Object(n.jsx)("input",{className:"inp_pw",onChange:function(e){j(e.target.value)},type:"password",value:r,placeholder:"\ub85c\uadf8\uc778 \ube44\ubc00\ubc88\ud638"})}),Object(n.jsx)("h3",{className:"join_title",children:"CHECK PASSWORD"}),Object(n.jsx)("h3",{className:"info_check",children:r===b?"":"password not matched!"}),Object(n.jsx)("div",{className:"inp_join",children:Object(n.jsx)("input",{className:"inp_pw",onChange:function(e){u(e.target.value)},type:"password",value:b,placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778"})}),Object(n.jsx)("h3",{className:"join_title",children:"NAME"}),Object(n.jsx)("h3",{className:"info_check",children:""===x?"enter Name":""}),Object(n.jsx)("div",{className:"inp_join",children:Object(n.jsx)("input",{className:"inp_id",onChange:function(e){p(e.target.value)},type:"id",value:x,placeholder:"\ud55c\uad6d\uc5b4\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694."})}),Object(n.jsx)("h3",{className:"join_title",children:"NICK NAME"}),Object(n.jsx)("h3",{className:"info_check",children:""===f?"enter Nickname":""}),Object(n.jsx)("div",{className:"inp_join",children:Object(n.jsx)("input",{className:"inp_id",onChange:function(e){_(e.target.value)},type:"id",value:f,placeholder:"Poker Stars \uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."})}),Object(n.jsx)("div",{className:"inp_join"}),Object(n.jsx)("button",{className:"btn_area",onClick:function(){!function(e,t,c,n,a){if(""===e)alert("Please Enter ID");else if(""===t)alert("Please Enter PW");else if(t!==c)alert("Please Check your PW");else if(""===n)alert("Please Enter Name");else if(""===a)alert("Please Enter Nickname");else{var s={id:e,pw:t};localStorage.setItem("memaberInfo",JSON.stringify(s)),alert("Account Created!"),window.location.href="/"}}(c,r,b,x,f)},children:"CREATE ACCOUNT"})]})})]})};c(16);var x=function(){return Object(n.jsx)("header",{children:Object(n.jsx)("div",{className:"header",children:"Header"})})};c(32);var p=function(){return Object(n.jsx)("footer",{children:"Footer"})};var v=function(){return Object(n.jsx)("div",{className:"main",children:"Example"})};c(33);var N=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(x,{}),Object(n.jsx)(v,{}),Object(n.jsx)(p,{})]})};var f=function(){return Object(n.jsx)(r.a,{basename:"https://cheolyeing.github.io/Poker-Calculator",children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{path:"/",component:b,exact:!0}),Object(n.jsx)(j.a,{path:"/home",component:N,exact:!0}),Object(n.jsx)(j.a,{path:"/join_check",component:O,exact:!0}),Object(n.jsx)(j.a,{path:"/join_member",component:m,exact:!0})]})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};c(34);l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),_()}},[[35,1,2]]]);
//# sourceMappingURL=main.4a097922.chunk.js.map