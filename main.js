let bizBtn = document.querySelector('.biz')
let foodBtn = document.querySelector('.food')
let artBtn = document.querySelector('.art')
let parkBtn = document.querySelector('.park')
let bigVideo = document.getElementById('big')
let mapBox = document.querySelector('.mapBox')

let mobileBtn = document.querySelector('.open')

bizBtn.addEventListener('click', function(){
    showMap(this)
})

foodBtn.addEventListener('click', function(){
    showMap(this)
})

artBtn.addEventListener('click', function(){
    showMap(this)
})

parkBtn.addEventListener('click', function(){
    showMap(this)
})

let isOpen = false;

mobileBtn.addEventListener('click', handleNav)


function showMap(el){
    
    if(el.classList.contains('biz')){
        document.querySelector('.mapBox').classList.add('fadeIn')
        mapBox.innerHTML = ' <img id="myImg" src="/images/biz.png" alt="">'
        setTimeout(() => {
            document.querySelector('.mapBox').classList.remove('fadeIn')
        }, 500);
    }else if(el.classList.contains('art')){
        document.querySelector('.mapBox').classList.add('fadeIn')
        mapBox.innerHTML = ' <img id="myImg" src="/images/artLayer.png" alt="">'
        setTimeout(() => {
            document.querySelector('.mapBox').classList.remove('fadeIn')
        }, 500);
    }else if(el.classList.contains('park')){
        document.querySelector('.mapBox').classList.add('fadeIn')
        mapBox.innerHTML = ' <img id="myImg" src="/images/parksLayer.png" alt="">'
        setTimeout(() => {
            document.querySelector('.mapBox').classList.remove('fadeIn')
        }, 500);
    }else{
        document.querySelector('.mapBox').classList.add('fadeIn')
        mapBox.innerHTML = ' <img id="myImg" src="/images/foodDrinkLayer.png" alt="">'
        setTimeout(() => {
            document.querySelector('.mapBox').classList.remove('fadeIn')
        }, 500);
    }



}

let mobileNavLinks = document.querySelectorAll('.mobile li');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', handleNav)
    
})


function handleNav(){
    mobileBtn.src = '/images/left.png'
    if(isOpen){
        this.classList.remove('fadeIn')
        document.querySelector('.mobile').classList.remove('fadeIn2')
        document.querySelector('.mobile').style.display = 'none'
        this.src = '/images/left.png'
        return isOpen = false
    }else{
        this.classList.add('fadeIn')
        document.querySelector('.mobile').classList.add('fadeIn2')
        document.querySelector('.mobile').style.display = 'flex'
        this.src = '/images/right.png'
        return isOpen = true
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  bigVideo.pause()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    bigVideo.pause()
  }
}

//Get the button:
mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let options = {
    root:null,
    rootMargin: '0px',
    threshold: 0.25
}


let callback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting 
            && entry.target.className == 'observed'){
                let vidUrl = entry.target.getAttribute('data-src')
                if(vidUrl){
                    entry.target.src = vidUrl
                    observer.unobserver(entry.target)
                }
            }
    })
}

let observer = new IntersectionObserver(callback, options)
observer.observe(document.querySelector('#smallVid'))
observer.observe(document.querySelector('#big'))