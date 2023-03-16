/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'

import {
    faPaperPlane,
} from '@fortawesome/free-regular-svg-icons'

import {
    faBars,
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
    faFacebookF,
    faTwitter,
    faInstagram,
    faYoutube,
    faPaperPlane,
    faBars,
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')