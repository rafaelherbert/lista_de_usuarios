<template>
  <div>
    <v-app-bar app :height="90" id="main-header">
      <div class="d-flex align-center">
        <v-img src="@/assets/symbol-1.svg" />
        <v-divider v-if="!$vuetify.breakpoint.mobile" class="ml-3 mr-6" vertical></v-divider>
        <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mobile" @click.stop="mobile = !mobile"></v-app-bar-nav-icon>
      </div>

      <SwitchButton v-if="!$vuetify.breakpoint.mobile" class="mr-10" />
      <SearchBar v-if="!$vuetify.breakpoint.mobile" />
      <v-spacer></v-spacer>

      <SearchBar v-if="$vuetify.breakpoint.mobile" style="min-width:50px" />

      <div class="d-flex align-center" v-if="!$vuetify.breakpoint.mobile">
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

    <v-navigation-drawer
      v-model="mobile"
      absolute
      temporary
      right
      v-if="$vuetify.breakpoint.mobile"
    >
      <v-list-item class="d-flex justify-center mt-5">
        <SwitchButton v-if="$vuetify.breakpoint.mobile" />
      </v-list-item>
      <v-list-item>
        <a class="custom-button" @click="openFilterMenu()" style="width:100%;">
          <img src="@/assets/tune.svg" alt srcset />
        </a>
      </v-list-item>
      <v-list-item>
        <a class="custom-button" style="background-color:#D83367;color:white;width:100%;">
          <img src="@/assets/person_white.svg" class="mr-2" alt srcset />
          INCLUIR USUÁRIO
        </a>
      </v-list-item>
      <v-list-item class="d-flex justify-center">
        <img src="@/assets/home.svg" class="mr-4" alt srcset />
        <img src="@/assets/settings.svg" class="mr-4" alt srcset />
        <img src="@/assets/power.svg" class="mr-7" alt srcset />
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import SwitchButton from "./SwitchButton";

export default {
  components: {
    SearchBar,
    SwitchButton,
  },
  data() {
    return {
      mobile: false,
    };
  },
  methods: {
    openFilterMenu() {
      this.$root.$emit("open-filter-menu");
    },
  },
};
</script>

<style lang="scss">
</style>

