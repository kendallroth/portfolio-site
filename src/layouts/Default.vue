<template>
  <div class="app__layout">
    <TheAppHeader :transparent="headerTransparent" />
    <!-- Default content slot -->
    <div :class="{ 'app__content--offset': headerOffset }" class="app__content">
      <slot />
    </div>
    <TheAppFooter v-if="includeFooter" />
    <div v-if="isDebugBreakpointShown" class="debug-breakpoint">
      {{ $breakpoint.name }}
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
// Components
import TheAppFooter from "@components/singleUse/TheAppFooter";
import TheAppHeader from "@components/singleUse/TheAppHeader";

// Utilities
import config from "@config";

export default {
  name: "DefaultLayout",
  components: {
    TheAppFooter,
    TheAppHeader,
  },
  props: {
    /**
     * Whether the header is transparent
     */
    headerTransparent: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Whether to offset page content for navbar
     * @type {boolean}
     */
    headerOffset: {
      type: Boolean,
      required: false,
      default: true,
    },
    /**
     * Whether to include the footer
     * @type {boolean}
     */
    includeFooter: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    isDebugBreakpointShown() {
      return config.isDevelopment;
    },
  },
};
</script>

<style lang="scss" scoped>
.app__layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app__content {
  flex-grow: 1;
  // NOTE: Necessary to properly handle hero images and their content
  z-index: 1;

  &.app__content--offset {
    margin-top: $layout-navbar-height;
  }
}

.debug-breakpoint {
  position: fixed;
  bottom: 0;
  padding: 8px 16px;
  border-top-right-radius: 4px;
  background-color: white;
  opacity: 0.5;
  z-index: 100;
}
</style>
