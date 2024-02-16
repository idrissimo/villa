<template>
   <swiper-container
    :slides-per-view="3"
    :space-between="spaceBetween"
    :centered-slides="true"
    :pagination="{
      hideOnClick: true
    }"
    :breakpoints="{
      768: {
        slidesPerView: 3,
      },
    }"
    @swiperprogress="onProgress"
    @swiperslidechange="onSlideChange"
  >
    <swiper-slide>  <img src="~/assets/images/chambre-1.jpg" alt="" /></swiper-slide>
    <swiper-slide>  <img src="~/assets/images/chambre-1.jpg" alt="" /></swiper-slide>
    <swiper-slide>  <img src="~/assets/images/chambre-1.jpg" alt="" /></swiper-slide>
  </swiper-container>

</template>
<script setup>
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const spaceBetween = 10;
const onProgress = (e) => {
const [swiper, progress] = e.detail;
    console.log(progress)
};

const onSlideChange = (e) => {
    console.log('slide changed')
}

    //   return {
    //     spaceBetween,
    //     onProgress,
    //     onSlideChange,
    //   };
      
</script>