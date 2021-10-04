<template>
  <div>
    <h1>Ventas</h1>
    <p>Cantidad de juegos con stock: {{ juegosConStock }}</p>
    <table>
      <tbody>
        <tr v-for="(juego, index) in listaJuegosConStock" :key="index">
          <td>{{ juego.nombre }} - {{ juego.stock }}</td>
          <td><button @click="vender(juego)">Vender</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["listaJuegosConStock", "juegosConStock"]),
  },
  methods: {
    vender(juego) {
      this.$store.dispatch("vender", juego);
    },
  },
};
</script>