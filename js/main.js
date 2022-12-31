//loading screen
const loading = document.querySelector('.loading');
const main = document.querySelector('main');

addEventListener('load', () => {
    window.setTimeout(() => {
        main.classList.remove('d-none');
        loading.classList.add('d-none');
    }, 2500);
});


//after loading go to scrollTo top again
function up () {
    scroll ({
        top: 0,
        behavior: 'smooth',
    });
}

this.addEventListener('load', () => up());


//scrollTo top after clicking on UP button
const upButton = document.querySelector('.up');
const landing = document.querySelector('.landing');

window.setInterval (() => {
    if (scrollY > landing.offsetHeight) {
        upButton.classList.replace('invisible', 'visible');
        upButton.addEventListener('click',() => up())
    } else {
        upButton.classList.replace('visible', 'invisible');
    }
});


//click to scroll the landing page
document.querySelector('.double-angles').onclick = function () {
    scroll({
        top: landing.offsetHeight,
        behavior: 'smooth',
    });
};


//get current date and output it
const dateContainer = document.querySelectorAll('.date-card .card-body p');
let date = new Date();

window.setInterval(() => {
    dateContainer.forEach(element => {
        element.innerHTML = date.toDateString();
    });
}, 1000);


//typewriting behavior
const span = document.querySelector('.text > p span');
const word = Array.from('Ismail Alrewany, Egypt.');

let index = 0;
let display = [];

(function typewritingEffect () {
    if (display.length === 0) {
        span.setAttribute('data-check', 'false');
    } else if (display.length === word.length) {
        span.setAttribute('data-check', 'true');
    }
    if (span.dataset.check === 'false') {
        display.push(word[index]);
        ++index;
    } else if (span.dataset.check === 'true') {
        display.pop();
        index = 0;
    }
    
    let randomNum = Math.random() * (400 - 100) +100;
    span.textContent = display.join('');
    window.setTimeout(typewritingEffect, randomNum);
})();


//shoveling and disappear what's not needed
const switches = document.querySelectorAll('.work ul li');
const gallery = document.querySelectorAll('.work-gallery .all');

const removeActive = list => {
    list.forEach(item => item.classList.remove('active'));
};

switches.forEach(item => {
    item.addEventListener('click', function () {
        removeActive(switches);
        item.classList.add('active');

        gallery.forEach(box => {
            box.classList.add('d-none');
            if (box.classList.contains(item.dataset.cat)) {
                box.classList.remove('d-none');
            }
        });
    });
});


//smooth scroll to relative section with its link 
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        removeActive (links);
        e.target.classList.add('active');

        scroll ({
            top: document.querySelector(link.dataset.position).offsetTop - 70,
            behavior: 'smooth',
        });
    });
});


//highlight section's link during scrolling
window.addEventListener('scroll', function () {
    links.forEach(link => {
        let targetLink = document.querySelector(link.dataset.position);

        if (this.scrollY >= (targetLink.offsetTop - 80) && this.scrollY < (targetLink.offsetTop - 80) + targetLink.offsetHeight) {
            removeActive(links);
            link.classList.add('active');
        }
    });
});


//check email validation
const inputMessage = document.querySelector('form input + div + p');
const input = document.querySelector('form input[type="text"]');
const marks = document.querySelector('form input + div');
const exclamationMark = document.querySelector('form input + div .exclamation');
const checkMark = document.querySelector('form input + div .correct');

window.setInterval(() => {
    if (document.body.offsetWidth < 768) {
        marks.style.top = '40%';
        marks.style.right = '0';
    }
    else if (document.body.offsetWidth < 992) {
        marks.style.right = '-10px';
        marks.style.top = '8px';
    }
    else if (document.body.offsetWidth > 992) {
        marks.style.right = '16%';
        marks.style.top = '8px';
    }
}, 500);

window.setInterval(() => {
    let inputValue = input.value.toLowerCase();
    inputValue.trim();
    if (inputValue.length === 0) {
        inputMessage.innerHTML = '';
        checkMark.style.display = 'none';
        exclamationMark.style.display = 'none';
        return;
    }
    else if (inputValue.length < 8) {
        inputMessage.innerHTML = 'invalid Email address';
        exclamationMark.style.display = 'block';
        checkMark.style.display = 'none';
    }
    else if (!inputValue.includes('@')) {
        inputMessage.innerHTML = 'your Email doesn\'t include @';
    }
    else if (inputValue.indexOf('@') - inputValue.lastIndexOf('@') != 0) {
        inputMessage.innerHTML = 'your Email includes more than @';
    }
    else if (inputValue.indexOf('@') < 2) {
        inputMessage.innerHTML = 'your Email name wrong!';
    }
    else if (!inputValue.includes('.')) {
        inputMessage.innerHTML = 'your Email doesn\'t include "."';
    }
    else if (inputValue.indexOf('.') - inputValue.lastIndexOf('.') != 0) {
        inputMessage.innerHTML = 'your Email includes more than "."';
    }
    else if (inputValue.length - inputValue.lastIndexOf('.') < 2) {
        inputMessage.innerHTML = 'your Email domain wrong!';
    }
    else if (inputValue.indexOf('.') - inputValue.indexOf('@') < 2) {
        inputMessage.innerHTML = 'your Email server wrong!';
    } else {
        inputMessage.innerHTML = 'valid Email address';
        exclamationMark.style.display = 'none';
        checkMark.style.display = 'block';
    }
}, 2000);
///////////////////////////////////////////


