<template>
  <div class="carrito p-5">
    <div class="detalles bg-light w-75 m-auto p-5">
      <h5>Detalles del pedido:</h5>
      <div class="p-3 list">
        <div>
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <img width="50" />
              <h6 class="mb-0 text-capitalize p-2">Salame</h6>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <h6 class="mb-0 p-2 text-success">
                $9.990
              </h6>
              <button class="btn btn-danger">-</button>
              <b class="mx-2">1</b>
              <button class="btn btn-primary">+</button>
            </div>
          </div>
          <hr class="mt-2" />
        </div>

        <h2>Total: $9.990</h2>
        <button class="btn btn-success">Ir a Pagar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carrito",
};
</script>

<style scoped>
.list {
  background: white;
}
</style>
