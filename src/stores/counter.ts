import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
  }),
  actions: {
    incrementCounter() {
      this.$state.counter++
    },
    addValue(value: number) {
      this.$state.counter += +value
    },
  },
  getters: {
    getCounter(state) {
      return state.counter
    },
  },
})
