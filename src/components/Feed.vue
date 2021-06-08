<template>
  <div class="feed">
    <div class="feed__discover" v-if="!error">
        <h2>Discover</h2>
        <span v-if="error">{{error}}</span>
        <span v-if="loading">Loading...</span>
        <div class="feed__misc" v-for="(elt, index) of events" :key="elt.id">
            <Card
            v-if="index < 5"
            type="card--discover"
            :username="elt.actor.display_login"
            :image="elt.actor.avatar_url"
            :link="true"
            size="small"
            />
        </div>
        <router-link :to="{name: 'Discover'}">
            See More
        </router-link>
    </div>

    <div class="feed__event">
        <span v-if="errorTwo">{{errorTwo}}</span>
        <span v-if="loadingTwo">Loading...</span>
        <Card 
            v-for="event of feed" 
            :key="event.id"
            type="card--feed"
            :username="event.actor.display_login"
            :image="event.actor.avatar_url"
            :event="event.type"
            :subject="event.repo.name"
            :description="event.payload.description"
            :date="event.created_at.substring(0,10)"
            size="medium"
        />
    </div>
  </div>
</template>

<script>
import getFetch from '../composable/getFetch'
import Card from '../components/Card'

export default {
    components: {Card},
     setup() {
         const username = localStorage.getItem('user')
        const {info : events, loading, error, load} = getFetch()
        load(`https://api.github.com/events`)

        const {info : feed, loading: loadingTwo, error: errorTwo, load: loadTwo} = getFetch()
        loadTwo(`https://api.github.com/users/${username}/received_events`)

        return {events, loading, error, feed, loadingTwo, errorTwo}
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/colors';
@import '../assets/scss/mixin';

.feed, .feed > * {
    display: flex;
}

.feed{
    margin-top: 6rem;

    > :first-child {
        padding-right:2rem;
        padding-left: 1rem;
    }

    &__event{
        flex-direction: column;
        flex-grow: 3;

        span{
            color: white;
        }
    }

    &__discover{
        flex-direction: column;
        margin-top: -2rem;
        
        h2 {
            color: white;
            @include border-bottom;
        }

        p, a {
            color: $color-five;
        }
    }
}
</style>