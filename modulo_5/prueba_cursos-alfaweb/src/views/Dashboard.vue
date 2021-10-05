<template>
    <div>
        <Navigation/>
        <v-container>
            <v-row>
                <h2 class="text-center">Administración</h2>
            </v-row>
        </v-container>
    </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Dashboard',
  components: {
    Navigation
  }
}
</script>