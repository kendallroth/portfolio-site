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
        Made with <i class="material-icons has-text-love mx-xs">favorite</i>
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
// Utils
import gitHubLogo from "@assets/icons/icon_github_light.svg";
import gitLabLogo from "@assets/icons/icon_gitlab_light.svg";
import linkedInLogo from "@assets/icons/icon_linkedin_light.svg";

const socialMediaIcons = [
  { name: "GitLab", image: gitLabLogo, url: "https://gitlab.com/kendallroth" },
  { name: "GitHub", image: gitHubLogo, url: "https://github.com/kendallroth" },
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
      socialMediaIcons,
    };
  },
  computed: {
    contactEmail() {
      return this.$static.metadata.site.contactEmail;
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
    font-weight: 500;
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
