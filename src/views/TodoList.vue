<template>
  <div id="todo_app_box">
    <div id="title-discription">
      <div id="title-list-co">
        <h1>TODO List</h1>
        
      </div>
    </div>
    <AlBackgroundList tasks={todayTasks} />
    
  </div>
</template>


<script>
import AlBackgroundList from '@/components/AlBackgroundList.vue' 

  export default {
    components: {
      AlBackgroundList
    }
  }


</script>


<style lang="scss">
@import url('http://fonts.cdnfonts.com/css/the-godfather');
  body {
    
    color: white;
  }

  #title-list-co {
    font-family: 'The Godfather', sans-serif;
    font-size: 62px;
  }

  #title-list-tagline {
    font-size: 42px;
  }
@layer base {
  #title-discription {
    @apply 
      hidden
      md:block;
  }

  #todo_app_box {
    @apply
      flex
      flex-col
      items-center
      justify-center;
  }

  .todo-app {
    @apply
      rounded-lg 
      bg-gray-700
      
      shadow-2xl
      m-4
      
      h-40;
  }
  
  .main-window-todo {
    @apply
      flex
      flex-col-reverse
      m-4;
  }

  .btn-add-note {
    @apply
      w-20
      p-1
      mb-2
      border
      border-red-700
      bg-red-300
      transition
      duration-100
      active:bg-red-600;
  }

  

}
</style>