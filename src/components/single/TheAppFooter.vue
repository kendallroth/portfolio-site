<template>
  <footer class="app__footer">
    <div class="footer__contact">
      <a :href="`mailto:${contactEmail}`" class="footer__contact__email">
        Contact Me
      </a>
    </div>
    <div class="footer__info">
      <div class="footer__info__icons">
        <a
          v-for="icon in socialMediaIcons"
          :key="icon.name"
          :href="icon.url"
          class="footer__info__icon"
          rel="noreferrer"
          target="_blank"
        >
          <g-image :alt="icon.name" :src="icon.image" />
        </a>
      </div>
      <div class="footer__info__text">
        &copy; Kendall Roth {{ new Date().getFullYear() }}
      </div>
      <div class="footer__info__developer">
        Made with <mdi-icon :icon="icons.mdiHeart" class="has-text-love mx-xs" />
        from scratch using&nbsp;
        <a
          class="has-text-gridsome"
          href="https://gridsome.org"
          rel="noreferrer"
          target="_blank"
        >
          Gridsome
        </a>
      </div>
      <div class="footer__version">
        <span class="footer__version__number">v{{ version }}</span>
        <span v-if="gitCommit || true" class="footer__version__commit">
          &ensp;@&ensp;{{ gitCommit || "N/A" }}
        </span>
      </div>
    </div>
  </footer>
</template>

<static-query>
query {
  metadata {
    site {
      contactEmail
      siteName
    }
  }
}
</static-query>

<script>
import { mdiHeart } from "@mdi/js";

// Utils
import gitHubLogo from "@assets/icons/icon_github_light.svg";
import gitLabLogo from "@assets/icons/icon_gitlab_light.svg";
import linkedInLogo from "@assets/icons/icon_linkedin_light.svg";
import config from "@config";

const socialMediaIcons = [
  { name: "GitHub", image: gitHubLogo, url: "https://github.com/kendallroth" },
  { name: "GitLab", image: gitLabLogo, url: "https://gitlab.com/kendallroth" },
  {
    name: "LinkedIn",
    image: linkedInLogo,
    url: "https://linkedin.com/in/kendallroth",
  },
];

export default {
  name: "TheAppFooter",
  data() {
    return {
      icons: { mdiHeart },
      socialMediaIcons,
    };
  },
  computed: {
    contactEmail() {
      return this.$static.metadata.site.contactEmail;
    },
    gitCommit() {
      return config.gitCommit;
    },
    version() {
      return config.version;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@styles/_breakpoints";

$footer-padding: 32px;
$footer-icon-size: 48px;

.app__footer {
  color: $color-light;
}

// Top footer section
.footer__contact {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(#{$footer-padding} * 1.25);
  background-color: $color-dark;
}

.footer__contact__email {
  padding: 18px 24px;
  color: white;
  font-size: 1.2rem;
  border: 3px solid $color-light;
  border-radius: 100px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: $color-grey-dark;
  }
}

// Bottom footer section
.footer__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: $footer-padding;
  background-color: black;

  > *:not(:first-child) {
    margin-top: 24px;
  }
}

.footer__info__icons {
  display: flex;

  .footer__info__icon {
    display: flex;
    width: $footer-icon-size;
    height: $footer-icon-size;
    padding: 12px;
    color: white;
    background-color: $color-dark;
    border-radius: 4px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: $theme-primary;
    }

    &:not(:first-of-type) {
      margin-left: 24px;
    }
  }
}

.footer__version {
  display: flex;
  margin-top: #{$spacing * 2} !important;
  color: $color-grey-light;
  font-size: 0.9rem;

  .footer__version__commit {
    font-family: monospace;
  }
}

.footer__info__developer {
  display: flex;
  color: $color-grey-light;

  .has-text-love {
    color: #d24f69;
  }

  .has-text-gridsome {
    color: #6ae4c3;
  }

  @include xsOnly {
    font-size: 0.9rem;
  }
}
</style>
