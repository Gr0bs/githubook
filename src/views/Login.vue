<template>
  <div class="login">
      <div class="border">
          <div class="login__card">
              <header>
                  <h1>Githubook</h1>
                  <em>Your new <strong>Github</strong> social media</em>
              </header>
              <section>
                  <form>
                      <label class="login__insert">
                          Insert your Github username
                            <input 
                                type="text"
                                class="input"
                                placeholder="GandalfTheGrey"
                                v-model="value"
                            >
                            <em>If you don't have any insert <strong>gr0bs</strong></em>
                      </label>
                          <button
                            class="btn btn--login"
                            @click="handleLogin"
                          >Let's Go</button>
                  </form>
              </section>
          </div>
      </div>
  </div>
</template>

<script>
import githubProvider from '../config/authMethod'
import githubAuth from '../service/auth'

export default {
    data(){
        return{
            value: ''
        }
    },
    methods:{
        async handleLogin(){
            const res = await githubAuth(githubProvider)
            console.log(res)
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/colors';

.login{
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    &__card{
        background: $color-one;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 30vw;
        height: 60vh;
        min-width: 18rem;
    }

    &__insert{
        display: flex;
        flex-direction: column;

        em {
            font-size: 0.8rem;
            padding-top: 0.3rem;
            color: $color-three;
        }
    }

    h1{
        color: $color-five;
        font-size: 3rem;
    }

    header{
        text-align: center;
    }

    input{
        color: $color-one;
        margin-top: 0.5rem;
    }
}

section{
    text-align: center;

    button {
        margin-top: 1rem;
    }
}

.border{
    background: linear-gradient(to right, $color-three, $color-five);
    padding: 0.3rem;
}
</style>