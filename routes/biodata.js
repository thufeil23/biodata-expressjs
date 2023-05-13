const express = require('express');
const biodataRouter = express.Router();

biodataRouter.get('/api/biodata', function(req, res) {
    console.log('using Query');
    console.log(req.query);
    console.log('using Body');
    console.log(req.body);
    const nama = req.query.nama || req.body.nama;
    const tempatLahir = req.query['tempat-lahir'] || req.body['tempat-lahir'];
    const tanggalLahir = req.query['tanggal-lahir'] || req.body['tanggal-lahir'];
    const alamat = req.query.alamat || req.body.alamat;

    res.send({
        'nama': nama,
        'tempat-lahir': tempatLahir,
        'tanggal-lahir': tanggalLahir,
        'alamat': alamat
    });
});

biodataRouter.post('/api/biodata', function(req, res) {
    console.log(req.body);
    const nama = req.body.nama;
    const tempatLahir = req.body['tempat-lahir'];
    const tanggalLahir = req.body['tanggal-lahir'];
    const alamat = req.body.alamat;

    res.send({
        'nama': nama,
        'tempat-lahir': tempatLahir,
        'tanggal-lahir': tanggalLahir,
        'alamat': alamat
    });
});

module.exports = biodataRouter;