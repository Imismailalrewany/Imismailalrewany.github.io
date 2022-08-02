const body = document.getElementById('body');
const article = document.querySelectorAll('.stuff article');

(function checkScreen () {
    const lastArticle = document.querySelector('.stuff article:last-of-type');
    const paragraph = document.querySelector('.about > p');
    const lapTopParent = document.querySelector('.about .card .row div:last-child');
    const lapTop = document.querySelector('.about .card .row div:last-child img');
    const bio = document.querySelector('.team .container > p');
    article.forEach(ele => {
        window.setInterval( () => {
            if (body.offsetWidth < 992) {
                ele.classList.add('mb-3');
                lastArticle.classList.remove('mb-3');
                paragraph.classList.replace('w-50' , 'w-100');
                bio.classList.remove('w-75');
                if (body.offsetWidth < 768) {
                    lapTopParent.classList.remove('position-relative');
                    lapTop.classList.remove('position-absolute');
                } else {
                    lapTopParent.classList.add('position-relative');
                    lapTop.classList.add('position-absolute');
                }
            } else {
                ele.classList.remove('mb-3');
                paragraph.classList.remove('w-100');
                paragraph.classList.add('w-50');
                bio.classList.add('w-75');
            }
        },500);
    });
})();


(function cardEdit () {
    const card = document.querySelectorAll('.team .row > div');
    const dateCard = document.querySelectorAll('.date-card img');
    card.forEach(ele => {
        window.setInterval( () => {
            if (body.offsetWidth > 992) {
                ele.setAttribute('data-width', 'true');
                ele.classList.add('active');
                dateCard.forEach(date => {
                    date.classList.add('active');

                });
                // ele.classList.remove('invert');
            } else {
                if (ele.classList.contains('active')) {
                    dateCard.forEach(date => {
                        date.classList.remove('active');
                    });
                    ele.classList.remove('active');
                }
                ele.setAttribute('data-width', 'false');
                // ele.classList.add('invert');
            }
        }, 500);
    });
})();


(function changePlace () {
    const container = document.querySelector('.foot .container');

    const brand = document.getElementById('brand');
    const brandImg = document.querySelector('#brand img');
    const brandPar = document.querySelector('#brand > p');
    const brandDiv = document.querySelector('#brand .text');
    const textFirstPar = document.querySelector('#brand .text p:first-child');
    const textFirstParSpan = document.querySelector('#brand .text p:first-child span');
    const textSecondPar = document.querySelector('#brand .text p:last-child');
    const textSecondParSpan = document.querySelector('#brand .text p:last-child span');

    const newBrand = brand.cloneNode();
    const newBrandImg = brandImg.cloneNode();
    const newBrandPar = brandPar.cloneNode();
    const newBrandDiv = brandDiv.cloneNode();
    const newTextFirstPar = textFirstPar.cloneNode();
    const newTextFirstParSpan = textFirstParSpan.cloneNode();
    const newTextSecondPar = textSecondPar.cloneNode();
    const newTextSecondParSpan = textSecondParSpan.cloneNode();

    container.append(newBrand);
    newBrand.classList.remove('col-lg-4')
    newBrand.classList.remove('text-lg-start')
    newBrand.classList.add('mt-5')
    newBrand.append(newBrandImg);
    newBrand.append(newBrandPar);
    newBrandPar.classList.replace('mb-5', 'mb-4');
    newBrandPar.innerHTML = 'Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.';
    newBrand.append(newBrandDiv);
    newBrandDiv.appendChild(newTextFirstPar)
    newTextFirstPar.innerHTML = 'Created by';
    newTextFirstPar.appendChild(newTextFirstParSpan);
    newTextFirstParSpan.innerHTML = ' Ismail Alrewany, Egypt.';
    newTextFirstParSpan.style.border = 'none';
    newBrandDiv.appendChild(newTextSecondPar)
    newTextSecondPar.innerHTML = '© 2017 -';
    newTextSecondPar.appendChild(newTextSecondParSpan);
    newTextSecondParSpan.innerHTML = ' Bondi.Inc';


    window.setInterval(() => {
        if (body.offsetWidth < 992) {
            brand.style.display = 'none';
            newBrand.style.display = 'block';
        }
        else if (body.offsetWidth >= 992) {
            brand.style.display = 'block';
            newBrand.style.display = 'none';
        }
    }, 100);
})();


