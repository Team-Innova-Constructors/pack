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
  event.add('createoreexcavation:second_createore_drill', 'createoreexcavation:diamond_drill')
  event.add('createoreexcavation:second_createore_drill', 'createoreexcavation:netherite_drill')
  //通用模板
  event.add('thermal:crafting/dies', 'kubejs:universal_press')
  //饰品标签
  event.remove('curios:charm', 'l2hostility:curse_of_greed')
  event.remove('curios:pandora_charm', 'l2hostility:charm_of_looting_1')
  event.remove('curios:pandora_charm', 'l2hostility:charm_of_looting_2')
  event.remove('curios:pandora_charm', 'l2hostility:charm_of_looting_3')
  event.remove('curios:pandora_charm', 'l2hostility:charm_of_looting_4')

  //锭铸膜
  event.add('thermal:crafting/casts', '#tconstruct:casts/multi_use')

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

  event.add('minecraft:needs_diamond_tool', 'cti:alloy_centrifuge')
  event.add('minecraft:mineable/pickaxe', 'cti:alloy_centrifuge')
  event.add('biomancy:cannot_be_eaten_by_cradle', '#tconstruct:modifiable')
  //原版装备
  event.add('forge:completely_new_tag', 'kubejs:vanilla_equipment')
  let vanillaEquipment = [
    'minecraft:leather_helmet',
    'minecraft:leather_chestplate',
    'minecraft:leather_leggings',
    'minecraft:leather_boots',
    'minecraft:chainmail_helmet',
    'minecraft:chainmail_chestplate',
    'minecraft:chainmail_leggings',
    'minecraft:chainmail_boots',
    '#forge:armor/iron',
    '#forge:armor/gold',
    '#forge:armor/diamond',
    '#forge:armor/netherite',
    'minecraft:wooden_sword',
    'minecraft:wooden_shovel',
    'minecraft:wooden_pickaxe',
    'minecraft:wooden_pickaxe',
    'minecraft:wooden_hoe',
    'minecraft:stone_sword',
    'minecraft:stone_shovel',
    'minecraft:stone_pickaxe',
    'minecraft:stone_axe',
    'minecraft:stone_hoe',
    '#forge:tools/iron',
    '#forge:tools/gold',
    '#forge:tools/diamond',
    '#forge:tools/netherite',
    'minecraft:fishing_rod',
    'minecraft:bow',
    'minecraft:crossbow',
  ]
  for (let i of vanillaEquipment) {
    event.add('kubejs:vanilla_equipment', `${i}`)
  }
  //掉落相关
  event.add('forge:completely_new_tag', 'kubejs:bio_drop')
  event.add('forge:completely_new_tag', 'kubejs:l2_allow')
  event.add('forge:completely_new_tag', 'kubejs:severing_drop')

  event.add('forge:completely_new_tag', 'kubejs:pig_head')
  let bio_drop=[
  'biomancy:mob_fang',
  'biomancy:mob_claw',
  'biomancy:mob_sinew',
  'biomancy:mob_marrow',
  'biomancy:withered_mob_marrow',
  'biomancy:mob_gland',
  'biomancy:toxin_gland',
  'biomancy:volatile_gland',
  'biomancy:living_flesh',
  ]
  let l2_allow=[
  'l2complements:totemic_gold_nugget',
  'l2complements:shulkerate_ingot',
  'l2complements:shulkerate_nugget',
  'l2complements:sculkium_nugget',
  'l2complements:eternium_nugget',
  '#l2complements:l2c_legendary',
  'l2hostility:bottle_of_curse',
  'l2hostility:witch_droplet',
  'l2hostility:chaos_ingot',
  'l2hostility:imagine_breaker',
  // '#l2hostility:trait_item',
  'minecraft:fermented_spider_eye',
  'minecraft:pufferfish',
  'minecraft:dragon_breath',
  'minecraft:wither_rose',
  'minecraft:blaze_rod',
  'minecraft:wither_skeleton_skull',
  'minecraft:netherite_scrap',
  'minecraft:gunpowder',
  'minecraft:scute',
  'minecraft:phantom_membrane',
  'minecraft:rabbit_foot',
  'minecraft:spider_eye',
  'l2hostility:book_of_reprint',
  'minecraft:enchanted_golden_apple',
  'minecraft:totem_of_undying',
  'enigmaticlegacy:etherium_ingot',
  'minecraft:ghast_tear',
  'minecraft:creeper_head',
  'minecraft:ink_sac',
  'enigmaticlegacy:etherium_nugget',
  'minecraft:shulker_shell',
  'minecraft:diamond',
  'minecraft:cobweb',
  ]
  let severing_drop=[
  '#forge:heads',
  'minecraft:blaze_rod',
  'minecraft:feather',
  'minecraft:cobweb',
  'minecraft:tnt',
  'minecraft:slime_ball',
  'tconstruct:ender_slime_ball',
  'minecraft:prismarine_shard',
  'minecraft:magma_cream',
  'minecraft:red_mushroom',
  'minecraft:phantom_membrane',
  'minecraft:rabbit_foot',
  'minecraft:white_wool',
  'minecraft:shulker_shell',
  'minecraft:bone',
  'tconstruct:sky_slime_ball',
  'minecraft:carved_pumpkin',
  'minecraft:spider_eye',
  'minecraft:clay_ball',
  'minecraft:turtle_helmet',
  'tconstruct:necrotic_bone',
  ]
  let no_seal=[
    "enigmaticlegacy:the_cube",
    'enigmaticlegacy:enigmatic_eye',
    'enigmaticlegacy:ascension_amulet',
    'enigmaticlegacy:eldritch_amulet',
    'enigmaticlegacy:desolation_ring',
    'enigmaticlegacy:enigmatic_amulet',
  ]
  let pig_head=[
    'tconstruct:zombified_piglin_head',
    'tconstruct:piglin_brute_head',
    'tconstruct:piglin_head',
  ]
  for (let i of bio_drop) {
    event.add('kubejs:bio_drop', `${i}`)
  }
  for (let i of l2_allow) {
    event.add('kubejs:l2_allow', `${i}`)
  }
  for (let i of severing_drop) {
    event.add('kubejs:severing_drop', `${i}`)
  }
  for (let i of no_seal) {
    event.add('l2hostility:no_seal', `${i}`)
  }
  for (let i of pig_head) {
    event.add('kubejs:pig_head', `${i}`)
  }

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
  let tconstructblock = [
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
})
ServerEvents.tags('fluid', event => {
  event.add('create:bottomless/allow', 'ad_astra:cryo_fuel')
  event.add('create:bottomless/allow', 'mekanism:hydrogen')

  event.remove('forge:gasoline', 'pneumaticcraft:gasoline')
  event.remove('forge:diesel', 'pneumaticcraft:diesel')
  event.remove('forge:kerosene', 'pneumaticcraft:kerosene')
  event.remove('forge:lubricant', 'pneumaticcraft:lubricant')
  event.remove('ad_astra_platform:biodiesel','pneumaticcraft:biodiesel')
})