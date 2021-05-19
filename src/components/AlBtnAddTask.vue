<template>
  <div class="box-btn-add-task">
    <button class="btn-add-task"
    @click="activeTask">+</button>
    <p>Add task</p>
  </div>
</template>

<script>
  export default {
    data:() => ({
      
    }),

    methods: {
      activeTask() {
        return this.$emit('addTaskActive')
      }
    }
  }
</script>

<style>
@layer base {
  .box-btn-add-task {
    @apply 
      flex
      flex-row
      justify-center;
  }

  .btn-add-task {
    @apply 
      w-6
      rounded-2xl
      bg-red-600
      active:bg-red-900
      text-white
      focus:outline-none;
  }
}
</style>