function randomTime(req, res) {
    let time = Math.floor(Math.random() * 5000) + 1;
    setTimeout(() => {
        res.send(`Resposta em ${time}`);
    }, time);
}

module.exports = { randomTime };
