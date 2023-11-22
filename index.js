const btnLeft = document.querySelector('.left')
const btnRight = document.querySelector('.right')
const slider = document.querySelector('.slider')
const content = document.querySelectorAll(".content")



const slidePossition = [0, -16.66, -33.33, -49.98, -66.64, -83.33]
let count = 0
function getPushL () {
    if (count>=0 && count<5) {
        ++count
    }else if (count === 5) {
        count = 0
    }
}
function getPushR () {
    if (count >0 && count<=6) {
        --count
    }else if (count === 0) {
        count = 5
    }
}

let curSlide = 0
function getCurSlide () {
   for (let i = 0; i<slidePossition.length; i++) {
       if (i===count){
          curSlide = slidePossition[i]
       }
   }
}

/*btns left*/
function moveLeft () {
    if (curSlide === -99.99) {
    curSlide = 0
    count = 0
    slider.style.transform="translateX("+curSlide+"%)"
    }else {
    slider.style.transform="translateX("+curSlide+"%)"
    }
}
btnLeft.addEventListener ('click', event => {
     getPushL ()
     getCurSlide ()
     moveLeft ()
     console.log(curSlide)
     console.log(count)

})
/*/btns left*/

/*btns right*/
function moveRight () {
    if (curSlide ===-1) {
        curSlide = -83.33
        count = 5
        slider.style.transform="translateX("+curSlide+"%)"
        }else  {
        slider.style.transform="translateX("+curSlide+"%)"
        }
}
btnRight.addEventListener ('click', event => {
    getPushR ()
    getCurSlide ()
    moveRight ()
    console.log(curSlide)
    console.log(count)


})
/*/btns right*/
/*menu header 1440px*/
const menuItems = document.querySelectorAll('.item_title')
let ind =0
function getCurSlideMenu() {
    for (let i=0; i<menuItems.length; i++) {
     if (event.target===menuItems[i]) {
        ind = i
     }
}
}
function findPosition () {
    for (let i = 0; i<slidePossition.length; i++) {
        if (ind===i){
           curSlide = slidePossition[i]
           count = ind
        }
    }
    slider.style.transform="translateX("+curSlide+"%)"
}
for (let i=0; i<menuItems.length; i++) {
 menuItems[i].addEventListener('click', event => {
    getCurSlideMenu()
    findPosition ()
    console.log(ind)
    console.log (curSlide)
    console.log(count)
 })
}
/*/menu header*/

/*media min 768 max 1024*/
const barBtn = document.querySelector('.style_bar')
const contactsBar = document.querySelector ('.container_contacts')
const  navContactsBtn = document.querySelector('.contacts')

function openCloseBarContacts(){
    contactsBar.classList.toggle('contacts_bar_close')
}

barBtn.addEventListener ('click', event => {
    openCloseBarContacts()
})
navContactsBtn.addEventListener ('click', event => {
    openCloseBarContacts()
})

/*/media min 768 max 1024*/