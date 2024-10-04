ServerEvents.recipes(event => {
  // 灌注机
  event.replaceInput({mod:'mekanism',type:'crafting_shaped',output:'mekanism:metallurgic_infuser'}, 'mekanism:ingot_osmium','mekanism:steel_casing')
  // 蒸馏塔
  event.replaceInput({mod:'mekanism',type:'crafting_shaped',output:'mekanism:thermal_evaporation_valve'}, 'mekanism:advanced_control_circuit','mekaevolution:absolute_control_circuit')
  event.replaceInput({mod:'mekanism',type:'crafting_shaped',output:'mekanism:thermal_evaporation_controller'}, 'mekanism:advanced_control_circuit','mekaevolution:absolute_control_circuit')
  //太阳能中子
  event.replaceInput({mod:'mekanism',type:'crafting_shaped',output:'mekanism:solar_neutron_activator'}, 'mekanism:elite_control_circuit','mekaevolution:supreme_control_circuit')
  event.replaceInput({mod:'mekanism',type:'crafting_shaped',output:'mekanism:solar_neutron_activator'}, 'mekanism:alloy_reinforced','mekanism:alloy_atomic')
  //裂变
  event.replaceInput({mod:'mekanismgenerators',type:'crafting_shaped',output:'mekanismgenerators:fission_reactor_port'}, 'mekanism:elite_control_circuit','mekaevolution:cosmic_control_circuit')
  event.replaceInput({mod:'mekanismgenerators',type:'crafting_shaped',output:'mekanismgenerators:control_rod_assembly'}, 'mekanism:elite_control_circuit','mekaevolution:cosmic_control_circuit')
  //聚变
  event.replaceInput({mod:'mekanismgenerators',type:'crafting_shaped',output:'mekanismgenerators:fusion_reactor_controller'}, 'mekanism:ultimate_control_circuit','mekaevolution:infinite_control_circuit')
  event.replaceInput({mod:'mekanismgenerators',output:'mekanismgenerators:fusion_reactor_port'}, 'mekanism:ultimate_control_circuit','mekaevolution:infinite_control_circuit')
  //电解核心
  event.replaceInput({mod:'mekanism',type:'crafting_shaped',output:'mekanism:electrolytic_core'}, '#forge:dusts/osmium','kubejs:compressed_hardlead')
  //绝对电板
  event.shaped(Item.of('mekaevolution:absolute_control_circuit',1), [
    ' L ',
    'MNM',
    ' L '
  ],
  {
    L: 'kubejs:zirconium_alloy',
    M: 'etshtinker:os_induced_netherstarshard',
    N: 'mekanism:ultimate_control_circuit'
  }
)
  //数字采矿机
  event.shaped(Item.of('mekanism:digital_miner',1), [
    'ALA',
    'MNM',
    'CBC'
  ],
  {
    L: 'mekaevolution:absolute_control_circuit',
    M: 'mekanism:logistical_sorter',
    N: 'mekanism:robit',
    A: 'mekanism:alloy_atomic',
    B: 'mekanism:steel_casing',
    C: 'mekanism:teleportation_core'
  }
)
  //至尊电板
  event.shaped(Item.of('mekaevolution:supreme_control_circuit',1), [
      ' L ',
      'MNM',
      ' L '
    ],
    {
      L: '#forge:ingots/tungsten',
      M: '#forge:nuggets/ultra_dense',
      N: 'mekaevolution:absolute_control_circuit'
    }
  )
  //精英电板
  event.shaped(Item.of('mekanism:elite_control_circuit',1), [
      ' L ',
      'MNM',
      ' L '
    ],
    {
      L: 'etshtinker:hardlead_plate',
      M: 'mekanism:alloy_reinforced',
      N: 'mekanism:advanced_control_circuit'
    }
  )
  //寰宇
  event.shaped(Item.of('mekaevolution:cosmic_control_circuit',1), [
    ' L ',
    'MNM',
    ' L '
  ],
  {
    L: 'kubejs:protonium_nugget',
    M: 'industrialforegoing:pink_slime_ingot',
    N: 'mekaevolution:supreme_control_circuit'
  }
)
})