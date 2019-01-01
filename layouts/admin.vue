<template>
  <div class="font-roboto bg-ice df flex-column blue minh-100">
    <div class="w-70-l df justify-between items-center">
      <nuxt-link to="/">
        <h2 class="fs3 fwb blue ls2 pa3 page">carolblackmusic</h2>
      </nuxt-link>
      <span class="pointer" v-on:click="() => { profile = true }" v-if="loggedIn">
        <svg
          class="pa3 db w-100 h-100 h3 w3"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            class="fill-blue"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
          ></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
      </span>
    </div>

    <div v-if="profile" class="z2 fixed t0 l0 h-100 w-100 df items-center justify-center pa3">
      <span
        v-on:click="() => { profile = false }"
        class="bg-marina absolute t0 l0 h-100 w-100 o-90"
      ></span>
      <div class="maxh-100 auto relative pa3 bg-blue white w-100 maxw-xxxbig">
        <nuxt-link
          to="/admin/dashboard"
          v-on:click="join"
          class="pointer fs2 pa1 pl3 pr3 lh3 db align-center bdr6 bg-white blue ls1 mb2"
        >Dashboard</nuxt-link>
        <a
          v-on:click="join"
          class="pointer fs2 pa1 pl3 pr3 lh3 db align-center bdr6 bg-white blue ls1"
        >Log out</a>
      </div>
    </div>

    <div v-if="loggedIn" class="relative z0 w-70-m">
      <nuxt jwt="jwt"/>
    </div>

    <div
      class="dn db-m w-30-m fixed r0 t0 h-100 bg-blue"
      style="background-position: center center; background-size: cover; background-image: url(/images/carolblack.jpg)"
    >
      <span class="absolute bg-blue w-100 b0 l0 t0 o-60"></span>
      <!-- -->
    </div>

    <div class="w-70-m relative mt-au z1">
      <div class="fs1 l0 b0 w-100 bwt1 bc-blue bs-solid pt1 pb1">
        <div class="page pl3 pr3 df justify-between">
          <span class="o-80">
            Copyright
            <span class="dn dib-ns">Carol Black Music&nbsp;</span>&copy; 2018
          </span>
          <a
            href="https://www.facebook.com/Carol-Black-Music-161874570534993/"
            rel="noopener"
            target="_blank"
            class="blue o-80"
          >facebook</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth } from '../util/auth'
export default {
  data() {
    return {
      profile: false,
      loggedIn: false,
      jwt: false
    }
  },
  watch: {
    loggedIn() {
      if (
        this.loggedIn &&
        this.$router.history.current.path === '/admin/login'
      ) {
        this.$router.push('/admin/dashboard')
      }
      console.log(this.loggedIn, this.$router.history, 'loggedin!!!!!')
    }
  },
  created() {
    getAuth().then(auth => {
      this.loggedIn = auth.loggedIn
      this.jwt = auth.jwt
    })
  }
}
</script>