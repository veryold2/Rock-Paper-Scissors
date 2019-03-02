
let btn = document.querySelector('.btn');
let sign = document.getElementsByClassName('sign');
let gamer1 = document.querySelector('.gamer_1');
let gamer2 = document.querySelector('.gamer_2');
let again = document.querySelector('.again');
let reset = document.querySelector('.reset');
let youCount = document.querySelector('.gamer_2_count');
let comCount = document.querySelector('.gamer_1_count');


let arr = ['img/rock.png','img/sciss.png','img/paper.png'];
btn.disabled = true;
let src;
document.body.onload = function() {
	if(localStorage.getItem('countYou') !== null || localStorage.getItem('countCom') !== null ) {
		
         youCount.innerHTML = localStorage.getItem('countYou');
         comCount.innerHTML = localStorage.getItem('countCom');
	} else {
		localStorage.setItem('countYou',0);
        localStorage.setItem('countCom',0);
	}

}

for (let i = 0; i< sign.length; i++) {
    sign[i].addEventListener('click',choose);
}

function choose() {
	removeColor();
    this.classList.add('bg'); 
    src = this.firstChild.getAttribute('src');
    btn.disabled = false;
    btn.style.backgroundColor = 'purple';
    btn.addEventListener('click',start);
}


function removeColor() {
	for (let i = 0; i< sign.length; i++) {
	    sign[i].classList.remove('bg');
    }
}

function start() {
	window.timer = window.setInterval(timer,1000);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function timer() {
	let counter = document.querySelector('.counter span');
	counter.innerHTML = Number(counter.innerHTML) - 1;
	if (counter.innerHTML == 0) {
		window.clearInterval(window.timer);
		let yousChoice = new Image();
		yousChoice.src = src;
		gamer2.appendChild(yousChoice);
		let comsChoise = new Image();
		comsChoise.src = arr[[getRandomInt(0,3)]];
		gamer1.appendChild(comsChoise);
        btn.disabled = true;
        removeColor();
        banClick();
		btn.style.backgroundColor = 'brown';
        let img = new Image();
		img.classList.add('sizeImg');
        
        if (yousChoice.src == comsChoise.src) {
        	counter.innerHTML = '';
            img.src = 'img/1.svg';
            counter.appendChild(img);
        }

        if (yousChoice.getAttribute('src') == 'img/rock.png' && comsChoise.getAttribute('src') == 'img/sciss.png') {
              counter.innerHTML = '';
              youCount.innerHTML = Number(youCount.innerHTML) + 1;
              img.src = 'img/3.svg';
              counter.appendChild(img);
        }

        if (yousChoice.getAttribute('src') == 'img/paper.png' && comsChoise.getAttribute('src') == 'img/rock.png') {
              counter.innerHTML = '';
              youCount.innerHTML = Number(youCount.innerHTML) + 1;
              img.src = 'img/3.svg';
              counter.appendChild(img);
        } 
        if (yousChoice.getAttribute('src') == 'img/sciss.png' && comsChoise.getAttribute('src') == 'img/paper.png') {
              counter.innerHTML = '';
              youCount.innerHTML = Number(youCount.innerHTML) + 1;
              img.src = 'img/3.svg';
              counter.appendChild(img);
        }

        if (yousChoice.getAttribute('src') == 'img/sciss.png' && comsChoise.getAttribute('src') == 'img/rock.png') {
            counter.innerHTML = '';
        	comCount.innerHTML = Number(comCount.innerHTML) + 1;
            img.src = 'img/2.svg';
            counter.appendChild(img);
        }
        if (yousChoice.getAttribute('src') == 'img/rock.png' && comsChoise.getAttribute('src') == 'img/paper.png') {
            counter.innerHTML = '';
        	comCount.innerHTML = Number(comCount.innerHTML) + 1;
            img.src = 'img/2.svg';
            counter.appendChild(img);
        }
        if (yousChoice.getAttribute('src') == 'img/paper.png' && comsChoise.getAttribute('src') == 'img/sciss.png') {
            counter.innerHTML = '';
        	comCount.innerHTML = Number(comCount.innerHTML) + 1;
            img.src = 'img/2.svg';
            counter.appendChild(img);
        }
        	
        localStorage.setItem('countYou',youCount.innerHTML);
        localStorage.setItem('countCom',comCount.innerHTML);


	}
}

function banClick() {
	for (let i = 0; i< sign.length; i++) {
	    sign[i].removeEventListener('click',choose);
    }
}


again.addEventListener('click',function(){
	
    location.reload();
});

reset.addEventListener('click',function(){
	you = localStorage.getItem('countYou');
    com = localStorage.getItem('countCom');
    if (you && com) {
    	localStorage.setItem('countYou',0);
    	localStorage.setItem('countCom',0);
    	location.reload();
    }

});


