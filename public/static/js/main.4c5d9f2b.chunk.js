(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),s=n.n(c),l=(n(14),n(9)),o=n(3),u=n.n(o),i=n(7),d=n(5),f=(n(16),n(0)),x=function(e){var t=e.data;return Object(f.jsxs)("div",{className:"flex ".concat(t.newly_added?"bg-yellow-100":""),children:[Object(f.jsx)("div",{className:"m-1 mr-2 relative flex justify-center items-center  bg-purple-200 text-purple-700 flex-none used",children:t.used}),Object(f.jsxs)("div",{className:"flex-col p-3 flex-auto",children:[Object(f.jsx)("div",{className:"header",children:Object(f.jsx)("a",{href:t.short_url,children:Object(f.jsx)("h4",{className:"text-xl font-semibold",children:t.url})})}),Object(f.jsx)("div",{className:"text-sm",children:Object(f.jsxs)("a",{href:t.short_url,children:["Short URL : ",t.short_url]})}),Object(f.jsxs)("small",{className:"text-xs",children:["Created At: ",new Date(t.created_at).toLocaleDateString("en-US")]})]})]})};var b=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(d.a)(c,2),o=s[0],b=s[1],j=Object(a.useState)([]),p=Object(d.a)(j,2),h=p[0],m=p[1],O="https://urlshortener-pickfu.herokuapp.com";Object(a.useEffect)((function(){g()}),[]);var v=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,y=function(e){return"block relative px-4 py-1 leading-6 sm:text-md font-semibold focus:outline-none transition-colors duration-300 bg-white  mr-5 ".concat(n===e?"text-gray-900":" text-gray-400")},g=function(){var e=Object(i.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,t?"/top":"/all"));case 2:if(200!==(n=e.sent).status){e.next=8;break}return e.next=6,n.json();case 6:a=e.sent,m(a.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v.test(o)){e.next=4;break}return alert("Invalid URL, please try again"),e.abrupt("return");case 4:return e.next=6,fetch(O,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:o})});case 6:if(200!==(t=e.sent).status){e.next=15;break}return e.next=10,t.json();case 10:n=e.sent,h.find((function(e){return e._id===n.data._id}))||(n.data.newly_added=!0,m([n.data].concat(Object(l.a)(h)))),b(""),e.next=16;break;case 15:alert("Problem shortening the URL");case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"mx-auto bg-gray-50 container",children:[Object(f.jsx)("h1",{className:"text-7xl text-center font-bold",children:" Great Url shortener"}),Object(f.jsxs)("div",{className:"pt-5 mt-5 flex mx-auto  justify-center p-5",children:[Object(f.jsx)("input",{type:"text",className:" border border-purple-700 flex-auto  pl-10",placeholder:"Enter your URL here",value:o,onChange:function(e){return b(e.target.value)}}),Object(f.jsx)("button",{type:"button",className:"ml-5 bg-purple-200 text-purple-700 text-base font-semibold px-6 py-2 rounded-lg flex-none",onClick:N,children:"Short it"})]}),Object(f.jsxs)("div",{className:"flex mt-5 p-5",children:[Object(f.jsx)("button",{type:"button",className:y(0),onClick:function(){r(0),g()},children:"All URL's"}),Object(f.jsx)("button",{type:"button",className:y(1),onClick:function(){r(1),g("top")},children:"Top 100 URL's"})]}),Object(f.jsx)("div",{className:"flex-col mt-5 p-5",children:h.map((function(e){return Object(f.jsx)(x,{data:e},e._id)}))})]})};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(b,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4c5d9f2b.chunk.js.map