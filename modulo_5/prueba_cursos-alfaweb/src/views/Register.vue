<template>
     <div>
    <Navigation/>
      <div class="nav-wrapper">
        <h1 class="text-center">Registro de usuario</h1>
        <v-form v-model="valid" @submit.prevent="register">
          <v-container class="nav-container">
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="email"
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
              >
                  Iniciar
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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default {
  name: 'Register',
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
    register(){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.email, this.password)
            .then(() => {
                alert("Usuario registrado con éxito")
                    // Redirección
                // this.$router.push('/')
            })
            .catch((error) => {
                alert(error.message)
            })
    }
  }

}
</script>