const article = document.querySelectorAll('.stuff article');


(function cardEdit () {
    const card = document.querySelectorAll('.team .row > div');
    const dateCard = document.querySelectorAll('.date-card img');
    card.forEach(ele => {
        window.setInterval( () => {
            if (document.body.offsetWidth > 992) {
                ele.setAttribute('data-width', 'true');
                ele.classList.add('active');
                dateCard.forEach(date => {
                    date.classList.add('active');

                });
            } else {
                if (ele.classList.contains('active')) {
                    dateCard.forEach(date => {
                        date.classList.remove('active');
                    });
                    ele.classList.remove('active');
                }
                ele.setAttribute('data-width', 'false');
            }
        }, 500);
    });
})();


(function animation () {
    const workGallery = document.querySelectorAll('.work-gallery div img');
    const work = document.querySelectorAll('.work-gallery div');
    const team = document.querySelectorAll('.team .row .cards');
    const blogCards = document.querySelectorAll('.blog .date-card');


    article.forEach( ele => {
        window.setInterval(() => {
            if (document.body.offsetWidth < 992) {
                ele.style.transform = 'translateY(100px)';
                if (window.scrollY >= 600) {
                    ele.classList.add('animate-top');
                }
            } else {
                if (ele.classList.contains('animate-top')) {
                    ele.style.transform = 'translateY(0)';
                    ele.classList.remove('animate-top');
                } else {
                    return
                }
            }
        }, 1);
    });

    workGallery.forEach( box => {
        window.setInterval(() => {
            if (document.body.offsetWidth < 992) {
                box.classList.add('filter');
                work.forEach(after => {
                    after.style.transform = 'rotateY(-180deg)';
                    after.classList.add('change-pseudo');
                    if (window.scrollY >= 1400) {
                        after.classList.add('animate-rotate');
                    }
                });
            } else {
                work.forEach(after => {
                    after.style.transform = 'rotateY(0)';
                    if (after.classList.contains('change-pseudo') && box.classList.contains('filter')) {
                        after.classList.remove('change-pseudo');
                        after.classList.remove('animate-rotate');
                        box.classList.remove('filter');
                    } else {
                        return
                    }
                });
            }
        }, 1);
    });

    team.forEach( members => {
        window.setInterval(() => {
            if (document.body.offsetWidth < 992 && document.body.offsetWidth >= 768) {
                members.classList.add('point');
                if (window.scrollY >= 3000) {
                    members.classList.add('animate-point');
                }
                blogCards.forEach(date => {
                    date.classList.add('point');
                    if (window.scrollY >= 4500) {
                        date.classList.add('animate-point');
                    }
                });
            } else {
                if (members.classList.contains('point')) {
                    members.classList.remove('point');
                    members.classList.remove('animate-point');
                    blogCards.forEach(date => {
                        date.classList.remove('point');
                        date.classList.remove('animate-point');
                    });
                } else {
                    return
                }
            }
        }, 1);
    });

    team.forEach( members => {
        window.setInterval(() => {
            if (document.body.offsetWidth < 768) {
                team[0].classList.add('translate-one');
                team[2].classList.add('translate-one');
                team[1].classList.add('translate-two');
                team[3].classList.add('translate-two');
                if (window.scrollY >= 3500) {
                    members.classList.add('animate-translate');
                }
                blogCards[0].classList.add('translate-one');
                blogCards[2].classList.add('translate-three');
                blogCards[1].classList.add('translate-two');
                blogCards.forEach(date => {
                    if (window.scrollY >= 5350 || window.scrollY >= 6050 ) {
                        date.classList.add('animate-translate');
                    }
                });
            } 
            else {
                if (members.classList.contains('animate-translate')) {
                    members.classList.remove('translate-one');
                    members.classList.remove('translate-two');
                    members.classList.remove('animate-translate');
                    blogCards.forEach(date => {
                        date.classList.remove('translate-one');
                        date.classList.remove('translate-two');
                        date.classList.remove('translate-three');
                        date.classList.remove('animate-translate');
                    });
                } else {
                    return
                }
            }
        }, 1);
    });
})();


(function search () {
    const searchInput = document.querySelector('.navbar-nav input[type = "text"]');
    const search = document.querySelector('.nav-item .search-icon');
    const items = document.querySelectorAll('.navbar-nav .nav-control');
    const incorrect = document.querySelector('.navbar-nav .nav-item .incorrect');
    const navUl = document.querySelector('.navbar .navbar-nav');

    search.addEventListener('click', () => {
        searchInput.style.display = 'block';
        searchInput.classList.add('active');
        items.forEach(item => {
            item.classList.add('invisible');
        });
        incorrect.style.display = 'block';
        search.style.display = 'none';
    });
    incorrect.addEventListener('click', () => {
        searchInput.style.display = 'none';
        searchInput.classList.remove('active');
        items.forEach(item => {
            item.classList.remove('invisible');
            item.classList.add('visible');
        });
        incorrect.style.display = 'none';
        search.style.display = 'block';
    });

    window.setInterval(() => {
        if (document.body.offsetWidth < 992) {
            navUl.classList.remove('overflow-hidden');
        } else {
            navUl.classList.add('overflow-hidden');
        }
    }, 500);
})();


