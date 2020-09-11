<template>
  <div>
    <v-navigation-drawer
      absolute
      permanent
      right
      id="filter_menu"
      width="480"
      :style="{display:display}"
    >
      <div class="head">
        <div class="left">
          <img src="@/assets/tune.svg" class="mr-3" />
          <span class="audiowide" style="color:#333333">FILTROS</span>
        </div>
        <div class="custom-button elevation-1" @click="close()">
          <img src="@/assets/close.svg" />
        </div>
      </div>
      <div class="body">
        <p
          class="description"
        >Utilize os filtros abaixo para refinar os resultados da tabela, clique no botão APLICAR para salvar as alterações.</p>
        <FilterMenuPanel />
      </div>
    </v-navigation-drawer>
    <div class="dark-background" :style="{display:display}"></div>
  </div>
</template>

<script>
import FilterMenuPanel from "./FilterMenuPanel";

export default {
  components: {
    FilterMenuPanel,
  },
  data() {
    return {
      display: "none",
    };
  },
  mounted() {
    this.$root.$on("open-filter-menu", () => {
      this.open();
    });
    this.$root.$on("close-filter-menu", () => {
      this.close();
    });
  },
  methods: {
    close() {
      this.$root.$emit('toggle-switch-button');
      this.display = "none";
    },
    open() {
      this.$root.$emit('toggle-switch-button');
      this.display = "block";
    },
  },
};
</script>

<style lang="scss">
#filter_menu {
  z-index: 1000;
  background-color: #f5f5f5;
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: white;
    padding: 30px 20px;
    .left {
      display: flex;
      align-items: center;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 20px;

    .description {
      color: #666666;
      font-size: 14px;
      margin-bottom: 30px;
    }
  }
}
.dark-background {
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}
</style>