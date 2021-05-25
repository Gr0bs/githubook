<template>
  <div class="card" :class="type">
      <div v-if="type === 'card--feed' " class="card__image">
          <span class="img"></span> 
      </div>
      <div class="card__event">
          <Profile :username="username" :image="image" :size="size"/>
          <span v-if="date" class="time">{{ date }}</span>
          <p>{{ eventName }} <strong>{{subject}}</strong> </p>
          <cite v-if="description">{{ description }}</cite>
      </div>
      <router-link v-if="link" class="card__link" :to="{name: 'ProfilPage', params:{username: username}}">
        See
      </router-link>
  </div>
</template>

<script>
import Profile from './Profile'
export default {
    props: ["username", "image", "size", "event", "description", "date", "subject", "type", "link"],
    data(){
        return{
            eventName: null
        }
    },
    mounted(){
            switch(this.event) {
                case "PublicEvent": 
                this.eventName = 'Past public the repo'
                break;
            case "CreateEvent":
                this.eventName = 'Create the repo '
                break;
            case "PushEvent":
                this.eventName = 'Push in to repo'
                break;
            case "WatchEvent":
                this.eventName = 'Start watching the repo'
                break;
            default:
                this.eventName = this.event
        }
    },
    components: {Profile}

}
</script>

<style lang="scss">
@import '../assets/scss/colors';

.card{
    position: relative;
    background: $color-four;
    border-radius: 5px;
    padding: 0.3rem;
    margin-bottom: 1rem;
    display: flex;
    max-width: 45rem;


    &__image{
        order: 10;
        background: linear-gradient(to right, $color-three, $color-five);    
        padding: 0.5rem;    
        margin: -0.3rem;
        margin-left: 1rem;

        .img{
            width: 100px;
            height: 100px;
            display: block;
            background: url('https://picsum.photos/100/100');
        }
    }

    &__link{
        width: max-content;
        padding: 0.5rem;
        color: $color-three;
        font-weight: 600;
        border-radius: 2px;
        align-self: center;
    }

    .time{
        position: absolute;
        top: 0.2rem;
        right: 8rem;
    }

    &__event{
        display: flex;
        flex-wrap: wrap;

        p{
            align-self: center;
        }
        cite {
            width:100%;
            text-align: center;
        }
    }
    
    &--feed{
        margin-bottom: 1.5rem;
        justify-content: space-between;
        align-items: center;

    }

    &--discover{
        background: $color-one;
        color: white;
        max-width: 15rem;
        justify-content: space-between;
    }
}
</style>