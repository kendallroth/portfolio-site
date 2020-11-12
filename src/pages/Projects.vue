<template>
  <Layout>
    <PageSection class="projects-page py-lg">
      <h2 class="section-title mb-md">What I've Done</h2>
      <div class="projects-page__cards">
        <ProjectCard
          v-for="project in projectCards"
          :key="project.name"
          :project="project"
        />
      </div>
    </PageSection>
  </Layout>
</template>

<page-query>
query {
  projects: allProject(
    filter: { published: { eq: true } }
    sort: [{ by: "date", order: DESC }, { by: "status", order: ASC }]
  ) {
    edges {
      node {
        date
        image(width: 500)
        link
        name
        slug
        type
      }
    }
  }
}
</page-query>

<script>
// Components
import ProjectCard from "@components/homePage/ProjectCard";

export default {
  name: "Home",
  components: {
    ProjectCard,
  },
  computed: {
    projectCards() {
      const projectEdges = this.$page.projects.edges;
      return projectEdges.map(({ node }) => node);
    },
  },
};
</script>

<style lang="scss" scoped>
$project-card-margin: 16px;

.projects-page {}

.projects-page__cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;

  @include smUp() {
    margin: -$project-card-margin;
    flex-direction: row;
    flex-wrap: wrap;
  }

  > * {
    width: 100%;
    max-width: 500px;

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
      width: calc(100% / 3 - #{$project-card-margin * 2});
    }
  }
}
</style>
