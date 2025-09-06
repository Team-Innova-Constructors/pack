ServerEvents.recipes(event => {
  // 蒸馏塔
  event.replaceInput({id:'mekanism:thermal_evaporation_valve'}, 'mekanism:advanced_control_circuit','mekaevolution:absolute_control_circuit')
  event.replaceInput({id:'mekanism:thermal_evaporation_controller'}, 'mekanism:advanced_control_circuit','mekaevolution:absolute_control_circuit')
  //裂变
  event.replaceInput({id:'mekanismgenerators:fission_reactor/port'}, 'mekanism:elite_control_circuit','mekaevolution:cosmic_control_circuit')
  event.replaceInput({id:'mekanismgenerators:fission_reactor/control_rod_assembly'}, 'mekanism:elite_control_circuit','mekaevolution:cosmic_control_circuit')
  //聚变
  event.replaceInput({id:'mekanismgenerators:reactor/controller'}, 'mekanism:ultimate_control_circuit','mekaevolution:infinite_control_circuit')
  event.replaceInput({id:'mekanismgenerators:reactor/port'}, 'mekanism:ultimate_control_circuit','mekaevolution:infinite_control_circuit')
  //电解核心
  event.replaceInput({id:'mekanism:electrolytic_core'}, '#forge:dusts/osmium','kubejs:compressed_hardlead')
  event.replaceInput({id:'mekanism:module_elytra_unit'}, 'mekanism:pellet_antimatter','etshtinker:electronium')
  //钛，矿渣相关
  event.recipes.mekanismCrushing('immersiveengineering:slag_gravel', '#forge:slag')
  event.recipes.mekanismCrushing("kubejs:dusts_titanium",'#mekanism:dirty_dusts/titanium')
  event.recipes.mekanismCrushing('4x ae2:certus_quartz_dust', 'ae2:quartz_block')
  event.recipes.mekanismCrushing('9x minecraft:sand', 'cyclic:compressed_cobblestone')
  event.recipes.mekanismSmelting('tinkerscalibration:titanium_ingot', "kubejs:dusts_titanium")
  //富集仓
  event.recipes.mekanismEnriching("cti:enriched_mana", "cti:magic_crystal")
  event.recipes.mekanismEnriching("kubejs:enriched_refined_glowstone", 'mekanism:ingot_refined_glowstone')
  event.recipes.mekanismEnriching("aether_redux:refined_sentrite", 'kubejs:sentrite')
  //其他
  event.recipes.mekanismSmelting("kubejs:overchargedultradense", "kubejs:activated_matter_dust")
  event.recipes.mekanismSmelting('immersiveengineering:ingot_aluminum', '#forge:dusts/aluminum')
  event.recipes.mekanismSmelting('l2hostility:miracle_powder', "#l2hostility:trait_item")
  event.recipes.mekanismSmelting('l2hostility:chaos_ingot', "#l2hostility:chaos_equipment")
  event.recipes.mekanismSmelting('l2complements:poseidite_ingot', 'minecraft:trident')
  event.recipes.mekanismCompressing("tinkers_ingenuity:bedrock_alloy_ingot","minecraft:bedrock", {gas: 'mekanism:osmium', amount: 2})
  event.recipes.mekanismInjecting('cti:magic_crystal', 'ae2:certus_quartz_crystal', {gas: 'cti:mana_gas', amount: 20})
  event.recipes.mekanismInjecting(Item.of('aether_redux:gravitite_ingot',4), 'aether_redux:raw_gravitite', {gas: 'cti:concentrated_carbon', amount: 2})
  event.recipes.mekanismCrushing('6x ae2:certus_quartz_crystal', 'ae2:quartz_cluster')
  event.recipes.mekanismCrushing('ae2:sky_dust','ad_astra:sky_stone')
  //钢壳子
  event.remove([{id: 'mekanism:steel_casing' }])

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
  event.replaceInput({id:'mekanism:thermal_evaporation/block'}, '#forge:ingots/steel','kubejs:violium_alloy')
  event.replaceInput({id:'mekanism:boiler_casing'}, '#forge:ingots/steel','kubejs:violium_alloy')
  event.replaceInput({id:'mekanismgenerators:turbine/casing'}, '#forge:ingots/steel','kubejs:violium_alloy')
  event.replaceInput({id:'mekanism:structural_glass'}, '#forge:ingots/steel','kubejs:violium_alloy')
  event.replaceInput({id:'mekanism:module_inhalation_purification_unit'}, 'mekanism:pellet_polonium','kubejs:violium_alloy')

  //阳清合金相关
  //阳清合金外壳
  event.shaped(Item.of('kubejs:atherium_casing',1), [
    'AAA',
    'ABA',
    'AAA'
  ],
  {
    A: 'kubejs:atherium_alloy',
    B: 'kubejs:reactor_casing',
  }
  )

  //多方快结构方块
  event.replaceInput({id:'mekanismgenerators:fission_reactor/control_rod_assembly'}, '#forge:ingots/steel','kubejs:violium_alloy')
  event.replaceInput({id:'mekanismgenerators:fission_reactor/fuel_assembly'}, '#forge:ingots/steel','kubejs:violium_alloy')
  event.replaceInput({id:'mekanismgenerators:reactor/frame'}, 'mekanism:steel_casing','kubejs:reactor_casing')
  event.remove({id:'mekanismgenerators:fission_reactor/casing'})
  event.remove({id:'mekanismgenerators:reactor/glass'})
  event.shaped(Item.of('mekanismgenerators:fission_reactor_casing',48), [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: '#forge:ingots/lead',
      B: 'kubejs:reactor_casing'
    }
  )
  event.shaped(Item.of('mekanismgenerators:reactor_glass',16), [
    'CAC',
    'ABA',
    'CAC'
  ],
  {
    B: 'ae2:quartz_glass',
    A: 'kubejs:reactor_casing',
    C: 'thermal:obsidian_glass'
  }
)
  //数采和电板
  event.remove([{id:'mekaevolution:supreme_control_circuit' }])
  event.remove([{id:'mekaevolution:absolute_control_circuit' }])
  event.remove([{id:'mekaevolution:cosmic_control_circuit' }])
  event.remove({id:'mekanismgenerators:rotary/fusion_fuel'})
  event.remove({id:'mekanism:digital_miner'})
  event.remove({id:'mekanism:module_gravitational_modulating_unit'})
  event.remove({id:'mekanismgenerators:generator/solar'})
  event.remove({id:'mekanismgenerators:generator/advanced_solar'})

  //绝对电板
  event.shaped(Item.of('mekaevolution:absolute_control_circuit',1), [
    'ALA',
    'M M',
    'ALA'
  ],
  {
    L: 'kubejs:zirconium_alloy',
    M: 'solidarytinker:extremelycoldsteel_ingot',
    A: 'mekanism:ultimate_control_circuit'
  }
)
  //至尊电板
  event.shaped(Item.of('mekaevolution:supreme_control_circuit',1), [
      'ALA',
      'M M',
      'ALA'
    ],
    {
      L: 'kubejs:tungsten_steel_ingot',
      M: 'etshtinker:os_induced_netherstarshard',
      A: 'mekaevolution:absolute_control_circuit'
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
  //寰宇
  event.shaped(Item.of('mekaevolution:cosmic_control_circuit',1), [
    'ALA',
    'M M',
    'ALA'
  ],
  {
    L: 'kubejs:reactor_casing',
    M: 'kubejs:violium_alloy',
    A: 'mekaevolution:supreme_control_circuit'
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
  event.shaped(Item.of('mekanism:module_base',1), [
      'CAC',
      'ABA',
      'CAC'
   ],
      {
         A: 'mekaevolution:supreme_control_circuit',
         B: 'mekanism:hdpe_sheet',
         C: '#forge:storage_blocks/bronze'
      }
   )
   event.shaped(Item.of('mekanism:module_energy_unit',1), [
      'ADA',
      'ABA',
      'CCC'
   ],
      {
         A: 'kubejs:violium_alloy',
         B: 'mekanism:module_base',
         C: 'mekaevolution:cosmic_control_circuit',
         D: 'mekanism:ultimate_induction_cell'
      }
   )

   //机器配方重做
   let mekMachines = [
    'mekanism:enrichment_chamber',
    'mekanism:osmium_compressor',
    'mekanism:precision_sawmill',
    'mekanism:combiner',
    'mekanism:crusher',
    'mekanism:metallurgic_infuser',
    'mekanism:energized_smelter',
    'mekanism:energized_smelter',
    'mekanism:isotopic_centrifuge',
    'mekanism:pressurized_reaction_chamber',
    'mekanism:chemical_crystallizer',
    'mekanism:chemical_washer',
    'mekanism:chemical_dissolution_chamber',
    'mekanism:chemical_oxidizer',
    'mekanism:rotary_condensentrator',
    'mekanism:chemical_infuser',
    'mekanism:solar_neutron_activator'
   ]
	for (let i of mekMachines) { event.remove({ id: `${i}` }) }

  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABAAA",
    "A C C A",
    "ACDEDCA",
    "B EFE B",
    "ACDEDCA",
    "A C C A",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "thermal:steel_plate"
    },
    "B": {
      "item": "ae2:interface"
    },
    "C": {
      "item": "ae2:crafting_accelerator"
    },
    "D": {
      "item": "mekanism:alloy_atomic"
    },
    "E": {
      "item": "thermal:machine_furnace"
    },
    "F": {
      "item": "mekanism:block_osmium"
    }
  },
  "result": {
    "item": "mekanism:ultimate_smelting_factory"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABAAA",
    "A C C A",
    "ACDEDCA",
    "B FGF B",
    "ACDEDCA",
    "A C C A",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "thermal:steel_plate"
    },
    "B": {
      "item": "ae2:interface"
    },
    "C": {
      "item": "ae2:crafting_accelerator"
    },
    "D": {
      "item": "mekanism:alloy_atomic"
    },
    "E": {
      "item": "thermal:machine_pulverizer"
    },
    "F": {
      "item": "thermal:machine_smelter"
    },
    "G": {
      "item": "mekanism:block_osmium"
    }
  },
  "result": {
    "item": "mekanism:ultimate_enriching_factory"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABAAA",
    "A C C A",
    "ACDEDCA",
    "B EFE B",
    "ACDEDCA",
    "A C C A",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "thermal:steel_plate"
    },
    "B": {
      "item": "ae2:interface"
    },
    "C": {
      "item": "ae2:crafting_accelerator"
    },
    "D": {
      "item": "mekanism:alloy_atomic"
    },
    "E": {
      "item": "thermal:machine_pulverizer"
    },
    "F": {
      "item": "mekanism:block_osmium"
    }
  },
  "result": {
    "item": "mekanism:ultimate_crushing_factory"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABAAA",
    "A C C A",
    "ACDEDCA",
    "B EFE B",
    "ACDEDCA",
    "A C C A",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "thermal:steel_plate"
    },
    "B": {
      "item": "ae2:interface"
    },
    "C": {
      "item": "ae2:crafting_accelerator"
    },
    "D": {
      "item": "mekanism:alloy_atomic"
    },
    "E": {
      "item": "thermal:machine_press"
    },
    "F": {
      "item": "kubejs:ultra_dense_block"
    }
  },
  "result": {
    "item": "mekanism:ultimate_compressing_factory"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABAAA",
    "A C C A",
    "ACDEDCA",
    "B FGF B",
    "ACDEDCA",
    "A C C A",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "thermal:steel_plate"
    },
    "B": {
      "item": "ae2:interface"
    },
    "C": {
      "item": "ae2:crafting_accelerator"
    },
    "D": {
      "item": "mekanism:alloy_atomic"
    },
    "E": {
      "item": "thermal:machine_press"
    },
    "F": {
      "item": "thermal:machine_smelter"
    },
    "G": {
      "item": "mekanism:block_osmium"
    }
  },
  "result": {
    "item": "mekanism:ultimate_combining_factory"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABAAA",
    "A C C A",
    "ACDEDCA",
    "B EFE B",
    "ACDEDCA",
    "A C C A",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "thermal:steel_plate"
    },
    "B": {
      "item": "ae2:interface"
    },
    "C": {
      "item": "ae2:crafting_accelerator"
    },
    "D": {
      "item": "mekanism:alloy_atomic"
    },
    "E": {
      "item": "thermal:machine_crystallizer"
    },
    "F": {
      "item": "mekanism:block_osmium"
    }
  },
  "result": {
    "item": "mekanism:ultimate_infusing_factory"
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABAAA",
    "A C C A",
    "ACDEDCA",
    "B EFE B",
    "ACDEDCA",
    "A C C A",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "thermal:steel_plate"
    },
    "B": {
      "item": "ae2:interface"
    },
    "C": {
      "item": "ae2:crafting_accelerator"
    },
    "D": {
      "item": "mekanism:alloy_atomic"
    },
    "E": {
      "item": "thermal:machine_sawmill"
    },
    "F": {
      "item": "mekanism:block_osmium"
    }
  },
  "result": {
    "item": "mekanism:ultimate_sawing_factory"
  }
})

