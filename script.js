// Swiper framework
const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    freeMode: true,
    direction: 'horizontal',

    breakpoints: {
        767: {
            enabled: false,
        },
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    });


//Кнопка
// const showMore = document.querySelector('.main__button--show-more');
// const brandsLength = document.querySelectorAll('.main__brand').length;
// let items = 8;
// let isExpanded = false;
//
// showMore.addEventListener('click', () => {
//     items += 5;
//     const array = Array.from(document.querySelector('.main__brands-list').children);
//
//     if (isExpanded) {
//         items = 6;
//         array.forEach(el => el.classList.remove('is-visible'));
//         const visItems = array.slice(0, items);
//         visItems.forEach(el => el.classList.add('is-visible'));
//         showMore.textContent = 'Показать все';
//     } else {
//         const visItems = array.slice(0, items);
//         visItems.forEach(el => el.classList.add('is-visible'));
//         if (visItems.length === brandsLength) {
//             showMore.textContent = 'Скрыть';
//         }
//     }
//
//     isExpanded = !isExpanded;
// });

const showMore = document.querySelector('.main__button--show-more');
const brandsLength = document.querySelectorAll('.main__brand').length;
let items = window.innerWidth >= 1120 ? 8 : 6;
let isExpanded = false;

const updateVisibleItems = () => {
    const array = Array.from(document.querySelector('.main__brands-list').children);
    array.forEach((el, index) => {
        if (index < items) {
            el.classList.add('is-visible');
        } else {
            el.classList.remove('is-visible');
        }
    });
};

showMore.addEventListener('click', () => {
    if (isExpanded) {
        items = window.innerWidth >= 1120 ? 8 : 6;
        showMore.textContent = 'Показать все';
    } else {
        items += 5;
        if (items >= brandsLength) {
            items = brandsLength;
            showMore.textContent = 'Скрыть';
        } else {
            showMore.textContent = 'Показать все';
        }
    }
    updateVisibleItems();
    isExpanded = !isExpanded;
});

updateVisibleItems();
