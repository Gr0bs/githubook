<template>
  <div :class="{hire: hireBorder}" class="profile__avatar" >
      <img :src="image" alt="Avatar Github" :class="size" class="avatar">
  </div>
</template>

<script>
export default {
    props: ['hireBorder', 'image', 'size']
}
</script>

<style>

</style>