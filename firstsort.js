import mongoose from "mongoose"
import { CollectionData } from "./models/collegeSchema.js"
export const makebranchvariable=(gender,category)=>{
    var categories=["NT1","NT2","NT3","ST","VJ","OPEN","OBC","SC",]
        if(categories.includes(category)){
            var homecategory=`${gender}${category}H`
            var otherthanhomecategory=`${gender}${category}O`
            var statecategory=`${gender}${category}S`
            return[homecategory,otherthanhomecategory,statecategory]
        }
    else{
        return[category,category,category]
    }
    }
export const firstsort= async(district1,district2,district3,coursesArray)=>{
    const query = {
        $and: [
          { district: { $in: [district1,district2,district3] } },
          { $or: coursesArray.map(course => ({ [`courses.${course}`]: { $exists: true } })) }
        ]
      };
      const projection = {
        "_id": 0,
        "dte":1,
        "district":1,
        "college_name":1
      };
      for(var i=0;i<coursesArray.length;i++){
        projection[`courses.${coursesArray[i]}`] =1
      }
    var allDocuments = await CollectionData.find(query,projection);
    allDocuments=JSON.parse(JSON.stringify(allDocuments))
    return allDocuments
}
export const eleminatesimilar=(allDocuments)=>{
    for (const object of allDocuments) {
        const courseKeys = Object.keys(object.courses);
        if (courseKeys.length > 1) {
          const firstCourse = courseKeys[0];
          object.courses = { [firstCourse]: object.courses[firstCourse] };
        }
      }
      return allDocuments
}
export const getcutoff=(allDocuments,homecategory,otherthanhomecategory,statecategory,homedistrict)=>{
    var result=[]
    var newObj={}
    for(var i=0;i<allDocuments.length;i++){
    var tempobject1=allDocuments[i]
    var dte=tempobject1.dte
    var objectdistrict=tempobject1.district
    var coursedata=tempobject1.courses[Object.keys(tempobject1.courses)[0]]["cutoff"]
    var college_name=tempobject1.college_name
    if(objectdistrict===homedistrict&&coursedata[homecategory]!==undefined){
      newObj={
        dte:dte,
        district:objectdistrict,
        cutoff:coursedata[homecategory],
        college_name:college_name
      }
      result.push(newObj)
    }else if(coursedata[otherthanhomecategory]!==undefined){
      newObj={
        dte:dte,
        district:objectdistrict,
        cutoff:coursedata[otherthanhomecategory],
        college_name:college_name
      }
      result.push(newObj)
    }else if(coursedata[statecategory]!==undefined){
        newObj={
          dte:dte,
          district:objectdistrict,
          cutoff:coursedata[statecategory],
          college_name:college_name
        }
        result.push(newObj)
      }
    
    }
    return result
}
export const getnearestIndex=(sortedResult,percentile)=>{
    let nearestCutoff = sortedResult[0].cutoff; // Assume the first cutoff value as the nearest initially
    let nearestIndex = 0;

for (let i = 1; i < sortedResult.length; i++) {
  const currentCutoff = sortedResult[i].cutoff;
  const currentDifference = Math.abs(currentCutoff - percentile);
  const nearestDifference = Math.abs(nearestCutoff - percentile);

  if (currentDifference < nearestDifference) {
    nearestCutoff = currentCutoff;
    nearestIndex = i;
  }
}
return nearestIndex
}
export const displaydata=(sortedResult,startIndex,endIndex)=>{
    if(sortedResult.length>15){
    const result5 = [];
    for (let i = startIndex; i <= endIndex; i++) {
    result5.push(sortedResult[i]);
}

return result5}else{return sortedResult}
}
export const exceptionfirstsort= async(coursesArray)=>{
  const query = {
      $and: [
        { $or: coursesArray.map(course => ({ [`courses.${course}`]: { $exists: true } })) }
      ]
    };
    const projection = {
      "_id": 0,
      "dte":1,
      "district":1,
      "college_name":1
    };
    for(var i=0;i<coursesArray.length;i++){
      projection[`courses.${coursesArray[i]}`] =1
    }
  var allDocuments = await CollectionData.find(query,projection);
  allDocuments=JSON.parse(JSON.stringify(allDocuments))
  return allDocuments
}
export const jeefirstsort= async(district1,district2,district3,coursesArray)=>{
  const query = {
      $and: [
        { district: { $in: [district1,district2,district3] } },
        { $or: coursesArray.map(course => ({ [`courses.${course}.ai`]: { $exists: true } })) }
      ]
    };
    const projection = {
      "_id": 0,
      "dte":1,
      "district":1,
      "college_name":1
    };
    for(var i=0;i<coursesArray.length;i++){
      projection[`courses.${coursesArray[i]}`] =1
    }
  var allDocuments = await CollectionData.find(query,projection);
  allDocuments=JSON.parse(JSON.stringify(allDocuments))
  return allDocuments
}
export const getjeecutoff=(allDocuments)=>{
  var result=[]
  var newObj={}
  for(var i=0;i<allDocuments.length;i++){
  var tempobject1=allDocuments[i]
  var dte=tempobject1.dte
  var objectdistrict=tempobject1.district
  var coursedata=tempobject1.courses[Object.keys(tempobject1.courses)[0]]
  var college_name=tempobject1.college_name
    newObj={
      dte:dte,
      district:objectdistrict,
      cutoff:coursedata["ai"],
      college_name:college_name
    }
    result.push(newObj)
    
  
  }
  return result
}
export const exceptionfirstjeesort= async(coursesArray)=>{
  const query = {
      $and: [
        { $or: coursesArray.map(course => ({ [`courses.${course}.ai`]: { $exists: true } })) }
      ]
    };
    const projection = {
      "_id": 0,
      "dte":1,
      "district":1,
      "college_name":1
    };
    for(var i=0;i<coursesArray.length;i++){
      projection[`courses.${coursesArray[i]}`] =1
    }
  var allDocuments = await CollectionData.find(query,projection);
  allDocuments=JSON.parse(JSON.stringify(allDocuments))
  return allDocuments
}