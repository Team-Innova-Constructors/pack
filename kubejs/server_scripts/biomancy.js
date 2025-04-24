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
  const recipes = [
    {
      items: [
        { item: "biomancy:gem_fragments", count: 2 },
        { item: "biomancy:stone_powder", count: 5 },
        { item: "biomancy:mineral_fragment", count: 1 },
        { item: "biomancy:exotic_dust", count: 2 },
        { item: "create:powdered_obsidian", count: 4 }
      ],
      result: "thermal:basalz_rod",
      nutrients: 1
    },
    {
      items: [
        { item: "minecraft:sand", count: 2 },
        { item: "biomancy:stone_powder", count: 5 },
        { item: "biomancy:bio_lumens", count: 1 },
        { item: "biomancy:exotic_dust", count: 2 },
        { item: "biomancy:volatile_fluid", count: 2 }
      ],
      result: "thermal:blitz_rod",
      nutrients: 1
    },
    {
      items: [
        { item: "powah:dry_ice", count: 2 },
        { item: "biomancy:stone_powder", count: 5 },
        { item: "biomancy:bio_lumens", count: 2 },
        { item: "biomancy:exotic_dust", count: 2 },
        { item: "minecraft:snowball", count: 4 }
      ],
      result: "thermal:blizz_rod",
      nutrients: 1
    },
    {
      items: [
        { item: "biomancy:flesh_bits", count: 14 },
        { item: "biomancy:withering_ooze", count: 6 },
        { item: "biomancy:nutrients", count: 28 },
        { item: "biomancy:bone_fragments", count: 5 },
        { item: "biomancy:creator_mix" }
      ],
      result: "solidarytinker:bloodmeat_ingot",
      nutrients: 100
    },
    {
      items: [
        { item: "biomancy:exotic_dust", count: 3 },
        { item: "biomancy:bio_lumens", count: 1 }
      ],
      result: "minecraft:ender_pearl",
      nutrients: 1
    },
    {
      items: [
        { item: "biomancy:organic_matter", count: 14 },
        { item: "biomancy:mineral_fragment", count: 6 },
        { item: "biomancy:stone_powder", count: 5 }
      ],
      result: "minecraft:sponge",
      nutrients: 1
    }
  ];
  recipes.forEach(recipe => {
    event.custom({
      type: "biomancy:bio_forging",
      bio_forge_tab: "biomancy:misc",
      ingredients: recipe.items,
      nutrientsCost: recipe.nutrients,
      result: { item: recipe.result }
    });
  });
});