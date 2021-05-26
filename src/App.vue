<template>
  <Nav />
</template>

<script>
import Nav from './components/Nav'

export default {
  components : {Nav}
}
</script>

<style lang="scss">
@import './assets/scss/colors';

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $color-two;
}


* {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    color:inherit;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.icon{
    // width: 100%;
  width: 1.5rem;
}

.ad{
  position: fixed;
  background: $color-three;
  border-radius: 5px;
  padding: 0.5rem;
  bottom: 1rem;
  right: 2rem;
}
</style>
