<template>
  <div v-if="logged">
    <Nav />
  </div>
  <span className='ad'> <a href="https://github.com/Gr0bs">Made by <strong>Gr0b</strong><img src='./assets/images/Logo.svg' class="icon"/></a> </span>
    <router-view :key=$route.params.username />
</template>

<script>
import Nav from './components/Nav'

export default {
   components : {Nav},
   data(){
     return{
       logged: false
     }
   },
   updated() {
     if(this.$route.path !== "/login") { this.logged = true}
   }
}
</script>

<style lang="scss">
@import './assets/scss/colors';
@import './assets/scss/btn';


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
  color: black;
  border-radius: 5px;
  padding: 0.3rem;
  bottom: 1rem;
  right: 2rem;
  font-size: 1rem;
  z-index: 20;

  img{
    padding-left: 0.5rem;
    width: 1.2rem;
  }
}
</style>
