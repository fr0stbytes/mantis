<template>
  <div class="container">
    <b-row class="intro-row">
      <b-col xs="12" lg="8">
        <h1>Home</h1>
        <p>We are an independent design studio based in Syros, Greece, specializing in branding, design and environments. Using a multi-disciplinary approach, we help our clients to establish a strong identity and efficiently connect with the world.</p>
      </b-col>
    </b-row>
    <b-row class="has-margin-5">
      <b-col xs="12" md="6" class="portfolio-hero">
        <img src="../../static/home/stavlasart-hero.jpg" alt="">
        <b-row class="overlay-2" align-v="center">
          <router-link to="/stavlas-art">
            <h1>Stavlas Art</h1>
            <p>Branding / Web design</p>
          </router-link>
        </b-row>
      </b-col>
      <b-col xs="12" md="6" class="portfolio-hero">
        <img src="../../static/home/world-frequencies-hero.jpg" alt="">
        <b-row class="overlay-2" align-v="center">
          <router-link to="/world-frequencies">
            <h1>World Frequencies</h1>
            <p>Branding / Web design</p>
          </router-link>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="has-margin-2 has-padding" align-v="center">
      <router-link to="/thebox-athens">
        <b-col xs="12">
          <img src="../../static/home/box-hero.jpg" alt="" class="portfolio-hero-lg">
          <img src="../../static/home/box-hero-mobile.jpg" alt="" class="portfolio-hero-sm">
          <b-row class="overlay" align-v="center">
            <b-col>
              <h1>The Box Athens</h1>
              <p>Branding / Web design</p>
            </b-col >
          </b-row>
        </b-col>
      </router-link>

    </b-row>
    <b-row class="has-margin-5">
      <b-col xs="12" md="6" class="portfolio-hero">
        <img src="../../static/home/barola-hero-mobile.jpg" alt="">
        <b-row class="overlay-2" align-v="center">
          <router-link to="/barola">
            <h1>Barola Cafe-bar</h1>
            <p>Branding / Interior / Web</p>
          </router-link>
        </b-row>
      </b-col>
      <b-col xs="12" md="6" class="portfolio-hero">
        <img src="../../static/home/thouse-hero-mobile.jpg" alt="">
        <b-row class="overlay-2" align-v="center">
          <router-link to="/tech-house">
            <h1>Tech House</h1>
            <p>Branding / Interior / Web</p>
          </router-link>
        </b-row>
      </b-col>
    </b-row>
    <mantis-footer></mantis-footer>
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

<style lang="scss">

  .overlay {
    position: absolute;
    background-color: rgba(10, 10, 11, .7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 100%;
    transition: all .5s ease;

    h1 {
      color: #f2f2f2;
      margin-left: 50px;
    }
    p {
      color: #ccc;
      margin-left: 50px;
    }
  }
  .overlay-2 {
    position: absolute;
    background-color: rgba(10, 10, 11, .7);
    top: 0;
    left: 15px;
    height: 100%;
    opacity: 100;
    transition: all .5s ease;
    width: calc(100% - 30px);

    h1 {
      color: #f2f2f2;
      margin-left: 50px;
    }
    p {
      color: #ccc;
      margin-left: 50px;
    }
  }
  .overlay:hover {
    opacity: 1;
    transition: all .5s ease;
  }
  .overlay-2:hover {
    opacity: 1;
    transition: all .5s ease;
  }

  .portfolio-hero {
    margin-bottom: 2em;
  }

  .portfolio-hero-lg {
    display: none;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2em;
    }
    .intro-row {
      margin-top: 250px;
    }
    .overlay {
      opacity: 0;
    }
    .overlay-2 {
      position: absolute;
      background-color: rgba(10, 10, 11, .7);
      top: 0;
      left: 15px;
      height: 100%;
      opacity: 0;
      transition: all .5s ease;
      width: calc(100% - 30px);

      h1 {
        color: #f2f2f2;
        margin-left: 50px;
      }
      p {
        color: #ccc;
        margin-left: 50px;
      }
    }
    .overlay:hover {
      opacity: 1;
      transition: all .5s ease;
    }
    .overlay-2:hover {
      opacity: 1;
      transition: all .5s ease;
    }
    .portfolio-hero {
      margin-bottom: 0;
    }
    .portfolio-hero-sm {
      display: none;
    }
    .portfolio-hero-lg {
      display: block;
    }
  }
</style>
