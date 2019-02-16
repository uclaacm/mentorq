(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5471:function(e,t,a){e.exports=a(5684)},5510:function(e,t){},5682:function(e,t,a){},5684:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),c=a.n(i),l=a(24),o=a(5690),s=a(189),u=a.n(s)()(),m=a(41),d=a(190),h=a(191),p=a(192),g=a.n(p),v=a(193),b=a.n(v),f=a(194),k=a.n(f),E=a(20);var y=a(98);var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"SOCKET_INITIAL_STATE"===t.type?t.initialState:{user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mentors:[],current:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_TEST":return Object(E.a)({},e,{test:t.test});case"GET_ACTIVE_MENTORS":return Object(E.a)({},e,{mentors:t.mentors});case"SET_CURRENT_USER":return Object(E.a)({},e,{current:""===t.current?null:t.current});default:return e}}(e.user,t),socket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tickets:[],pendingTickets:0},t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{current:null};switch(t.type){case"socket/ticket/new":return Object(E.a)({},e,{pendingTickets:e.pendingTickets+1});case"SOCKET_TICKET_NEW":var n=Object(E.a)({},e,{tickets:Object(y.a)(e.tickets).concat([t.newTicket])});return e.pendingTickets&&a.current&&t.newTicket.requestorId===a.current._id&&n.pendingTickets--,n;case"SOCKET_TICKET_CLAIMED":var r=t.ticketId,i=t.mentorId,c=t.mentorName;return Object(E.a)({},e,{tickets:e.tickets.map(function(e){return e._id===r?Object(E.a)({},e,{mentorId:i,mentorName:c,isActive:!1}):e})});case"SOCKET_TICKET_UNCLAIMED":return Object(E.a)({},e,{tickets:e.tickets.map(function(e){return e._id===t.ticketId?Object(E.a)({},e,{mentorId:null,mentorName:null,isActive:!0}):e})});case"SOCKET_TICKET_RESOLVED":return Object(E.a)({},e,{tickets:e.tickets.filter(function(e){return e._id!==t.ticketId})});default:return e}}(e.socket,t,e.user)}},T={},S="Hack on the Hill 6";T.scheme="https",T.host="api.mentorq.hack.uclaacm.com",T.port=443,T.path="";var j=new URL("".concat(T.scheme,"://").concat(T.host,":").concat(T.port,"/").concat(T.path)),I=k()(String(j)),C=b()(I,"socket/");var w=Object(m.createStore)(O,{},Object(h.composeWithDevTools)(Object(m.applyMiddleware)(d.a),Object(m.applyMiddleware)(C),g()())),x=a(5689),N=a(5688),R=a(5685),A=a(5687),_=a(14),q=a(195),L=a.n(q),P=Object(_.createMuiTheme)({palette:{primary:L.a},typography:{useNextVariants:!0}});var M=function(e){var t=e.isSignedIn,a=e.isAdmin;return r.a.createElement(_.MuiThemeProvider,{theme:P},r.a.createElement("div",null,r.a.createElement(ae,{isSignedIn:t,isAdmin:a}),r.a.createElement(N.a,null,r.a.createElement(R.a,{exact:!0,path:"/",render:function(){return r.a.createElement(Qe,{isSignedIn:t})}}),r.a.createElement(R.a,{path:"/tickets",render:function(){return t?r.a.createElement(Ue,null):r.a.createElement(A.a,{to:"/"})}}),r.a.createElement(R.a,{render:function(){return r.a.createElement(A.a,{to:"/"})}})),r.a.createElement(nt,null)))};var W=Object(x.a)(Object(l.b)(function(e){var t=Boolean(e.user.current);return{isSignedIn:t,isAdmin:t&&e.user.current.isAdmin}})(M)),D=a(198),K=a(5686),U=a(86),Q=a.n(U),B=a(15),F=a.n(B),G=a(87),H=a.n(G),V=a(17),z=a.n(V),J=a(40),Y=a.n(J),Z=String(new URL("auth/google",j)),X=String(new URL("auth/logout",j)),$="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z";var ee=function(){return r.a.createElement(F.a,{component:"a",href:Z,color:"primary",variant:"contained",fullWidth:!0},r.a.createElement(Y.a,{style:{padding:"5px"}},r.a.createElement("path",{d:$})),"LOGIN WITH GOOGLE")};function te(e){var t=e.component,a=e.children,n=Object(D.a)(e,["component","children"]);return r.a.createElement(t,Object.assign({component:K.a,color:"inherit"},n),a)}te.defaultProps={component:F.a};var ae=Object(_.withStyles)(function(){return{grow:{flexGrow:1},toolbarLink:{textDecoration:"inherit"}}})(function(e){var t=e.isSignedIn,a=e.classes,n=[];return n.push(r.a.createElement(z.a,{key:"title",component:K.a,to:"/",variant:"h6",color:"inherit",className:a.toolbarLink},"MentorQ")),t?(n.push(r.a.createElement(te,{key:"tickets",to:"/tickets"},"Tickets")),n.push(r.a.createElement("div",{key:"grow",className:a.grow}),r.a.createElement(F.a,{key:"logout",href:X,color:"inherit"},"Logout"))):n.push(r.a.createElement("div",{key:"grow",className:a.grow}),r.a.createElement(F.a,{key:"login",href:Z,color:"inherit"},"Login")),r.a.createElement(Q.a,{position:"static"},r.a.createElement(H.a,null,n))}),ne=a(32),re=a.n(ne),ie=a(38),ce=a.n(ie),le=a(28),oe=a.n(le),se=a(1),ue=a.n(se),me=(ue.a.string.isRequired,ue.a.string.isRequired,ue.a.string.isRequired,ue.a.string,ue.a.string,ue.a.string.isRequired,ue.a.number.isRequired,ue.a.string.isRequired,ue.a.string.isRequired,ue.a.bool,ue.a.string.isRequired,ue.a.string.isRequired,ue.a.string.isRequired,ue.a.string,ue.a.bool.isRequired,ue.a.bool.isRequired,ue.a.arrayOf(ue.a.string.isRequired),a(197));var de=Object(_.withStyles)(function(e){return{headerContainer:{backgroundColor:e.palette.primary.main},headerText:{color:e.palette.common.white,fontWeight:"300",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},body:{fontSize:"1rem"}}})(function(e){var t=e.headerText,a=e.bodyText,n=e.classes;return r.a.createElement("div",null,r.a.createElement("div",{className:n.headerContainer},r.a.createElement(z.a,{className:n.headerText,component:"h3",variant:"h6"},t)),r.a.createElement(me.a,null,r.a.createElement(z.a,{className:n.body,component:"p"},a)))}),he=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZone:"America/Los_Angeles"});function pe(e){var t=e.time,a=new Date(t);return r.a.createElement("time",{dateTime:a.toISOString()},he.format(a))}var ge=Object(_.withStyles)(function(e){return{borderLine:{backgroundColor:e.palette.primary.main,height:10},header:{fontWeight:"bold"},buttons:{justifyContent:"center"}}})(function(e){var t=e.requestorName,a=e.mentorName,n=e.mentorId,i=e.contactInfo,c=e.timeFiled,l=e.description,o=e.tableNum,s=e.isActive,u=e.claimTicket,m=e.unclaimTicket,d=e.resolveTicket,h=e.isMentor,p=e.userId,g=e.classes,v=[],b="";return h&&s?v.push(r.a.createElement(F.a,{color:"secondary",variant:"contained",key:"claim",onClick:u},"CLAIM")):h&&!s?(v.push(r.a.createElement(F.a,{key:"reopen",onClick:m},"REOPEN TICKET")),n===p?(b="You claimed this ticket.",v.push(r.a.createElement(F.a,{color:"secondary",variant:"contained",key:"markascomplete",onClick:d},"MARK AS COMPLETE"))):b="".concat(a," claimed this ticket.")):b=!h&&s?"Mentors will be here shortly.":"".concat(a," is on their way."),r.a.createElement(re.a,null,r.a.createElement("div",{className:g.borderLine}),r.a.createElement(oe.a,null,r.a.createElement(z.a,{className:g.header,variant:"h4",component:"h2"},t),r.a.createElement(z.a,{gutterBottom:!0,color:"textSecondary"},r.a.createElement(pe,{time:c}))),r.a.createElement(de,{headerText:"I need help with\u2026",bodyText:l}),r.a.createElement(de,{headerText:"Find me at\u2026",bodyText:o}),r.a.createElement(de,{headerText:"Reach me at\u2026",bodyText:i}),""===b?null:r.a.createElement(oe.a,null,r.a.createElement(z.a,{color:"textSecondary",component:"p",variant:"h6"},b)),0===v.length?null:r.a.createElement(ce.a,{className:g.buttons},v))}),ve=a(33),be=a(49),fe=a(50),ke=a(52),Ee=a(51),ye=a(53),Oe=a(16),Te=a(29),Se=a.n(Te),je=a(30),Ie=a.n(je),Ce=a(39),we=a.n(Ce),xe=a(31),Ne=function(e){function t(e){var a;return Object(be.a)(this,t),(a=Object(ke.a)(this,Object(Ee.a)(t).call(this,e))).state={name:{value:"",error:!1},phone:{value:"",error:!1},email:{value:"",error:!1},skillsInput:{value:"",error:!1},skills:[{label:"Java"},{label:"Unity 3D"},{label:"React"}]},a.styles={chip:{margin:4},wrapper:{display:"flex",flexWrap:"wrap"},inputSkills:{position:"relative",display:"flex"},submitSkills:{position:"absolute",right:10,top:0,width:120,height:39}},a.handleTextChange=a.handleTextChange.bind(Object(Oe.a)(Object(Oe.a)(a))),a.saveProfile=a.saveProfile.bind(Object(Oe.a)(Object(Oe.a)(a))),a.deleteSkill=a.deleteSkill.bind(Object(Oe.a)(Object(Oe.a)(a))),a.addSkill=a.addSkill.bind(Object(Oe.a)(Object(Oe.a)(a))),a}return Object(ye.a)(t,e),Object(fe.a)(t,[{key:"handleTextChange",value:function(e){this.setState(Object(ve.a)({},e.target.id,{value:e.target.value,error:!e.target.value}))}},{key:"saveProfile",value:function(e){e.preventDefault();var t=this.state.name.value,a=this.state.email.value,n=this.state.phone.value;t||this.setState({name:Object(E.a)({},this.state.name,{error:!0})}),a||this.setState({email:Object(E.a)({},this.state.email,{error:!0})}),t&&a&&console.log("Info was submitted: name: ".concat(t," phone: ").concat(n," email: ").concat(a))}},{key:"deleteSkill",value:function(e){var t=this.state.skills,a=t.map(function(e){return e.key}).indexOf(e);t.splice(a,1),this.setState({skills:t})}},{key:"addSkill",value:function(e){e.preventDefault(),this.state.skillsInput.value&&this.setState({skills:Object(y.a)(this.state.skills).concat([{label:this.state.skillsInput.value}])}),this.setState({skillsInput:{value:"",error:!this.state.skillsInput.value}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(re.a,null,r.a.createElement(oe.a,null,r.a.createElement(z.a,{gutterBottom:!0,variant:"h5",component:"h1"},"Your Account"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(Se.a,{required:!0,id:"name",label:"Name",placeholder:"Joe Bruin",value:this.state.name.value,error:this.state.name.error,onChange:this.handleTextChange,fullWidth:!0,InputProps:{startAdornment:r.a.createElement(Ie.a,{position:"start"},r.a.createElement(xe.e,null))}}),r.a.createElement(Se.a,{required:!0,id:"email",label:"Email",placeholder:"joebruin@ucla.edu",value:this.state.email.value,error:this.state.email.error,onChange:this.handleTextChange,fullWidth:!0,InputProps:{startAdornment:r.a.createElement(Ie.a,{position:"start"},r.a.createElement(xe.b,null))}}),r.a.createElement(Se.a,{id:"phone",label:"Phone Number",placeholder:"(xxx)xxx-xxxx",value:this.state.phone.value,onChange:this.handleTextChange,fullWidth:!0,InputProps:{startAdornment:r.a.createElement(Ie.a,{position:"start"},r.a.createElement(xe.f,null))}}),r.a.createElement("div",{style:this.styles.inputSkills},r.a.createElement(Se.a,{id:"skillsInput",label:"Skills",placeholder:"node.js, ruby, python, machine learning, etc.",value:this.state.skillsInput.value,error:this.state.skillsInput.error,onChange:this.handleTextChange,fullWidth:!0,InputProps:{startAdornment:r.a.createElement(Ie.a,{position:"start"},r.a.createElement(xe.g,null))}}),r.a.createElement(F.a,{style:this.styles.submitSkills,onClick:this.addSkill},"Add Skill")),r.a.createElement("div",{style:this.styles.wrapper},this.state.skills.map(function(t,a){return r.a.createElement(we.a,{key:a,onDelete:function(){return e.deleteSkill(a)},style:e.styles.chip,label:t.label})})),r.a.createElement(F.a,{onClick:this.onSubmit,fullWidth:!0,style:{display:"none"}},"x"))),r.a.createElement(ce.a,null,r.a.createElement(F.a,{onClick:this.saveProfile,fullWidth:!0},"Save Profile"))))}}]),t}(n.Component),Re=a(132),Ae=a.n(Re);function _e(e){return function(e){return Ae.a.get(e,{withCredentials:!0}).then(function(e){return e.data}).catch(function(t){return Promise.reject("GET ".concat(e," failed: ").concat(t))})}(String(new URL(e,j)))}Object(l.b)(function(){return{}},{})(Ne);var qe=a(63),Le=a.n(qe),Pe=a(89),Me=a.n(Pe),We=a(88),De=a.n(We);var Ke=Object(_.withStyles)(function(e){return{layout:{width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit,padding:"".concat(2*e.spacing.unit,"px 0")},item:{width:"inherit"},fab:{position:"fixed",bottom:2*e.spacing.unit,right:2*e.spacing.unit}}})(function(e){var t=e.tickets,a=e.user,n=e.claimTicket,i=e.unclaimTicket,c=e.resolveTicket,l=e.classes,o=a.isMentor||a.isAdmin;return r.a.createElement("div",null,r.a.createElement("div",{className:l.layout},r.a.createElement(Le.a,{container:!0,spacing:16},t.map(function(e){return r.a.createElement(Le.a,{className:l.item,item:!0,key:e._id,sm:6,md:4,lg:3},r.a.createElement(ge,Object.assign({},e,{claimTicket:function(){return n(e._id)},unclaimTicket:function(){return i(e._id)},resolveTicket:function(){return c(e._id)},isMentor:o,userId:a._id})))}))),r.a.createElement(De.a,{title:"File Ticket"},r.a.createElement(F.a,{component:K.a,to:"/",variant:"fab",color:"secondary","aria-label":"Add",className:l.fab},r.a.createElement(Me.a,null))))});var Ue=Object(l.b)(function(e){return{tickets:(t=e.socket.tickets,a=e.user.current,a.isMentor&&!a.isAdmin?t.filter(function(e){return e.isActive||e.mentorId===a._id}):t),user:e.user.current};var t,a},{claimTicket:function(e){return function(t){return t({type:"socket/ticket/claim",ticketId:e})}},unclaimTicket:function(e){return function(t){return t({type:"socket/ticket/unclaim",ticketId:e})}},resolveTicket:function(e){return function(t){return t({type:"socket/ticket/resolve",ticketId:e})}}})(Ke);var Qe=Object(_.withStyles)(function(e){return{banner:{position:"absolute",top:0,width:"100vw",height:"100vh",zIndex:-1,background:'url("/banner-hoth.png"), #37293b',backgroundPosition:"center bottom",backgroundSize:"contain",backgroundRepeat:"no-repeat"},container:Object(ve.a)({padding:"".concat(2*e.spacing.unit,"px 0"),width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(800+3*e.spacing.unit*2),{width:800,marginLeft:"auto",marginRight:"auto"})}})(function(e){var t=e.isSignedIn,a=e.classes;return r.a.createElement("div",null,r.a.createElement("div",{className:a.banner}),r.a.createElement("div",null,t?r.a.createElement("div",{className:a.container},r.a.createElement(Ge,null),r.a.createElement(Je,null)):r.a.createElement(Xe,null)))}),Be=function(e){function t(e){var a;return Object(be.a)(this,t),(a=Object(ke.a)(this,Object(Ee.a)(t).call(this,e))).state={description:{value:"",error:!1},location:{value:"",error:!1},contact:{value:"",error:!1}},a.onSubmit=a.onSubmit.bind(Object(Oe.a)(Object(Oe.a)(a))),a.handleChange=a.handleChange.bind(Object(Oe.a)(Object(Oe.a)(a))),a}return Object(ye.a)(t,e),Object(fe.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(ve.a)({},e.target.id,{value:e.target.value,error:!e.target.value}))}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state.description.value,a=this.state.location.value,n=this.state.contact.value;t||this.setState({description:Object(E.a)({},this.state.description,{error:!0})}),a||this.setState({location:Object(E.a)({},this.state.location,{error:!0})}),n||this.setState({contact:Object(E.a)({},this.state.contact,{error:!0})}),this.state.description.value&&this.state.location.value&&this.state.contact.value&&(this.props.submitTicket({description:this.state.description.value,tableNum:this.state.location.value,contactInfo:this.state.contact.value}),u.push("tickets"))}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.container},r.a.createElement(re.a,null,r.a.createElement(oe.a,null,r.a.createElement(z.a,{gutterBottom:!0,variant:"h5",component:"h2"},"How can we help you?"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:e.formField},r.a.createElement(Se.a,{required:!0,id:"description",label:"I need help with\u2026",placeholder:"Describe your problem",value:this.state.description.value,error:this.state.description.error,onChange:this.handleChange,fullWidth:!0,InputProps:{startAdornment:r.a.createElement(Ie.a,{position:"start"},r.a.createElement(xe.a,null))}})),r.a.createElement("div",{className:e.formField},r.a.createElement(Se.a,{required:!0,id:"location",label:"You can find me at\u2026",placeholder:"where are you? table number?",value:this.state.location.value,error:this.state.location.error,onChange:this.handleChange,fullWidth:!0,InputProps:{startAdornment:r.a.createElement(Ie.a,{position:"start"},r.a.createElement(xe.d,null))}})),r.a.createElement("div",{className:e.formField},r.a.createElement(Se.a,{required:!0,id:"contact",label:"You can contact me through\u2026",placeholder:"cell phone #",value:this.state.contact.value,error:this.state.contact.error,onChange:this.handleChange,fullWidth:!0,InputProps:{startAdornment:r.a.createElement(Ie.a,{position:"start"},r.a.createElement(xe.f,null))}})))),r.a.createElement(ce.a,null,r.a.createElement(F.a,{onClick:this.onSubmit,fullWidth:!0,color:"primary",variant:"contained"},"Submit"))))}}]),t}(n.Component),Fe=Object(_.withStyles)(function(e){return{container:{padding:"".concat(2*e.spacing.unit,"px 0")},formField:{marginBottom:"20px"}}})(Be),Ge=Object(l.b)(null,{submitTicket:function(e){return function(t){return t({type:"socket/ticket/new",ticket:e})}}})(Fe),He=!0;function Ve(e){var t=e.mentors,a=e.getActiveMentors,n=e.classes;He&&(a(),He=!1);var i=t.length;return r.a.createElement(re.a,null,r.a.createElement(oe.a,null,r.a.createElement(z.a,{component:"p",className:n.text},r.a.createElement(xe.c,{className:n.icon})," ",r.a.createElement("strong",null,i),"".concat(i>1?" mentors":" mentor"," online."))))}Ve.defaultProps={mentors:[]};var ze=Object(_.withStyles)(function(){return{icon:{color:"#4CAF50",display:"inline-flex",verticalAlign:"top"},text:{fontSize:16}}})(Ve),Je=Object(l.b)(function(e){return{mentors:e.user.mentors}},{getActiveMentors:function(){return function(e,t){_e("user/mentors/active").then(function(t){return e({type:"GET_ACTIVE_MENTORS",mentors:t})})}}})(ze);a(90),a(92),a(22),a(91),a(64);var Ye=a(37),Ze=a.n(Ye);var Xe=Object(_.withStyles)(function(e){return{container:Object(ve.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),grid:{marginTop:4*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},greet:{marginBottom:3*e.spacing.unit},welcome:{marginBottom:3*e.spacing.unit},eventName:{color:e.palette.primary.main}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.container},r.a.createElement(Ze.a,null,r.a.createElement("div",{className:t.grid},r.a.createElement("div",{className:t.greet},r.a.createElement(z.a,{component:"h2",variant:"h4",className:t.welcome},"Welcome to ",r.a.createElement("span",{className:t.eventName},S,".")),r.a.createElement(z.a,{component:"p",variant:"h6"},"Hi! To get help from mentors, please sign in with your Google account below.")),r.a.createElement(ee,null))))}),$e=a(93),et=a.n($e),tt=function(e){function t(e){var a;return Object(be.a)(this,t),(a=Object(ke.a)(this,Object(Ee.a)(t).call(this,e))).state={open:!1,messageInfo:{message:"",key:0}},a.queue=[],a.processQueue=a.processQueue.bind(Object(Oe.a)(Object(Oe.a)(a))),a.addToQueue=a.addToQueue.bind(Object(Oe.a)(Object(Oe.a)(a))),a.handleClose=a.handleClose.bind(Object(Oe.a)(Object(Oe.a)(a))),a}return Object(ye.a)(t,e),Object(fe.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.trigger(this.props,e,this.addToQueue),this.state.open||this.processQueue()}},{key:"addToQueue",value:function(e){this.queue.push({message:e,key:Date.now()}),"hidden"===document.visibilityState&&"function"===typeof Notification&&new Notification(e)}},{key:"processQueue",value:function(){this.queue.length>0&&this.setState({open:!0,messageInfo:this.queue.shift()})}},{key:"handleClose",value:function(e,t){"clickaway"!==t&&this.setState({open:!1})}},{key:"render",value:function(){return r.a.createElement(et.a,{key:this.state.messageInfo.key,anchorOrigin:{horizontal:"left",vertical:"bottom"},open:this.state.open,autoHideDuration:3e3,onClose:this.handleClose,onExited:this.processQueue,message:this.state.messageInfo.message})}}]),t}(n.Component),at=function(e,t,a){if(e.pendingTickets<t.pendingTickets)for(var n=e.pendingTickets;n<t.pendingTickets;n++)a("Request submitted.");var r=new Set,i=!0,c=!1,l=void 0;try{for(var o,s=t.tickets[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var u=o.value;u.requestorId!==t.userId||u.mentorId||r.add(u._id)}}catch(b){c=!0,l=b}finally{try{i||null==s.return||s.return()}finally{if(c)throw l}}var m=!0,d=!1,h=void 0;try{for(var p,g=e.tickets[Symbol.iterator]();!(m=(p=g.next()).done);m=!0){var v=p.value;if(v.mentorId&&r.has(v._id)){a("".concat(v.mentorName," is on their way!"));break}}}catch(b){d=!0,h=b}finally{try{m||null==g.return||g.return()}finally{if(d)throw h}}},nt=Object(l.b)(function(e){return{pendingTickets:e.socket.pendingTickets,tickets:e.socket.tickets,userId:e.user.current&&e.user.current._id,trigger:at}})(tt);a(5682);"function"===typeof Notification&&Notification.requestPermission();var rt=r.a.createElement(l.a,{store:w},r.a.createElement(o.a,{history:u},r.a.createElement(W,null)));c.a.render(rt,document.getElementById("root"))}},[[5471,2,1]]]);
//# sourceMappingURL=main.9949df25.chunk.js.map