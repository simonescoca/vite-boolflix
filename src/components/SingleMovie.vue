<template>
    <div class="card">
        <img src="..." class="card-img-top" :alt="`Copertina di ${movie.title}`">
        <div class="card-body">
            <h5 class="card-title">
                Titolo: {{ movie.title }}
            </h5>
            <h5>
                Titolo originale: {{ movie.original_title }}
            </h5>
            <div class="d-flex align-items-center justify-content-start my_gap">
                <div>
                    Lingua originale:
                </div>
                <div class="my_flag-container">
                    <img :src="checkFlag(movie.original_language)" :alt="movie.original_language">
                </div>
            </div>
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
            movie: Object,
            flags: Object
        },

        mounted () {

        },

        created () {

        },

        methods: {
            checkFlag (language) {
                let aFlag = "this.flags." + language
                aFlag = eval(aFlag)
                return aFlag
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use "../styles/variables";
    @use "../styles/mixins";

    .card {
        width: 18rem;
    }

    .my_flag-container {
        height: 25px;
        width: 25px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }
    }

    .my_gap {
        gap: 1rem;
    }
</style>