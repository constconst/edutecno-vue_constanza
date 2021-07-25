<template>
  <div class="cat-form">
    <div class="columns">
              <div class="column is-two-fifths"></div>

        <div class="column">
          <label for="titulo">Título</label>
          <input class="input" v-model="title" id="titulo" placeholder="Título del gif">
        </div>
                <div class="column is-two-fifths"></div>

    </div>
    <div class="columns">
        <div class="column is-two-fifths"></div>
        <div class="column">
          <label for="filtro">Filtro</label>
          <!-- Dropdown menu -->
          <div class="select">
            <select id="filtro" v-model="filter" placeholder="Escoge un filtro">
              <option value="blur">Blur</option>
              <option value="mono">Mono</option>
              <option value="sepia">Sepia</option>
              <option value="negative">Negative</option>
              <option value="paint">Paint</option>
            </select>
          </div>
          <!-- Fin dropdown -->
        </div>
        <div class="column is-two-fifths"></div>
    </div>
    <div class="columns">
        <div class="column is-two-fifths"></div>
        <div class="column">
          <label for="titulo">Color</label>
          <div class="circle"></div>

        </div>
        <div class="column is-two-fifths"></div>
    </div>
    <div class="columns">
        <div class="column is-two-fifths"></div>
        <div class="column">
          <label for="titulo">Tamaño</label>
          <!-- Dropdown -->

          <!-- FIn dropdown -->
        </div>
        <div class="column is-two-fifths"></div>
    </div>
    <button class="button is-warning is-light" @click="myCat()">Obtener gatito</button>


<div class="container">
  <div class="result">
    <h2 style="color:white;font-size:30px;">{{ title }}</h2>
    <img v-bind:src="imgSrc" alt="">
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
            color: '',
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
    width: 30px;
    height: 30px;
    background-color: gray;
    border-radius: 50%;
    margin-left: 20px;
  }

  .center-container {
    margin: 0 auto;
  }

  .result {
    width: 500px;
    height: 500px;
    margin: 0 auto;
    padding: 30px;
    

  }
</style>