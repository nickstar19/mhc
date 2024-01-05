import mongoose from "mongoose";

const getCoursesNames = async (req,res) => {
  try {
    const collectionDataSchema = new mongoose.Schema({}, { collection: 'mycollection1' });
    const CollectionData = mongoose.model('CollectionData', collectionDataSchema);
    var tp =[]

    const allDocuments = await CollectionData.find({}, { "courses": 1 , "dte":1});
    console.log(allDocuments.length)
    allDocuments.forEach((document) => {
    var temp = JSON.stringify(document);
    temp = JSON.parse(temp);
    var keys = Object.keys(temp.courses);
    keys.forEach((course)=>{
      tp.push(course)
    })
    
});
console.log(tp.length)
var uniqueArray = Array.from(new Set(tp));
console.log(uniqueArray.length)
res.json(uniqueArray)

  } catch (error) {
    console.log('Error:', error.message);
    throw new Error('Failed to get course names');
  }
};

 export default getCoursesNames;
