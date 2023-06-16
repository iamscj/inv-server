import { pool } from "../database/db.js";

export const getTCDetails = async (req, res) => {
    console.log("getTCDetails");
    try {
        let data = await pool.query(
            `SELECT
            converter_no,
            date
            FROM
            tc`
        );
        return res.json(data.rows);
    } catch (error) {
        res.json(error);
    }
}

export const getTCDetailsForConverter = async (req, res) => {
    console.log("getTCDetailsForConverter");
    const converter_no = req.params['converter_no'];
    try {
        let data = await pool.query(
            `SELECT
            pm_1,
            pm_2,
            pm_3,
            pm_4,
            pm_5,
            pm_6,
            pm_7,
            pm_8,
            pm_9,
            dcu_1,
            dcu_2,
            dcu_3,
            viu,
            mfi
            FROM
            tc WHERE converter_no = $1`,
            [converter_no]
        );
        return res.json(data.rows);
    } catch (error) {
        // console.log(error)
        res.json(error);
    }
};

export const getACDetails = async (req, res) => {
    console.log("getACDetails");
    try {
        let data = await pool.query(
            `SELECT
            converter_no,
            date
            FROM
            ac`
        );
        return res.json(data.rows);
    } catch (error) {
        res.json(error);
    }
}
export const getACDetailsForConverter = async (req, res) => {
    console.log("getACDetailsForConverter");
    const converter_no = req.params['converter_no'];
    try {
        let data = await pool.query(
            `SELECT cr_1, cr_2, buffer_1, inverter_1, aci_1, buffer_2, inverter_2, aci_2, battery_charger FROM ac WHERE converter_no =  $1`,
            [converter_no]
        );
        return res.json(data.rows);
    } catch (error) {
        console.log(error)
        res.json(error);
    }
}

export const getVCUDetails = async (req, res) => {
    console.log("getVCUDetails");
    try {
        let data = await pool.query(
            `SELECT
            module_no,
            date
            FROM
            vcu`
        );
        return res.json(data.rows);
    } catch (error) {
        res.json(error);
    }
}