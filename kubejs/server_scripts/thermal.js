ServerEvents.recipes(event => {
  // 催熟手雷
  event.replaceInput({mod:'thermal',type:'crafting_shaped',output:'thermal:phyto_grenade'}, '#forge:ingots/iron','thermal:rich_slag_block')
  // 锡齿轮
  event.replaceInput({mod:'thermal',type:'crafting_shaped',output:'thermal:tin_gear'}, '#forge:nuggets/iron','etshtinker:hardlead_plate')
  // 结晶机
  event.replaceInput({mod:'thermal',type:'crafting_shaped',output:'thermal:machine_crystallizer'}, '#forge:plates/signalum','etshtinker:chroma_plate')

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