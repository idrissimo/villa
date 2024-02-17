<template>
 <div id="footer-wrapper">
    <div id="bottom-banner">
        <img src="~/assets/images/backyard.jpg" alt="">
    </div>
    <div id="footer">
        <div id="social-icons">
            <a href="#"><i class="ri-facebook-circle-fill"></i></a> 
            <a href="#"><i class="ri-youtube-fill"></i></a> 
            <a href="#"><i class="ri-instagram-fill"></i></a>
        </div>
        <div id="footer-menu">
            <ul id="menu-footer1" class="menu flex gap-4">
                <li><a href="#introduction">Notre Villa</a></li>
                <li><a href="#map">Localisation</a></li>
                <li><a href="#booking">Contactez-nous</a></li>
            </ul>
        </div>
        <div id="footer-logo">
            <svg id="twogood" width="101" height="65" viewBox="0 0 202 135" xmlns="http://www.w3.org/2000/svg" style="transform: translate(0px, 0px);">
            <g transform="matrix(1,0,0,1,-64.0055,-180.685)">
                <path d="M88.171,273.185L100.171,183.685L124.171,183.685L124.171,200L154.171,200L154.171,183.685L172.171,183.685L172.171,200L204.171,200L204.171,183.685L228.171,183.685L238.671,273.185C238.671,273.185 165.171,246.685 88.171,273.185Z" style="fill:none;stroke:white;stroke-width:6px;"/>
                <g transform="matrix(0.863636,0,0,0.888889,24.9779,31.6317)">
                    <path d="M183.171,232.935C183.171,227.564 180.976,222.414 177.067,218.616C173.158,214.818 167.857,212.685 162.329,212.685C161.751,212.685 161.171,212.685 160.593,212.685C148.762,212.685 139.171,222.003 139.171,233.497L139.171,257.685L183.171,257.685L183.171,232.935Z" style="fill:none;stroke:white;stroke-width:6.85px;"/>
                </g>
                <g transform="matrix(1,0,0,1,0,-2)">
                    <path d="M74.171,282.185C74.171,282.185 153.171,238.685 254.171,282.185" style="fill:none;stroke:white;stroke-width:6px;"/>
                </g>
                <g transform="matrix(1,0,0,1,-9,-22)">
                    <text x="72.171px" y="336.685px" style="font-family:'BerlinSansFB-Reg', 'Berlin Sans FB', sans-serif;font-size:28px;font-weight: bold;fill: white;">V<tspan x="92.895px 102.914px 120.781px 138.647px 160.492px 170.88px 194.366px 218.057px 239.929px 259.956px " y="336.685px 336.685px 336.685px 336.685px 336.685px 336.685px 336.685px 336.685px 336.685px 336.685px ">ILLA NOURE</tspan></text>
                </g>
            </g>
        </svg>
          
        </div>
    </div>
            
</div>


</template>

<style lang="scss">
#footer-wrapper {
    background-color: var(--primary-color);
    color: white;
}


#footer {
    padding: 2rem;
    max-width: 1440px;
    margin: 0 auto;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    list-style: none;
}

#footer #social-icons, #footer-logo i {
    font-size: 1.5rem;
}

#bottom-banner {
    position: relative;
    height: 200px;

    &::before {
        content: '';
        background-color: rgba($color: #404a38, $alpha: 0.8);
        position: absolute;
        top: 0;
        z-index: 18;
        width: 100%;
        height: 100%;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

}



</style>