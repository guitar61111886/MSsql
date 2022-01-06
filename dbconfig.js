const config = {
    user: "bit",
    password: "bitbit",
    server: "10.88.1.13",
    database: "BITTEST",
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true
       //the username above should have granted permissions in order to access this DB.
      
        //encrypt: true
    },
    port: 1433
};

module.exports = config; 