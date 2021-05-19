<template>
  <div class="box-ul">
    <div class="ul">
      <ul class="list">
        {{newTaskLi}}
        <li v-for="(item, key) in todoList"
          :key="key"
          :id="item.number"
          class="todo-task"
          > 
          <div class="left-setings">
            <div class="checkbox-li p-value">
              <input 
                class="checkbox-input"
                type="checkbox"
                @click="checkedItem(key)"
               
                >
                <p
                  @keydown.enter="onEnter(item.number)"
                  @click="onInput(item.number)" 
                  class="edditor"
                  ref="edditThisTask"
                  contenteditable="true"
                  :id="`id_` + item.number"
                  v-bind:class=" item.checked ? 'line-through' : ''"
                >
                {{ item.value }}
              </p>
              
            </div>
            <div class="">
              <p class="date ">📅{{  item.date  }}</p>
              
            </div>
          </div>
            <div class="control-box">
              
              <div class="icon-box" 
                @click.stop="delItem(item.number)">
                <img class="trash"  src="../assets/svg/trash.svg" alt="удаление">
              </div>
              <div class="icon-box">
                <img class="edit" @click="onInput(item.number)" src="../assets/svg/edit.svg" alt="редактирование">
              </div>

            </div>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String || Number,
        default: ''
      },

      date: {
        type: String || Number,
        require: false,
        default: ''
      }
    },


    data: () => ({
      thisElem: '',
      todoList: [],
      deleteTodoTask: [],
      todoTask: {
        name: '',
        value: '',
        checked: false,
        delete: false,
        edit: false,
        number: 0 
      }

    }),
    

    computed: {
      edit(idItem) {
        let element = document.querySelector(`#id_${idItem}`)
        console.log(element)
        console.log(element.textContentx)
        if (element.textContent === '') {
          return delItem(idItem)
        }
      },

      newTaskLi() {
        if (this.text) {
          // функция в условии говорит о том, что даже при удалении пробелов, таск заполнен больше чем на 0 символов
          if (this.text.replace(/\s+/g, ' ').trim().length > 0) {
            // сменим текст
            // и ещё одно копирование. С уже удаленными пробелами
            let cloneTask = {...this.todoTask}; 
            cloneTask.value = this.text.replace(/\s+/g, ' ').trim()
            cloneTask.date = this.date
            this.todoList.push(cloneTask)
            // плюсует id 
            this.todoTask.number += 1
            this.$emit('defaultValueState')
            this.$emit('getValueAllTask', this.todoList.length )
          } else {
            alert('нельзя добавить не заполненное ')
          }
          
        }
      },
    },
      

    methods: {
      checkedItem(number) {
        if(this.todoList[number].checked) {
          this.todoList[number].checked = false
          console.log(this.todoList[number].checked)
        } else {
          this.todoList[number].checked = true
          console.log(this.todoList[number].checked)
        }
        
      },

      delItem(num) {
        const index = this.todoList.findIndex(function(task) {
          return task.number === num
        })
        let someTodoTask = {...this.todoList[index]}
        this.deleteTodoTask.push(someTodoTask)
        this.todoList.splice(index, 1)
        this.$emit('getValueAllTask', this.todoList.length )
      },


      onInput(idItem) {
        let element = document.querySelector(`#id_${idItem}`)
        element.contentEditable = 'true'
        return element.focus()
      },

      onEnter(idItem) {
        let element = document.querySelector(`#id_${idItem}`)
        return element.contentEditable = 'false'
      },
   
    }, 
  }
</script>


<style>

@layer base {
  
  .list {
    @apply
      m-2;
  },

 
  .todo-task {
    @apply
      flex
      justify-between
      p-2
      border-b-2
      border-white
      transition 
      duration-150
      hover:border-red-600;
  },

  .checkbox-li {
    @apply
      flex
      flex-row-reverse
      justify-end;
  },

  p {
    @apply
      break-all;
  },
  
  p:focus {
    @apply
      outline-none;
  }
  .control-box {
    @apply
      flex
      flex-row
      justify-end
     ;
  },

  .checkbox-input {
    @apply 
      mt-2
      order-last;
  }

  .edditor {
    @apply
      mb-3
      ml-4;
  }

  .date-time-box>p {
    @apply 
      mr-4;
  },

  .icon-box {
    @apply
        w-10
        h-10
        rounded-lg  
        mx-1
        flex
        justify-center
        items-center
        transition
        duration-150
        hover:bg-gray-800;
  },

  .date-time-box {
    @apply
      ml-7
      flex
      flex-row
      text-xs;
  } 
}
    .edit {
      width: 22px;
      height: 22px;
      
    }

    .trash {
      width: 22px;
      height: 22px;
    }

    .icon-box:active {
      background: rgb(71, 68, 68);
    }
    
</style>