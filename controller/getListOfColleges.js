import mongoose from "mongoose";
import User from "../models/userSchema.js";
import { courselist } from "../data.js";
import { displaydata, firstsort } from "../firstsort.js";
import { eleminatesimilar } from "../firstsort.js";
import { getcutoff } from "../firstsort.js";
import { getnearestIndex } from "../firstsort.js";
import { makebranchvariable } from "../firstsort.js";
import { exceptionfirstsort } from "../firstsort.js";
import { webdict } from "./webdict.js";
import { jeefirstsort } from "../firstsort.js";
import { getjeecutoff } from "../firstsort.js";
import { exceptionfirstjeesort } from "../firstsort.js";
const getListOfColleges = async (req, res) => {
  try {
    const {
      percentile,
      homedistrict,
      district1,
      district2,
      district3,
      branch,
      gender,
      ctaegory,
      exam
    } = req.body;
    var result;
    const userId = req.userId;
    const user = await User.findById(userId);
    var objectToAdd = {
      percentile: percentile,
      homedistrict: homedistrict,
      branch: branch,
      district1: district1,
      district2: district2,
      district3: district3,
      gender: gender,
      category: ctaegory,
      exam:exam
    };
    user.userHistory.push(objectToAdd);
    user.count += 1;
    await user.save();
    
    var ctaegory1 = ctaegory.trim();
    var homecategory = makebranchvariable(gender, ctaegory1)[0];
    var otherthanhomecategory = makebranchvariable(gender, ctaegory1)[1];
    var statecategory = makebranchvariable(gender, ctaegory1)[2];
    console.log(homecategory, otherthanhomecategory, statecategory);

    //this contains group of courses(checked)
    var coursesArray = courselist[branch];
    if(exam==="CET"){
    //this sorts data by district and courses wise(checked)
    var allDocuments = await firstsort(
      district1,
      district2,
      district3,
      coursesArray
    );
    if (allDocuments.length <= 5) {
      allDocuments = await exceptionfirstsort(coursesArray);
    }
    if (allDocuments.length <= 0) {
      console.log("fail in 2");
      return res.json("something wnet rong");
    }

    //i deletes second object(checked)
    allDocuments = eleminatesimilar(allDocuments);

    // get the data in proper format
      result = getcutoff(
      allDocuments,
      homecategory,
      otherthanhomecategory,
      statecategory,
      homedistrict
    );}
    else if(exam==="JEE"){
      var allDocuments1= await jeefirstsort(district1,district2,district3,coursesArray);
      if (allDocuments1.length <= 5) {
        allDocuments1 = await exceptionfirstjeesort(coursesArray);
      }
      result= getjeecutoff(allDocuments1)
      // console.log(result)
      
    }
    if (result.length <= 0) {
      console.log("fail in 1");
      return res.json("something went wrong");
    }
    //sorts the data in descending order
    var sortedResult = result.sort((a, b) => b.cutoff - a.cutoff);
    console.log(sortedResult.length)
    //gets nearest index
    var nearestIndex = getnearestIndex(sortedResult, percentile);
    console.log(nearestIndex)

    var startIndex = Math.max(nearestIndex - 7, 0);
    console.log(startIndex)
    var endIndex = Math.min(nearestIndex + 7, sortedResult.length - 1);
    if(nearestIndex+7<15){endIndex=startIndex+14}
    console.log(endIndex)
    //get 15 colleges
    var result5 = displaydata(sortedResult, startIndex, endIndex);
    console.log(result5.length)
    const finalresult = result5.map((item) => {
      item.website = webdict[item.dte];
      return item;
    });

    res.json(finalresult);
  } catch (error) {
    console.log("Error:", error.message);
    throw new Error("Failed to get course names");
  }
};

export default getListOfColleges;
