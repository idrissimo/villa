<template>
  <div>
    <Nav></Nav>
    <div id="cursor"></div>
    <div id="main">
      <Hero></Hero>
        <div id="caracts" class="hidden sm:flex grd-wrapper">
            <div class="col grd__box" id="box1">
                <h3><i class="ri-home-2-fill"></i> Le logement</h3>
                <p>Charmante Villa avec piscine</p>
            </div>
            <div class="col grd__box" id="box2">
                <h3><i class="ri-map-pin-2-fill"></i> Location</h3>
                <p>Marrakech / LallaTakerkoust</p>
            </div>
            <div class="col grd__box" id="box3">
                <h3><i class="ri-money-dollar-circle-fill"></i> Prix</h3>
                <p>dignissimos fugiat sapiente</p>
            </div>
        </div><!-- #caracts-->

    </div><!-- #main-->



    
      <slot />
   

    <Footer></Footer>

  </div>
</template>

<script setup>
import {ref,onMounted} from 'vue'
import { gsap } from "gsap";

const navBarAnimation = ()=>{
    gsap.to("#nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
        trigger: "#page11",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
    },
    });
    gsap.to("#nav-part2 #links", {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
        trigger: "#page11",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
        },
    });
}

onMounted(()=>{
    //navBarAnimation();
})




</script>

<style lang="scss">
/*General */
html {
    scroll-behavior: smooth;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

ul{
    list-style: none;
}
a {
    color: inherit;
    text-decoration: inherit;
}

*::selection {
    color: #fff;
    background-color: #000;
}

:root {
    /* --primary-color: #4A3A2A; */
    --third-color:#BC5C29;
    --primary-color: #404A38;
    /* --secondary-color: #E9DBC1; */
    --secondary-color: #F7ECDC;
}

html, body {
    height: 100%;
    width: 100%;
}

body {
    background-color: var(--secondary-color);
}


/*********** caracts ******************/
#caracts h3 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
}
.grd-wrapper {
    padding: 3rem;
    max-width: 80rem;
    margin: 0 auto;
    
}
.grd__box {
    min-height: 100px;
    flex:1 1 auto;
    color: var(--primary-color);
   
}


/* media queries */
#nav {
    /* height: 100px; */
    width: 100%;
    /* background-color: burlywood; */
    position: fixed;
    z-index: 99;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 15px;
}

#nav #nav-part2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
}

#links {
    padding: 10px;
    display: none;
}

#nav-part1 {
    /* background-color: RED; */
    height: 67px;
    overflow: hidden;
}

#nav-part1 svg {
    display: block;
    height: 67px;
    width: 80px;
}
#nav #twogoodlogo{
    height: 40px;
    margin-left: -20px;
}

#icons {
    padding: 7px;
    border-radius: 50px;
    background-color: #F7F7F7;
}

#nav-part2 #icons i {
    font-size: 15px;
    margin: 0 20px;
    font-weight: 100;
}

#page1 {
    /* background-color: red; */
    min-height: 70vh;
    width: 100%;
    padding: 0 3vw;
    padding-top: 25vh;

}

#page1 h1 {
    font-size: 15.5vw;
    letter-spacing: -3px;
}

#video-container {
    height: 25vh;
    margin-top: 3vw;
}

#video-container #play {
    padding: 9.5vw 7.2vw;
    font-size: 4.5vw;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 1;
    scale: 1;
    transform: translate(-50%, -50%);
}

@media (min-width:600px) {
    #links {
    display: block !important;
    position: static;
    background-color: inherit;
    height: auto !important;
    .link {
        opacity: 1;
    }
    }

}

@media (min-width: 768px){
    .md\:px-8 {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}

@media (min-width: 1025px){
    .gallery-carousel .container, .hero .content {
        padding-left: 40px;
        padding-right: 40px;
    }
    .hero .content_inner {
        min-height: 700px;
        height: 100vh;
        padding-bottom: 60px;
        padding-top: 160px;
    }
    .hero .content_main {
        padding-bottom: 60px;
    }
}

@media (min-width: 1280px){
    .xl\:ml-80 {
        margin-left: 20rem;
    }
    .hero .content_sub {
        font-size: 16px;
        font-size: 1rem;
    }
    .hero .media {
        display: flex;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
    }
    .hero .media_images {
        display: inline-block;
    }
    .hero .media_col {
        flex: 0 0 50%;
        width: 50%;
    }
    .hero .media_video {
        align-items: center;
        display: inline-flex;
        justify-content: center;
    }
    .hero .media_col {
        flex: 0 0 50%;
        width: 50%;
    }
    .hero .video_frame {
        overflow: hidden;
        padding-bottom: 0;
        pointer-events: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
    .hero .video_frame iframe {
        height: 56.25vw;
        min-height: 100vh;
        min-width: 177.77vh;
        top: 50%;
        right: auto;
        bottom: auto;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 100vw;
    }
}

@media (min-width: 1440px){
    .hero .content_heading {
        // font-size: 118px;
        // font-size: 7.375rem;
    }
}


</style>
