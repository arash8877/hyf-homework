const document = require("../document.json");

let query;
// -----------------------------------
const searchQuery = (req, res) => {
  query = req.query.q;
  try {
    if (query) {
      const result = document.filter((obj) =>
        Object.values(obj).some((value) =>
          String(value).toLowerCase().includes(query.toLowerCase())
        )
      );
      result.length === 0
        ? res.status(404).json("no match found!")
        : res.status(200).json(result);
    } else {
      res.status(200).json(document);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// -----------------------------------
const findId = (req, res) => {
  const idNumber = req.params.id;
  try {
    const result = document.find((obj) => String(obj.id) === idNumber);
    console.log(result);
    result
      ? res.status(200).json(result)
      : res.status(404).json("object not found");
  } catch (error) {
    res.status(500).json(error);
  }
};

// -----------------------------------
const postQuery = (req, res) => {
  const priceInField = req.body.fields.price;
  console.log(priceInField)
  try {
    const result = document.filter(obj => String(obj.price) === priceInField)
    console.log(result)
      if (result && !query) res.status(200).json(result)
      else if (result && query) res.status(400).json('query and field cannot be provided')
      else res.status(404).json('Object not found')
      
  } catch (error) {
    res.status(500).json(error)
  }
}





module.exports = {
  searchQuery,
  findId,
  postQuery
};
