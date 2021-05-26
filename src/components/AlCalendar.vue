
<template>
  <div>

    <div class="relative bottom-56 right-32 z-50">
      
      <div class="text-xs al-calendar bg-green-500 rounded-lg w-60
      shadow-2xl absolute "
      v-if="!calendar.monthsDisplayed">
        <div class="month-and-year">
          <div class="year flex justify-center items-center">
            <button @click="yearDown()" class="m-2"> << </button>
            <p class="text-center">{{ calendar.year }}</p>
            <button @click="yearUp()" class="m-2">>> </button>

          </div>
          <div class="month flex justify-center items-center">
            <button @click="monthDown()">  << </button>
            <p class="text-center cursor-pointer w-24"
            @click="showMonths()">{{ year.month[Number(calendar.month)]}}</p>
            <button @click="monthUp()">>> </button>

          </div>
        </div>
        <div class="grid grid-cols-7 grid-rows-1 w-56 text-center ">

          <div class=" w-8 h-2  m-2">Пн</div>
          <div class="w-8 h-2  m-2">Вт</div>
          <div class="w-8 h-2  m-2">Ср</div>
          <div class="w-8 h-2  m-2">Чт</div>
          <div class="w-8 h-2  m-2">Пт</div>
          <div class="w-8 h-2  m-2">Сб</div>
          <div class="w-8 h-2  m-2">Вс</div>
        </div>
        <div class="
          grid grid-cols-7 
          grid-rows-1 
          w-56
          text-center" 
          v-for="(days, id) in monthsDay"
          :key="id"    
            >
          <div class="
          w-6
            h-6
            mt-1 
            mx-3  
          text-white  
            cursor-pointer
            date-class
            rounded-full
            flex items-center justify-center"
            v-for="(item, key) in days"
            :key="key"
            :id="item + '_date'"
            :class="Number(calendar.today) == item ? 'bg-blue-700' : ''"
            @click="datePicker(item)"
            >
            {{ item }} 
          </div> 
        </div>
        <div class="flex flex-row justify-center ">
          <button type="button" class="m-2 rounded-lg p-3 hover:text-green-900 active:text-blue-700 focus:outline-none " @click="closeCalendar" >   Ok </button>
          <button type="button" class="m-2 rounded-lg p-3 hover:text-green-900 active:text-blue-700 focus:outline-none " @click="cancelCalendar">Cancel</button>
        </div>
      </div>
      <div class="al-month w-80 "
      v-if="calendar.monthsDisplayed">
        <div
        class="grid grid-cols-4 grid-rows-1 w-70 text-center bg-green-500 rounded-lg
      shadow-2xl"
        >
          <div class="w-8 h-6   m-2 cursor-pointer"
            v-for="(item, key) in year.month"
            :key="key + item"
            :id="item +'-month'"
            @click="getSelectedMonth(key)">
            {{ item.slice(0,3) }}
            </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data: () => ({
      monthsDay: [],
     
      //счётчик
      counter: 0,

      calendar: {
          year: '',
          month: '',
          today: '',
          allDayInMonth: '',
          firstDayInMonth: '',
          lastDayInMonth: '',
          monthsDisplayed: false

      },
      

      year : {
        month: {
          0: 'Январь',
          1: 'Февраль',
          2: 'Март',
          3: 'Апрель',
          4: 'Май',
          5: 'Июнь',
          6: 'Июль',
          7: 'Август',
          8: 'Сентябрь',
          9: 'Октябрь',
          10: 'Ноябрь',
          11: 'Декабрь'
        },
      },
     
    }),
    computed: {
      
      
    },

    mounted() {
      
      let today = new Date();
      this.calendar.year = today.getFullYear() // устанавливаю год
      // this.calendar.month = String(today.getMonth() + 1).padStart(2, '0') // устанавливаю месяц
      this.calendar.month = today.getMonth()  // устанавливаю месяц
      
      this.calendar.today = String(today.getDate()).padStart(2, '0')  // устанавливаем день сегоднешний
      //получаем количество дней в месяце с пробелами
      console.log(this.calendar.year, this.calendar.month, this.calendar.today)
      this.getDayInMonths()
      
      //получаем список списков дней
      this.getMonthDays()

      console.log(typeof(this.calendar.month))
    },

    methods: {
      getMonthDays() {
        // получаем количество дней в месяце, первый день недели месяца, последний день недели месяца
        this.getDayInMonths()
        // создаю список - в нем будут показаны дни
        let arr = []
        // от какого числа будет добавляться числа в список
        let from = 1
        // до какого числа идет месяц
        let to = this.calendar.allDayInMonth
        
        // пропускаемые даты в начале и конце календаря
        let shifElements = this.calendar.firstDayInMonth
        let popElements = this.calendar.lastDayInMonth
        
        
        // создаем список от и до дат дней
        arr = this.createArr(from, to)
         
        // добавляем в начало списка пустые дни
        if (shifElements == 0) {
          for (let i = 0; i < 6; i++) {
            arr.unshift(' ')
          }
        } else {
          for (let i = 0; i < shifElements-1; i++) {
            arr.unshift(' ')
          }
        }

        // нужно добавить в конец списка пустые дни        
        if (popElements == 0) {
        } else {
          for (let i = 0; i < 7-popElements; i++) {
            arr.push(' ')
          }
        }
        // получаем наш список списков дат с пробелами в начале и в конце
        arr = this.chunckArr(7,arr)
        // отправляем список списков в дату
        this.monthsDay = arr
        return
      },
      // получение дней в месяце
      getDayInMonths() {
        this.calendar.allDayInMonth = new Date(this.calendar.year,this.calendar.month+1,0).getDate() // количество дней в месяце
        this.calendar.firstDayInMonth = new Date(this.calendar.year,this.calendar.month,1).getDay() // первый день недели месяца
        this.calendar.lastDayInMonth = new Date(this.calendar.year,this.calendar.month,this.calendar.allDayInMonth).getDay() // последний день месяца
        
        return
      },

      // проверка - тот ли месяц и год сейчас? если тот, то сегодняшняя дата выбрана, иначе, дате присвоена 32 
      checkTodayDate() {
        if (this.calendar.month != new Date().getMonth() || this.calendar.year != new Date().getFullYear()) {
          this.calendar.today = 32

        } else {
          
          this.calendar.today = String(new Date().getDate()).padStart(2, '0') 
        }
      },
      // месяц вперед
      monthUp() {
        this.dateBlurForUpDownMonth()
        if (this.calendar.month >= 11) {
          this.calendar.year+=1 
          this.calendar.month = 0
          this.getMonthDays()
        } else {
          this.calendar.month += 1
          this.getMonthDays() 
        }
        this.checkTodayDate()
      },
      // перелистывает месяц назад
      monthDown() {
        this.dateBlurForUpDownMonth()
        if (this.calendar.month <= 0) {
          this.calendar.year -= 1
          this.calendar.month = 11
          this.getMonthDays()
        } else {
          this.calendar.month -= 1
          this.getMonthDays()
        }
        this.checkTodayDate()

      },
      // создает список от первого числа месяца до последнего
      createArr(from, to) {
        let arr = []
        for (let i = from; i <= to; i++) {
          arr.push(i)
        }
        return arr
      },
      // разбивает массив на много массивов
      chunckArr(num, arr) {
        let miniArr = []
        let bigArr = []
        for (let i = 0; i < 42; i+= num) {
          miniArr = arr.slice(i, num+i)
          bigArr.push(miniArr)
        }
        return bigArr
      },
      // выделяет дату и возвращает её в консоль
      datePicker(focusDate) {
        this.dateBlur(focusDate)
       
        if (focusDate != ' ') {
          // консоль выводит дату по которой кликнули
          this.$emit('dateCheck', `${String(focusDate).length < 2 ? ('0'+String(focusDate)) : focusDate}.${String(this.calendar.month).length < 2 ? ('0'+String(Number(this.calendar.month)+1)) : this.calendar.month}.${this.calendar.year}`)
          let activeDate = document.getElementById(`${focusDate}_date`)
          activeDate.classList.add('bg-red-300')
        }
        
      },
      // удаляет старые классы с красным бэкграундом и проверяет чтоб фокус был не пустым(чтоб пустые клетки нельзя было выбрать)
      dateBlur(blurDate) {
        let disableFocusDate = document.getElementsByClassName(`bg-red-300`) 
        if (disableFocusDate.length > 0 && blurDate != ' ') {    
          for (const date of disableFocusDate) {
            date.classList.remove('bg-red-300')
          }
        }
      },
      
      // удаляет старые классы с красным бэкграундом если такие есть
      dateBlurForUpDownMonth() {
        let disableFocusDate = document.getElementsByClassName(`bg-red-300`) 
        if (disableFocusDate.length > 0) {
          for (const date of disableFocusDate) {
              date.classList.remove('bg-red-300')
          }
        }
      },
      
      getPickerDate() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = dd + '.' + mm + '.' + yyyy;
        return today
      },

      showMonths() {
        this.calendar.monthsDisplayed = true
      },

      getSelectedMonth(month) {
        this.calendar.month = Number(month)
        this.calendar.monthsDisplayed = false
        this.getMonthDays() 
        this.checkTodayDate()
      },

      yearUp() {
        this.calendar.year +=1
        this.getMonthDays()
        this.checkTodayDate()
      },
      
      yearDown() {
        this.calendar.year -=1
        this.getMonthDays() 
        this.checkTodayDate()
      },

      closeCalendar() {
        this.$emit('closeCalendar', false)
      },

      cancelCalendar() {
        this.closeCalendar()
        this.$emit('cancelCalendar', '')
      }


      
      
    }
  }
</script>

<style>

</style>