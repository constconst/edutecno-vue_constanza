<template>
        <div id="nav">
      <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >

      <v-toolbar-title>Cursos Alfaweb</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 1"
            :key="n"
            @click="() => {}">
            <v-list-item-title>
            <router-link to="/">Home</router-link> |
            <router-link to="/dashboard">Admin</router-link>  |
            <v-btn elevation="2" to="/">Login</v-btn> 
            <v-btn elevation="2" to="/">Log out </v-btn> 
            <router-link to="/registro">Registro</router-link>  |
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
         
</div>
</template>

<script>

export default {
    name: "Navigation"
}
</script>

<style scoped lang="scss">

#nav {
  padding: 30px;

  @media screen and (max-width: 600px) {
     padding: 0; 
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
