ServerEvents.recipes(event => {
  // 催熟手雷
  event.replaceInput({mod:'thermal',type:'crafting_shaped',output:'thermal:phyto_grenade'}, '#forge:ingots/iron','thermal:rich_slag_block')
  // 机器框架
  event.replaceInput({mod:'thermal',type:'crafting_shaped',output:'thermal:machine_frame'}, '#forge:ingots/iron','etshtinker:hardlead_plate')
  //磨粉机
  event.recipes.thermal.pulverizer_catalyst('kubejs:dust_petrotheum').primaryMod(3.0).secondaryMod(2.0).energyMod(8.0).minChance(0.05).useChance(0.1)
  event.recipes.thermal.pulverizer(Item.of('minecraft:diamond').withChance(2.5), 'createoreexcavation:raw_diamond').energy(1000)
  event.recipes.thermal.pulverizer(Item.of('minecraft:redstone').withChance(6.5), 'createoreexcavation:raw_redstone').energy(1000)
  event.recipes.thermal.pulverizer(Item.of('minecraft:emerald').withChance(2.5),'createoreexcavation:raw_emerald').energy(1000)
  //更多插件
  event.shaped(Item.of('cti:advanced_speed_augment',1),
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
  event.shaped(Item.of('cti:advanced_catalyst_augment',1), [
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
  event.shaped(Item.of('cti:advanced_dyano_augment',1),
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
  event.shaped(Item.of('cti:advanced_range_augment',1),
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
  event.shaped(Item.of('cti:advanced_output_augment',1),
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
})