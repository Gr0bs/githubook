<template>
  <div class="profile">
      <ProfileIcon :image="image" :size="size" />
      <div class="profile__txt">
          <span v-if="username">{{ username }}</span>
          <span v-if="name">{{ name }}</span>
      </div>
  </div>
</template>

<script>
import ProfileIcon from './ProfileIcon'
export default {
    props: ['image', 'username', 'size', 'name'],
    components: {ProfileIcon}

}
</script>

<style lang="scss">
    .avatar{
        border-radius: 50%;
    }

    .small{
        width: 2rem;
    }

    .medium{
        width: 3rem;
    }

    .high{
        width: 4rem;
    }

    .profile{
        display: flex;
        align-items: center;
        width: max-content;

        &__txt{
                font-weight: 600;
        }

        :first-child{
            margin-right: 0.2rem;
            align-self: center;
            display: flex;
        }
    }
</style>