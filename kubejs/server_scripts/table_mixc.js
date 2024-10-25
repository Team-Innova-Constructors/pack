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
    //其它金属
    event.shapeless('9x etshtinker:stellaralloy','kubejs:stellaralloy_block')
    event.shapeless('kubejs:stellaralloy_block','9x etshtinker:stellaralloy')

    event.shapeless('9x etshtinker:blitz_lumium','kubejs:blitz_luminium_block')
    event.shapeless('kubejs:blitz_luminium_block','9x etshtinker:blitz_lumium')
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
  //桌子
  let table =[
   'extendedcrafting:basic_table',
   'extendedcrafting:advanced_table',
   'extendedcrafting:elite_table',
   'extendedcrafting:ultimate_table'
 ]
 for (let i of table) {event.remove({id:`${i}`})}
 event.shapeless('extendedcrafting:basic_table','2x minecraft:crafting_table')
 event.shapeless('extendedcrafting:advanced_table','4x minecraft:crafting_table')
 event.shapeless('extendedcrafting:elite_table','6x minecraft:crafting_table')
 event.shapeless('extendedcrafting:ultimate_table','8x minecraft:crafting_table')
 //铝热剂
 event.shaped(Item.of('kubejs:thermite',4), [
   'BAB',
   'ABA',
   'BAB'
],
{
   A: '#forge:dusts/aluminum',
   B: 'create:crushed_raw_iron',
}
)
 //末影珍珠
 event.shaped(Item.of('cyclic:eye_teleport',1), [
   'BAB',
   'AAA',
   'BAB'
],
{
   B: '#forge:dusts/ender_pearl',
   A: 'ae2:singularity',
}
)


})