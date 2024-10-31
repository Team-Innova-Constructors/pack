ServerEvents.recipes(event => {
  // 机器框架
  event.replaceInput({ mod: 'thermal', type: 'crafting_shaped', output: 'thermal:machine_frame' }, '#forge:ingots/iron', 'etshtinker:hardlead_plate')
  //磨粉机
  event.recipes.thermal.pulverizer(Item.of('minecraft:diamond').withChance(3.5), 'createoreexcavation:raw_diamond').energy(1000)
  event.recipes.thermal.pulverizer(Item.of('minecraft:redstone').withChance(6.5), 'createoreexcavation:raw_redstone').energy(1000)
  event.recipes.thermal.pulverizer(Item.of('minecraft:emerald').withChance(3.5), 'createoreexcavation:raw_emerald').energy(1000)
  event.recipes.thermal.pulverizer(Item.of('minecraft:amethyst_shard').withChance(6.5), 'minecraft:amethyst_cluster').energy(1000)
  //冲压机
  event.recipes.thermal.press('8x ae2:printed_silicon', ['8x #forge:silicon', 'kubejs:universal_press']).energy(100)
  event.recipes.thermal.press('kubejs:universal_press', ['#forge:storage_blocks/iron', 'kubejs:universal_press']).energy(100)
  event.recipes.thermal.press('8x ae2:printed_calculation_processor', ['8x ae2:certus_quartz_crystal', 'kubejs:universal_press']).energy(100)
  event.recipes.thermal.press('8x ae2:printed_engineering_processor', ['8x #forge:gems/diamond', 'kubejs:universal_press']).energy(100)
  event.recipes.thermal.press('8x ae2:printed_logic_processor', ['8x #forge:ingots/gold', 'kubejs:universal_press']).energy(100)
  //罐装机器
  event.recipes.thermal.bottler('cti:advanced_dyano_augment', ['kubejs:unfinished_advanced_dyano_augment', Fluid.of('kubejs:fluid_pyrotheum', 1000)]).energy(10000)
  event.recipes.thermal.bottler('cti:advanced_output_augment', ['kubejs:unfinished_advanced_output_augment', Fluid.of('kubejs:fluid_petrotheum', 1000)]).energy(10000)
  event.recipes.thermal.bottler('cti:advanced_speed_augment', ['kubejs:unfinished_advanced_speed_augment', Fluid.of('kubejs:fluid_cryotheum', 1000)]).energy(10000)
  //精炼机
  event.recipes.thermal.refinery([Item.of('etshtinker:protonium').withChance(1), Fluid.of('etshtinker:molten_electronium', 10), Fluid.of('etshtinker:overchargedneutronium', 100)], Fluid.of('thermal:creosote', 200))
  //结晶器
  event.recipes.thermal.crystallizer('2x obscure_api:astral_dust', ['obscure_api:astral_dust', Fluid.of('manaliquidizer:mana_fluid', 16000)]).energy(10000)
  event.recipes.thermal.crystallizer('6x mekanism:fluorite_gem', ['mekanism:fluorite_gem', Fluid.of('kubejs:crystal_growth', 100)]).energy(10000)
  event.recipes.thermal.crystallizer('4x ae2:fluix_crystal', ['ae2:fluix_crystal', Fluid.of('kubejs:crystal_growth', 100)]).energy(200)
  event.recipes.thermal.crystallizer('2x ae2:quartz_cluster', ['ae2:certus_quartz_crystal', Fluid.of('kubejs:crystal_growth', 100)]).energy(200)
  event.recipes.thermal.crystallizer('ae2:flawless_budding_quartz', ['ae2:flawed_budding_quartz', Fluid.of('manaliquidizer:mana_fluid', 32000)]).energy(32000)
  //熔岩炉
  event.recipes.thermal.crucible(Fluid.of('kubejs:fluid_cryotheum', 250), 'kubejs:dust_cryotheum').energy(100000)
  event.recipes.thermal.crucible(Fluid.of('kubejs:fluid_pyrotheum', 250), 'kubejs:dust_pyrotheum').energy(200000)
  event.recipes.thermal.crucible(Fluid.of('kubejs:fluid_petrotheum', 250), 'kubejs:dust_petrotheum').energy(100000)
  //压缩能源炉
  event.recipes.thermal.compression_fuel(Fluid.of('immersivepetroleum:diesel', 1000)).energy(3200000)
  event.recipes.thermal.compression_fuel(Fluid.of('immersiveengineering:ethanol', 1000)).energy(560000)
  event.recipes.thermal.compression_fuel(Fluid.of('immersivepetroleum:gasoline', 1000)).energy(4900000)
  event.recipes.thermal.compression_fuel(Fluid.of('immersivepetroleum:ethylene', 1000)).energy(7200000)
  event.recipes.thermal.compression_fuel(Fluid.of('immersivepetroleum:napalm', 1000)).energy(6250000)
  event.recipes.thermal.compression_fuel(Fluid.of('industrialforegoing:biofuel', 1000)).energy(795000)
  event.recipes.thermal.compression_fuel(Fluid.of('solidarytinker:super_dt', 100)).energy(200000000)
  event.recipes.thermal.compression_fuel(Fluid.of('etshtinker:annihilating_plasma', 100)).energy(200000000)
  //催化剂
  event.recipes.thermal.insolator_catalyst('kubejs:phytogro_zero').primaryMod(4.0).secondaryMod(2.0).energyMod(0.6).minChance(0.0).useChance(0.1)
  event.recipes.thermal.pulverizer_catalyst('kubejs:dust_petrotheum').primaryMod(3.0).secondaryMod(2.0).energyMod(8.0).minChance(0.05).useChance(0.1)
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
      'AAA',
      'BCD',
      'AAA'
    ],
    {
      A: 'kubejs:zirconium_alloy',
      B: 'thermal:dynamo_fuel_augment',
      C: 'pneumaticcraft:printed_circuit_board',
      D: 'thermal:dynamo_throttle_augment',
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