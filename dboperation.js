var config = require('./dbconfig');
const sql = require('mssql');

// const getDatacustomer = async () => {
//     try {
//         let pool = await sql.connect(config);
//         // let datacustomer = pool.request().query("SELECT Top 5 PbsPatNam , PbsSurNam FROM PbsInf")
//         //let datacustomer = pool.request().query("SELECT* FROM PbsInf")
//         let datacustomer = pool.request().query("SELECT PbsChtNum, PbsPatNam,PbsSurNam  FROM PbsInf")
//         console.log(datacustomer);
//         return datacustomer;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

async function getdata() {
    try {
        let pool = await sql.connect(config);
        console.log("seq server connected....");
    } catch (error) {
        console.log("guitar-error :" + error);
    }
}

async function getdata_withQuery() {
    try {
        let pool = await sql.connect(config);
        let res = await pool.request().query("SELECT TOP 10 PbsChtNum, PbsPatNam,PbsSurNam  FROM PbsInf");
        return res.recordsets;
    } catch (error) {
        console.log("guitar-error :" + error);
    }
}

module.exports = {
    getdata: getdata,
    getdata_withQuery: getdata_withQuery
};