<template>
    <div class="container mt-5">
    <h2 class="mb-3">Listado de Juegos</h2>
    <label>Filtrar por código</label>
    <input class="form-control form-control-lg" type="text" v-model="search" placeholder="0001">
    
    <p>Cantidad de juegos totales: {{ $store.getters.allGames}} | Total stock: {{ $store.getters.stockTotal }}</p>
    <List :games="filtrarPorCodigo"></List>
    </div>
    
</template>
<script>
import List from './List'
export default {
    data(){
        return {
            search:'',
        }
    },
    methods: {
        backgroundColor() {

        },
    },
    components: {
        List
    },
    computed: {
       filtrarPorCodigo(){
           return this.$store.getters.gameById(this.search);
       }
    }   
}

</script>




