<template>
    <div class="container d-flex flex-wrap">
       <SingleSerie v-for="serie in seriesData" :serie="serie" :flags="flags"/>
    </div>
</template>

<script>
    import SingleSerie from "./SingleSerie.vue"
    export default {
        data() {
            return {
                flags: {
                    it: "https://www.colorkit.it/image/cache/catalog/OLD/Bandiere/Italia/bandiera%20italiana%20adesiva-600x600.jpg",
                    fr: "https://www.aroundtheworld.pro/wp-content/uploads/2019/10/Bandiera-Francese-e1571734682907.jpg",
                    de: "https://www.germania.life/wp-content/uploads/2017/12/bandierade.jpg",
                    en: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
                    cn: "https://cdn.britannica.com/90/7490-004-BAD4AA72/Flag-China.jpg",
                    es: "https://italflag.it/wp-content/uploads/2021/11/Bandiera-Spagna.jpg",
                    ja: "https://www.corriereasia.com/wp-content/uploads/2021/05/bandiera-giappone.png"
                }
            }
        },

        components: {
            SingleSerie
        },

        props: {
            seriesData: Array
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

    .container {
        gap: 2rem;
    }
</style>