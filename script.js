let main = document.querySelectorAll('.main')
let main2 = document.querySelectorAll('.main2');
let main3 = document.querySelectorAll('.main3');
let m1_btn = document.querySelectorAll('.popup-btn');
let m2_btn = document.querySelectorAll('.popup-btn2');

let popup1 = function (popupClick) {
    main2[popupClick].classList.add('m2-active');
    main[popupClick].classList.add('deactive');
}

m1_btn.forEach((m1_btn, i) => {
    m1_btn.addEventListener("click", () => {
        popup1(i);
    });
});

let popup2 = function (popupClick) {
    main3[popupClick].classList.add('m3-active');
    main2[popupClick].classList.remove('m2-active');
}

m2_btn.forEach((m2_btn, j) => {
    m2_btn.addEventListener("click", () => {
        popup2(j);
    });
});