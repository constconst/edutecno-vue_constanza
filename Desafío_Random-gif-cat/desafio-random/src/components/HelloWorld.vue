<template>
  <div class="cat-form">
    <div class="container">
      <div class="columns">
          <div class="column is-one-third mt-3">
              <!-- Título -->
              <div class="titulo-wrapper flex-wrapper mb-6">
                <label for="titulo" class="label">Título</label>
                <input class="input" v-model="title" id="titulo" placeholder="Título del gif">
              </div>
              <!-- Filtro -->
              <div class="filter-wrapper flex-wrapper mb-6">
                <label for="filtro" class="label">Filtro</label>
                <!-- Filtro -  Dropdown menu -->
                <div class="select">
                  <select id="filtro" v-model="filter" placeholder="Escoge un filtro">
                    <option value="blur">Blur</option>
                    <option value="mono">Mono</option>
                    <option value="sepia">Sepia</option>
                    <option value="negative">Negative</option>
                    <option value="paint">Paint</option>
                  </select>
                </div>
              </div>
              <!-- Fin dropdown -->
              <!-- Color con texto -->
              <!-- <div class="color-wrapper flex-wrapper mb-6">
                <label for="titulo" class="label">Color</label>
                <div class="flex-wrapper">
                <input class="input" v-model="color" id="color" placeholder="Escribe un color (en inglés)">
                <div class="circle" :style="{ backgroundColor: color }"></div>
                </div>
              </div> -->
              <!-- Color con select -->
              <div class="color-wrapper flex-wrapper mb-6">
                <label for="titulo" class="label">Color</label>
                <div class="flex-wrapper">
                  <div class="select">
                  <select id="color" v-model="color" placeholder="Escoge un filtro">
                    <option value="pink">Rosado</option>
                    <option value="red">Rojo</option>
                    <option value="yellow">Amarillo</option>
                    <option value="blue">Azul</option>
                    <option value="indigo">Morado</option>
                    <option value="lightblue">Celeste</option>
                    <option value="aquamarine">Verde agua</option>

                  </select>
                </div>
                <div class="circle" :style="{ backgroundColor: color }"></div>
                </div>
              </div>
            
              <!-- Tamaño de letra -->
              <div class="size-wrapper flex-wrapper mb-6">
                <label for="titulo" class="label">Tamaño</label>
                <!-- Input -->
                    <input class="input" v-model="size" placeholder="Tamaño de letra en pixeles">
                <!-- FIn input -->
              </div>
              <button class="button is-warning is-light mt-2" @click="myCat()">Obtener gatito</button>

          </div>

      <div class="result column-is-two-thirds ">
        <h2 style="color:white;font-size:30px;">{{ title }}</h2>
        <img v-bind:src="imgSrc" alt="">
      </div>
  </div>
</div>
</div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
          return {
            imgSrc: '',
            title: '',
            filter: ["blur", "mono", "sepia", "negative", "paint", "pixel"],
            color: ["pink", "red", "yellow", "indigo", "lightblue", "gray"],
            size: ''
          }
        },
        methods: {
          myCat() {
            this.imgSrc = `https://cataas.com/cat/gif/says/${this.title}?filter=${this.filter}&color=${this.color}&size=${this.size}`
          }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .circle {
    width: 35px;
    height: 35px;
    background-color: black;
    border-radius: 50%;
    margin-left: 10px;
  }

  .center-container {
    margin: 0 auto;
  }

  .result {
    margin: 0 auto;
    padding: 30px;
  }
  .flex-wrapper {
    display: flex;
    align-items: center;
    
  }
  .label {
    text-align: left;
    font-size: 20px;
    margin-right: 10px;
  }
  .column {
    align-items:center;
  }

</style>