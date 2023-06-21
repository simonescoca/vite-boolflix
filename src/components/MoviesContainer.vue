<template>
    <div class="container d-flex flex-wrap">
       <SingleMovie v-for="movie in moviesData" :movie="movie"/>
    </div>
</template>

<script>
    import SingleMovie from "./SingleMovie.vue"
    export default {
        data() {
            return {

            }
        },

        components: {
            SingleMovie
        },

        props: {
            moviesData: Array
        },

        mounted () {

        },

        created () {

        },

        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    @use "../styles/variables";
    @use "../styles/mixins";

    .container {
        gap: 2rem;
    }
</style>