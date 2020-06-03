(this["webpackJsonpreact-typescript-app"]=this["webpackJsonpreact-typescript-app"]||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/logo-react.8e26f220.svg"},25:function(e,t,n){e.exports=n(39)},30:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(20),c=n.n(r),m=(n(30),n(5)),o=n(6),i=n(8),u=n(7),s=n(9),d=n(12),E=n(3),f=n(2),h=(n(31),n(32),n(33),n(21)),p=n.n(h),b=function(){return a.createElement(a.Fragment,null,a.createElement("nav",{className:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},a.createElement("a",{className:"navbar-brand col-sm-3 col-md-2 mr-0",href:"/#/"},a.createElement("img",{src:p.a,alt:"Logo",width:"50",height:"50"})," ","React Typescript App")))},v=function(){return a.createElement(a.Fragment,null,a.createElement("div",{className:"row"},a.createElement("nav",{className:"col-md-2 d-none d-md-block bg-light sidebar"},a.createElement("div",{className:"sidebar-sticky"},a.createElement("ul",{className:"nav flex-column"},a.createElement("li",{className:"nav-item"},a.createElement(d.b,{className:"nav-link",activeClassName:"active",to:"/",exact:!0},a.createElement("i",{className:"fa fa-home"}),""," Home page")),a.createElement("li",{className:"nav-item"},a.createElement(d.b,{className:"nav-link",activeClassName:"active",to:"/demo"},a.createElement("i",{className:"fa fa-apple"}),""," Demo page")),a.createElement("li",{className:"nav-item"},a.createElement(d.b,{className:"nav-link",activeClassName:"active",to:"/contact"},a.createElement("i",{className:"fa fa-users"}),""," Contact page")))))))},O=function(e){function t(){return Object(m.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.createElement("div",{role:"main",className:"col-md-9 ml-sm-auto col-lg-10 px-4"},a.createElement("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},a.createElement("h1",{className:"h2"},this.props.title)),a.createElement("div",{className:"row",style:{paddingTop:"50px"}},a.createElement("div",{className:"col-md-12"},"")),this.props.children)}}]),t}(a.Component),g=function(){return a.createElement(a.Fragment,null,a.createElement(O,{title:"Home"},a.createElement("h1",null,"Welcome to React app")))},y=function(e){return a.createElement(a.Fragment,null,a.createElement("h6",null,"Contact list"),a.createElement("div",{className:"table-responsive"},a.createElement("table",{className:"table table-striped table-sm"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"#"),a.createElement("th",null,"Name"),a.createElement("th",null,"Email"),a.createElement("th",null,"Date of birth"),a.createElement("th",null,"Actions"))),a.createElement("tbody",null,e.datas&&e.datas.length>0&&e.datas.map((function(t,n){return a.createElement(a.Fragment,{key:n},a.createElement("tr",null,a.createElement("td",null,t.id),a.createElement("td",null,t.name),a.createElement("td",null,t.email),a.createElement("td",null,t.dateOfBirth),a.createElement("th",null,a.createElement("i",{className:"fa fa-edit",onClick:e.handleEdit(t.id),style:{color:"##0d903c",cursor:"pointer"}},"\xa0")," | ",a.createElement("i",{className:"fa fa-trash",onClick:e.handleDelete(t.id),style:{color:"red",cursor:"pointer"}},"\xa0"))))}))))))},C=n(14),N=n(24);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var w=function(e){var t={id:0,name:"",email:"",dateOfBirth:""},n=a.useState(t),l=Object(N.a)(n,2),r=l[0],c=l[1];a.useEffect((function(){""!==r.name&&(document.title="The entered name is ".concat(r.name))}),[r.name]),a.useEffect((function(){e.editContact&&c(e.editContact)}),[e.editContact]);var m=function(){c(t)},o=function(e){e.preventDefault();var t=e.target;c((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(C.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(C.a)({},t.name,t.value))}))};return a.createElement(a.Fragment,null,a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.handleSaveContact(r),m()}},a.createElement("div",{className:"card bg-light mb-3"},a.createElement("div",{className:"card-header"},"New contact"),a.createElement("div",{className:"card-body"},a.createElement("div",{className:"card-text"},a.createElement("div",{className:"form-row"},a.createElement("div",{className:"form-group col-md-4"},a.createElement("label",null,"Name"),a.createElement("input",{type:"text",name:"name",value:r.name,placeholder:"Enter name",className:"form-control",required:!0,onChange:o})),a.createElement("div",{className:"form-group col-md-4"},a.createElement("label",null,"Email address"),a.createElement("input",{type:"email",name:"email",value:r.email,placeholder:"Enter email",className:"form-control","aria-describedby":"emailHelp",required:!0,onChange:o}),a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),a.createElement("div",{className:"form-group col-md-4"},a.createElement("label",null,"Date of birth"),a.createElement("input",{type:"date",max:"2020-12-01",min:"1900-12-01",name:"dateOfBirth",value:r.dateOfBirth,placeholder:"Enter date of birth",className:"form-control",required:!0,onChange:o}))),r.id>0&&a.createElement("input",{className:"btn btn-outline-danger",type:"submit",value:"Update"})," ",r.id<=0&&a.createElement("input",{className:"btn btn-outline-primary",type:"submit",value:"Save"})," ",a.createElement("input",{className:"btn btn-outline-warning",type:"button",value:"Reset",onClick:m})," ")))))},k=new function e(){var t=this;Object(m.a)(this,e),this.key="contacts",this.fetchContacts=function(){var e=localStorage.getItem(t.key);return e?JSON.parse(e):null},this.getById=function(e){var n=t.fetchContacts();return n?n.filter((function(t){return t.id===e}))[0]:null},this.saveContact=function(e){var n=1,a=[],l=t.fetchContacts();l&&(n=(a=l).length+1),e.id=n,a.push(e),t.saveContacts(a)},this.updateContact=function(e,n){var a=t.fetchContacts();if(a){var l=a.find((function(t){return t.id===e})),r=a.findIndex((function(t){return t.id===e}));l&&(l.name=n.name,l.email=n.email,l.dateOfBirth=n.dateOfBirth,a[r]=l),t.saveContacts(a)}},this.deleteById=function(e){var n=t.fetchContacts();if(n){var a=n.filter((function(t){return t.id!==e}));t.saveContacts(a)}},this.saveContacts=function(e){localStorage.setItem(t.key,JSON.stringify(e))},this.clearData=function(){localStorage.removeItem(t.key)}},D=function(e){function t(e){var n;Object(m.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).renderDeleteAllButton=function(){var e=n.state.contacts;return e&&e.length>0?a.createElement(a.Fragment,null,a.createElement("div",{className:"row"},a.createElement("div",{className:"col-md-12",style:{marginBottom:"10px"}},a.createElement("button",{className:"btn btn-warning",onClick:n.handleDeleteAll},"Delete all")))):null},n.loadContacts=function(){var e=k.fetchContacts();n.setState({contacts:e})},n.handleCreateOrUpdate=function(e){e.id>0?k.updateContact(e.id,e):k.saveContact(e),n.loadContacts()},n.handleDelete=function(e){return function(t){k.deleteById(e),n.loadContacts()}},n.handleEdit=function(e){return function(t){var a=k.getById(e);a&&n.setState({editContact:a})}},n.handleDeleteAll=function(){k.clearData(),n.loadContacts()};return n.state={contacts:[],editContact:{id:0,name:"",email:"",dateOfBirth:""}},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.loadContacts()}},{key:"render",value:function(){return a.createElement(a.Fragment,null,a.createElement(O,{title:"Contact"},a.createElement(w,{handleSaveContact:this.handleCreateOrUpdate,editContact:this.state.editContact}),a.createElement(y,{datas:this.state.contacts,handleDelete:this.handleDelete,handleEdit:this.handleEdit}),this.renderDeleteAllButton()))}}]),t}(a.Component);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var P=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){Object(C.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},{id:1,name:"Kumar",email:"c.coumarane@gmail.com",dateOfBirth:"24/07/1975"},{name:"Coumarane"}),n=["Kumar","Coumarane","Helios"],l=[].concat(n,["Karma"]);return a.createElement(a.Fragment,null,a.createElement("div",{className:"card"},a.createElement("div",{className:"card-body"},a.createElement("b",null,"Object destructuring:"),a.createElement("br",null),a.createElement("p",null,"Name: ",t.name,a.createElement("br",null),"Email: ",t.email),a.createElement("hr",null),a.createElement("b",null,"Array destructuring:"),a.createElement("br",null),a.createElement("code",null,'const arr: string[] = ["Kumar", "Coumarane", "Helios"];',a.createElement("br",null),'const newArr = [...arr, "COUPPANE"];'),a.createElement("br",null),l.join(" // "),a.createElement("hr",null),a.createElement("b",null,"Arrow function:"),a.createElement("br",null),a.createElement("code",null,"arr.map((item, index) => item);"),a.createElement("ul",null,n.map((function(e,t){return a.createElement(a.Fragment,{key:t},a.createElement("li",null,e))}))))))},x=function(e){var t=e.contact;return a.createElement(a.Fragment,null,a.createElement("p",null,"Name: ",t.name,a.createElement("br",null),"Email: ",t.email,a.createElement("br",null),"Date of birth: ",t.dateOfBirth,a.createElement("br",null)))},S=function(e){function t(e){var n;Object(m.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).getContact=function(){n.setState({contact:{id:1,name:"Coumarane COUPPANE",email:"c.coumarane@gmail.com",dateOfBirth:"24/07/1975"}})};return n.state={contact:{id:0,name:"",email:"",dateOfBirth:""}},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getContact()}},{key:"render",value:function(){var e=this.state.contact;return a.createElement(a.Fragment,null,a.createElement("div",{className:"card"},a.createElement("div",{className:"card-body"},a.createElement("p",null,a.createElement("b",null,"Communication")),e&&e.id>0&&a.createElement(x,{contact:e}),0===e.id&&a.createElement("div",null,"Contact is empty :-) "))))}}]),t}(a.Component),F=function(e){return a.createElement(a.Fragment,null,a.createElement("p",null,"Contact edited:",a.createElement("br",null),a.createElement("button",{onClick:function(){e.sendNewContact({id:2,name:"Kumar",email:"coumarane.couppane@devoteam.com",dateOfBirth:"00/00/0000"})}},"New contact")))},A=function(e){var t=e.contact;return a.createElement(a.Fragment,null,a.createElement("p",null,"Name: ",t.name,a.createElement("br",null),"Email: ",t.email,a.createElement("br",null),"Date of birth: ",t.dateOfBirth,a.createElement("br",null)))},I=function(e){function t(e){var n;Object(m.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).getContact=function(){n.setState({contact:{id:1,name:"Coumarane COUPPANE",email:"c.coumarane@gmail.com",dateOfBirth:"24/07/1975"}})},n.getContactFromChild=function(e){console.log("child contact: ".concat(e)),n.setState({contact:e})};return n.state={contact:{id:0,name:"",email:"",dateOfBirth:""}},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getContact()}},{key:"render",value:function(){var e=this.state.contact;return a.createElement(a.Fragment,null,a.createElement("div",{className:"card"},a.createElement("div",{className:"card-body"},a.createElement("p",null,a.createElement("b",null,"Communication")),a.createElement("p",null,a.createElement(F,{sendNewContact:this.getContact})),e&&e.id>0&&a.createElement(A,{contact:e}),0===e.id&&a.createElement("div",null,"Contact is empty :-) "))))}}]),t}(a.Component),H=function(){return a.createElement(a.Fragment,null,a.createElement(O,{title:"Demo"},a.createElement(P,null),a.createElement(S,null),a.createElement(I,null)))},U=function(){return a.createElement(E.c,null,a.createElement(E.a,{exact:!0,path:"/",component:g}),a.createElement(E.a,{path:"/contact",component:D}),a.createElement(E.a,{path:"/demo",component:H}))},K=Object(f.a)(),J=function(e){function t(){return Object(m.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.createElement(a.Fragment,null,a.createElement(d.a,null,a.createElement(E.b,{history:K},a.createElement(b,null),a.createElement("div",{className:"container-fluid"},a.createElement(v,null),a.createElement(U,null)))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.fbfa3e00.chunk.js.map