ServerEvents.recipes(event => {
    //压块塑性
    event.recipes.create.compacting([Item.of('immersiveengineering:blastbrick',3)], ['5x minecraft:nether_brick', '3x minecraft:brick',Fluid.of('tconstruct:blazing_blood').withAmount(1000)])
    event.recipes.create.filling('cti:ethanol_absolute', [Fluid.of('immersiveengineering:ethanol').withAmount(250),'brewinandchewin:tankard'])
    event.recipes.create.sequenced_assembly([
    Item.of('mekanism:mekasuit_helmet')
]  ,Item.of('pneumaticcraft:pneumatic_helmet'), [
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:unstable_exotic_matter').withAmount(1000)]),
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:molten_stellaralloy').withAmount(450)]),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:electronium_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'etshtinker:activated_chroma_plate']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekaevolution:cosmic_control_circuit']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekanism:ultimate_induction_cell']),
]).transitionalItem('kubejs:incomplete_mekasuit').loops(5)
    event.recipes.create.sequenced_assembly([
    Item.of('mekanism:mekasuit_bodyarmor')
]  ,Item.of('pneumaticcraft:pneumatic_chestplate'), [
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:unstable_exotic_matter').withAmount(1000)]),
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('solidarytinker:molten_dwarf').withAmount(450)]),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'etshtinker:stellaralloy']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:graphene']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'projecte:dark_matter_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekaevolution:cosmic_control_circuit']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekanism:ultimate_induction_cell']),
]).transitionalItem('kubejs:incomplete_mekasuit').loops(8)
    event.recipes.create.sequenced_assembly([
    Item.of('mekanism:mekasuit_pants')
]  ,Item.of('pneumaticcraft:pneumatic_leggings'), [
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:unstable_exotic_matter').withAmount(1000)]),
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('solidarytinker:molten_extremelycoldsteel').withAmount(450)]),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'immersiveengineering:ingot_hop_graphite']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'avaritia:crystal_matrix']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekanism:block_refined_obsidian']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekaevolution:cosmic_control_circuit']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekanism:ultimate_induction_cell']),
]).transitionalItem('kubejs:incomplete_mekasuit').loops(7)
    event.recipes.create.sequenced_assembly([
    Item.of('mekanism:mekasuit_boots')
]  ,Item.of('pneumaticcraft:pneumatic_boots'), [
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:unstable_exotic_matter').withAmount(1000)]),
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('tinkerscalibration:moltenmoonsteel').withAmount(450)]),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'tinkersinnovation:decline_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'kubejs:protonium_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekaevolution:cosmic_control_circuit']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekanism:ultimate_induction_cell']),
]).transitionalItem('kubejs:incomplete_mekasuit').loops(4)
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