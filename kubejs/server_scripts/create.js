ServerEvents.recipes(event => {
    //压块塑性
    event.recipes.create.compacting([Item.of('immersiveengineering:blastbrick',3)], ['5x minecraft:nether_brick', '3x minecraft:brick',Fluid.of('tconstruct:blazing_blood').withAmount(1000)])
    event.recipes.create.filling('cti:ethanol_absolute', [Fluid.of('immersiveengineering:ethanol').withAmount(250),'brewinandchewin:tankard'])
    event.recipes.create.mixing(Fluid.of('cherrytinker:sun_cherryfuel').withAmount(1000), [Fluid.of('tconstruct:blazing_blood').withAmount(1000),'cherrytinker:cherrygem']).heated()
    event.recipes.create.sequenced_assembly([
    Item.of('mekanism:mekasuit_helmet')
]  ,Item.of('pneumaticcraft:pneumatic_helmet'), [
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:stablized_exotic_matter').withAmount(1000)]),
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:molten_stellaralloy').withAmount(810)]),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:electronium_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'avaritia:crystal_matrix']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:protonium_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekaevolution:cosmic_control_circuit']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekanism:ultimate_induction_cell']),
]).transitionalItem('kubejs:incomplete_mekasuit').loops(10)
    event.recipes.create.sequenced_assembly([
    Item.of('mekanism:mekasuit_bodyarmor')
]  ,Item.of('pneumaticcraft:pneumatic_chestplate'), [
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:stablized_exotic_matter').withAmount(1000)]),
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('solidarytinker:molten_dwarf').withAmount(810)]),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:stellaralloy_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:atherium_casing']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:protonium_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekaevolution:cosmic_control_circuit']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekanism:ultimate_induction_cell']),
]).transitionalItem('kubejs:incomplete_mekasuit').loops(16)
    event.recipes.create.sequenced_assembly([
    Item.of('mekanism:mekasuit_pants')
]  ,Item.of('pneumaticcraft:pneumatic_leggings'), [
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:stablized_exotic_matter').withAmount(1000)]),
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('solidarytinker:molten_extremelycoldsteel').withAmount(810)]),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'etshtinker:trinity_intereactive_alloy']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'avaritia:crystal_matrix']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:protonium_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekaevolution:cosmic_control_circuit']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekanism:ultimate_induction_cell']),
]).transitionalItem('kubejs:incomplete_mekasuit').loops(14)
    event.recipes.create.sequenced_assembly([
    Item.of('mekanism:mekasuit_boots')
]  ,Item.of('pneumaticcraft:pneumatic_boots'), [
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:stablized_exotic_matter').withAmount(1000)]),
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:overchargedneutronium').withAmount(1000)]),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'tinkersinnovation:decline_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:ultra_dense_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:protonium_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekaevolution:cosmic_control_circuit']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekanism:ultimate_induction_cell']),
]).transitionalItem('kubejs:incomplete_mekasuit').loops(8)
    event.recipes.create.sequenced_assembly([
    Item.of('kubejs:living_control_circuit')
]  ,Item.of('mekanism:ultimate_control_circuit'), [
    event.recipes.createCutting('kubejs:incomplete_living_control_circuit', 'kubejs:incomplete_living_control_circuit'),
    event.recipes.createDeploying('kubejs:incomplete_living_control_circuit', ['kubejs:incomplete_living_control_circuit', 'biomancy:flesh_bits']),
    event.recipes.createDeploying('kubejs:incomplete_living_control_circuit', ['kubejs:incomplete_living_control_circuit', 'biomancy:flesh_bits']),
    event.recipes.createDeploying('kubejs:incomplete_living_control_circuit', ['kubejs:incomplete_living_control_circuit', 'biomancy:elastic_fibers']),
    event.recipes.createDeploying('kubejs:incomplete_living_control_circuit', ['kubejs:incomplete_living_control_circuit', 'biomancy:regenerative_fluid']),
    event.recipes.create.filling( 'kubejs:incomplete_living_control_circuit', ['kubejs:incomplete_living_control_circuit', Fluid.of('biomancy:acid').withAmount(1000)]),
]).transitionalItem('kubejs:incomplete_mekasuit').loops(2)

//简化精密构建
event.recipes.create.sequenced_assembly([
    Item.of('create:precision_mechanism')
]  ,Item.of("#forge:plates/gold"), [
    event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
    event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
    event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:nuggets/iron']),
]).transitionalItem('create:incomplete_precision_mechanism').loops(3)

event.recipes.create.sequenced_assembly([
    Item.of('createutilities:void_steel_ingot')
]  ,Item.of('thermal:steel_ingot'), [
    event.recipes.createDeploying('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', 'minecraft:ender_pearl']),
    event.recipes.createDeploying('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', 'create:sturdy_sheet']),
    event.recipes.create.filling('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', Fluid.of('tconstruct:blazing_blood').withAmount(1000)]),
    event.recipes.createPressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet'),
]).transitionalItem('create:unprocessed_obsidian_sheet').loops(2)

event.shaped(Item.of('createoreexcavation:vein_finder',1), [
        'DC ',
        'BA ',
        '  A'
    ],
    {
        A: 'minecraft:stick',
        B: 'minecraft:amethyst_shard',
        C: 'minecraft:emerald',
        D: 'minecraft:ender_eye',
    })
//烈光合金部件
event.recipes.create.deploying([Item.of('tconstruct:helmet_plating', '{Material:"cti:xenoglarium"}').withChance(0.2),Item.of('tconstruct:chestplate_plating', '{Material:"cti:xenoglarium"}').withChance(0.2),Item.of('tconstruct:leggings_plating', '{Material:"cti:xenoglarium"}').withChance(0.2),Item.of('tconstruct:boots_plating', '{Material:"cti:xenoglarium"}').withChance(0.2),Item.of('etshtinker:ionizer', '{Material:"cti:xenoglarium"}').withChance(0.05),Item.of('etshtinker:plasma_generator', '{Material:"cti:xenoglarium"}').withChance(0.05)], ['etshtinker:stellaralloy', 'cti:xenoglarium_ingot'])
event.recipes.createMechanicalCrafting('cti:roxy_ingot', [
  'AABAA',
  'ACDEA',
  'AAFAA'
], {
  A: 'ae2:not_so_mysterious_cube',
  B: 'ars_nouveau:apprentice_hood',
  C: 'l2complements:poseidite_ingot',
  D: 'dummmmmmy:target_dummy',
  E: 'etshtinker:electronium',
  F: 'ae2:item_storage_cell_256k'
})

})