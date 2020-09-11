<template>
  <div class="d-flex align-center" id="switch-button">
    <a class="custom-button" :class="b1">
      <img :src="img1" alt srcset />
    </a>
    <a class="custom-button mr-10" :class="b2">
      <img :src="img2" alt srcset />
    </a>
  </div>
</template>

<script>
export default {
    data() {
        return {
            b1:"",
            b2:"cool-gradient",
            img1:require("../assets/shield_grey.svg"),
            img2:require("../assets/person_white.svg"),
        }
    },
    mounted() {
        this.$root.$on("toggle-switch-button", () => {
            this.toggle();
        });
    },
    methods: {
        toggle() {
            if (this.b1 == "") {
                this.b1 = "cool-gradient";
                this.img1 = require("../assets/shield_white.svg");
                this.b2 = "";
                this.img2 = require("../assets/person_grey.svg");
            } else if (this.b2 == "") {
                this.b2 = "cool-gradient";
                this.img2 = require("../assets/person_white.svg");
                this.b1 = "";
                this.img1 = require("../assets/shield_grey.svg");
            }
        }
    }
};
</script>

<style lang="scss">
.cool-gradient {
  background: rgb(255, 135, 0);
  background: -moz-linear-gradient(
    224deg,
    rgba(255, 135, 0, 1) 0%,
    rgba(216, 51, 103, 1) 100%
  );
  background: -webkit-linear-gradient(
    224deg,
    rgba(255, 135, 0, 1) 0%,
    rgba(216, 51, 103, 1) 100%
  );
  background: linear-gradient(
    224deg,
    rgba(255, 135, 0, 1) 0%,
    rgba(216, 51, 103, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff8700",endColorstr="#d83367",GradientType=1);
}
</style>