import Vue from 'vue'
import VueForm from 'vue-form'

let options = {
    validators : {
        'maximo' : value => {
            return value.length <= 15
        },
        'no-espacios': value => {
            return !value.includes(' ')
        }
    }
}

Vue.use(VueForm, options)
