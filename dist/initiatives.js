"use strict";(self.webpackChunkoutreach_website_frontend=self.webpackChunkoutreach_website_frontend||[]).push([[189],{947:(n,t,e)=>{var i=e(390),s=e(117),r=e.n(s),a=e(508);fetch(a.backend+"./initiatives",{method:"POST",headers:{"Content-Type":"application/json"}}).then(function(){var n=(0,i.Z)(r().mark((function n(t){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.json();case 2:t=(t=n.sent).map(function(){var n=(0,i.Z)(r().mark((function n(t){var e;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.mins=parseInt(t.total_mins)%60,t.hours=Math.floor(parseInt(t.total_mins)/60),(e=document.createElement("div")).innerText=t.description,t.description=e.innerHTML.replaceAll("<br>","</div><div>"),n.next=7,fetch(a.backend+"./translate-user-ids",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_ids:t.leads})}).then(function(){var n=(0,i.Z)(r().mark((function n(e){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.json();case 2:t.leads=n.sent;case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}());case 7:return e.innerText=t.leads.join(", "),t.leads=e.innerHTML.replaceAll("<br>","</div><div>"),n.abrupt("return",'<section>\n  <div class="image-container">\n    <img src="'.concat(t.picture,'">\n  </div>\n  <div class="info-container" style="--img-url:url(\'').concat(t.picture,"')\">\n    <h2>").concat(t.initiative_name,'</h2>\n    <div class="leads">Leads: ').concat(t.leads,'</div>\n    <div class="stats">\n      <div class="participants"><img src="./static/person-icon.png" alt="Participants">\n        <span>').concat(t.total_participants," volunteer").concat(t.total_participants>1?"s":"",'</span>\n      </div>\n      <div class="hours"><img src="./static/clock-icon.png" alt="Time Spent">\n        <span>').concat(t.hours||t.mins," ").concat(t.hours?"hour"+t.hours>1?"s":"":"min"+t.mins>1?"s":"",'</span>\n      </div>\n    </div>\n    <div class="description">\n      <div>').concat(t.description,"</div>\n    </div>\n  </div>\n</section>"));case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()),Promise.all(t).then((n=>(0,a.$)(".content")[0].innerHTML+=n.join("\n")));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}())},198:()=>{}},n=>{var t=t=>n(n.s=t);t(198),t(947)}]);