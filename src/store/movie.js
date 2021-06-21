export default {
    //module
    namespaced: true,
    //data
    state: () => ({
        movies: []
    }),
    //getter
    getters: {
        movieIds(state) {
            return state.movies.map(m => m.imdbID)
        }
    },
    //methods

    //변이 - mututions 에서만 데이터 수정 가능
    mutations: {
        resetMovies(state){
            state.movies = []
        }
    },
    // 그 외 나머지 (기본적으로 비동기 처리됨)
    actions: {
        searchMovies(){
        }
    }
}