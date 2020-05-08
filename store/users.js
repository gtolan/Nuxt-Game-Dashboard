// import firebase, {auth, GoogleProvider} from '@/services/fireinit.js'

// import firebaseApp from '~/firebase/app';
export const state = () => ({
    userCounter: 0,
    uid: null,
    user: null
  })
  

  export const getters = {

    uid(state) {
      if (state.user && state.user.uid) return state.user.uid
      else return null
    },
  
    user(state) {
      return state.user
    },
  
    isAuthenticated(state) {
      return !!state.user && !!state.user.uid
    }
  }
  
  export const actions = {
  
    async login({dispatch, state}, user) {
      console.log('[STORE ACTIONS] - login')
      const token = await firebaseApp.auth().currentUser.getIdToken(true)
      const userInfo = {
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        uid: user.uid
      }
  
     // Cookies.set('access_token', token) // saving token in cookie for server rendering
      await dispatch('setUSER', userInfo)
      await dispatch('saveUID', userInfo.uid)
      console.log('[STORE ACTIONS] - in login, response:', status)
  
    },
  
    async logout({commit, dispatch}) {
      console.log('[STORE ACTIONS] - logout')
      await this.$fireAuth().signOut()
  
   // Cookies.remove('access_token');
      commit('setUSER', null)
      commit('saveUID', null)
    },
  
    saveUID({commit}, uid) {
      console.log('[STORE ACTIONS] - saveUID')
      commit('saveUID', uid)
    },
  
    setUSER({commit}, user) {
      commit('setUSER', user)
  
    }
  
  }
  
  export const mutations = {
    saveUID (state, uid) {
      console.log('[STORE MUTATIONS] - saveUID:', uid)
      state.uid = uid
    },
    setUSER (state, user) {
      console.log('[STORE MUTATIONS] - setUSER:', user)
      state.user = user
    }
  }

// export const mutations = {
//     increment (state) {
//       state.userCounter++
//     },
//     setUser (state, payload) {
//         state.user = payload
//     },
//     onAuthStateChangedMutation(ctx, { authUser, claims }) {
//         if (!authUser) {
//           // claims = null
//             console.log('onAuthStateChangedMutation', ctx,  'ctx')
//           // Perform logout operations
//         } else {
//             console.log('!USER-onAuthStateChangedMutation', ctx,  'ctx')
//           // Do something with the authUser and the claims object...
//         }
//     }
// }
// const getters = {
//     activeUser: (state, getters) => {
//       return state.user
//     }
// }

// export const actions = {
//     autoSignIn ({commit}, payload) {
//       commit('setUser', payload)
//     },

//     signInWithGoogle ({commit}) {
//       return new Promise((resolve, reject) => {
//         auth.signInWithRedirect(GoogleProvider)
//         resolve()
//       })
//     },

//     signOut ({commit}) {
//       auth.signOut().then(() => {
//         commit('setUser', null)
//       }).catch(err => console.log(error))
//     }
//   }