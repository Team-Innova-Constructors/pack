ServerEvents.recipes(event => {
  event.shaped(Item.of('biomancy:primordial_core', 1), [
    'BBB',
    'BAB',
    'BBB'
  ],
    {
      A: 'minecraft:spider_eye',
      B: '#biomancy:raw_meats',
    }
  )
  event.custom({
    "type": "biomancy:bio_forging",
    "bio_forge_tab": "biomancy:misc",
    "ingredients": [
      {
        "item": "biomancy:gem_fragments",
        "count": 2
      },
      {
        "item": "biomancy:stone_powder",
        "count": 5
      },
      {
        "item": "biomancy:mineral_fragment",
        "count": 1
      },
      {
        "item": "biomancy:exotic_dust",
        "count": 2
      },
      {
        "item": "create:powdered_obsidian",
        "count": 4
      }
    ],
    "nutrientsCost": 1,
    "result": {
      "item": "thermal:basalz_rod"
    }
  })
  event.custom({

    "type": "biomancy:bio_forging",
    "bio_forge_tab": "biomancy:misc",
    "ingredients": [
      {
        "item": "botania:mana_powder",
        "count": 2
      },
      {
        "item": "biomancy:stone_powder",
        "count": 5
      },
      {
        "item": "biomancy:bio_lumens",
        "count": 1
      },
      {
        "item": "biomancy:exotic_dust",
        "count": 2
      },
      {
        "item": "biomancy:volatile_fluid",
        "count": 2
      }
    ],
    "nutrientsCost": 1,
    "result": {
      "item": "thermal:blitz_rod"
    },
  })
  event.custom({
    "type": "biomancy:bio_forging",
    "bio_forge_tab": "biomancy:misc",
    "ingredients": [
      {
        "item": "powah:dry_ice",
        "count": 2
      },
      {
        "item": "biomancy:stone_powder",
        "count": 5
      },
      {
        "item": "biomancy:bio_lumens",
        "count": 2
      },
      {
        "item": "biomancy:exotic_dust",
        "count": 2
      },
      {
        "item": "minecraft:snowball",
        "count": 4
      }
    ],
    "nutrientsCost": 1,
    "result": {
      "item": "thermal:blizz_rod"
    },
  })
  event.custom({
    "type": "biomancy:bio_forging",
    "bio_forge_tab": "biomancy:misc",
    "ingredients": [
      {
        "item": "biomancy:flesh_bits",
        "count": 14
      },
      {
        "item": "biomancy:withering_ooze",
        "count": 6
      },
      {
        "item": "biomancy:nutrients",
        "count": 28
      },
      {
        "item": "biomancy:bone_fragments",
        "count": 5
      },
      {
        "item": "biomancy:creator_mix"
      }
    ],
    "nutrientsCost": 100,
    "result": {
      "item": "solidarytinker:bloodmeat_ingot"
    }
  })
  event.custom({
    "type": "biomancy:bio_forging",
    "bio_forge_tab": "biomancy:misc",
    "ingredients": [
      {
        "item": "biomancy:exotic_dust",
        "count": 3
      },
      {
        "item": "biomancy:bio_lumens",
        "count": 1
      }
    ],
    "nutrientsCost": 1,
    "result": {
      "item": "minecraft:ender_pearl"
    },
  })
  event.custom({
    "type": "biomancy:bio_forging",
    "bio_forge_tab": "biomancy:misc",
    "ingredients": [
      {
        "item": "biomancy:organic_matter",
        "count": 14
      },
      {
        "item": "biomancy:mineral_fragment",
        "count": 6
      },
      {
        "item": "biomancy:stone_powder",
        "count": 5
      }
    ],
    "nutrientsCost": 1,
    "result": {
      "item": "minecraft:sponge"
    }
  })
})