(function animation () {
    const workGallery = document.querySelectorAll('.work-gallery div img');
    const work = document.querySelectorAll('.work-gallery div');
    const team = document.querySelectorAll('.team .row .cards');
    const blogCards = document.querySelectorAll('.blog .date-card');


    article.forEach( ele => {
        window.setInterval(() => {
            if (body.offsetWidth < 992) {
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
            if (body.offsetWidth < 992) {
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
            if (body.offsetWidth < 992 && body.offsetWidth >= 768) {
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
            if (body.offsetWidth < 768) {
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


(function loading () {
    // window.setInterval(() => {
        this.addEventListener('load', function () {
            if (scrollY > 300) {
                this.scrollTo({
                    top: '0',
                    behavior: 'smooth'
                });
            } else {
                return
            }
        });
    // });
})();


(function date () {
    const dateContainer = document.querySelectorAll('.blog .date-card .card-body p');
    const date = new Date();

    window.setInterval(() => {
        dateContainer.forEach(element => {
            element.innerHTML = date.toDateString();
        });
        // for (let i = 0;dateContainer.length; i++) {
        //     dateContainer[i].innerHTML = date.toDateString();
        // }
    }, 1000);
})();


{const span = document.querySelector('.text > p span');
const word = Array.from('Ismail Alrewany, Egypt.');

let index = 0;
let content = '';
let display = [];
let randomNum;

(function typewritingEffect () {
    if (display.length === 0) {
        span.setAttribute('data-check', 'false');
    }
    else if (display.length === word.length) {
        span.setAttribute('data-check', 'true');
    }
    
    if (span.dataset.check === 'false') {
        content = word[index];
        ++index;
        display.push(content);
    } 
    else if (span.dataset.check === 'true') {
        display.pop();
        index = 0;
    }
    
    randomNum = Math.random() * (400 - 100) +100;

    span.textContent = display.join('');

    window.setTimeout(typewritingEffect, randomNum);
})();}


(function contact () {
    const inputMessage = document.querySelector('form input + div + p');
    const input = document.querySelector('form input[type="text"]');
    const marks = document.querySelector('form input + div');
    const exclamationMark = document.querySelector('form input + div .exclamation');
    const checkMark = document.querySelector('form input + div .correct');

    window.setInterval(() => {
        if (body.offsetWidth < 768) {
            marks.style.top = '40%';
            marks.style.right = '0';
            // inputMessage.classList.add('top');
        }
        else if (body.offsetWidth < 992) {
            marks.style.right = '-10px';
            marks.style.top = '8px';
        }
        else if (body.offsetWidth > 992) {
            marks.style.right = '16%';
            marks.style.top = '8px';
            // inputMessage.classList.remove('top');
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
})();


(function shovel () {
    const switches = document.querySelectorAll('.work ul li');
    const gallery = document.querySelectorAll('.work .work-gallery div.all');

    switches.forEach(item => {
        item.addEventListener('click', function () {
            switches.forEach(activeItem => {
                activeItem.classList.remove('active');
            });

            item.classList.add('active');

            let dataClass = item.dataset.cat;

            gallery.forEach(box => {
                box.classList.add('d-none');
                if (box.classList.contains(dataClass)) {
                    box.classList.remove('d-none');
                }
            });
        });
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
        if (body.offsetWidth < 992) {
            navUl.classList.remove('overflow-hidden');
        } else {
            navUl.classList.add('overflow-hidden');
        }
    }, 500);
})();


{
    const doubleAngles = document.querySelector('.double-angles');
    let value = screen.height - 200;

    doubleAngles.addEventListener('click', function () {
        window.scrollTo({
            top: value,
            behavior: 'smooth'
        });
    });
}


(function up () {
    const upButton = document.querySelector('.up');

    window.setInterval (() => {
        if (scrollY > screen.height-200) {
            upButton.classList.add('visible');
            upButton.classList.remove('invisible');
            upButton.onClick = function () {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        } else {
            upButton.classList.add('invisible');
            upButton.classList.remove('visible');
        }
    });
})();


(function changeWidth () {
    window.setInterval(() => {
        if (body.offsetWidth > 992) {
            addEventListener('resize', function () {
                window.location.reload(true);
            });
        } else {
            return
        }
    });
})();


(function moveOn () {
    const links = document.querySelectorAll('.navbar .navbar-nav .nav-link');
    // const underLinks = document.querySelectorAll('.foot .under-list li');
    const home = document.getElementById('home');

    const services = document.getElementById('services');

    const stuff = document.querySelector('.stuff');

    const portfolio = document.getElementById('portfolio');

    const work = document.querySelector('.work');

    const about = document.getElementById('about');

    const aboutDiv = document.querySelector('.about');

    const team = document.querySelector('.team');

    const tech = document.querySelector('.tech');

    const project = document.querySelector('.project');

    const blog = document.querySelector('.blog');

    const contact = document.getElementById('contact');

    const contactDiv = document.querySelector('.contact');

    // const underHome = document.getElementById('under-home');
    // const underServices = document.getElementById('under-services');
    // const underPortfolio = document.getElementById('under-portfolio');
    // const underTextMonials = document.getElementById('under-textMonials');
    // const underSupport = document.getElementById('under-support');
    // const underTerms = document.getElementById('under-terms');

    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(removeActive => {removeActive.classList.remove('active')});
            link.classList.add('active');
        });
    });

    window.setInterval(() => {
        home.addEventListener('click', function() {
        window.scrollTo({
            top: '0',
            behavior: 'smooth'
        });
        console.log('home')
        });
        
        services.addEventListener('click', function() {
            window.scrollTo({
                top: screen.height,
                behavior: 'smooth'
            });
            console.log('services')
        });

        portfolio.addEventListener('click', function() {
            window.scrollTo({
                top: screen.height + stuff.offsetHeight,
                behavior: 'smooth'
            });
            console.log('portfolio')
        });

        about.addEventListener('click', function() {
            window.scrollTo({
                top: screen.height + (stuff.offsetHeight + work.offsetHeight),
                behavior: 'smooth'
            });
            console.log('about')
        });

        contact.addEventListener('click', function() {
            window.scrollBy({
                top: screen.height + (stuff.offsetHeight + work.offsetHeight + aboutDiv.offsetHeight + team.offsetHeight + tech.offsetHeight + project.offsetHeight + blog.offsetHeight) + 70,
                behavior: 'smooth'
            });
            console.log('services')
        });

        if (window.scrollY < screen.height) {
            links.forEach(del => {del.classList.remove('active')});
            home.classList.add('active');
        }
        else if (window.scrollY < screen.height + stuff.offsetHeight) {
            links.forEach(del => {del.classList.remove('active')});
            services.classList.add('active');
        }
        else if (window.scrollY < screen.height + (stuff.offsetHeight + work.offsetHeight)) {
            links.forEach(del => {del.classList.remove('active')});
            portfolio.classList.add('active');
        }
        else if (window.scrollY < screen.height + (stuff.offsetHeight + work.offsetHeight + aboutDiv.offsetHeight + team.offsetHeight + tech.offsetHeight + project.offsetHeight + blog.offsetHeight)) {
            links.forEach(del => {del.classList.remove('active')});
            about.classList.add('active');
        } else {
            links.forEach(del => {del.classList.remove('active')});
            contact.classList.add('active');
        }
    });
})();


(function loading () {
    const loading = document.querySelector('.loading');
    const hidden = document.querySelector('body > .d-none');
    addEventListener('load', () => {
        window.setTimeout(() => {
            hidden.classList.remove('d-none');
            loading.classList.add('d-none');
        }, 2500);
    });
})();


{
    const getSizes = () => {
        body.width = window.innerWidth;
        body.height = window.innerHeight;
    }
    getSizes();

    window.addEventListener('resize', getSizes, false);
}


