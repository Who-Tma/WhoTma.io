
let LoadingPage = document.getElementById('LoadingPage');
let LoadingPicShow = document.getElementById('LoadingPage-Pic');
let MaxLodingDiv = document.getElementById('MaxLodingDiv');
let MidLodingDiv = document.getElementById('MidLodingDiv');
let LoadingTextP = document.getElementById("LoadingTextP");
let ClickBtnLoadingPAge = document.getElementById('ClickBtnLoadingPAge');
let UserInfo = document.getElementById('UserInfo');
 const tg = window.Telegram.WebApp;
 const user = tg.initDataUnsafe?.user;







if(user){

     UserInfo.innerText = `Telegram id : ${user.id} , First Name : ${user.first_name} , user name : ${user.username} and premium chek : ${user.is_premium}`;
 }








// loading -imgs
let LoadingPage_Pics = [
    Flying_pic = './loading_page-Pics/Loading-Flying.png',
    HomeOnJungle_pic = './loading_page-Pics/Loading-HomeOnJungle.png',
    TypingBack_pic = './loading_page-Pics/Loading-TypingBack.png',
    TypingFront_pic = './loading_page-Pics/Loading-TypingFront.png',
    WalkingOnStreet_pic = './loading_page-Pics/Loading-WalkingOnStreet.png',
    WatchingClock_pic = './loading_page-Pics/Loading-WatchingClock.png',
    WatchingLancer_pic = './loading_page-Pics/Loading-WatchingLancer.png',
]
let PicsCounter = LoadingPage_Pics.length;
let RandomPicSelect = Math.floor(Math.random() * PicsCounter);

//loading -matn
let LoadingPage_words_En = [
    'Do you really think you know yourself?',
    'Every story begins with a question',
    'Maybe everything begins right now...',
    'One day, in a small wooden cabin...',
    'Every greate idea was once just a question mark.',
    'What would you do if you werent afraid...?',
    'What makes you limit yourself?',
    'Who said life has to stay this way?',
    'Maybe you havent reached the best chapter of your life yet.',
    'Some answers arent written in any book.',
    'Sometimes one decision change the whole story.',
    'Some doors open only to curiosity.',
    'Maybe your future is wating for one small decision.',
    'Maybe this inst just a game...',
    'You havent even read the first page yet...',


]
let MatnCounter = LoadingPage_Pics.length;
let RandomMatnSelect = Math.floor(Math.random() * MatnCounter);
let MatnOk = LoadingPage_words_En[RandomMatnSelect];

document.addEventListener('DOMContentLoaded', () => {
    LoadingTextP.innerText = `${MatnOk}`;
    LoadingPicShow.style.backgroundImage = `url('${LoadingPage_Pics[RandomPicSelect]}')`;
    setTimeout(() => {




        setTimeout(() => {


            for (i = 0; i <= 30; i++) {
                MidLodingDiv.style.width = `${i}%`
                // console.log(i);

            };


            setTimeout(() => {
    
    
                for (i = 0; i <= 68; i++) {
                    MidLodingDiv.style.width = `${i}%`
                    // console.log(i);
    
                };
    
    
                setTimeout(() => {
        
        
                    for (i = 0; i <= 100; i++) {
                        MidLodingDiv.style.width = `${i}%`
                        // console.log(i);
        
                    };
        
        
                    setTimeout(() => {
                        MaxLodingDiv.style.display = 'none';
                        setTimeout(() => {
                            ClickBtnLoadingPAge.style.display = 'flex';
                            document.addEventListener('click', () => {
                                console.log('Click');
                                // alert('Clicked with user')
                                LoadingPage.classList = 'LoadingPageSecAnim';
                                setTimeout(() => {
                                    LoadingPage.style.display = 'none';
                                }, 1400)
                            })
                        }, 500)
                    }, 2000)
                }, 500)
            }, 1500)
        }, 1000)

    }, 3000)
})

