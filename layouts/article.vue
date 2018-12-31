<template>
  <div class="font-roboto bg-ice df flex-column blue minh-100">
    <div class="w-70-l relative z3">
      <section v-bind:class="[navigation ? 'fixed w-70-m' : 'absolute', 'w-100 z10']">
        <div class="page df items-center justify-between pl3">
          <nuxt-link to="/">
            <h1
              v-bind:class="[navigation ? 'white' : 'blue', 'fs3 fwb dib ls2 lh3']"
            >carolblackmusic</h1>
          </nuxt-link>

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
    </div>

    <div class="w-70-m">
      <nuxt/>
    </div>

    <nav
      v-bind:class="['c-navigation c-navigation--dark maxw-70-m', navigation ? 'c-navigation--open' : '']"
    >
      <ul class="c-navigation__inner">
        <li class="c-navigation__item">
          <nuxt-link class="c-navigation__link" v-on:click.native="goto" to="/">home</nuxt-link>
        </li>
        <li class="c-navigation__item">
          <nuxt-link class="c-navigation__link" v-on:click.native="goto" to="/articles">articles</nuxt-link>
        </li>
      </ul>
    </nav>

    <div
      class="dn db-m w-30-m fixed r0 t0 h-100 bg-blue"
      style="background-position: center center; background-size: cover; background-image: url(/images/carolblack.jpg)"
    >
      <span class="absolute bg-blue w-100 b0 l0 t0 o-60"></span>
      <!-- -->
    </div>

    <div class="w-70-m relative mt-au z1">
      <div
        v-bind:class="[navigation ? 'bc-white white' : 'bc-blue', 'fs1 l0 b0 w-100 bwt1 bs-solid pt1 pb1']"
      >
        <div class="page pl3 pr3 df justify-between">
          <span class="o-80">
            Copyright
            <span class="dn dib-ns">Carol Black Music&nbsp;</span>&copy; 2018
          </span>
          <a
            href="https://www.facebook.com/Carol-Black-Music-161874570534993/"
            rel="noopener"
            target="_blank"
            v-bind:class="[navigation ? 'white' : 'blue', 'o-80']"
          >facebook</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigation: false
    }
  },

  methods: {
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