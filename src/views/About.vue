<template>
  <div class="about">
    <h1>Тут по ничего нет</h1>
  </div>
</template>



<script>
import AlCalendar from '@/components/AlCalendar.vue'

  export default {
    components: {
      AlCalendar
    }
  }
</script>




<style lang="scss">


@layer base {
  
  .about {
    @apply
      flex
      flex-col
      items-center
      justify-center;
  }
}
</style>