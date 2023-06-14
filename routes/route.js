import express from "express";
import { getTCDetails } from "../controller/component_data_controller.js";
const router = express.Router();

router.get("/tc-details/:converter_no", getTCDetails)

export default router;