<template>
  <div class="feed">
      <div class="feed__discover">
          <h2>Discover</h2>
          <span v-if="errorTwo">{{errorTwo}}</span>
          <span v-if="loadingTwo">Loading...</span>
          <div class="feed__misc" v-for="elt of misc" :key="elt.id">
              <h3>elt.actor.display_login</h3>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    setup() {
        const username = 'Gr0bs'

        //Events Part
        // const {info : user, loading, error, load} = getFetch()
        // load(`https://api.github.com/users/${username}/received_events`)

        //Discover Part
        const {info : misc, loadingTwo, errorTwo, load: loadTwo} = getFetch()
        loadTwo(`https://api.github.com/events`)


        return {user, loading, error, misc, loadingTwo, errorTwo}
    }

}
</script>

<style>

</style>