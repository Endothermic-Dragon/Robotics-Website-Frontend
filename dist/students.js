"use strict";(self.webpackChunkoutreach_website_frontend=self.webpackChunkoutreach_website_frontend||[]).push([[662],{700:(e,t,n)=>{var a=n(390),r=n(117),s=n.n(r),c=n(508);fetch(c.backend+"./users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({session_token:localStorage.getItem("session-token")})}).then(function(){var e=(0,a.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200==t.status){e.next=3;break}return alert("Error ".concat(t.status,"\n").concat(t.statusText)),e.abrupt("return");case 3:return e.next=5,t.json();case 5:t=(t=e.sent).map((e=>(e.hours=Math.floor(parseInt(e.initiative_mins)/60),e.mins=parseInt(e.initiative_mins)%60,'<tr data-user_id="'.concat(e.user_id,'">\n      <td>\n        <div><img src="').concat(e.profile_picture,'"> ').concat(e.name,'</div>\n        <div><a href="mailto:').concat(e.email,'" target="blank">').concat(e.email,"</a></div>\n      </td>\n      <td>").concat(e.department_name,"</td>\n      <td>").concat(e.hours,":").concat(e.mins,"</td>\n      <td>").concat(e.tags.join(", "),'</td>\n      <td><input type="checkbox"></td>\n    </tr>')))).join("\n"),console.log(t),(0,c.$)("tbody").innerHTML+=t,(n=1==(n=(0,c.$)("input[type='checkbox']")).length?[n]:n).forEach((e=>e.parentElement.addEventListener("click",(t=>{t.target!=e&&(e.checked=!e.checked)}))));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),(0,c.$)(".delete-users button").addEventListener("click",(()=>{var e=(0,c.$)("input[type='checkbox']");e=(e=1==e.length?[e]:e).filter((e=>e.checked)),fetch(c.backend+"./delete-users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({session_token:localStorage.getItem("session-token"),user_ids:e.map((e=>e.parentElement.parentElement.dataset.user_id))})}).then(location.reload())}))},684:()=>{}},e=>{var t=t=>e(e.s=t);t(684),t(700)}]);