import express from "express";
import createNewUser from "../controller/createNewUser.js";
import userLogin from "../controller/userLogin.js";
import getAllCourses from "../controller/getAllCourses.js";
import getLastFiveObjects from "../controller/getLastFiveObjects.js";
import getListOfColleges from "../controller/getListOfColleges.js";
import getCourseDetails from "../controller/getcoursedetail.js";
import checkIsPaid from "../middleware/checkifpaid.js";
import checkIsPaid2 from "../middleware/checkifpaid2.js";
import getuserhistory from "../controller/gethistory.js";
import veiwhistory from "../controller/veiwhistory.js";
const router = express();

router.post("/createNewUser", createNewUser);
router.post("/userLogin", userLogin);
router.get("/getCourseNames", getAllCourses);
router.get("/getobjects", getLastFiveObjects);
router.post("/getcolleges", checkIsPaid, getListOfColleges);
router.post("/getcoursedetail", getCourseDetails);
router.get("/getuserhistory", checkIsPaid2, getuserhistory);
router.post("/viewhistory", checkIsPaid2, veiwhistory);

export default router;
