'use strict';
const mainSpace = document.getElementById('main-space');
const childSpace = document.getElementById('child-space');
const writeButton = document.getElementById('write-button');
const inputMonth = document.getElementById('input-month');
const inputDay = document.getElementById('input-day');
const inputfp = document.getElementById('input-fp');
const secondChildSpace = document.getElementById('second-child-space');

//結果に選ばれた言葉を格納する
let itsuResult;
let daredeResult;
let dokoniitteResult;
let naniwoshimashitaResult;
let doudeshitaResult;
//絵の位置ごとにクラスを取得
const rightTop = document.getElementsByClassName('right-top');
const centerLeftPerson = document.getElementsByClassName('center-left-person');
const rightBottm = document.getElementsByClassName('right-bottom');
const leftBottom = document.getElementsByClassName('left-bottom');
const centerTop = document.getElementsByClassName('center-top');
//絵のid
const meArt = document.getElementById('me-art');
const moonArt = document.getElementById('moon-art');
const taiyoArt = document.getElementById('taiyo-art');
const okaasandeArt = document.getElementById('okaasande-art');
const otousandeArt = document.getElementById('otousande-art');
const gohanArt = document.getElementById('gohan-art');
const hogaOjiArt = document.getElementById('hoga-oji-art');
const sinsekiArt = document.getElementById('sinseki-art');
const suizokuArt = document.getElementById('suizoku-art');
const tanoshiArt = document.getElementById('tanoshi-art');
const motorshowArt = document.getElementById('motorshow-art');
const santyouArt = document.getElementById('santyou-art');
const tikasuimyakuArt =document.getElementById('tikasuimyaku-art');
const sleepArt = document.getElementById('sleep-art');
const danceArt = document.getElementById('dance-art');
const balanceArt = document.getElementById('balance-art');
const sleepyArt = document.getElementById('sleepy-art');
const fullArt = document.getElementById('full-art');
const tomorrowArt = document.getElementById('tomorrow-art');
//文章の中身
const line1 = document.getElementById('line1Content');
const line2 = document.getElementById('line2Content');
const line3 = document.getElementById('line3Content');
const line4 = document.getElementById('line4Content');
const line5 = document.getElementById('line5Content');
const line6 = document.getElementById('line6Content');


//配列の宣言

const itsu = [
    ['きょうは、',taiyoArt],
    ['あつかった日に、',taiyoArt],
    ['さっき、',taiyoArt],
    ['たんじょうびに、',taiyoArt],
    ['せかいがおわる日、',moonArt],
    ['きのうの晩、',moonArt]
]
const darede = [
    ['おかあさんで、',okaasandeArt],
    ['おとうさんで、',otousandeArt],
    ['しんせきのひとたちで、',sinsekiArt],
    ['ほがらかなおじさんで、',hogaOjiArt]
]
const dokoniitte = [
    ['すいぞくかんにいって',suizokuArt],
    ['モーターショーにいって',motorshowArt],
    ['さんちょうにいって',santyouArt],
    ['ちかすいみゃくにいって',tikasuimyakuArt]
]
const naniwoshimashita = [
    ['ごはんを食べました。',gohanArt],
    ['たっぷり寝ました。',sleepArt],
    ['おどりました。',danceArt],
    ['バランスをとるれんしゅうをしました。',balanceArt]
]
const doudeshita = [
    ['たのしかったです。',tanoshiArt],
    ['ねむくなってしまいました。',sleepyArt],
    ['おなかいっぱいです。',fullArt],
    ['あしたのことをかんがえました。',tomorrowArt]
]

/*
const test = document.createElement('h3');
test.innerText = 'testだよ';
mainSpace.appendChild(test);
*/

writeButton.onclick = () => {
    console.log('押された');
    const month = inputMonth.value;
    const day = inputDay.value;
    const im = inputfp.value + 'と';
    if(month.length === 0 || day.length === 0 || inputfp.value.length === 0){
        //入力が空の時は処理を終了する
        console.log('空です');
        return;
    }
    //子要素を削除
    childSpace.remove();
    //二画面目の子要素を表示
    secondChildSpace.style.display = 'flex';

    //ランダムに選ばれた分を変数に格納
    itsuResult = ranElement(itsu);
    daredeResult = ranElement(darede);
    dokoniitteResult = ranElement(dokoniitte);
    naniwoshimashitaResult = ranElement(naniwoshimashita);
    doudeshitaResult = ranElement(doudeshita);
    //文章を表示
    line6.innerText= month + '月' + day + '日';
    line5.innerText = itsuResult[0] + im;
    line4.innerText = daredeResult[0];
    line3.innerText = dokoniitteResult[0];
    line2.innerText = naniwoshimashitaResult[0];
    line1.innerText = doudeshitaResult[0];
    //画像を表示
    visibleArt(itsuResult);
    visibleArt(daredeResult);
    visibleArt(dokoniitteResult);
    visibleArt(naniwoshimashitaResult);
    visibleArt(doudeshitaResult);
    //test
    //console.log(itsu[0][1]);
   
    console.log(itsuResult);
    console.log(daredeResult);
    console.log(dokoniitteResult);
    console.log(naniwoshimashitaResult);
    console.log(doudeshitaResult);
}

/**
 * @param {string} 配列名
 * @return {element} 配列の長さまでの範囲のランダムな要素を返す 
 */

function ranElement(arrayName){
    const arrayLength = arrayName.length;
    let selectedWord;
    selectedWord = arrayName[Math.floor(Math.random()*arrayLength)];
    console.log('selectedWord:' + selectedWord);
    return selectedWord;
}

/**
 * 引数に選ばれた単語を受け取ってスタイルをビジブルにする
 */

function visibleArt(selectedElement){
    selectedElement[1].style.visibility = 'visible';
}

//右上の言葉を渡すと絵の情報が帰ってくる
//配列の何番目なのかを判明させてその添え字で表示する絵を決定したい



//テスト  visibility: visible;
/*console.log(getArtIdName(rightTop));
getArtIdName(rightTop).style.visibility = 'visible';
*/

/**
 * TODO ツイートボタン
 * TODO　画像サイズの調整
 * TODO　ツイートボタンにスクショをつける
 * TODO　夏休み期間外や半角数字以外ではエラーを出す
 * TODO　一人称に半角英数を受け付けない
 * TODO　薄い絵を濃く書き直す
 * TODO　文字を大きくする
 * TODO 絵日記の線を整える
 *　TODO ファビコン
 */