ServerEvents.recipes(event => {
  event.smithing(Item.of('immersiveengineering:graphite_electrode').withNBT('{Unbreakable:1b}'),'immersiveengineering:graphite_electrode','l2complements:eternium_ingot')
  event.recipes.immersiveengineeringBlastFurnaceFuel('thermal:tar').time(600)
  event.recipes.immersiveengineeringBlastFurnace('immersiveengineering:ingot_steel','minecraft:iron_ingot','immersiveengineering:slag').time(600)
  event.recipes.immersiveengineeringBlastFurnace('immersiveengineering:storage_steel','minecraft:iron_block','9x immersiveengineering:slag').time(5400)
})