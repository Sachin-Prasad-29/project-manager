import Vue from 'vue';
import Vuetify from 'vuetify/lib';
//import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    iconfont: 'mdi',

    theme: {
        dark: false,
        themes: {
            light: {},
            dark: {},
        },
    },
});