event.custom({
  "type": "mekanism:rotary",
  "fluidInput": {
    "amount": 1,
    "fluid": "kubejs:methane"
  },
  "fluidOutput": {
    "amount": 1,
    "fluid": "kubejs:methane"
  },
  "gasInput": {
    "amount": 1,
    "gas": "cti:methane"
  },
  "gasOutput": {
    "amount": 1,
    "gas": "cti:methane"
  }
  })

  function rotary(fluid,gas){
event.custom({
  "type": "mekanism:rotary",
  "fluidInput": {
    "amount": 1,
    "fluid": fluid
  },
  "fluidOutput": {
    "amount": 1,
    "fluid": fluid
  },
  "gasInput": {
    "amount": 1,
    "gas": gas
  },
  "gasOutput": {
    "amount": 1,
    "gas": gas
  }
  })
  }

  event.remove({id:'mekanism:reaction/substrate/water_hydrogen'})
  event.remove({id:'mekanism:reaction/substrate/water_ethene'})
  event.remove({id:'mekanism:reaction/substrate/ethene_oxygen'})
  event.custom({
  "type": "mekanism:reaction",
  "duration": 100,
  "energyRequired": 100000,
  "fluidInput": {
    "amount": 10,
    "fluid": "kubejs:radical_initiator"
  },
  "gasInput": {
    "amount": 1000,
    "gas": "mekanism:ethene"
  },
  "itemInput": {
    "ingredient": {
      "item": "mekanism:substrate"
    }
  },
  "itemOutput": {
    "item": "mekanism:hdpe_pellet",
    "count":32
  }
})
  rotary("kubejs:phenol","cti:phenol")
  rotary("immersiveengineering:phenolic_resin","cti:phenolic_resin")
  rotary("kubejs:benzoic_acid","cti:benzoic_acid")
  rotary("immersiveengineering:acetaldehyde","cti:aldehyde")
  rotary("kubejs:radical_initiator","cti:dibenzoyl_peroxide")
  function chemicalInfuse(inputRe,amountRe,inputOx,amountOx,output,outputAmount){
    event.custom({
  "type": "mekanism:chemical_infusing",
  "leftInput": {
    "amount": amountOx,
    "gas": inputOx
  },
  "output": {
    "amount": outputAmount,
    "gas": output
  },
  "rightInput": {
    "amount": amountRe,
    "gas": inputRe
  }
})
  }
  chemicalInfuse("cti:benzoic_acid",2,"mekanism:oxygen",1,"cti:dibenzoyl_peroxide",1)
  chemicalInfuse("cti:ethanol",2,"mekanism:oxygen",1,"cti:aldehyde",2)
  chemicalInfuse("cti:phenol",1,"cti:aldehyde",1,"cti:phenolic_resin",2)
  function oxidize(input,gas,amount){
    event.custom({
  "type": "mekanism:oxidizing",
  "input": {
    "ingredient": {
      "item": input
    }
  },
  "output": {
    "amount": amount,
    "gas": gas
  }
  })
  }

  event.custom({
  "type": "mekanism:rotary",
  "fluidInput": {
    "amount": 1,
    "tag": "forge:ethanol"
  },
  "fluidOutput": {
    "amount": 1,
    "fluid": "immersiveengineering:ethanol"
  },
  "gasInput": {
    "amount": 1,
    "gas": "cti:ethanol"
  },
  "gasOutput": {
    "amount": 1,
    "gas": "cti:ethanol"
  }
  })

  event.custom({
  "type": "mekanism:dissolution",
  "gasInput": {
    "amount": 2,
    "gas": "mekanism:hydrofluoric_acid"
  },
  "itemInput": {
    "ingredient": {
      "item": "thermal:netherite_gear"
    }
  },
  "output": {
    "amount": 400,
    "chemicalType": "gas",
    "gas": "cti:precursor"
  }
})

  event.custom({
  "type": "mekanism:dissolution",
  "gasInput": {
    "amount": 4,
    "gas": "cti:precursor"
  },
  "itemInput": {
    "ingredient": {
      "item": "kubejs:compressed_activated_chroma_plate"
    }
  },
  "output": {
    "amount": 1600,
    "chemicalType": "gas",
    "gas": "cti:chromatic_metal"
  }
  })

  event.custom({
  "type": "mekanism:dissolution",
  "gasInput": {
    "amount": 4,
    "gas": "cti:precursor"
  },
  "itemInput": {
    "ingredient": {
      "item": "kubejs:carbon_plate"
    }
  },
  "output": {
    "amount": 1600,
    "chemicalType": "gas",
    "gas": "cti:polymer"
  }
  })
  chemicalInfuse("cti:chromatic_metal",1,"cti:polymer",1,"cti:pure_matter",2)
  rotary("kubejs:pure_matter","cti:pure_matter")
  oxidize("kubejs:gas_hydrate","cti:methane",250)

  event.custom({
  "type": "mekanism:reaction",
  "duration": 50,
  "energyRequired": 100000,
  "fluidInput": {
    "amount": 80,
    "fluid": "kubejs:methane"
  },
  "gasInput": {
    "amount": 100,
    "gas": "mekanism:sulfuric_acid"
  },
  "itemInput": {
    "ingredient": {
      "item": "immersiveengineering:ingot_hop_graphite"
    }
  },
  "itemOutput": {
    "item": "kubejs:graphene",
    "count":2
  }
})

  function chemicalCrystallize(gas,amount,output){
    event.custom({
  "type": "mekanism:crystallizing",
  "chemicalType": "gas",
  "input": {
    "amount": amount,
    "gas": gas
  },
  "output": {
    "item": output
  }
  })
  }

  chemicalCrystallize("cti:phenolic_resin",250,"immersiveengineering:plate_duroplast")


  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABAAA",
    "ACDEDFA",
    "ADLGLDA",
    "BHIJIHB",
    "ADLKLDA",
    "AFDEDCA",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:compressed_hardlead"
    },
    "B": {
      "item": "ae2:interface"
    },
    "C": {
      "item": "thermal:bronze_gear"
    },
    "D": {
      "tag": "kubejs:plastic_eq"
    },
    "E": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "F": {
      "item": "thermal:invar_gear"
    },
    "G": {
      "item": "mekanism:ultimate_fluid_tank"
    },
    "H": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "I": {
      "item": "mekanism:ultimate_chemical_tank"
    },
    "J": {
      "item": "mekanism:steel_casing"
    },
    "K": {
      "item": "mekanism:personal_chest"
    },
    "L": {
      "item": "immersiveengineering:plate_duroplast"
    }
  },
  "result": {
    "item": "mekanism:pressurized_reaction_chamber",
    "count":4
  }
})



