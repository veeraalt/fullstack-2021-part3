(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(15),u=t.n(c),r=t(6),a=t(3),o=t(1),i=t(0),s=function(e){var n=e.person,t=e.deletePerson;return Object(i.jsxs)("div",{children:[n.name," ",n.number,Object(i.jsx)("button",{onClick:function(){window.confirm("Delete ".concat(n.name," ?"))&&t(n.id)},children:"delete"})]})},l=function(e){var n=e.persons,t=e.deletePerson;return n.map((function(e){return Object(i.jsx)(s,{person:e,deletePerson:t},e.name)}))},d=function(e){var n=e.handleSearch;return Object(i.jsxs)("div",{children:["filter shown with ",Object(i.jsx)("input",{onChange:function(e){return n(e)}})]})},f=function(e){var n=e.onSubmit,t=e.nameValue,c=e.nameChange,u=e.numberValue,r=e.numberChange,a=e.text;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:[" name: ",Object(i.jsx)("input",{value:t,onChange:c})]}),Object(i.jsxs)("div",{children:[" number: ",Object(i.jsx)("input",{value:u,onChange:r})]}),Object(i.jsx)("button",{type:"submit",children:a})]})},b=function(e){var n=e.message,t=e.type;return null===n?null:Object(i.jsx)("div",{className:"".concat(t,"-alert"),children:n})},m=t(4),j=t.n(m),h="/api/persons",O={getAll:function(){return j.a.get(h).then((function(e){return e.data}))},create:function(e){return j.a.post(h,e).then((function(e){return e.data}))},update:function(e,n){return j.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},destroy:function(e){return j.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))}},p=function(){var e=Object(o.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],u=Object(o.useState)(t),s=Object(a.a)(u,2),m=s[0],j=s[1],h=Object(o.useState)(""),p=Object(a.a)(h,2),v=p[0],x=p[1],g=Object(o.useState)(""),w=Object(a.a)(g,2),C=w[0],y=w[1],S=Object(o.useState)(null),k=Object(a.a)(S,2),T=k[0],P=k[1],A=Object(o.useState)(null),V=Object(a.a)(A,2),D=V[0],I=V[1];Object(o.useEffect)((function(){O.getAll().then((function(e){c(e),j(e)}))}),[]);var E=function(e,n){var u=t.find((function(n){return n.id===e}));O.update(e,n).then((function(n){c(t.map((function(t){return t.id!==e?t:n}))),j(t.map((function(t){return t.id!==e?t:n}))),x(""),y("")})).then((function(){P("Changed ".concat(u.name,"'s number to ").concat(n.number)),setTimeout((function(){P(null)}),5e3)})).catch((function(e){I("Information of ".concat(u.name," has already been removed from server")),setTimeout((function(){I(null)}),5e3)}))};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(b,{message:T,type:"success"}),Object(i.jsx)(b,{message:D,type:"error"}),Object(i.jsx)(d,{handleSearch:function(e){var n,c=e.target.value.toLowerCase();n=t.filter((function(e){return-1!==e.name.toLowerCase().search(c)})),j(n)}}),Object(i.jsx)("h3",{children:"Add a new"}),Object(i.jsx)(f,{onSubmit:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).includes(v)){var n=t.find((function(e){return e.name===v})),u=n.id,a=Object(r.a)(Object(r.a)({},n),{},{number:C});n.number===C?window.alert("".concat(v," is already added to phonebook with the same number")):window.confirm("".concat(v," is already added to phonebook, replace the old number with a new one?"))&&E(u,a)}else{var o={name:v,number:C};O.create(o).then((function(e){c(t.concat(e)),j(t.concat(e)),x(""),y("")})).then((function(){P("Added ".concat(v)),setTimeout((function(){P(null)}),5e3)})).catch((function(e){I("Could not add ".concat(v)),setTimeout((function(){I(null)}),5e3)}))}},nameValue:v,nameChange:function(e){x(e.target.value)},numberValue:C,numberChange:function(e){y(e.target.value)},text:"add"}),Object(i.jsx)("h3",{children:"Numbers"}),Object(i.jsx)(l,{persons:m,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));O.destroy(e).then((function(){c(t.filter((function(n){return n.id!==e}))),j(t.filter((function(n){return n.id!==e})))})).then((function(){P("Deleted ".concat(n.name)),setTimeout((function(){P(null)}),5e3)})).catch((function(e){I("Information of ".concat(n.name," has already been removed from server")),setTimeout((function(){I(null)}),5e3)}))}})]})};t(39);u.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.40fb0df6.chunk.js.map