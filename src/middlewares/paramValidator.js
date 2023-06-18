const { query, validationResult } = require("express-validator");

const getTheatersValidation = (req, res, next) => {
  // console.log(req.url, "url", req.path, req.baseUrl);

  query('city').notEmpty().withMessage("send city name")
  // const result = validationResult(req)
  // if(result.isEmpty()){
  //   res.send({err:result.array})
  // }
};

module.exports = { getTheatersValidation };
