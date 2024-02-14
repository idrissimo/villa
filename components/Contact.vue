<template>
    <div id="contactus">
        <h3 id="booking" class="text-green text-3xl lg:text-4xl font-display tracking-tight">Contactez-nous</h3>
        <form action="" id="contact">
            <div class="flex gap-2">
                <div class="form-control"><input type="text" name="name" id="" placeholder="name" v-model="leName"></div>
                <div class="form-control"><input type="email" name="email" id="" placeholder="Email" v-model="LeMail"></div>
            </div>
            <div class="form-control"><input type="date" name="date" v-model="laDate" ></div>
            <div class="form-control"><input type="date" name="todate" v-model="toDate" ></div>
            <div class="form-control">
                <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
            </div>
            <div class="form-control"><button>Envoyer..</button></div>
           
        </form>
    </div>
    
</template>
<script setup>

import { ref } from 'vue';

const laDate = ref(tdate());
const toDate = ref(tdate());
const leName = ref('');
const LeMail = ref('');

function tdate(){
   
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) {
        day = `0${day}`;
    }

    if (month < 10) {
        month = `0${month}`;
    }

    let currentDate = `${year}-${month}-${day}`;
    return currentDate;

}

</script>

<style lang="scss">
#contactus h3 {
    margin: 1rem 0;
}
.form-control {
    padding: 5px 0;
    input,textarea,button{
        width: 100%;
        padding: 0px 15px;
        background-color: #404a38;
        color: white;
    }
    input:focus,textarea:focus {
       outline: none;
    }
    input::placeholder,textarea::placeholder {
       color: white;
    }
}
#contact button {
    background-color:white;
    color: #404a38;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  color-scheme: dark;
}
</style>