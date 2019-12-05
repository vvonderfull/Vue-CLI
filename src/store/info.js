import firebase from 'firebase/app'

export default {
    state: {
        info: {}
    },
    mutations: {
        setInfo (state, info) {
            state.info = info
        },
        clearInfo (state) {
            state.info = {}
        }
    },
    actions: {
        async fetchInfo ({ dispatch, commit }) {
            try {
                const uid = await dispatch('getuid')
                const info = (await firebase.database().ref(`/Users/${uid}/info`).once('value')).val()
                commit('setInfo', info)
            } catch (e) {}
        }
    },
    getters: {
        info: s => s.info
    }
}
