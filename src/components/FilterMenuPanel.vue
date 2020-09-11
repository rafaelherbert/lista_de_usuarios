<template>
  <v-expansion-panels :flat="true">
    <v-expansion-panel :key="1" class="panel">
      <v-expansion-panel-header expand-icon="mdi-menu-down" class="panel-header">
        <div>
          <img src="@/assets/calendar.svg" /> TODAS AS DATAS DE INCLUSÃO
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="panel-content">
        <v-date-picker v-model="creation_date" no-title scrollable range></v-date-picker>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel :key="2" class="panel">
      <v-expansion-panel-header expand-icon="mdi-menu-down" class="panel-header">
        <div>
          <img src="@/assets/calendar.svg" /> TODAS AS DATAS DE ALTERAÇÃO
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="panel-content">
        <v-date-picker v-model="edit_date" no-title scrollable range></v-date-picker>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel :key="3" class="panel">
      <v-expansion-panel-header expand-icon="mdi-menu-down" class="panel-header">
        <div>
          <img src="@/assets/hdr.svg" /> ATIVOS E INATIVOS
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="panel-content">
        <v-radio-group v-model="status">
          <v-radio :label="`Ativos`" :value="true"></v-radio>
          <v-radio :label="`Inativos`" :value="false"></v-radio>
        </v-radio-group>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-btn x-large class="mt-5" color="#D83367" v-on:click="filter()" outlined dark>Aplicar</v-btn>
  </v-expansion-panels>
</template>

<script>
export default {
  data: () => ({
    creation_date: null,
    edit_date: null,
    status: null,
  }),
  methods: {
    filter() {
        this.$root.$emit("table-filter-menu-apply", {creation_date: this.creation_date, edit_date:this.edit_date, status:this.status});
        this.creation_date = null;
        this.edit_date = null;
        this.status = null;
        this.$root.$emit("close-filter-menu");
    },
  },
};
</script>

<style lang="scss">
.panel {
  background-color: transparent !important;
  .panel-header div {
    display: flex;
    align-items: center;
    color: #d83367;
    font-weight: bold;
    background-color: transparent !important;
    //   border-bottom:1px solid #999999;
    img {
      margin-right: 20px;
    }
  }
}
</style>