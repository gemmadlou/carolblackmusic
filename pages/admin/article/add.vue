<template>
  <div id="page" class="relative hidden page pa3">
    <h1 class="mb3 fs3 lh3">Admin dashboard</h1>
    <div class>
      <fieldset class="mb3">
        <label class="fs3 lh3 dib mb1">Headline</label>
        <div class="bg-ice bwa1 bc-grey bs-solid pa1 pl2 pr2 db bwa1 mb1">
          <input v-model="email" class="bg-transparent bwa0 db w-100 fs2 grey-dark" type="text">
        </div>
      </fieldset>
      <fieldset class="mb3">
        <label class="fs3 lh3 dib mb1">Content</label>
        <vue-editor class="scope mb3" v-model="content"></vue-editor>
      </fieldset>
      <a
        href="/p/get-started-with-a-singing-career-in-2019"
        class="pointer fs2 pa1 pl3 pr3 dib align-center bdr6 bs-solid bwa1 lh2 bc-transparent bg-blue tl ice ls2"
      >Save</a>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  components: {
    VueEditor
  },

  layout: 'article',

  data() {
    return {
      articles: [
        {
          id: 'xxxxxxxx',
          headline:
            'One way to get started with a singing career in 2019: Theme nights'
        },
        {
          id: 'xxxxxxxx',
          headline: 'Pros and cons of a theme night'
        }
      ],
      content: ''
    }
  }
}
</script>