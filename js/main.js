const _supabase = window.supabase.createClient(
    'https://urjecieueimmwrjdognq.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyamVjaWV1ZWltbXdyamRvZ25xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI3NDU2NzEsImV4cCI6MjA5ODMyMTY3MX0.6eEzaqudfWVssEF_JJyZKX579X18s1mxz9hZhtmmw6g'
);
let LoadingPage = document.getElementById('LoadingPage');
let LoadingPicShow = document.getElementById('LoadingPage-Pic');
let MaxLodingDiv = document.getElementById('MaxLodingDiv');
let MidLodingDiv = document.getElementById('MidLodingDiv');
let LoadingTextP = document.getElementById("LoadingTextP");
let ClickBtnLoadingPAge = document.getElementById('ClickBtnLoadingPAge');
let UserInfo = document.getElementById('UserInfo');
let LanSelectorDiv = document.getElementById('LanSelectorDiv');
let engSelectorLan = document.getElementById('engSelectorLan');
let PersionSelectorLan = document.getElementById('PersionSelectorLan');
let LandivsSelector = document.getElementById('Lan-divs-Selector');
let LanSelectorSec = document.getElementById('LanSelectorSec');
let Loadingpage = document.getElementById('Loadingpage');
let LoadingpageIcon = document.getElementById('LoadingpageIcon');
let adsShowing = document.getElementById("adsShowing");
let HomeSec = document.getElementById('HomeSec');
let Carecter_Home = document.getElementById('Carecter_Home');
let CarecterBook_Home = document.getElementById('CarecterBook_Home');
let TapToOpen = document.getElementById('TapToOpen');
let HomePage = document.getElementById('HomePage');
// adsShowing.addEventListener('click',()=>{
//     console.log('OkkkkAds');
// })

 const tg = window.Telegram.WebApp;
 const user = tg.initDataUnsafe?.user;
// const a = user.id;



// Instant-close interstitial ad (no 15s wait).
// Lower CPM: ~50% of reward CPM for both advertiser & publisher.
window.showadsbitvex_init()
  .then(() => alert("Init ad closed"))
  .catch(e => console.error("Init ad error:", e));



