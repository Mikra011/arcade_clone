const sections = [
    { section_name: 'Intro', order_index: 1, section_img_url: 'https://drive.google.com/uc?export=view&id=1qUrXqTypSGxILh8WXgkATJ1DYJQHHJWj' },
    { section_name: 'The Core', order_index: 2, section_img_url: 'https://drive.google.com/uc?export=view&id=1nPlZdmJXF5K_NwRO4HL3MlHzuenoBZfc' },
    { section_name: 'Databases', order_index: 3, section_img_url: 'https://drive.google.com/uc?export=view&id=1nr6B6RIzPD5s8HIT_8ZGJ9jMeODkMJG-' },
    { section_name: 'Python', order_index: 4, section_img_url: 'https://drive.google.com/uc?export=view&id=1dUyyFQpXZhNFGcjrSNWfXqausL2rh_hk' },
    { section_name: 'Graphs', order_index: 5, section_img_url: 'https://drive.google.com/uc?export=view&id=1t-qowY7dDNVdGGRZ3YgIDfax-G0HCfvz' }
]

exports.seed = async function (knex) {
    await knex('sections').insert(sections)
}