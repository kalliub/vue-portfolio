<script setup lang="ts">
import { DateTime } from 'luxon'

const getAge = () => Math.floor(DateTime.now().diff(DateTime.fromISO('1996-04-04'), 'years').years)
</script>

<template>
  <h1 class="title">
    Hi, my name is <br />
    Kalliu Brasil
  </h1>

  <h2 class="subtitle">{{ getAge() }} years old | Brazilian | Senior Software Engineer</h2>

  <div class="text-container">
    <span>
      🥁 First of all, I am a passionate
      <b>musician</b>, pet lover (cat dad), Geovanna&apos;s life partner and always a positive
      person.
      <br />
      This photo you see is from my beloved geek music project,
      <a href="https://www.youtube.com/@Museek" target="_blank"> Museek</a>, where I wear the hats
      of drummer, producer, manager and sometimes singer. We&apos;ve reached over 4 million plays on
      Spotify with 54k+ monthly listeners and I am really proud of it!
    </span>

    <div id="ball-divider" />

    <span>
      🧑🏻‍💻 In 2019, as a <b>Software Engineer</b>, I focused on Front End development, combining my
      design expertise with data-driven insights to craft robust web applications with a clear User
      Experience (UX). With my skills in Amazon Web Services (AWS), I now focus on creating
      end-to-end web applications that ensure high availability.
    </span>

    <div id="ball-divider" />

    <span>
      💬 Those who have worked with me value my excellent <b> communication skills</b> and the way I
      energize the work environment, as well as my ability to inject solid ideas and innovative
      concepts into every project.
    </span>
  </div>
</template>

<style scoped>
.title {
  margin: 8px 0px;
  padding: 0;
  line-height: normal;
  color: rgb(55, 55, 55);
}

.subtitle {
  margin: 0px 0px 8px;
  line-height: 36px;
  /* TODO: Implement color variable: primary.500 */
  color: rgb(96, 109, 188);
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

#ball-divider {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.15);
}
</style>
