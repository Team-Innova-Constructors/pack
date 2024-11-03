ServerEvents.recipes(event => {
  event.smithing(Item.of('immersiveengineering:graphite_electrode').withNBT('{Unbreakable:1b}'),'immersiveengineering:graphite_electrode','l2complements:eternium_ingot')
  event.recipes.immersiveengineeringBlastFurnaceFuel('thermal:tar').time(600)
})