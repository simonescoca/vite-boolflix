<template>
    <div class="container">
        <div class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
            <button class="btn btn-outline-success" type="submit" @click="axiosCall">
                Search
            </button>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        data() {
            return {
                search: ""
            }
        },

        components: {

        },

        props: {

        },

        mounted () {

        },

        created () {
            this.axiosCall ()
        },

        methods: {
            axiosCall () {
                // Make a request for a user with a given ID
                axios.get(`https://api.themoviedb.org/3/search/movie?api_key=dc3e5c6f1e5fee243aaae7cfaab19b0e&query=${this.search}`)
                .then(function (response) {
                    // handle success
                    console.log(response);
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