<template>
  <div>
    <p class="titul-list">Completed tasks</p>
    <AlBackgroundList
    :boardName="boardName"
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
      // for today!
      boardName: 'CheckingTask'
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