<template>
  <page-layout>
    <page-section class="py-lg" size="sm-10 md-8">
      <div class="about-cards">
        <about-card
          v-for="(card, idx) in aboutCards"
          :key="card.title"
          :caption="card.caption"
          :html="card.content"
          :icon="card.icon"
          :primary="idx == 0"
          :title="card.title"
        />
      </div>
    </page-section>
  </page-layout>
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
  > *:not(:first-child) {
    margin-top: 32px;
  }
}
</style>
