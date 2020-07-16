let request;
let selectedCategory = 'politics';
let xml;

const categories = ['정 치', '경 제', '사 회', '국 제', '문 화', '연 예', '스 포 츠'];
const categoriesEN = ['politics', 'economy', 'society', 'international', 'culture', 'entertainment', 'sports']

const category_list = document.querySelector('.categoryList');
const contents = document.querySelector('.contents');
const paging = document.querySelector('.paging');

for(let i = 0; i < categories.length; i++){ // 상단에 카테고리 생성
    const li = document.createElement('li');

    li.innerHTML = categories[i];
    li.id = categoriesEN[i]

    li.addEventListener('click', changeCategory);
    
    category_list.appendChild(li);
    
    category_list.firstChild.nextSibling.style.color = 'yellow';
}

function changeCategory(event){ // 카테고리 변경 시
    event.preventDefault();

    while(paging.firstChild) {
        paging.removeChild(paging.firstChild);
    }

    selectedCategory = event.target.id;

    for(let i = 0; i < category_list.children.length; i++){
        category_list.children[i].style.color = '';
    }

    event.target.style.color = 'yellow';

    viewNews(selectedCategory);
}

function viewNews(category){
    if(!window.XMLHttpRequest){ // IE7.0이하에는 없음
        request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    else{
        request = new XMLHttpRequest();
    }
    request.open('GET', `http://fs.jtbc.joins.com//RSS/${category}.xml`, true);
    
    request.onreadystatechange = function(aEvt) {
        if(request.readyState == 4){ // 통신 완료
            if(request.status == 200){ // 데이터 정상 수신
                myParse(this);
            }
            else{
                alert('전송실패')
            }
        }
    };
    
    request.send(null);
}

function myParse(data){ // 전달 받은 데이터 처리
    xml = data.responseXML;
    let item = xml.getElementsByTagName('item');

    divideNews(xml, 0);

    makePaging(item.length);
}

function divideNews(xml, pagingNum){ // 뉴스 4개씩 묶어서 보여주기
    const num = (pagingNum * 4) + 1;

    for(let i = num; i < num + 4; i++){ // 1, 2, 3, 4
        contents.children[(i - 1) % 4].children[0].innerHTML = xml.getElementsByTagName('title')[i].childNodes[0].nodeValue;
        contents.children[(i - 1) % 4].children[1].innerHTML = xml.getElementsByTagName('description')[i].childNodes[0].nodeValue + '...';
        contents.children[(i - 1) % 4].children[2].innerHTML = '상세보기 이동 : ' + xml.getElementsByTagName('link')[i].childNodes[0].nodeValue;
        contents.children[(i - 1) % 4].children[2].href = xml.getElementsByTagName('link')[i].childNodes[0].nodeValue;
    }
}

function selectPage(event){ // paging 버튼 클릭 시
    divideNews(xml, event.target.id);

    for(let i = 0; i < paging.children.length; i++){
        paging.children[i].style.background = '';
    }

    event.target.style.background = 'blue';
}

function makePaging(num){ // 하단에 페이징 버튼 생성하기
    const pagingNum = Math.ceil(num / 4);

    for(let i = 0; i < pagingNum; i++){
        const button = document.createElement('button');

        button.innerHTML = i + 1;
        button.id = i;
        button.addEventListener('click', selectPage);

        paging.appendChild(button);
    }

    paging.firstChild.style.background = 'blue';
}

viewNews(selectedCategory);