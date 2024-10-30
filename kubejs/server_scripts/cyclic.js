ServerEvents.recipes(event => {
  event.replaceInput({mod: 'cyclic', id: 'cyclic:crusher/netherrack' }, 'minecraft:blaze_rod','minecraft:blaze_powder')
  event.replaceInput({mod: 'cyclic', id: 'cyclic:anvil' }, 'minecraft:diamond','minecraft:diamond_block')

})