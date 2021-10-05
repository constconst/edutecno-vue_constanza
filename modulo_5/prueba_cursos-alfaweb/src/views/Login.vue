<template>
  <div>
    <Navigation/>
      <div class="wrapper">
        <v-form v-model="valid" @submit.prevent="login">
          <v-container>
            <h1 class="">Login de usuario</h1>
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Correo electrónico"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Contraseña"
                hint="Al menos 8 caracteres"
                counter
                @click:append="show1 = !show1"
                ></v-text-field>
            </v-col> 
          </v-row>
          <v-row>
            <div class="text-center">
              <v-btn
                class="ma-2"
                outlined
                color="indigo"
                type="submit"
              >                  Iniciar
                </v-btn>
                <v-btn
                  class="ma-2"
                  outlined
                  color="deep-orange"
                >
                  Limpiar formulario
                </v-btn>

                <v-btn
                  class="ma-2"
                  outlined
                  color="amber"
                >
                  Limpiar validación
                </v-btn>
            </div>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Login',
  components: {
    Navigation
  },
  data(){
    return{
      email: '',
      password: ''
    } 
  },
  methods: {
    login(){
      
    }
  }

}
</script>

<style scoped lang="scss">
  .wrapper {
    margin-top: 100px;
    @media screen and (max-width: 600px) {
      margin-top: 20px;
    }

  }
</style>
