"use strict";(self.webpackChunkoutreach_website_frontend=self.webpackChunkoutreach_website_frontend||[]).push([[499],{438:(e,t,n)=>{var o=n(390),r=n(117),a=n.n(r),i=n(508);function l(e){e.preventDefault(),e.target.parentElement.previousSibling.remove(),e.target.parentElement.remove()}function c(){return(c=(0,o.Z)(a().mark((function e(t){var n,o,r,l,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(0,i.$)("[type='submit']").disabled=!0,n=[],o=[],r=[],l=1==(0,i.$)("form > div").length?[(0,i.$)("form > div")]:(0,i.$)("form > div"),console.log(l),l.forEach((e=>{n.push(e.querySelector("input").value+" "+e.querySelector("[type='email']").value),o.push(e.querySelector("select").value);var t=[];e.querySelector("#mentor").checked&&t.push("mentor"),e.querySelector("#new-student").checked&&t.push("new"),r.push(t)})),e.next=10,new Promise((e=>{google.accounts.oauth2.initCodeClient({client_id:"672955273389-bc25j23ds73qgp7ukroaloutv2a22qjv.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/contacts.readonly",ux_mode:"popup",callback:t=>{e(t.code)}}).requestCode()}));case 10:c=e.sent,fetch(i.backend+"./add-users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:c,searches:n,departments:o,tags_s:r,session_token:localStorage.getItem("session-token")})}).then((e=>console.log(e)));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,i.$)(".add-another-student").addEventListener("click",(function(e){e.preventDefault();var t=document.createElement("div"),n=document.createElement("button");n.classList.add("remove-row"),n.innerText="Remove student row",n.addEventListener("click",l);var o=document.createElement("hr");t.innerHTML='\n  <input type="text" placeholder="Full Name" required><br>\n  <input type="email" placeholder="Email" required><br>\n  <select>\n    <option value="default" disabled selected>Department</option>\n    <option value="documentation">Documentation</option>\n    <option value="finance">Finance</option>\n    <option value="pr">Public Relations</option>\n    <option value="carpentry">Carpentry</option>\n    <option value="design">Design</option>\n    <option value="electrical">Electrical</option>\n    <option value="mechanical">Mechanical</option>\n    <option value="programming">Programming</option>\n    <option value="safety">Safety</option>\n    <option value="strategy">Strategy</option>\n  </select><br>\n  <input type="checkbox" id="new-student">\n  <label for="new-student"> New student</label><br>\n  <input type="checkbox" id="mentor">\n  <label for="mentor"> Mentor</label><br>\n  ',t.appendChild(n),(0,i.$)("form").insertBefore(o,[...(0,i.$)("form").children].at(-3)),(0,i.$)("form").insertBefore(t,[...(0,i.$)("form").children].at(-3))})),(0,i.$)(".remove-row").addEventListener("click",l),(0,i.$)("form").addEventListener("submit",(function(){return c.apply(this,arguments)}))},458:()=>{}},e=>{var t=t=>e(e.s=t);t(458),t(438)}]);
