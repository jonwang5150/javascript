const element = document.querySelector("h1");
console.log(element);

//更改本文
element.innerText = element.innerText;
//更改HTML
element.innerHTML = `<span style="color:b">${element.innerText}</span>`

const dateEl = document.querySelector("h3 .date"); //或是"span.date"
dateEl.innerText = "2023/4/6";
console.log(dateEl);


const dateEls = document.querySelectorAll(".date");
console.log(dateEls);
dateEls.forEach(x => x.innerText = getToday());
dateEls[0].innerHTML = ""  //.remove()也可以

// 取得今天日期
function getToday() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1; // 月份從0開始算,所以要加1
    let date = today.getDate();

    return `${year}/${month}/${date}`
}


// const startEl = document.querySelector("#start");
// console.log(startEl);
// startEl.innerText = "開獎!";

// startEl.addEventListener("click", lottoClick);
// startEl.addEventListener("click", () => { alert("開獎中!"); }) 簡單函式寫法


function lottoClick() {
    let lottos = [];
    const lottoEl = document.querySelector(".lotto-number ul");
    lottoEl.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        lotto = getlotto(start, end);
        lottos.push(lotto);
    }

    for (let i = 0; i < lottos.length; i++) {
        lottoEl.innerHTML += (`<li style=${i % 2 == 0 ? "color:red" : "color:blue"}>${lottos[i].join(",")}</li>`)
    }

}