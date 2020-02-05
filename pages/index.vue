<template>
  <section class="container">
    <p>はじめに</p>
    <p>利用規約に同意された方のみ使用してください。</p>
    {{ agreement.consent }}
    <a class="btn btn__defalt" @click="change">利用規約に同意して使用します。</a>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState([
       'agreement'
    ]),
  },
  methods: {
    ...mapMutations('agreement', [
      'change'
    ]),
    consent() {
      // this.$store.commit('agreement/change')
    }
  }
}
</script>

