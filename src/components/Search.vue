<template>
  <div class="search">
      <div class="search__model">
          <span v-if="error">{{ error }}</span>
          <span v-if="empty"> Searching for an user ?</span>
          <span v-if="loading && !empty">Loading....</span>
          <ul v-if="!loading">
              <li v-for="user of users" :key="user.id">
                  <router-link :to="{name: 'PorfilPage', params: user.login}" @click="handleClick">
                      <Profile
                        :username="user.login"
                        :image="user.avatar_url"
                        size="small"
                      />
                  </router-link>
              </li>
          </ul>
      </div>
      <div class="search__" @click="handleClick"></div>
  </div>
</template>

<script>
import Profile from './Profile'
export default {
    components: {Profile},
    props: ["username", "setShowSearch"],
    setup(){
        
    }

}
</script>

<style lang="scss">
@import './assets/scss/colors';

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