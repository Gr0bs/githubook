<template>
    <div class="repo">
        <span v-if="error">{{error}}</span>
            <ul v-if="repos && !error" class="repo__card">
                <li v-for="repo of repos" :key="repo.id">
                    <a :href="repo.html_url" target="_blank" rel="noreferrer">
                        <h2>{{repo.full_name.substring(username.length + 1)}}</h2>
                    </a>
                    <em>{{ repo.description }}</em>
                </li>
            </ul>
    </div>
</template>

<script>
import getFetch from '../composable/getFetch'

export default {
    props: ['username'],
    setup(props){
        const {info: repos, error, loading, load} = getFetch()
        load(`https://api.github.com/users/${props.username}/repos`)

        return {repos, error, loading}
    }

}
</script>

<style lang="scss">
@import '../assets/scss/colors';

.repo {
    &__card > *{
        background: white;
        padding: 0.5rem;
        width: 90%;
        margin: auto;
        margin-bottom: 0.8rem;
        border-radius: 3px;
        box-shadow: 2px 4px 4px 1px rgba(0, 0, 0, 0.404);

        h2{
            font-size: 1.3rem;
            color: $color-three;
            padding-bottom: 0.3rem;

            &:hover{
                color: $color-five;
            }
        }

        em {
            font-size: 0.9rem;
        }

    }
}

</style>