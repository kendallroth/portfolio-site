<template>
  <Layout>
    <PageSection class="py-lg" size="sm-10 md-8">
      <div class="about-cards">
        <AboutCard
          caption="using my dev skills to help people."
          icon="face"
          title="About Me"
        >
          Content
        </AboutCard>
        <AboutCard
          caption="continual learning by experimenting and making mistakes."
          icon="school"
          title="Education"
        >
          Content
        </AboutCard>
        <AboutCard
          caption="using my musical and choral gifts to make a difference."
          icon="music_note"
          title="Music"
        >
          Content
        </AboutCard>
        <AboutCard
          caption="continually living my life in a way to reflect God the Creator."
          icon="book"
          title="Faith"
        >
          Content
        </AboutCard>
        <AboutCard
          caption="taking time to relax and enjoy life."
          icon="event_seat"
          title="Spare Time"
        >
          Content
        </AboutCard>
        <AboutCard
          caption="travelling and experiencing different cultures and traditions."
          icon="local_airport"
          title="Travelling"
        >
          Content
        </AboutCard>
      </div>
    </PageSection>
  </Layout>
</template>

<script>
// Components
import AboutCard from "@components/aboutPage/AboutCard";

export default {
  name: "AboutPage",
  components: {
    AboutCard,
  },
};
</script>

<style lang="scss" scoped>
.about-cards {
  width: 100%;

  > *:not(:first-child) {
    margin-top: 32px;

    @include smUp() {
      width: auto;
      margin: 32px 16px 0 16px;
    }
  }
}
</style>
