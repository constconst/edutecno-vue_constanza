<template>
  <div>
    <Navigation/>
  <v-container>
    <v-row justify="space-around">
      <h2>Lista de cursos</h2>
    </v-row>
    <v-row>
      <!-- Cards -->
      <Card/>
    </v-row>
  </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Card from '@/components/Card.vue'


export default {
  name: 'Home',
  components: {
    Navigation,
    Card
  },
      data: () => ({
      messages: [
        {
          from: 'You',
          message: `Sure, I'll see you later.`,
          time: '10:42am',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'John Doe',
          message: 'Yeah, sure. Does 1:00pm work?',
          time: '10:37am',
          color: 'green',
        },
        {
          from: 'You',
          message: 'Did you still want to grab lunch today?',
          time: '9:47am',
          color: 'deep-purple lighten-1',
        },
      ],
    }),
}
</script>