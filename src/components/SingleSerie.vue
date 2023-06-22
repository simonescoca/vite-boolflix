<template>
    <div class="card">
        <img src="..." class="card-img-top" :alt="`Copertina di ${serie.name}`">
        <div class="card-body">
            <h5 class="card-title">
                Titolo: {{ serie.name }}
            </h5>
            <h5>
                Titolo originale: {{ serie.original_name }}
            </h5>
            <div class="d-flex align-items-center justify-content-start my_gap">
                <div>
                    Lingua originale:
                </div>
                <div class="my_flag-container">
                    <img :src="checkFlag(serie.original_language)" :alt="serie.original_language">
                </div>
            </div>
            <h5>
                Voto: {{ serie.vote_average }}
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
            serie: Object,
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