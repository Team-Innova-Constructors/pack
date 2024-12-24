ServerEvents.recipes(event => {
  event.replaceInput({mod: 'cyclic', id: 'cyclic:crusher/netherrack' }, 'minecraft:blaze_rod','minecraft:blaze_powder')
  event.replaceInput({mod: 'cyclic', id: 'cyclic:anvil' }, 'minecraft:diamond','minecraft:diamond_block')
  event.replaceInput({mod: 'cyclic', id: 'cyclic:charm_invisible'}, 'cyclic:sleeping_mat','#aether:accessories_capes')
  event.replaceInput({mod: 'cyclic', id: 'cyclic:wireless_fluid' }, 'cyclic:gem_amber','tinkers_thinking:tinkers_bronze_ingot')
  event.shaped(Item.of('cyclic:water_candle', 1), [
      ' A ',
      'CBC',
      'CCC'
   ],
      {
         A: '#minecraft:candles',
         B: 'minecraft:ice',
         C: 'minecraft:iron_ingot',
      }
   )
   event.shaped(Item.of('cyclic:peace_candle', 1), [
      ' A ',
      'CBC',
      'CCC'
   ],
      {
         A: '#minecraft:candles',
         B: 'minecraft:ice',
         C: 'minecraft:gold_ingot',
      }
   )
})