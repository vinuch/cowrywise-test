<template>
  <ContentLoader  :secondaryColor="secondary"
        :primaryColor="primary" :secondaryOpacity="opacity">
        <rect x="20" y="70" rx="3" ry="3" width="200" height="15" />
        <rect x="20" y="100" rx="3" ry="3" width="80" height="15" />
  </ContentLoader>
</template>

<script>
import { ContentLoader } from 'vue-content-loader';

  export default {
    components: {
      ContentLoader,
    },
  }
</script>

<style lang="scss" scoped>

</style>