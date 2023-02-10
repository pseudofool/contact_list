
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Believe@2383",
  database: "contact_list",
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to database:", error);
  } else {
    console.log("Connected to database");
  }
});

const createContactInDB = (data, callback) => {
  const { name, phone, email } = data;
  const query = `INSERT INTO contact_db (name, phone, email) 
  VALUES ('${name}', '${phone}', '${email}')`;
  connection.query(query, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
};

const getContactFromDB = (data, callback) => {
  const { email } = data;
  const query = `SELECT * FROM contact_db`;
  connection.query(query, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
};

const updateContactInDB = (data, callback) => {
  const { name, phone, email } = data;
  const query = `UPDATE contact_db SET name = ${connection.escape(name)}, phone = ${connection.escape(phone)}, email = ${connection.escape(email)} WHERE email = ${connection.escape(email)}`;
  connection.query(query, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
};

const deleteContactInDB = (data, callback) => {
  const { email } = data;
  const query = `DELETE FROM contact_db WHERE email = '${email}'`;
  connection.query(query, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  mysql,
  connection,
  createContactInDB,
  getContactFromDB,
  updateContactInDB,
  deleteContactInDB,
};
