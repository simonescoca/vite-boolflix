import {reactive} from 'vue';
const store = reactive ({
    moviesData: [],
    seriesData: []
});

export {store}

// import {store} from "./path"
// e poi:

// data() {
//     return {
//         store
//     }
// }