---
to: log/tests/log.vue
---
<template>
  <div class="log">
    <p>this is text</p>
    <p>{{ text }}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text: 'this is data'
      }
    }
  }
</script>

<page-query>
      query Blog {
          allWordPressPost     (limit: 5) {
    edges {
      node {
        id

                title
      }
        }
  }
          }




</page-query>

<style lang="scss" scoped>
div {
  font-size: 2rem;
  padding: 10px;
}
</style>