<template>
  <div id="page" class="relative hidden">
    <!-- page -->
    <section class="page pa3 pb6">
      <div class="maxw-super">
        <p class="tl fs2 ls2 mb1 white o-60">Page not found</p>
        <h3 class="fs2 lh3 white mb2 ls1 o-90">Feel free to visit the
          <nuxt-link to="/" class="orange">home page</nuxt-link>
        </h3>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>