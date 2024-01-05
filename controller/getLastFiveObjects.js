import mongoose from "mongoose";

const getLastFiveObjects = async () => {
  try {
    const collectionDataSchema = new mongoose.Schema({}, { collection: 'mycollection1' });
    const CollectionData = mongoose.model('CollectionData', collectionDataSchema);

    const lastFiveDocuments = await CollectionData.find().sort({ _id: -1 }).limit(5);

    if (lastFiveDocuments.length === 0) {
      console.log('No documents found in the collection');
      return [];
    }

    console.log('Last 5 Documents:');
    lastFiveDocuments.forEach((document) => {
      console.log(JSON.stringify(document, null, 2));
    });

    return lastFiveDocuments;
  } catch (error) {
    console.log('Error:', error.message);
    throw new Error('Failed to fetch last five objects');
  }
};

export default getLastFiveObjects;
