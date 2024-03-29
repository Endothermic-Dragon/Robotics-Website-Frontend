import { $, backend } from "./global.js";
let count = 1;
function addStudentRow(e) {
  count++;
  e.preventDefault();
  const subform = `
  <input type="text" placeholder="Full Name" required><br>
  <input type="email" placeholder="Email" required><br>
  <select>
    <option value="-" disabled selected>Department NA</option>
    <option value="documentation">Documentation</option>
    <option value="finance">Finance</option>
    <option value="pr">Public Relations</option>
    <option value="carpentry">Carpentry</option>
    <option value="design">Design</option>
    <option value="electrical">Electrical</option>
    <option value="mechanical">Mechanical</option>
    <option value="programming">Programming</option>
    <option value="safety">Safety</option>
    <option value="strategy">Strategy</option>
  </select><br>
  <input type="checkbox" id="new-student-${count}">
  <label for="new-student-${count}"> New student</label><br>
  <input type="checkbox" id="mentor-${count}">
  <label for="mentor-${count}"> Mentor</label><br>
  `;
  let newDiv = document.createElement("div");
  let button = document.createElement("button");

  button.classList.add("remove-row");
  button.innerText = "Remove student row";
  button.addEventListener("click", removeStudentRow);

  let hr = document.createElement("hr");

  newDiv.innerHTML = subform;
  newDiv.appendChild(button);

  $("form")[0].insertBefore(hr, [...$("form")[0].children].at(-3));
  $("form")[0].insertBefore(newDiv, [...$("form")[0].children].at(-3));
}

function removeStudentRow(e) {
  e.preventDefault();
  e.target.parentElement.previousSibling.remove();
  e.target.parentElement.remove();
}

async function submitForm(e) {
  e.preventDefault();
  $("[type='submit']")[0].disabled = true;
  let searches = [];
  let departments = [];
  let tags_s = [];
  $("form > div").forEach((el) => {
    searches.push(
      el.querySelector("input").value +
        " " +
        el.querySelector("[type='email']").value
    );
    departments.push(el.querySelector("select").value);
    let tags = [];
    el.querySelector("[id^='mentor']").checked && tags.push("mentor");
    el.querySelector("[id^='new-student']").checked && tags.push("new");
    tags_s.push(tags);
  });

  let code = await crossFetch();
  fetch(backend + "./add-users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code: code,
      searches: searches,
      departments: departments,
      tags_s: tags_s,
      session_token: localStorage.getItem("session-token"),
    }),
  }).then(() => {
    window.location.href = "all-students.html";
  });
}

// body: JSON.stringify({
//   "code": code,
//   "searches": ["Eshaan Debnath debnathe@htps.us", "Adhithi Rajesh rajeshad@htps.us"],
//   "department": "Programming",
//   "tags": "returning-student",
// })

function crossFetch() {
  return new Promise((resolve) => {
    const client = google.accounts.oauth2.initCodeClient({
      client_id:
        "672955273389-tc6i17ics6qv7sh6g7m597fi30ic0ljq.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/contacts.readonly",
      ux_mode: "popup",
      callback: (res) => {
        resolve(res.code);
      },
    });

    client.requestCode();
  });
}

$(".add-another-student")[0].on("click", addStudentRow);
$(".remove-row")[0].on("click", removeStudentRow);
$("form")[0].on("submit", submitForm);
