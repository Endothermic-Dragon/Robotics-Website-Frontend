(()=>{var e={72:e=>{e.exports={$:e=>{var t=[...document.querySelectorAll(e)],n=function(e){e.on=(t,n)=>e.addEventListener(t,(t=>n(t,e)))};for(var i of t)n(i);return t.onAll=(e,n)=>t.map((t=>t.on(e,n))),t.on=()=>{throw new TypeError('Cannot add event listener on multiple elements using "on". Use "onAll" to add to multiple elements, or select one element.')},t},backend:"https://xtekoweg6sbdadhqxpetywgp3m0silph.lambda-url.us-east-1.on.aws/"}}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}(()=>{"use strict";function e(e,t,n,i,a,o,r){var s,l;try{l=(s=e[o](r)).value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(i,a)}var t=n(72);function i(){var e=(0,t.$)("select")[0].value;"true"==(0,t.$)('option[value="'.concat(e,'"]'))[0].dataset.lead?(0,t.$)(".vary-disabled")[0].classList.remove("disabled"):((0,t.$)(".vary-disabled")[0].classList.add("disabled"),(0,t.$)("input[type='checkbox']")[0].checked=!1)}function a(){return Math.floor((new Date((0,t.$)("#start-time")[0].value)-new Date("Jan 1 2020 00:00:00 GMT"))/1e3/60)}function o(e){e.preventDefault(),fetch("".concat(t.backend,"./log-hours"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({session_token:localStorage.getItem("session-token"),initiative_id:(0,t.$)("#initiative")[0].value,prep_time:(0,t.$)("#event-leader")[0].checked,duration:Math.floor((new Date((0,t.$)("#end-time")[0].value)-new Date("Jan 1 2020 00:00:00 GMT"))/1e3/60)-a(),start_time:a()})}).then((()=>{location.href="user-dashboard.html"}))}(0,t.$)("#start-time, #end-time").onAll("input",(()=>{var e=new Date((0,t.$)("#start-time")[0].value),n=new Date((0,t.$)("#end-time")[0].value),i=(new Date).getTime()-12096e5;(i=(new Date).setTime(i))>e?(0,t.$)("#start-time")[0].setCustomValidity("You can only log hours for two weeks."):e>=n?(0,t.$)("#start-time")[0].setCustomValidity("Start time must be before end time."):n-e>864e5?(0,t.$)("#start-time")[0].setCustomValidity("Cannot log more than 24 hours at once."):(0,t.$)("#start-time")[0].setCustomValidity("")})),fetch("".concat(t.backend,"./initiatives"),{method:"POST",headers:{"Content-Type":"application/json"}}).then(function(){var n,a=(n=function*(e){e=yield e.json();var n=document.createElement("div");e=e.map((e=>(n.innerText=e.initiative_id,e.initiative_id=n.innerHTML,n.innerText=e.initiative_name,e.initiative_name=n.innerHTML,'<option value="'.concat(e.initiative_id,'" data-lead="').concat(e.leads.includes(localStorage.getItem("user-id")),'">').concat(e.initiative_name,"</option>")))),(0,t.$)("select")[0].innerHTML+=e.join("\n"),(0,t.$)("select")[0].on("change",i),(0,t.$)("form")[0].on("submit",o)},function(){var t=this,i=arguments;return new Promise((function(a,o){var r=n.apply(t,i);function s(t){e(r,a,o,s,l,"next",t)}function l(t){e(r,a,o,s,l,"throw",t)}s(void 0)}))});return function(){return a.apply(this,arguments)}}())})()})();