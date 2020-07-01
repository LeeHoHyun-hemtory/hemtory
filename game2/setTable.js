const table = document.querySelector('.table');

let isGenRandomNum = true;

function setTable(){
    let temp = 0;

    for(let i = 0; i < 25; i++){
        if(i % 5 === 0){
            temp += 1;

            const trTemp = document.createElement('tr');
            trTemp.id = `tr${temp}`;
            table.appendChild(trTemp);
        }

        const tr = document.querySelector(`#tr${temp}`);
        const tdTemp = document.createElement('td');
        tdTemp.id = `td${i}`;
        tr.appendChild(tdTemp);
    }
}

function genRandomNum(){
    const numArr = [];
    const num = 25

    document.querySelector('.table').classList.add('setNum');

    if(isGenRandomNum){
        isGenRandomNum = false;

        for(let i = 1; i < num + 1; i++){
            numArr.push(i);
        }
    
        for(var i = 0; i < num ; i++)
        {
            let temp = 0;
            const ranNum = Math.floor(Math.random() * 25);
            temp = numArr[i];
            numArr[i] = numArr[ranNum];
            numArr[ranNum] = temp;
        }
    
        for(let i = 0; i < num; i++){
            document.querySelector(`#td${i}`).innerText = `${numArr[i]}`;
            document.querySelector(`#td${i}`).classList.add('isPlaying');
        }
    }
}

setTable();