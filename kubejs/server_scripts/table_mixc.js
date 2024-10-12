ServerEvents.recipes(event => {
    //超致密互换
    event.shapeless('9x kubejs:ultra_dense_nugget', 'etshtinker:ultra_dense')
    event.shapeless('etshtinker:ultra_dense','9x kubejs:ultra_dense_nugget')
    event.shapeless('9x etshtinker:ultra_dense','kubejs:ultra_dense_block')
    event.shapeless('kubejs:ultra_dense_block','9x etshtinker:ultra_dense')
    //质子电子
    event.shapeless('9x etshtinker:protonium','kubejs:protonium_block')
    event.shapeless('kubejs:protonium_block','9x etshtinker:protonium')
    event.shapeless('9x kubejs:protonium_nugget', 'etshtinker:protonium')
    event.shapeless('etshtinker:protonium','9x kubejs:protonium_nugget')
    event.shapeless('9x etshtinker:electronium','kubejs:electronium_block')
    event.shapeless('kubejs:electronium_block','9x etshtinker:electronium')
    //星图
     event.shaped(Item.of('cti:astra_tablet_5',1), [
        'AAA',
        'ABA',
        'AAA'
     ],
     {
        A: '#forge:plates/steel',
        B: 'ad_astra:steel_cable',
     }
     )

})