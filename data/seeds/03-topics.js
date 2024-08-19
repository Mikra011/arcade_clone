const topics = [
    {section_id: 1, order_index: 1, topic_name: 'the journey begins', topic_img_url: 'https://live.staticflickr.com/65535/53926315676_457077db2b_b.jpg' },
    {section_id: 1, order_index: 2, topic_name: 'edge of the ocean', topic_img_url: 'https://live.staticflickr.com/65535/53925420402_82a37bde6d_b.jpg' },
    {section_id: 1, order_index: 3, topic_name: 'smooth sailing', topic_img_url: 'https://live.staticflickr.com/65535/53926315631_536abdbc63_b.jpg' },
    {section_id: 1, order_index: 4, topic_name: 'exploring the waters', topic_img_url: 'https://live.staticflickr.com/65535/53926315591_a6b6e1cdb9_b.jpg' },
    {section_id: 1, order_index: 5, topic_name: 'island of knowledge', topic_img_url: 'https://live.staticflickr.com/65535/53925420427_07e79646b2_b.jpg' },
    {section_id: 1, order_index: 6, topic_name: 'rains of reason', topic_img_url: 'https://live.staticflickr.com/65535/53925420317_9f2289b64f_b.jpg' },
    {section_id: 1, order_index: 7, topic_name: 'through the fog', topic_img_url: 'https://live.staticflickr.com/65535/53925420442_59e2f78ab2_b.jpg' },
    {section_id: 1, order_index: 8, topic_name: 'diving deeper', topic_img_url: 'https://live.staticflickr.com/65535/53926668919_4f641a890b_b.jpg' },
    {section_id: 1, order_index: 9, topic_name: 'dark wilderness', topic_img_url: 'https://live.staticflickr.com/65535/53925420457_14a46f9b84_b.jpg' },
    {section_id: 1, order_index: 10, topic_name: 'eruption of light', topic_img_url: 'https://live.staticflickr.com/65535/53926562018_697c27f9c5_b.jpg' },
    {section_id: 1, order_index: 11, topic_name: 'rainbow of clarity', topic_img_url: 'https://live.staticflickr.com/65535/53926668869_71cd466bbe_b.jpg' },
    {section_id: 1, order_index: 12, topic_name: 'land of logic', topic_img_url: 'https://live.staticflickr.com/65535/53926668844_718e710006_b.jpg' },

    {section_id: 2, order_index: 1, topic_name: 'intro gates', topic_img_url: 'https://live.staticflickr.com/65535/53925420602_6c9a451ac4_b.jpg' },
    {section_id: 2, order_index: 2, topic_name: 'at the crossroads', topic_img_url: 'https://live.staticflickr.com/65535/53926315781_8b84e09349_b.jpg' },
    {section_id: 2, order_index: 3, topic_name: 'corner of 0s and 1s', topic_img_url: 'https://live.staticflickr.com/65535/53926668964_a2ab0f5547_b.jpg' },
    {section_id: 2, order_index: 4, topic_name: 'loop tunnel', topic_img_url: 'https://live.staticflickr.com/65535/53926769320_0a0f195578_b.jpg' },
    {section_id: 2, order_index: 5, topic_name: 'list forest edge', topic_img_url: 'https://live.staticflickr.com/65535/53926769335_0e110c3f51_b.jpg' },
    {section_id: 2, order_index: 6, topic_name: 'labyrinth of nested loops', topic_img_url: 'https://live.staticflickr.com/65535/53926562218_1ba5120c84_b.jpg' },
    {section_id: 2, order_index: 7, topic_name: 'book market', topic_img_url: 'https://live.staticflickr.com/65535/53926562278_532ec37645_b.jpg' },
    {section_id: 2, order_index: 8, topic_name: 'mirror lake', topic_img_url: 'https://live.staticflickr.com/65535/53926668969_26a4beca7a_b.jpg' },
    {section_id: 2, order_index: 9, topic_name: 'well of integration', topic_img_url: 'https://live.staticflickr.com/65535/53925420527_f8a6a5e0a6_b.jpg' },
    {section_id: 2, order_index: 10, topic_name: 'lab of transformations', topic_img_url: 'https://live.staticflickr.com/65535/53926562148_d0754afc37_b.jpg' },
    {section_id: 2, order_index: 11, topic_name: 'spring of integration', topic_img_url: 'https://live.staticflickr.com/65535/53925420567_2892eaea5b_b.jpg' },
    {section_id: 2, order_index: 12, topic_name: 'list backwoods', topic_img_url: 'https://live.staticflickr.com/65535/53926315776_65f1988e4d_b.jpg' },
    {section_id: 2, order_index: 13, topic_name: 'waterfall of integration', topic_img_url: 'https://live.staticflickr.com/65535/53926562223_a73ed972e1_b.jpg' },
    {section_id: 2, order_index: 14, topic_name: 'sorting outpost', topic_img_url: 'https://live.staticflickr.com/65535/53926669084_5f850bae75_b.jpg' },
    {section_id: 2, order_index: 15, topic_name: 'chess tavern', topic_img_url: 'https://live.staticflickr.com/65535/53926669044_3a400c88bf_b.jpg' },
    {section_id: 2, order_index: 16, topic_name: 'time river', topic_img_url: 'https://live.staticflickr.com/65535/53925420557_97d393abe9_b.jpg' },
    {section_id: 2, order_index: 17, topic_name: 'regular hell', topic_img_url: 'https://live.staticflickr.com/65535/53925420462_827ffc6f55_b.jpg' },
    {section_id: 2, order_index: 18, topic_name: 'secret archives', topic_img_url: 'https://live.staticflickr.com/65535/53925420632_13859fcbfd_b.jpg' },
    {section_id: 2, order_index: 19, topic_name: 'cliffs of pain', topic_img_url: 'https://live.staticflickr.com/65535/53926669114_8ee9ae3307_b.jpg' },

    {section_id: 3, order_index: 1, topic_name: 'welcome to the table', topic_img_url: 'https://live.staticflickr.com/65535/53926562858_0f2603840a_b.jpg' },
    {section_id: 3, order_index: 2, topic_name: 'always leave table in order', topic_img_url: 'https://live.staticflickr.com/65535/53926562523_e2a7ffbc55_b.jpg' },
    {section_id: 3, order_index: 3, topic_name: 'would you like the second meal?', topic_img_url: 'https://live.staticflickr.com/65535/53926562568_0e85bfd9db_b.jpg' },
    {section_id: 3, order_index: 4, topic_name: 'group dishes by type', topic_img_url: 'https://live.staticflickr.com/65535/53926769745_9c9f0d021b_b.jpg' },
    {section_id: 3, order_index: 5, topic_name: 'time for tricks', topic_img_url: 'https://live.staticflickr.com/65535/53926562703_87907453b5_b.jpg' },
    {section_id: 3, order_index: 6, topic_name: 'specialties', topic_img_url: 'https://live.staticflickr.com/65535/53925421042_0721492f49_b.jpg' },
    {section_id: 3, order_index: 7, topic_name: 'when was it the case?', topic_img_url: 'https://live.staticflickr.com/65535/53926316161_35e4e00cc9_b.jpg' },
    {section_id: 3, order_index: 8, topic_name: 'regular paradise', topic_img_url: 'https://live.staticflickr.com/65535/53926316311_dbc2483107_b.jpg' },
    {section_id: 3, order_index: 9, topic_name: 'time river revisited', topic_img_url: 'https://live.staticflickr.com/65535/53926769595_7f51520f84_b.jpg' },
    {section_id: 3, order_index: 10, topic_name: 'join us at the table!', topic_img_url: 'https://live.staticflickr.com/65535/53926769540_6a8248d29a_b.jpg' },
    {section_id: 3, order_index: 11, topic_name: 'table metamorphoses', topic_img_url: 'https://live.staticflickr.com/65535/53926315926_b573027ef2_b.jpg' },
    {section_id: 3, order_index: 12, topic_name: 'selecting what to select', topic_img_url: 'https://live.staticflickr.com/65535/53926669574_eddec92ecc_b.jpg' },
    {section_id: 3, order_index: 13, topic_name: 'express your creativity', topic_img_url: 'https://live.staticflickr.com/65535/53926669569_9ed2758fbb_b.jpg' },
    {section_id: 3, order_index: 14, topic_name: 'exotic dishes', topic_img_url: 'https://live.staticflickr.com/65535/53926669279_91ac1fca2b_b.jpg' },
    {section_id: 3, order_index: 15, topic_name: 'between join and select', topic_img_url: 'https://live.staticflickr.com/65535/53926316061_78236c2cb3_b.jpg' },
    {section_id: 3, order_index: 16, topic_name: 'a table of desserts', topic_img_url: 'https://live.staticflickr.com/65535/53925420797_c13b4b53fd_b.jpg' },

    {section_id: 4, order_index: 1, topic_name: 'meet python', topic_img_url: 'https://live.staticflickr.com/65535/53926769015_b73b5b2e6c_b.jpg' },
    {section_id: 4, order_index: 2, topic_name: 'slithering in strings', topic_img_url: 'https://live.staticflickr.com/65535/53926561938_f238e6829f_b.jpg' },
    {section_id: 4, order_index: 3, topic_name: 'lurking in lists', topic_img_url: 'https://live.staticflickr.com/65535/53926315506_db81750ccd_b.jpg' },
    {section_id: 4, order_index: 4, topic_name: 'lambda illusions', topic_img_url: 'https://live.staticflickr.com/65535/53926768930_e5fe9aa76e_b.jpg' },
    {section_id: 4, order_index: 5, topic_name: 'complexity of comprehension', topic_img_url: 'https://live.staticflickr.com/65535/53926315471_a5d6d10243_b.jpg' },
    {section_id: 4, order_index: 6, topic_name: 'fumbling in functional', topic_img_url: 'https://live.staticflickr.com/65535/53925420247_01be0a934c_b.jpg' },
    {section_id: 4, order_index: 7, topic_name: 'caravan of collections', topic_img_url: 'https://live.staticflickr.com/65535/53926561853_6564b6b9c7_b.jpg' },
    {section_id: 4, order_index: 8, topic_name: 'itertools kit', topic_img_url: 'https://live.staticflickr.com/65535/53926315531_7acf4c8618_b.jpg' },
    {section_id: 4, order_index: 9, topic_name: 'drilling the lists', topic_img_url: 'https://live.staticflickr.com/65535/53926315551_f2d65436f5_b.jpg' },
    {section_id: 4, order_index: 10, topic_name: 'yin and yang of yields', topic_img_url: 'https://live.staticflickr.com/65535/53926768990_7627b9b4e6_b.jpg' },
    {section_id: 4, order_index: 11, topic_name: 'higher order thinking', topic_img_url: 'https://live.staticflickr.com/65535/53926769010_af84eebb2a_b.jpg' },
    {section_id: 4, order_index: 12, topic_name: 'showing class', topic_img_url: 'https://live.staticflickr.com/65535/53925420142_f38938c8ef_b.jpg' },
    {section_id: 4, order_index: 13, topic_name: 'picturing the parsibilities', topic_img_url: 'https://live.staticflickr.com/65535/53925420272_3427f0e3cf_b.jpg' },
   
    {section_id: 5, order_index: 1, topic_name: 'kingdom roads', topic_img_url: 'https://live.staticflickr.com/65535/53926561763_def8d8b8d6_b.jpg' },
    {section_id: 5, order_index: 2, topic_name: 'contours of everything', topic_img_url: 'https://live.staticflickr.com/65535/53925420122_f782afc511_b.jpg' },
    {section_id: 5, order_index: 3, topic_name: 'in the pseudoforest', topic_img_url: 'https://live.staticflickr.com/65535/53926768935_d2733e525c_b.jpg' },
    {section_id: 5, order_index: 4, topic_name: 'neverending grids', topic_img_url: 'https://live.staticflickr.com/65535/53925420212_9546a77bca_b.jpg' },
    {section_id: 5, order_index: 5, topic_name: 'orienteering', topic_img_url: 'https://live.staticflickr.com/65535/53925420192_cc2d8bb25f_b.jpg' },
    {section_id: 5, order_index: 6, topic_name: 'office structures', topic_img_url: 'https://live.staticflickr.com/65535/53926768860_e6d0b88109_b.jpg' },
    {section_id: 5, order_index: 7, topic_name: 'fort boyard', topic_img_url: 'https://live.staticflickr.com/65535/53925420077_e05faa31b3_b.jpg' },
    {section_id: 5, order_index: 8, topic_name: 'archipelago', topic_img_url: 'https://live.staticflickr.com/65535/53926768815_4dfe36676f_b.jpg' },
]


exports.seed = async function (knex) {
    await knex('topics').insert(topics)
}