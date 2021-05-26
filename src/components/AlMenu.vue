<template>
  <div id="al-menu">
    <div id="menu" class="menu">
          <!-- <router-link
            class="" 
            style="width: 50%; height: 50%" 
            to="/"
            v-slot="{ navigate }">
          </router-link> -->
      <div @click="goToDayList()" class="w-16 h-16 flex justify-center items-center"
      :class="this.$route.path == urlToDayList ? 'bg-green-600' : '' ">
        <img 
          class="text-center"
          style="width:45%;"
          src="../assets/svg/menu-trash.svg"
          alt="1"/>
      </div>

     
  
      <div @click="goToAbout()"
      :class="this.$route.path == urlAbout ? 'bg-green-600' : '' ">
        <img style="width: 40%" src="../assets/png/menu-check.png"/>
      </div>
      <div>
        <img style="width: 40%" src="../assets/png/menu-next.png"/>
      </div>
      <div>
        <img style="width: 40%" src="../assets/svg/menu-trash.svg"/>
      </div>
    
      
      
      
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      urlAbout: '/about',
      urlToDayList: '/todolist',
      

    }),

    methods: {
      goToAbout() {
        
        return this.$router.push({path:`${this.urlAbout}`})
      },

      goToDayList() {
        return this.$router.push({path:`${this.urlToDayList}`})
      }
    }
  }
</script>


<style lang="scss">
@layer base {

  #al-menu {
    @apply
      relative;
  }

  .menu {
    @apply
      fixed
      flex
      flex-col
      items-center
      h-screen
      bg-gray-800
      w-16;
  }

  .menu>div>img {
    @apply
      m-5;
  }

  
  .menu>div {
    @apply
      active:bg-gray-500
      transition
      delay-75;
  }

  .menu>div>img {
    @apply
      transition
      delay-75
      transform
      hover:scale-125;

  }
    
}
</style>