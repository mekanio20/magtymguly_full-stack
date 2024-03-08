const router = require('express').Router()
const controller = require('../controllers/index')
const fileMiddlware = require('../middlewares/file.middleware')

// POST
router.post('/add/category', controller.addCategory)
router.post('/add/subcategory', controller.addSubCategory)
router.post('/add/poem',
    fileMiddlware(process.env.FILES).fields([
        { name: 'img', maxCount: 1 },
        { name: 'sound', maxCount: 1 }
    ]),
    controller.addPoem)
router.post('/add/book',
    fileMiddlware(process.env.FILES).fields([
        { name: 'img', maxCount: 1 },
        { name: 'pdf', maxCount: 1 }
    ]),
    controller.addBook)
router.post('/add/literatis',
    fileMiddlware(process.env.FILES).single('img'),
    controller.addLiteratis)
router.post('/add/museums',
    fileMiddlware(process.env.FILES).single('img'),
    controller.addMuseums)
router.post('/add/museum/image',
    fileMiddlware(process.env.FILES).single('img'),
    controller.addMuseumImage)
router.post('/add/statues',
    fileMiddlware(process.env.FILES).single('img'),
    controller.addStatues)
router.post('/add/film',
    fileMiddlware(process.env.FILES).single('video'),
    controller.addFilm)
router.post('/add/conferences',
    fileMiddlware(process.env.FILES).single('img'),
    controller.addConferences)

// GET
router.get('/category', controller.allCategory)
router.get('/poems', controller.allPoems)
router.get('/books', controller.allBooks)
router.get('/literatis', controller.allLiteratis)
router.get('/museums', controller.allMuseums)
router.get('/statues', controller.allStatues)
router.get('/films', controller.allFilms)
router.get('/conferences', controller.allConferences)
router.get('/museum/images', controller.allMuseumImages)
// DETAIL
router.get('/subcategory/:id', controller.subCategory)
router.get('/poems/:id', controller.fetchPoem)
router.get('/books/:id', controller.fetchBook)
router.get('/literatis/:id', controller.fetchLiteratis)
router.get('/museums/:id', controller.fetchMuseum)
router.get('/films/:id', controller.fetchFilm)
router.get('/conferences/:id', controller.fetchConferences)
// DELETE
router.delete('/delete/category/:id', controller.deleteCategory)
router.delete('/delete/subcategory/:id', controller.deleteSubcategory)
router.delete('/delete/poem/:id', controller.deletePoem)
router.delete('/delete/book/:id', controller.deleteBook)
router.delete('/delete/literatis/:id', controller.deleteLiteratis)
router.delete('/delete/museum/:id', controller.deleteMuseum)
router.delete('/delete/museum/image/:id', controller.deleteMuseumImage)
router.delete('/delete/statue/:id', controller.deleteStatue)
router.delete('/delete/film/:id', controller.deleteFilm)
router.delete('/delete/conference/:id', controller.deleteConference)
// ADMIN
router.get('/subcategory', controller.allsubCategory)
router.get('/all/poems', controller.poemsAll)
// -----
router.get('/default', controller.defaultposts)

module.exports = router