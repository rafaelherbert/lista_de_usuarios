<template>
  <v-footer id="footer">
    <img src="@/assets/radio_button_checked.svg" class="mr-2" alt srcset />
    <span class="audiowide mr-15" style="color:#FF8700">NO AR</span>

    <img src="@/assets/tv.svg" class="mr-2" alt srcset width="20px" />
    <span style="font-size:12px;color:white;" class="mr-7">ENCONTRO - 10:00</span>

    <img src="@/assets/update.svg" class="mr-2" alt srcset width="20px" />
    <span style="font-size:12px;color:white;" class="mr-7">Última atualização em 10:28</span>

    <v-spacer></v-spacer>

    <span style="font-size:12px;color:#E9E9E9;" v-html="date"></span>
    <span class="audiowide ml-5" style="font-size:18px;color:#FF8700">{{time}}</span>
  </v-footer>
</template>

<script>
const dayName = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
const monName = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "agosto",
  "outubro",
  "novembro",
  "dezembro",
];
const now = new Date();
export default {
  data() {
    return {
      date: `${
        dayName[now.getDay()]
      }, <span class="white_color">${now.getDay()}</span> de <span class="white_color">${
        monName[now.getMonth()]
      }</span> de <span class="white_color">${now.getFullYear()}</span>`,
      time:null
    };
  },
  methods: {
    updateClock() {
      let currentTime = new Date();
      let minutes = currentTime.getMinutes().toString();
      let seconds = currentTime.getSeconds().toString();
      minutes = minutes.length == 1 ? "0" + minutes : minutes;
      seconds = seconds.length == 1 ? "0" + seconds : seconds;
      let currentTimeString = currentTime.getHours() + ":" + minutes + ":" + seconds;
      this.time = `// ${currentTimeString}`;
    },
  },
  mounted() {
      setInterval(() => {
          this.updateClock();
      }, 1000);
  }
};
</script>

<style lang="scss">
#footer {
  background-color: #333333;
}

.white_color {
  color: white;
}
</style>