---
to: development/test.vue
---
<template>
  <div>
    <g-link  to="/">link</g-link>
    <g-image :src="img" />
    
  </div>
</template>

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