<template>
  <Layout :headerOffset="false">
    <HeroSection @portfolio-click="scrollToPortfolio" />
    <div class="welcome-section">
      Welcome to my online portfolio!
    </div>
    <WhatIDoSection ref="firstSectionRef" />
  </Layout>
</template>

<script>
// Components
import HeroSection from "@components/HomePage/HeroSection";
import WhatIDoSection from "@components/HomePage/WhatIDoSection";

export default {
  name: "Home",
  components: {
    HeroSection,
    WhatIDoSection,
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
