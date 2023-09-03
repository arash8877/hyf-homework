
// To demonstrate the SQL injection:
// firs I created a new table named "example"
// then at the end of the url I added:  "; DROP TABLE example;--"
// url: http://localhost:3000/api/contacts?sort=last_name%20DESC;%20DROP%20TABLE%20exaple;--
// when I checked the database, table "example" was deleted

//-----------------------------------------------------------------

// To avoid the SQL injection I made the following changes:
const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: "my private password :-) ",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: false, // number1: changed from true to false
  },
});

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knex.select("*").from("contacts");

  const userQuery = req.query;
  if ("sort" in userQuery) {
    const orderBy = userQuery.sort.toString();

    if (orderBy.length > 0) {
      const [column, direction] = orderBy.split(" "); // number2: Split "column name" and "sort direction" 
      if (column && direction) {                      // number3
        query = query.orderBy(column, direction);     // number 4: replaced two parameters column and direction
      }
    }
  }

 console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


