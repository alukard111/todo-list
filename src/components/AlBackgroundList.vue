<template>
  <div class="box-bg-list
      
      ">
    <div class="bg-list ">
      <div
        class="div-list
        "
      > 
        Сегодня {{ getDateNow }} 
      </div>

      <div>Task: {{ numberOfTasks }}</div>
      
      <AlUl 
        :text="text"
        :date="dateCheck"
        @defaultValueState="defaultValueState"
        @getValueAllTask="numberOfTasks = $event"
       
      />
      <AlBtnAddTask
        @addTaskActive="addTaskActive"
        v-if="!activeTask"
      />
      <div 
        v-if="activeTask"
      >
        <AlInput
          :valueState="valueState"
          :activeFocus="activeTask"
          @valueStateDefault="defaultValueState"
          @textValue="text = $event"

        />
        <div
        v-if="calendarIsOpen">
          <AlCalendar 

          @dateCheck="dateCheck = $event" />
          
        </div>
        <div class="relative">
          <div class="al-date-btn absolute left-10">
            <AlBtn 
              @openCalendar="openCalendar"
              :btnName="dateBtn"
              />
          </div>

        </div>
        <div class="box-al-btn">
          <AlBtn 
            @helloBtn="returnValue"
            :btnName="addTask"
          />
          <AlBtn 
            @cancelInputBtn="cancelInputBtn"
            :btnName="cancelInput"
          />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import AlInput from '@/components/AlInput.vue'
import AlBtn from '@/components/AlBtn.vue'
import AlUl from '@/components/AlUl.vue'
import AlBtnAddTask from '@/components/AlBtnAddTask.vue'
import AlCalendar from '@/components/AlCalendar.vue'

  export default {
    components: {
      AlInput,
      AlBtn,
      AlUl,
      AlBtnAddTask,
      AlCalendar
    },

    data: () => ({
      valueState: false,
      text: '',
      newTask: '',
      dateCheck: '',
      numberOfTasks: 0,
      activeTask: false,
      calendarIsOpen: false,
      //btn name
      addTask: 'Добавить задачу',
      cancelInput: 'Отмена ввода',
      dateBtn: '📆'
    }),

    computed: {
      getDateNow() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = dd + '.' + mm + '.' + yyyy;
        return today
      }
    },
    
// ./src/assets/svg
    methods: {
      returnValue() {
        this.closeCalendar()
        setTimeout(() => {
          this.dateCheck = ''
        }, 100)
        if (this.valueState) {
          return this.valueState = false
        } else {
          return this.valueState = true
        }
      },
      defaultValueState() {
        this.text = ''
        return this.valueState = false
      },

      addTaskActive() {
        
        return this.activeTask = true
      },
      cancelInputBtn() {
        this.closeCalendar()
        this.activeTask = false
        console.log(this.activeTask)
        return this.activeTask

      },

      openCalendar() {
        if (this.calendarIsOpen) {
          return this.closeCalendar()
        } else {
          return this.calendarIsOpen = true

        }
      },

      closeCalendar() {
        return this.calendarIsOpen = false
      }
    }
  }

</script>

<style lang="scss">
@layer base {
  .box-bg-list {
    @apply
       
      m-4
      h-auto
      container
      xl:w-3/5
      mx-auto
      px-4; 
  }

  .box-al-btn {
    @apply
      flex
      justify-center;
  }
  
  .div-list {
    @apply
      border-b-2 
      border-white
      pb-2;
  }

  
}

</style>