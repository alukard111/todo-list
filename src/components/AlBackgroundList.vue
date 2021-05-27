<template>
  <div class="box-bg-list">
    <div class="bg-list ">
      <div class="div-list"> 
        Сегодня {{ getDateNow }} 
      </div>
      <div>Task: {{ numberOfTasks }}</div>
        
      
      <AlUl 
        :text="text"
        :date="dateCheck"
        :todayDate="getDateNow"
        :boardName="boardName"
        @defaultValueState="defaultValueState"
        @getValueTodayTasks="numberOfTasks = $event"
       
      />
      <div v-if="activeTask" class="">
        <div class="al-date-btn flex justify-between items-baseline">
          <button 
            @click="openCalendar()" 
            class="border-gray-400 border p-1 rounded-lg w-20 active:bg-gray-400 focus:outline-none"
            >
              {{  dateBtn  }} Дата 
          </button>
          <p class="flex justify-center" >{{ dateBtn }} {{  dateCheck  }}</p>
        </div>
      </div>
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
          ref="alinput"
          @valueStateDefault="defaultValueState"
          @textValue="text = $event"
        />
        <div
        v-if="calendarIsOpen"
        class="flex justify-center">
          <AlCalendar 
          @closeCalendar="calendarIsOpen = $event"
          @cancelCalendar="dateCheck = $event"
          @dateCheck="dateCheck = $event" />
        </div>
        <div class="box-al-btn">
          <AlBtn 
            @focusInput="focusInput"
            @sendTask="returnValue"
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
    props: {
      // Позволяет фильтровать дату 

      boardName: {
        type: String || Number,
        require: false,
        default: ''
      }
    },

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
      dateBtn: '📆',
      focus
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

      blurTask() {
        return this.activeTask = false
      },
      cancelInputBtn() {
        this.closeCalendar()
        this.activeTask = false
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
      },

      // фокус работает, но обращение к нему крайне изуродованно
      focusInput() {
        return this.$refs.alinput.$refs.input.focus()
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