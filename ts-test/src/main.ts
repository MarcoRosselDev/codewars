import './style.css'
//import findUni from "./test.ts";

function reverse(str:string):string {
  return str.split("").reverse().join("")
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <p class="read-the-docs">
    ${reverse("me gusta programar")}
    </p>
  </div>
`