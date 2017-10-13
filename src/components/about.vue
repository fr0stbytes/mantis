<template lang="html">
  <div class="container">
    <b-row class="portfolio-intro">
      <b-col xs="12" lg="8">
        <h1>About the team</h1>
        <p>We are passionate about every aspect of design and we value clear communication, strong relationships and long-term collaboration. We believe in approaching each project in a holistic way and we work directly with business owners - mainly from the hospitality industry - in order to create unique spaces and memorable customer experiences.</p>
      </b-col>
    </b-row>
    <b-row class="portfolio-services">
      <b-col xs="12" lg="12" xl="12">
        <h2>Expertise</h2>
      </b-col>
      <b-col xs="12" lg="6" xl="3">
        <p>Cafe-Bars</p>
      </b-col>
      <b-col xs="12" lg="6" xl="3">
        <p>Restaurants</p>
      </b-col>
      <b-col xs="12" lg="6" xl="3">
        <p>Retail shops</p>
      </b-col>
      <b-col xs="12" lg="6" xl="3">
        <p>Experimental projects</p>
      </b-col>
    </b-row>
    <b-row class="has-margin-50">
      <b-col xs="12" lg="12">
        <img src="../../static/mantis-cover.jpg" alt="">
      </b-col>
    </b-row>
    <b-row class="has-margin-50 is-bold">
      <b-col xs="12" md="12">
        <h2>What we do best</h2>
      </b-col>
      <b-col xs="12" md="6">
        <p>Brand identity</p>
        <p>Hospitality design</p>
        <p>Print & Illustrations</p>
        <p>Interior design and environments</p>
      </b-col>
      <b-col xs="12" md="6">
        <p>Promotional materials & Packaging</p>
        <p>Web design & development</p>
        <p>Software development</p>
        <p>Social media campaigns</p>
      </b-col>
    </b-row>
    <mantis-footer></mantis-footer>
    <b-row class="has-margin-100">

    </b-row>
  </div>
</template>

<script>
import MantisFooter from './mantis-footer'
export default {
  components: {
    MantisFooter
  }
}
</script>

<style lang="css">
</style>
