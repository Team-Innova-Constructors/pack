ServerEvents.recipes(event => {
  // 催熟手雷
  event.replaceInput({mod:'thermal',type:'crafting_shaped',output:'thermal:phyto_grenade'}, '#forge:ingots/iron','thermal:rich_slag_block')
  // 锡齿轮
  event.replaceInput({mod:'thermal',type:'crafting_shaped',output:'thermal:tin_gear'}, '#forge:nuggets/iron','etshtinker:hardlead_plate')
  // 结晶机
  event.replaceInput({mod:'thermal',type:'crafting_shaped',output:'thermal:machine_crystallizer'}, '#forge:plates/signalum','etshtinker:chroma_plate')
  //创造升级
  event.shaped(Item.of('thermal:rf_coil_creative_augment',1), [
    'ALA',
    'MNM',
    'ALA'
  ],
  {
    A: 'kubejs:compressed_activated_chroma_plate',
    L: 'avaritia:neutron',
    M: 'powah:energy_cell_nitro',
    N: 'thermal:rf_coil_augment'
  }
  )
  event.shaped(Item.of('thermal:machine_efficiency_creative_augment',1), [
    'BLA',
    'MNM',
    'ALB'
  ],
  {
    B: 'mekaevolution:supreme_control_circuit',
    A: 'kubejs:compressed_activated_chroma_plate',
    L: 'avaritia:neutron',
    M: 'powah:energizing_rod_nitro',
    N: 'thermal:machine_speed_augment'
  }
  )
  event.shaped(Item.of('thermal:machine_catalyst_creative_augment',1), [
    'BLA',
    'MNM',
    'ALB'
  ],
  {
    B: 'mekaevolution:supreme_control_circuit',
    A: 'kubejs:compressed_activated_chroma_plate',
    L: 'avaritia:neutron_ingot',
    M: 'powah:nitro_crystal_block',
    N: 'thermal:machine_catalyst_augment'
  }
  )
})