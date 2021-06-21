import axios from 'axios';
export default {
    //module
    namespaced: true,
    //data
    state: () => ({
        movies: []
    }),
    //getter
    getters: {},
    //methods

    //변이 - mututions 에서만 데이터 수정 가능
    mutations: {
        updateState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        resetMovies(state){
            state.movies = []
        }
    },
    // 그 외 나머지 (기본적으로 비동기 처리됨)
    actions: {
       async searchMovies({commit}, payload){       
            const {title, type, number, year} = payload;
            console.log(title, type, number, year)
            const OMDB_API_KEY='29bb3d6c';
            const res = await axios.get(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
            const { Search, totalResults } = res.data
            commit('updateState', {
                movies: Search
            })
        }
    }
}