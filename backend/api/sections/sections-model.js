const db = require('../../data/db-config')

const getSections = () => {
    return db('sections')
        .select('section_name', 'section_img_url')
        .orderBy('order_index')
}

module.exports = {
    getSections
}