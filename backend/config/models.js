const { Sequelize, DataTypes } = require('sequelize')
const database = require('./database')

const Category = database.define('categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    nameTm: { type: DataTypes.STRING, allowNull: false },
    nameRu: { type: DataTypes.STRING, allowNull: true },
    nameEn: { type: DataTypes.STRING, allowNull: true },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const Subcategory = database.define('subcategories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    nameTm: { type: DataTypes.STRING, allowNull: false },
    nameRu: { type: DataTypes.STRING, allowNull: true },
    nameEn: { type: DataTypes.STRING, allowNull: true },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const Poems = database.define('poems', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    img: { type: DataTypes.STRING, allowNull: false },
    sound: { type: DataTypes.STRING, allowNull: true },
    titleTm: { type: DataTypes.STRING, allowNull: false },
    titleRu: { type: DataTypes.STRING, allowNull: true },
    titleEn: { type: DataTypes.STRING, allowNull: true },
    descTm: { type: DataTypes.TEXT, allowNull: false },
    descRu: { type: DataTypes.TEXT, allowNull: true },
    descEn: { type: DataTypes.TEXT, allowNull: true },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const Books = database.define('books', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    img: { type: DataTypes.STRING, allowNull: false },
    pdf: { type: DataTypes.STRING, allowNull: false },
    awtor: { type: DataTypes.STRING, allowNull: false },
    titleTm: { type: DataTypes.STRING, allowNull: false },
    titleRu: { type: DataTypes.STRING, allowNull: true },
    titleEn: { type: DataTypes.STRING, allowNull: true},
    descTm: { type: DataTypes.TEXT, allowNull: false },
    descRu: { type: DataTypes.TEXT, allowNull: true },
    descEn: { type: DataTypes.TEXT, allowNull: true },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const Literatis = database.define('literatis', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    img: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.STRING, allowNull: false },
    descTm: { type: DataTypes.TEXT, allowNull: false },
    descRu: { type: DataTypes.TEXT, allowNull: true },
    descEn: { type: DataTypes.TEXT, allowNull: true },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const Museums = database.define('museums', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    img: { type: DataTypes.STRING, allowNull: false },
    titleTm: { type: DataTypes.STRING, allowNull: false },
    titleRu: { type: DataTypes.STRING, allowNull: true },
    titleEn: { type: DataTypes.STRING, allowNull: true },
    descTm: { type: DataTypes.TEXT, allowNull: false },
    descRu: { type: DataTypes.TEXT, allowNull: true },
    descEn: { type: DataTypes.TEXT, allowNull: true },
    location: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const MuseumImages = database.define('museum_images', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    img: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const Statues = database.define('statues', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    img: { type: DataTypes.STRING, allowNull: false },
    titleTm: { type: DataTypes.STRING, allowNull: false },
    titleRu: { type: DataTypes.STRING, allowNull: true },
    titleEn: { type: DataTypes.STRING, allowNull: true },
    location: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const Films = database.define('films', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    awtor: { type: DataTypes.STRING, allowNull: false },
    time: { type: DataTypes.STRING, allowNull: false },
    titleTm: { type: DataTypes.STRING, allowNull: false },
    titleRu: { type: DataTypes.STRING, allowNull: true },
    titleEn: { type: DataTypes.STRING, allowNull: true },
    video: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

const Conferences = database.define('conferences', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    img: { type: DataTypes.STRING, allowNull: false },
    titleTm: { type: DataTypes.STRING, allowNull: false },
    titleRu: { type: DataTypes.STRING, allowNull: true },
    titleEn: { type: DataTypes.STRING, allowNull: true },
    location: { type: DataTypes.STRING, allowNull: false },
    descTm: { type: DataTypes.TEXT, allowNull: false },
    descRu: { type: DataTypes.TEXT, allowNull: true },
    descEn: { type: DataTypes.TEXT, allowNull: true },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
})

// Subcategory -> CategoryId

Category.hasMany(Subcategory)
Subcategory.belongsTo(Category)

// MuseumImages -> MusemId

Museums.hasMany(MuseumImages)
MuseumImages.belongsTo(Museums)

// Poems -> SubcategoryId

Subcategory.hasMany(Poems)
Poems.belongsTo(Subcategory)

module.exports = {
    Category, Subcategory, Poems, Books, 
    Literatis, Museums, MuseumImages, Statues,
    Films, Conferences
}