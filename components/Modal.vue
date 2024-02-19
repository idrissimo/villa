<template>
    <div class="modal-overlay" @click="$emit('close-modal')">
        <div class="modal p-8" @click.stop>
          <h3>le titre</h3>
            <SwiperGallery2></SwiperGallery2>
        </div>
        <div class="close" @click="$emit('closeModal')" >
            <i class="ri-close-line"></i>
        </div>
  </div>
</template>

<style>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 25;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 20%;
  margin-top: 100px;
  border-radius: 20px;
}
.close {
  margin: 20% 0 0 16px;
  margin: 100px 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
}
</style>