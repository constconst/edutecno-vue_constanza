<template>
    <div>
        <h1>Detalle de ventas</h1>
        <table>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(venta, index) in listadoVentas" :key="index">
                    <td>{{ venta.codigo }}</td>
                    <td>{{ venta.nombre }}</td>
                    <td>{{ venta.precio }}</td>
                </tr>
            </tbody>
        </table>
        <p class="negrillas">El monto total de ventas es ${{ montoTotalVentas }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['listadoVentas', 'montoTotalVentas'])
    }
}
</script>