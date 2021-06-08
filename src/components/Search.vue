<template>
  <div class="search">
      <div class="search__modal">
          <span v-if="error">{{ error }}</span>
          <span v-if="empty"> Searching for an user ?</span>
          <span v-if="loading && !empty">Loading....</span>
          <ul v-if="!loading && !empty">
              <li v-for="user of users" :key="user.id">
                  <router-link :to="{name: 'ProfilPage', params: {username: user.login} }" @click="close">
                      <Profile
                        :username="user.login"
                        :image="user.avatar_url"
                        size="small"
                      />
                  </router-link>
              </li>
          </ul>
      </div>
      <div class="search__elt" @click="close"></div>
  </div>
</template>

<script>
import Profile from './Profile'
import getFetch from '../composable/getFetch'

export default {
    components: {Profile},
    props: ["username", "setShowSearch"],
    data(){
        return{
            empty: true,
            error: false,
            loading: true,
            users: null
        }
    },
    methods: {
        async getSearch() {
            // const {info, error, loading, load} = getFetch()
            // load(`https://api.github.com/search/users?q=${this.username}+in:login`)

            try {
                const res = await fetch(`https://api.github.com/search/users?q=${this.username}+in:login`)
                if(!res.ok){
                    loading.value = false
                    throw Error('Could not fetch')
                }
                
                const data = await res.json()

                this.loading = false
                this.error = false
                this.users = data.items 

                console.log(this.users)

            }catch(err){
                error.value = err.message
                console.log(`Error : ${err.message}`)
            }

        },
        close(){
            this.$emit('close')
        }
    },
    watch:{
        username(newValue){
            if(newValue.length > 0) {
                this.empty = false
                this.getSearch()
            } else {
                this.empty = true
            }
        },
        loading(newValue){
            this.loading = newValue
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/colors';

.search{
    position: absolute;

    &__modal{
        display: flex;
        overflow: scroll;
        height: 15rem;
        transform: translateX(-30px);
        transform-origin: center;
        width: 15rem;
        position: absolute;
        top: 1rem;
        z-index: 12;
        background: white;
        padding: 0 1rem;
        border-radius: 5px;
        border: 1px solid rgb(179, 179, 179);

        li{
            padding:  0.5rem 0;
        }

        a{
            color: $color-three;
        }

        span{
            align-self: center;
            margin: auto;
        }
    }

    &__elt{
        position: fixed;
        top: 0;
        left:0;
        right:0;
        bottom: 0;
        z-index:8;
    }
}
</style>