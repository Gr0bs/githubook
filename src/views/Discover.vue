<template>
  <h2>Coucou</h2>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/colors';

.discover{
    padding-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    &__card{
        position: relative;
        background: white;
        padding: 1rem;
        margin: 0.5rem;
        width: 35%;
        height: 13rem;
        display: flex;
        flex-direction: column;
    }

    h3{
        font-size: 1.5rem;
        color: $color-three;
    }

    em, a, h3 {
        display: block;
        text-align: center;
    }

    em {
        padding: 1rem;
    }

    a{
        position: absolute;
        bottom: 20px;
        align-self: center;
        padding: 0.5rem;
        background: $color-two;
        color: white;
        width: max-content;
    }
    
}
</style>