<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <h2>Showing the power of Travis CI/CD!</h2>
    <h4>(now includes build badge in GitHub repo)</h4>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 40px 0 0;
  color: maroon;
}
h4 {
  color: darkblue;
  font-style: italic;
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
