<template>
  <Layout :headerOffset="false" :includeFooter="false">
    <Hero>
      <div class="page-not-found">
        <h2 class="page-not-found__title mb-md">404</h2>
        <div class="page-not-found__subtitle mb-lg">
          You just hit a page that doesn't exist...yet!
        </div>
        <g-link
          class="page-not-found__action button is-large is-primary"
          to="/"
        >
          Go to Home
        </g-link>
      </div>
    </Hero>
  </Layout>
</template>

<script>
// Components
import Hero from "@components/Hero";

export default {
  name: "PageNotFound",
  components: {
    Hero,
  },
  metaInfo: {
    title: "Page Not Found",
  },
};
</script>

<style lang="scss" scoped>
.page-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  text-align: center;
}

.page-not-found__title {
  font-size: 10rem;
  font-weight: bold;
  color: #d81b60;
}

.page-not-found__subtitle {
  font-size: 1.5rem;
}

.page-not-found__action {
  font-size: 1.25rem;
}
</style>
