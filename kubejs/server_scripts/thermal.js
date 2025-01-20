ServerEvents.recipes(event => {
  // 机器框架
  event.replaceInput({ mod: 'thermal', type: 'crafting_shaped', output: 'thermal:machine_frame' }, '#forge:ingots/iron', 'etshtinker:hardlead_plate')
  event.replaceInput({ mod: 'thermal', type: 'crafting_shaped', output: 'thermal:machine_frame' }, '#forge:gears/tin', '#forge:gears/steel')
  event.replaceInput({ mod: 'thermal', output: 'thermal:white_rockwool' }, 'thermal:slag', '#forge:slag')
  //磨粉机
  event.recipes.thermal.pulverizer(Item.of('minecraft:diamond').withChance(3.5), 'createoreexcavation:raw_diamond').energy(1000)
  event.recipes.thermal.pulverizer(Item.of('minecraft:redstone').withChance(6.5), 'createoreexcavation:raw_redstone').energy(1000)
  event.recipes.thermal.pulverizer(Item.of('minecraft:emerald').withChance(3.5), 'createoreexcavation:raw_emerald').energy(1000)
  event.recipes.thermal.pulverizer(Item.of('minecraft:amethyst_shard').withChance(6.5), 'minecraft:amethyst_cluster').energy(1000)
  event.recipes.thermal.pulverizer([Item.of('etshtinker:bismuthinite').withChance(2.1), Item.of('create:experience_nugget').withChance(0.6)], 'etshtinker:bismuthinite_ore_deepslate').energy(8000)
  event.recipes.thermal.pulverizer([Item.of('minecraft:diamond').withChance(1.2), Item.of('powah:uraninite_raw').withChance(1.7), Item.of('minecraft:lapis_lazuli').withChance(2.5), Item.of('minecraft:emerald').withChance(1.4)], 'kubejs:crystal_slag').energy(8000)
  event.recipes.thermal.pulverizer([Item.of('thermal:raw_tin').withChance(2.45), Item.of('thermal:raw_lead').withChance(2.55), Item.of('minecraft:raw_iron').withChance(2.75), Item.of('minecraft:raw_copper').withChance(2.85)], 'kubejs:metal_slag').energy(8000)
  event.recipes.thermal.pulverizer([Item.of('etshtinker:bismuthinite').withChance(1.05), Item.of('thermal:cinnabar').withChance(2.65), Item.of('thermal:niter').withChance(2.3), Item.of('thermal:apatite').withChance(3.48)], 'kubejs:mineral_slag').energy(8000)
  //冲压机
  event.recipes.thermal.press('8x ae2:printed_silicon', ['8x #forge:silicon', 'kubejs:universal_press']).energy(2000)
  event.recipes.thermal.press('kubejs:universal_press', ['#forge:storage_blocks/iron', 'kubejs:universal_press']).energy(2000)
  event.recipes.thermal.press('8x ae2:printed_calculation_processor', ['8x ae2:certus_quartz_crystal', 'kubejs:universal_press']).energy(2000)
  event.recipes.thermal.press('8x ae2:printed_engineering_processor', ['8x #forge:gems/diamond', 'kubejs:universal_press']).energy(2000)
  event.recipes.thermal.press('8x ae2:printed_logic_processor', ['8x #forge:ingots/gold', 'kubejs:universal_press']).energy(2000)
  //感应炉
  event.recipes.thermal.smelter('4x etshtinker:hardlead_plate', ['3x #forge:ingots/lead', 'etshtinker:bismuth_ingot']).energy(10000)
  event.recipes.thermal.smelter('2x tinkers_ingenuity:blood_binding_ingot', ['3x thermal:steel_ingot','4x minecraft:gold_ingot','5x minecraft:blaze_rod']).energy(10000)
  event.recipes.thermal.smelter('2x tinkers_reforged:duralumin_ingot', ['4x immersiveengineering:ingot_aluminum', '2x minecraft:copper_ingot']).energy(8000)
  event.recipes.thermal.smelter('4x thermal:enderium_ingot', ['3x #forge:ingots/lead', '2x minecraft:ender_pearl','#forge:dusts/diamond']).energy(16000)
  event.recipes.thermal.smelter(Item.of('etshtinker:bismuth_ingot').withChance(1.25), ['etshtinker:bismuthinite']).energy(12000)
  event.recipes.thermal.smelter([Item.of('l2hostility:hostility_essence').withChance(0.25),'64x minecraft:glass_bottle'], ['64x l2hostility:bottle_of_curse','kubejs:dust_pyrotheum']).energy(12000)
  event.recipes.thermal.smelter('tinkers_thinking:obsidian_bronze_ingot', ['#forge:ingots/copper', '2x #forge:dusts/obsidian']).energy(2000)
  event.recipes.thermal.smelter(Item.of('tinkers_reforged:titanium_dust').withChance(2.5), ['kubejs:stable_slag', 'tinkers_reforged:titanium_dust']).energy(12000)
  //罐装机器
  event.recipes.thermal.bottler('immersiveengineering:treated_wood_horizontal', ['#minecraft:planks', Fluid.of('immersiveengineering:creosote', 125)]).energy(400)
  event.recipes.thermal.bottler('cti:advanced_dyano_augment', ['kubejs:unfinished_advanced_dyano_augment', Fluid.of('kubejs:fluid_pyrotheum', 1000)]).energy(40000)
  event.recipes.thermal.bottler('cti:advanced_output_augment', ['kubejs:unfinished_advanced_output_augment', Fluid.of('kubejs:fluid_petrotheum', 1000)]).energy(40000)
  event.recipes.thermal.bottler('cti:advanced_speed_augment', ['kubejs:unfinished_advanced_speed_augment', Fluid.of('kubejs:fluid_cryotheum', 1000)]).energy(40000)
  event.recipes.thermal.bottler('cti:upgrade_augment_6', ['kubejs:uncomplete_upgrade_augment_6', Fluid.of('tinkersinnovation:molten_polychrome_alloy', 810)]).energy(40000)
  //精炼机
  event.recipes.thermal.refinery([Item.of('etshtinker:protonium').withChance(1), Fluid.of('etshtinker:molten_electronium', 10)], Fluid.of('etshtinker:overchargedneutronium', 100))
  event.recipes.thermal.refinery([Item.of('thermal:sulfur_dust').withChance(1.25), Fluid.of('thermal:refined_fuel', 100)], Fluid.of('thermal:light_oil', 100))
  event.recipes.thermal.refinery([Item.of('thermal:tar').withChance(1.25), Fluid.of('thermal:refined_fuel', 100)], Fluid.of('thermal:heavy_oil', 100))
  event.recipes.thermal.refinery([Item.of('minecraft:honeycomb').withChance(0.75), Fluid.of('create:honey', 500)], Fluid.of('kubejs:royal_jelly', 250))
  event.recipes.thermal.refinery([Item.of('kubejs:stable_slag').withChance(1.15), Fluid.of('tinkerscalibration:moltentitanium', 180)], Fluid.of('kubejs:used_lava', 200)).energy(25000)
  //结晶器
  event.recipes.thermal.crystallizer('2x obscure_api:astral_dust', ['obscure_api:astral_dust', Fluid.of('manaliquidizer:mana_fluid', 16000)]).energy(10000)
  event.recipes.thermal.crystallizer('6x mekanism:fluorite_gem', ['mekanism:fluorite_gem', Fluid.of('kubejs:crystal_growth', 100)]).energy(2000)
  event.recipes.thermal.crystallizer('4x ae2:fluix_crystal', ['ae2:fluix_crystal', Fluid.of('kubejs:crystal_growth', 100)]).energy(2000)
  event.recipes.thermal.crystallizer('2x ae2:quartz_cluster', ['ae2:certus_quartz_crystal', Fluid.of('kubejs:crystal_growth', 100)]).energy(2000)
  event.recipes.thermal.crystallizer('ae2:flawless_budding_quartz', ['ae2:flawed_budding_quartz', Fluid.of('manaliquidizer:mana_fluid', 32000)]).energy(32000)
  event.recipes.thermal.crystallizer('etshtinker:knsu', ['thermal:niter_dust', Fluid.of('thermal:syrup', 250)]).energy(10000)
  //熔岩炉
  event.recipes.thermal.crucible(Fluid.of('kubejs:fluid_cryotheum', 250), 'kubejs:dust_cryotheum').energy(400000)
  event.recipes.thermal.crucible(Fluid.of('kubejs:fluid_pyrotheum', 250), 'kubejs:dust_pyrotheum').energy(400000)
  event.recipes.thermal.crucible(Fluid.of('kubejs:fluid_petrotheum', 250), 'kubejs:dust_petrotheum').energy(400000)
  event.recipes.thermal.crucible(Fluid.of('thermal:redstone', 900), 'kubejs:crystal_redstone').energy(40000)
  event.recipes.thermal.crucible(Fluid.of('thermal:glowstone', 1000), 'kubejs:crystal_glowstone').energy(40000)
  event.recipes.thermal.crucible(Fluid.of('thermal:ender', 1000), 'kubejs:crystal_ender').energy(40000)
  //热解炉
  event.recipes.thermal.pyrolyzer([Item.of('kubejs:tungsten_ingot').withChance(1.5), Item.of('minecraft:netherite_scrap').withChance(0.8), Fluid.of('kubejs:zirconium_fluid', 90)], 'kubejs:stable_slag').energy(2000)
  //压缩能源炉
  event.recipes.thermal.compression_fuel(Fluid.of('immersivepetroleum:diesel', 1000)).energy(3200000)
  event.recipes.thermal.compression_fuel(Fluid.of('immersiveengineering:ethanol', 1000)).energy(560000)
  event.recipes.thermal.compression_fuel(Fluid.of('immersivepetroleum:gasoline', 1000)).energy(4900000)
  event.recipes.thermal.compression_fuel(Fluid.of('immersivepetroleum:ethylene', 1000)).energy(7200000)
  event.recipes.thermal.compression_fuel(Fluid.of('immersivepetroleum:napalm', 1000)).energy(6250000)
  event.recipes.thermal.compression_fuel(Fluid.of('industrialforegoing:biofuel', 1000)).energy(795000)
  //冷冻机
  event.recipes.thermal.chiller(Item.of('thermal:rubber'), Fluid.of('thermal:latex', 250)).energy(2000)
  event.recipes.thermal.chiller(Item.of('tconstruct:sky_congealed_slime'), Fluid.of('tconstruct:sky_slime', 1000)).energy(4000)
  event.recipes.thermal.chiller(Item.of('tconstruct:ender_congealed_slime'), Fluid.of('tconstruct:ender_slime', 1000)).energy(4000)
  event.recipes.thermal.chiller(Item.of('tconstruct:earth_congealed_slime'), Fluid.of('tconstruct:earth_slime', 1000)).energy(4000)
  //离心机
  event.recipes.thermal.centrifuge(['thermal:sulfur_dust', '2x thermal:niter_dust', 'mekanism:dust_charcoal'], '4x minecraft:gunpowder').energy(10000)
  event.recipes.thermal.centrifuge([Item.of('kubejs:light_slag').withChance(1.8), Item.of('kubejs:crystal_slag').withChance(1.30), Item.of('kubejs:metal_slag').withChance(1.6), Item.of('kubejs:mineral_slag').withChance(1.2)], 'kubejs:enriched_slag').energy(12000)
  event.recipes.thermal.centrifuge([Item.of('kubejs:powdered_slag').withChance(1.1), Item.of('minecraft:coal').withChance(2.5), Item.of('thermal:raw_nickel').withChance(1.4), Item.of('thermal:sulfur_dust').withChance(3.5)], 'kubejs:light_slag').energy(12000)
  event.recipes.thermal.centrifuge([Item.of('thermal:gold_dust').withChance(2.15), Item.of('thermal:silver_dust').withChance(2.65), Item.of('mekanism:dust_osmium').withChance(2.75), Item.of('mekanism:dust_uranium').withChance(5.5)], 'kubejs:dense_slag').energy(12000)
  event.recipes.thermal.centrifuge([Item.of('minecraft:redstone').withChance(4.2), Item.of('minecraft:glowstone_dust').withChance(3.1), Item.of('thermal:quartz_dust').withChance(2.9), Item.of('2x minecraft:clay_ball').withChance(1.8)], 'kubejs:powdered_slag').energy(12000)
  //催化剂
  event.recipes.thermal.insolator_catalyst('kubejs:phytogro_zero').primaryMod(4.0).secondaryMod(2.0).energyMod(0.6).minChance(0.0).useChance(0.1)
  event.recipes.thermal.pulverizer_catalyst('kubejs:dust_petrotheum').primaryMod(3.0).secondaryMod(2.0).energyMod(8.0).minChance(0.05).useChance(0.1)
  //锯木机
  event.recipes.thermal.sawmill('6x create:shaft','create:andesite_alloy')
  //次级能源炉燃烧组件
  event.shaped(Item.of('cti:secondary_dyano_augment',1),
  [
    'BAB',
    'CDE',
    'BAB'
  ],
    {
      A: 'immersivepetroleum:bitumen',
      B: 'etshtinker:chroma_plate',
      C: 'thermal:dynamo_fuel_augment',
      D: '#thermal:glass/hardened',
      E: 'thermal:dynamo_throttle_augment',
    }
  )
  //高级储罐
  event.shaped(Item.of('cti:advanced_fluid_tank_augment',1),
  [
    'BAB',
    'CDC',
    'BAB'
  ],
    {
      A: '#forge:gears/copper',
      B: 'etshtinker:chroma_plate',
      C: 'thermal:fluid_tank_augment',
      D: 'thermal:redstone_servo',
    }
  )
  //更多插件
  event.shaped(Item.of('kubejs:unfinished_advanced_speed_augment', 1),
    [
      'AAA',
      'BCD',
      'AAA'
    ],
    {
      A: 'kubejs:zirconium_alloy',
      B: 'thermal:machine_speed_augment',
      C: 'pneumaticcraft:printed_circuit_board',
      D: 'thermal:machine_efficiency_augment',
    }
  )
  event.shaped(Item.of('cti:advanced_catalyst_augment', 1), [
    'AAA',
    'BCB',
    'AAA'
  ],
    {
      A: 'kubejs:zirconium_alloy',
      B: 'thermal:machine_catalyst_augment',
      C: 'pneumaticcraft:printed_circuit_board',
    }
  )
  event.shaped(Item.of('kubejs:unfinished_advanced_dyano_augment', 1),
    [
      'ACA',
      'BED',
      'ACA'
    ],
    {
      A: 'kubejs:zirconium_alloy',
      B: 'thermal:dynamo_fuel_augment',
      C: 'pneumaticcraft:printed_circuit_board',
      D: 'thermal:dynamo_throttle_augment',
      E: 'cti:secondary_dyano_augment'
    }
  )
  event.shaped(Item.of('cti:advanced_range_augment', 1),
    [
      'AAA',
      'BCB',
      'AAA'
    ],
    {
      A: 'kubejs:zirconium_alloy',
      B: 'thermal:area_radius_augment',
      C: 'pneumaticcraft:printed_circuit_board',
    }
  )
  event.shaped(Item.of('kubejs:unfinished_advanced_output_augment', 1),
    [
      'AAA',
      'BCB',
      'AAA'
    ],
    {
      A: 'kubejs:zirconium_alloy',
      B: 'thermal:machine_output_augment',
      C: 'pneumaticcraft:printed_circuit_board',
    }
  )
  event.shaped(Item.of('cti:upgrade_augment_4', 1),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'kubejs:zirconium_alloy',
      B: 'gobber2:gobber2_glass',
      C: 'thermal:enderium_gear',
      D: 'thermal:upgrade_augment_3',
    }
  )
  event.shaped(Item.of('cti:upgrade_augment_5', 1),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'etshtinker:chroma_plate',
      B: 'gobber2:gobber2_glass_nether',
      C: 'pneumaticcraft:compressed_iron_gear',
      D: 'cti:upgrade_augment_4',
    }
  )
  event.shaped(Item.of('kubejs:uncomplete_upgrade_augment_6', 1),
    [
      'ABA',
      'CDC',
      'ABA'
    ],
    {
      A: 'kubejs:overchargedultradense',
      B: 'kubejs:compressed_activated_chroma_plate',
      C: 'thermal:netherite_gear',
      D: 'cti:upgrade_augment_5',
    }
  )
  event.shapeless(Item.of('kubejs:dust_petrotheum', 1), [
    '#forge:dusts/obsidian',
    'thermal:basalz_powder',
    'minecraft:clay_ball',
    'minecraft:redstone',
  ]
  )
  event.shapeless(Item.of('kubejs:dust_cryotheum', 1), [
    'powah:dry_ice',
    'thermal:blizz_powder',
    'thermal:niter',
    'minecraft:redstone',
  ]
  )
  event.shapeless(Item.of('kubejs:dust_pyrotheum', 1), [
    '#forge:dusts/sulfur',
    'minecraft:blaze_powder',
    '#forge:dusts/coal',
    'minecraft:redstone',
  ]
  )


})