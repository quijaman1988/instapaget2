module.exports = {
    pong:pong,
    healthCheck:healthCheck
};

function pong (req, res) {
    res.status(200).json({ping: 'pong'});
}

function healthCheck(req, res) {
  res.status(200).json({OK:"200"})
}
