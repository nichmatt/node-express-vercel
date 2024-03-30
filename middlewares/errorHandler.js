const errorHandler = (err, req, res, next) => {
  let message = "";
  let statusCode = 500;

  // console.log(err.name);
  console.log(err);

  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      message = err.errors[0].message;
      statusCode = 400;
      break;
    case "Wrong password":
    case "Invalid Email/Password":
    case "email is require":
    case "password is require":
    case "failed, amount is require":
    case "difficulty is require in query":
    case "Not enough balance":
    case "transaction failed":
    case "not valid transaction":
      message = err.name;
      statusCode = 400;
      break;
    case "Login First":
    case "invalid token":
      message = err.name;
      statusCode = 401;
      break;
    case "JsonWebTokenError":
      message = "invalid token";
      statusCode = 401;
      break;
    default:
      message = "Internal server error";
  }

  res.status(statusCode).json({ message });
};

module.exports = { errorHandler };
