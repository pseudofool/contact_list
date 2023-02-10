
const db = require("../models/contact");

exports.getContact = (req, res) => {
  db.getContactFromDB({}, (error, results) => {
    if (error) {
      console.log("Error", error);
    }
    // console.log(results);
    return res.render('contacts', {
      title: "My Contact List",
      contact_list: results
    });
  });
};

exports.createContact = (req, res) => {
  const {name, phone, email} = req.body;
  db.createContactInDB({name, phone, email}, (error, result)=>{
    if(error){
      console.log("Error in creating contact", error);
    }
    return res.redirect('/');
  });
};


exports.updateContact = (req, res) => {
  // console.log(req.query);
  // return res.redirect('/');
  const { name, phone, email } = req.query;
  db.updateContactInDB(
    {
      name,
      phone,
      email
    },
    (error, result) => {
      if (error) {
        console.log("Error in updating contact: ", error);
      }
      return res.redirect('/');
    }
  );
};
exports.updateContactForm = (req, res) => {
  console.log(req.query);
  return res.render('update_form');
};

exports.deleteContact = (req, res) => {
  const email = req.query.email;
  db.deleteContactInDB({ email }, (error, result) => {
    if (error) {
      console.log("Error in deleting contact: ", error);
    }
    return res.redirect('/');
  });
};
