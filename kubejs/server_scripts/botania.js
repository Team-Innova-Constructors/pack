ServerEvents.recipes(event => {
  event.smithing('projecte:rm_helmet','projecte:dm_helmet','projecte:red_matter_block')
  event.smithing('projecte:rm_chestplate','projecte:dm_chestplate','projecte:red_matter_block')
  event.smithing('projecte:rm_leggings','projecte:dm_leggings','projecte:red_matter_block')
  event.smithing('projecte:rm_boots','projecte:dm_boots','projecte:red_matter_block')
  event.recipes.botania.mana_infusion('iceandfire:dread_shard', 'botania:quartz_dark', 20000)
  event.recipes.botania.mana_infusion('projecte:alchemical_coal', ['minecraft:coal'], 12500, 'kubejs:philosophers_catalyst')
  event.recipes.botania.mana_infusion('projecte:mobius_fuel', ['projecte:alchemical_coal'], 50000, 'kubejs:philosophers_catalyst')
  event.recipes.botania.mana_infusion('projecte:aeternalis_fuel', ['projecte:mobius_fuel'], 200000, 'kubejs:philosophers_catalyst')
  event.recipes.botania.terra_plate('dreadsteel:dreadsteel_ingot', ['minecraft:blaze_powder', 'tinkerscalibration:witherium_ingot', 'tinkerscalibration:witherium_ingot', 'botania:elementium_ingot', 'iceandfire:dread_shard', 'iceandfire:dread_shard'], 500000)
  event.recipes.botania.terra_plate('solidarytinker:magicuranium_ingot', ['#forge:ingots/uranium', 'cti:magic_crystal', 'botania:manasteel_ingot', 'botanicalmachinery:mana_emerald'], 250000)
  event.recipes.botania.terra_plate('projecte:red_matter', ['etshtinker:evil_orb', 'cti:magic_crystal', 'projecte:dark_matter', 'botania:quartz_red'], 500000)

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
    "fromColor": 4521776,
    "group": "infuser",
    "ingredients": [
      {
        "item": "botania:terrasteel_helmet"
      },
      {
        "item": "projecte:dark_matter_block"
      },
      {
        "item": "mythicbotany:asgard_rune"
      },
      {
        "item": "mythicbotany:helheim_rune"
      },
      {
        "item": "mythicbotany:vanaheim_rune"
      },
      {
        "item": "projecte:dark_matter_block"
      }
    ],
    "mana": 4000000,
    "output": {
      "count": 1,
      "item": "projecte:dm_helmet"
    },
    "toColor": 3683394
  })
  event.custom({
    "type": "mythicbotany:infuser",
    "fromColor": 4521776,
    "group": "infuser",
    "ingredients": [
      {
        "item": "botania:terrasteel_chestplate"
      },
      {
        "item": "projecte:dark_matter_block"
      },
      {
        "item": "mythicbotany:midgard_rune"
      },
      {
        "item": "mythicbotany:helheim_rune"
      },
      {
        "item": "mythicbotany:alfheim_rune"
      },
      {
        "item": "projecte:dark_matter_block"
      }
    ],
    "mana": 4000000,
    "output": {
      "count": 1,
      "item": "projecte:dm_chestplate"
    },
    "toColor": 3683394
  })
  event.custom({
    "type": "mythicbotany:infuser",
    "fromColor": 4521776,
    "group": "infuser",
    "ingredients": [
      {
        "item": "botania:terrasteel_leggings"
      },
      {
        "item": "projecte:dark_matter_block"
      },
      {
        "item": "mythicbotany:muspelheim_rune"
      },
      {
        "item": "mythicbotany:helheim_rune"
      },
      {
        "item": "mythicbotany:joetunheim_rune"
      },
      {
        "item": "projecte:dark_matter_block"
      }
    ],
    "mana": 4000000,
    "output": {
      "count": 1,
      "item": "projecte:dm_leggings"
    },
    "toColor": 3683394
  })
  event.custom({
    "type": "mythicbotany:infuser",
    "fromColor": 4521776,
    "group": "infuser",
    "ingredients": [
      {
        "item": "botania:terrasteel_boots"
      },
      {
        "item": "projecte:dark_matter_block"
      },
      {
        "item": "mythicbotany:niflheim_rune"
      },
      {
        "item": "mythicbotany:helheim_rune"
      },
      {
        "item": "mythicbotany:nidavellir_rune"
      },
      {
        "item": "projecte:dark_matter_block"
      }
    ],
    "mana": 4000000,
    "output": {
      "count": 1,
      "item": "projecte:dm_boots"
    },
    "toColor": 3683394
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
    "mana": 1000000,
    "output": {
      "count": 1,
      "item": "projecte:red_matter"
    },
    "toColor": 16729871
  })
})