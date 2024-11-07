ServerEvents.recipes(event => {
    event.recipes.botania.mana_infusion('iceandfire:dread_shard','botania:quartz_dark',20000)
    event.recipes.botania.mana_infusion('projecte:alchemical_coal',['minecraft:coal'],12500,'kubejs:philosophers_catalyst')
    event.recipes.botania.mana_infusion('projecte:mobius_fuel',['projecte:alchemical_coal'],50000,'kubejs:philosophers_catalyst')
    event.recipes.botania.mana_infusion('projecte:aeternalis_fuel',['projecte:mobius_fuel'],200000,'kubejs:philosophers_catalyst')
    event.recipes.botania.terra_plate('dreadsteel:dreadsteel_ingot',['minecraft:blaze_powder','tinkerscalibration:witherium_ingot','tinkerscalibration:witherium_ingot','botania:elementium_ingot','iceandfire:dread_shard','iceandfire:dread_shard'],500000)
    event.recipes.botania.terra_plate('solidarytinker:magicuranium_ingot',['#forge:ingots/uranium','cti:magic_crystal','botania:manasteel_ingot','botanicalmachinery:mana_emerald'],250000)

    event.shaped(Item.of('kubejs:philosophers_catalyst',1), [
        'ABA',
        'BCB',
        'ABA'
      ],
      {
        A: 'minecraft:glowstone_dust',
        B: 'minecraft:diamond',
        C: 'botania:alchemy_catalyst'
      })
})