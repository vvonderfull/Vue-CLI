import firebase from 'firebase/app'

export default {
    actions: {
       async login({dispatch, commit}, {email, password}){
            try {
               await firebase.auth().signInWithEmailAndPassword(email,password)
            } catch (e) {
                throw e
            }
        },
        async logout({commit}) {
           await firebase.auth().signOut()
           commit('clearInfo')
        },
        getuid () {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        }
    }
}