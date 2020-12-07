
import mongoose from '../connection';
const Schema: any = mongoose.Schema;

const MovieSchema = new Schema({
  "insertMovie" : {type: String, required: true}
})

export default mongoose.model('Movie', MovieSchema);