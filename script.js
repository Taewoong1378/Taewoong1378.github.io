let scrollTop = 0;
let h1;
let coverImg;
let cover;
let bar;
let per;

window.onload = function () {
    h1 = document.getElementsByTagName("h1")[0];
    h2 = document.getElementsByTagName("h2")[0];
    bar = document.getElementsByClassName('bar')[0];

    myvideo = document.getElementsByTagName("video")[0];
    cover = document.getElementsByClassName("cover")[0];
    cover.style.opacity = .3;
}

window.addEventListener("scroll", function (e) {
    scrollTop = document.documentElement.scrollTop;

    h1.style.transform = "translate(0," + -scrollTop / 10 + "px)";
    h2.style.transform = "translate(0," + -scrollTop / 10 + "px)";
    myvideo.style.transform = "scale(" + (1 + scrollTop / 1000) + ")";
    cover.style.opacity = .3 + scrollTop / 1000;

    per = Math.round(scrollTop / (document.documentElement.scrollHeight - window.innerHeight)* 100);
    bar.style.width = `${per}%`;

});