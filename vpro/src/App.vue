<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
  <!--<h2>dfg</h2>-->
  <!--<ul>-->
    <!--<li v-for="item in items"></li>-->
  <!--</ul>-->
</template>

<script>
import HelloWorld from './components/HelloWorld'
//var data = {
//  items: ['Bananas', 'Apples'],
//  title: 'My Shopping List'
//};
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
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
</style>
