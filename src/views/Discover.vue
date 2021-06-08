<template>
  <Nav />
  <div class="discover">
      <span v-if="error">{{error}}</span>
      <span v-if="loading">Loading....</span>
      <div class="discover__card" v-for="repo of repos.items" :key="repo.id">
          <Profile 
          :username="'@' + repo.owner.login"
          :image="repo.owner.avatar_url"
          size="small"
          />
          <h3>{{repo.name}}</h3>
          <em>{{repo.description}}</em>
          <a :href="repo.html_url">See Repo</a>
      </div>
  </div>
</template>

<script>
import getFetch from '../composable/getFetch'
import Profile from '../components/Profile'
import Nav from '../components/Nav'


const query = ['bot', 'react', 'vue', 'node', 'tchat', 'script', 'app']
const rdm = Math.floor(Math.random() * query.length)

export default {
    components: {Profile, Nav},
    data(){
        return{
            loading: false,
            error: false,
            repos: null
        }
    },
    beforeCreate () {
        if(localStorage.getItem('user') === null){
        this.$router.push({ name: 'Login' })
        }
     },
    beforeMount() {
       this.getRepo()
    },
    methods: {
        getRepo() {
        const {info, error, loading, load } = getFetch()
        load(`https://api.github.com/search/repositories?q=${query[rdm]}&sort=star&order=desc`)

        this.loading = loading
        this.error = error
        this.repos = info

        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/colors';

.discover{
    padding-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    &__card{
        position: relative;
        background: white;
        padding: 1rem;
        margin: 0.5rem;
        width: 35%;
        height: 13rem;
        display: flex;
        flex-direction: column;
    }

    h3{
        font-size: 1.5rem;
        color: $color-three;
    }

    em, a, h3 {
        display: block;
        text-align: center;
    }

    em {
        padding: 1rem;
    }

    a{
        position: absolute;
        bottom: 20px;
        align-self: center;
        padding: 0.5rem;
        background: $color-two;
        color: white;
        width: max-content;
    }
    
}
</style>