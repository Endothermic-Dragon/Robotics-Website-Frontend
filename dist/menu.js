(()=>{var e={548:e=>{e.exports={$:e=>{var t=[...document.querySelectorAll(e)],n=function(e){e.on=(t,n)=>e.addEventListener(t,(t=>n(t,e)))};for(var o of t)n(o);return t.onAll=(e,n)=>t.map((t=>t.on(e,n))),t.on=()=>{throw new TypeError('Cannot add event listener on multiple elements using "on". Use "onAll" to add to multiple elements, or select one element.')},t},backend:"https://xtekoweg6sbdadhqxpetywgp3m0silph.lambda-url.us-east-1.on.aws/"}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}(()=>{"use strict";function e(e,t,n,o,i,a,s){var r,d;try{d=(r=e[a](s)).value}catch(e){return void n(e)}r.done?t(d):Promise.resolve(d).then(o,i)}function t(t){return function(){var n=this,o=arguments;return new Promise((function(i,a){var s=t.apply(n,o);function r(t){e(s,i,a,r,d,"next",t)}function d(t){e(s,i,a,r,d,"throw",t)}r(void 0)}))}}var o,i=n(548),a=(()=>{var e=document.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",document.body.appendChild(e);var t=document.createElement("div");e.appendChild(t);var n=e.offsetWidth-t.offsetWidth;return e.remove(e),n})();function s(){var e=(0,i.$)(".sidebar")[0];e.scrollHeight>e.clientHeight&&document.body.style.setProperty("--sidebar-offset-scrollbar","".concat(a,"px"))}function r(){var e=google.accounts.oauth2.initCodeClient({client_id:"672955273389-tc6i17ics6qv7sh6g7m597fi30ic0ljq.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",ux_mode:"popup",callback:e=>{fetch("".concat(i.backend,"./auth"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:e.code})}).then(function(){var e=t((function*(e){if(200===e.status){var t=yield e.json();localStorage.setItem("session-token",t.session_token),localStorage.setItem("user-id",t.user_id),localStorage.setItem("tags",JSON.stringify(t.tags)),(0,i.$)(".sign-in")[0].classList.add("disabled"),(0,i.$)(".sign-in")[0].removeEventListener("click",r),(0,i.$)(".sidebar")[0].classList.add("signed-in"),t.tags.includes("mentor")&&(0,i.$)(".sidebar")[0].classList.add("mentor"),s()}else alert("Could not log in. Please try again.")}));return function(){return e.apply(this,arguments)}}())}});e.requestCode()}s(),(0,i.$)(".sidebar > div:not(:last-child)").onAll("click",((e,t)=>{location.href=t.dataset.url})),null===(o=(0,i.$)('.sidebar > div[data-url="'.concat(location.pathname.slice(1),'"]'))[0])||void 0===o||o.classList.add("selected"),(0,i.$)(".menu-bars")[0].on("click",(()=>{(0,i.$)(".menu-bars")[0].classList.toggle("open"),(0,i.$)(".sidebar")[0].classList.toggle("open")})),(0,i.$)(".sidebar")[0].on("mouseenter",(()=>(0,i.$)(".sidebar-shadow")[0].classList.add("open"))),(0,i.$)(".sidebar")[0].on("mouseleave",(()=>(0,i.$)(".sidebar-shadow")[0].classList.remove("open"))),(0,i.$)('.sidebar > div[data-url="'.concat(location.pathname.slice(1),'"]'))[0]&&fetch("".concat(i.backend,"./pre-auth"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({session_token:localStorage.getItem("session-token")})}).then(function(){var e=t((function*(e){200!=e.status?(function(e,t,n){document.body.style.setProperty("--notification-duration","".concat(7.5,"s")),document.body.style.setProperty("--notification-fade","".concat(.3,"s"));var o=document.createElement("div");o.classList.add("notification-container");var s=document.createElement("div");s.classList.add("loading-bar-container");var r=document.createElement("div");s.appendChild(r),o.appendChild(s);var d=document.createElement("div");d.classList.add("notification-message"),d.innerText="You are not signed in. To access working features of this website, please navigate to the menu and log in through Google.",o.appendChild(d);var c=document.body.scrollHeight>document.body.clientHeight,l=(0,i.$)(".container")[0].scrollHeight>(0,i.$)(".container")[0].clientHeight;!c&&l&&document.body.style.setProperty("--notification-offset-scrollbar","".concat(a,"px")),document.body.appendChild(o);var u=()=>{o.classList.add("fade"),o.removeEventListener("animationend",u),o.addEventListener("animationend",(()=>o.remove()))};o.addEventListener("animationend",u)}(),(0,i.$)(".sign-in")[0].classList.remove("disabled"),(0,i.$)(".sign-in")[0].on("click",r)):((0,i.$)(".sidebar")[0].classList.add("signed-in"),JSON.parse(localStorage.getItem("tags")).includes("mentor")&&(0,i.$)(".sidebar")[0].classList.add("mentor"),s())}));return function(){return e.apply(this,arguments)}}())})()})();