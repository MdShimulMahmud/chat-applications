const createError = require("http-errors");

// 404 not handler

function notFoundhandler(req, res, next) {
  next(createError(404, "Your requested content was not found!"));
}

// common error handler
function errorHandler(err, req, res, next) {
  res.locals.error = NODE_ENV == "development" ? err : { message: err.message };
  res.status(err.status || 500);

  if (res.locals.html) {
    // html response
    res.render("error", {
      title: "Error Page",
    });
  } else {
    //json response
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundhandler,
  errorHandler,
};
