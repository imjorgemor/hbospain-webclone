const apiKey = "bf4c98ecfc269cd7a37e93dc80d3098f";

const requests = {
    //TENDENCIAS
    fetchTrending: `https://api.themoviedb.org/3/movie/popular?api_key=bf4c98ecfc269cd7a37e93dc80d3098f&language=en-US&page=1`,

    //TU PELI DE TARDE
    fetchRomance: `https://api.themoviedb.org/3/discover/movie?api_key=bf4c98ecfc269cd7a37e93dc80d3098f&language=en-US&sort_by=popularity.desc&page=1&with_genres=10749`,

    //TLA SELECCIÓN DEL EDITOR: MEJORES COMEDIAS
    fetchComedy: `https://api.themoviedb.org/3/discover/movie?api_key=bf4c98ecfc269cd7a37e93dc80d3098f&language=en-US&sort_by=popularity.desc&page=1&with_genres=35`,

    //CUENTA ATRÁS PARA HALLOWEEN
    fetchHorror: `https://api.themoviedb.org/3/discover/movie?api_key=bf4c98ecfc269cd7a37e93dc80d3098f&language=en-US&sort_by=popularity.desc&page=1&with_genres=27`,

    //TOP 20 SERIES
    fetchTopseries: `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_networks=213`,


    //THRILLERS QUE TE MANTENDRÁN EN TENSIÓN
    fetchThrillers: `https://api.themoviedb.org/3/discover/movie?api_key=bf4c98ecfc269cd7a37e93dc80d3098f&language=en-US&sort_by=popularity.desc&page=1&with_genres=53`,

    //CINE EN FAMILIA
    fetchFamily: `https://api.themoviedb.org/3/discover/movie?api_key=bf4c98ecfc269cd7a37e93dc80d3098f&language=en-US&sort_by=popularity.desc&page=1&with_genres=10751`,

    //VIAJA A OTRA DIMENSIÓN
    fetchScify: `https://api.themoviedb.org/3/discover/movie?api_key=bf4c98ecfc269cd7a37e93dc80d3098f&language=en-US&sort_by=popularity.desc&page=1&with_genres=878`
    
}

export default requests;