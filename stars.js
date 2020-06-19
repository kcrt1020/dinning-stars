//const reviewTopen = document.createElement("div")
//const reviewTclose = document.createElement("/div")

//const reviewTopen = document.createElement("div")
//const reviewTclose = document.createElement("/div")

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


// //유저테이블을 담는 큰 테이블만들기+작은테이블 한꺼번에 만들기 ->  function으로 리팩토링
// function makeShowReview(shopname, mapaddr, imgaddr, menu1, price1, rank1, menu2, price2, rank2, date){

//     let divtag = "<div class='restaurant'>";
//     divtag += "<h2> <a href='" + mapaddr +"'>" + shopname + "</a> </h2>";
//     divtag += "<img src = '" + imgaddr + "'>"

//     divtag += "<div class = 'table'>"
//     divtag += "<p><strong> Ran's review </strong> </p>"
//     divtag += "<ul>"
//     divtag += "<li class='menu'> Menu : " + menu1 + "</li>"
//     divtag += "<li class='price'> Price : " + price1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원 </li>"
//     divtag += "<li class='rank'> Rank : " + rankToStar(rank1) + "</li>"
//     divtag += "</ul>"
//     divtag += "</div>"

//     divtag += "<div class = 'table'>"
//     divtag += "<p><strong> Won's review </strong></p>"
//     divtag += "<ul>"
//     divtag += "<li class='menu'> Menu : " + menu2 + "</li>"
//     divtag += "<li class='price'> Price : " + price2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원 </li>"
//     divtag += "<li class='rank'> Rank : " + rankToStar(rank2) + "</li>"
//     divtag += "</ul>"
//     divtag += "</div>"

//     divtag += "<div class='date'>" + date + "</div></div>"
   
//     return divtag;
// }
// document.write(makeShowReview("갈비3선(구 서면대포집)", "http://naver.me/xrh6JnL3", "20200612.jpg", "돼지갈비찜정식",  10900, 3, "돼지갈비찜정식",  10900, 0, "2020-06-12"))


//실제데이터 : shopname, mapaddr, imgaddr,  menu1, price1, rank1, menu2, price2, rank2, date
document.write(makeReviewTable("각방", "http://naver.me/5LfKibcx", "http://blogfiles.naver.net/MjAxOTEyMDNfMTM4/MDAxNTc1MzM2NzQwNzEx.HB8dI7Z7-hlkGiURrRdzb4K7dlOZCCvxMNoxD-biydog.BmOh3STZ40M-vr7dcgW10MyxMTy6LXBGnphJCl72764g.JPEG.lovefts777/IMG_9915.JPG", "연어덮밥",  9000, 4, "소고기덮밥",  8000, 3, "2020-06-09"))
document.write(makeReviewTable("갈비3선(구 서면대포집)", "http://naver.me/xrh6JnL3", "20200612.jpg", "돼지갈비찜정식",  10900, 4, "돼지갈비찜정식",  10900, 4, "2020-06-12"))
document.write(makeReviewTable("맥도날드 서면3호점", "http://naver.me/xFQLgBF5", "20200616.jpg", "트리플치즈버거",  7900, 4, "베이컨토마토디럭스",  7800, 4, "2020-06-16"))

//예시
document.write(makeReviewTable("예시", "#", "20200612.jpg", "정식",  10000, 1, "정식",  100000, 2, "2020-06-12"))
