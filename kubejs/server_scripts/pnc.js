ServerEvents.recipes(event => {
  // 刷怪笼激活器
  event.replaceInput({mod:'pneumaticcraft',type:'crafting_shaped',output:'pneumaticcraft:spawner_agitator'}, 'pneumaticcraft:ingot_iron_compressed','kubejs:compressed_hardlead')
  //压力室
  event.replaceInput({mod:'pneumaticcraft',type:'crafting_shaped',output:'pneumaticcraft:reinforced_stone'}, 'pneumaticcraft:ingot_iron_compressed','etshtinker:chroma_plate')
  event.replaceInput({mod:'pneumaticcraft',type:'crafting_shaped',output:'pneumaticcraft:pressure_chamber_valve'}, 'pneumaticcraft:ingot_iron_compressed','etshtinker:hardlead_plate')
  // 流体混合
  event.replaceInput({mod:'pneumaticcraft',type:'crafting_shaped',output:'pneumaticcraft:fluid_mixer'}, 'pneumaticcraft:reinforced_brick_wall','kubejs:compressed_hardlead')
  event.replaceInput({mod:'pneumaticcraft',type:'crafting_shaped',output:'pneumaticcraft:fluid_mixer'}, 'pneumaticcraft:pressure_tube','kubejs:pressurized_casing')
  // 热气动
  event.replaceInput({mod:'pneumaticcraft',type:'crafting_shaped',output:'pneumaticcraft:thermopneumatic_processing_plant'}, 'pneumaticcraft:reinforced_stone_slab','kubejs:compressed_hardlead')
  event.replaceInput({mod:'pneumaticcraft',type:'crafting_shaped',output:'pneumaticcraft:thermopneumatic_processing_plant'}, 'pneumaticcraft:pressure_tube','kubejs:pressurized_casing')
  //涡轮转子
  event.replaceInput({mod:'pneumaticcraft',type:'crafting_shaped',output:'pneumaticcraft:turbine_rotor'}, 'pneumaticcraft:ingot_iron_compressed','kubejs:compressed_hardlead')
  //热力压缩机
  event.replaceInput({mod:'pneumaticcraft',type:'crafting_shaped',output:'pneumaticcraft:thermal_compressor'}, 'minecraft:heavy_weighted_pressure_plate','pneumaticcraft:plastic')
  event.shaped(Item.of('cti:alloy_centrifuge',1), [
    'ACA',
    'DBC',
    'ACA'
  ],
  {
    A: 'kubejs:compressed_hardlead',
    B: 'thermal:machine_centrifuge',
    C: 'pneumaticcraft:pressure_tube',
    D: 'tconstruct:scorched_duct'
  }
  )
})