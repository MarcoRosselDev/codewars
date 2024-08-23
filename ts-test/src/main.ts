import './style.css'
//import findUni from "./test.ts";
function isPrime(num:number):boolean {
  //TODO
  if (num === 2) {
    return true
  }
  if (num <= 1 || num % 2 === 0) {
    return false
  }
  const arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499]
  const squareInt = Math.floor(Math.sqrt(num))
  console.log(squareInt);
  let f = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > squareInt) {
      break
    }
    f.push(arr[i])
  }
  console.log(f);
  const comprovation = f.map(item => num % item === 0? true: false)
  console.log(comprovation);

  if (comprovation.every(i => i === false)) {
    return true
  }
  return false
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <p class="read-the-docs">
    ${isPrime(75)}
    ${isPrime(212521)}
    </p>
  </div>
`