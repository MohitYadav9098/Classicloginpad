// function contentText() {
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Babbar";
// }
// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click', contentText);
// let paras = document.querySelectorAll('p');

// function alertpara(event) {
//     alert("You have clicked on " + event.target.textContent);
// }
// for (let i = 0; i < paras.length; i++) {
//     let para = paras[i];
// let mydiv = document.getElementById('wrapper');
// document.addEventListener('click', alertpara);
const t1 = performance.now();
for (let i = 0; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    document.body.appendChild(para);
}
const t2 = performance.now();
console.log("The time taken by code1 is " + (t2 - t1));
const t3 = performance.now();
let mydiv = document.createElement('div');
for (let i = 0; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
const t4 = performance.now();
console.log("the time taken by code2 is " + (t4 - t3));