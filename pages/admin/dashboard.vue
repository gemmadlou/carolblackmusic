<template>
  <div id="page" class="relative hidden page pa3">
    <h1 class="mb3 fs3 lh3 font-davidlibre">Admin dashboard</h1>

    <table class="w-100 bwb2 bc-blue bs-solid">
      <tr>
        <td class="pt3 pb3 df justify-end">
          <nuxt-link
            to="/admin/article/add"
            class="pointer fs2 pa1 pl3 pr3 dib align-center bdr6 bs-solid bwa1 lh2 bc-transparent bg-blue tl ice ls2"
          >Create article</nuxt-link>
        </td>
      </tr>
      <tr v-bind:key="index" v-for="(article, index) in articles" class="lh2 bwt1 bc-blue bs-solid">
        <td class="pt1 pb1 df-ns justify-between-ns items-center-ns">
          <div class="lh3 mb2 mb0-ns font-davidlibre">{{ article.headline }}</div>
          <div>
            <a
              v-bind:href="`/admin/article/${article.id}`"
              class="pointer fs1 pa-xsmall pl3 pr3 dib align-center bdr6 bs-solid bwa1 lh2 bc-blue bg-ice tl blue ls2"
            >Edit</a>
          </div>
        </td>
      </tr>
    </table>
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