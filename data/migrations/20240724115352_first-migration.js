/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema
        .createTable('sections', table => {
            table.increments('id') // Primary Key
            table.string('section_name').notNullable().unique() // Section name
            table.integer('order_index').index()
            table.string('section_img_url') // URL or path to the section image
        })
        .createTable('topics', table => {
            table.increments('id') // Primary Key
            table.string('section_name')
                .unsigned()
                .notNullable()
                .references('section_name')
                .inTable('sections')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT') // Foreign Key to Sections
            table.integer('order_index').index()
            table.string('topic_name').notNullable().unique() // Topic name
            table.string('topic_img_url') // URL or path to the topic image
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
            table.integer('order_index').index()
            table.string('challenge_name').notNullable() // Challenge name
            table.text('description').notNullable() // Challenge details
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
            table.integer('order_index').index()
            table.text('expected_output').notNullable() // Expected output
            table.boolean('is_complex').notNullable()
            table.boolean('is_sample').notNullable() // Whether the test case is a sample
        })

        .createTable('test_inputs', table => {
            table.increments('id') // Primary Key
            table.integer('test_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('tests')
                .onDelete('CASCADE')
                .onUpdate('CASCADE') // Foreign Key to Tests
            table.string('input_type').notNullable()
            table.string('input_name').notNullable() // Name of the input parameter
            table.text('input_value').notNullable() // Value of the input parameter
        })

        .createTable('users', table => {
            table.increments('id') // Primary Key
            table.string('username').notNullable().unique() // Username
            table.string('email').notNullable().unique() // Email
            table.string('password').notNullable() // Password (hashed)
            table.string('role').notNullable().defaultTo('user') // Role (defaults to 'user')
        })

        .createTable('user_progress', table => {
            table.increments('id') // Primary Key
            table.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE') // Foreign Key to Users
            table.integer('challenge_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('challenges')
                .onDelete('CASCADE')
                .onUpdate('CASCADE') // Foreign Key to Challenges
            table.string('status').notNullable().defaultTo('not-started') // Challenge status (e.g., 'completed', 'in-progress')
            table.unique(['user_id', 'challenge_id']) // Ensure a user can have only one progress record per challenge
        })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('user_progress')
        .dropTableIfExists('users')
        .dropTableIfExists('test_inputs')
        .dropTableIfExists('tests')
        .dropTableIfExists('challenges')
        .dropTableIfExists('topics')
        .dropTableIfExists('sections')
}
