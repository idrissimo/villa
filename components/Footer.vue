<template>
 <div id="footer-wrapper">
    <div id="bottom-banner">
        ici une banniere
    </div>
    <div id="footer">
        <div id="social-icons">
            <a href="#"><i class="ri-facebook-circle-fill"></i></a> 
            <a href="#"><i class="ri-youtube-fill"></i></a> 
            <a href="#"><i class="ri-instagram-fill"></i></a>
        </div>
        <div id="footer-menu">
            <ul id="menu-footer1" class="menu flex gap-4">
                <li><a href="https://yoyo-rent.com/qui-sommes-nous/">Qui sommes-nous</a></li>
                <li><a href="https://yoyo-rent.com/conditions-de-location/">Conditions générales de location</a></li>
                <li><a href="https://yoyo-rent.com/contactez-nous/">Contactez-nous</a></li>
            </ul>
        </div>
        <div id="footer-logo">
            <i class="ri-bluesky-fill"></i>
            <span>VILLA NOURE</span>
        </div>
    </div>
            
</div>


</template>

<style>
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



</style>