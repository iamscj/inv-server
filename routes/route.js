import express from "express";
import { getACDetails, getACDetailsForConverter, getTCDetails, getTCDetailsForConverter, getVCUDetails } from "../controller/component_data_controller.js";
import { insertTC, insertAC, insertVCU } from "../controller/create-component-controller.js";
const router = express.Router();

router.get("/tc-details/:converter_no", getTCDetailsForConverter)
router.get("/tc-details", getTCDetails)
router.get("/ac-details", getACDetails)
router.get("/ac-details/:converter_no", getACDetailsForConverter)
router.get("/vcu-details", getVCUDetails)
router.post("/insert-tc", insertTC)
router.post("/insert-ac", insertAC)
router.post("/insert-vcu", insertVCU)

export default router;