event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABAAA",
    "ACDEDFA",
    "ADLGLDA",
    "BHIJIHB",
    "ADLGLDA",
    "AFDEDCA",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:compressed_hardlead"
    },
    "B": {
      "item": "ae2:interface"
    },
    "C": {
      "item": "thermal:bronze_gear"
    },
    "D": {
      "tag": "kubejs:plastic_eq"
    },
    "E": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "F": {
      "item": "thermal:invar_gear"
    },
    "G": {
      "item": "mekanism:ultimate_fluid_tank"
    },
    "H": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "I": {
      "item": "mekanism:ultimate_chemical_tank"
    },
    "J": {
      "item": "mekanism:steel_casing"
    },
    "L": {
      "item": "immersiveengineering:plate_duroplast"
    }
  },
  "result": {
    "item": "mekanism:rotary_condensentrator",
    "count":4
  }
})
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABAAA",
    "ACDEDFA",
    "ADLGLDA",
    "BHIJKHB",
    "ADLGLDA",
    "AFDEDCA",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:compressed_hardlead"
    },
    "B": {
      "item": "ae2:interface"
    },
    "C": {
      "item": "thermal:bronze_gear"
    },
    "D": {
      "item": "mekanism:hdpe_sheet"
    },
    "E": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "F": {
      "item": "thermal:invar_gear"
    },
    "G": {
      "item": "mekanism:block_fluorite"
    },
    "H": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "I": {
      "item": "mekanism:ultimate_chemical_tank"
    },
    "J": {
      "item": "mekanism:steel_casing"
    },
    "K": {
      "item": "mekanism:personal_chest"
    },
    "L": {
      "item": "immersiveengineering:plate_duroplast"
    }
  },
  "result": {
    "item": "mekanism:chemical_crystallizer",
    "count":4
  }
})
  
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABAAA",
    "ACDEDFA",
    "ADLGLDA",
    "BHGIJHB",
    "ADLKLDA",
    "AFDEDCA",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:compressed_hardlead"
    },
    "B": {
      "item": "ae2:interface"
    },
    "C": {
      "item": "thermal:bronze_gear"
    },
    "D": {
      "item": "mekanism:hdpe_sheet"
    },
    "E": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "F": {
      "item": "thermal:invar_gear"
    },
    "G": {
      "item": "mekanism:ultimate_chemical_tank"
    },
    "H": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "I": {
      "item": "mekanism:steel_casing"
    },
    "J": {
      "item": "mekanism:personal_chest"
    },
    "K": {
      "item": "mekanism:block_fluorite"
    },
    "L": {
      "item": "immersiveengineering:plate_duroplast"
    }
  },
  "result": {
    "item": "mekanism:chemical_dissolution_chamber",
    "count":4
  }
})

  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABAAA",
    "ACDEDFA",
    "ADKDKDA",
    "BGHIJGB",
    "ADKDKDA",
    "AFDEDCA",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:compressed_hardlead"
    },
    "B": {
      "item": "ae2:interface"
    },
    "C": {
      "item": "thermal:bronze_gear"
    },
    "D": {
      "item": "mekanism:hdpe_sheet"
    },
    "E": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "F": {
      "item": "thermal:invar_gear"
    },
    "G": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "H": {
      "item": "mekanism:personal_chest"
    },
    "I": {
      "item": "mekanism:steel_casing"
    },
    "J": {
      "item": "mekanism:ultimate_chemical_tank"
    },
    "K": {
      "item": "immersiveengineering:plate_duroplast"
    }
  },
  "result": {
    "item": "mekanism:chemical_oxidizer",
    "count":4
  }
})

  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABAAA",
    "ACDEDFA",
    "ADKGKDA",
    "BHGIGHB",
    "ADKDKDA",
    "AFDEDCA",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:compressed_hardlead"
    },
    "B": {
      "item": "ae2:interface"
    },
    "C": {
      "item": "thermal:bronze_gear"
    },
    "D": {
      "item": "mekanism:hdpe_sheet"
    },
    "E": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "F": {
      "item": "thermal:invar_gear"
    },
    "G": {
      "item": "mekanism:ultimate_chemical_tank"
    },
    "H": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "I": {
      "item": "mekanism:steel_casing"
    },
    "K": {
      "item": "immersiveengineering:plate_duroplast"
    }
  },
  "result": {
    "item": "mekanism:chemical_infuser",
    "count":4
  }
})

  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABAAA",
    "ACDEDFA",
    "ADKGKDA",
    "BHIJGHB",
    "ADKDKDA",
    "AFDEDCA",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:compressed_hardlead"
    },
    "B": {
      "item": "ae2:interface"
    },
    "C": {
      "item": "thermal:bronze_gear"
    },
    "D": {
      "item": "mekanism:hdpe_sheet"
    },
    "E": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "F": {
      "item": "thermal:invar_gear"
    },
    "G": {
      "item": "mekanism:ultimate_chemical_tank"
    },
    "H": {
      "item": "mekanism:ultimate_control_circuit"
    },
    "I": {
      "item": "mekanism:ultimate_fluid_tank"
    },
    "J": {
      "item": "mekanism:steel_casing"
    },
    "K": {
      "item": "immersiveengineering:plate_duroplast"
    }
  },
  "result": {
    "item": "mekanism:chemical_washer",
    "count":4
  }
})

  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABAAA",
    "ACDEDFA",
    "ADKGKDA",
    "BHIJIHB",
    "ADKDKDA",
    "AFDEDCA",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:compressed_hardlead"
    },
    "B": {
      "item": "ae2:interface"
    },
    "C": {
      "item": "thermal:bronze_gear"
    },
    "D": {
      "item": "mekanism:hdpe_sheet"
    },
    "E": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "F": {
      "item": "thermal:invar_gear"
    },
    "G": {
      "item": "mekanismgenerators:solar_panel"
    },
    "H": {
      "item": "mekaevolution:absolute_control_circuit"
    },
    "I": {
      "item": "mekanism:ultimate_chemical_tank"
    },
    "J": {
      "item": "mekanism:steel_casing"
    },
    "K": {
      "item": "immersiveengineering:plate_duroplast"
    }
  },
  "result": {
    "item": "mekanism:solar_neutron_activator",
    "count":4
  }
})

  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABAAA",
    "ACDEDFA",
    "ADKGKDA",
    "BHIJIHB",
    "ADKGKDA",
    "AFDEDCA",
    "AAABAAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:compressed_hardlead"
    },
    "B": {
      "item": "ae2:interface"
    },
    "C": {
      "item": "thermal:bronze_gear"
    },
    "D": {
      "item": "mekanism:hdpe_sheet"
    },
    "E": {
      "item": "pneumaticcraft:printed_circuit_board"
    },
    "F": {
      "item": "thermal:invar_gear"
    },
    "G": {
      "item": "mekanismgenerators:turbine_blade"
    },
    "H": {
      "item": "mekaevolution:supreme_control_circuit"
    },
    "I": {
      "item": "mekanism:ultimate_chemical_tank"
    },
    "J": {
      "item": "mekanism:steel_casing"
    },
    "K": {
      "item": "immersiveengineering:plate_duroplast"
    }
  },
  "result": {
    "item": "mekanism:isotopic_centrifuge",
    "count":4
  }
})

  event.custom({
    "type": "thermal:smelter",
    "ingredient": [
        {
          "item": "etshtinker:trinity_intereactive_alloy",
          "count":4
        },
        {
          "item": "kubejs:overchargedultradense",
          "count":8
        },
        {
          "item": "kubejs:violium_casing",
          "count":8
        }
    ],
    "result": [
      {
        "item": "kubejs:reactor_casing",
        "count": 4
      },
      {
        "item": "kubejs:reactor_casing",
        "chance": 4
      }
    ],
    "experience": 2
  })

  oxidize("aether:ambrosium_shard","cti:concentrated_carbon",250)
  oxidize("aether:ambrosium_block","cti:concentrated_carbon",2500)
  event.custom({
  "type": "mekanism:reaction",
  "duration": 50,
  "energyRequired": 100000,
  "fluidInput": {
    "amount": 1000,
    "fluid": "mekanism:hydrogen"
  },
  "gasInput": {
    "amount": 200,
    "gas": "cti:concentrated_carbon"
  },
  "itemInput": {
    "ingredient": {
      "item": "kubejs:carbon_plate"
    }
  },
  "itemOutput": {
    "item": "kubejs:cnt",
    "count":4
  }
})

