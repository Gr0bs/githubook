<template>
    <nav class="menu">
        <router-link :to="{name: 'Home' }">
            <img src='../assets/images/Logo.svg' class="logo"/>
        </router-link>
        <div class="menu__search">
             <input className='input' type="search" placeholder="searching user" />
             <Search 
                :username="username"
             />
             <img src='../assets/images/search.svg' class="icon" />
        </div>
        <div class="menu__right">
            <router-link :to="{name: 'Discover'}">
                <img src='../assets/images/discover.svg' class="icon" />
            </router-link>
            <router-link :to="{name: 'ProfilPage', params: {username: user.login}}">
                <Profile :username="user.login" :image="user.avatar_url" size="small"/>
            </router-link>
            <img src='../assets/images/logout.svg' style="width: 1.5rem; paddingLeft: 0.8rem; cursor: pointer;" />
        </div>
    </nav>
<router-view :key=$route.params.username />
</template>

<script>
import Profile from '../components/Profile'
import getFetch from '../composable/getFetch'
import Search from '../components/Search'

export default {
    components: {Profile},
    setup() {
        const username = 'Gr0bs'
        const {info : user, loading, error, load} = getFetch()
        load(`https://api.github.com/users/${username}`)

        return {user, loading, error}
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/colors';

nav, .menu__search, .menu__right{
    display: flex;
}

nav {
    position: fixed;
    width: 100%;
    z-index: 10;
    justify-content: space-between;
    align-items: center;
    background-color: $color-one;
    padding: 0.5rem;
    color: white;

    .logo{
        width: 2.2rem;
    }

    .icon{
        padding: 0 0.6rem;
        cursor: pointer;

        &--inactif{
            cursor:auto;
        }
    }
}

.menu {
    &__search{
        position: relative;
        color: $color-two;
        align-items: center;
    }
    
    &__results{
        position: absolute;
        background: rgb(255, 255, 255);
        color: black;
        width: 11.5rem;
        border-radius: 5px;
        top: 8;
        
        li {
            padding: 0.5rem 0;
        }
    }

    &__right{
        margin-right: 2rem;
        > * {
            align-self: center;
        }
        > a {
            display: flex;
        }
        .icon {
            width: 2rem;
        }
    }
}
</style>