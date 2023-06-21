<template>
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" :alt="`Copertina di ${movie.title}`">
        <div class="card-body">
            <h5 class="card-title">
                Titolo: {{ movie.title }}
            </h5>
            <h5>
                Titolo originale: {{ movie.original_title }}
            </h5>
            <h5>
                Lingua originale: {{ movie.original_language }}
            </h5>
            <h5>
                Voto: {{ movie.vote_average }}
            </h5>
        </div>
    </div>
</template>

<script>
    // import axios from "axios"
    export default {
        data() {
            return {

            }
        },

        components: {

        },

        props: {
            movie: Object
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
</style>