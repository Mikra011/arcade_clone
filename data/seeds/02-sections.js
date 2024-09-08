const sections = [
    { section_name: 'intro', order_index: 1, section_img_url: 'https://live.staticflickr.com/65535/53926769415_8a0d3a53e9_o.png' },
    { section_name: 'the core', order_index: 2, section_img_url: 'https://live.staticflickr.com/65535/53926315831_89f9da0f9f_o.png' },
    { section_name: 'databases', order_index: 3, section_img_url: 'https://live.staticflickr.com/65535/53925420712_0f87b6d64d_o.png' },
    { section_name: 'python', order_index: 4, section_img_url: 'https://live.staticflickr.com/65535/53926315806_48e02dacec_o.png' },
    { section_name: 'graphs', order_index: 5, section_img_url: 'https://live.staticflickr.com/65535/53926669169_fc5bb09230_o.png' }
]

exports.seed = async function (knex) {
    await knex('sections').insert(sections)
}