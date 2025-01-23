ServerEvents.recipes(event => {
   event.smithing('toms_storage:ts.adv_wireless_terminal','toms_storage:ts.wireless_terminal','tinkers_thinking:obsidian_bronze_ingot')
   //超致密互换
   event.shapeless('9x kubejs:ultra_dense_nugget', 'etshtinker:ultra_dense')
   event.shapeless('etshtinker:ultra_dense', '9x kubejs:ultra_dense_nugget')
   event.shapeless('9x etshtinker:ultra_dense', 'kubejs:ultra_dense_block')
   event.shapeless('kubejs:ultra_dense_block', '9x etshtinker:ultra_dense')
   //质子电子
   event.shapeless('9x etshtinker:protonium', 'kubejs:protonium_block')
   event.shapeless('kubejs:protonium_block', '9x etshtinker:protonium')
   event.shapeless('9x kubejs:protonium_nugget', 'etshtinker:protonium')
   event.shapeless('etshtinker:protonium', '9x kubejs:protonium_nugget')
   event.shapeless('9x etshtinker:electronium', 'kubejs:electronium_block')
   event.shapeless('kubejs:electronium_block', '9x etshtinker:electronium')
   //其它金属
   event.shapeless('9x etshtinker:stellaralloy', 'kubejs:stellaralloy_block')
   event.shapeless('kubejs:stellaralloy_block', '9x etshtinker:stellaralloy')
   //管道替换
   event.replaceInput({mod:'pipez',type:'crafting_shaped',output:'pipez:advanced_upgrade'}, 'minecraft:redstone_block','minecraft:redstone')
   event.replaceInput({mod:'pipez',type:'crafting_shaped',output:'pipez:advanced_upgrade'}, 'minecraft:diamond','minecraft:lapis_lazuli')
   event.replaceInput({mod:'pipez',type:'crafting_shaped',output:'pipez:ultimate_upgrade'}, 'minecraft:redstone_block','minecraft:redstone')
   event.replaceInput({mod:'pipez',type:'crafting_shaped',output:'pipez:ultimate_upgrade'}, 'minecraft:netherite_ingot','tinkers_thinking:obsidian_bronze_ingot')
   event.replaceInput({mod:'farmingforblockheads',type:'crafting_shaped',output: 'farmingforblockheads:market'}, '#minecraft:planks','create:andesite_alloy')
   let dye=[
      'black_dye',
      'blue_dye',
      'red_dye',
      'green_dye'
    ]
    for(let i of dye){
      event.replaceInput({mod:'sfm',type:'crafting_shaped'}, 'minecraft:'+`${i}`,'#forge:dyes')
    }
   event.shapeless('9x etshtinker:blitz_lumium', 'kubejs:blitz_luminium_block')
   event.shapeless('kubejs:blitz_luminium_block', '9x etshtinker:blitz_lumium')
   //星图
   event.shaped(Item.of('cti:astra_tablet_5', 1), [
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
   let table = [
      'extendedcrafting:basic_table',
      'extendedcrafting:advanced_table',
      'extendedcrafting:elite_table',
      'extendedcrafting:ultimate_table'
   ]
   for (let i of table) { event.remove({ id: `${i}` }) }
   event.shapeless('extendedcrafting:basic_table', '2x minecraft:crafting_table')
   event.shapeless('extendedcrafting:advanced_table', '4x minecraft:crafting_table')
   event.shapeless('extendedcrafting:elite_table', '6x minecraft:crafting_table')
   event.shapeless('extendedcrafting:ultimate_table', '8x minecraft:crafting_table')
   //铝热剂
   event.shaped(Item.of('kubejs:thermite', 4), [
      'BAB',
      'ABA',
      'BAB'
   ],
      {
         A: '#forge:dusts/aluminum',
         B: 'create:crushed_raw_iron',
      }
   )
   //鸡蛋
   event.shaped(Item.of('minecraft:egg', 16), [
      'BAB',
      'BCB',
      'BAB'
   ],
      {
         A: 'biomancy:stone_powder',
         B: 'minecraft:bone_meal',
         C: 'l2complements:life_essence',
      }
   )
   //末影珍珠
   event.shaped(Item.of('cyclic:eye_teleport', 1), [
      ' B ',
      'BAB',
      ' B '
   ],
      {
         B: 'thermal:enderium_dust',
         A: 'ae2:singularity',
      }
   )
   //中子转换
   event.shapeless(Item.of('avaritia:neutron_ingot', 9), [
      'avaritia:neutron',
   ]
   )
   event.shapeless(Item.of('avaritia:crystal_matrix_ingot', 9), [
      'avaritia:crystal_matrix',
   ]
   )
   event.shapeless(Item.of('avaritia:neutron_nugget', 9), [
      'avaritia:neutron_ingot',
   ]
   )
   event.shapeless(Item.of('avaritia:neutron_pile', 9), [
      'avaritia:neutron_nugget',
   ]
   )
   event.shapeless(Item.of('immersiveengineering:graphite_electrode').withNBT('{Unbreakable:1b}'), [
      'immersiveengineering:graphite_electrode',
      'l2complements:eternium_ingot'
   ]
   )
   event.shapeless(Item.of('minecraft:ender_pearl',3), [
      'kubejs:crystal_ender',
      'minecraft:snowball'
   ]
   )
   event.shapeless(Item.of('tconstruct:seared_brick',4), [
      'tconstruct:seared_bricks',
   ]
   )

   //通用压印模板
   event.shaped(Item.of('kubejs:universal_press', 1), [
      'BAB',
      'CDE',
      'BFB'
   ],
      {
         A: 'ae2:silicon_press',
         B: 'ae2:fluix_pearl',
         C: 'ae2:engineering_processor_press',
         D: 'ae2:singularity',
         E: 'ae2:logic_processor_press',
         F: 'ae2:calculation_processor_press',
      }
   )
   event.shaped(Item.of('projecte:dark_matter', 1), [
      'ABA',
      'BCB',
      'ABA'
   ],
      {
         A: 'kubejs:dust_mana',
         B: 'projecte:aeternalis_fuel',
         C: 'minecraft:diamond_block',
      }
   )
   event.shaped(Item.of('minecraft:crying_obsidian',8), [
      'AAA',
      'ABA',
      'AAA'
   ],
      {
         A: '#forge:obsidian',
         B: '#forge:onion/sliced',
      }
   )
   event.shaped(Item.of('tinkersinnovation:polychrome_mix', 1), [
      'ABC',
      'DEF',
      'GHI'
   ],
      {
         A: 'tinkers_ingenuity:blood_binding_ingot',
         B: 'tconstruct:rose_gold_ingot',
         C: 'minecraft:gold_ingot',
         D: 'tinkers_thinking:chlorophyte_ingot',
         E: 'tinkers_reforged:duralumin_ingot',
         F: 'tconstruct:slimesteel_ingot',
         G: 'tconstruct:cobalt_ingot',
         H: 'tconstruct:manyullyn_ingot',
         I: 'tconstruct:hepatizon_ingot',
      }
   )
   //插件
   event.shaped(Item.of('cti:upgrade_electronium', 1), [
      'A A',
      ' C ',
      ' B '
   ],
      {
         A: 'kubejs:tungsten_steel_ingot',
         B: 'pneumaticcraft:printed_circuit_board',
         C: 'etshtinker:electronium',
      }
   )
   event.shaped(Item.of('cti:upgrade_aetherium', 1), [
      'A A',
      'BCB',
      'A A'
   ],
      {
         A: 'kubejs:atherium_alloy',
         C: 'kubejs:aetherium_core',
         B: 'mekanism:supercharged_coil',
      }
   )
   event.shaped(Item.of('cti:upgrade_violium', 1), [
      ' B ',
      'BCB',
      ' A '
   ],
      {
         B: 'kubejs:violium_alloy',
         A: 'kubejs:violium_core',
         C: 'powah:capacitor_niotic',
      }
   )
   event.shaped(Item.of('waystones:warp_stone', 1), [
      ' B ',
      'BAB',
      ' B '
   ],
      {
         B: 'minecraft:amethyst_shard',
         A: 'minecraft:ender_pearl',
      }
   )
      event.shaped(Item.of('l2complements:eternium_nugget', 4), [
      'CBC',
      'BAB',
      'CBC'
   ],
      {
         B: 'l2complements:space_shard',
         A: 'l2complements:explosion_shard',
         C: 'l2complements:shulkerate_nugget',
      }
   )
   event.shaped(Item.of('pipez:infinity_upgrade', 1), [
      'ABA',
      'BCB',
      'ABA'
   ],
      {
         A: 'kubejs:atherium_alloy',
         C: 'pipez:ultimate_upgrade',
         B: 'minecraft:redstone',
      }
   )
   event.shaped(Item.of('aether:golden_feather', 1), [
      'ABA',
      'BCB',
      'ABA'
   ],
      {
         A: 'l2complements:sun_membrane',
         C: 'minecraft:feather',
         B: 'minecraft:gold_nugget',
      }
   )
   event.smithing('constructionwand:infinity_wand','constructionwand:diamond_wand','tconstruct:manyullyn_ingot')

   event.shaped(Item.of('cti:flat_tablet', 1), [
      'A',
      'B'
   ],
      {
         A: 'minecraft:redstone',
         B: '#forge:plates/iron',
      }
   )

   event.shaped(Item.of('cti:flat_tablet_day', 1), [
      'A',
      'B'
   ],
      {
         A: 'aether:sun_altar',
         B: 'cti:flat_tablet',
      }
   )

   event.shaped(Item.of('pneumaticcraft:advanced_pressure_tube', 8), [
      'AAA',
      'ACA',
      'AAA'
   ],
      {
         A: 'pneumaticcraft:pressure_tube',
         C: 'kubejs:tungsten_ingot',
      }
   )

   event.remove({id:'megacells:crafting/mega_crafting_unit'})
   event.shaped(Item.of('megacells:mega_crafting_unit', 1), [
      'AA',
      'AA'
   ],
      {
         A: 'ae2:crafting_unit',
      }
   )
})