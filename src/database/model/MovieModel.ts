
import mongoose from '../connection';
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  adult: { type: Boolean, required: false },
  backdrop_path: { type: String, required: false },
  belongs_to_collection: { type: String, required: false },
  budget: { type: Number, required: false },
  genres: [
    {
      id: { type: Number, required: false },
      name: { type: String, required: false }
    },
    {
      id: { type: Number, required: false },
      name: { type: String, required: false }
    }
  ],
  homepage: { type: String, required: false },
  id: { type: Number, required: false },
  imdb_id: { type: String, required: false },
  original_language: { type: String, required: false },
  original_title: { type: String, required: false },
  overview: { type: String, required: false },
  popularity: { type: Number, required: false },
  poster_path: { type: String, required: false },
  production_companies: [
    {
      id: { type: Number, required: false },
      logo_path: { type: String, required: false },
      name: { type: String, required: false },
      origin_country: { type: String, required: false }
    },
    {
      id: { type: Number, required: false },
      logo_path: { type: String, required: false },
      name: { type: String, required: false },
      origin_country: { type: String, required: false }
    }
  ],
  production_countries: [
    {
      iso_3166_1: { type: String, required: false },
      name: { type: String, required: false }
    }
  ],
  release_date: { type: String, required: false },
  revenue: { type: String, required: false },
  runtime: { type: Number, required: false },
  spoken_languages: [
    {
      english_name: { type: String, required: false },
      iso_639_1: { type: String, required: false },
      name: { type: String, required: false }
    }
  ],
  status: { type: String, required: false },
  tagline: { type: String, required: false },
  title: { type: String, required: false },
  video: { type: Boolean, required: false },
  vote_average: { type: Number, required: false },
  vote_count: { type: Number, required: false },
  translation: { type: String, required: false }
})

export default mongoose.model('Movie', MovieSchema);