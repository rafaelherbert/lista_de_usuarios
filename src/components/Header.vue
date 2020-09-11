<template>
  <v-app-bar app :collapse="$vuetify.breakpoint.sm" clipped-right :height="90" id="main-header">
    <div class="d-flex align-center">
      <v-img src="@/assets/symbol-1.svg" />
      <v-app-bar-nav-icon class="d-md-none"></v-app-bar-nav-icon>
      <v-divider class="ml-3 mr-6" vertical></v-divider>
      <SwitchButton />
      <SearchBar />
    </div>
    
    <v-spacer></v-spacer>

    <div class="d-flex align-center">
      <a class="custom-button mr-2" @click="openFilterMenu()">
        <img src="@/assets/tune.svg" alt srcset />
      </a>

      <a class="custom-button mr-10" style="background-color:#D83367;color:white;">
        <img src="@/assets/person_white.svg" class="mr-2" alt srcset />
        INCLUIR USUÁRIO
      </a>

      <img src="@/assets/home.svg" class="mr-4" alt srcset />
      <img src="@/assets/settings.svg" class="mr-4" alt srcset />
      <img src="@/assets/power.svg" class="mr-7" alt srcset />
    </div>
  </v-app-bar>
</template>

<script>
import SearchBar from "./SearchBar";
import SwitchButton from "./SwitchButton";

export default {
  components: {
    SearchBar,
    SwitchButton
  },
  methods: {
      openFilterMenu() {
          this.$root.$emit('open-filter-menu');
      }
  }
};
</script>

<style lang="scss">
</style>

