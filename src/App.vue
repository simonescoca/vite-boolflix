<template>
    <AppHeader />
    <AppMain />
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
</style>