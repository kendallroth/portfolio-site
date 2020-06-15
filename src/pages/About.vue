<template>
  <Layout>
    <PageSection class="py-lg" size="sm-10 md-8">
      <div class="about-cards">
        <AboutCard
          v-for="card in aboutCards"
          :key="card.title"
          :caption="card.caption"
          :html="card.content"
          :icon="card.icon"
          :title="card.title"
        />
      </div>
    </PageSection>
  </Layout>
</template>

<page-query>
query {
  aboutMe: allAboutMe(
    filter: { published: { eq: true } },
    sort: { by: "title", order: ASC }
  ) {
    edges {
      node {
        id
        caption
        content
        icon
        title
      }
    }
  }
}
</page-query>

<script>
// Components
import AboutCard from "@components/aboutPage/AboutCard";

export default {
  name: "AboutPage",
  components: {
    AboutCard,
  },
  computed: {
    aboutCards() {
      const aboutEdges = this.$page.aboutMe.edges;
      return aboutEdges.map(({ node }) => node);
    },
  },
};
</script>

<style lang="scss" scoped>
.about-cards {
  width: 100%;

  > *:not(:first-child) {
    margin-top: 32px;

    @include smUp() {
      width: auto;
      margin: 32px 16px 0 16px;
    }
  }
}
</style>
