/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema
        .createTable('sections', table => {
            table.increments('id') // Primary Key
            table.string('name').notNullable().unique() // Section name
            table.string('image_url') // URL or path to the section image
        })
        .createTable('topics', table => {
            table.increments('id') // Primary Key
            table.integer('section_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('sections')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT') // Foreign Key to Sections
            table.string('name').notNullable() // Topic name
            table.string('image_url') // URL or path to the topic image
        })
        .createTable('challenges', table => {
            table.increments('id') // Primary Key
            table.integer('topic_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('topics')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT') // Foreign Key to Topics
            table.string('name').notNullable() // Challenge name
            table.text('description').notNullable() // Challenge details
            table.integer('difficulty').notNullable() // Challenge difficulty
        })
        .createTable('tests', table => {
            table.increments('id') // Primary Key
            table.integer('challenge_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('challenges')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT') // Foreign Key to Challenges
            table.text('input').notNullable() // Input data for the test case
            table.text('expected_output').notNullable() // Expected output
            table.boolean('is_sample').notNullable() // Whether the test case is a sample
        })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('tests')
        .dropTableIfExists('challenges')
        .dropTableIfExists('topics')
        .dropTableIfExists('sections')
}
