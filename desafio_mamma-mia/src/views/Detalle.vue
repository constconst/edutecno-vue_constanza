<template>
  <div class="detalle py-5 d-flex justify-content-center container">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-5 img"></div>
        <div class="col-md-7">
          <div class="card-body">
            <h3 class="card-title text-capitalize">Salame</h3>
            <hr />
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              quasi sequi error nulla, voluptates laborum mollitia corrupti,
              tempore dolores saepe velit quis magnam non minus quos. Hic est
              molestiae possimus!
            </p>
            <p class="card-text ">
              <b>Ingredientes:</b>
            </p>
            <ul>
              <li class="text-capitalize w-75">
                &#127829; Salame
              </li>
            </ul>

            <div class="d-flex justify-content-between">
              <h2 class=" text-dark">
                Precio: $9.990
              </h2>
              <button class="btn btn-danger">
                Añadir &#128722;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detalle",
};
</script>

<style scoped>
.img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
