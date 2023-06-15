import express from "express";
import { getTCDetails, getTCDetailsForConverter } from "../controller/component_data_controller.js";
const router = express.Router();

router.get("/tc-details/:converter_no", getTCDetailsForConverter)
router.get("/tc-details", getTCDetails)

export default router;