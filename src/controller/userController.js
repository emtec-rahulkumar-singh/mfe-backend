const fs = require('fs');




const createUser = async (req, res) => {
  try {
    let { body } = req;
    const data = fs.readFileSync('dataBase/data.json');
    let userData = JSON.parse(data.toString());
    if (userData?.length > 0) {
      let prevId = userData[userData.length - 1]?.id;
      let userId = userData[userData.length - 1]?.userId;
      body.id = prevId + 1;
      body.userId = userId + 1;
    } else {
      body.id = 1;
      body.userId = 101;
    }
    userData.push(body);
    const newData = JSON.stringify(userData);
    fs.writeFileSync('dataBase/data.json', newData);
    res.status(200).json("User Created");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const data = fs.readFileSync('dataBase/data.json');
    let userData = JSON.parse(data.toString());
    res.status(200).json(userData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { createUser, getUsers };