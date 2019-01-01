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
            <nuxt-link
              v-bind:to="`/admin/article/edit/${article.id}`"
              class="pointer fs1 pa-xsmall pl3 pr3 dib align-center bdr6 bs-solid bwa1 lh2 bc-blue bg-ice tl blue ls2"
            >Edit</nuxt-link>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import axios from 'axios'

export default {
  components: {
    VueEditor
  },

  layout: 'admin',

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
      ]
    }
  },

  async asyncData() {
    let response = await axios.get('http://localhost:5000/content/cbm-article')

    return {
      articles: response.data.Items.map(item => ({
        id: item.slug,
        headline: item.content.headline
      }))
    }
  }
}
</script>