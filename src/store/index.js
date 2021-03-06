import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    search: null,
    tasks: [
      {
        id: 1,
        title: 'Wake up',
        done: false,
        duedate: '2022-1-18'
      },
      {
        id: 2,
        title: 'Get food',
        done: false,
        duedate: null
      },
      {
        id: 3,
        title: 'Eat food',
        done: false,
        duedate: '2022-1-25'
      }
    ],
    snackbar: {
      show: false,
      text: ''
    },
    sorting: false
  },
  mutations: {
    setSearch(state, value) {
      state.search = value
      console.log(value, state.search)
    },
    addTask(state, newTaskTitle) {
      let newTask = {
          id: Date.now(),
          title: newTaskTitle,
          done: false,
          duedate: null
        }
        state.tasks.push(newTask)
    },
    doneTask(state, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    updateTaskTitle(state, payload) {
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.title = payload.title
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.duedate = payload.duedate
    },
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    showSnackbar(state, text) {
      let timeout = 0
      if (state.snackbar.show) {
        state.snackbar.show = false
        timeout = 300
      }
      setTimeout(()=> {
        state.snackbar.show = true
        state.snackbar.text = text

      }, timeout)
    },
    hideSnackbar(state) {
      state.snackbar.show = false
    },
    toggleSorting(state){
      state.sorting = !state.sorting
    }
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle)
      commit('showSnackbar', 'Task added!')
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id)
      commit('showSnackbar', 'Task deleted!')
    },
    updateTaskTitle({commit}, payload) {
      commit('updateTaskTitle', payload)
      commit('showSnackbar', 'Task updated!')
    },
    updateTaskDuedate({commit}, payload) {
      commit('updateTaskDueDate', payload)
      commit('showSnackbar', 'Due date updated!')
    }
  },
  getters: {
    tasksFiltered(state) {
      if (!state.search) {
        return state.tasks
      }
      return state.tasks.filter(t => t.title.toLowerCase().includes(state.search.toLowerCase()))
    }
  },
  modules: {
  }
})
