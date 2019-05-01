<template>
  <div>
    <g-image src="hoge.jpg" />
    <g-image :src="hoge.jpg" />
    <g-image width="500" />

    <g-link :to="{ name: 'about' }" class="foo">link is here</g-link>
    <g-link class="foo">link is here</g-link>
  </div>
</template>


<script>
const script = 111;
</script>

<page-query>
query Blog {
          allWordPressPost(limit: 5) {
    edges {
      node {
              id
        title
      }
    }
  }
}
</page-query>

<static-query>
query Example {
  example: examplePage(path: "/docs/example") {
    content
  }
}
</static-query>

<style lang="scss" scoped>
div {
  font-size: 2rem;
  padding: 10px;
}
</style>
