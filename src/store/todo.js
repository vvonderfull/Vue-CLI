import firebase from 'firebase/app'

export default {
    state: {
        todo: {}
    },
    mutations: {
        setTodo (state, a) {
            for (let i in a) {
                if (i !== 'info') {
                    state.todo[i] = a[i]
                }
            }
        }
    },
    actions: {
        async fetchTodo ({ dispatch, commit }) {
            try {
                const uid = await dispatch('getuid')
                const a = (await firebase.database().ref(`Users/${uid}`).once('value')).val()
                commit('setTodo', a)
            } catch (e) {

            }
        },
    },
    getters: {
        todo: s => s.todo
    }
}
