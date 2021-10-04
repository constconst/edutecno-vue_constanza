<template>
  <div id="app">
  <div class="container mt-5">
    <nav class="navbar navbar-dark bg-dark">
      <ul class="nav">
        <li class="nav-item"><router-link :to="{name: 'inicio'}" class="nav-link active">Inicio</router-link></li>
        <li class="nav-item"><router-link :to="{name: 'busqueda'}" class="nav-link">Búsqueda</router-link></li>
        <li class="nav-item"><router-link :to="{name: 'ventas'}" class="nav-link">Ventas</router-link></li>
        <li class="nav-item"><router-link :to="{name: 'total'}" class="nav-link">Total</router-link></li>
      </ul>
    </nav>
      <transition name="vista">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>

.vista-enter-active, .vista-leave-active {
    transition: opacity .1s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
</style>
