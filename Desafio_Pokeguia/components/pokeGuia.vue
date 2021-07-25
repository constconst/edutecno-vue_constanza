<script>
// Fetch es la forma más simple de hacer llamadas a una api.
export default {
    data(){
        return {
            img:'dsdlkslsk',
            nombre: '',
            habilidades:'',
            movimientos:'',            
        };
    },
    computed: {
        infoPokemon(){
            return this.img + this.nombre + this.habilidades + this.movimientos
    },
    created() {
        fetch( "https://pokeapi.co/api/v2/pokemon/nombre_pokemon" )
        .then(response => response.json())
        .then(json => console .log(json));      
    }
}
</script>
