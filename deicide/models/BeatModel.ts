import mongoose, { Document, Types } from 'mongoose';

export interface Beat {
  _id: mongoose.Types.ObjectId;
  foto: string;
  nome: string;
  estilo: string;
  preco: number;
  audioFileId: Types.ObjectId;
}

let BeatModel: mongoose.Model<Beat>;


if (mongoose.models && mongoose.models.Beat) {
  // Se o modelo já foi compilado, use o modelo existente
  BeatModel = mongoose.models.Beat as mongoose.Model<Beat>;
} else {
  // Se o modelo não foi compilado, compile-o
  const BeatSchema = new mongoose.Schema({
    nome: String,
    estilo: String,
    preco: Number,
    foto: String,
    audioFileId: mongoose.Types.ObjectId,
  });

  BeatModel = mongoose.model<Beat>('Beat', BeatSchema);
}

export default BeatModel;