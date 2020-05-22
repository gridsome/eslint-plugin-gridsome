<template></template>
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