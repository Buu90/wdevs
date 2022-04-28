<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">

@font-face {
  font-family: "Roboto-Bold";
  src: url("./assets/fonts/Roboto-Bold.ttf") format("truetype");
}
@font-face {
  font-family: "Roboto-Regular";
  src: url("./assets/fonts/Roboto-Regular.ttf") format("truetype");
}
body {
  background-color: #e5e5e5;
}
#app {
  font-family: Roboto-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  // background: #fafafa;
}
ul,
li,
p,
div {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
li {
  list-style-type: none;
}

</style>
