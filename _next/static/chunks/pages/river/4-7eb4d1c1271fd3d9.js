(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[717],{1996:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/river/4",function(){return n(3848)}])},3848:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Question4Page}});var a=n(6811),r=n(1163),i=n(7294);function Question4(){let[e,t]=(0,i.useState)(""),[n,l]=(0,i.useState)(""),[o,s]=(0,i.useState)(""),[c,u]=(0,i.useState)(""),[m,d]=(0,i.useState)(1),h=(0,r.useRouter)();(0,i.useEffect)(()=>{let e=localStorage.getItem("answer15"),n=localStorage.getItem("answer16"),a=localStorage.getItem("answer17"),r=localStorage.getItem("answer18");e&&t(e),n&&l(n),a&&s(a),r&&u(r)},[]),(0,i.useEffect)(()=>{localStorage.setItem("answer15",e),localStorage.setItem("answer16",n),localStorage.setItem("answer17",o),localStorage.setItem("answer18",c)},[e,n,o,c]);let handleNextStep=()=>{d(e=>e+1)};return(0,a.BX)("div",{className:"min-h-screen flex flex-col justify-start items-center bg-cover bg-center bg-fixed pt-20",style:{backgroundImage:'url("/img/river_4.png")',backgroundSize:"screen",backgroundRepeat:"no-repeat"},children:[(0,a.BX)("div",{className:"flex flex-col items-center text-center animate-fadeIn mb-20",children:[(0,a.tZ)("p",{className:"  text-white font-bold mb-6",children:"올해 책 읽었어? 어떤 책을 올해의 책으로 꼽을 수 있을까?"}),(0,a.tZ)("input",{type:"text",value:e,onChange:e=>t(e.target.value),className:"text-center min-w-2/3 max-w-[800px] w-3/4 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"}),1===m&&e.trim()&&(0,a.tZ)("button",{onClick:handleNextStep,className:"  text-white mt-4 hover:scale-150 transition-transform duration-300",children:"올해의 책이구나!"})]}),m>=2&&(0,a.BX)("div",{className:"flex flex-col items-center text-center animate-fadeIn mb-20",children:[(0,a.BX)("p",{className:"  text-white font-bold mb-6",children:["내년에 읽을 책 하나만 써보자! ",(0,a.tZ)("br",{})," 내년에 꼭 읽어야해."]}),(0,a.tZ)("input",{type:"text",value:n,onChange:e=>l(e.target.value),className:"text-center min-w-2/3 max-w-[800px] w-3/4 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"}),2===m&&n.trim()&&(0,a.tZ)("button",{onClick:handleNextStep,className:"  text-white mt-4 hover:scale-150 transition-transform duration-300",children:"꼭 읽어야지!"})]}),m>=3&&(0,a.BX)("div",{className:"flex flex-col items-center text-center animate-fadeIn mb-20",children:[(0,a.BX)("p",{className:"  text-white font-bold mb-6",children:["올해의 영화 하나만! 딱 떠오르는 것, ",(0,a.tZ)("br",{}),"아니면 너를 울렸던 것 ~"]}),(0,a.tZ)("input",{type:"text",value:o,onChange:e=>s(e.target.value),className:"text-center min-w-2/3 max-w-[800px] w-3/4 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"}),3===m&&o.trim()&&(0,a.tZ)("button",{onClick:handleNextStep,className:"  text-white mt-4 hover:scale-150 transition-transform duration-300",children:"없다고 하지마"})]}),m>=4&&(0,a.BX)("div",{className:"flex flex-col items-center text-center animate-fadeIn mb-20",children:[(0,a.tZ)("p",{className:"  text-white font-bold mb-6",children:"보고싶은 영화 있어? 아니면 기다리는 영화?"}),(0,a.tZ)("input",{type:"text",value:c,onChange:e=>u(e.target.value),className:"text-center min-w-2/3 max-w-[800px] w-3/4 text-white p-2 border-b-2 border-white bg-transparent   focus:outline-none"}),4===m&&c.trim()&&(0,a.tZ)("button",{onClick:()=>{h.push("/river/5")},className:"  text-white mt-4 hover:scale-150 transition-transform duration-300",children:"가치볼래?우하하"})]})]})}function Question4Page(){return(0,a.tZ)(Question4,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1996)}),_N_E=e.O()}]);