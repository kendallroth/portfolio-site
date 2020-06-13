<template>
  <Layout :headerOffset="false">
    <HeroSection @portfolio-click="scrollToPortfolio" />
    <div class="welcome-section">
      Welcome to my online portfolio!
    </div>
    <WhatIDoSection class="pb-xl" ref="firstSectionRef" />
    <EmploymentSection :jobs="employmentJobs" />
  </Layout>
</template>

<page-query>
query {
  employment: allEmployment(
    filter: {
    published: { eq: true }
  }, sort: {
    by: "dates.start",
    order: DESC
  }) {
    edges {
      node {
        id
        title
        position
        logo(width: 50)
        dates {
          start(format: "yyyy MMM")
          end(format: "yyyy MMM")
        }
      }
    }
  }
}
</page-query>

<script>
// Components
import EmploymentSection from "@components/homePage/EmploymentSection";
import HeroSection from "@components/homePage/HeroSection";
import WhatIDoSection from "@components/homePage/WhatIDoSection";

export default {
  name: "Home",
  components: {
    EmploymentSection,
    HeroSection,
    WhatIDoSection,
  },
  computed: {
    employmentJobs() {
      const jobEdges = this.$page.employment.edges;
      const jobs = jobEdges.map(({ node }) => ({ ...node }));

      return jobs;
    },
  },
  methods: {
    scrollToPortfolio() {
      const element = this.$refs.firstSectionRef;
      if (!element) return;

      const headerOffset = 64;
      const elementPosition =
        element.$el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.welcome-section {
  padding: 24px;
  color: white;
  text-align: center;
  font-weight: bold;
  background-color: black;
  border-top: 3px solid $theme-primary-light;
}
</style>
