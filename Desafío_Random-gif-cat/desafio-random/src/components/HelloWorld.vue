<template>
 <div class="cat-form">
   <div class="columns">
      <div class="column is-two-fifths"></div>
      <div class="column">
         <label for="titulo">Título</label>
         <input class="input" v-model="title" id="titulo">
      </div>
      <div class="column is-two-fifths"></div>
   </div>
   <div class="columns">
      <div class="column is-two-fifths"></div>
      <div class="column">
         <label for="filtro">Filtro</label>
         <!-- Dropdown menu -->
          <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Seleccionar</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <a href="#" class="dropdown-item">
                  Sepia
                </a>  
              </div>
            </div>
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
   <button class="button is-warning is-light">Obtener gatito</button>


<div class="container">
  <div class="result">
    <h2 style="color:white;font-size:30px;">{{ title }}</h2>
    <img src="https://picsum.photos/500/500?random=1" alt="">
  </div>
</div>

</div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
          return {
            title: '',
            filter: [],
            color: '',
            size: ''

          }
        },
        methods: {
          // fetch() {
          //   let result =
          //   // Simple GET request using fetch
          //   // fetch(`https://cataas.com/cat/gif/says/${text}?filter=${filter}&color=${color}&size=${size}&type=or${cat}`)
          //   fetch(`https://cataas.com/cat/gif/says/holi?filter=sepia&color=orange&size=40&type=or`)
          //   .then(response => response.json())
          //   // .then(data => this.pokemon = data)
          //   // .then(data => this.movimientos = data.moves)
          //   // .then(data => this.habilidades = data.abilities);
          // }
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