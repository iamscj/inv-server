import express from "express";
import { getACDetails, getACDetailsForConverter, getTCDetails, getTCDetailsForConverter, getVCUDetails } from "../controller/component_data_controller.js";
const router = express.Router();

router.get("/tc-details/:converter_no", getTCDetailsForConverter)
router.get("/tc-details", getTCDetails)
router.get("/ac-details", getACDetails)
router.get("/ac-details/:converter_no", getACDetailsForConverter)
router.get("/vcu-details", getVCUDetails)

export default router;