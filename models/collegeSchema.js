import mongoose from "mongoose";
const collectionDataSchema = new mongoose.Schema({}, { collection: 'mycollection1' });
export const CollectionData = mongoose.model('CollectionData', collectionDataSchema);