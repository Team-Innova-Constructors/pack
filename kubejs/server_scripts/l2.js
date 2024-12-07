ServerEvents.recipes(event => {

  event.shaped(Item.of('l2hostility:curse_of_wrath', 1), [
    'ACA',
    'DBD',
    'AEA'
  ],
    {
      A: 'minecraft:iron_ingot',
      B: 'l2hostility:chaos_ingot',
      C: 'l2hostility:blindness',
      D: 'l2complements:cursed_droplet',
      E: 'l2hostility:nausea'
    }
  )
})