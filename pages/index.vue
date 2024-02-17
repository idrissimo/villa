<template>
    <Intro></Intro>
    <Modal v-show="showModal"  @close-modal="showModal = false"></Modal>
    <div class="save-btn">
        <button @click="showModal = true">show gallery</button>
    </div>
    <!-- <SwiperGallery2></SwiperGallery2> -->
    <!-- <Gallery></Gallery> -->
    <!-- <Footer></Footer> -->
</template>
<script setup>

import {ref} from 'vue'
const showModal= ref(false)

</script>