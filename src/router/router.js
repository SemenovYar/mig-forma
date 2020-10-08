import Vue from 'vue'
import Router from 'vue-router'

import mMainWrapper from '../components/m-mainWrapper'
import mFormsArrived from '../components/m-forms_arrived'
import mFormsMeeting from '../components/m-forms_meeting'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'mainWrapper',
            component: mMainWrapper,
        },
        {
            path: '/arrived',
            name: 'arrived',
            component: mFormsArrived,
        },
        {
            path: '/',
            name: 'mainWrapper',
            component: mFormsMeeting,
        },

    ]
})


export default router;