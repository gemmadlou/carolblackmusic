<template>
  <div id="page" class="relative hidden">
    <!-- page -->
    <section class="page pa3 pb6">
      <h1 class="fs3 fwb white dib ls2">carolblackmusic</h1>

      <span class="dt h10 w-100"></span>
      <span class="dn dt-ns h10 w-100"></span>

      <div class="maxw-super">
        <p class="tl fs2 ls2 mb1 white o-60">Website relaunch</p>
        <h3 class="fs2 lh3 white mb2 ls1 o-90">
          Coaching and practical advice for the
          professional singer and entertainer.
        </h3>
        <span
          v-on:click="$store.commit('showBanner')"
          class="pointer fwl fs2 pa1 pl3 pr3 dib align-center bdr6 bs-solid bwa1 bc-white tl white ls2"
        >get updates</span>
      </div>
    </section>
  </div>
</template>
