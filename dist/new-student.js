(()=>{var e={548:e=>{e.exports={$:e=>{var t=[...document.querySelectorAll(e)],n=function(e){e.on=(t,n)=>e.addEventListener(t,(t=>n(t,e)))};for(var o of t)n(o);return t.onAll=(e,n)=>t.map((t=>t.on(e,n))),t.on=()=>{throw new TypeError('Cannot add event listener on multiple elements using "on". Use "onAll" to add to multiple elements, or select one element.')},t},backend:"https://xtekoweg6sbdadhqxpetywgp3m0silph.lambda-url.us-east-1.on.aws/"}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}(()=>{"use strict";function e(e,t,n,o,r,a,i){var l,u;try{u=(l=e[a](i)).value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(o,r)}var t=n(548),o=1;function r(e){e.preventDefault(),e.target.parentElement.previousSibling.remove(),e.target.parentElement.remove()}function a(){var n;return n=function*(e){e.preventDefault(),(0,t.$)("[type='submit']")[0].disabled=!0;var n,o,r=[],a=[],i=[],l=[],u=(0,t.$)("form > div");for(n=0;n<u.length;n++)el=u[n],r.push(el.querySelector("input").value),a.push(el.querySelector("[type='email']").value),i.push(el.querySelector("select").value),o=[],el.querySelector("[id^='mentor']").checked&&o.push("mentor"),el.querySelector("[id^='new-student']").checked&&o.push("new"),l.push(o);fetch("".concat(t.backend,"./add-users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({names:r,emails:a,departments:i,tags_s:l,session_token:localStorage.getItem("session-token")})}).then((()=>{window.location.href="all-students.html"}))},a=function(){var t=this,o=arguments;return new Promise((function(r,a){var i=n.apply(t,o);function l(t){e(i,r,a,l,u,"next",t)}function u(t){e(i,r,a,l,u,"throw",t)}l(void 0)}))},a.apply(this,arguments)}(0,t.$)(".add-another-student")[0].on("click",(function(e){o++,e.preventDefault();var n='\n  <input type="text" placeholder="Full Name" required><br>\n  <input type="email" placeholder="Email" required><br>\n  <select>\n    <option value="-" disabled selected>Department NA</option>\n    <option value="Documentation">Documentation</option>\n    <option value="Finance">Finance</option>\n    <option value="Public Relations">Public Relations</option>\n    <option value="Carpentry">Carpentry</option>\n    <option value="Design">Design</option>\n    <option value="Electrical">Electrical</option>\n    <option value="Mechanical">Mechanical</option>\n    <option value="Programming">Programming</option>\n    <option value="Safety">Safety</option>\n    <option value="Strategy">Strategy</option>\n  </select><br>\n  <input type="checkbox" id="new-student-'.concat(o,'">\n  <label for="new-student-').concat(o,'"> New student</label><br>\n  <input type="checkbox" id="mentor-').concat(o,'">\n  <label for="mentor-').concat(o,'"> Mentor</label><br>\n  '),a=document.createElement("div"),i=document.createElement("button");i.classList.add("remove-row"),i.innerText="Remove student row",i.addEventListener("click",r);var l=document.createElement("hr");a.innerHTML=n,a.appendChild(i),(0,t.$)("form")[0].insertBefore(l,[...(0,t.$)("form")[0].children].at(-3)),(0,t.$)("form")[0].insertBefore(a,[...(0,t.$)("form")[0].children].at(-3))})),(0,t.$)(".remove-row")[0].on("click",r),(0,t.$)("form")[0].on("submit",(function(){return a.apply(this,arguments)}))})()})();