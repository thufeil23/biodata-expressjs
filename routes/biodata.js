const express = require('express');
const biodataRouter = express.Router();

biodataRouter.get('/api/biodata', function(req, res) {
    const nama = req.body.nama;
    const tempatLahir = req.body.tempatLahir;
    const tanggalLahir = req.body.tanggalLahir;
    const alamat = req.body.alamat;

    res.send({
        'nama': nama,
        'tempatLahir': tempatLahir,
        'tanggalLahir': tanggalLahir,
        'alamat': alamat
    });
});

biodataRouter.post('/api/biodata', function(req, res) {
    console.log(req.body);
    const nama = req.body.nama;
    const tempatLahir = req.body.tempatLahir;
    const tanggalLahir = req.body.tanggalLahir;
    const alamat = req.body.alamat;

    res.send({
        'nama': nama,
        'tempatLahir': tempatLahir,
        'tanggalLahir': tanggalLahir,
        'alamat': alamat
    });
});

module.exports = biodataRouter;