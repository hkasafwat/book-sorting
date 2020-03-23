import AllBooks from './components/AllBooks';
import CurrentBooks from './components/CurrentBooks';
import ReadBooks from './components/ReadBooks';


export default {
    mode: 'history',

    routes: [
        {
            path: '/',
            component: AllBooks
        },

        {
            path: '/current',
            component: CurrentBooks
        },

        {
            path: '/done',
            component: ReadBooks
        }
    ]
}