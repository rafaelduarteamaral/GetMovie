import getMovie from "../utils/getMovie";
import Service from './Service';
import MovieModel from '../database/model/MovieModel';


type Request = any;

type Response = any;

class GetMoviService implements Service<Request, Response> {
    async execute(req: Request, res: Response): Promise<Response> {

        try {
            const movie = await JSON.parse(await getMovie(req.params.id));

            const movieModel = MovieModel(movie);

            await movieModel
                .save()
                .then((response: Response) => {
                    return res.status(200).json(response);
                })
                .catch((error: any) => {
                    return res.status(500).json(error);
                });


        } catch (err) {
            return res.status(400).json({
                error: 'unexpected error while creating Article'
            });
        }
    }

    async update(req: Request, res: Response){
        await MovieModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
        .then((response: Response) => {
          return res.status(200).json(response);
        })
        .catch((error: any) => {
          return res.status(500).json(error);
        });
    
    }
}

export default GetMoviService;