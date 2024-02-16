<template>
<div class="villa-section" id="section3">
            <div class="container">
                <div class="max-w-2xl lg:max-w-7xl mx-auto px-4 md:px-8">
                    <h3 class="text-green text-3xl lg:text-4xl font-display tracking-tight font-bold mb-6">GALLERIE</h3>
                    <div id="gallery">
            
                        <div class="container">
                            <ul class="image-gallery">
                                <li>
                                    <img src="~/assets/images/chambre-1.jpg" alt="" />
                                    <div class="overlay"><span>Image title</span></div>
                                </li>
                                <li>
                                    <img src="~/assets/images/chambre-2.jpg" alt="" />
                                    <div class="overlay"><span>Image title</span></div>
                                </li>
                                
                                <li>
                                    <img src="~/assets/images/chambre-3.jpg" alt="" />
                                    <div class="overlay"><span>Image title</span></div>
                                </li>
                                <li>
                                    <img src="~/assets/images/cuisine-1.jpg" alt="" />
                                    <div class="overlay"><span>Cuisine</span></div>
                                </li> 
                                <li>
                                    <img src="~/assets/images/cuisine-3.jpg" alt="" />
                                    <div class="overlay"><span>Image title88</span></div>
                                </li>
                                <li>
                                    <img src="~/assets/images/chambre-1.jpg" alt="" />
                                    <div class="overlay"><span>Image title</span></div>
                                </li> 
                            </ul>
                        </div>
                    </div>     
                </div>
                
            </div>
        </div>

</template>

<style>
.villa-section {
    padding-top: 2rem;

}
.villa-section h1{
    text-transform: uppercase;
}

.villa-section .flex {
    gap: 15px;
    margin-bottom:1rem;
}
#section2 .flex div {
    flex-basis: 50%;
    flex: 1 1 auto;
}

.villa-section img {
    border: 5px solid white;
}

/*gallery*/
#gallery {
    padding-bottom: 3rem;
}
.image-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
  }
  
  
  .image-gallery > li {
    flex-grow: 1;
    height: 300px;
    cursor: pointer;
    position: relative;
  }
  
  .image-gallery li img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    border-radius: 5px;
  }
  /* .image-gallery::after {
    content: "";
    flex-basis: 350px;
  } */
  .image-gallery::after {
    content: "";
    flex-grow: 999;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(57, 57, 57, 0.502);
    top: 0;
    left: 0;
    transform: scale(0);
    transition: all 0.2s 0.1s ease-in-out;
    color: #fff;
    border-radius: 5px;
    /* center overlay text */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* hover */
  .image-gallery li:hover .overlay {
    transform: scale(1);
  }


</style>