ServerEvents.recipes(event => {
  // 刷怪笼激活器
  event.replaceInput({mod:'pneumaticcraft',type:'crafting_shaped',output:'pneumaticcraft:spawner_agitator'}, 'pneumaticcraft:ingot_iron_compressed','kubejs:compressed_hardlead')
  //压力室
  event.replaceInput({mod:'pneumaticcraft',type:'crafting_shaped',output:'pneumaticcraft:reinforced_stone'}, 'pneumaticcraft:ingot_iron_compressed','etshtinker:hardlead_plate')
  event.replaceInput({mod:'pneumaticcraft',type:'crafting_shaped',output:'pneumaticcraft:pressure_chamber_valve'}, 'pneumaticcraft:ingot_iron_compressed','etshtinker:hardlead_plate')
  // 流体混合
  event.replaceInput({mod:'pneumaticcraft',type:'crafting_shaped',output:'pneumaticcraft:fluid_mixer'}, 'pneumaticcraft:reinforced_brick_wall','kubejs:compressed_hardlead')
  // 热气动
  event.replaceInput({mod:'pneumaticcraft',type:'crafting_shaped',output:'pneumaticcraft:thermopneumatic_processing_plant'}, 'pneumaticcraft:reinforced_stone_slab','kubejs:compressed_hardlead')
  //涡轮转子
  event.replaceInput({mod:'pneumaticcraft',type:'crafting_shaped',output:'pneumaticcraft:turbine_rotor'}, 'pneumaticcraft:ingot_iron_compressed','kubejs:compressed_hardlead')
  //第一块压缩铁
  event.replaceInput({mod:'pneumaticcraft',id:'pneumaticcraft:explosion_crafting/compressed_iron_ingot'}, '#forge:ingots/iron','#forge:ingots/steel')
  event.replaceInput({mod:'pneumaticcraft',id:'pneumaticcraft:explosion_crafting/compressed_iron_block'}, '#forge:stroage_blocks/iron','#forge:stroage_blocks/steel')
})