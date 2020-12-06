import axios from 'axios';

const getTranslations = async (id: any) => {

    var config: any = {
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${id}/translations?api_key=b45df506469a79f0765ef4be6522ec07&language=en-US`,
        headers: {}
    };

    const movie = axios(config)
        .then(function (response: any) {
            return JSON.stringify(response.data);
        })
        .catch(function (error: any) {
            return error;
        });

    return movie;
}

export default getTranslations;