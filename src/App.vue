<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div class="LW">
    <div class="LogoWrapper">
      <div class="Logo"></div>
    </div>
  </div>
  <div class="NavBar__Wrapper brackets container">
    <ul class="NavBar">
      <li class="NavBar__Item">Inicio</li>
        <li class="NavBar__Item">Detalles</li>
        <li class="NavBar__Item">Confirmación</li>
    </ul>
  </div>
  <div class="Body__Wrapper">
    <router-view/>
  </div>
  <div class="Footer">
    <div class="footerLeft">
      <p>
        ANGIE 
        &
        DIEGO 2024
      </p>

    </div>
    <div class="footerRigth">
      <p>
        Hecho con🤍 por: <a href="https://github.com/DemDev404" target="_blank">🎃</a>
      </p>
    </div>
  </div>
  
</template>

<style scoped>
</style>
