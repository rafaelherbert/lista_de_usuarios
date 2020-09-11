<template>
  <v-app>
    <Header />
    <FilterMenu />
    <v-main class="bg">
      <Table class="mr-10 ml-10 mt-10" />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Table from "./components/Table";
import Header from "./components/Header";
import FilterMenu from "./components/FilterMenu";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Table,
    Header,
    FilterMenu,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Audiowide&display=swap");

.custom-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  border-radius: 4px;
  background-color: white;
  text-decoration: none;
  -webkit-box-shadow: 0px 5px 14px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 14px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 14px -10px rgba(0, 0, 0, 0.75);
  font-size: 12px;
  cursor: pointer;
}

.audiowide {
  font-family: "Audiowide", cursive;
}

.bg {
  background-color: #f5f5f5 !important;
}
</style>