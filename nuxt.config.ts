// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
    head: {
      viewport: 'width=device-width, initial-scale=1.0',
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css',
          
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css',
          
        },

      ],
      script: [
        // { 
        //   hid: 'gsap', 
        //   src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js', 
        //   defer: true,
        //   integrity:'sha512-EZI2cBcGPnmR89wTgVnN3602Yyi7muWo8y1B3a8WmIv1J9tYG+udH4LvmYjLiGp37yHB7FfaPBo8ly178m9g4Q==',
        //   referrerpolicy:'no-referrer',
        //   crossorigin:'anonymous' }
      ],
      title:'Villa Noure',
    }
    
  }
  

})
