<template>
  <div>
    <h2>Agregar curso</h2>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="form.codigo"
      :counter="10"
      :rules="nameRules"
      label="Código"
      required
    ></v-text-field>
    <v-text-field
      v-model="form.name"
      :counter="10"
      :rules="nameRules"
      label="Nombre"
      required
    ></v-text-field>
        <v-text-field
      v-model="form.stock"
      :counter="10"
      :rules="nameRules"
      label="Stock"
      required
    ></v-text-field>
      <v-text-field
      v-model="form.precio"
      :counter="10"
      :rules="nameRules"
      label="Precio"
      required
    ></v-text-field>


    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
  </div>
</template>