import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './vuex/store'
import { Actions } from './vuex/actions'
import getResume from './api/resources'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
  created () {
    getResume().then(r => {
      store.dispatch(Actions.loadSummary, {
        summary: r.data.summary,
        firstName: r.data.firstName,
        lastName: r.data.lastName,
        companyName: r.data.companyName,
        role: r.data.role
      })
      store.dispatch(Actions.loadKeySkills, r.data.keySkills)
      store.dispatch(Actions.loadIndustryKnowledge, r.data.industryKnowledge)
      store.dispatch(Actions.loadEducationHistory, r.data.educationHistory)
      store.dispatch(Actions.loadLinks, r.data.links)
      // store.dispatch(Actions.loadProfessionalExperience, r.data.professionalExperience)
    })
  }
})
