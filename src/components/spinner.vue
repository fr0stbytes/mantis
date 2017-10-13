<template>
  <b-row class="loading text-center" align-v="center">
    <div class="loader">
      <svg version="1.1" id="spinner-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      	 width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
         <circle fill="#0a0a0b" cx="25" cy="25" r="24.473"/>
      </svg>
      <svg version="1.1" id="spinner-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      	 width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
         <circle fill="#0a0a0b" cx="25" cy="25" r="24.473"/>
      </svg>
    </div>
  </b-row>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .loading {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: #f2f2f2;
  }
  .loader {
    margin-left: calc(50% - 25px);
  }

  #spinner-1 {
    position: absolute;
    opacity: .8;
    animation: loading 2s ease-in-out infinite;
  }
  #spinner-2 {
    position: absolute;
    opacity: .8;
    animation: loading2 2s ease-in-out infinite;
  }

  @keyframes loading {
    0%{

    }
    50%{
      opacity: .6;
      transform: translateY(-20px);
    }
  }
  @keyframes loading2 {
    0%{

    }
    50%{
      opacity: .6;
      transform: translateY(20px);
    }
  }
</style>
