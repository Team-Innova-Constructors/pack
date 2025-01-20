ServerEvents.recipes(event => {
  event.replaceInput({mod:'appbot',type:'crafting_shaped',output:'appbot:mana_cell_housing'}, 'botania:life_essence','botania:quartz_mana')
  event.smithing('projecte:rm_helmet','projecte:dm_helmet','projecte:red_matter_block')
  event.smithing('projecte:rm_chestplate','projecte:dm_chestplate','projecte:red_matter_block')
  event.smithing('projecte:rm_leggings','projecte:dm_leggings','projecte:red_matter_block')
  event.smithing('projecte:rm_boots','projecte:dm_boots','projecte:red_matter_block')
  event.recipes.botania.mana_infusion('iceandfire:dread_shard', 'botania:quartz_dark', 20000)
  event.recipes.botania.mana_infusion('projecte:alchemical_coal', ['minecraft:coal'], 12500, 'kubejs:philosophers_catalyst')
  event.recipes.botania.mana_infusion('projecte:mobius_fuel', ['projecte:alchemical_coal'], 50000, 'kubejs:philosophers_catalyst')
  event.recipes.botania.mana_infusion('projecte:aeternalis_fuel', ['projecte:mobius_fuel'], 200000, 'kubejs:philosophers_catalyst')
  event.recipes.botania.mana_infusion('ae2:certus_quartz_crystal', ['minecraft:lapis_lazuli'], 4000)
  event.recipes.botania.mana_infusion('kubejs:dust_mana', ['etshtinker:os_induced_netherstarshard'], 10000)
  event.recipes.botania.terra_plate('dreadsteel:dreadsteel_ingot', ['minecraft:blaze_powder', 'tinkerscalibration:witherium_ingot', 'tinkerscalibration:witherium_ingot', 'botania:elementium_ingot', 'iceandfire:dread_shard', 'iceandfire:dread_shard'], 500000)
  event.recipes.botania.terra_plate('solidarytinker:magicuranium_ingot', ['#forge:ingots/uranium', 'cti:magic_crystal', 'botania:manasteel_ingot', 'botanicalmachinery:mana_emerald'], 250000)
  event.recipes.botania.terra_plate('projecte:red_matter', ['etshtinker:evil_orb', 'cti:magic_crystal', 'projecte:dark_matter', 'botania:quartz_red'], 500000)
  event.recipes.botania.terra_plate('projecte:dm_helmet', ['botania:terrasteel_helmet', 'projecte:dark_matter_block', 'mythicbotany:asgard_rune', 'mythicbotany:helheim_rune','mythicbotany:vanaheim_rune','projecte:dark_matter_block'], 1000000)
  event.recipes.botania.terra_plate('projecte:dm_chestplate', ['botania:terrasteel_chestplate', 'projecte:dark_matter_block', 'mythicbotany:midgard_rune', 'mythicbotany:helheim_rune','mythicbotany:alfheim_rune','projecte:dark_matter_block'], 1000000)
  event.recipes.botania.terra_plate('projecte:dm_leggings', ['botania:terrasteel_leggings', 'projecte:dark_matter_block', 'mythicbotany:muspelheim_rune', 'mythicbotany:helheim_rune','mythicbotany:joetunheim_rune','projecte:dark_matter_block'], 1000000)
  event.recipes.botania.terra_plate('projecte:dm_boots', ['botania:terrasteel_boots', 'projecte:dark_matter_block', 'mythicbotany:helheim_rune', 'mythicbotany:nidavellir_rune','mythicbotany:vanaheim_rune','projecte:dark_matter_block'], 1000000)
  event.shaped(Item.of('kubejs:philosophers_catalyst', 1), [
    'ABA',
    'BCB',
    'ABA'
  ],
    {
      A: 'minecraft:glowstone_dust',
      B: 'minecraft:diamond',
      C: 'botania:alchemy_catalyst'
    })
  event.custom({
    "type": "mythicbotany:infuser",
    "fromColor": 3683394,
    "group": "infuser",
    "ingredients": [
      {
        "item": "projecte:dark_matter"
      },
      {
        "item": "cti:magic_crystal"
      },
      {
        "item": "etshtinker:evil_orb"
      },
      {
        "item": "botania:quartz_red"
      },
    ],
    "mana": 500000,
    "output": {
      "count": 1,
      "item": "projecte:red_matter"
    },
    "toColor": 16729871
  })
})