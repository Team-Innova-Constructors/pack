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

  event.replaceInput({mod:'mekanism',type:'crafting_shaped',output:'mekanism:module_elytra_unit'}, 'mekanism:pellet_antimatter','etshtinker:electronium')
  //钛，矿渣相关
  event.recipes.mekanismCrushing('immersiveengineering:slag_gravel', '#forge:slag')
  event.recipes.mekanismCrushing("kubejs:dusts_titanium",'#mekanism:dirty_dusts/titanium')
  event.recipes.mekanismCrushing('4x ae2:certus_quartz_dust', 'ae2:quartz_block')
  event.recipes.mekanismCrushing('9x minecraft:sand', 'cyclic:compressed_cobblestone')
  event.recipes.mekanismSmelting('tinkerscalibration:titanium_ingot', "kubejs:dusts_titanium")
  //富集仓
  event.recipes.mekanismEnriching("cti:enriched_mana", "cti:magic_crystal")
  event.recipes.mekanismEnriching("kubejs:enriched_refined_glowstone", 'mekanism:ingot_refined_glowstone')
  //其他
  event.recipes.mekanismSmelting("kubejs:overchargedultradense", "kubejs:activated_matter_dust")
  event.recipes.mekanismSmelting('immersiveengineering:ingot_aluminum', '#forge:dusts/aluminum')
  event.recipes.mekanismCompressing("tinkers_ingenuity:bedrock_alloy_ingot","minecraft:bedrock", {gas: 'mekanism:osmium', amount: 2})
  event.recipes.mekanismInjecting('cti:magic_crystal', 'ae2:certus_quartz_crystal', {gas: 'cti:mana_gas', amount: 20})
  event.recipes.mekanismCrushing('6x ae2:certus_quartz_crystal', 'ae2:quartz_cluster')
  event.recipes.mekanismCrushing('ae2:sky_dust','ad_astra:sky_stone')
  //钢壳子
  event.remove([{mod: 'mekanism', output: 'mekanism:steel_casing' }])

  //维奥合金相关
  //维奥合金外壳
  event.shaped(Item.of('kubejs:violium_casing',1), [
    'AAA',
    'ABA',
    'AAA'
  ],
  {
    A: 'kubejs:violium_alloy',
    B: 'kubejs:pressurized_casing',
  }
  )
  //多方快结构方块
  event.replaceInput({mod:'mekanism',type:'crafting_shaped',output:'mekanism:thermal_evaporation_block'}, '#forge:ingots/steel','kubejs:violium_alloy')
  event.replaceInput({mod:'mekanism',type:'crafting_shaped',output:'mekanism:boiler_casing'}, '#forge:ingots/steel','kubejs:violium_alloy')
  event.replaceInput({mod:'mekanismgenerators',type:'crafting_shaped',output:'mekanismgenerators:turbine_casing'}, '#forge:ingots/steel','kubejs:violium_alloy')
  event.replaceInput({mod:'mekanism',type:'crafting_shaped',output:'mekanism:structural_glass'}, '#forge:ingots/steel','kubejs:violium_alloy')

  //机器
  let mach1 =[
    'mekanism:osmium_compressor',
    'mekanism:combiner',
    'mekanism:chemical_crystallizer',
    'mekanism:chemical_washer',
    'mekanism:antiprotonic_nucleosynthesizer',
    'mekanism:solar_neutron_activator'
  ]
  for (let i of mach1){
    event.replaceInput({mod:'mekanism',type:'crafting_shaped',output:`${i}`}, 'mekanism:steel_casing','kubejs:violium_casing')
  }
  event.replaceInput({id:'mekanism:chemical_dissolution_chamber'}, 'mekanism:steel_casing','kubejs:violium_casing')

  //阳清合金相关
  //阳清合金外壳
  event.shaped(Item.of('kubejs:atherium_casing',1), [
    'AAA',
    'ABA',
    'AAA'
  ],
  {
    A: 'kubejs:atherium_alloy',
    B: 'kubejs:violium_casing',
  }
  )

  //多方快结构方块
  event.replaceInput({mod:'mekanismgenerators',type:'crafting_shaped',output:'mekanismgenerators:control_rod_assembly'}, '#forge:ingots/steel','kubejs:atherium_alloy')
  event.replaceInput({mod:'mekanismgenerators',type:'crafting_shaped',output:'mekanismgenerators:fission_fuel_assembly'}, '#forge:ingots/steel','kubejs:atherium_alloy')
  event.replaceInput({mod:'mekanismgenerators',type:'crafting_shaped',output:'mekanismgenerators:fusion_reactor_frame'}, 'mekanism:steel_casing','kubejs:atherium_casing')
  event.remove({mod:'mekanismgenerators',type:'crafting_shaped',output:'mekanismgenerators:fission_reactor_casing'})
  event.remove({mod:'mekanismgenerators',type:'crafting_shaped',output:'mekanismgenerators:reactor_glass'})
  event.shaped(Item.of('mekanismgenerators:fission_reactor_casing',64), [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: '#forge:ingots/lead',
      B: 'kubejs:atherium_casing'
    }
  )
  event.shaped(Item.of('mekanismgenerators:reactor_glass',32), [
    'CAC',
    'ABA',
    'CAC'
  ],
  {
    B: 'ae2:quartz_glass',
    A: 'kubejs:atherium_casing',
    C: 'thermal:obsidian_glass'
  }
)
  //数采和电板
  event.remove([{mod: 'mekaevolution', output: 'mekaevolution:supreme_control_circuit' }])
  event.remove([{mod: 'mekanism', output: 'mekanism:elite_control_circuit' }])
  event.remove([{mod: 'mekaevolution', output: 'mekaevolution:absolute_control_circuit' }])
  event.remove([{mod: 'mekaevolution', output: 'mekaevolution:cosmic_control_circuit' }])
  event.remove({id:'mekanismgenerators:rotary/fusion_fuel'})
  event.remove({id:'mekanism:digital_miner'})
  event.remove({id:'mekanism:module_gravitational_modulating_unit'})

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
  //至尊电板
  event.shaped(Item.of('mekaevolution:supreme_control_circuit',1), [
      ' L ',
      'MNM',
      ' L '
    ],
    {
      L: 'kubejs:tungsten_steel_ingot',
      M: '#forge:nuggets/ultra_dense',
      N: 'mekaevolution:absolute_control_circuit'
    }
  )
  event.shaped(Item.of('mekanism:module_gravitational_modulating_unit',1), [
    'ABA',
    'MNM',
    'LLL'
  ],
  {
    A: 'mekanism:alloy_atomic',
    B: 'minecraft:nether_star',
    M: 'mekanism:basic_induction_cell',
    N: 'mekanism:module_base',
    L: 'etshtinker:stellaralloy',
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
    L: 'kubejs:atherium_casing',
    M: 'kubejs:violium_alloy',
    N: 'mekaevolution:supreme_control_circuit'
  }
)
event.shapeless('kubejs:block_enriched_refined_glowstone', '9x kubejs:enriched_refined_glowstone')
event.shapeless('9x kubejs:enriched_refined_glowstone', 'kubejs:block_enriched_refined_glowstone')
event.shapeless('kubejs:block_enriched_refined_obsidian', '9x mekanism:enriched_refined_obsidian')
event.shapeless('9x mekanism:enriched_refined_obsidian', 'kubejs:block_enriched_refined_obsidian')
event.recipes.mekanismEnriching("kubejs:block_enriched_refined_glowstone", 'mekanism:block_refined_glowstone')
event.recipes.mekanismEnriching("kubejs:block_enriched_refined_obsidian", 'mekanism:block_refined_obsidian')
event.shapeless('kubejs:block_yellow_cake_uranium', '9x mekanism:yellow_cake_uranium')
event.shapeless('9x mekanism:yellow_cake_uranium', 'kubejs:block_yellow_cake_uranium')
event.recipes.mekanismEnriching("2x kubejs:block_yellow_cake_uranium", '#forge:storage_blocks/uranium')

  event.shaped(Item.of('cti:upgrade_double_kit',1), [
    'C C',
    'ACB',
    'C C'
  ],
  {
    A: 'cti:upgrade_speed_kit',
    B: 'cti:upgrade_energy_kit',
    C: 'ae2:singularity',
  }
  )
})