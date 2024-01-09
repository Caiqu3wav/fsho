import mongoose from "mongoose";
import fs from "fs";
import gfs
import BeatModel from "../models/BeatModel";

const storeBeat = async (beatData: any, audioFilePath: string) => {
    const { foto, nome, estilo, preco } = beatData;

    try {
        const audioFile = await storeAudioFile(audioFilePath);

        const beat = new BeatModel({

    foto, 
    nome,
    estilo,
    preco,
    audioFileId: audioFile._id,
        });

await beat.save();

return beat;
} catch (error: any) {
    throw new Error(`Erro ao armazenar beat: ${error}`);
}
};

const storeAudioFile = (filePath: string) => {
    const readStream = fs.createReadStream(filePath);
    const writeStream = gfs.createwriteSctream({
        filename: 'audio',
    });

    readStream.pipe(writeStream);

    return new Promise<any>((resolve, reject) => {
        writeStream.on('close', (file: any) => {
            resolve(file);
        });

        writeStream.on('error', (error: Error) => {
            reject(error);
        });
    });
};

