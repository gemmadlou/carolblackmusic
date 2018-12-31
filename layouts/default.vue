<template>
  <div class="font-roboto df flex-column justify-between minh-100">
    <span class="fixed t0 l0 w-100 h-100">
      <span
        class="absolute t0 l0 w-120 h-120 w-100-ns h-100-ns"
        style="background-size: cover; background-image: url(images/carolblack.jpg)"
      ></span>
    </span>
    <span class="fixed bg-blue w-100 b0 l0 t0 o-60"></span>

    <section class="fixed w-100 z10 relative">
      <div class="page df items-center justify-between pl3">
        <h1 class="fs3 fwb white dib ls2 lh3">carolblackmusic</h1>

        <div v-on:click="toggleNavigation" class="db pa3">
          <span class="c-hamburger">
            <span class="c-hamburger__line"></span>
            <span class="c-hamburger__line"></span>
            <span class="c-hamburger__line"></span>
          </span>
        </div>
      </div>
    </section>

    <span class="dt w-100 h8"></span>

    <nav v-bind:class="['c-navigation', navigation ? 'c-navigation--open' : '']">
      <ul class="c-navigation__inner">
        <li class="c-navigation__item">
          <nuxt-link class="c-navigation__link" v-on:click.native="goto" to="/">home</nuxt-link>
        </li>
        <li class="c-navigation__item">
          <nuxt-link class="c-navigation__link" v-on:click.native="goto" to="/articles">articles</nuxt-link>
        </li>
      </ul>
    </nav>

    <nuxt/>

    <div class="relative fs1 l0 b0 w-100 bwt1 bc-white bs-solid pt1 pb1">
      <div class="page pl3 pr3 df justify-between">
        <span class="o-80 white">
          Copyright
          <span class="dn dib-ns">Carol Black Music&nbsp;</span>&copy; 2018
        </span>
        <a
          href="https://www.facebook.com/Carol-Black-Music-161874570534993/"
          rel="noopener"
          target="_blank"
          class="white o-80"
        >facebook</a>
      </div>
    </div>

    <div v-if="banner" class="fixed t0 l0 h-100 w-100 df items-center justify-center pa3">
      <span
        v-on:click="$store.commit('hideBanner')"
        class="bg-marina absolute t0 l0 h-100 w-100 o-80"
      ></span>
      <div class="maxh-100 auto relative pa3 bg-blue white maxw-xxxbig">
        <h3 class="fs5 ls1 lh4 mb3 fwl">Join for updates</h3>
        <p
          class="lh3 mb3 o-90 fwl"
        >Receive articles about being a professional singer and performer.</p>
        <div class="bg-blue pa1 pl2 pr2 db bdr6 bwa1 bc-white bs-solid mb1">
          <input
            v-model="email"
            class="bg-transparent bwa0 db w-100 fs2 white"
            type="text"
            placeholder="Enter email"
          >
        </div>
        <a
          v-on:click="join"
          class="pointer fs2 pa1 pl3 pr3 lh3 db align-center bdr6 bg-white blue ls1 mb2"
        >Join</a>

        <p
          class="fs1 lh1 mb3 o-60 lh2"
        >Your privacy is important to us. We do not share your data with third parties.</p>
      </div>
    </div>

    <!-- thank you -->
    <div v-if="thankyou" class="fixed t0 l0 h-100 w-100 df items-center justify-center pa3">
      <span
        v-on:click="(e) => { thankyou = false}"
        class="bg-marina absolute t0 l0 h-100 w-100 o-80"
      ></span>
      <div class="maxh-100 auto relative pa3 bg-blue white maxw-xxxbig">
        <h3 class="fs5 ls1 lh4 mb3 fwl">Thank you</h3>
        <p class="lh3 mb3 o-90 fwl">
          Thank you for looking out for updates. We really appreciate that. In the meantime,
          why not join us over on
          <a
            class="grey"
            href="https://www.facebook.com/Carol-Black-Music-161874570534993/"
            rel="noopener"
          >Facebook</a>
          and introduce yourself.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigation: false,
      thankyou: false,
      errors: [],
      submitting: false,
      email: ''
    }
  },

  computed: {
    banner() {
      return this.$store.state.banner
    }
  },

  methods: {
    async join() {
      if (this.submitting) {
        return
      }

      this.submitting = true

      try {
        await this.$axios.$post(
          'https://vky0aszbp6.execute-api.eu-west-1.amazonaws.com/production/form/cbm/registration',
          {
            email: this.email
          }
        )
        this.$store.commit('hideBanner')
        this.thankyou = true
      } catch (error) {
        this.errors = error.response
      }

      this.email = ''
      this.submitting = false
    },

    toggleNavigation() {
      this.navigation = !this.navigation
    },

    goto(e) {
      this.navigation = false
      this.$router.push(e.target.pathname)
    }
  }
}
</script>

<style lang="scss">
body {
  @extend .bg-blue;
  @extend .white;
}
</style>