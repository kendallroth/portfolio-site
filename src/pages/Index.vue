<template>
  <Layout :headerOffset="false">
    <Hero>
      <div class="hero__content">
        <h2 class="hero__title">
          Hi, I'm <span class="is-emphasized">Kendall Roth</span>.
        </h2>
        <h3 class="hero__subtitle">I'm a full-stack web developer.</h3>
        <button class="hero__button" @click="scrollToPortfolio">
          View My Portfolio<i class="material-icons ml-xs">work</i>
        </button>
      </div>
    </Hero>

    <div class="welcome-section">
      Welcome to my online portfolio!
    </div>

    <PageSection ref="firstSectionRef" class="about-section py-lg">
      <h2 class="section-title mb-sm">What I Do</h2>
      <blockquote class="about-section__quote">
        I‘m passionate about web design and development, focusing on clean and
        simple design/functionality. I strive to be a dedicated team player
        while adapting to different environments and tasks.
      </blockquote>
      <div class="about-section__cards">
        <AboutMeCard
          v-for="card in aboutMeCards"
          :key="card.title"
          :details="card"
        />
      </div>
    </PageSection>

    <PageSection class="projects-section py-lg">
      <h2 class="section-title mb-md">What I've Done</h2>
      <div class="projects-section__cards">
        <ProjectCard
          v-for="project in projectCards"
          :key="project.name"
          :project="project"
        />
      </div>
    </PageSection>

    <PageSection class="employment-section" size="sm-10 md-8 lg-6">
      <h2 class="section-title mb-md">Where I've Worked</h2>
      <div class="employment-section__cards">
        <EmploymentCard v-for="job in jobCards" :key="job.title" :job="job" />
      </div>
    </PageSection>
  </Layout>
</template>

<page-query>
query {
  projects: allProject(
    filter: { published: { eq: true } }
    sort: { by: "year", order: DESC }
  ) {
    edges {
      node {
        image(width: 500, quality: 90)
        name
        year
      }
    }
  }
  jobs: allEmployment(
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
        logo(width: 50, quality: 90)
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
import Hero from "@components/Hero";
import AboutMeCard from "@components/homePage/AboutMeCard";
import EmploymentCard from "@components/homePage/EmploymentCard";
import ProjectCard from "@components/homePage/ProjectCard";

// Utilities
import whatIDoData from "@/data/whatIDoData.json";

export default {
  name: "Home",
  components: {
    AboutMeCard,
    EmploymentCard,
    Hero,
    ProjectCard,
  },
  computed: {
    aboutMeCards() {
      return whatIDoData;
    },
    jobCards() {
      const jobEdges = this.$page.jobs.edges;
      return jobEdges.map(({ node }) => node);
    },
    projectCards() {
      const projectEdges = this.$page.projects.edges;
      return projectEdges.map(({ node }) => node);
    },
  },
  methods: {
    /**
     * Scroll to the portfolio section
     */
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
$project-card-margin: 16px;

// Hero section
.hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero__title {
  margin-bottom: 24px;
  font-size: 2rem;
  font-weight: normal;

  .is-emphasized {
    font-weight: bold;
    color: #d81b60;
  }

  @include smUp() {
    font-size: 3rem;
  }
}

.hero__subtitle {
  margin-bottom: 36px;
  font-size: 1.5rem;
  font-weight: normal;
  opacity: 0.75;

  @include smUp() {
    font-size: 2.25rem;
  }
}

.hero__button {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: white;
  font-size: 1.1rem;
  background-color: transparent;
  border: 4px double $color-light;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background-color: $theme-primary;
    border-color: $theme-primary;
    border-style: solid;
  }
}

// Welcome bar
.welcome-section {
  padding: 24px;
  color: white;
  text-align: center;
  font-weight: bold;
  background-color: black;
  border-top: 3px solid $theme-primary-light;
}

// About Me section
.about-section__quote {
  max-width: 875px;
  padding: 12px 16px;
  color: $color-grey;
  font-size: 1.1rem;
  border-left: 3px solid $color-grey-light;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.about-section__cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 48px;

  @include mdUp() {
    flex-direction: row;
    align-items: stretch;
  }

  > *:not(:first-child) {
    margin-top: 16px;

    @include mdUp() {
      margin-top: 0;
      margin-left: 16px;
    }
  }
}

// Projects section
.projects-section {
  background-color: $theme-primary;
  color: white;
}

.projects-section__cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;

  @include smUp() {
    margin: -$project-card-margin;
    flex-direction: row;
    //align-items: stretch;
    flex-wrap: wrap;
  }

  > * {
    max-width: 500px;
    width: 100%;

    @include xsOnly() {
      &:not(:first-child) {
        margin-top: calc(#{$project-card-margin} * 1.5);
      }
    }

    @include smUp() {
      margin: $project-card-margin;
      width: calc(100% / 2 - #{$project-card-margin * 2});
    }

    @include lgUp() {
      // width: calc(100% / 3 - #{$project-card-margin * 2});
    }
  }
}

// Employment section
.employment-section {
  position: relative;
  padding-top: 48px;
  padding-bottom: 48px;
  color: white;
  background-color: #26a69a;

  &:before {
    display: block;
    content: "";
    height: 50%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
    transform: skewY(-3deg);
    transform-origin: 0 0;
    opacity: 70%;
    background: inherit;

    @include smUp() {
      transform: skewY(-1deg);
    }
  }
}

.employment-section__cards {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;

  > .employment-card:not(:first-child) {
    margin-top: 24px;
  }
}
</style>
