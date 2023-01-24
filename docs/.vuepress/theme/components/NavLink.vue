<template>
  <a
    v-if="item.link === '/plugins'"
    class="nav-link"
    href="https://growi.org/plugins"
  >{{ item.text }}</a >
  <router-link
    class="nav-link"
    :to="link"
    @focusout.native="focusoutAction"
    v-else-if="!isExternal(link)"
    :exact="exact"
  >{{ item.text }}</router-link>
  <a
    v-else
    :href="link"
    @focusout="focusoutAction"
    class="nav-link external"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    {{ item.text }}
    <OutboundLink/>
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '../util'

export default {
  props: {
    item: {
      required: true
    }
  },

  computed: {
    link () {
      return ensureExt(this.item.link)
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    }
  },

  methods: {
    isExternal,
    isMailto,
    isTel,
    focusoutAction () {
      this.$emit('focusout')
    }
  }
}
</script>
