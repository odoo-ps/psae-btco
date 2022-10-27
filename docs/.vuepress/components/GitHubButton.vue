<template>
  <div style="display: inline-flex">
    <button @click="redirect">
      <div>View Code</div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
  },
  methods: {
    redirect() {
      return window.open(
          this.link, "_blank");
    },
  },
};
</script>

<style scoped>
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-decoration: none;
  color: #FFF;
  font-weight: bold;
}

button:hover {
  cursor: pointer;
}

button {
  position: relative;
  padding: 5px 15px;
  overflow: hidden;
  float: left;
  margin: 0px 10px 10px 0px;
  border-radius: 8px;
  font-size: 8px;
  color: #FFF;
  text-decoration: none;
  border: none;
  background-color: #1e2735;
  border-bottom: 5px solid #000000;
  text-shadow: 0px -2px #000000;
}

button:hover:before {
  opacity: 1;
  transform: translate(0, 0);
}

button:before {
  content: "GitHub ▶";
  position: absolute;
  right: 0px;
  width: 100%;
  opacity: 0;
  transform: translate(-100%, 0);
  transition: all 0.3s ease-in-out;
}

button:hover div {
  opacity: 0;
  transform: translate(100%, 0);
}

button div {
  transition: all 0.3s ease-in-out;
}

button:active {
  transform: translate(0px, 5px);
  -webkit-transform: translate(0px, 5px);
  border-bottom: 1px solid;
}
</style>