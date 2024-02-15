<template>
    <div id="page11" class="hero">
        <div class="content">
          <div class="content_inner">
            <div class="content_main">
              <h1 class="content_sub">Villa de charme dans la region de Marrakech</h1>
              <h2 class="content_heading"><i>Villa</i> de charme <i>de plus de 2000m</i> avec <i>une grande piscine.</i></h2>
            </div>
        
            <div class="content_bottom">
              <h3 class="bottom_label">Serving the state of <i>California</i></h3>
            </div>
        
            </div>
        </div>
        <figure class="media">
          <aside class="media_images media_col">
            <figure class="images_img">
              <img class="img_src lazyloaded" src="~/assets/images/chambre-1.jpg" alt="" data-eio="l" />
            </figure>   
          </aside>
                <!-- Video -->
          <aside class="media_video media_col">
            <div class="video_frame" >
              <video autoplay muted loop>
                <source src="~/assets/videos/villa-3.mp4" type="video/mp4">
              </video>
            </div>
          </aside>
        
        </figure>
        </div><!-- #page11-->
</template>

<style>
.hero {
    /* background: #172624 url(../img/pattern--1.png) no-repeat 50%/cover; */
    color: #fff;
    display: block;
    font-size: 0;
    overflow: hidden;
    position: relative;
    text-align: center;
    width: 100%;
    background-color:var(--primary-color);
}

.hero .content {
    margin-left: auto;
    margin-right: auto;
    padding-left: 5vw;
    padding-right: 5vw;
    width: 100%;
    max-width: 1420px;
    display: block;
    position: relative;
    z-index: 1;
}

.hero .content_inner {
    display: flex;
    flex-direction: column;
    padding-bottom: 70px;
    padding-top: 150px;
    width: 100%;
}
.hero .content_main {
    font-family: Saol Display;
    align-items: center;
    display: inline-flex;
    flex: 1 1 auto;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
}
.hero .content_sub {
    letter-spacing: .25em;
    text-transform: uppercase;
    font-size: calc(13px + 3 * ((100vw - 420px) / 860));
    font-size: calc(.8125rem + 3 * ((100vw - 26.25rem) / 860));
    line-height: 1.3em;
    display: block;
    margin-bottom: 1.05em;
}
.hero .content_heading {
    display: block;
    font-size: calc(50px + 68 * ((100vw - 420px) / 1020));
    font-size: calc(3.125rem + 68 * ((100vw - 26.25rem) / 1020));
    line-height: 1.1em;
}
.hero .content_bottom {
    font-family: Saol Display;
    display: block;
    flex: 0 0 auto;
}
.hero .media {
    align-items: stretch;
    display: block;
    flex-wrap: nowrap;
    justify-content: flex-start;
    pointer-events: none;
    position: relative;
    width: 100%;
    z-index: 0;
}
.hero .media_images {
    background: transparent;
    display: none;
}
.hero .media_col {
    display: block;
    overflow: hidden;
    position: relative;
    width: 100%;
}
.hero .images_img:first-of-type {
    bottom: 50%;
    left: 50%;
    width: 220px;
    height: 300px;
}
.hero .images_img {
    background: #191919;
    opacity: .9;
    overflow: hidden;
    position: absolute;
    border: 5px solid white;
}
.hero .media_video {
    background: #000;
    display: block;
    position: relative;
}
.hero .media_col {
    display: block;
    overflow: hidden;
    position: relative;
    width: 100%;
}
.hero .video_frame {
    height: 0;
    padding-bottom: 56.25%;
    opacity: .6;
    position: relative;
    background-color: red;
}
.video_frame video {
			position: absolute;
			top: 0;
			left: 0;
			object-fit: cover;
			width: 100%;
			height: 100%;
			z-index: -2;
}
.hero .video_frame iframe {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>