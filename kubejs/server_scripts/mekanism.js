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
  //钛，矿渣相关
  event.recipes.mekanismCrushing('immersiveengineering:slag_gravel', '#forge:slag')
  event.recipes.mekanismCrushing("kubejs:dusts_titanium",'#mekanism:dirty_dusts/titanium')
  event.recipes.mekanismSmelting('tinkerscalibration:titanium_ingot', "kubejs:dusts_titanium")
  event.recipes.mekanismCompressing("tinkers_ingenuity:bedrock_alloy_ingot","minecraft:bedrock","mekanism:osmium")

  //维奥合金相关
  //维奥合金外壳
  event.shaped(Item.of('kubejs:violium_casing',1), [
    'AAA',
    'ABA',
    'AAA'
  ],
  {
    A: 'kubejs:violium_alloy',
    B: 'mekanism:steel_casing',
  }
  )
  //多方快结构方块
  event.replaceInput({mod:'mekanism',type:'crafting_shaped',output:'mekanism:thermal_evaporation_block'}, '#forge:ingots/steel','kubejs:violium_alloy')
  event.replaceInput({mod:'mekanism',type:'crafting_shaped',output:'mekanism:boiler_casing'}, '#forge:ingots/steel','kubejs:violium_alloy')
  event.replaceInput({mod:'mekanismgenerators',type:'crafting_shaped',output:'mekanismgenerators:turbine_casing'}, '#forge:ingots/steel','kubejs:violium_alloy')
  event.replaceInput({mod:'mekanism',type:'crafting_shaped',output:'mekanism:structural_glass'}, '#forge:ingots/steel','kubejs:violium_alloy')
  event.replaceInput({mod:'mekanismgenerators',type:'crafting_shaped',output:'mekanismgenerators:fusion_reactor_frame'}, 'mekanism:steel_casing','kubejs:violium_casing')
  event.replaceInput({mod:'mekanismgenerators',type:'crafting_shaped',output:'mekanismgenerators:reactor_glass'}, 'mekanism:enriched_iron','kubejs:violium_alloy')
  //机器
  let mach1 =[
    'mekanism:osmium_compressor',
    'mekanism:combiner',
    'mekanism:chemical_crystallizer',
    'mekanism:chemical_dissolution_chamber',
    'mekanism:chemical_washer',
    'mekanism:antiprotonic_nucleosynthesizer',
    'mekanism:solar_neutron_activator'
  ]
  for (let i of mach1){
    event.replaceInput({mod:'mekanism',type:'crafting_shaped',output:`${i}`}, 'mekanism:steel_casing','kubejs:violium_casing')
  }


  //数采和电板
	event.remove([{mod: 'mekanism', output: 'mekanism:digital_miner' }])
	event.remove([{mod: 'mekaevolution', output: 'mekaevolution:supreme_control_circuit' }])
	event.remove([{mod: 'mekanism', output: 'mekanism:elite_control_circuit' }])
	event.remove([{mod: 'mekaevolution', output: 'mekaevolution:absolute_control_circuit' }])
	event.remove([{mod: 'mekaevolution', output: 'mekaevolution:cosmic_control_circuit' }])

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