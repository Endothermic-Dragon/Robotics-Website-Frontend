(()=>{var n={72:n=>{n.exports={$:n=>{var t=[...document.querySelectorAll(n)],e=function(n){n.on=(t,e)=>n.addEventListener(t,(t=>e(t,n)))};for(var i of t)e(i);return t.onAll=(n,e)=>t.map((t=>t.on(n,e))),t.on=()=>{throw new TypeError('Cannot add event listener on multiple elements using "on". Use "onAll" to add to multiple elements, or select one element.')},t},backend:"https://xtekoweg6sbdadhqxpetywgp3m0silph.lambda-url.us-east-1.on.aws/"}}},t={};function e(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return n[i](r,r.exports,e),r.exports}(()=>{"use strict";function n(n,t,e,i,o,r,a){var s,c;try{c=(s=n[r](a)).value}catch(n){return void e(n)}s.done?t(c):Promise.resolve(c).then(i,o)}function t(t){return function(){var e=this,i=arguments;return new Promise((function(o,r){var a=t.apply(e,i);function s(t){n(a,o,r,s,c,"next",t)}function c(t){n(a,o,r,s,c,"throw",t)}s(void 0)}))}}var i=e(72),o=(()=>{var n=document.createElement("div");n.style.visibility="hidden",n.style.overflow="scroll",document.body.appendChild(n);var t=document.createElement("div");n.appendChild(t);var e=n.offsetWidth-t.offsetWidth;return n.remove(n),e})();fetch("".concat(i.backend,"./initiatives"),{method:"POST",headers:{"Content-Type":"application/json"}}).then(function(){var n=t((function*(n){n=yield n.json();var e=Array.from(new Set(n.flatMap((n=>n.leads)))),r={};yield fetch("".concat(i.backend,"./translate-user-ids"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_ids:e})}).then(function(){var n=t((function*(n){var t,i=yield n.json();for(t=0;t<e.length;t++)r[e[t]]=i[t]}));return function(){return n.apply(this,arguments)}}()),n=n.map(function(){var n=t((function*(n){n.mins=parseInt(n.total_mins)%60,n.hours=Math.floor(parseInt(n.total_mins)/60),n.leads=n.leads.map((n=>r[n]));var t=document.createElement("div");return t.innerText=n.description,n.description=t.innerHTML.replaceAll("<br>","</div><div>"),t.innerText=n.leads.join(", "),n.leads=t.innerHTML,t.innerText=n.initiative_name,n.initiative_name=t.innerHTML,'<section>\n  <div class="image-container">\n    <img src="./static/logos/logo_trans.png">\n  </div>\n  <div class="info-container" style="--img-url:url(\'./static/logos/logo_trans.png\')">\n    <h2>'.concat(n.initiative_name,'</h2>\n    <div class="leads">Leads: ').concat(n.leads,'</div>\n    <div class="stats">\n      <div class="participants"><img src="./static/person-icon.png" alt="Participants">\n        <span>').concat(n.total_participants," volunteer").concat(n.total_participants>1?"s":"",'</span>\n      </div>\n      <div class="hours"><img src="./static/clock-icon.png" alt="Time Spent">\n        <span>').concat(n.hours||n.mins," ").concat(n.hours?"hour".concat(n.hours)>1?"s":"":"min".concat(n.mins)>1?"s":"",'</span>\n      </div>\n    </div>\n    <div class="description">\n      <div>').concat(n.description,"</div>\n    </div>\n  </div>\n</section>")}));return function(){return n.apply(this,arguments)}}()),Promise.all(n).then((n=>{(0,i.$)(".content")[0].innerHTML+=n.join("\n");var t=document.body.scrollHeight>document.body.clientHeight,e=(0,i.$)(".container")[0].scrollHeight>(0,i.$)(".container")[0].clientHeight;!t&&e&&document.body.style.setProperty("--notification-offset-scrollbar","".concat(o,"px"))}))}));return function(){return n.apply(this,arguments)}}())})()})();