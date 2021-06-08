<template>
  <div class="home">
  <Nav />
    <Feed />
  </div>
</template>

<script>
import Feed from '../components/Feed'
import Nav from '../components/Nav'

export default {
  name: 'Home',
  components: { Feed, Nav },
  beforeCreate () {
    if(localStorage.getItem('user') === null){
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/colors';

.home {
    display: flex;
    justify-content: center;
    background: $color-two;

}
</style>