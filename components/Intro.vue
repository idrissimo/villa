<template>
<div class="pageIntor">
    <div class="max-w-2xl lg:max-w-7xl mx-auto px-4 md:px-8 relative">
        <h2 class="text-green text-6xl lg:text-huge font-display lg:ml-44 tracking-tight relative z-10">Villa NOUR</h2>
        <div class="mt-4 lg:mt-0 prose max-w-none leading-loose pr-4 text-brown lg:max-w-md lg:ml-64 pl-4 xl:ml-80 text-base relative z-10">
            <p>Villa privé de plus de 2000m’ avec une grande piscine, 3 chambres dont une master avec dressing, cuisine américaine équipée, salon, 2 salles de bain, sanitaires haut de gamme, terrasse avec une vue sur les montagnes de l’Atlas, piscine et jardin, à proximité du désert d’Agafay, circuits QUAD et Buggy, 5 min en voiture du Lac Lalla Takerkousst…</p>
            <p>Située à 35min de Marrakech sur la route d’Amezmiz. 5Km du village Lalla Takerkousst. Jet Ski au Lac - Circuits en Quad/Buggy - Baptême de Parapente...</p>
                  
            <div id="caracteristiques" class="mb-8">
                <h3 class="text-green text-3xl lg:text-4xl font-display lg:ml-44 tracking-tight">Ce que Nous proposant:</h3>
                       
                <div class="flex gap-4">
                    <ul>
                        <li><i class="ri-flower-fill"></i> Vue sur le jardin</li> 
                        <li><i class="ri-bowl-fill"></i> Cuisine</li> 
                        <li><i class="ri-parking-fill"></i> Parking gratuit</li> 
                        <li><i class="ri-tv-fill"></i> TV HD 55</li> 
                    </ul>
                    <ul>
                        <li><i class="ri-square-fill"></i> Piscine Privé</li> 
                        <li><i class="ri-home-wifi-fill"></i> Wifi</li> 
                        <li><i class="ri-vidicon-fill"></i> Caméras de surveillance</li>
                    </ul>

                </div>
                        
            </div>
            <Contact></Contact>
            <Maps></Maps>
        </div>
        <aside class="lg:absolute pt-12 lg:pt-0 -rotate-[4deg] -top-8 lg:-left-96">
                    <img src="~/assets/images/jardin-04.jpg" class="" width="650" alt="La Borghesiana Romana">
                    <p class="hidden lg:block font-display text-3xl text-tan text-right mt-2 mr-4">41.872490º, 12.664360º</p>
        </aside>
        <aside class="">
            <img src="~/assets/images/jardin-01.jpg" class="lg:absolute rotate-[5deg] lg:block absolute -left-[320px] top-[520px]" width="430" alt="Another picture of the grounds at La Borghesiana Romana">
            <img src="~/assets/images/jardin-01.jpg" class="lg:absolute rotate-[5deg] -right-16 top-24" width="430" alt="Another picture of the grounds at La Borghesiana Romana">
            <img src="~/assets/images/jardin-01.jpg" class="lg:absolute rotate-[5deg] -right-16 top-24" width="430" alt="Another picture of the grounds at La Borghesiana Romana">
            <img src="~/assets/images/chambre-22.jpg" class="lg:absolute -rotate-[6deg] -right-28 top-[320px]" width="360" alt="Yet another Another picture of the grounds at La Borghesiana Romana">
            <img src="~/assets/images/jardin-01.jpg" class="lg:absolute -rotate-2 -right-24 top-[520px]" width="440" alt="More grounds at La Borghesiana Romana">
        </aside>        

    </div>

            
</div>

</template>

<style>
.pageIntor {
    
    margin-bottom:4rem;
    padding-bottom: 0rem;
}
.pageIntor h2{
    text-transform: uppercase;
}

.pageIntor img {
    border: 5px solid white;
}

#map {
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--primary-color);
}

#map iframe {
    max-width: 100%;
}

#caracteristiques ul {
    list-style: none;
}
#caracteristiques h3,#map h3 {
    color: var(--primary-color);
    margin: 1rem 0;
}
#caracteristiques i {
    color: var(--primary-color);
}
</style>