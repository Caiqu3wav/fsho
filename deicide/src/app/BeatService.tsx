import { conn } from "../../server/db";
import BeatModel from "../../models/BeatModel";

export const fetchBeats = async (): Promise<Beat[]> => {
    await conn;
    const beats = await BeatModel.find();
    return JSON.parse(JSON.stringify(beats));
;}