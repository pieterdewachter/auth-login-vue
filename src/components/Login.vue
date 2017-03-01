<template>
  <div class="login">
    <a :href="'https://github.com/login/oauth/authorize?client_id=' +
    url.development.client_id + '&scope=user&redirect_uri=' + url.development.redirect_uri">Login</a>
</template>

<script>
import * as CONFIG from 'config/config';

export default {
  name: 'login',
  data() {
    return {
      url: CONFIG,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
