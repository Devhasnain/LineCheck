(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{4808:function(e,t,s){Promise.resolve().then(s.bind(s,7935)),Promise.resolve().then(s.bind(s,488))},2761:function(e,t,s){"use strict";s.r(t),s.d(t,{ContextProvider:function(){return o},CounterContext:function(){return l}});var n=s(7437),a=s(2265);let r={offers:[],barsWithDistance:[],user:{}},i=(e,t)=>{switch(t.type){case"OFFERS":return{...e,offers:t.payload};case"barsWithDistance":return{...e,barsWithDistance:t.payload};case"USER":return{...e,user:t.payload};default:return e}},l=(0,a.createContext)({state:r,dispatch:()=>null}),o=e=>{let{children:t}=e,[s,o]=(0,a.useReducer)(i,r);return(0,n.jsx)(l.Provider,{value:{state:s,dispatch:o},children:t})}},1109:function(e,t,s){"use strict";var n=s(7437);s(2265),t.Z=e=>{let{children:t,className:s,onClick:a,type:r}=e;return(0,n.jsx)("button",{onClick:a,type:r,className:"text-white font-inter py-2 px-4 rounded-3xl bg-[#4100FA] ".concat(s),children:t})}},7935:function(e,t,s){"use strict";s.r(t);var n=s(7437),a=s(428),r=s.n(a),i=s(6691),l=s.n(i),o=s(1396),c=s.n(o);s(2265),t.default=()=>(0,n.jsxs)("nav",{className:"jsx-693d7946c8cc545b bg-black w-[80%] mx-auto  my-0  p-4 flex items-center justify-between",children:[(0,n.jsx)(r(),{id:"693d7946c8cc545b",children:".paragraph.jsx-693d7946c8cc545b{font-size:16px;font-weight:500;line-height:24px;color:white;letter-spacing:-.011em;text-align:left}paragraph.jsx-693d7946c8cc545b:hover{}"}),(0,n.jsx)("div",{className:"jsx-693d7946c8cc545b relative h-[30px] w-[200px] mr-4",children:(0,n.jsx)(c(),{href:"/",className:" font-inter",children:(0,n.jsx)(l(),{src:"/logo1.png",fill:!0,alt:"Logo"})})}),(0,n.jsxs)("div",{className:"jsx-693d7946c8cc545b space-x-4 paragraph flex items-center",children:[(0,n.jsx)(c(),{href:"/aboutus",className:" font-inter",children:"About us"}),(0,n.jsx)(c(),{href:"/contactus",className:" font-inter",children:"Contact us "})]})]})},488:function(e,t,s){"use strict";s.r(t);var n=s(7437),a=s(2265),r=s(1396),i=s.n(r),l=s(6691),o=s.n(l),c=s(1109),d=s(4033),m=s(2761),x=s(4633);t.default=()=>{let e=(0,d.useRouter)(),{dispatch:t,state:s}=(0,a.useContext)(m.CounterContext),[r,l]=(0,a.useState)({firstname:"",lastname:"",email:"",password:"",mobile:"",confirmPassword:""}),[u,p]=(0,a.useState)(""),h=e=>{let{value:t,name:s}=e.target;l({...r,[s]:t})},f=async s=>{let{mobile:n,firstname:a,lastname:i,email:l,password:o}=r;if(s.preventDefault(),!n||!i||!a||!l||!o){p("All fields are necessary.");return}try{var c=new Headers;c.append("Accept","application/json"),c.append("Content-Type","application/json");var d=JSON.stringify({role_type:"2",signup_type:"Email",mobile:n,lastname:i,firstname:a,email:l,password:o});fetch("".concat(x.j,"user-register"),{method:"POST",headers:c,body:d,redirect:"follow"}).then(e=>e.json()).then(s=>{if(s.error){console.log("User registration failed.");return}s.status&&(t({type:"USER",payload:{...s.token_detail,...s.detail}}),localStorage.setItem("token",JSON.stringify(s.token_detail.access_token)),e.replace("home")),console.log(s)}).catch(e=>console.log("error",e))}catch(e){console.log("Error during registration: ",e)}};return(0,n.jsx)("div",{className:" mx-auto mt-8 max-w-[1500px]  min-h-screen relative flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8",children:(0,n.jsxs)("div",{className:"w-full max-w-md space-y-8",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"mt-4 text-start text-[40px] font-medium font-poppin uppercase text-white",children:"sign up"}),(0,n.jsxs)("div",{className:"text-start  text-white text-[18px] font-medium font-poppin uppercase text-greentext",children:["Already Member?",(0,n.jsx)(i(),{href:"/login",children:(0,n.jsx)("span",{className:" text-[#4100FA] ml-4 cursor-pointer",children:"Sign in"})})]})]}),(0,n.jsxs)("form",{className:"mt-8 space-y-6",children:[(0,n.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("label",{htmlFor:"firstname",className:"block text-sm font-medium text-white",children:"First Name"}),(0,n.jsx)("input",{id:"firstname",name:"firstname",type:"text",placeholder:"John",className:"text-white mt-1 py-3 px-4 bg-[#8560ed42] focus:ring-indigo-500 outline-none focus:border-indigo-500 block  shadow-sm sm:text-sm border-gray-300 rounded-2xl",value:r.firstname,onChange:h})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"lastname",className:"block text-sm font-medium text-white",children:"Last Name"}),(0,n.jsx)("input",{id:"lastname",name:"lastname",type:"text",placeholder:"Wick",className:"text-white mt-1 py-3 px-4 bg-[#8560ed42] focus:ring-indigo-500 outline-none focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-2xl",value:r.lastname,onChange:h})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-white",children:"Email"}),(0,n.jsx)("input",{id:"email",name:"email",type:"email",placeholder:"johnwick@domainname.com",autoComplete:"email",className:"text-white mt-1 py-3 px-4 bg-[#8560ed42] focus:ring-indigo-500 outline-none focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-2xl",value:r.email,onChange:h})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"flex justify-between",children:(0,n.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-white",children:"Password"})}),(0,n.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",placeholder:"**************",className:"text-white mt-1 py-3 px-4 bg-[#8560ed42] focus:ring-indigo-500 outline-none focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-2xl",value:r.password,onChange:h})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"flex justify-between",children:(0,n.jsx)("label",{htmlFor:"mobile",className:"block text-sm font-medium text-white",children:"Mobile Number"})}),(0,n.jsx)("input",{id:"mobile",name:"mobile",type:"text",placeholder:"1 (205) 201-0933",className:"text-white mt-1 py-3 px-4 bg-[#8560ed42] focus:ring-indigo-500 outline-none focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-2xl",value:r.mobile,onChange:h})]}),u&&(0,n.jsx)("span",{className:"pt-2 text-red-600",children:u}),(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row gap-2",children:[(0,n.jsx)(c.Z,{className:"shadow-[0px_1px_24px_0px_#1F51FF99] !rounded-md",onClick:f,children:"Sign Up"}),(0,n.jsxs)("button",{className:"flex items-center justify-center gap-2 px-4 py-2 text-gray-600 bg-gray-300 rounded-md sm:w-auto",children:[(0,n.jsx)(o(),{src:"/google-icon 1.png",width:20,height:20,alt:""}),"Sign up with Google"]})]})]})]})})}},4633:function(e,t,s){"use strict";s.d(t,{j:function(){return n}});let n="https://majesticowls.com/linecheck/api/"},4033:function(e,t,s){e.exports=s(8165)}},function(e){e.O(0,[986,132,971,596,744],function(){return e(e.s=4808)}),_N_E=e.O()}]);