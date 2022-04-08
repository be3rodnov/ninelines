import 'core-js/stable';
import 'regenerator-runtime/runtime';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'locomotive-scroll';
import objectFitImages from 'object-fit-images';
// import objectFitVideos from 'object-fit-videos';
import LocomotiveScroll from 'locomotive-scroll';



svg4everybody();
objectFitImages();
// objectFitVideos();

window.$ = $;
window.jQuery = $;
window.objectFitImages = objectFitImages;
// window.objectFitVideos = objectFitVideos;

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});


require('ninelines-ua-parser');
