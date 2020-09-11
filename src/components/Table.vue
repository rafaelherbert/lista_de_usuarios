<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="users"
      :page.sync="page"
      :items-per-page="6"
      hide-default-footer
      show-select
      :single-select="true"
      class="elevation-1"
      @page-count="pageCount = $event"
      @click:row="handleClick"
      id="main-table"
    >
      <template v-slot:item.status="{ item }">
        <span :style="{color:getColor(item.status)}">{{ item.status ? "ATIVO" : "INATIVO" }}</span>
      </template>
      <template v-slot:item.actions="{}">
        <img src="@/assets/horizontal_dots.svg" />
      </template>
    </v-data-table>
    <div class="text-center mt-5 mb-5">
      <v-pagination v-model="page" :length="pageCount" color="#D83367"></v-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
let api_url = "http://localhost:3000";
export default {
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: "USUÁRIO", value: "username" },
        { text: "EMAIL", value: "email" },
        { text: "DATA DE INCLUSÃO", value: "creation_date" },
        { text: "DATA DE ALTERAÇÃO", value: "edit_date" },
        { text: "REGRAS", value: "rules" },
        { text: "STATUS", value: "status" },
        { text: "AÇÕES", value: "actions", width: 200, align: "end" },
      ],
      users: [{}],
    };
  },
  mounted() {
      this.$root.$on('table-search-filter', (search) => {
          this.searchFilter(search);
      })

      this.$root.$on('table-filter-menu-apply', (data) => {
          this.filterMenuApply(data.creation_date, data.edit_date, data.status);
      })
  },
  created() {
    axios.get(api_url + "/users").then((response) => {
      this.users = response.data;
      console.log(response);
    });
  },
  methods: {
    async handleClick() {
      let overlays = await document.getElementsByClassName("overlay");

      for (let item of overlays) {
        item.remove();
      }

      let tr = event.target.parentNode;

      // Avoiding errors when clicking on inner elements
      if (tr && tr.tagName !== "TR") {
          tr = tr.parentNode;
      } else if (!tr) {
          return;
      }

      tr.style.position = "relative";
      let td = document.createElement("td");
      td.className = "overlay mr-10 ml-10 pr-14 d-flex justify-end";
      let img1 = document.createElement("img"), img2 = document.createElement("img");
      img1.src = require("../assets/delete.svg");
      img2.src = require("../assets/create.svg");
      img2.className = "ml-4";
      td.append(img1);
      td.append(img2);
      tr.append(td);
    },

    getColor(status) {
      if (status) return "#31BA1F";
      else return "red";
    },

    searchFilter(search) {
        console.log("Search filtering...");
        axios.get(encodeURI(api_url + `/users?q=${search}`)).then((response) => {
            this.users = response.data;
        });
    },

    filterMenuApply(creation_date_range, edit_date_range, status) {
        let query = "";

        if (creation_date_range !== null) {
            console.log("Creation date filtering...");
            let creation_date1 = new Date(creation_date_range[0]);
            let creation_date2 = new Date(creation_date_range[1]);
    
            if (creation_date1.getTime() > creation_date2.getTime()) {
                let aux = creation_date_range[0];
                creation_date_range[0] = creation_date_range[1];
                creation_date_range[1] = aux;
            }

            query += `creation_date_gte=${creation_date_range[0]}&creation_date_lte=${creation_date_range[1]}`;
        }

        if (edit_date_range !== null) {
            console.log("Edit date filtering...");
            let edit_date1 = new Date(edit_date_range[0]);
            let edit_date2 = new Date(edit_date_range[1]);
    
            if (edit_date1.getTime() > edit_date2.getTime()) {
                let aux = edit_date_range[0];
                edit_date_range[0] = edit_date_range[1];
                edit_date_range[1] = aux;
            }

            if (query != "") query += "&";
            query += `edit_date_gte=${edit_date_range[0]}&edit_date_lte=${edit_date_range[1]}`;
        }

        if (status !== null) {
            if (query != "") query += "&";
            query += `status=${status}`;
        }

        axios.get(encodeURI(api_url + `/users?${query}`)).then((response) => {
            this.users = response.data;
            console.log(response.data);
        });
    }
  },
};
</script>

<style lang="scss">
table {
  th {
    background-color: #ffffff !important;
  }

  tbody > tr:nth-child(odd) {
    background-color: #f5f5f5;
  }

  tbody > tr:nth-child(even) {
    background-color: #e9e9e9;
  }

  tbody > tr > td.overlay {
    box-sizing: border-box;
    position: absolute;
    background: rgba(255, 255, 255, 0.8);
    left: 0;
    right: 0;
    height: 1.2em;
    text-align: center;
    border-bottom: 3px solid #d83367 !important;
  }
}

.v-pagination button {
  width: 45px;
  height: 45px;
}
</style>