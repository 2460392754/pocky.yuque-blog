import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        docId: null
    },

    mutations: {
        setDocId(state, docId) {
            state.docId = docId;
        }
    },

    actions: {
        docId({ commit }, docId) {
            commit('docId', docId);
        }
    }
});
