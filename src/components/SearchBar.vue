<template>
    <div class="d-flex align-center">
        <input type="text" v-model="search" v-on:keyup="searchFilter()" id="search_input" placeholder="Pesquisar..." />
        <img src="@/assets/search.svg" alt="" srcset=""/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: null,
        }
    },
    methods: {
        searchFilter() {
            this.$root.$emit('table-search-filter', this.search);
        }
    }
}
</script>

<style lang="scss" scoped>
    #search_input {
        border-bottom: 1px solid grey;
        width:300px;
        height:36px;
        outline:none;
        font-style:italic;
    }

    img {
        position: relative;
        right:25px;
    }
</style>