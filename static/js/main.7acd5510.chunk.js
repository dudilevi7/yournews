(this.webpackJsonpyournews=this.webpackJsonpyournews||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/nonImage.1b3aafab.png"},44:function(e,t,a){e.exports=a.p+"static/media/logo.213bf5e2.png"},46:function(e,t,a){e.exports=a(65)},51:function(e,t,a){},52:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),s=a.n(o),i=(a(51),a(11)),c=a(12),l=a(15),m=a(13),u=a(16),d=(a(52),a(53),a(19)),h=a(20),p=a(6),g=function(e){e.onLogOutClick;var t=e.isSignedIn,a=r.a.createElement(p.a.Item,{style:{margin:10}},r.a.createElement(d.b,{to:"/Login",style:{fontSize:"1.2em",textDecoration:"none"}},"Login")),n=r.a.createElement(p.a.Item,{style:{margin:10}},r.a.createElement(d.b,{to:"/Register",style:{fontSize:"1.2em",textDecoration:"none"}},"Register")),o="",s=r.a.createElement(p.a.Item,{style:{margin:10}},r.a.createElement(d.b,{to:"/",style:{fontSize:"1.2em",textDecoration:"none"}},"HOME")),i="";return t&&(a=r.a.createElement(p.a.Item,{style:{margin:10}},r.a.createElement(d.b,{to:"/Login",style:{fontSize:"1.2em",textDecoration:"none"}},"Logout")),n="",o=r.a.createElement(p.a.Item,{style:{margin:10}},r.a.createElement(d.b,{to:"/MyNews",style:{fontSize:"1.2em",textDecoration:"none"}},"MyNews")),s="",i=r.a.createElement(p.a.Item,{style:{margin:10}},r.a.createElement(d.b,{to:"/Weather",style:{fontSize:"1.2em",textDecoration:"none",color:"gold"}},"Weather"))),r.a.createElement(p.a,{variant:"pills",activeKey:"/home"},s,a,n,o,i)},y=a(5),E=a(18),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).onUsernameChange=function(e){var t=e.target.value;a.setState({userName:t})},a.onPasswordChange=function(e){var t=e.target.value;a.setState({password:t})},a.onSubmitClick=function(e){e.preventDefault(),fetch("https://pure-sands-27033.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a.state.userName,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){e.id?(a.props.onLoginComplete(e),a.props.history.push("/MyNews")):alert(e)}))},a.state={userName:"",password:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.onLoginStart()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row align-items-center justify-content-center"},r.a.createElement(y.a,{style:{padding:"10px",border:"1px solid #ccc",margin:"10px"}},r.a.createElement("h1",null,"Login"),r.a.createElement(y.a.Group,{controlId:"formBasicEmail"},r.a.createElement(y.a.Label,null,"Username"),r.a.createElement(y.a.Control,{type:"name",placeholder:"Enter name",onChange:function(t){return e.onUsernameChange(t)}})),r.a.createElement(y.a.Group,{controlId:"formBasicPassword"},r.a.createElement(y.a.Label,null,"Password"),r.a.createElement(y.a.Control,{type:"password",placeholder:"Password",onChange:function(t){return e.onPasswordChange(t)}})),r.a.createElement(E.a,{variant:"primary",type:"submit",onClick:this.onSubmitClick},"Submit")))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).onNameChange=function(e){var t=e.target.value;a.setState({userName:t})},a.onEmailChange=function(e){var t=e.target.value;a.setState({email:t})},a.onCategoryChange=function(e){var t=e.target.value.toLowerCase();a.setState({category:t})},a.onPasswordChange=function(e){var t=e.target.value;a.setState({password:t});var n=a.state.rePassword;a.matchPasswords(t,n)},a.onRePasswordChange=function(e){var t=e.target.value;a.setState({rePassword:t});var n=a.state.password;a.matchPasswords(n,t)},a.matchPasswords=function(e,t){t===e?(a.setState({matchPasswordText:"Password and Re-Password does match"}),a.setState({matchPassStyle:{color:"green",fontWeight:"bold"}})):(a.setState({matchPasswordText:"Password and Re-Password doesn't match"}),a.setState({matchPassStyle:{color:"red",fontWeight:"bold"}}))},a.onSubmitClick=function(e){if(e.preventDefault(),a.state.userName.length>0&&a.state.email.length>0&&a.state.category.length>0&&a.state.password===a.state.rePassword&&a.state.checkBox)fetch("https://pure-sands-27033.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email.toLowerCase(),password:a.state.password,username:a.state.userName,category:a.state.category})}).then((function(e){return e.json()})).then((function(e){"ERROR"===e.severity?"users_username_key"===e.constraint?alert("The username is exist"):"login_email_key"===e.constraint?alert("The email is exist"):alert(e.detail):(a.props.onRegisterComplete(e),a.props.history.push("/MyNews"))}));else{var t="";0===a.state.userName.length&&(t+="Enter an valid name \n"),0===a.state.email.length&&(t+="Enter an valid email \n"),a.state.category||(t+="Select a category \n"),a.state.checkBox||(t+="Accept the conditions & terms box \n"),alert(t)}},a.state={userName:"",email:"",password:"",rePassword:"",checkBox:!1,matchPasswordText:"",matchPassStyle:{}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row align-items-center justify-content-center"},r.a.createElement(y.a,{style:{padding:"30px",border:"1px solid #ccc",margin:"10px"}},r.a.createElement("h1",null,"Register"),r.a.createElement(y.a.Group,{controlId:"formName"},r.a.createElement(y.a.Label,null,"Username"),r.a.createElement(y.a.Control,{type:"text",placeholder:"Enter username",onChange:this.onNameChange}),r.a.createElement(y.a.Text,{className:"text-muted"},"Advice : what is your nickname ? add something ;)")),r.a.createElement(y.a.Group,{controlId:"formBasicEmail"},r.a.createElement(y.a.Label,null,"Email address"),r.a.createElement(y.a.Control,{type:"email",placeholder:"Enter email",onChange:this.onEmailChange}),r.a.createElement(y.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(y.a.Group,{controlId:"exampleForm.ControlSelect1"},r.a.createElement(y.a.Label,null,"Category"),r.a.createElement(y.a.Control,{as:"select",multiple:!0,onChange:this.onCategoryChange},r.a.createElement("option",null,"General"),r.a.createElement("option",null,"Sports"),r.a.createElement("option",null,"Entertainment"),r.a.createElement("option",null,"Technology"),r.a.createElement("option",null,"Business")),r.a.createElement(y.a.Text,{className:"text-muted"},"It's your news! choose your specific category")),r.a.createElement(y.a.Group,{controlId:"formPassword"},r.a.createElement(y.a.Label,null,"Password"),r.a.createElement(y.a.Control,{type:"password",placeholder:"Password",onChange:this.onPasswordChange})),r.a.createElement(y.a.Group,{controlId:"formRepatPassword"},r.a.createElement(y.a.Label,null,"Re-Password"),r.a.createElement(y.a.Control,{type:"password",placeholder:"Password",onChange:this.onRePasswordChange}),r.a.createElement(y.a.Text,{style:this.state.matchPassStyle,className:"text"},this.state.matchPasswordText)),r.a.createElement(y.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(y.a.Check,{type:"checkbox",label:"I have read all conditions & terms",onClick:function(){return e.setState({checkBox:!e.state.checkBox})}})),r.a.createElement(E.a,{variant:"primary",type:"submit",onClick:this.onSubmitClick},"Sign Up")))}}]),t}(n.Component),w=a(32),v=a(22),S=a(31),C=a(10),k=a(24),x=a.n(k),j=function(e){for(var t=e.news,a=x.a,n=[],o=5;o<t.length;o++)n.push(t[o]);var s=n.map((function(e,t){return n[t].urlToImage&&(a=n[t].urlToImage),r.a.createElement(C.a,{style:{width:"18rem",margin:"10px"},key:t},r.a.createElement(C.a.Img,{variant:"top",src:a}),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,null,n[t].title),r.a.createElement(C.a.Text,null,n[t].description),r.a.createElement(E.a,{variant:"primary",onClick:function(){return window.open(n[t].url,"_blank").focus()}},"Click for More"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"outline-success",onClick:function(){return window.open("https://api.whatsapp.com/send?text="+n[t].url,"_blank").focus()}},"Share via Whatsapp")))}));return r.a.createElement("div",{className:"row align-items-center justify-content-center"},s)},I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e)))._isMounted=!1,a.onCloseToast=function(){a.setState({toastDisplay:!1})},a.onSelectCategory=function(e){var t=a.state.url+e,n=new Request(t);fetch(n).then((function(e){return e.json()})).then((function(e){a._isMounted&&a.setState({data:e})}))},a.state={category:"",apiKey:"3580620b7e0341c0aac4bc7d8754db54",url:"https://newsapi.org/v2/top-headlines?country=il&apiKey=3580620b7e0341c0aac4bc7d8754db54&category=",data:{},toastDisplay:!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0;var t=this.props.category,a=this.state.url+t,n=new Request(a);fetch(n).then((function(e){return e.json()})).then((function(t){e._isMounted&&e.setState({data:t})}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){if(this.props.isSignedIn||this.props.history.push("/"),!this.state.data.articles)return r.a.createElement(v.a,{animation:"border"});for(var e=this.state.data.articles,t=(x.a,[]),a=0;a<5;a++)t.push(e[a]);var n=t.map((function(a,n){var o=x.a;return t[n].urlToImage&&(o=t[n].urlToImage),r.a.createElement(w.a.Item,{onClick:function(){return window.open(e[n].url,"_blank").focus()},key:n},r.a.createElement("img",{className:"d-block w-100",src:o,alt:"slide"}),r.a.createElement(w.a.Caption,null,r.a.createElement("h3",{style:{background:" black",fontSize:20}},t[n].title),r.a.createElement("p",{style:{background:" black",fontSize:15}},t[n].description)))}));return r.a.createElement("div",{className:"row align-items-center justify-content-center"},r.a.createElement(S.a,{show:this.state.toastDisplay,onClose:this.onCloseToast,style:{position:"fixed",top:"10px",right:"3px",zIndex:9999}},r.a.createElement(S.a.Header,null,r.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),r.a.createElement("strong",{className:"mr-auto"},"YourNews"),r.a.createElement("small",null,"now")),r.a.createElement(S.a.Body,null,"Hello, ",this.props.userName," ! your'e logged in.")),r.a.createElement(w.a,{style:{height:"50%",width:"50%",display:"flex",marginBottom:"20px",marginLeft:"200px",marginRight:"200px",cursor:"pointer"}},n),r.a.createElement("div",{style:{margin:"20px"}},r.a.createElement(p.a,{variant:"pills",defaultActiveKey:this.props.category,onSelect:this.onSelectCategory},r.a.createElement(p.a.Item,null,r.a.createElement(p.a.Link,{eventKey:"general"},"General")),r.a.createElement(p.a.Item,null,r.a.createElement(p.a.Link,{eventKey:"sports"},"Sports")),r.a.createElement(p.a.Item,null,r.a.createElement(p.a.Link,{eventKey:"technology"},"Technology")),r.a.createElement(p.a.Item,null,r.a.createElement(p.a.Link,{eventKey:"entertainment"},"Entertainment")),r.a.createElement(p.a.Item,null,r.a.createElement(p.a.Link,{eventKey:"business"},"Business")))),r.a.createElement(j,{news:this.state.data.articles}))}}]),t}(n.Component),O=a(60),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e)))._isMounted=!1,a.onRefreshClick=function(){var e=new Date;a.setState({todayDate:e.toDateString()}),a.setState({currTime:e.toLocaleTimeString()}),O.getCurrentPosition((function(e,t){if(e)throw e;var n=t.coords.latitude,r=t.coords.longitude,o=new Request("https://api.openweathermap.org/data/2.5/weather?lat="+n+"&lon="+r+"&units=metric&appid=5a5f8d8e37a6bd6f84d80adc804e0da0");fetch(o).then((function(e){return e.json()})).then((function(e){a._isMounted&&(a.setState({city:e.name}),a.setState({country:e.sys.country}),a.setState({temp:e.main.temp+"\xb0"}),a.setState({description:e.weather[0].main}))}))}))},a.state={todayDate:"",description:"",city:"",country:"",temp:"",currTime:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.onRefreshClick()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return this.props.isSignedIn||this.props.history.push("/Login"),this.state.currTime?r.a.createElement("div",{className:"row align-items-center justify-content-center"},r.a.createElement(C.a,{style:{width:"35%"}},r.a.createElement(C.a.Header,null,r.a.createElement("h1",{style:{fontSize:75}}," ",this.state.temp," "),r.a.createElement(C.a.Text,null,this.state.description)),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,null,this.state.city+" , "+this.state.country),r.a.createElement(C.a.Text,null,this.state.todayDate+" | "+this.state.currTime),r.a.createElement(E.a,{variant:"warning",onClick:this.onRefreshClick},"Refresh")))):r.a.createElement(v.a,{animation:"border"})}}]),t}(n.Component),N=a(44),P=a.n(N),T=a(45),R=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.props.history.push("/Login")}),2e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"ma4 mt0 tc br4"},r.a.createElement("div",null," ",r.a.createElement("img",{style:{paddingTop:"5px",animation:"pop-in ".concat(T.easings.easeOutExpo," 2000ms forwards")},alt:"logo",src:P.a})),r.a.createElement(v.a,{animation:"border"}))}}]),t}(n.Component),D=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).onLogOutClick=function(){},e.onLoginStart=function(){e.setState({isSignedIn:!1})},e.onRegisterComplete=function(t){e.setState(Object.assign(e.state.user,{username:t.username})),e.setState(Object.assign(e.state.user,{category:t.category})),e.setState({isSignedIn:!0})},e.onLoginComplete=function(t){e.setState(Object.assign(e.state.user,{username:t.username})),e.setState(Object.assign(e.state.user,{category:t.category})),e.setState({isSignedIn:!0})},e.state={page:"Login",isSignedIn:!1,user:{username:"",category:""}},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{history:h.b,basename:"/yournews"},r.a.createElement("div",{className:"App"},r.a.createElement(g,{onLogOutClick:this.onLogOutClick,isSignedIn:this.state.isSignedIn}),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(R,Object.assign({isSignedIn:e.state.isSignedIn},t))}}),r.a.createElement(h.a,{exact:!0,path:"/Login",render:function(t){return r.a.createElement(f,Object.assign({onLoginStart:e.onLoginStart,onLoginComplete:e.onLoginComplete,isSignedIn:e.state.isSignedIn},t))}}),r.a.createElement(h.a,{exact:!0,path:"/Register",render:function(t){return r.a.createElement(b,Object.assign({onRegisterComplete:e.onRegisterComplete,isSignedIn:e.state.isSignedIn},t))}}),r.a.createElement(h.a,{path:"/MyNews",render:function(t){return r.a.createElement(I,Object.assign({isSignedIn:e.state.isSignedIn,userName:e.state.user.username,category:e.state.user.category},t))}}),r.a.createElement(h.a,{exact:!0,path:"/Weather",render:function(t){return r.a.createElement(L,Object.assign({isSignedIn:e.state.isSignedIn,userName:e.state.user.username},t))}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.7acd5510.chunk.js.map