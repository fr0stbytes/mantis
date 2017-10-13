<template>
  <div class="container">
    <b-row class="full text-center" align-v="center">
      <b-col class="contact-inner">
        <p>Get in touch & say hello</p>
        <p>(or stop by for some coffee)</p>
        <b-row class="black text-center">
          <b-col xs="12" md="4" class="contact-col">
            <h3>New business</h3>
            <p class="is-small">Maria Vaporidi</p>
            <p class="is-small gray">+30 22810 84304</p>
            <p class="is-small gray">projects@mantisdigital.com</p>
          </b-col>
          <b-col xs="12" md="4" class="contact-col">
            <h3>General</h3>
            <p class="is-small">Office</p>
            <p class="is-small gray">+30 22810 84304</p>
            <p class="is-small gray">hello@mantisdigital.com</p>
          </b-col>
          <b-col xs="12" md="4" class="contact-col">
            <h3>Address</h3>
            <p class="is-small">11 Antiparou Str.</p>
            <p class="is-small gray">Hermoupolis, Syros</p>
            <p class="is-small gray">84100, Greece</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="social-media text-center">
      <b-col>
        <ul>
          <li><a href="https://www.facebook.com/mantisdigital/" target="_blank" rel="noopener">Facebook</a></li>
          <li><a href="https://www.instagram.com/mantis.digital/" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href="https://www.behance.net/mantis_digital" target="_blank" rel="noopener">Behance</a></li>
        </ul>
      </b-col>

    </b-row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .contact-inner {
    margin-top: 150px;
  }
  .contact-col {
    margin-top: 4em;
  }
  .social-media {
    width: 100%;
    // position: ;
    bottom: 0;
    margin: 3em 0;

    ul {
      text-align: center;
      margin: 0 auto;
    }

    ul li {
      display: inline-block;
      padding: 0 10px;
      // text-align: center;
    }
  }

  @media (min-width: 768px) {
    .social-media {
      margin: 0;
    }
    .contact-col {
      margin-top: 2em;
    }
  }

  @media (min-width: 992px) {
    .contact-inner {
      margin-top: 0;
    }
  }
</style>
