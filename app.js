let timesIcon = document.getElementById('timesicon');
let appleIcon = document.getElementById('appleicon');
let menuIcon = document.getElementById('menuicon')
let bagIcon = document.getElementById('bagicon')
let menuLi = document.getElementById('menuli')
let timesLi = document.getElementById('timesli')
let bagLi = document.getElementById('bagli')
let menuNavlink = document.getElementById('menu-Navlink')
let onMenuClick = document.getElementById('onmenuclick')
let mediaScreenHeader = document.getElementById('ms-header')
let mediaWidth = document.getElementById('mediawidth')
let header = document.getElementById('header-id')

function menuClickHandler() {
    if (timesLi.style.display = 'none') {
        menuLi.style.display = 'none '
        timesLi.style.display = 'block'
        bagLi.style.display = 'none'
        menuNavlink.style.display = 'block'
        onMenuClick.style.display = 'none'
        mediaScreenHeader.style.height = 'initial'
        mediaWidth.style.width = '50%'
        header.style.height = '100vh'
    }else{
        menuLi.style.display = 'block '
        timesLi.style.display = 'none'
        bagLi.style.display = 'block'
        onMenuClick.style.display = 'block'
        mediaScreenHeader.style.height = '100%'
        mediaWidth.style.width = 'initial'
        menuNavlink.style.display = 'none'
        header.style.height = 'initial'
    }
}

function timesClickHandler() {
    if (timesLi.style.display = 'block') {
        menuLi.style.display = 'block '
        timesLi.style.display = 'none'
        bagLi.style.display = 'block'
        onMenuClick.style.display = 'block'
        mediaScreenHeader.style.height = 'initial'
        mediaWidth.style.width = 'initial'
        menuNavlink.style.display = 'none'
        header.style.height = 'initial'
    }else{
        menuLi.style.display = 'none '
        timesLi.style.display = 'block'
        bagLi.style.display = 'none'
        onMenuClick.style.display = 'none'
        mediaScreenHeader.style.height = '100%'
        mediaWidth.style.width = '50%'
        menuNavlink.style.display = 'block'
        header.style.height = '100vh'
    }
}

menuIcon.addEventListener('click', menuClickHandler);
timesIcon.addEventListener('click',timesClickHandler);




let shopUl = document.getElementById('shop-ul')
let serviceUl =document.getElementById('service-ul')
let accountUl = document.getElementById('account-ul')
let businessUL = document.getElementById('business-ul')
let educationUl = document.getElementById('education-ul')
let healthcareUl = document.getElementById('healthcare-ul')
let governmentUl = document.getElementById('government-ul')
let valueUl = document.getElementById('values-ul')
let aboutUl = document.getElementById('about-ul')

let shopTitleCaps = document.getElementById('title-caps1');
shopTitleCaps.addEventListener('click', ()=>{
    shopAndLearn();
});

function shopAndLearn() {
    let plus = document.getElementById('plus1');
    let times = document.getElementById('times1')
    if(times.style.display === 'block'){
        plus.style.display = 'block'
        times.style.display = 'none'
        shopUl.style.display = 'none'
    }else{
        plus.style.display = 'none'
        times.style.display = 'block'
        shopUl.style.display = 'block'
    }
}

let appleStoreTItleCaps = document.getElementById('title-caps2')
appleStoreTItleCaps.addEventListener('click', ()=>{
    appleStore()
});

function appleStore() {
    let plus = document.getElementById('plus2');
    let times = document.getElementById('times2')
    if(times.style.display === 'block'){
        plus.style.display = 'block'
        times.style.display = 'none'
        serviceUl.style.display = 'none'
    }else{
        plus.style.display = 'none'
        times.style.display = 'block'
        serviceUl.style.display = 'block'
    }
}

let accountTitleCaps = document.getElementById('title-caps3');
accountTitleCaps.addEventListener('click', ()=>{
    account()
})
function account() {
    let plus = document.getElementById('plus3');
    let times = document.getElementById('times3')
    if(times.style.display === 'block'){
        plus.style.display = 'block'
        times.style.display = 'none'
        accountUl.style.display = 'none'
    }else{
        plus.style.display = 'none'
        times.style.display = 'block'
        accountUl.style.display = 'block'
    }
}

let businessTitleCaps = document.getElementById('title-caps4');
businessTitleCaps.addEventListener('click', ()=>{
    business()
})
function business() {
    let plus = document.getElementById('plus4');
    let times = document.getElementById('times4')
    if(times.style.display === 'block'){
        plus.style.display = 'block'
        times.style.display = 'none'
        businessUL.style.display = 'none'
    }else{
        plus.style.display = 'none'
        times.style.display = 'block'
        businessUL.style.display = 'block'
    }
}

let educationTitleCaps = document.getElementById('title-caps5');
educationTitleCaps.addEventListener('click', ()=>{
    education()
})
function education() {
    let plus = document.getElementById('plus5');
    let times = document.getElementById('times5')
    if(times.style.display === 'block'){
        plus.style.display = 'block'
        times.style.display = 'none'
        educationUl.style.display = 'none'
    }else{
        plus.style.display = 'none'
        times.style.display = 'block'
        educationUl.style.display = 'block'
    }
}

let healthTitleCaps = document.getElementById('title-caps6');
healthTitleCaps.addEventListener('click', ()=>{
    health()
})
function health() {
    let plus = document.getElementById('plus6');
    let times = document.getElementById('times6')
    if(times.style.display === 'block'){
        plus.style.display = 'block'
        times.style.display = 'none'
        healthcareUl.style.display = 'none'
    }else{
        plus.style.display = 'none'
        times.style.display = 'block'
        healthcareUl.style.display = 'block'
    }
}

let governmentTitleCaps = document.getElementById('title-caps7');
governmentTitleCaps.addEventListener('click', ()=>{
    government()
})
function government() {
    let plus = document.getElementById('plus7');
    let times = document.getElementById('times7')
    if(times.style.display === 'block'){
        plus.style.display = 'block'
        times.style.display = 'none'
        governmentUl.style.display = 'none'
    }else{
        plus.style.display = 'none'
        times.style.display = 'block'
        governmentUl.style.display = 'block'
    }
}

let valueTitleCaps = document.getElementById('title-caps8');
valueTitleCaps.addEventListener('click', ()=>{
    value()
})
function value() {
    let plus = document.getElementById('plus8');
    let times = document.getElementById('times8')
    if(times.style.display === 'block'){
        plus.style.display = 'block'
        times.style.display = 'none'
        valueUl.style.display = 'none'
    }else{
        plus.style.display = 'none'
        times.style.display = 'block'
        valueUl.style.display = 'block'
    }
}

let aboutTitleCaps = document.getElementById('title-caps9');
aboutTitleCaps.addEventListener('click', ()=>{
    about()
})
function about() {
    let plus = document.getElementById('plus9');
    let times = document.getElementById('times9')
    if(times.style.display === 'block'){
        plus.style.display = 'block'
        times.style.display = 'none'
        aboutUl.style.display = 'none'
    }else{
        plus.style.display = 'none'
        times.style.display = 'block'
        aboutUl.style.display = 'block'
    }
}