// let user = { id: 99998999, first_name: 'aminAzizi2', is_premium: true, username: '@test2' };
const TelId = user.id;
document.addEventListener('DOMContentLoaded', () => {
    async function UserFound() {

        const { UsersInfo2, error3 } = await _supabase
            .from('UsersInfo')
            .upsert({
                id: user.id,
                name: user.first_name,
                premium: user.is_premium,
                username: user.username,


            },
                { onConflict: ['id'] }
            )
            .select()


        let { data: UsersInfo, error } = await _supabase
            .from('UsersInfo')
            .select('*')
            .eq('id', TelId)
            .single();


window.showadsbitvex()
  .then(() => {
    // User watched the ad — give reward here!
    alert("Reward earned!");
  })
  .catch(e => {
    console.error("Ad error:", e);
  });

        console.log(UsersInfo);
        let userid = UsersInfo.id;
        let userfirstname = UsersInfo.name;
        let username = UsersInfo.username;
        let userlevel = UsersInfo.level;
        let userpoint = UsersInfo.point;
        let userseason = UsersInfo.season;
        let Lan_Backend = UsersInfo.language;
        let is_premium = user.is_premium;
        if (UsersInfo) {
            console.log('okk');

            // UserInfo.innerText = `Telegram id : ${userid} , First Name : ${userfirstname} , user name : ${username} , language:${Lan_Backend} , season:${userseason} , Coins:${userpoint} , level:${userlevel}  and premium chek : ${is_premium}`;
        }


        // console.log(UsersInfo);
        // console.log(error);
        console.log(Lan_Backend);



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

        LoadingPicShow.style.backgroundImage = `url('${LoadingPage_Pics[RandomPicSelect]}')`;

        LoadingPicShow.addEventListener("click", () => {
            // console.log('Ok');
        })

        if (Lan_Backend === 'en' || Lan_Backend === 'none') {
            document.dir = 'ltr';

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
            let MatnCounter = LoadingPage_words_En.length;
            let RandomMatnSelect = Math.floor(Math.random() * MatnCounter);
            let MatnOk = LoadingPage_words_En[RandomMatnSelect];


            LoadingTextP.innerText = `${MatnOk}`;
        } else if (Lan_Backend === 'fa') {
            //loading -matn
            document.dir = 'rtl';

            let LoadingPage_words_fa = [
                'واقعاً فکر می‌کنی خودت را می‌شناسی؟',
                'هر داستانی با یک سوال شروع می‌شود',
                'شاید همه چیز از همین الان شروع شود...',
                'روزی در یک کلبه چوبی کوچک...',
                'هر ایده‌ی بزرگی، زمانی فقط یک علامت سوال بوده است.',
                'اگه نمیترسیدی چیکار میکردی...؟',
                'چی باعث میشه خودت رو محدود کنی؟',
                'کی گفته زندگی باید همینجوری بمونه؟',
                'شاید هنوز به بهترین فصل زندگیت نرسیدی.',
                'بعضی جواب‌ها توی هیچ کتابی نوشته نشده.',
                'گاهی یک تصمیم، کل ماجرا را تغییر می‌دهد.',
                'بعضی درها فقط به روی کنجکاو ها باز می‌شوند.',
                'شاید آینده شما در انتظار یک تصمیم کوچک باشد.',
                'شاید این فقط یه بازی نباشه...',
                'تو هنوز صفحه اول رو نخوندی...',
            ]
            let MatnCounterfa = LoadingPage_words_fa.length;
            let RandomMatnSelectfa = Math.floor(Math.random() * MatnCounterfa);
            let MatnOkfa = LoadingPage_words_fa[RandomMatnSelectfa];


            LoadingTextP.innerText = `${MatnOkfa}`;
            console.log(MatnOkfa);
        }

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
                                LoadingPicShow.style.pointerEvents = 'all';

                                ClickBtnLoadingPAge.style.display = 'flex';
                                // LoadingPicShow.addEventListener('click', () => {
                                setTimeout(() => {


                                    LanSelectorSec.style.display = 'flex';
                                    LoadingPicShow.classList = 'loadingPage';
                                    LoadingPicShow.style.backgroundImage = `url('${LoadingPage_Pics[Math.floor(Math.random() * PicsCounter)]}')`;
                                    LoadingTextP.style.display = 'none';
                                    ClickBtnLoadingPAge.style.display = 'none';
                                    LoadingPicShow.style.pointerEvents = 'none';
                                    console.log('M');


                                    // language Cheker
                                    if (Lan_Backend === 'none') {
                                        setTimeout(() => {
                                            LoadingPage.classList = 'LoadingPageSecAnim';
                                            engSelectorLan.addEventListener('click', () => {

                                                async function LanSelectfa() {

                                                    const { LanData, error } = await _supabase
                                                        .from('UsersInfo')
                                                        .update([
                                                            { language: 'en', },
                                                        ])
                                                        .select('*')
                                                        .eq('id', TelId)
                                                        .single();

                                                    LanSelectorSec.style.pointerEvents = 'none';
                                                    LanSelectorDiv.style.display = 'none';
                                                    console.log('OkSelect' + LanData);

                                                } LanSelectfa().then(() => {
                                                    setTimeout(() => {
                                                        console.log('Ok');
                                                        LoadingpageIcon.classList = 'Loadingpage';

                                                        setTimeout(() => {
                                                            window.location.reload();
                                                        }, 800)
                                                    }, 500)
                                                })




                                            })
                                            PersionSelectorLan.addEventListener('click', () => {
                                                console.log("persianSelect");

                                                async function LanSelectfa() {

                                                    const { LanData, error } = await _supabase
                                                        .from('UsersInfo')
                                                        .update([
                                                            { language: 'fa', },
                                                        ])
                                                        .select('*')
                                                        .eq('id', TelId)
                                                        .single();

                                                    LanSelectorSec.style.pointerEvents = 'none';
                                                    LanSelectorDiv.style.display = 'none';
                                                    console.log('OkSelect' + LanData);

                                                } LanSelectfa().then(() => {
                                                    setTimeout(() => {
                                                        console.log('Ok');
                                                        LoadingpageIcon.classList = 'Loadingpage';

                                                        setTimeout(() => {
                                                            window.location.reload();
                                                        }, 800)
                                                    }, 500)
                                                })
                                            })
                                        }, 1400)

                                    } else {
                                        // Home Sec Show
                                        setTimeout(() => {
                                            let typed1 = document.getElementById('typed1');
                                            let typed2 = document.getElementById('typed2');
                                            if (Lan_Backend === 'fa') {

                                                var typed = new Typed(typed1, {
                                                    strings: [`درود ${userfirstname} `, `فکر میکنم وقتشه...`],
                                                    typeSpeed: 100,
                                                    // loop : true,
                                                })
                                                setTimeout(() => {
                                                    Carecter_Home.style.display = 'none';
                                                    var typed = new Typed(typed2, {
                                                        strings: [`این کتاب رو باز کن...`],
                                                        typeSpeed: 100,
                                                        // loop : true,
                                                    })
                                                    CarecterBook_Home.style.display = 'flex';

                                                    setTimeout(() => {
                                                        console.log("now");
                                                        TapToOpen.style.display = 'flex';
                                                        TapToOpen.innerText = 'کلیک کنید';
                                                        HomeSec.addEventListener('click', () => {
                                                            console.log('Tap');
                                                            TapToOpen.style.display = 'none';
                                                            HomePage.style.display = 'flex';

                                                        })
                                                    }, 4000)
                                                }, 6000)
                                            } else if (Lan_Backend === 'en') {

                                                var typed = new Typed(typed1, {
                                                    strings: [`Hi ${userfirstname} `, `I think ...`],
                                                    typeSpeed: 100,
                                                    // loop : true,
                                                })
                                                setTimeout(() => {
                                                    Carecter_Home.style.display = 'none';
                                                    var typed = new Typed(typed2, {
                                                        strings: [`Its time to open this book...`],
                                                        typeSpeed: 100,
                                                        // loop : true,
                                                    })
                                                    CarecterBook_Home.style.display = 'flex';
                                                    setTimeout(() => {
                                                        console.log("now");
                                                        TapToOpen.style.display = 'flex';
                                                        TapToOpen.innerText = 'Tap to Open';

                                                        HomeSec.addEventListener('click', () => {
                                                            console.log('Tap');
                                                            TapToOpen.style.display = 'none';

                                                        })
                                                    }, 4000)
                                                }, 6000)
                                            }
                                        }, 2000)
                                        console.log(`languageOk"${Lan_Backend}"`);
                                        LanSelectorSec.style.pointerEvents = 'none';
                                        LanSelectorDiv.style.display = 'none';
                                        console.log('Ok Start');
                                        setTimeout(() => {
                                            LanSelectorSec.style.display = 'none';
                                            LoadingPage.style.display = 'none';
                                            HomeSec.style.display = 'flex';
                                        }, 1000)
                                    }
                                }, 1500)
                                // })
                            }, 500)
                        }, 2000)
                    }, 500)
                }, 1500)
            }, 500)

        }, 3000)




    } UserFound();
})
