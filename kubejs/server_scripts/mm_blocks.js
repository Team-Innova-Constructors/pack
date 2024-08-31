ServerEvents.recipes(event => {
  //过载能量注入器
  event.shaped(Item.of('mm:overload_infuser',1), [
    'ADA',
    'BCB',
    'ADA'
  ],
  {
    A: 'etshtinker:ultra_dense',
    B: 'createaddition:tesla_coil',
    C: 'ae2:charger',
    D: 'immersiveengineering:graphite_electrode'
  })

  //中子充能仪
  event.shaped(Item.of('mm:neutronium_charger_lesser',1), [
    'ABA',
    'BCB',
    'ABA'
  ],
  {
    A: 'etshtinker:ultra_dense',
    B: 'powah:energizing_rod_nitro',
    C: 'thermal:charge_bench'
  })
  event.shaped(Item.of('mm:neutronium_charger_advanced',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:protonium',
    B: 'mekaevolution:cosmic_control_circuit',
    C: 'mm:neutronium_charger_medium'
  })
  //一体式集成燃油发动机
  event.shaped(Item.of('mm:integrated_fuel_engine',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:storage_blocks/steel',
    B: 'immersiveengineering:component_electronic_adv',
    C: 'immersiveengineering:dynamo'
  })
  //反应堆中子活化器
  event.shaped(Item.of('mm:fisson_neutron_activator',1), [
    'ABA',
    'BCB',
    'ABA'
  ],
  {
    A: 'kubejs:protonium_block',
    B: 'mekanism:sps_casing',
    C: 'mekanism:solar_neutron_activator'
  })
  //微型粒子对撞机
  event.shaped(Item.of('mm:micro_particle_collider',1), [
    'ABA',
    'DCD',
    'ABA'
  ],
  {
    A: 'kubejs:protonium_block',
    B: 'kubejs:electronium_block',
    C: 'etshtinker:sculk_energycore',
    D: 'mekanism:supercharged_coil'
  })
  //巨型胃囊
  event.shaped(Item.of('mm:stomach_controller',1), [
    'AEA',
    'BCB',
    'ADA'
  ],
  {
    A: 'biomancy:living_flesh',
    B: 'biomancy:nutrient_bar',
    C: 'biomancy:decomposer',
    D: 'biomancy:storage_sac',
    E: 'biomancy:primordial_core',
  })
    //熔岩分离装置
    event.shaped(Item.of('mm:lava_centrifugal_controller',1), [
      'DAD',
      'BCB',
      'EAE'
    ],
    {
      A: 'tinkerscalibration:gravity_ingot',
      B: 'mekaevolution:absolute_control_circuit',
      C: 'thermal:machine_centrifuge',
      D: 'powah:dry_ice',
      E: 'kubejs:zirconium_alloy'
    })
    //同位素温差发电机
    event.shaped(Item.of('mm:isotrope_thermoelectric_generator',1), [
      'AAA',
      'BCB',
      'AAA'
    ],
    {
      A: 'etshtinker:activated_chroma_plate',
      B: 'thermal:energy_cell',
      C: 'thermal:dynamo_magmatic',
    })

  //钢接口
  event.shaped(Item.of('mm:steel_item_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:ingots/steel',
    B: '#forge:chests/wooden',
    C: 'minecraft:barrel'
  })
  event.shaped(Item.of('mm:steel_item_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:ingots/steel',
    B: 'minecraft:hopper',
    C: 'minecraft:barrel'
  })
  event.shaped(Item.of('mm:steel_energy_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:ingots/steel',
    B: 'thermal:rf_coil',
    C: 'thermal:energy_cell_frame'
  })
  event.shaped(Item.of('mm:steel_energy_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:ingots/steel',
    B: 'thermal:redstone_servo',
    C: 'thermal:energy_cell_frame'
  })
  event.shaped(Item.of('mm:steel_fluid_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:ingots/steel',
    B: 'thermal:redstone_servo',
    C: 'immersiveengineering:fluid_sorter'
  })
  event.shaped(Item.of('mm:steel_fluid_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:ingots/steel',
    B: 'thermal:redstone_servo',
    C: 'thermal:fluid_cell_frame'
  })
  event.shaped(Item.of('mm:steel_kinetic_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:ingots/steel',
    B: 'create:large_cogwheel',
    C: 'create:vertical_gearbox'
  })
  event.shaped(Item.of('mm:steel_kinetic_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:ingots/steel',
    B: 'create:large_cogwheel',
    C: 'create:gearbox'
  })

  //硬铅接口
  event.shaped(Item.of('mm:hardlead_item_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'kubejs:compressed_hardlead',
    B: 'mekanism:advanced_control_circuit',
    C: 'mm:steel_item_port_output'
  })
  event.shaped(Item.of('mm:hardlead_item_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'kubejs:compressed_hardlead',
    B: 'mekanism:advanced_control_circuit',
    C: 'mm:steel_item_port_input'
  })
  event.shaped(Item.of('mm:hardlead_energy_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'kubejs:compressed_hardlead',
    B: 'mekanism:advanced_control_circuit',
    C: 'mm:steel_energy_port_input'
  })
  event.shaped(Item.of('mm:hardlead_energy_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'kubejs:compressed_hardlead',
    B: 'mekanism:advanced_control_circuit',
    C: 'mm:steel_energy_port_output'
  })
  event.shaped(Item.of('mm:hardlead_fluid_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'kubejs:compressed_hardlead',
    B: 'mekanism:advanced_control_circuit',
    C: 'mm:steel_fluid_port_input'
  })
  event.shaped(Item.of('mm:hardlead_fluid_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'kubejs:compressed_hardlead',
    B: 'mekanism:advanced_control_circuit',
    C: 'mm:steel_fluid_port_output'
  })
  event.shaped(Item.of('mm:hardlead_air_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'kubejs:compressed_hardlead',
    B: 'pneumaticcraft:pressure_tube',
    C: 'pneumaticcraft:pressure_chamber_valve'
  })
  event.shaped(Item.of('mm:hardlead_air_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'kubejs:compressed_hardlead',
    B: 'pneumaticcraft:pressure_tube',
    C: 'pneumaticcraft:pressure_chamber_wall'
  })
  event.shaped(Item.of('mm:hardlead_kinetic_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'kubejs:compressed_hardlead',
    B: 'create:precision_mechanism',
    C: 'mm:steel_kinetic_port_input'
  })
  event.shaped(Item.of('mm:hardlead_kinetic_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'kubejs:compressed_hardlead',
    B: 'create:precision_mechanism',
    C: 'mm:steel_kinetic_port_output'
  })

  //超致密接口
  event.shaped(Item.of('mm:ultra_dense_item_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:ultra_dense',
    B: 'mekaevolution:absolute_control_circuit',
    C: 'mm:hardlead_item_port_output'
  })
  event.shaped(Item.of('mm:ultra_dense_item_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:ultra_dense',
    B: 'mekaevolution:absolute_control_circuit',
    C: 'mm:hardlead_item_port_input'
  })
  event.shaped(Item.of('mm:ultra_dense_energy_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:ultra_dense',
    B: 'mekaevolution:absolute_control_circuit',
    C: 'mm:hardlead_energy_port_input'
  })
  event.shaped(Item.of('mm:ultra_dense_energy_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:ultra_dense',
    B: 'mekaevolution:absolute_control_circuit',
    C: 'mm:hardlead_energy_port_output'
  })
  event.shaped(Item.of('mm:ultra_dense_fluid_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:ultra_dense',
    B: 'mekaevolution:absolute_control_circuit',
    C: 'mm:hardlead_fluid_port_input'
  })
  event.shaped(Item.of('mm:ultra_dense_fluid_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:ultra_dense',
    B: 'mekaevolution:absolute_control_circuit',
    C: 'mm:hardlead_fluid_port_output'
  })
  event.shaped(Item.of('mm:ultra_dense_air_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:ultra_dense',
    B: 'mekaevolution:absolute_control_circuit',
    C: 'mm:hardlead_air_port_output'
  })
  event.shaped(Item.of('mm:ultra_dense_air_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:ultra_dense',
    B: 'mekaevolution:absolute_control_circuit',
    C: 'mm:hardlead_air_port_input'
  })
  event.shaped(Item.of('mm:ultra_dense_kinetic_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:ultra_dense',
    B: 'mekaevolution:absolute_control_circuit',
    C: 'mm:hardlead_kinetic_port_input'
  })
  event.shaped(Item.of('mm:ultra_dense_kinetic_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:ultra_dense',
    B: 'mekaevolution:absolute_control_circuit',
    C: 'mm:hardlead_kinetic_port_output'
  })
  event.shaped(Item.of('mm:ultra_dense_gas_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:ultra_dense',
    B: 'mekanism:basic_control_circuit',
    C: 'mekanism:dynamic_valve'
  })
  event.shaped(Item.of('mm:ultra_dense_gas_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:ultra_dense',
    B: 'mekanism:basic_control_circuit',
    C: 'mekanism:dynamic_tank'
  })
  event.shaped(Item.of('mm:ultra_dense_infuse_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:ultra_dense',
    B: 'mekanism:enriched_redstone',
    C: 'mekanism:dynamic_valve'
  })
  event.shaped(Item.of('mm:ultra_dense_infuse_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:ultra_dense',
    B: 'mekanism:enriched_redstone',
    C: 'mekanism:dynamic_tank'
  })
  event.shaped(Item.of('mm:ultra_dense_slurry_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:ultra_dense',
    B: 'mekanism:alloy_infused',
    C: 'mekanism:dynamic_valve'
  })
  event.shaped(Item.of('mm:ultra_dense_slurry_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:ultra_dense',
    B: 'mekanism:alloy_infused',
    C: 'mekanism:dynamic_tank'
  })

  //质子接口
  event.shaped(Item.of('mm:protonium_item_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:protonium',
    B: 'mekaevolution:cosmic_control_circuit',
    C: 'mm:overcharged_ultra_dense_item_port_output'
  })
  event.shaped(Item.of('mm:protonium_item_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:protonium',
    B: 'mekaevolution:cosmic_control_circuit',
    C: 'mm:overcharged_ultra_dense_item_port_input'
  })
  event.shaped(Item.of('mm:protonium_energy_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:protonium',
    B: 'mekaevolution:cosmic_control_circuit',
    C: 'mm:overcharged_ultra_dense_energy_port_input'
  })
  event.shaped(Item.of('mm:protonium_energy_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:protonium',
    B: 'mekaevolution:cosmic_control_circuit',
    C: 'mm:overcharged_ultra_dense_energy_port_output'
  })
  event.shaped(Item.of('mm:protonium_fluid_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:protonium',
    B: 'mekaevolution:cosmic_control_circuit',
    C: 'mm:overcharged_ultra_dense_fluid_port_input'
  })
  event.shaped(Item.of('mm:protonium_fluid_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:protonium',
    B: 'mekaevolution:cosmic_control_circuit',
    C: 'mm:overcharged_ultra_dense_fluid_port_output'
  })
  event.shaped(Item.of('mm:protonium_air_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:protonium',
    B: 'mekaevolution:cosmic_control_circuit',
    C: 'mm:overcharged_ultra_dense_air_port_output'
  })
  event.shaped(Item.of('mm:protonium_air_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:protonium',
    B: 'mekaevolution:cosmic_control_circuit',
    C: 'mm:overcharged_ultra_dense_air_port_input'
  })
  event.shaped(Item.of('mm:protonium_kinetic_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:protonium',
    B: 'mekaevolution:cosmic_control_circuit',
    C: 'mm:overcharged_ultra_dense_kinetic_port_input'
  })
  event.shaped(Item.of('mm:protonium_kinetic_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:protonium',
    B: 'mekaevolution:cosmic_control_circuit',
    C: 'mm:overcharged_ultra_dense_kinetic_port_output'
  })
  event.shaped(Item.of('mm:protonium_gas_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:protonium',
    B: 'mekanism:basic_control_circuit',
    C: 'mm:overcharged_ultra_dense_gas_port_input'
  })
  event.shaped(Item.of('mm:protonium_gas_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:protonium',
    B: 'mekanism:basic_control_circuit',
    C: 'mm:overcharged_ultra_dense_gas_port_output'
  })
  event.shaped(Item.of('mm:protonium_infuse_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:protonium',
    B: 'mekanism:enriched_redstone',
    C: 'mm:overcharged_ultra_dense_infuse_port_input'
  })
  event.shaped(Item.of('mm:protonium_infuse_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:protonium',
    B: 'mekanism:enriched_redstone',
    C: 'mm:overcharged_ultra_dense_infuse_port_output'
  })
  event.shaped(Item.of('mm:protonium_slurry_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:protonium',
    B: 'mekanism:alloy_infused',
    C: 'mm:overcharged_ultra_dense_slurry_port_input'
  })
  event.shaped(Item.of('mm:protonium_slurry_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: 'etshtinker:protonium',
    B: 'mekanism:alloy_infused',
    C: 'mm:overcharged_ultra_dense_slurry_port_output'
  })
  //一体式集成燃油发动机接口
  event.shaped(Item.of('mm:integrated_fuel_engine_item_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:storage_blocks/steel',
    B: '#forge:chests/wooden',
    C: 'minecraft:barrel'
  })
  event.shaped(Item.of('mm:integrated_fuel_engine_item_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:storage_blocks/steel',
    B: 'minecraft:hopper',
    C: 'minecraft:barrel'
  })
  event.shaped(Item.of('mm:integrated_fuel_engine_energy_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:storage_blocks/steel',
    B: 'thermal:rf_coil',
    C: 'thermal:energy_cell_frame'
  })
  event.shaped(Item.of('mm:integrated_fuel_engine_energy_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:storage_blocks/steel',
    B: 'thermal:redstone_servo',
    C: 'thermal:energy_cell_frame'
  })
  event.shaped(Item.of('mm:integrated_fuel_engine_fluid_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:storage_blocks/steel',
    B: 'thermal:redstone_servo',
    C: 'immersiveengineering:fluid_sorter'
  })
  event.shaped(Item.of('mm:integrated_fuel_engine_fluid_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:storage_blocks/steel',
    B: 'thermal:redstone_servo',
    C: 'thermal:fluid_cell_frame'
  })
  event.shaped(Item.of('mm:integrated_fuel_engine_kinetic_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:storage_blocks/steel',
    B: 'create:large_cogwheel',
    C: 'create:vertical_gearbox'
  })
  event.shaped(Item.of('mm:integrated_fuel_engine_kinetic_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:storage_blocks/steel',
    B: 'create:large_cogwheel',
    C: 'create:gearbox'
  })
  event.shaped(Item.of('mm:integrated_fuel_engine_air_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:storage_blocks/steel',
    B: 'pneumaticcraft:pressure_tube',
    C: 'pneumaticcraft:pressure_chamber_valve'
  })
  event.shaped(Item.of('mm:integrated_fuel_engine_air_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:storage_blocks/steel',
    B: 'pneumaticcraft:pressure_tube',
    C: 'pneumaticcraft:pressure_chamber_wall'
  })
  event.shaped(Item.of('mm:integrated_fuel_engine_gas_port_input',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:storage_blocks/steel',
    B: 'mekanism:basic_control_circuit',
    C: 'mekanism:dynamic_valve'
  })
  event.shaped(Item.of('mm:integrated_fuel_engine_gas_port_output',1), [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:storage_blocks/steel',
    B: 'mekanism:basic_control_circuit',
    C: 'mekanism:dynamic_tank'
  })
  
})