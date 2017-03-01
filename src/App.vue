<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <p>
        <router-link to="/login">Go to login</router-link>
        <router-link to="/home">Go to home</router-link>
        <router-link to="/auth">Go to test</router-link>
      </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  width: 40px;
  height: 40px;
}
a {
  text-decoration: none;
}
a:visited, a:focus, a:active {
  color: #2c3e50;
  text-decoration: none;
}
a:hover {
  color: #42b983;
  text-decoration: underline;
}
</style>
