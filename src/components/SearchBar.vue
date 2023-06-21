<template>
    <div class="container">
        <div class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
            <button class="btn btn-outline-success" type="submit" @click="axiosCall">
                Search
            </button>
        </div>
        <MoviesContainer :moviesData="moviesData"/>
        <SeriesContainer :seriesData="seriesData" />
    </div>
</template>

<script>
    import axios from "axios"
    import MoviesContainer from "./MoviesContainer.vue"
    import SeriesContainer from "./SeriesContainer.vue"
    export default {
        data() {
            return {
                search: "",
                moviesData: [],
                seriesData: [],
            }
        },

        components: {
            MoviesContainer,
            SeriesContainer
        },

        props: {

        },

        mounted () {

        },

        created () {

        },

        methods: {
            axiosCall () {
                // Make a request for a user with a given ID
                axios.get(`https://api.themoviedb.org/3/search/movie?api_key=dc3e5c6f1e5fee243aaae7cfaab19b0e&query=${this.search}`)
                .then((response) => {
                    // handle success
                    response.data.results.forEach((element) => {
                        this.moviesData.push(element)
                    });
                    console.log(this.moviesData);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });

                // Make a request for a user with a given ID
                axios.get(`https://api.themoviedb.org/3/search/tv?api_key=dc3e5c6f1e5fee243aaae7cfaab19b0e&query=${this.search}`)
                .then((response) => {
                    // handle success
                    response.data.results.forEach((element) => {
                        this.seriesData.push(element)
                    });
                    console.log(this.moviesData);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use "../styles/variables";
    @use "../styles/mixins";

    .container {
        padding: 3rem 0;
    }
</style>