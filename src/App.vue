<template>
    <div class="my_background">
        <AppHeader />
        <div class="my_main-box">
            <AppMain />
        </div>
    </div>
</template>

<script>
    import AppHeader from "./components/AppHeader.vue";
    import AppMain from "./components/AppMain.vue";
    export default {
        data() {
            return {
                
            }
        },

        components: {
            AppHeader,
            AppMain
        },

        props: {

        },

        mounted () {

        },

        created () {

        },

        methods: {

        }
    }
</script>

<style lang="scss">
    @import "bootstrap/scss/bootstrap";
    @import "./styles/general.scss";

    .my_background {
        background-color: #1b1b1b;
        height: 100vh;
    }

    .my_main-box {
        height: calc(100vh - 196px);
        overflow: auto;
        scroll-behavior: smooth;
    }
</style>