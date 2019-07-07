const x = require("express");

const api = x.Router();
api.use(x.json());

api.get("/", (_req, res) => {
  return res.json({ foo: "bar" });
});

module.exports = api;
