<template>
  <div class="up-coming-task">
    <p class="titul-list">Challenges ahead</p>
    <AlBackgroundList
      :boardName="boardNames"
    />
  </div>
</template>

<script>
import AlBackgroundList from '@/components/AlBackgroundList.vue' 

  export default {
    components: {
      AlBackgroundList
    },

    data: () => ({
      boardNames: 'UpComingTask',
    })
  }
</script>

<style>
        
@import url('http://fonts.cdnfonts.com/css/the-godfather');
div>.titul-list {
  font-family: 'The Godfather', sans-serif;
  font-size: 62px;
}
</style>