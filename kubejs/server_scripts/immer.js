ServerEvents.recipes(event => {
  event.recipes.immersiveengineeringBlastFurnaceFuel('thermal:tar').time(600)
  event.recipes.immersiveengineeringBlastFurnaceFuel('gobber2:gobber2_foo').time(24000)
  event.recipes.immersiveengineeringBlastFurnaceFuel('gobber2:gobber2_foo_nether').time(36000)
  event.recipes.immersiveengineeringBlastFurnaceFuel('gobber2:gobber2_foo_end').time(48000)
  event.recipes.immersiveengineeringBlastFurnace('immersiveengineering:ingot_steel','minecraft:iron_ingot','immersiveengineering:slag').time(600)
  event.recipes.immersiveengineeringBlastFurnace('immersiveengineering:storage_steel','minecraft:iron_block','9x immersiveengineering:slag').time(5400)
})