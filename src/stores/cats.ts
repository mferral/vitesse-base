import { defineStore } from 'pinia'

export const useCatsStore = defineStore({
  id: 'cats',
  state: () => ({
    loading: false,
    cats: <any>[],
  }),
  actions: {
    async listCats() {
      const limit = Math.random() * (10 - 2) + 2
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=10&order=Desc`)
      this.$state.cats = await response.json()
    },
    async moreCats() {
      const limit = Math.random() * (10 - 2) + 2
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=10&order=Desc`)
      const more_cats = await response.json()

      this.$state.cats = [
        ...more_cats,
        ...this.$state.cats,
      ]
    },
  },
  getters: {
    getCats(state) {
      return state.cats
    },
  },
})
