(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(e,t,n){e.exports=n(86)},65:function(e,t,n){},66:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"incrementTimer",function(){return R}),n.d(a,"setTiming",function(){return P}),n.d(a,"setPaused",function(){return D}),n.d(a,"setEnd",function(){return A}),n.d(a,"addProject",function(){return C}),n.d(a,"removeProject",function(){return _}),n.d(a,"setSessionDate",function(){return L}),n.d(a,"setSessionDesc",function(){return k}),n.d(a,"setSessionTotal",function(){return J}),n.d(a,"addSessionLog",function(){return M}),n.d(a,"popSessionLog",function(){return B}),n.d(a,"clearSessionLogs",function(){return x});var r=n(0),o=n.n(r),c=n(13),i=n.n(c),s=n(10),l=n(19),u=n(49),m={seconds:0},d={timing:!1,paused:!1,end:!1},E=n(24),f={SESSIONS:"sessions",PROJECTS:"projects"},S={store:{newSession:function(e){var t=JSON.parse(window.localStorage.getItem(f.SESSIONS))||[];t.push(e),window.localStorage.setItem(f.SESSIONS,JSON.stringify(t))},newProject:function(e,t,n){var a=JSON.parse(window.localStorage.getItem(f.PROJECTS))||[];a.push({id:e,title:t,desc:n}),window.localStorage.setItem(f.PROJECTS,JSON.stringify(a))}},get:{projects:function(){return JSON.parse(window.localStorage.getItem(f.PROJECTS))||[]},projectById:function(e){var t=JSON.parse(window.localStorage.getItem(f.PROJECTS))||[],n=!0,a=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){var i=o.value;if(Number(i.id)===Number(e))return i}}catch(s){a=!0,r=s}finally{try{n||null==c.return||c.return()}finally{if(a)throw r}}return null},newProjectId:function(){return(new Date).getTime()},sessions:function(){return JSON.parse(window.localStorage.getItem(f.SESSIONS))},sessionsByProjectId:function(e){return p(e)},sessionsByProjectIdAsRows:function(e,t){return g(p(e),t)},sessionsAsRows:function(e){return g(JSON.parse(window.localStorage.getItem(f.SESSIONS))||[],e)},arrayAsRows:function(e,t){return g(e,t)}},delete:{projectById:function(e){var t=(JSON.parse(window.localStorage.getItem(f.PROJECTS))||[]).filter(function(t){return Number(t.id)!==Number(e)});window.localStorage.setItem(f.PROJECTS,JSON.stringify(t));var n=(JSON.parse(window.localStorage.getItem(f.SESSIONS))||[]).filter(function(t){return Number(e)!==Number(t.projectId)});window.localStorage.setItem(f.SESSIONS,JSON.stringify(n))}}};function p(e){var t=JSON.parse(window.localStorage.getItem(f.SESSIONS))||[],n=[],a=!0,r=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){var s=c.value;Number(s.projectId)===Number(e)&&n.push(s)}}catch(l){r=!0,o=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}function g(e,t){if(0===e.length)return[];var n=[],a=[];if(t>=e.length?a=e:e.forEach(function(e,r){a.push(e),(r+1)%t===0&&(n.push(a),a=[])}),a.length<t)for(var r=t-a.length,o=0;o<r;o++)a.push({});return n.push(a),n}var b={projects:S.get.projects()},N={date:(new Date).toLocaleDateString(),desc:"",total:"",logs:[]},O=Object(l.c)({timer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;switch((arguments.length>1?arguments[1]:void 0).type){case"INCREMENT_TIMER":return Object.assign({},e,{seconds:e.seconds+1});default:return e}},timerState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TIMING":return Object.assign({},e,{timing:t.payload});case"SET_PAUSED":return Object.assign({},e,{paused:t.payload});case"SET_END":return Object.assign({},e,{end:t.payload});default:return e}},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROJECT":var n=Object(E.a)(e.projects);return n.push(t.payload),Object.assign({},e,{projects:n});case"REMOVE_PROJECT":var a=Object(E.a)(e.projects).filter(function(e){return Number(e.id)!==Number(t.payload)});return Object.assign({},e,{projects:a});default:return e}},session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SESSION_DATE":return Object.assign({},e,{date:t.payload});case"SET_SESSION_DESC":return Object.assign({},e,{desc:t.payload});case"SET_SESSION_TOTAL":return Object.assign({},e,{total:t.payload});case"ADD_SESSION_LOG":var n=Object(E.a)(e.logs);return n.push(t.payload),Object.assign({},e,{logs:n});case"POP_SESSION_LOG":var a=Object(E.a)(e.logs);return a.pop(),Object.assign({},e,{logs:a});case"CLEAR_SESSION_LOGS":return Object.assign({},e,{logs:[]});default:return e}}}),y=(n(65),n(66),n(21)),v=n(17),T=n(14),h=n(88),j=n(89),w=n(52),I=n(92),R=function(){return function(e){e({type:"INCREMENT_TIMER"})}},P=function(e){return function(t){t({type:"SET_TIMING",payload:e})}},D=function(e){return function(t){t({type:"SET_PAUSED",payload:e})}},A=function(e){return function(t){t({type:"SET_END",payload:e})}},C=function(e){return function(t){t({type:"ADD_PROJECT",payload:e})}},_=function(e){return function(t){t({type:"REMOVE_PROJECT",payload:e})}},L=function(){return function(e){e({type:"SET_SESSION_DATE",payload:(new Date).toLocaleDateString()})}},k=function(e){return function(t){t({type:"SET_SESSION_DESC",payload:e})}},J=function(e){return function(t){t({type:"SET_SESSION_TOTAL",payload:e})}},M=function(e){return function(t){t({type:"ADD_SESSION_LOG",payload:e})}},B=function(){return function(e){e({type:"POP_SESSION_LOG"})}},x=function(){return function(e){e({type:"CLEAR_SESSION_LOGS"})}},G=n(93),V="x",U="icon close";var F=function(e){return o.a.createElement("span",{className:U,onClick:e.onClick},V)},H="link";var Y=function(e){return o.a.createElement(G.a,{bg:e.bg,text:e.bg?"white":"default"},o.a.createElement(G.a.Header,null,o.a.createElement(y.b,{to:e.to,className:H},e.header),o.a.createElement(F,{onClick:function(){return e.handler(e.id)}})),o.a.createElement(G.a.Body,null,o.a.createElement(G.a.Text,null,e.text)),e.footer?o.a.createElement(G.a.Footer,null,e.footer):null)},z=n(90),W=n(91);function q(e){return o.a.createElement(W.a,null,o.a.createElement(W.a.Group,null,o.a.createElement(W.a.Control,{placeholder:e.placeholder,ref:e.inputRef})))}function K(e){return o.a.createElement(W.a,null,o.a.createElement(W.a.Group,null,o.a.createElement(W.a.Control,{as:"textarea",placeholder:e.placeholder,rows:e.rows,ref:e.inputRef})))}var Q="Project Information",X={CREATE:"Create",CANCEL:"Cancel"},Z={PRIMARY:"primary",SECONDARY:"secondary"},$="4",ee="What is this project?",te="Project Title";var ne=function(e){var t=o.a.createRef(),n=o.a.createRef();return o.a.createElement(z.a,{show:e.isVisible,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},o.a.createElement(z.a.Header,null,o.a.createElement(z.a.Title,null,Q)),o.a.createElement(z.a.Body,null,o.a.createElement(q,{placeholder:te,inputRef:function(e){t=e}}),o.a.createElement(K,{rows:$,placeholder:ee,inputRef:function(e){n=e}})),o.a.createElement(z.a.Footer,null,o.a.createElement(I.a,{variant:Z.SECONDARY,onClick:function(){return e.setGetInput(!1)}},X.CANCEL),o.a.createElement(I.a,{variant:Z.PRIMARY,onClick:function(){return e.createProject(t.value,n.value)}},X.CREATE)))},ae=!0,re="title-margin",oe={FLOAT:"float right row-padding",PADDING:"row-padding"},ce="primary",ie=4,se="Projects",le="No projects to display",ue="success",me={BOOL:!1},de=function(e){return"/projects/".concat(e)};var Ee=Object(s.b)(function(e){return{projects:e.projects}},a)(function(e){var t=Object(r.useState)(me.BOOL),n=Object(T.a)(t,2),a=n[0],c=n[1],i=S.get.arrayAsRows(e.projects.projects,ie);return o.a.createElement(h.a,{fluid:ae},o.a.createElement("h1",{className:re},se),i.length?i.map(function(t,n){return o.a.createElement(j.a,{key:n,className:oe.PADDING},t.map(function(t,n){return t.id?o.a.createElement(w.a,{key:n},o.a.createElement(Y,{key:n,bg:ue,id:t.id,header:t.title,text:t.desc,to:de(t.id),handler:function(t){!function(t){console.log("Deleting Project: "+t),S.delete.projectById(t),e.removeProject(t)}(t)}})):o.a.createElement(w.a,{key:n})}))}):o.a.createElement("p",{className:re},le),o.a.createElement(j.a,{className:oe.FLOAT},o.a.createElement(w.a,null,o.a.createElement(I.a,{variant:ce,onClick:function(){c(!0)}}," + New Project "))),o.a.createElement(ne,{isVisible:a,setGetInput:c,createProject:function(t,n){var a=S.get.newProjectId();e.addProject({id:a,title:t,desc:n}),S.store.newProject(a,t,n),t&&c(!1)}}))}),fe="link session";var Se=function(e){return o.a.createElement(G.a,{bg:e.bg,text:e.bg?"white":"default"},o.a.createElement(G.a.Header,{onClick:function(){e.click(e.index)},className:fe},e.header),o.a.createElement(G.a.Body,null,o.a.createElement(G.a.Text,null,e.text)),e.footer?o.a.createElement(G.a.Footer,null,e.footer):null)},pe="text-center",ge="white";var be=function(e){return o.a.createElement(G.a,{bg:e.bg,text:ge,className:pe},o.a.createElement(G.a.Header,null,e.header),o.a.createElement(G.a.Body,null,e.body))},Ne={session:function(e,t,n){return o.a.createElement(be,{key:"".concat(e,"_").concat(t,"_").concat((new Date).getTime()),bg:n,header:e,body:t})}};var Oe=function(e){return o.a.createElement(G.a,{className:e.class},o.a.createElement(G.a.Header,null,o.a.createElement("h5",null,e.header)))},ye="3",ve="text-center",Te="remove-padding",he="Logs";var je=Object(s.b)(function(e){return{session:e.session}})(function(e){return o.a.createElement(w.a,{lg:ye,className:Te},o.a.createElement(Oe,{class:ve,header:he}),e.session.logs)}),we="Session Summary",Ie="Close",Re="secondary";var Pe=Object(s.b)(null,a)(function(e){return Object(r.useEffect)(function(){if(e.isVisible){var t=!0,n=!1,a=void 0;try{for(var r,o=e.session.logs[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var c=r.value;e.addSessionLog(Ne.session(c.props.header,c.props.body,c.props.bg))}}catch(i){n=!0,a=i}finally{try{t||null==o.return||o.return()}finally{if(n)throw a}}}}),o.a.createElement(z.a,{show:e.isVisible,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},o.a.createElement(z.a.Header,null,o.a.createElement(z.a.Title,null,we)),o.a.createElement(z.a.Body,null,o.a.createElement("p",null,e.session.date),o.a.createElement("p",null,e.session.desc),o.a.createElement("p",null,e.session.total),o.a.createElement(je,null)),o.a.createElement(z.a.Footer,null,o.a.createElement(I.a,{variant:Re,onClick:function(){return e.clearSessionLogs(),void e.close()}},Ie)))}),De={BOOL:!1,OBJ:{}},Ae=!0,Ce="title-margin",_e={FLOAT:"float right row-padding",PADDING:"row-padding"},Le={SECONDARY:"secondary",PRIMARY:"primary"},ke="btn-margin left",Je=4,Me="No sessions to display",Be="success",xe="/",Ge=function(e){return"/projects/".concat(e,"/session")};var Ve=Object(v.f)(function(e){var t=Object(r.useState)(De.BOOL),n=Object(T.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(De.OBJ),s=Object(T.a)(i,2),l=s[0],u=s[1],m=S.get.projectById(e.match.params.id),d=S.get.sessionsByProjectIdAsRows(m.id,Je),E=S.get.sessionsByProjectId(m.id),f=function(t){e.history.push("".concat(t))};return o.a.createElement(h.a,{fluid:Ae},o.a.createElement("h1",{className:Ce},m.title),d.length?d.map(function(e,t){return o.a.createElement(j.a,{key:t,className:_e.PADDING},e.map(function(e,t){return e.date?o.a.createElement(w.a,{key:t},o.a.createElement(Se,{key:t,bg:Be,header:e.date,index:t,click:function(e){u(E[e]),c(!0)},text:e.desc,footer:"Total: ".concat(e.total)})):o.a.createElement(w.a,{key:t})}))}):o.a.createElement("p",{className:Ce},Me),o.a.createElement(j.a,{className:_e.FLOAT},o.a.createElement(w.a,null,o.a.createElement(I.a,{onClick:function(){return f(Ge(m.id))},variant:Le.PRIMARY}," + New Session "),o.a.createElement(I.a,{onClick:function(){return f(xe)},variant:Le.SECONDARY,className:ke}," Back "))),o.a.createElement(Pe,{isVisible:a,session:l,close:function(){c(!1)}}))}),Ue={CURRENT_DATE:function(){return new Date}},Fe="display-1";var He=function(e){var t=Object(r.useState)(Ue.CURRENT_DATE()),n=Object(T.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)(function(){var e=setInterval(function(){c(new Date)},1e3);return function(){return clearInterval(e)}}),o.a.createElement(G.a.Title,{className:Fe},e.isVisible?a.toLocaleTimeString():null)},Ye={convertToTimeArrayDays:function(e){var t=[],n=Math.floor(e/86400),a=Math.floor(e/3600%24),r=Math.floor(e/60%60);return e=Math.floor(e%60),n<10&&(n="0".concat(n)),a<10&&(a="0".concat(a)),r<10&&(r="0".concat(r)),e<10&&(e="0".concat(e)),t.push(n),t.push(a),t.push(r),t.push(e),t},convertToTimeArrayHours:function(e){var t=[],n=Math.floor(e/3600),a=Math.floor(e/60%60);return e=Math.floor(e%60),n<10&&(n="0".concat(n)),a<10&&(a="0".concat(a)),e<10&&(e="0".concat(e)),t.push(n),t.push(a),t.push(e),t},generateTotalSessionTimeMessage:function(e){var t="";return 4===e.length?(t+=Number(e[0])>0?Number(e[0])>1?"".concat(Number(e[0])," days "):"".concat(Number(e[0])," day "):"",t+=Number(e[1])>0?Number(e[1])>1?"".concat(Number(e[1])," hours "):"".concat(Number(e[1])," hour "):"",t+=Number(e[2])>0?Number(e[2])>1?"".concat(Number(e[2])," minutes "):"".concat(Number(e[2])," minute "):"",t+=Number(e[3])>0?Number(e[3])>1?"".concat(Number(e[3])," seconds "):"".concat(Number(e[3])," second "):""):(t+=Number(e[0])>0?Number(e[0])>1?"".concat(Number(e[0])," hours "):"".concat(Number(e[0])," hour "):"",t+=Number(e[1])>0?Number(e[1])>1?"".concat(Number(e[1])," minutes "):"".concat(Number(e[1])," minute "):"",t+=Number(e[2])>0?Number(e[2])>1?"".concat(Number(e[2])," seconds "):"".concat(Number(e[2])," second "):""),t}},ze={TIMER:["00","00","00","00"]},We="display-1";var qe=Object(s.b)(function(e){return{timer:e.timer}},a)(function(e){var t=Object(r.useState)(ze.TIMER),n=Object(T.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)(function(){var t=null;return e.isVisible&&(t=setInterval(function(){e.isPaused||(e.incrementTimer(),c(Ye.convertToTimeArrayHours(e.timer.seconds+1)))},1e3)),function(){return clearInterval(t)}}),o.a.createElement(G.a.Title,{className:We},e.isVisible?"".concat(a[0],":").concat(a[1],":").concat(a[2]):null)}),Ke="primary",Qe="warning",Xe="info",Ze=function(e,t){return e?t?Xe:Qe:Ke},$e="Start Session",et="Pause Session",tt="Resume Session",nt=function(e,t){return e?t?tt:et:$e},at={END:"End Session"},rt={END:"secondary"};var ot=function(e){return o.a.createElement("div",null,o.a.createElement(I.a,{block:!0,variant:Ze(e.isTiming,e.isPaused),onClick:function(){e.isTiming?e.isTiming&&!e.isPaused?e.pauseTimer():e.isTiming&&e.isPaused&&e.resumeTimer():e.startTimer()}},nt(e.isTiming,e.isPaused)),e.isTiming?o.a.createElement(I.a,{block:!0,variant:rt.END,onClick:function(){e.endSession()}},at.END):null)},ct="Session Time",it="< 1 second",st="center-text",lt="primary",ut="secondary";var mt=Object(s.b)(function(e){return{timer:e.timer}},a)(function(e){var t=Ye.generateTotalSessionTimeMessage(Ye.convertToTimeArrayDays(e.timer.seconds));return o.a.createElement(z.a,{show:e.isVisible,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},o.a.createElement(z.a.Header,null,o.a.createElement(z.a.Title,null,ct)),o.a.createElement(z.a.Body,null,o.a.createElement("h1",{className:st},t||it)),o.a.createElement(z.a.Footer,null,o.a.createElement(I.a,{variant:ut,onClick:function(){e.continueSession()}}," Continue Session "),o.a.createElement(I.a,{variant:lt,onClick:function(){e.showSessionDesc(!0),e.setSessionTotal(t)}}," Done ")))}),dt="Session Description",Et="Finished",ft="primary",St="4",pt="What did you do during this session?";var gt=function(e){var t=o.a.createRef();return o.a.createElement(z.a,{show:e.isVisible,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},o.a.createElement(z.a.Header,null,o.a.createElement(z.a.Title,null,dt)),o.a.createElement(z.a.Body,null,o.a.createElement(K,{rows:St,placeholder:pt,inputRef:function(e){t=e}})),o.a.createElement(z.a.Footer,null,o.a.createElement(I.a,{variant:ft,onClick:function(){return e.finish(t.value)}},Et)))},bt={EMPTY_ARRAY:[],STRING:"",BOOL:!1},Nt="text-center",Ot="remove-padding",yt={START:"Start Time",PAUSE:"Paused At",RESUME:"Resumed At",END:"End Time"},vt={START:"primary",PAUSE:"warning",RESUME:"info",END:"secondary"},Tt=function(){return(new Date).toLocaleTimeString()},ht=function(e){return"/projects/".concat(e)};var jt=Object(s.b)(function(e){return{timerState:e.timerState,session:e.session}},a)(Object(v.f)(function(e){var t=Object(r.useState)(bt.BOOL),n=Object(T.a)(t,2),a=n[0],c=n[1];return o.a.createElement(w.a,{className:Ot},o.a.createElement(G.a,{className:Nt},o.a.createElement(G.a.Body,null,o.a.createElement(He,{isVisible:!e.timerState.timing}),o.a.createElement(qe,{isVisible:e.timerState.timing,isPaused:e.timerState.paused}),o.a.createElement(ot,{isTiming:e.timerState.timing,isPaused:e.timerState.paused,startTimer:function(){e.setTiming(!0),e.addSessionLog(Ne.session(yt.START,Tt(),vt.START))},pauseTimer:function(){e.setPaused(!0),e.addSessionLog(Ne.session(yt.PAUSE,Tt(),vt.PAUSE))},resumeTimer:function(){e.setPaused(!1),e.addSessionLog(Ne.session(yt.RESUME,Tt(),vt.RESUME))},endSession:function(){e.setPaused(!0),e.setEnd(!0),e.addSessionLog(Ne.session(yt.END,Tt(),vt.END))}}),o.a.createElement(mt,{isVisible:e.timerState.end&&!a,showSessionDesc:c,continueSession:function(){e.setEnd(!1),e.setPaused(!1),e.popSessionLog()}}),o.a.createElement(gt,{isVisible:e.timerState.end&&a,finish:function(t){!function(t){e.setSessionDate(),e.setSessionDesc(t),S.store.newSession({date:e.session.date,desc:t,total:e.session.total,logs:e.session.logs,projectId:e.projectId}),e.history.push(ht(e.projectId))}(t)}}))))})),wt=!0,It="remove-padding";var Rt=function(e){return o.a.createElement(h.a,{fluid:wt,className:It},o.a.createElement(j.a,{className:It},o.a.createElement(jt,{projectId:e.match.params.id}),o.a.createElement(je,null)))},Pt="/",Dt="/projects/",At="/projects/:id",Ct=At+"/session/";var _t=function(){return o.a.createElement(y.a,{basename:"/primer"},o.a.createElement(v.c,null,o.a.createElement(v.a,{exact:!0,path:Pt,component:Ee}),o.a.createElement(v.a,{exact:!0,path:Dt,component:Ee}),o.a.createElement(v.a,{exact:!0,path:At,component:Ve}),o.a.createElement(v.a,{exact:!0,path:Ct,component:Rt}),o.a.createElement(v.a,{component:Ee})))},Lt=Object(l.d)(O,{},Object(l.a)(u.a));i.a.render(o.a.createElement(s.a,{store:Lt},o.a.createElement(_t,null)),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.a96cfaf9.chunk.js.map