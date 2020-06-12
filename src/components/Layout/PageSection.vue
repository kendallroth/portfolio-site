<template>
  <section
    :class="{ 'page-section--no-padding': noPadding }"
    class="page-section"
  >
    <div class="page-section__container">
      <div :class="sizeClasses" class="page-section__content layout">
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageSection",
  props: {
    /**
     * Whether there should be no padding for section
     */
    noPadding: {
      type: Boolean,
      default: false,
    },
    /**
     * Page size (width)
     */
    size: {
      type: String,
      default: "",
    },
  },
  computed: {
    sizeClasses() {
      // NOTE: "xs-12" should always be included (can be overwritten)
      return ["xs-12", this.size.split(" ")];
    },
  },
};
</script>

<style lang="scss" scoped>
.page-section {
  width: 100%;
  padding: 32px;

  @include xsOnly {
    padding: 24px;
  }

  &.page-section--no-padding {
    padding: 0;
  }
}

.page-section__container {
  width: 100%;
  max-width: #{$breakpoint-lg}px;
  margin: 0 auto;
}

.page-section__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}
</style>
