ServerEvents.recipes(event => {
    event.recipes.botania.mana_infusion('iceandfire:dread_shard','botania:quartz_dark',20000)
    event.recipes.botania.mana_infusion('projecte:alchemical_coal',['minecraft:coal'],12500,'kubejs:philosophers_catalyst')
    event.recipes.botania.mana_infusion('projecte:mobius_fuel',['projecte:alchemical_coal'],50000,'kubejs:philosophers_catalyst')
    event.recipes.botania.mana_infusion('projecte:aeternalis_fuel',['projecte:mobius_fuel'],200000,'kubejs:philosophers_catalyst')
    event.recipes.botania.terra_plate('dreadsteel:dreadsteel_ingot',['minecraft:blaze_powder','tinkerscalibration:witherium_ingot','tinkerscalibration:witherium_ingot','tinkers_ingenuity:orichalcum_ingot','iceandfire:dread_shard','iceandfire:dread_shard'],1000000)
})