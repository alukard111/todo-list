<template>
  <div class="">
    <div class="box-btn">
      <button 
        class="btn-add" 
        ref="btn" 
        @click="multiActive()"
        >
        {{ btnName }} 
      </button>
      
    </div>
  </div>
</template>

<script>

  export default {
    data: () => ({
      btn: '',
    }),

    props: {
      btnName: {
        type: String || Number,
        require: true,
        default: 'Button'
      },

     
    },

    

    methods: {
      multiActive() {
        if (this.btnName == 'Добавить задачу') {
          this.focusInput()
        }
        this.sendTask()
        this.cancelInputBtn()
        this.openCalendar()
      },
      sendTask() {
        this.$emit('sendTask')
      },

      cancelInputBtn() {
        this.$emit('cancelInputBtn')
      },

      openCalendar() {
        this.$emit('openCalendar')
      },

      focusInput() {
        this.$emit('focusInput')
      }

   }
 } 


</script>



<style lang="scss">
@layer base {
  
  .box-btn {
    @apply
      flex
      flex-col
      items-center
      justify-center;
  }

  .btn-add {
    @apply
      w-36
      m-2
      p-2
      rounded-lg
      bg-red-600
      active:bg-red-900
      text-white
      focus:outline-none;
  }
}

</style>