<template>
    <div class="list-wrapper">
        <ul>
            <li v-for="(game, index) in games" :key="index" :style="{ backgroundColor: game.color}">
                <p>{{ game.codigo}} | {{ game.nombre }} | {{ game.stock }} | {{ game.precio }}</p>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "List",
    props: {games: Array}
}
</script>

<style scoped>
    .list-wrapper {
        margin-top: 40px;
        
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>