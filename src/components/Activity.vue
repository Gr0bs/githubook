<template>
  <div class="activity">
    <span v-if="error">{{error}}</span>
    <div v-if="events && !error">
        <ul v-for="event of events" :key="event.id">
            <li v-if="event.type === 'PushEvent' ">
                <Card 
                    v-for="(commit, index) of event.payload.commits"
                    :key="index"
                    :image="event.actor.avatar_url"
                    size="small"
                    :subject="event.repo.name.substring(username.length + 1)"
                    :date="event.created_at.substring(0,10)"
                    type="card--feed"
                    event="Commit on the repo"
                    :description="commit.message"
                />
            </li>
            <li v-else>
                <Card 
                    :image="event.actor.avatar_url"
                    size="small"
                    :subject="event.repo.name.substring(username.length + 1)"
                    :date="event.created_at.substring(0,10)"
                    type="card--feed"
                    :event="event.type"
                    :description="event.payload.description"
                />
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import getFetch from '../composable/getFetch'
import Card from '../components/Card'

export default {
    props: ['username'],
    components: {Card},
    setup(props){
        const {info: events, error, loading, load} = getFetch()

        load(`https://api.github.com/users/${props.username}/events`)

        return { events, error, loading}
    }
}
</script>

<style>

</style>