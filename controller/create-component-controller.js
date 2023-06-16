import { pool } from "../database/db.js";

export const insertTC = async (req, res) => {
    console.log("/POST insertTC");
    const { converter_no, pm_1, pm_2, pm_3, pm_4, pm_5, pm_6,
        pm_7, pm_8, pm_9, dcu_1, dcu_2, dcu_3, viu, mfi, date } = req.body;

    try {
        const query = `
            INSERT INTO tc (converter_no, pm_1, pm_2, pm_3, pm_4, pm_5, pm_6, pm_7, pm_8, pm_9, dcu_1, dcu_2, dcu_3, viu, mfi, date)
            VALUES ('${converter_no}', '${pm_1}', '${pm_2}', '${pm_3}', '${pm_4}', '${pm_5}', '${pm_6}', '${pm_7}', '${pm_8}', '${pm_9}', '${dcu_1}', '${dcu_2}', '${dcu_3}', '${viu}', '${mfi}', '${date}');
        `;
        const result = await pool.query(query);
        res.json({ msg: "successfull" });
    }
    catch (e) {
        res.json({ msg: e.detail });
    }
}

export const insertAC = async (req, res) => {
    console.log("/POST insertAC");
    const {
        converter_no,
        cr_1,
        cr_2,
        buffer_1,
        buffer_2,
        inverter_1,
        inverter_2,
        aci_1,
        aci_2,
        battery_charger,
        date,
    } = req.body;

    try {
        const query = `
            INSERT INTO ac (converter_no, cr_1, cr_2, buffer_1, buffer_2, inverter_1, inverter_2, aci_1, aci_2, battery_charger, date)
            VALUES ('${converter_no}', '${cr_1}', '${cr_2}', '${buffer_1}', '${buffer_2}', '${inverter_1}', '${inverter_2}', '${aci_1}', '${aci_2}', '${battery_charger}', '${date}');
        `;

        const result = await pool.query(query);
        res.json({ msg: "successfull" });
    }
    catch (e) {
        res.json({ msg: e.detail });
    }
}

export const insertVCU = async (req, res) => {
    console.log("/POST insertVCU");
    const {
        converter_no,
        date,
    } = req.body;

    try {
        const query = `
            INSERT INTO vcu (module_no, date)
            VALUES ('${converter_no}', '${date}');
        `;

        const result = await pool.query(query);
        res.json({ msg: "successfull" });
    }
    catch (e) {
        res.json({ msg: e.detail });
    }
}