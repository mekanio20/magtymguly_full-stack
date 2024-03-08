const Models = require('../config/models')
const Response = require('./response')

class Controller {
    // POST
    async addCategory(req, res) {
        try {
            await Models.Category.create({
                nameTm: req.body.nameTm,
                nameRu: req.body?.nameRu || null,
                nameEn: req.body?.nameEn || null,
            }).catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async addSubCategory(req, res) {
        try {
            await Models.Subcategory.create({
                nameTm: req.body.nameTm,
                nameRu: req.body?.nameRu || null,
                nameEn: req.body?.nameEn || null,
                categoryId: req.body.categoryId
            }).catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async addPoem(req, res) {
        try {
            const files = req.files
            if (!files.img) {
                const response = await Response.BadRequest('File giriziň!', [])
                return res.json(response)
            }
            await Models.Poems.create({
                img: files.img[0].filename,
                sound: files?.sound ? files.sound[0].filename : null,
                titleTm: req.body.titleTm,
                titleRu: req.body?.titleRu || null,
                titleEn: req.body?.titleEn || null,
                descTm: req.body.descTm,
                descRu: req.body?.descRu || null,
                descEn: req.body?.descEn || null,
                subcategoryId: req.body.subcategoryId
            }).catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async addBook(req, res) {
        try {
            const files = req.files
            if (!files.img || !files.pdf) {
                const response = await Response.BadRequest('File giriziň!', [])
                return res.json(response)
            }
            await Models.Books.create({
                img: files.img[0].filename,
                pdf: files.pdf[0].filename,
                awtor: req.body.awtor,
                titleTm: req.body.titleTm,
                titleRu: req.body?.titleRu || null,
                titleEn: req.body?.titleEn || null,
                descTm: req.body.descTm,
                descRu: req.body?.descRu || null,
                descEn: req.body?.descEn || null
            }).catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async addLiteratis(req, res) {
        try {
            const file = req.file
            if (!file) {
                const response = await Response.BadRequest('File giriziň!', [])
                return res.json(response)
            }
            await Models.Literatis.create({
                img: file.filename,
                name: req.body.name,
                year: req.body.year,
                descTm: req.body.descTm,
                descRu: req.body?.descRu || null,
                descEn: req.body?.descEn || null
            }).catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async addMuseums(req, res) {
        try {
            const file = req.file
            if (!file) {
                const response = await Response.BadRequest('File giriziň!', [])
                return res.json(response)
            }
            await Models.Museums.create({
                img: file.filename,
                titleTm: req.body.titleTm,
                titleRu: req.body?.titleRu || null,
                titleEn: req.body?.titleEn || null,
                descTm: req.body.descTm,
                descRu: req.body?.descRu || null,
                descEn: req.body?.descEn || null,
                location: req.body.location
            }).catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async addMuseumImage(req, res) {
        try {
            const file = req.file
            if (!file) {
                const response = await Response.BadRequest('File giriziň!', [])
                return res.json(response)
            }
            await Models.MuseumImages.create({
                img: file.filename,
                museumId: req.body.museumId
            }).catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async addStatues(req, res) {
        try {
            const file = req.file
            if (!file) {
                const response = await Response.BadRequest('File giriziň!', [])
                return res.json(response)
            }
            await Models.Statues.create({
                img: file.filename,
                titleTm: req.body.titleTm,
                titleRu: req.body?.titleRu || null,
                titleEn: req.body?.titleEn || null,
                location: req.body.location
            }).catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async addFilm(req, res) {
        try {
            const file = req.file
            if (!file) {
                const response = await Response.BadRequest('File giriziň!', [])
                return res.json(response)
            }
            await Models.Films.create({
                video: file.filename,
                titleTm: req.body.titleTm,
                titleRu: req.body?.titleRu || null,
                titleEn: req.body?.titleEn || null,
                awtor: req.body.awtor,
                time: req.body.time
            }).catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async addConferences(req, res) {
        try {
            const file = req.file
            if (!file) {
                const response = await Response.BadRequest('File giriziň!', [])
                return res.json(response)
            }
            await Models.Conferences.create({
                img: file.filename,
                titleTm: req.body.titleTm,
                titleRu: req.body?.titleRu || null,
                titleEn: req.body?.titleEn || null,
                location: req.body.location,
                descTm: req.body.descTm,
                descRu: req.body?.descRu || null,
                descEn: req.body?.descEn || null
            }).catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    // GET
    async allCategory(req, res) {
        try {
            let page = req.query.page || 1
            let limit = req.query.limit || 10
            let offset = page * limit - limit
            const data = await Models.Category.findAndCountAll({
                include: {
                    model: Models.Subcategory,
                    attributes: { exclude: ['categoryId'] },
                    required: false
                },
                limit: Number(limit),
                offset: Number(offset),
                order: [['id', 'asc']]
            })
            if (data.count === 0) {
                const response = await Response.NotFound('Tapylmady!', [])
                return res.json(response)
            }
            const response = await Response.Success('Üstünlikli!', data)
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async allsubCategory(req, res) {
        try {
            let page = req.query.page || 1
            let limit = req.query.limit || 10
            let offset = page * limit - limit
            const data = await Models.Subcategory.findAndCountAll({
                limit: Number(limit),
                offset: Number(offset),
                order: [['id', 'asc']]
            })
            if (data.count === 0) {
                const response = await Response.NotFound('Tapylmady!', [])
                return res.json(response)
            }
            const response = await Response.Success('Üstünlikli!', data)
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async allPoems(req, res) {
        try {
            let page = req.query.page || 1
            let limit = req.query.limit || 10
            let offset = page * limit - limit
            const data = await Models.Subcategory.findAll({
                where: { categoryId: 2 },
                attributes: { exclude: ['categoryId'] },
                include: {
                    model: Models.Poems,
                    attributes: { exclude: ['sound', 'subcategoryId'] },
                    limit: Number(limit),
                    offset: Number(offset),
                },
                group: ['id'],
                order: [['id', 'DESC']]
            })
            if (data.length === 0) {
                const response = await Response.NotFound('Tapylmady!', [])
                return res.json(response)
            }
            const response = await Response.Success('Üstünlikli!', data)
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async poemsAll(req, res) {
        try {
            let page = req.query.page || 1
            let limit = req.query.limit || 10
            let offset = page * limit - limit
            const data = await Models.Poems.findAndCountAll({
                limit: Number(limit),
                offset: Number(offset),
                order: [['id', 'asc']]
            })
            if (data.length === 0) {
                const response = await Response.NotFound('Tapylmady!', [])
                return res.json(response)
            }
            const response = await Response.Success('Üstünlikli!', data)
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async allBooks(req, res) {
        try {
            let page = req.query.page || 1
            let limit = req.query.limit || 10
            let offset = page * limit - limit
            const data = await Models.Books.findAndCountAll({
                limit: Number(limit),
                offset: Number(offset),
                order: [['id', 'DESC']]
            })
            if (data.count === 0) {
                const response = await Response.NotFound('Tapylmady!', [])
                return res.json(response)
            }
            const response = await Response.Success('Üstünlikli!', data)
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async allLiteratis(req, res) {
        try {
            let page = req.query.page || 1
            let limit = req.query.limit || 10
            let offset = page * limit - limit
            const data = await Models.Literatis.findAndCountAll({
                limit: Number(limit),
                offset: Number(offset),
                order: [['id', 'DESC']]
            })
            if (data.count === 0) {
                const response = await Response.NotFound('Tapylmady!', [])
                return res.json(response)
            }
            const response = await Response.Success('Üstünlikli!', data)
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async allMuseums(req, res) {
        try {
            let page = req.query.page || 1
            let limit = req.query.limit || 10
            let offset = page * limit - limit
            const data = await Models.Museums.findAndCountAll({
                include: {
                    model: Models.MuseumImages,
                    attributes: { exclude: ['museumId'] },
                    required: false
                },
                limit: Number(limit),
                offset: Number(offset),
                order: [['id', 'DESC']]
            })
            if (data.count === 0) {
                const response = await Response.NotFound('Tapylmady!', [])
                return res.json(response)
            }
            const response = await Response.Success('Üstünlikli!', data)
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async allStatues(req, res) {
        try {
            let page = req.query.page || 1
            let limit = req.query.limit || 10
            let offset = page * limit - limit
            const data = await Models.Statues.findAndCountAll({
                limit: Number(limit),
                offset: Number(offset),
                order: [['id', 'DESC']]
            })
            if (data.count === 0) {
                const response = await Response.NotFound('Tapylmady!', [])
                return res.json(response)
            }
            const response = await Response.Success('Üstünlikli!', data)
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async allFilms(req, res) {
        try {
            let page = req.query.page || 1
            let limit = req.query.limit || 10
            let offset = page * limit - limit
            const data = await Models.Films.findAndCountAll({
                limit: Number(limit),
                offset: Number(offset),
                order: [['id', 'DESC']]
            })
            if (data.count === 0) {
                const response = await Response.NotFound('Tapylmady!', [])
                return res.json(response)
            }
            const response = await Response.Success('Üstünlikli!', data)
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async allConferences(req, res) {
        try {
            let page = req.query.page || 1
            let limit = req.query.limit || 10
            let offset = page * limit - limit
            const data = await Models.Conferences.findAndCountAll({
                limit: Number(limit),
                offset: Number(offset),
                order: [['id', 'DESC']]
            })
            if (data.count === 0) {
                const response = await Response.NotFound('Tapylmady!', [])
                return res.json(response)
            }
            const response = await Response.Success('Üstünlikli!', data)
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async allMuseumImages(req, res) {
        try {
            let page = req.query.page || 1
            let limit = req.query.limit || 10
            let offset = page * limit - limit
            const data = await Models.MuseumImages.findAndCountAll({
                limit: Number(limit),
                offset: Number(offset),
                order: [['id', 'DESC']]
            })
            if (data.count === 0) {
                const response = await Response.NotFound('Tapylmady!', [])
                return res.json(response)
            }
            const response = await Response.Success('Üstünlikli!', data)
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    // --- GET ONE ---
    async subCategory(req, res) {
        try {
            let { id } = req.params
            let page = req.query.page || 1
            let limit = req.query.limit || 10
            let offset = page * limit - limit
            const data = await Models.Subcategory.findAndCountAll({
                where: { id: id, categoryId: 2, },
                attributes: { exclude: ['categoryId'] },
                include: {
                    model: Models.Poems,
                    attributes: { exclude: ['subcategoryId'] },
                    limit: Number(limit),
                    offset: Number(offset),
                    order: [['id', 'DESC']]
                }
            })
            if (data.count === 0) {
                const response = await Response.NotFound('Tapylmady!', [])
                return res.json(response)
            }
            const response = await Response.Success('Üstünlikli!', data)
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async fetchPoem(req, res) {
        try {
            let { id } = req.params
            const data = await Models.Poems.findOne({
                where: { id: id },
                attributes: { exclude: ['subcategoryId'] }
            })
            if (!data) {
                const response = await Response.NotFound('Tapylmady!', [])
                return res.json(response)
            }
            const response = await Response.Success('Üstünlikli!', data)
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async fetchBook(req, res) {
        try {
            let { id } = req.params
            const data = await Models.Books.findOne({ where: { id: id } })
            if (!data) {
                const response = await Response.NotFound('Tapylmady!', [])
                return res.json(response)
            }
            const response = await Response.Success('Üstünlikli!', data)
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async fetchLiteratis(req, res) {
        try {
            let { id } = req.params
            const data = await Models.Literatis.findOne({ where: { id: id } })
            if (!data) {
                const response = await Response.NotFound('Tapylmady!', [])
                return res.json(response)
            }
            const response = await Response.Success('Üstünlikli!', data)
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async fetchMuseum(req, res) {
        try {
            let { id } = req.params
            const data = await Models.Museums.findOne({
                where: { id: id },
                include: {
                    model: Models.MuseumImages,
                    attributes: { exclude: ['museumId'] }, required: false,
                    order: [['id', 'DESC']]
                }
            })
            if (!data) {
                const response = await Response.NotFound('Tapylmady!', [])
                return res.json(response)
            }
            const response = await Response.Success('Üstünlikli!', data)
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async fetchFilm(req, res) {
        try {
            let { id } = req.params
            const data = await Models.Films.findOne({ where: { id: id } })
            if (!data) {
                const response = await Response.NotFound('Tapylmady!', [])
                return res.json(response)
            }
            const response = await Response.Success('Üstünlikli!', data)
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async fetchConferences(req, res) {
        try {
            let { id } = req.params
            const data = await Models.Conferences.findOne({ where: { id: id } })
            if (!data) {
                const response = await Response.NotFound('Tapylmady!', [])
                return res.json(response)
            }
            const response = await Response.Success('Üstünlikli!', data)
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    // DELETE
    async deleteCategory(req, res) {
        try {
            let { id } = req.params
            await Models.Category.destroy({ where: { id: id } })
                .then(() => { console.log(true) })
                .catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async deleteSubcategory(req, res) {
        try {
            let { id } = req.params
            await Models.Subcategory.destroy({ where: { id: id } })
                .then(() => { console.log(true) })
                .catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async deletePoem(req, res) {
        try {
            let { id } = req.params
            await Models.Poems.destroy({ where: { id: id } })
                .then(() => { console.log(true) })
                .catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async deleteBook(req, res) {
        try {
            let { id } = req.params
            await Models.Books.destroy({ where: { id: id } })
                .then(() => { console.log(true) })
                .catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async deleteLiteratis(req, res) {
        try {
            let { id } = req.params
            await Models.Literatis.destroy({ where: { id: id } })
                .then(() => { console.log(true) })
                .catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async deleteMuseum(req, res) {
        try {
            let { id } = req.params
            await Models.Museums.destroy({ where: { id: id } })
                .then(() => { console.log(true) })
                .catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async deleteMuseumImage(req, res) {
        try {
            let { id } = req.params
            await Models.MuseumImages.destroy({ where: { id: id } })
                .then(() => { console.log(true) })
                .catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async deleteStatue(req, res) {
        try {
            let { id } = req.params
            await Models.Statues.destroy({ where: { id: id } })
                .then(() => { console.log(true) })
                .catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async deleteFilm(req, res) {
        try {
            let { id } = req.params
            await Models.Films.destroy({ where: { id: id } })
                .then(() => { console.log(true) })
                .catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    async deleteConference(req, res) {
        try {
            let { id } = req.params
            await Models.Conferences.destroy({ where: { id: id } })
                .then(() => { console.log(true) })
                .catch((err) => { console.log(err) })
            const response = await Response.Created('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
    // -----
    async defaultposts(req, res) {
        try {
            await Models.Category.bulkCreate([
                { nameTm: 'Ömri we döredijiligi' },
                { nameTm: 'Şygyrlary' },
                { nameTm: 'Öwrenilişi' },
                { nameTm: 'Ýygyndylar' },
                { nameTm: 'Çäreler' },
                { nameTm: 'Ebedileşdirilişi' }
            ]).then(() => { console.log('Category added') }).catch((err) => { console.log(err) })

            await Models.Subcategory.bulkCreate([
                { nameTm: 'Il-gün hem gahrymançylyk hakynda', categoryId: 2 },
                { nameTm: 'Dünýä barada pikirlenmeler', categoryId: 2 },
                { nameTm: 'Gylyk häsiýet we ahlak hakynda', categoryId: 2 },
                { nameTm: 'Özi hem söýgi hakynda', categoryId: 2 },
                { nameTm: 'Dürli rowaýatlar, legendalar, dine bolan garaýyş', categoryId: 2 },
                { nameTm: 'Muzeýler', categoryId: 6 },
                { nameTm: 'Heýkeller', categoryId: 6 },
                { nameTm: 'Filmler we sahnalar', categoryId: 6 },
            ]).then(() => { console.log('Subcategory added') }).catch((err) => { console.log(err) })

            const response = await Response.Success('Üstünlikli!', [])
            return res.json(response)
        } catch (error) {
            throw error
        }
    }
}

module.exports = new Controller()