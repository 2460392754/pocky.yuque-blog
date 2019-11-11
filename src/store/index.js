import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        docId: null,
        docRenderDone: 0,
        scrollTop: 0
    },

    mutations: {
        setDocId(state, docId) {
            state.docId = docId;
        },

        updateDocRenderDone(state) {
            state.docRenderDone++;
        },

        setScrollTop(state, n) {
            state.scrollTop = n;
        }
    }
});