event.custom({
    "type": "thermal:smelter",
    "ingredient": [
        {
          "item": "etshtinker:anti_neutronium",
          "count":1
        },
        {
          "item": "kubejs:violium_alloy",
          "count":4
        },
        {
          "item": "mekanism:alloy_atomic",
          "count":16
        }
    ],
    "result": [
      {
        "item": "kubejs:atherium_alloy",
        "count": 1
      },
      {
        "item": "kubejs:atherium_alloy",
        "chance": 1
      }
    ],
    "experience": 2
  })

  function electrolysis(fluid,amountFluid,gasRe,amountRe,gasOx,amountOx){
    event.custom({
  "type": "mekanism:separating",
  "input": {
    "amount": amountFluid,
    "fluid": fluid
  },
  "leftGasOutput": {
    "amount": amountRe,
    "gas": gasRe
  },
  "rightGasOutput": {
    "amount": amountOx,
    "gas": gasOx
  }
  })
  }

  electrolysis("ad_astra:cryo_fuel",10,"cti:methane",4,"mekanism:oxygen",6)
  event.replaceInput({id:'mekanism:modification_station'},'mekanism:steel_casing','kubejs:reactor_casing')
  event.replaceInput({id:'mekanism:antiprotonic_nucleosynthesizer'},'mekanism:steel_casing','kubejs:reactor_casing')

  rotary("mekanismgenerators:tritium","mekanismgenerators:tritium")
  rotary("mekanismgenerators:deuterium","mekanismgenerators:deuterium")
  electrolysis("mekanism:heavy_water",10,"mekanismgenerators:deuterium",10,"mekanism:oxygen",5)
})