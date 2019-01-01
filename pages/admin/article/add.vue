<template>
  <div id="page" class="relative hidden page pa3">
    <h1 class="mb3 fs3 lh3">Admin dashboard</h1>
    <div class>
      <fieldset class="mb3">
        <label class="fs3 lh3 dib mb1">Headline</label>
        <div class="bg-ice bwa1 bc-grey bs-solid pa1 pl2 pr2 db bwa1 mb1">
          <input v-model="headline" class="bg-transparent bwa0 db w-100 fs2 grey-dark" type="text">
        </div>
      </fieldset>
      <fieldset class="mb3">
        <label class="fs3 lh3 dib mb1">Slug</label>
        <div class="bg-ice bwa1 bc-grey bs-solid pa1 pl2 pr2 db bwa1 mb1">
          <input v-model="slug" class="bg-transparent bwa0 db w-100 fs2 grey-dark" type="text">
        </div>
      </fieldset>
      <fieldset class="mb3">
        <label class="fs3 lh3 dib mb1">Content</label>
        <vue-editor class="scope mb3" v-model="content"></vue-editor>
      </fieldset>
      <span
        v-on:click="save"
        class="pointer fs2 pa1 pl3 pr3 dib align-center bdr6 bs-solid bwa1 lh2 bc-transparent bg-blue tl ice ls2"
      >Save</span>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
const uuidv4 = require('uuid/v4')

export default {
  components: {
    VueEditor
  },

  computed: {
    key() {
      return this.$store.state.auth.jwt
    }
  },

  layout: 'admin',

  data() {
    return {
      submitting: false,
      content: '',
      headline: '',
      slug: '',
      error: ''
    }
  },
  methods: {
    async save() {
      if (this.submitting) {
        return
      }
      try {
      this.submitting = true
      this.error = ''

      // 'https://vky0aszbp6.execute-api.eu-west-1.amazonaws.com/production/content'

      await this.$axios.$post('http://localhost:5000/content', {
        content: {
          content: this.content,
          headline: this.headline
        },
        slug: this.slug,
        account: 'cbm',
        type: 'article',
        key: this.key
      })

      this.$router.push('/admin/dashboard')
      } catch (e) {
        this.error = e.message
      }

      this.submitting = false
    }
  }
}
</script>