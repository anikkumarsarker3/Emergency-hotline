// console.log('connected')
let copyCount = 0;
let heartCount = 0;
const btnCopy = document.getElementsByClassName('copy-btn');
for (const btn of btnCopy) {
    btn.addEventListener('click', function () {
        const hotNum = btn.parentNode.parentNode.children[2].children[0].innerText;

        navigator.clipboard.writeText(hotNum).then(() => {
            alert("Copied: " + hotNum);
        });
        copyCount++;
        document.getElementById('copy-count-board').innerText = copyCount;
    })
}

const btnCall = document.getElementsByClassName('btn-call');
for (const btn of btnCall) {
    btn.addEventListener('click', function () {
        const Coin = Number(document.getElementById('coin-board').innerText);
        if (Coin >= 20) {
            document.getElementById('coin-board').innerText = (Coin - 20);
            const serviceTitle = btn.parentNode.parentNode.children[1].children[0].innerText;
            alert('📞 Calling ' + serviceTitle + '...');
            const hotNum = btn.parentNode.parentNode.children[2].children[0].innerText;
            const callHis = document.getElementById('call-history');
            const div = document.createElement('div');
            const time = new Date().toLocaleTimeString();
            console.log(time)
            div.innerHTML=`<div class="bg-gray-100 p-3 rounded-lg flex justify-between items-center mt-3">
                        <div class="">
                            <p class="text-[18px] font-semibold ">${serviceTitle}</p>
                            <p>${hotNum}</p>
                        </div>
                        <p>${time}</p>

                    </div>`

            callHis.appendChild(div);
        }
        else {
            alert('❌ Not Enough coin found')
        }

    })
}



const btnHeart = document.getElementsByClassName('heart-btn');
for (const btn of btnHeart) {
    btn.addEventListener('click', function () {
        heartCount++;
        document.getElementById('heart').innerText = heartCount;
    })
}



document.getElementById('clear-btn').addEventListener('click', function(){
    const callHis = document.getElementById('call-history');
    callHis.innerHTML='';

})
