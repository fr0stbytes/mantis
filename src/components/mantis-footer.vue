<template >
  <div class="container has-margin-100 bottom-100">
    <b-row>
      <b-col xs="12" lg="12">
        <h1>Get in touch</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col xs="12" lg="6" xl="4">
        <p>Talk to us: +30 22810 84304</p>
      </b-col>
      <b-col xs="12" lg="6" xl="4">
        <p>Write to us: <a href="mailto:hello@mantisdigital.com">hello@mantisdigital.com</a></p>
      </b-col>
      <b-col xs="12" lg="6" xl="4" class="social-media">
        <ul>
          <li><a href="https://www.facebook.com/mantisdigital/" target="_blank">Facebook</a></li>
          <li><a href="https://www.instagram.com/mantis.digital/" target="_blank">Instagram</a></li>
          <li><a href="https://www.behance.net/mantis_digital" target="_blank">Behance</a></li>
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
  .social-media {
    text-align: left;

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

  @media (min-width: 992px) {
    .social-media {
      text-align: right;

      ul {
        text-align: right;
      }
    }
  }
</style>
