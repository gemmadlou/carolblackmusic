<template>
  <div
    class="font-roboto df flex-column justify-between minh-100"
    style="background-size: cover; background-image: url(images/carolblack.jpg)"
  >
    <span class="fixed bg-blue w-100 b0 l0 t0 o-60"></span>

    <nuxt/>

    <div class="fs1 l0 b0 w-100 bwt1 bc-white bs-solid pt1 pb1">
      <div class="page pl3 pr3 df justify-between">
        <span class="o-80">
          Copyright
          <span class="dn dib-ns">Carol Black Music&nbsp;</span>&copy; 2018
        </span>
        <a href class="white o-80">facebook</a>
      </div>
    </div>

    <div class="fixed t0 l0 h-100 w-100 df items-center justify-center pa3">
      <span class="bg-marina absolute t0 l0 h-100 w-100 o-80"></span>
      <div class="relative pa3 bg-blue white maxw-xxxbig">
        <h3 class="fs5 ls1 mb3">Join for updates</h3>
        <p class="lh3 mb3 o-90">
          As soon as the site goes live, you'll be among the first to know.
          In the meantime, we invite feedback on things you may want to learn
          or here.
        </p>
        <div class="bg-blue pa1 pl2 pr2 db bdr6 bwa1 bc-white bs-solid">
          <input
            class="bg-transparent bwa0 db w-100 fs2 white"
            type="text"
            placeholder="Enter email"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body {
  @extend .bg-blue;
  @extend .white;
}
</style>