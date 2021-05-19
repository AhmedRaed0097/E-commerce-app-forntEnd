export const state = () => ({
  products_list: []
});



export const mutations = {
      ADD(state,products){
        state.products_list = products;
      }
}
export const actions = {
 async fetch({
    commit
  }) {
    return await this.$axios
      .$get(`fetch-products`).then((res) => {
        // console.log('fetch-products res=> ', res.products);
        commit('ADD',res.products)
      }).catch((err) => {
        console.log('fetch-products err=> ', err);

      })
  }
}

export const getters = {
  trendProducts: (state) => {
    return state.products_list.slice(0,10)
  }
}

