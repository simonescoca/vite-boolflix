<template>
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w300${serie.poster_path}`" class="card-img-top" :alt="`Copertina di ${serie.name}`">
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
            <p>
                <i class="fa-solid fa-star my_gold-star" v-for="i in Math.ceil( (serie.vote_average) / 2)"></i>
                <i class="fa-regular fa-star my_gold-star" v-for="i in (5 - Math.ceil( (serie.vote_average) / 2))"></i>
            </p>
            <p>
                {{ serie.overview }}
            </p>
        </div>
    </div>
</template>

<script>
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
        position: relative;
        cursor: pointer;

        img {
            border-radius: 5px;
            transition: all .3s;
        }

        &:hover img {
            filter: brightness(30%);
        }

        &:hover .card-body {
            opacity: 1;
        }
    }

    .card-body {
        overflow: auto;
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        color: rgb(202, 202, 202);
        transition: all .3s;
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

    .my_gold-star {
        color: #d8b450;
    }
</style>