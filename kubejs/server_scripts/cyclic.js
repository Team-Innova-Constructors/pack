ServerEvents.recipes(event => {
  event.replaceInput({mod: 'cyclic', id: 'cyclic:crusher/netherrack' }, 'minecraft:blaze_rod','minecraft:blaze_powder')
  event.replaceInput({mod: 'cyclic', id: 'cyclic:anvil' }, 'minecraft:diamond','minecraft:diamond_block')
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