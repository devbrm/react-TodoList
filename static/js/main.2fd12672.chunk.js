(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),l=i(7),o=i.n(l),r=(i(13),i(5)),s=i(1),c=i(2),m=i(4),u=i(3),p=function(e){Object(m.a)(i,e);var t=Object(u.a)(i);function i(){var e;Object(s.a)(this,i);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).getStyle=function(t){if(e.props.item.isCompleted)return t?{textDecoration:"line-through",filter:"opacity(.3)"}:{textDecoration:"line-through",pointerEvents:"none",filter:"opacity(.3)"}},e.isCompleted=function(){return e.props.item.isCompleted},e}return Object(c.a)(i,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"listItemsContainer"},a.a.createElement("input",{style:this.getStyle(!0),onClick:this.props.toggleCheck.bind(this,this.props.item.id),checked:this.isCompleted(),type:"checkbox"}),a.a.createElement("li",{style:this.getStyle(!1)},this.props.item.title),a.a.createElement("button",{style:this.getStyle(!0),onClick:this.props.deleteItem.bind(this,this.props.item.id)},"x")))}}]),i}(n.Component),d=function(e){Object(m.a)(i,e);var t=Object(u.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("ul",null,this.props.items.map((function(t){return a.a.createElement(p,{key:t.id,item:t,toggleCheck:e.props.toggleCheck,deleteItem:e.props.deleteItem})}))))}}]),i}(n.Component),h={fontSize:"3rem",textAlign:"center",background:"#222",padding:"2rem"},g=function(e){Object(m.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).componentDidMount=function(){"[]"===localStorage.getItem("items")&&localStorage.setItem("items",JSON.stringify([{id:1,title:"Talk with GF",isCompleted:!0},{id:2,title:"Meeting with client",isCompleted:!1},{id:3,title:"Talk with the boss",isCompleted:!1},{id:4,title:"Play video games",isCompleted:!0},{id:5,title:"Learn react",isCompleted:!1},{id:6,title:"Make a TODO app",isCompleted:!0}]));var e=JSON.parse(localStorage.getItem("items"));n.setState({items:e})},n.handleChange=function(e){n.setState({input:e.target.value})},n.usingLocalStorage=function(e){return localStorage.setItem("items",JSON.stringify(e)),JSON.parse(localStorage.getItem("items"))},n.handleSubmit=function(e){if(e.preventDefault(),!n.state.input.match(/[\s\d\W_]+/g)&&""!==n.state.input){var t=n.state.items,i={id:t.length?t[t.length-1].id+1:1,title:n.state.input,isCompleted:!1};n.setState({items:n.usingLocalStorage([].concat(Object(r.a)(t),[i])),input:""})}},n.deleteTodo=function(e){var t=n.state.items;n.setState({items:n.usingLocalStorage(Object(r.a)(t.filter((function(t){return t.id!==e}))))})},n.toggleCheck=function(e){var t=n.state.items;n.setState({items:n.usingLocalStorage(t.map((function(t){return t.id===e&&(t.isCompleted=!t.isCompleted),t})))})},n.state={input:"",items:[]},n}return Object(c.a)(i,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",{style:h},"Todo List"),a.a.createElement("form",null,a.a.createElement("input",{placeholder:"Enter the todo Item",value:this.state.input,onChange:this.handleChange,type:"text",autoFocus:!0}),a.a.createElement("button",{onClick:this.handleSubmit,type:"submit"},"Add")),a.a.createElement(d,{toggleCheck:this.toggleCheck,deleteItem:this.deleteTodo,items:this.state.items}))}}]),i}(n.Component);var f=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(g,null))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root"))},8:function(e,t,i){e.exports=i(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.2fd12672.chunk.js.map