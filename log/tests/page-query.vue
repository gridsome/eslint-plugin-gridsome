<template>
  <div>aaaa</div>
</template>
<script>
    const script = 111;
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