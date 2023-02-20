const protect = (req, res, next) => {
  const { user } = req.session;
  if (!user) {
    return res.status(401).json({
      status: "fail",
      message: "You are not logged in! Please log in to get access.",
    });
  }

  req.user = user;

  next();
};

module.exports = protect;
