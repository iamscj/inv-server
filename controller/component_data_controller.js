import { pool } from "../database/db.js";

export const getTCDetails = async (req, res) => {
    console.log("getTCDetails");
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



