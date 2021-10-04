<template>
  <div class="card w-100">
    <img class="card-img-top" />
    <div class="card-body">
      <h4 class="card-title text-capitalize">Salame</h4>
      <hr />
      <p class="card-text">
        <b>Ingredientes:</b>
      </p>
      <ul class="m-0">
        <li class="text-capitalize w-75">&#127829; Salame</li>
      </ul>
    </div>
    <hr />
    <div class="card-body">
      <h2 class="text-center text-dark pb-3">$9.990</h2>
      <div class="d-flex justify-content-around">
        <router-link to="/pizza"
          ><button class="btn btn-info text-white">
            Ver Más &#128064;
          </button></router-link
        >
        <button class="btn btn-danger" >
          Añadir &#128722;
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
};
</script>
