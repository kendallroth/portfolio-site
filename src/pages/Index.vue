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

.about-section {
  padding-top: 48px;
  padding-bottom: 48px;
}

.about-section__quote {
  max-width: 875px;
  margin: 24px 0;
  padding: 12px 16px;
  color: $color-grey;
  font-size: 1.1rem;
  border-left: 3px solid $color-grey-light;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
</style>
