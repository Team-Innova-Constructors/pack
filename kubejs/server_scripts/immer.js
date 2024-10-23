ServerEvents.recipes(event => {
      event.shaped(Item.of('immersiveengineering:graphite_electrode').withNBT('{Unbreakable:1b}'),[
    'ACA',
    'DBD',
    'AEA'

  ],
  {
    A: 'minecraft:iron_ingot',
    B: 'l2hostility:chaos_ingot',
    C: 'l2hostility:counter_strike',
    D: 'l2complements:cursed_droplet',
    E: 'l2hostility:nausea'
  })
  event.smithing(Item.of('immersiveengineering:graphite_electrode').withNBT('{Unbreakable:1b}'),'immersiveengineering:graphite_electrode','l2complements:eternium_ingot')
})