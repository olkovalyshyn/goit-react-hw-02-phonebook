(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__rCUik",label:"ContactForm_label__3uyZH",input:"ContactForm_input__828Yz",button:"ContactForm_button__2zeN2"}},27:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(9),i=n.n(o),s=(n(18),n(12)),u=n(4),l=n(5),b=n(7),m=n(6),h=n(10),d=n(2),j=n.n(d),f=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(h.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.setState({name:"",number:""}),t.props.onAdd(t.state.name,t.state.number)},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:j.a.label,children:["Name",Object(a.jsx)("input",{type:"text",name:"name",className:j.a.input,value:this.state.name,onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:j.a.label,children:["Number",Object(a.jsx)("input",{type:"tel",name:"number",className:j.a.input,value:this.state.number,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",className:j.a.button,children:"Add contact"})]})}}]),n}(c.Component);var p=function(t){var e=t.contacts;return t.onDeleteContact,Object(a.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(a.jsxs)("li",{children:[n,": ",c,Object(a.jsx)("button",{type:"button",children:"Delete"})]},e)}))})},O=function(t){var e=t.value,n=t.onChange;return Object(a.jsx)("input",{type:"text",value:e,onChange:n})},C=n(11),v=n.n(C),g=(n(27),function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:v.a.generate(),name:e,number:n};t.setState((function(t){return{contacts:[a].concat(Object(s.a)(t.contacts))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.visibleContacts=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(f,{onAdd:this.addContact}),Object(a.jsx)("h3",{children:"Find contacts by name"}),Object(a.jsx)(O,{value:this.state.filter,onChange:this.changeFilter}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(p,{contacts:this.visibleContacts()})]})}}]),n}(c.Component)),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),x()}},[[28,1,2]]]);
//# sourceMappingURL=main.3c5f6d5f.chunk.js.map