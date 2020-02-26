<template>
  <div class="layout">
    <Header />
    <div id="content-wrapper">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";

export default {
  components: {
    Footer,
    Header
  }
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
  color: white !important;
  background: linear-gradient(270deg, #949494, #656565, #3f3f3f, #181818);
  background-size: 800% 800%;

  -webkit-animation: AnimationName 10s ease infinite;
  -moz-animation: AnimationName 10s ease infinite;
  animation: AnimationName 10s ease infinite;

  @-webkit-keyframes AnimationName {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }
  @-moz-keyframes AnimationName {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }
  @keyframes AnimationName {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }
}

body {
  font-family: "Abril Fatface", sans-serif !important;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
}

#content-wrapper {
  width: 65vw;
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  flex-direction: column;
  height: calc(100% - 192px);
  justify-content: space-evenly;
}
</style>
