<template>
    <header class="container">
        <div class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search" @keyup.enter="axiosCall">
            <button class="btn btn-outline-success" type="submit" @click="axiosCall">
                Search
            </button>
        </div>
    </header>
</template>

<script>
    import {store} from "../store.js";
    import axios from "axios";

    export default {
        data() {
            return {
                search: "",
                store
            }
        },

        components: {

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
                    this.store.moviesData = []
                    response.data.results.forEach((element) => {
                        this.store.moviesData.push(element)
                    });
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
                    this.store.seriesData = []
                    response.data.results.forEach((element) => {
                        this.store.seriesData.push(element)
                    });
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });

                this.search = ""
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