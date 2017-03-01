<template>
  <div class="Auth">
    <h1>{{ msg }} {{ code }}</h1>
    <h2>receive the message</h2>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  data() {
    return {
      msg: 'Fetch Code From params :',
      code: this.$route.query.code,
    };
  },
  getToken() {
    return {
      msg: this.$route.query.code,
    };
  },
};


</script>
