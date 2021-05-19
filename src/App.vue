<template>
  <div id="app">
    <div id="nav">
      
      <router-link to="/" class="link_text">its '/' page</router-link>
      <router-link to="/about" class="link_text">About</router-link>
      <router-link to="/todolist" class="link_text">Todo list</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
