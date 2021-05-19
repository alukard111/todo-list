<template>
  <div class="al-input">
    <div class="text-input">
      <textarea 
        type="text"
        class="input"
        ref="input"  
        v-model="textValue"
        id="text-input"
      >
      <!-- computed реализован именно тут. пока не знаю, но нужно это как-то менять...не нравится эстетика -->
      {{ getValue }}
      {{ focusActive }}
      
      </textarea>
      
    </div>
    
  </div>
</template>



<script>

  export default {
    props: {
      valueState: {
        type: Boolean,
        default: false
      },

      activeFocus: {
        type: Boolean,
        require: false,
        default: false
      }
    },

    data: () => ({
      textValue: '',
    }),
    
   

    computed: {
      focusActive() {
        let getElementForFocus = document.querySelector(`#text-input`)
        console.log('alInput', this.activeFocus, 'getElem',getElementForFocus)
        this.focusActiveMethod(getElementForFocus)
        
      },

      getValue() {
        if (this.valueState) {
          this.$emit('valueStateDefault')
          this.getMessageValue()
        }
      },
    },

    methods: {
      getMessageValue() {
        if (this.textValue.length > 0) {
          this.$emit('textValue', this.textValue)
          this.textValue = ''
        }
      },

      focusActiveMethod(element) {
        if (this.activeFocus) {
          
          console.log(element)
          
        }
      }
    }
  }
</script>


<style lang="scss">
@layer base {
  .al-input {
    @apply  
      bg-black
      flex
      justify-center
      flex-col
      m-4;
  }

  .text-input {
    @apply
    container
      flex
      flex-col;
  }

    // bg-green-600
  .input {
    @apply
      bg-gray-900
      p-1
      text-white
      outline-none
      ring-2
      ring-gray-600
      ring-offset-0
      resize-none
      items-center
      h-32;
  }
  
}
</style>