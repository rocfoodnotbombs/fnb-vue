import { createStore, createLogger } from 'vuex'
import { auth } from './modules/Auth.js'
import { location } from './modules/Locations.js'
import { userData } from './modules/UserData.js'
import { modal } from './modules/Modal.js'
import { image } from './modules/Images.js'

export const store = createStore({
  modules: {
    authMod: auth,
    locMod: location,
    userDataMod: userData,
    modal: modal,
    imageMod: image
  },
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
})
