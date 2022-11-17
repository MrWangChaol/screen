import {
    defineStore
} from 'pinia'

export const useStore = defineStore('storeId', {
    state: () => {
        return {
            city: 0,
            cityData: {}
        }
    },
    getters: {
        getStateCity: (state) => state.city,
    },
    actions: {
        setCityData(data) {
            this.cityData = data
        }
    },
})