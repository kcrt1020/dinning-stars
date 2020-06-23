//숫자데이터 입력받으면 검정별을 숫자데이터만큼 찍기 + 공백은 텅빈별찍기
function rankToStar(rank){
    switch(rank){
        case 5 : 
            stars = "★★★★★"
            break;
        case 4 : 
            stars = "★★★★☆"
            break;
        case 3 : 
            stars = "★★★☆☆"
            break;         
        case 2 : 
            stars = "★★☆☆☆"
            break;           
        case 1 : 
            stars = "★☆☆☆☆"
            break;                
        default :  stars = "☆☆☆☆☆"        
    }
    return stars;
}

//유저별 작은 테이블만들기
function userTable(username, menu, price, rank){
    let ultag = "<div class = 'table'>"
    ultag += "<p><strong>" + username +"'s review </strong></p>"
    ultag += "<ul>"
    ultag += "<li class='menu'> Menu : " + menu + "</li>"
    ultag += "<li class='price'> Price : " + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</li>"
    ultag += "<li class='rank'> rank : " + rankToStar(rank) + "</li>"
    ultag += "</ul>"
    ultag += "</div>"
    return ultag;
}

//유저테이블을 담는 큰 테이블만들기 첫번째 방법
function makeReviewTable(shopname, mapaddr, imgaddr, menu1, price1, rank1, menu2, price2, rank2, date){
    let divtag = "<div class='restaurant'>";
    divtag += "<h2> <a href='" + mapaddr +"'>" + shopname + "</a></h2>";
    divtag += "<img src = '" + imgaddr + "'>"
    divtag += userTable("Ran", menu1, price1, rank1)
    divtag += userTable("Won", menu2, price2, rank2)
    divtag += "<div class='date'>" + date + "</div>"
    divtag += "</div>"
    return divtag;
}


// //이미지슬라이드
// //참고링크 : https://nine8007.tistory.com/entry/%EC%B4%88%EA%B0%84%EB%8B%A8-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0-Javascript
// let firstImg = document.getElementsByClassName('img')[0]
// let imgArr = [] //이미지여러개넣기
// let imgIndex = 0;

// function imgslide(){
//     firstImg.setAttribute("src",firstImg[imgIndex]);
//     imgIndex++;
//     if(imgIndex >= imgArr.length){
//         imgIndex =0;
//     }
// }

// setInterval(imgslide, 3000);



//실제데이터 : shopname, mapaddr, imgaddr,  menu1, price1, rank1, menu2, price2, rank2, date
document.write(makeReviewTable("각방", "http://naver.me/5LfKibcx", "http://blogfiles.naver.net/MjAxOTEyMDNfMTM4/MDAxNTc1MzM2NzQwNzEx.HB8dI7Z7-hlkGiURrRdzb4K7dlOZCCvxMNoxD-biydog.BmOh3STZ40M-vr7dcgW10MyxMTy6LXBGnphJCl72764g.JPEG.lovefts777/IMG_9915.JPG", "연어덮밥",  9000, 4, "소고기덮밥",  8000, 3, "2020-06-09"))
document.write(makeReviewTable("갈비3선(구 서면대포집)", "http://naver.me/xrh6JnL3", "img/20200612.jpg", "돼지갈비찜정식",  10900, 4, "돼지갈비찜정식",  10900, 4, "2020-06-12"))
document.write(makeReviewTable("맥도날드 서면3호점", "http://naver.me/xFQLgBF5", "img/20200616.jpg", "트리플치즈버거",  7900, 5, "베이컨토마토디럭스",  7800, 4, "2020-06-16"))
document.write(makeReviewTable("에그드랍 전포카페거리", "http://naver.me/G3tKAIWF", "img/20200619eggdrop.jpg", "베이컨더블치즈",  7900, 4, "갈릭베이컨치즈",  8400, 5, "2020-06-19"))
document.write(makeReviewTable("오쉐르웨딩홀 뷔페", "http://naver.me/xKJZDTrV", "img/20200623buffet1.jpg", "까르보나라,<br>목살스테이크",  9900, 5, "까르보나라, <br>목살스테이크",  9900, 5, "2020-06-23"))


//예시
//document.write(makeReviewTable("예시", "#", "20200612.jpg", "음식메뉴",  10000, 1, "음식메뉴",  100000, 2, "2020-06-12"))
