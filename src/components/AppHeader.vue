<template>
    <header class="container d-flex justify-content-between align-items-center">

        <section class="my_logo-container">
            <img src="../assets/logo.png" alt="boolflix logo">
        </section>

        <section class="my_categories">
            <ul class="d-flex list-unstyled m-0 my_ul">
                <li v-for="category in categories">
                    <a href="#" class="my_links" @click="firstAxiosCall">
                        {{ category }}
                    </a>
                </li>
            </ul>
        </section>

        <section class="d-flex" role="search">
            <input class="form-control me-2 my_input" type="search" placeholder="Search" aria-label="Search" v-model="search" @keyup.enter="axiosCall">
            <button class="btn btn-outline-danger" type="submit" @click="axiosCall">
                Search
            </button>
        </section>

    </header>
</template>

<script>
    import {store} from "../store.js";
    import axios from "axios";

    export default {
        data() {
            return {
                search: "",
                categories: ["Home","SerieTV","Film","Originali","Aggiunti di recente","La mia lista"],
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
            this.firstAxiosCall ()
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
            },

            firstAxiosCall () {
                // Make a request for a user with a given ID
                axios.get(`https://api.themoviedb.org/3/movie/popular?&page=1&api_key=dc3e5c6f1e5fee243aaae7cfaab19b0e`)
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

    .my_logo-container {
        width: 250px;
        height: 100px;

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
            object-position: center;
        }
    }

    .my_links {
        color: rgb(186, 186, 186);
        font-weight: 300;
        font-size: 0.95rem;
        text-decoration: none;
        cursor: pointer;
        transition: all .5s;

        &:hover {
            color: white;
            font-weight: 700;
            font-size: 1.15rem;
        }
    }

    .my_ul {
        gap: 1rem;
    }

    .my_input {
        background-color: #1b1b1b;
        border: 1px solid white;
        color: white;

        &:focus {
            background-color: #1b1b1b;
            color: white;
            box-shadow: none;
            border-color: red;
        }

        &::placeholder {
            color: rgb(208, 208, 208);
        }
    }
</style>