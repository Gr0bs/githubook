<template>
  <div class="profilePage">
      <div class="profilePage__banner">
          <span v-if="error">{{ error }} - We can't have access to your Github Profil... :(</span>
          <header v-if="userProfil && !error">
              <Profile
                :username="'@' + userProfil.login"
                :name="userProfil.name"
                :image="userProfil.avatar_url"
                size="high"
                />
                <em>{{userProfil.bio}}</em>

                <!-- User social Links -->
                <ul class="user__social">
                    <li v-if="userProfil.twitter_username">
                        <a :href="'https://twitter.com/' + userProfil.twitter_username">
                            <img src="../assets/images/twitter.svg" alt="Twitter Logo" class="icon">
                        </a>
                    </li>
                    <li v-if="userProfil.blog">
                        <a :href="userProfil.blog">
                            <img src="../assets/images/web.svg" alt="Website Logo" class="icon">
                        </a>
                    </li>
                    <li v-if="userProfil.email">
                        <a :href="'mailto:' + userProfil.email">
                            <img src="../assets/images/mail.svg" alt="Mail Logo" class="icon">
                        </a>
                    </li>
                </ul>

                <!-- USER GITHUB INFO -->
                <ul class="user__github">
                    <li>Followers <span>{{userProfil.followers}}</span></li>
                    <li>Following <span>{{userProfil.following}}</span></li>
                    <li>Repos <span>{{userProfil.public_repos}}</span></li>
                    <li v-if="starredRepo.length">Starred Repos <span>{{ starredRepo.length}}</span></li>
                </ul>

          </header>
        </div>

        <!-- FEED -->
        <section class="wall" v-if="!error">
            <div class="wall__tab">
                <button :class="[seeActivity ? `btn btn--profil active` : 'btn btn--profil']" @click="handleTab">Activity</button>
                <button :class="[seeRepo ? `btn btn--profil active` : 'btn btn--profil']" @click="handleTab">Repo</button>
            </div>
            <div class="wall__events">
                <Activity 
                    v-if='seeActivity'
                    :username="username"
                />
                <Repo 
                    v-if='seeRepo'
                    :username="username"
                />
            </div>

            <div class="wall__suggestions">
                <h2>Suggestions</h2>
                <span v-if="errorSuggestion">{{ errorSuggestion }}</span>
                <ul v-if="suggestion && !errorSuggestion">
                    <li v-for="(user, index) of suggestion" :key="user.id">
                        <Card 
                            v-if="index < 5"
                            :image="user.avatar_url"
                            size="medium"
                            :event="' '"
                            type='card--discover'
                            :username="user.login"
                            :link=true
                        />
                    </li>
                </ul>
            </div>
        </section>
  </div>
</template>

<script>
import Profile from '../components/Profile'
import getFetch from '../composable/getFetch'
import Card from '../components/Card'
import Activity from '../components/Activity'
import Repo from '../components/Repo'
import { ref } from '@vue/reactivity'


export default {
    components: {Profile, Card, Activity, Repo},
    props: ['username'],
    data(){
        return{
            seeActivity: true,
            seeRepo: false,
        }
    },
    setup(props){
        const user = ref(props.username)
        // User Profil
        const {info: userProfil, error, load} = getFetch()
        load(`https://api.github.com/users/${user.value}`)

        // Starred Repo
        const {info: starredRepo, error: errorRepo, load: loadRepo} = getFetch()
        loadRepo(`https://api.github.com/users/${user.value}/starred`)
        
        //Suggestions
        const {info: suggestion, error: errorSuggestion, load: loadSuggestion} = getFetch()
        loadSuggestion(`https://api.github.com/users/${user.value}/following`)

        return { userProfil, error, starredRepo, suggestion, errorSuggestion}
    },
    methods: {
        handleTab () {
            this.seeActivity = !this.seeActivity
            this.seeRepo = !this.seeRepo
        }
    }    
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/colors';
@import '../assets/scss/mixin';
@import '../assets/scss/btn';

.profilePage{
    padding-top: 3rem;
    
    &__banner {

        >span {
            position: absolute;
            margin-top: 15rem;
            left:0;
            right:0;
            color: white;
            font-size: 1rem;
        }

        header{
            background: url('https://picsum.photos/1800/300');
            height: 13rem;
            justify-content: center;
            margin: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            color: white;
        }
        
        .profile{
            transform: translateX(2rem);
            &__txt{
                display: flex;

                flex-direction: column;
            }
        }
    }
}


.user{

    &__profile{
        transform-origin: left;
    }

    &__social, &__github, &__github li{
        display: flex;
    }

    &__social{
        display: flex;
        margin: 0.2rem;
        padding: 0.5rem;
        align-items: center;

        > *{
            padding: 0 0.5rem ;
        }
    }

    &__github li{
        flex-direction: column;
        padding: 0 2rem;
        text-align: center;

        span{
            font-size: 1.3rem;
            font-weight: 600;
        }
    }
}


.wall{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    &__tab{
        display: inline-block;
        width: 80%;
        text-align: center;
    }

    &__events{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 60%;
    }

    &__suggestions{
        margin-left: 3rem;

        h2 {
            color: white;
            margin-bottom: 1.5rem;
            padding: 0.5rem 0;
            @include border-bottom;
        }
        > * {
            display: flex;
            flex-direction: column;
        }

        a {
            background: $color-three;
            color: white;
        }
    }
}
</style>