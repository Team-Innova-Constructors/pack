ServerEvents.recipes(event => {
    event.recipes.create.sequenced_assembly([
    Item.of('mekanism:mekasuit_helmet')
]  ,Item.of('aquamirae:abyssal_heaume'), [
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:unstable_exotic_matter').withAmount(1500)]),
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:molten_stellaralloy').withAmount(360)]),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'etshtinker:activated_chroma_plate']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekaevolution:cosmic_control_circuit']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekanism:basic_induction_cell']),
]).transitionalItem('kubejs:incomplete_mekasuit').loops(5)
    event.recipes.create.sequenced_assembly([
    Item.of('mekanism:mekasuit_bodyarmor')
]  ,Item.of('aquamirae:abyssal_brigantine'), [
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:unstable_exotic_matter').withAmount(1500)]),
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('solidarytinker:molten_dwarf').withAmount(360)]),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'tinkers_ingenuity:bedrock_alloy_block']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'etshtinker:activated_chroma_plate']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekaevolution:cosmic_control_circuit']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekanism:basic_induction_cell']),
]).transitionalItem('kubejs:incomplete_mekasuit').loops(8)
    event.recipes.create.sequenced_assembly([
    Item.of('mekanism:mekasuit_pants')
]  ,Item.of('aquamirae:abyssal_leggings'), [
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:unstable_exotic_matter').withAmount(1500)]),
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:molten_stellaralloy').withAmount(360)]),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'immersiveengineering:ingot_hop_graphite']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'etshtinker:activated_chroma_plate']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekaevolution:cosmic_control_circuit']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekanism:basic_induction_cell']),
]).transitionalItem('kubejs:incomplete_mekasuit').loops(7)
    event.recipes.create.sequenced_assembly([
    Item.of('mekanism:mekasuit_boots')
]  ,Item.of('aquamirae:abyssal_boots'), [
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:unstable_exotic_matter').withAmount(1500)]),
    event.recipes.create.filling( 'kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', Fluid.of('etshtinker:molten_stellaralloy').withAmount(360)]),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'immersiveengineering:ingot_hop_graphite']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'etshtinker:activated_chroma_plate']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekaevolution:cosmic_control_circuit']),
    event.recipes.createDeploying('kubejs:incomplete_mekasuit', ['kubejs:incomplete_mekasuit', 'mekanism:basic_induction_cell']),
]).transitionalItem('kubejs:incomplete_mekasuit').loops(4)
})