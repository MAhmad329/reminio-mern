(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{123:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAAAhCAYAAAC1FBtTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU8SURBVHgB7Zzvdds4DMDhvn4/b1BlgroTVNnAN0GUCRJPEHWCNBPYmaC5CeybINlA6gRJJ0AJCY5pCqRI2YmliL/3+OryLySSIAhSmUDkIBAxVf/MVChVeJpMJiUMiKHLH4GqE6cqPOI+hQozGABKzqRv8n/mmeFDGWfNHnOoNYpOosKtCufQfzLom/wYDs2mjGYWjBj1/CvbC4IB4JC/gBPxCcKh2bRUYa0Ev4bx8mSJ38AwsMlfwqnAw7mBEYK1zfjL1Co4kBWD5V/3Sf4JHmdZWSh78ieMEKwN/gRqjUJ29QsMiD7JbxuMkgE7hdpovxDS6AHOhtYRkZ4hrbst+TPLcj1m+zFyBETNqDTcxFVIFVlBU0P+p4rNwRO2TWiJmHIUaVVaJp7gQMgeglqLU517jlxOe12aVNoGegzLm8LuPfVeZkLo3xLqvnhxFQrSjFxmLhRrdQmw0XyjwjPaKVS44k5oq8/kC5fVobYuti+I6zfbmwW24yKHAITyhfaulpY2CgzYOOIbym+049O/lWvQVkEDj0ZToVjRUmaGzYHggvImLXWazC110cuZor19ip8GtOMihwBssqDfu1p2bONo8mtt0Jh4DminQKN/u/gZbVjVL9aaZw310ugL5X3EsOOpC0s8DbRbsLdP8X2yea/A712R/X4LJ0bJQCYR9W/raqaRQO2rTrYRXQej1Om/pYzc2C9oCkqD90GFHxwehOJUhnx5vg9JA5c8Ad+4Tp1MhTsVzlS4hObk+Q79IdN+v4Bjoiuu8YS+QW6764RIoD5AqfgMgXDj0kblwVJkDs1ZXqpwbp51c92mBqXfpLVyaGejGfdPqj7SMLrhv9V+K9a4V0Y7Nn5Y4r+C/C4OYcqhmqjbDR2/mxxkRZCB+/28pfxkuyZCPE38n9s+xvoORAZN+Wl5z1S+lbfNiLXxf2OxCwrb7MTmzRBEx0xG2R5dW/Ka5EZ6YauD8prPAIGg7ObKA+uQWDryr9Hz/byT/EVIHdg8tXqV/5OlQAMVTZ2Vg2wX3Ek3enDnRtFx3pljzWamp+i/VH8E7h1pkpZL4ATg7vRG50X1Ye4oJslfjZFjbGDuHUeBiRD3G9qRfI3/wHhw+VpL6A+SgnD6idnsMG1g8h58OXQwkkbMHOmSsM/Qzh8YMSM4VhWfL3gDw9DoXnQ8CSBfYAo7Qz0SqbANxkvtt7nrJKYHHEnFQRgREQdjtc3WwPo4TR9AtLNOh3BGGhkOvss0+YzMs1D6/wbC+R/8fIZ7qIHvs/GJDBjfwUi7Zd2BTKQdtWMRNWpEwms3zbs7yffVdnPko+8KI02mHfP8CXHtSMd9Kbo/dS2FuBlEPgqlEJeg+wZUAsI9BVJ43oORl9aNkHTjKFNdmDWiZ64BjLs7h3p4hEjv4JO0hgMb3CumlFY5ykP9jHSUkxpxbbbjvSDAUpWRLkpsHyQx8q/gRLSc1X4V4r47yqze+w8hvIP81L+m6++a+/JOu+iRcj7pYkZtAlrOoa2gfPHBdbDvuii6xvo2MwU6QLddzkwsdZvkRnqht2WkeV2UwOOS+tQP7vefCEUKR/63lp/kCblUa/Iqe5fjQGkjQ7c/RDuBl+p/Qd7MpFBfK6JAM0aqYxH/rEp/4b5ZQDdK0L5E7TIYVyAPrGtbAVbV5xB2yE9tXI71e+whwYckpHDKgGKUd89UCx6MrOnuhCTnR1TagFyAW2iqn2zTM/MkKNJfVF+Rt4X6l1bO0pGV0qh/v5krnvOT1LcEd3fh9AG8iUvyx4D7l/o24ajGZ8MmfwFc/I/Xj8YVUAAAAABJRU5ErkJggg=="},142:function(e,t,a){e.exports=a(199)},198:function(e,t,a){},199:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(9),r=a.n(l),s=a(11),i=a(57),c=a(132);var m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null,errors:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify({...null===t||void 0===t?void 0:t.data})),{...e,authData:t.data,loading:!1,errors:null};case"LOGOUT":return localStorage.clear(),{...e,authData:null,loading:!1,errors:null};case"AUTH_ERROR":return{...e,errors:t.data,loading:!1};default:return e}};const d=Object(i.b)({posts:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,posts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return{...e,isLoading:!0};case"END_LOADING":return{...e,isLoading:!1};case"FETCH_ALL":return{...e,posts:t.payload.data,currentPage:t.payload.currentPage,numberOfPages:t.payload.numberOfPages};case"FETCH_BY_SEARCH":case"FETCH_BY_CREATOR":return{...e,posts:t.payload.data};case"FETCH_POST":return{...e,post:t.payload.post};case"LIKE":return{...e,posts:e.posts.map(e=>e._id===t.payload._id?t.payload:e)};case"COMMENT":return{...e,posts:e.posts.map(e=>e._id===+t.payload._id?t.payload:e)};case"CREATE":return{...e,posts:[...e.posts,t.payload]};case"UPDATE":return{...e,posts:e.posts.map(e=>e._id===t.payload._id?t.payload:e)};case"DELETE":return{...e,posts:e.posts.filter(e=>e._id!==t.payload)};default:return e}},auth:m});var p=a(234),u=a(20),g=a(14),h=a(134),b=a(224),E=a(202),v=a(225),y=a(69),f=a.n(y),x=a(117);const C=a.n(x).a.create({baseURL:"http://localhost:3001"});C.interceptors.request.use(e=>(localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e));const O=e=>async t=>{try{t({type:"START_LOADING"});const{data:a}=await(e=>C.get("/api/posts/".concat(e)))(e);t({type:"FETCH_POST",payload:{post:a}})}catch(a){console.log(a)}},A=e=>async t=>{try{t({type:"START_LOADING"});const{data:{data:a,currentPage:n,numberOfPages:o}}=await(e=>C.get("/api/posts?page=".concat(e)))(e);t({type:"FETCH_ALL",payload:{data:a,currentPage:n,numberOfPages:o}}),t({type:"END_LOADING"})}catch(a){console.log(a)}},w=e=>async t=>{try{t({type:"START_LOADING"});const{data:{data:a}}=await(e=>C.get("/api/posts/creator?name=".concat(e)))(e);t({type:"FETCH_BY_CREATOR",payload:{data:a}}),t({type:"END_LOADING"})}catch(a){console.log(a)}},j=e=>async t=>{try{t({type:"START_LOADING"});const{data:{data:a}}=await(e=>C.get("/api/posts/search?searchQuery=".concat(e.search||"none","&tags=").concat(e.tags)))(e);t({type:"FETCH_BY_SEARCH",payload:{data:a}}),t({type:"END_LOADING"})}catch(a){console.log(a)}},N=(e,t)=>async a=>{try{a({type:"START_LOADING"});const{data:o}=await(n=e,C.post("/api/posts",n));a({type:"CREATE",payload:o}),t.push("/posts/".concat(o._id))}catch(o){console.log(o)}var n},S=(e,t)=>async a=>{try{const{data:n}=await((e,t)=>C.patch("/api/posts/".concat(e),t))(e,t);a({type:"UPDATE",payload:n})}catch(n){console.log(n)}},k=e=>async t=>{const a=JSON.parse(localStorage.getItem("profile"));try{const{data:n}=await(e=>C.patch("/api/posts/".concat(e,"/likePost")))(e,null===a||void 0===a||a.token);t({type:"LIKE",payload:n})}catch(n){console.log(n)}},I=(e,t)=>async a=>{try{const{data:n}=await((e,t)=>C.post("/api/posts/".concat(t,"/commentPost"),{value:e}))(e,t);return a({type:"COMMENT",payload:n}),n.comments}catch(n){console.log(n)}},R=e=>async t=>{try{await(await(e=>C.delete("/api/posts/".concat(e)))(e)),t({type:"DELETE",payload:e})}catch(a){console.log(a)}};var T=a(237),D=a(223),B=a(221),L=Object(B.a)(e=>({media:{borderRadius:"20px",objectFit:"cover",width:"100%",maxHeight:"600px"},card:{display:"flex",width:"100%",[e.breakpoints.down("sm")]:{flexWrap:"wrap",flexDirection:"column"}},section:{borderRadius:"20px",margin:"10px",flex:1},imageSection:{marginLeft:"20px",[e.breakpoints.down("sm")]:{marginLeft:0}},recommendedPosts:{display:"flex",[e.breakpoints.down("sm")]:{flexDirection:"column"}},loadingPaper:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",borderRadius:"15px",height:"39vh"},commentsOuterContainer:{display:"flex",justifyContent:"space-between"},commentsInnerContainer:{height:"200px",overflowY:"auto",marginRight:"30px"}}));var F=e=>{let{post:t}=e;const a=JSON.parse(localStorage.getItem("profile")),[l,r]=Object(n.useState)(""),i=Object(s.b)(),[c,m]=Object(n.useState)(null===t||void 0===t?void 0:t.comments),d=L(),p=Object(n.useRef)();return o.a.createElement("div",null,o.a.createElement("div",{className:d.commentsOuterContainer},o.a.createElement("div",{className:d.commentsInnerContainer},o.a.createElement(E.a,{gutterBottom:!0,variant:"h6"},"Comments"),null===c||void 0===c?void 0:c.map((e,t)=>o.a.createElement(E.a,{key:t,gutterBottom:!0,variant:"subtitle1"},o.a.createElement("strong",null,e.split(": ")[0]),e.split(":")[1])),o.a.createElement("div",{ref:p})),o.a.createElement("div",{style:{width:"70%"}},o.a.createElement(E.a,{gutterBottom:!0,variant:"h6"},"Write a comment"),o.a.createElement(T.a,{fullWidth:!0,rows:4,variant:"outlined",label:"Comment",multiline:!0,value:l,onChange:e=>r(e.target.value)}),o.a.createElement("br",null),o.a.createElement(D.a,{style:{marginTop:"10px",backgroundColor:"#FF3B57",fontWeight:"bold"},fullWidth:!0,disabled:!l.length,color:"primary",variant:"contained",onClick:async()=>{var e;const n=await i(I("".concat(null===a||void 0===a||null===(e=a.result)||void 0===e?void 0:e.name,": ").concat(l),t._id));r(""),m(n),p.current.scrollIntoView({behavior:"smooth"})}},"Comment"))))};var P=()=>{const{post:e,posts:t,isLoading:a}=Object(s.c)(e=>e.posts),l=Object(s.b)(),r=Object(g.g)(),i=L(),{id:c}=Object(g.i)();if(Object(n.useEffect)(()=>{l(O(c))},[c]),Object(n.useEffect)(()=>{e&&l(j({search:"none",tags:null===e||void 0===e?void 0:e.tags.join(",")}))},[e]),!e)return null;if(a)return o.a.createElement(h.a,{elevation:6,className:i.loadingPaper},o.a.createElement(b.a,{size:"7em"}));const m=t.filter(t=>{let{_id:a}=t;return a!==e._id});return o.a.createElement(h.a,{style:{padding:"20px",borderRadius:"15px"},elevation:6},o.a.createElement("div",{className:i.card},o.a.createElement("div",{className:i.section},o.a.createElement(E.a,{variant:"h3",component:"h2"},e.title),o.a.createElement(E.a,{gutterBottom:!0,variant:"h6",color:"textSecondary",component:"h2"},e.tags.map(e=>o.a.createElement(u.b,{to:"/tags/".concat(e),style:{textDecoration:"none",color:"#3f51b5"}}," #".concat(e," ")))),o.a.createElement(E.a,{gutterBottom:!0,variant:"body1",component:"p"},e.message),o.a.createElement(E.a,{variant:"h6"},"Created by:",o.a.createElement(u.b,{to:"/creators/".concat(e.name),style:{textDecoration:"none",color:"#FF3B57"}}," ".concat(e.name))),o.a.createElement(E.a,{variant:"body1"},f()(e.createdAt).fromNow()),o.a.createElement(v.a,{style:{margin:"20px 0"}}),o.a.createElement(v.a,{style:{margin:"20px 0"}}),o.a.createElement(F,{post:e}),o.a.createElement(v.a,{style:{margin:"20px 0"}})),o.a.createElement("div",{className:i.imageSection},o.a.createElement("img",{className:i.media,src:e.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",alt:e.title}))),!!m.length&&o.a.createElement("div",{className:i.section},o.a.createElement(E.a,{gutterBottom:!0,variant:"h5"},"You might also like:"),o.a.createElement(v.a,null),o.a.createElement("div",{className:i.recommendedPosts},m.map(e=>{let{title:t,name:a,message:n,likes:l,selectedFile:s,_id:i}=e;return o.a.createElement("div",{style:{margin:"20px",cursor:"pointer"},onClick:()=>(e=>r.push("/posts/".concat(e)))(i),key:i},o.a.createElement(E.a,{gutterBottom:!0,variant:"h6"},t),o.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle2"},a),o.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle2"},n),o.a.createElement(E.a,{gutterBottom:!0,variant:"subtitle1"},"Likes: ",l.length),o.a.createElement("img",{src:s,width:"200px"}))}))))},W=a(227),H=a(228),_=a(240),U=a(122),M=a(123),V=a.n(M),G=a(226),Y=Object(B.a)(e=>({appBar:{borderRadius:5,background:"linear-gradient(135deg, #A05AE6 0%, #FE0000 100%)",margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px",[e.breakpoints.down("sm")]:{flexDirection:"column"}},heading:{color:e.palette.primary.main,textDecoration:"none",fontSize:"2em",fontWeight:300},image:{marginLeft:"10px",marginTop:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px",[e.breakpoints.down("sm")]:{width:"auto"}},profile:{display:"flex",justifyContent:"space-between",width:"400px",alignItems:"center",[e.breakpoints.down("sm")]:{width:"auto",marginTop:20,justifyContent:"center"}},logout:{marginLeft:"20px"},userName:{display:"flex",alignItems:"center",textAlign:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(G.a[500]),backgroundColor:G.a[500]}}));var J=()=>{const[e,t]=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),a=Object(s.b)(),l=Object(g.h)(),r=Object(g.g)(),i=Y(),c=()=>{a({type:"LOGOUT"}),r.push("/auth"),t(null)};return Object(n.useEffect)(()=>{const a=null===e||void 0===e?void 0:e.token;if(a){1e3*Object(U.a)(a).exp<(new Date).getTime()&&c()}t(JSON.parse(localStorage.getItem("profile")))},[l]),o.a.createElement(W.a,{className:i.appBar,position:"static",color:"inherit"},o.a.createElement(u.b,{to:"/",className:i.brandContainer},o.a.createElement("img",{component:u.b,to:"/",src:V.a,alt:"icon",height:"45px"})),o.a.createElement(H.a,{className:i.toolbar},(null===e||void 0===e?void 0:e.result)?o.a.createElement("div",{className:i.profile},o.a.createElement(_.a,{style:{border:"2px solid white"},className:i.purple,alt:null===e||void 0===e?void 0:e.result.name,src:null===e||void 0===e?void 0:e.result.imageUrl},null===e||void 0===e?void 0:e.result.name.charAt(0)),o.a.createElement(E.a,{style:{color:"white",fontWeight:"bolder"},className:i.userName,variant:"h6"},null===e||void 0===e?void 0:e.result.name),o.a.createElement(D.a,{style:{backgroundColor:"#FF3B57",border:"4px solid transparent",color:"white",fontWeight:"bolder"},variant:"contained",className:i.logout,color:"secondary",onClick:c},"Logout")):o.a.createElement(D.a,{style:{backgroundColor:"#FF3B57",border:"2px solid transparent",color:"white",fontWeight:"bolder"},component:u.b,to:"/auth",variant:"contained",color:""},"Sign In")))},z=a(238),q=a(233),Q=a(76),K=a.n(Q),Z=a(229),X=a(136),$=a(230),ee=a(231),te=a(232),ae=a(124),ne=a.n(ae),oe=a(126),le=a.n(oe),re=a(125),se=a.n(re),ie=a(89),ce=a.n(ie),me=Object(B.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},cardAction:{display:"block",textAlign:"initial"}});var de=e=>{var t,a,l,r,i;let{post:c,setCurrentId:m}=e;const d=JSON.parse(localStorage.getItem("profile")),[p,u]=Object(n.useState)(null===c||void 0===c?void 0:c.likes),h=Object(s.b)(),b=Object(g.g)(),v=me(),y=(null===d||void 0===d?void 0:d.result.googleId)||(null===d||void 0===d||null===(t=d.result)||void 0===t?void 0:t._id),x=c.likes.find(e=>e===y),C=()=>p.length>0?p.find(e=>e===y)?o.a.createElement(o.a.Fragment,null,o.a.createElement(ne.a,{fontSize:"small"}),"\xa0",p.length>2?"You and ".concat(p.length-1," others"):"".concat(p.length," like").concat(p.length>1?"s":"")):o.a.createElement(o.a.Fragment,null,o.a.createElement(ce.a,{fontSize:"small"}),"\xa0",p.length," ",1===p.length?"Like":"Likes"):o.a.createElement(o.a.Fragment,null,o.a.createElement(ce.a,{fontSize:"small"}),"\xa0Like");return o.a.createElement(Z.a,{style:{border:"2px solid #FF3B57"},className:v.card,raised:!0,elevation:6},o.a.createElement(X.a,{component:"span",name:"test",className:v.cardAction,onClick:e=>{b.push("/posts/".concat(c._id))}},o.a.createElement($.a,{className:v.media,image:c.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:c.title}),o.a.createElement("div",{className:v.overlay},o.a.createElement(E.a,{variant:"h6"},c.name),o.a.createElement(E.a,{variant:"body2"},f()(c.createdAt).fromNow())),((null===d||void 0===d||null===(a=d.result)||void 0===a?void 0:a.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===d||void 0===d||null===(l=d.result)||void 0===l?void 0:l._id)===(null===c||void 0===c?void 0:c.creator))&&o.a.createElement("div",{className:v.overlay2,name:"edit"},o.a.createElement(D.a,{onClick:e=>{e.stopPropagation(),m(c._id)},style:{color:"white"},size:"small"},o.a.createElement(se.a,{fontSize:"default"}))),o.a.createElement("div",{className:v.details},o.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"h2"},c.tags.map(e=>"#".concat(e," ")))),o.a.createElement(E.a,{className:v.title,gutterBottom:!0,variant:"h5",component:"h2"},c.title),o.a.createElement(ee.a,null,o.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},c.message.split(" ").splice(0,20).join(" "),"..."))),o.a.createElement(te.a,{className:v.cardActions},o.a.createElement(D.a,{size:"small",color:"primary",disabled:!(null===d||void 0===d?void 0:d.result),onClick:async()=>{h(k(c._id)),u(x?c.likes.filter(e=>e!==y):[...c.likes,y])}},o.a.createElement(C,null)),((null===d||void 0===d||null===(r=d.result)||void 0===r?void 0:r.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===d||void 0===d||null===(i=d.result)||void 0===i?void 0:i._id)===(null===c||void 0===c?void 0:c.creator))&&o.a.createElement(D.a,{size:"small",color:"secondary",onClick:()=>h(R(c._id))},o.a.createElement(le.a,{fontSize:"small"})," \xa0 Delete")))},pe=Object(B.a)(e=>({mainContainer:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},purple:{color:e.palette.getContrastText(G.a[500]),backgroundColor:G.a[500]},[e.breakpoints.down("sm")]:{appBar:{padding:"10px 20px"},heading:{display:"none"},userName:{display:"none"},image:{marginLeft:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"160px"}},actionDiv:{textAlign:"center"}}));var ue=e=>{let{setCurrentId:t}=e;const{posts:a,isLoading:n}=Object(s.c)(e=>e.posts),l=pe();return a.length||n?n?o.a.createElement(b.a,null):o.a.createElement(q.a,{className:l.container,container:!0,alignItems:"stretch",spacing:3},null===a||void 0===a?void 0:a.map(e=>o.a.createElement(q.a,{key:e._id,item:!0,xs:12,sm:12,md:6,lg:3},o.a.createElement(de,{post:e,setCurrentId:t})))):"No posts"},ge=a(127),he=a.n(ge),be=Object(B.a)(e=>({root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}));var Ee=e=>{var t;let{currentId:a,setCurrentId:l}=e;const[r,i]=Object(n.useState)({title:"",message:"",tags:[],selectedFile:""}),c=Object(s.c)(e=>a?e.posts.posts.find(e=>e._id===a):null),m=Object(s.b)(),d=be(),p=JSON.parse(localStorage.getItem("profile")),u=Object(g.g)(),b=()=>{l(0),i({title:"",message:"",tags:[],selectedFile:""})};Object(n.useEffect)(()=>{(null===c||void 0===c?void 0:c.title)||b(),c&&i(c)},[c]);if(!(null===p||void 0===p||null===(t=p.result)||void 0===t?void 0:t.name))return o.a.createElement(h.a,{className:d.paper,elevation:6},o.a.createElement(E.a,{variant:"h6",align:"center"},"Please Sign In to create your own moments and like other's moments."));return o.a.createElement(h.a,{className:d.paper,elevation:6},o.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:async e=>{var t,n;(e.preventDefault(),0===a)?(m(N({...r,name:null===p||void 0===p||null===(t=p.result)||void 0===t?void 0:t.name},u)),b()):(m(S(a,{...r,name:null===p||void 0===p||null===(n=p.result)||void 0===n?void 0:n.name})),b())}},o.a.createElement(E.a,{variant:"h6"},a?'Editing "'.concat(null===c||void 0===c?void 0:c.title,'"'):"Creating a Moment"),o.a.createElement(T.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:r.title,onChange:e=>i({...r,title:e.target.value})}),o.a.createElement(T.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:r.message,onChange:e=>i({...r,message:e.target.value})}),o.a.createElement("div",{style:{padding:"5px 0",width:"94%"}},o.a.createElement(K.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:r.tags,onAdd:e=>{return t=e,void i({...r,tags:[...r.tags,t]});var t},onDelete:e=>{return t=e,void i({...r,tags:r.tags.filter(e=>e!==t)});var t}})),o.a.createElement("div",{className:d.fileInput},o.a.createElement(he.a,{type:"file",multiple:!1,onDone:e=>{let{base64:t}=e;return i({...r,selectedFile:t})}})),o.a.createElement(D.a,{style:{background:"#A05AE6",fontWeight:"bold"},className:d.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),o.a.createElement(D.a,{style:{fontWeight:"bold"},variant:"contained",color:"secondary",size:"small",onClick:b,fullWidth:!0},"Clear")))},ve=a(241),ye=a(239),fe=Object(B.a)(()=>({ul:{justifyContent:"space-around"}}));var xe=e=>{let{page:t}=e;const{numberOfPages:a}=Object(s.c)(e=>e.posts),l=Object(s.b)(),r=fe();return Object(n.useEffect)(()=>{t&&l(A(t))},[l,t]),o.a.createElement(ve.a,{classes:{ul:r.ul},count:a,page:Number(t)||1,variant:"outlined",color:"primary",renderItem:e=>o.a.createElement(ye.a,Object.assign({style:{backgroundColor:"#FF3B57",border:"2px solid transparent",color:"white"}},e,{component:u.b,to:"/posts?page=".concat(e.page)}))})},Ce=Object(B.a)(e=>({appBarSearch:{borderRadius:4,marginBottom:"1rem",display:"flex",padding:"16px"},pagination:{borderRadius:4,marginTop:"1rem",padding:"16px"},gridContainer:{[e.breakpoints.down("xs")]:{flexDirection:"column-reverse"}}}));var Oe=()=>{const e=Ce(),t=new URLSearchParams(Object(g.h)().search),a=t.get("page")||1,l=t.get("searchQuery"),[r,i]=Object(n.useState)(0),c=Object(s.b)(),[m,d]=Object(n.useState)(""),[u,b]=Object(n.useState)([]),E=Object(g.g)(),v=()=>{m.trim()||u?(c(j({search:m,tags:u.join(",")})),E.push("/posts/search?searchQuery=".concat(m||"none","&tags=").concat(u.join(",")))):E.push("/")};return o.a.createElement(z.a,{in:!0},o.a.createElement(p.a,{maxWidth:"xl"},o.a.createElement(q.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,className:e.gridContainer},o.a.createElement(q.a,{item:!0,xs:12,sm:6,md:9},o.a.createElement(ue,{setCurrentId:i})),o.a.createElement(q.a,{item:!0,xs:12,sm:6,md:3},o.a.createElement(W.a,{className:e.appBarSearch,position:"static",color:"inherit"},o.a.createElement(T.a,{onKeyDown:e=>{13===e.keyCode&&v()},name:"search",variant:"outlined",label:"Search Moments",fullWidth:!0,value:m,onChange:e=>d(e.target.value)}),o.a.createElement(K.a,{style:{margin:"10px 0"},value:u,onAdd:e=>{return t=e,b([...u,t]);var t},onDelete:e=>{return t=e,b(u.filter(e=>e!==t));var t},label:"Search Tags",variant:"outlined"}),o.a.createElement(D.a,{style:{backgroundColor:"#FF3B57",border:"2px solid transparent",color:"white",fontWeight:900},onClick:v,className:e.searchButton,variant:"contained",color:"primary"},"Search")),o.a.createElement(Ee,{currentId:r,setCurrentId:i}),!l&&!u.length&&o.a.createElement(h.a,{className:e.pagination,elevation:6},o.a.createElement(xe,{page:a}))))))},Ae=a(128),we=a(131),je=a.n(we);var Ne=()=>o.a.createElement("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24"},o.a.createElement("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"}));const Se=(e,t)=>async a=>{try{const{data:n}=await(e=>C.post("/api/user/signin",e))(e);a({type:"AUTH",data:n}),t.push("/")}catch(n){a({type:"AUTH_ERROR",data:n.response.data.message}),console.log(n)}},ke=(e,t)=>async a=>{try{const{data:n}=await(e=>C.post("/api/user/signup",e))(e);a({type:"AUTH",data:n}),t.push("/")}catch(n){a({type:"AUTH_ERROR",data:n.response.data.message}),console.log(n)}};var Ie=Object(B.a)(e=>({paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}})),Re=a(235),Te=a(236),De=a(129),Be=a.n(De),Le=a(130),Fe=a.n(Le);var Pe=e=>{let{name:t,handleChange:a,label:n,half:l,autoFocus:r,type:s,handleShowPassword:i}=e;return o.a.createElement(q.a,{item:!0,xs:12,sm:l?6:12},o.a.createElement(T.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:r,type:s,InputProps:"password"===t?{endAdornment:o.a.createElement(Re.a,{position:"end"},o.a.createElement(Te.a,{onClick:i},"password"===s?o.a.createElement(Be.a,null):o.a.createElement(Fe.a,null)))}:null}))};const We={firstName:"",lastName:"",email:"",password:"",confirmPassword:""};var He=()=>{const[e,t]=Object(n.useState)(We),[a,l]=Object(n.useState)(!1),r=Object(s.b)(),i=Object(g.g)(),c=Ie(),[m,d]=Object(n.useState)(!1),{errors:u}=Object(s.c)(e=>e.auth),b=a=>t({...e,[a.target.name]:a.target.value});return o.a.createElement(p.a,{component:"main",maxWidth:"xs"},o.a.createElement(h.a,{className:c.paper,elevation:6},o.a.createElement(_.a,{className:c.avatar},o.a.createElement(je.a,null)),o.a.createElement(E.a,{component:"h1",variant:"h5"},a?"Sign up":"Sign in"),o.a.createElement("form",{className:c.form,onSubmit:t=>{t.preventDefault(),r(a?ke(e,i):Se(e,i))}},o.a.createElement(q.a,{container:!0,spacing:2},a&&o.a.createElement(o.a.Fragment,null,o.a.createElement(Pe,{name:"firstName",label:"First Name",handleChange:b,autoFocus:!0,half:!0}),o.a.createElement(Pe,{name:"lastName",label:"Last Name",handleChange:b,half:!0})),o.a.createElement(Pe,{name:"email",label:"Email Address",handleChange:b,type:"email"}),o.a.createElement(Pe,{name:"password",label:"Password",handleChange:b,type:m?"text":"password",handleShowPassword:()=>d(!m)}),a&&o.a.createElement(Pe,{name:"confirmPassword",label:"Repeat Password",handleChange:b,type:"password"})),o.a.createElement(D.a,{style:{backgroundColor:"#FF3B57"},type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:c.submit},a?"Sign Up":"Sign In"),o.a.createElement(Ae.GoogleLogin,{clientId:"564033717568-bu2nr1l9h31bhk9bff4pqbenvvoju3oq.apps.googleusercontent.com",render:e=>o.a.createElement(D.a,{style:{backgroundColor:"#FF3B57"},className:c.googleButton,color:"primary",fullWidth:!0,onClick:e.onClick,disabled:e.disabled,startIcon:o.a.createElement(Ne,null),variant:"contained"},"Google Sign In"),onSuccess:async e=>{const t=null===e||void 0===e?void 0:e.profileObj,a=null===e||void 0===e?void 0:e.tokenId;try{r({type:"AUTH",data:{result:t,token:a}}),i.push("/")}catch(n){console.log(n)}},onFailure:()=>console.log("Google Sign In was unsuccessful. Try again later"),cookiePolicy:"single_host_origin"}),o.a.createElement(q.a,{container:!0,justify:"flex-end"},o.a.createElement(q.a,{item:!0},o.a.createElement(D.a,{onClick:()=>{t(We),l(e=>!e),d(!1)}},a?"Already have an account? Sign in":"Don't have an account? Sign Up"))),u&&o.a.createElement(E.a,{variant:"body2",color:"error"},u))))};var _e=()=>{const{name:e}=Object(g.i)(),t=Object(s.b)(),{posts:a,isLoading:l}=Object(s.c)(e=>e.posts),r=Object(g.h)();return Object(n.useEffect)(()=>{r.pathname.startsWith("/tags")?t(j({tags:e})):t(w(e))},[]),a.length||l?o.a.createElement("div",null,o.a.createElement(E.a,{variant:"h2"},e),o.a.createElement(v.a,{style:{margin:"20px 0 50px 0"}}),l?o.a.createElement(b.a,null):o.a.createElement(q.a,{container:!0,alignItems:"stretch",spacing:3},null===a||void 0===a?void 0:a.map(e=>o.a.createElement(q.a,{key:e._id,item:!0,xs:12,sm:12,md:6,lg:3},o.a.createElement(de,{post:e}))))):"No posts"};var Ue=()=>{const e=JSON.parse(localStorage.getItem("profile"));return o.a.createElement(u.a,null,o.a.createElement(p.a,{maxWidth:"xl"},o.a.createElement(J,null),o.a.createElement(g.d,null,o.a.createElement(g.b,{path:"/",exact:!0,component:()=>o.a.createElement(g.a,{to:"/posts"})}),o.a.createElement(g.b,{path:"/posts",exact:!0,component:Oe}),o.a.createElement(g.b,{path:"/posts/search",exact:!0,component:Oe}),o.a.createElement(g.b,{path:"/posts/:id",exact:!0,component:P}),o.a.createElement(g.b,{path:["/creators/:name","/tags/:name"],component:_e}),o.a.createElement(g.b,{path:"/auth",exact:!0,component:()=>e?o.a.createElement(g.a,{to:"/posts"}):o.a.createElement(He,null)}))))};a(198);const Me=Object(i.d)(d,{},Object(i.c)(Object(i.a)(c.a)));r.a.render(o.a.createElement(s.a,{store:Me},o.a.createElement(Ue,null)),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.724b6361.chunk.js.map