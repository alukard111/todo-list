<template>
  <div>
    <div id="menu">
      <AlMenu />
    </div>
    <div id="app">

      <div id="nav">
        
      </div>
      <router-view/>
    </div>

  </div>
</template>

<script>
import AlMenu from '@/components/AlMenu.vue'
  export default {
    components: {
      AlMenu
    }
  }
</script>

<style lang="scss">
body {
  background: #161616;
}
@layer base {
  #app {
    @apply
      container
      mx-auto
      px-4;
  }
  #nav {
    @apply
      flex
      justify-center
      items-center;
  }


  .link_text {
    @apply
      m-4
      transition
      duration-200      
      hover:text-red-500;
  }
 
}
</style>
