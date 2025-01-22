// 监听标签事件
//添加物品标签
ServerEvents.tags('item', event => {
    //修改锆
    event.add('forge:completely_new_tag', 'forge:ores/zirconium')
    event.add('forge:completely_new_tag', 'forge:raw_materials/zirconium')
    event.add('forge:completely_new_tag', 'forge:ingots/zirconium')
    event.add('forge:completely_new_tag', 'forge:nuggets/zirconium')
    event.add('forge:completely_new_tag', 'forge:plates/zirconium')
    event.add('forge:completely_new_tag', 'forge:dusts/zirconium')

    event.add('forge:ores/zirconium', 'tinkers_reforged:titanium_ore')
    event.remove('forge:ores/titanium', 'tinkers_reforged:titanium_ore')
    event.add('forge:raw_materials/zirconium', 'tinkers_reforged:raw_titanium')
    event.remove('forge:raw_materials/titanium', 'tinkers_reforged:raw_titanium')
    event.add('forge:ingots/zirconium', 'tinkers_reforged:titanium_ingot')
    event.remove('forge:ingots/titanium', 'tinkers_reforged:titanium_ingot')
    event.add('forge:nuggets/zirconium', 'tinkers_reforged:titanium_nugget')
    event.remove('forge:nuggets/titanium', 'tinkers_reforged:titanium_nugget')
    event.add('forge:plates/zirconium', 'tinkers_reforged:titanium_plate')
    event.remove('forge:plates/titanium', 'tinkers_reforged:titanium_plate')
    event.add('forge:dusts/zirconium', 'tinkers_reforged:titanium_dust')
    event.remove('forge:dusts/titanium', 'tinkers_reforged:titanium_dust')


    event.add('forge:completely_new_tag', 'forge:ores/zirconium')
    event.add('forge:completely_new_tag', 'forge:storage_blocks/raw_zirconium')
    event.add('forge:completely_new_tag', 'forge:storage_blocks/zirconium')

    event.add('forge:ores/zirconium', 'tinkers_reforged:titanium_ore')
    event.remove('forge:ores/titanium', 'tinkers_reforged:titanium_ore')
    event.add('forge:storage_blocks/raw_zirconium', 'tinkers_reforged:raw_titanium_block')
    event.remove('forge:storage_blocks/raw_titanium', 'tinkers_reforged:raw_titanium_block')
    event.add('forge:storage_blocks/zirconium', 'tinkers_reforged:titanium_block')
    event.remove('forge:storage_blocks/titanium', 'tinkers_reforged:titanium_block')

    //添加超致密标签
    event.add('forge:ingots/ultra_dense', 'etshtinker:ultra_dense')
    event.add('forge:nuggets/ultra_dense', 'kubejs:ultra_dense_nugget')
    //添加钛粉标签
    event.add('forge:dusts/titanium', 'kubejs:titanium_dust')
    //添加钨的标签
    event.add('forge:ingots/tungsten', 'kubejs:tungsten_ingot')
    //钻头标签
    event.add('createoreexcavation:second_createore_drill','createoreexcavation:diamond_drill')
    event.add('createoreexcavation:second_createore_drill','createoreexcavation:netherite_drill')
    //通用模板
    event.add('thermal:crafting/dies', 'kubejs:universal_press')
    //饰品标签
    event.remove('curios:charm', 'l2hostility:curse_of_greed')
    event.remove('curios:pandora_charm', 'l2hostility:charm_of_looting_1')
    event.remove('curios:pandora_charm', 'l2hostility:charm_of_looting_2')
    event.remove('curios:pandora_charm', 'l2hostility:charm_of_looting_3')
    event.remove('curios:pandora_charm', 'l2hostility:charm_of_looting_4')

    //锭铸膜
    event.add('thermal:crafting/casts', '#tconstruct:casts/multi_use/ingot')

    event.add('ae2:p2p_attunements/item_p2p_tunnel', 'ae2:item_cell_housing')

    event.add('curios:ring', 'cti:astra_tablet_5')
    event.add('curios:charm', 'cti:astra_tablet_5')

    event.add('kubejs:cell_1m', 'megacells:cell_component_1m')
    event.add('kubejs:cell_1m', 'ae2additions:cell_component_1024')
    event.add('kubejs:cell_4m', 'megacells:cell_component_4m')
    event.add('kubejs:cell_4m', 'ae2additions:cell_component_4096')
    event.add('kubejs:cell_16m', 'megacells:cell_component_16m')
    event.add('kubejs:cell_16m', 'ae2additions:cell_component_16384')
    event.add('kubejs:cell_64m', 'megacells:cell_component_64m')
    event.add('kubejs:cell_64m', 'ae2additions:cell_component_65536')


})
//添加方块标签
ServerEvents.tags('block', event => {
    //修改锆
    event.add('forge:completely_new_tag', 'forge:ores/zirconium')
    event.add('forge:completely_new_tag', 'forge:storage_blocks/raw_zirconium')
    event.add('forge:completely_new_tag', 'forge:storage_blocks/zirconium')

    event.add('forge:ores/zirconium', 'tinkers_reforged:titanium_ore')
    event.remove('forge:ores/titanium', 'tinkers_reforged:titanium_ore')
    event.add('forge:storage_blocks/raw_zirconium', 'tinkers_reforged:raw_titanium_block')
    event.remove('forge:storage_blocks/raw_titanium', 'tinkers_reforged:raw_titanium_block')
    event.add('forge:storage_blocks/zirconium', 'tinkers_reforged:titanium_block')
    event.remove('forge:storage_blocks/titanium', 'tinkers_reforged:titanium_block')

    event.add('minecraft:needs_diamond_tool', 'cti:alloy_centrifuge')
    event.add('minecraft:mineable/pickaxe', 'cti:alloy_centrifuge')

    event.add('forge:budding', 'cti:fracture_silicon_budding')
    event.add('forge:budding', 'cti:rasterite_budding')
})
ServerEvents.tags('block', event => {
    //修改锆
    event.add('forge:completely_new_tag', 'forge:ores/zirconium')
    event.add('forge:completely_new_tag', 'forge:storage_blocks/raw_zirconium')
    event.add('forge:completely_new_tag', 'forge:storage_blocks/zirconium')

    event.add('forge:ores/zirconium', 'tinkers_reforged:titanium_ore')
    event.remove('forge:ores/titanium', 'tinkers_reforged:titanium_ore')
    event.add('forge:storage_blocks/raw_zirconium', 'tinkers_reforged:raw_titanium_block')
    event.remove('forge:storage_blocks/raw_titanium', 'tinkers_reforged:raw_titanium_block')
    event.add('forge:storage_blocks/zirconium', 'tinkers_reforged:titanium_block')
    event.remove('forge:storage_blocks/titanium', 'tinkers_reforged:titanium_block')
//防凋零
let tconstructblock=[
    'tconstruct:seared_stone',
    'tconstruct:seared_cobble',
    'tconstruct:seared_bricks',
    'tconstruct:seared_paver',
    'tconstruct:seared_cracked_bricks',
    'tconstruct:seared_fancy_bricks',
    'tconstruct:seared_triangle_bricks',
    'tconstruct:seared_ladder',
    'tconstruct:seared_glass',
    'tconstruct:seared_soul_glass',
    'tconstruct:seared_tinted_glass',
    'tconstruct:seared_drain'
  ]
  for (let i of tconstructblock) {
    event.add('minecraft:wither_immune', `${i}`)
  }
    event.add('minecraft:needs_diamond_tool', 'cti:alloy_centrifuge')
    event.add('minecraft:mineable/pickaxe', 'cti:alloy_centrifuge')
})