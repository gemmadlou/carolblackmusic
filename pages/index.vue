<template>
  <div id="page" class="relative hidden">
    <!-- page -->
    <section class="page pa3 pb6">
      <div class="maxw-super">
        <p class="tl fs2 ls2 mb1 white o-60 lh3">30 years in music</p>
        <h3
          class="fs2 lh3 white mb2 ls1 o-90"
        >Professional singer, songwriter, performer and vocal coach</h3>
        <span
          v-on:click="$store.commit('showBanner')"
          class="pointer fwl fs2 pa1 pl3 pr3 dib align-center bdr6 bs-solid bwa1 bc-white white ls2"
        >Get updates</span>
        
        <span class="dt h10-m w-100"></span>
      </div>
    </section>
  </div>
</template>
