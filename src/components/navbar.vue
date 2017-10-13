<template lang="html">
  <div class="container-fluid">
    <div class="navbar">
      <div class="logo">
        <router-link to="/">MANTIS DIGITAL</router-link>
      </div>
      <div class="menu-icon">
        <span v-bind:class="{ active: isActive }"></span>
        <b-button variant="success" aria-label="Menu" @click="isActive = !isActive" class="trigger"></b-button>
      </div>
      <div class="nav-overlay" v-bind:class="{ active: isActive }">
      </div>
      <b-row align-v="center" class="nav is-right" v-bind:class="{ active: isActive }">
        <ul>
          <li v-bind:class="{ active: isActive }">
            <b-button variant="link" aria-label="Home" @click="toHome" class="menu-item">Home</b-button>
          </li>
          <li v-bind:class="{ active: isActive }">
            <b-button variant="link" aria-label="Work" v-b-toggle.collapse1 class="menu-item">Work</b-button>
          </li>
          <b-collapse id=collapse1 class="mt-1" v-bind:class="{ active: isActive }">
            <router-link to="/stavlas-art">
              <h3 class="has-margin-2" @click="isActive = !isActive">StavlasArt</h3>
            </router-link>
            <router-link to="/world-frequencies">
              <h3 class="has-margin-2" @click="isActive = !isActive">World Frequencies</h3>
            </router-link>
            <router-link to="/thebox-athens">
              <h3 class="has-margin-2" @click="isActive = !isActive">The Box Athens</h3>
            </router-link>
            <router-link to="/barola">
              <h3 class="has-margin-2" @click="isActive = !isActive">Barola Syros</h3>
            </router-link>
            <router-link to="/tech-house">
              <h3 class="has-margin-2" @click="isActive = !isActive">Tech House</h3>
            </router-link>

          </b-collapse>
          <li v-bind:class="{ active: isActive }">
            <b-button variant="link" aria-label="About" @click="toAbout" class="menu-item">About</b-button>
          </li>
          <li v-bind:class="{ active: isActive }">
            <b-button variant="link" aria-label="Contact" @click="toContact" class="menu-item">Contact</b-button>
          </li>
        </ul>
      </b-row>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      isActive: false,
      subMenu: false
    }
  },
  methods: {
    toHome () {
      this.isActive = false
      setTimeout(() => {
        this.$router.push('/')
      }, 500)
    },
    toAbout () {
      this.isActive = false
      setTimeout(() => {
        this.$router.push('/about')
      }, 500)
    },
    toContact () {
      this.isActive = false
      setTimeout(() => {
        this.$router.push('/contact')
      }, 500)
    }
  }
}
</script>

<style lang="scss">
  #collapse1 {
    display: none;
    opacity: 0;
  }
  #collapse1.active {
    display: block;
    opacity: 1;
    transform: all .5s ease;
  }
  .logo {
  position: absolute;
  top: 37px;
  left: 25px;
  font-weight: bold;
  // width: 50px;
  z-index: 5;

  a:hover {
    color: #0a0a0b;
  }
  }

  .navbar {
    width: 100%;
    height: 100vh;
    position: absolute;
    padding: 0;
    top: 0;
    left: 0;
  }

  .nav {
    height: 100%;
    width: 0%;
    background-color: #f2f2f2;
    z-index: 5;
    position: fixed;
    top: 0;
    right: 0;
    transition: all .2s ease-in-out .2s
  }
  .nav.active {
    width: 80%;
    background-color: #f2f2f2;
    transition: all .2s ease-in-out

  }

  .nav ul {
    width: 100%;
    margin-right: 100px;
    overflow: hidden;
  }

  .nav ul li .btn{
    font-size: 1em;
    line-height: 1.25em;
    padding: 0 .25rem;
    font-weight: bold;
    overflow: hidden;
  }
  .nav ul li .btn {
    position: relative;
    bottom: -100px;
    right: -50px;
    transition: all .4s ease-in-out;
    padding: 5px;
  }

  .nav ul li.active .btn {
    position: relative;
    bottom: 0px;
    right: 0px;
    transition: all .4s ease-in-out;
    overflow: hidden;
  }

  .nav ul li.active a:hover {
    color: #f2f2f2;
    background-color: #0a0a0b;
  }

  .nav-overlay {
    width: 0%;
    height: 100%;
    z-index: 4;
    opacity: 0;
    background-color: rgba(0, 0, 0, .75);
    transition: all .2s ease .2s
  }
  .nav-overlay.active {
    width: 100%;
    opacity: 1;
    transition: all .2s ease-in
  }

  .menu-icon {
    position: absolute;
    top: 40px;
    right: 25px;
    z-index: 10;
    width: 20px;
  }
  .menu-icon > .trigger {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 11;
    width: 20px;
    opacity: 0;
    cursor: pointer;
  }
  .menu-icon > span {
  display: block;
  position: relative;
  width: 100%;
  height: 2px;
  background-color: #0a0a0b;
  border-radius: 0;
  transition: all .4s ease-in-out
  }
  .menu-icon > span:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0a0a0b;
    margin-top: 8px;
    transition: all .4s ease-in-out
  }

  .menu-icon > span.active {
    // background-color: #f2f2f2;
    margin-top: 4px;
    transition: all .4s ease-in-out
  }
  .menu-icon > span.active:after {
    // background-color: #f2f2f2;
    margin-top: 4px;
    transition: all .4s ease-in-out
  }

  @media (min-width: 768px) {
    .nav.active {
      width: 50%;
    }
    .nav ul li {
      font-size: 3em;
      line-height: 1.25em;
    }
    .menu-icon {
      right: 50px;
    }
    .logo {
      position: absolute;
      left: 50px;
      // width: 70px;
    }
  }
  @media (min-width: 992px) {
    .nav ul li {
      font-size: 4em;
      line-height: 1.25em;
    }
  }

</style>
