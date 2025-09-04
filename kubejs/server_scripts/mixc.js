ServerEvents.recipes(event => {
   event.smithing('toms_storage:ts.adv_wireless_terminal','toms_storage:ts.wireless_terminal','tinkers_thinking:obsidian_bronze_ingot')
   //超致密互换
   event.shapeless('9x kubejs:ultra_dense_nugget', 'etshtinker:ultra_dense')
   event.shapeless('etshtinker:ultra_dense', '9x kubejs:ultra_dense_nugget')
   event.shapeless('9x etshtinker:ultra_dense', 'kubejs:ultra_dense_block')
   event.shapeless('kubejs:ultra_dense_block', '9x etshtinker:ultra_dense')
   //质子电子
   event.shapeless('9x etshtinker:protonium', 'kubejs:protonium_block')
   event.shapeless('kubejs:protonium_block', '9x etshtinker:protonium')
   event.shapeless('9x kubejs:protonium_nugget', 'etshtinker:protonium')
   event.shapeless('etshtinker:protonium', '9x kubejs:protonium_nugget')
   event.shapeless('9x etshtinker:electronium', 'kubejs:electronium_block')
   event.shapeless('kubejs:electronium_block', '9x etshtinker:electronium')
   //其它金属
   event.shapeless('9x etshtinker:stellaralloy', 'kubejs:stellaralloy_block')
   event.shapeless('kubejs:stellaralloy_block', '9x etshtinker:stellaralloy')
   //管道替换
   event.replaceInput({mod:'pipez',type:'crafting_shaped',output:'pipez:advanced_upgrade'}, 'minecraft:redstone_block','minecraft:redstone')
   event.replaceInput({mod:'pipez',type:'crafting_shaped',output:'pipez:advanced_upgrade'}, 'minecraft:diamond','minecraft:lapis_lazuli')
   event.replaceInput({mod:'pipez',type:'crafting_shaped',output:'pipez:ultimate_upgrade'}, 'minecraft:redstone_block','minecraft:redstone')
   event.replaceInput({mod:'pipez',type:'crafting_shaped',output:'pipez:ultimate_upgrade'}, 'minecraft:netherite_ingot','tinkers_thinking:obsidian_bronze_ingot')
   event.replaceInput({mod:'farmingforblockheads',type:'crafting_shaped',output: 'farmingforblockheads:market'}, '#minecraft:planks','create:andesite_alloy')
   let dye=[
      'black_dye',
      'blue_dye',
      'red_dye',
      'green_dye'
    ]
    for(let i of dye){
      event.replaceInput({mod:'sfm',type:'crafting_shaped'}, 'minecraft:'+`${i}`,'#forge:dyes')
    }
   event.shapeless('9x etshtinker:blitz_lumium', 'kubejs:blitz_luminium_block')
   event.shapeless('kubejs:blitz_luminium_block', '9x etshtinker:blitz_lumium')
   //星图
   event.shaped(Item.of('cti:astra_tablet_5', 1), [
      'AAA',
      'ABA',
      'AAA'
   ],
      {
         A: '#forge:plates/steel',
         B: 'ad_astra:steel_cable',
      }
   )
   event.shaped(Item.of('cherrytinker:enchantedgold_block', 4), [
      'AAA',
      'ABA',
      'AAA'
   ],
      {
         B: 'minecraft:enchanted_golden_apple',
         A: 'l2complements:totemic_gold_block',
      }
   )
   //桌子
   let table = [
      'extendedcrafting:basic_table',
      'extendedcrafting:advanced_table',
      'extendedcrafting:elite_table',
      'extendedcrafting:ultimate_table'
   ]
   for (let i of table) { event.remove({ id: `${i}` }) }
   //铝热剂
   event.shaped(Item.of('kubejs:thermite', 4), [
      'BAB',
      'ABA',
      'BAB'
   ],
      {
         A: '#forge:dusts/aluminum',
         B: 'create:crushed_raw_iron',
      }
   )
   //鸡蛋
   event.shaped(Item.of('minecraft:egg', 16), [
      'BAB',
      'BCB',
      'BAB'
   ],
      {
         A: 'biomancy:stone_powder',
         B: 'minecraft:bone_meal',
         C: 'l2complements:life_essence',
      }
   )
   //末影珍珠
   event.shaped(Item.of('cyclic:eye_teleport', 1), [
      ' B ',
      'BAB',
      ' B '
   ],
      {
         B: 'thermal:enderium_dust',
         A: 'ae2:singularity',
      }
   )
   //中子转换
   event.shapeless(Item.of('avaritia:neutron_ingot', 9), [
      'avaritia:neutron',
   ]
   )
   event.shapeless(Item.of('avaritia:crystal_matrix_ingot', 9), [
      'avaritia:crystal_matrix',
   ]
   )
   event.shapeless(Item.of('avaritia:neutron_nugget', 9), [
      'avaritia:neutron_ingot',
   ]
   )
   event.shapeless(Item.of('avaritia:neutron_pile', 9), [
      'avaritia:neutron_nugget',
   ]
   )
   event.shapeless(Item.of('immersiveengineering:graphite_electrode').withNBT('{Unbreakable:1b}'), [
      'immersiveengineering:graphite_electrode',
      'l2complements:eternium_ingot'
   ]
   )
   event.shapeless(Item.of('minecraft:ender_pearl',3), [
      'kubejs:crystal_ender',
      'minecraft:snowball'
   ]
   )
   event.shapeless(Item.of('tconstruct:seared_brick',4), [
      'tconstruct:seared_bricks',
   ]
   )
   event.shapeless(Item.of('tconstruct:scorched_brick',4), [
      'tconstruct:scorched_bricks',
   ]
   )
   event.shapeless(Item.of('minecraft:music_disc_wait',1), [
      'kubejs:empty_record',
      'minecraft:blue_dye'
   ]
   )

   //通用压印模板
   event.shaped(Item.of('kubejs:universal_press', 1), [
      'BAB',
      'CDE',
      'BFB'
   ],
      {
         A: 'ae2:silicon_press',
         B: 'ae2:fluix_pearl',
         C: 'ae2:engineering_processor_press',
         D: 'ae2:singularity',
         E: 'ae2:logic_processor_press',
         F: 'ae2:calculation_processor_press',
      }
   )
   event.shaped(Item.of('projecte:dark_matter', 1), [
      'ABA',
      'BCB',
      'ABA'
   ],
      {
         A: 'kubejs:dust_mana',
         B: 'projecte:aeternalis_fuel',
         C: 'minecraft:diamond_block',
      }
   )
   event.shaped(Item.of('tinkers_thinking:heavy_core', 1), [
      ' B ',
      'BAB',
      ' B '
   ],
      {
         A: 'mekanism:block_osmium',
         B: 'etshtinker:hardlead_plate',
      }
   )
   event.shaped(Item.of('minecraft:crying_obsidian',8), [
      'AAA',
      'ABA',
      'AAA'
   ],
      {
         A: '#forge:obsidian',
         B: '#forge:onion/sliced',
      }
   )

   //插件
   event.shaped(Item.of('cti:upgrade_electronium', 1), [
      'A A',
      ' C ',
      ' B '
   ],
      {
         A: 'kubejs:tungsten_steel_ingot',
         B: 'pneumaticcraft:printed_circuit_board',
         C: 'etshtinker:electronium',
      }
   )
   event.shaped(Item.of('cti:upgrade_aetherium', 1), [
      'A A',
      'BCB',
      'A A'
   ],
      {
         A: 'etshtinker:trinity_intereactive_alloy',
         C: 'kubejs:aetherium_core',
         B: 'mekanismgenerators:electromagnetic_coil',
      }
   )
   event.shaped(Item.of('cti:upgrade_violium', 1), [
      ' B ',
      'BCB',
      ' A '
   ],
      {
         B: 'kubejs:violium_alloy',
         A: 'kubejs:violium_core',
         C: 'powah:capacitor_niotic',
      }
   )
   event.shaped(Item.of('waystones:warp_stone', 1), [
      ' B ',
      'BAB',
      ' B '
   ],
      {
         B: 'minecraft:amethyst_shard',
         A: 'minecraft:ender_pearl',
      }
   )
      event.shaped(Item.of('l2complements:eternium_nugget', 4), [
      'CBC',
      'BAB',
      'CBC'
   ],
      {
         B: 'l2complements:space_shard',
         A: 'l2complements:explosion_shard',
         C: 'l2complements:shulkerate_nugget',
      }
   )
   event.shaped(Item.of('aether:golden_feather', 1), [
      'ABA',
      'BCB',
      'ABA'
   ],
      {
         A: 'l2complements:sun_membrane',
         C: 'minecraft:feather',
         B: 'minecraft:gold_nugget',
      }
   )
   event.smithing('constructionwand:infinity_wand','constructionwand:diamond_wand','tconstruct:manyullyn_ingot')

   event.shaped(Item.of('cti:flat_tablet', 1), [
      'A',
      'B'
   ],
      {
         A: 'minecraft:redstone',
         B: '#forge:plates/iron',
      }
   )

   event.shaped(Item.of('cti:flat_tablet_day', 1), [
      'A',
      'B'
   ],
      {
         A: 'aether:sun_altar',
         B: 'cti:flat_tablet',
      }
   )

   event.shaped(Item.of('pneumaticcraft:advanced_pressure_tube', 8), [
      'AAA',
      'ACA',
      'AAA'
   ],
      {
         A: 'pneumaticcraft:pressure_tube',
         C: 'kubejs:ultra_dense_nugget',
      }
   )

   event.shaped(Item.of('cherrytinker:enchantedgold',4), [
      'ABA',
      'BCB',
      'ABA'
   ],
      {
         A: 'minecraft:experience_bottle',
         B: 'l2complements:totemic_gold_ingot',
         C: 'minecraft:gold_block',
      }
   )

   event.remove({id:'megacells:crafting/mega_crafting_unit'})
   event.shaped(Item.of('megacells:mega_crafting_unit', 1), [
      'AA',
      'AA'
   ],
      {
         A: 'ae2:crafting_unit',
      }
   )
   event.shapeless('kubejs:meteorium_ingot',['3x kubejs:meteorium_scrap','ad_astra:desh_ingot','ad_astra:ostrum_ingot','ad_astra:calorite_ingot'])

   event.shaped(Item.of('cti:meteorium_plane', 1), [
      'AAA',
      'ACA',
      'AAA'
   ],
      {
         C: 'ae2:annihilation_plane',
         A: 'kubejs:meteorium_scrap',
      }
   )
   event.smithing('cti:meteorium_plane','ae2:annihilation_plane','kubejs:meteorium_ingot')

   event.shaped(Item.of('cti:meteor_shower_tablet', 1), [
      'CA',
      'AA'
   ],
      {
         C: 'ars_nouveau:red_archwood_log',
         A: 'kubejs:meteorium_scrap',
      }
   )
    event.shaped(Item.of('gobber2:gobber2_ingot',2), [
        'ABC',
        'BEB',
        'DBF'
    ], {
        A: '#forge:ingots/electrum',
        B: 'tconstruct:sky_slime_ball',
        C: 'tinkers_ingenuity:ocean_alloy_ingot',
        D: 'tconstruct:slimesteel_ingot',
        E: 'gobber2:gobber2_glob',
        F: '#forge:ingots/bronze'
    });
    event.shaped(Item.of('gobber2:gobber2_ingot_nether',2), [
        'ABC',
        'GEG',
        'DBF'
    ], {
        A: 'tinkerscalibration:witherium_ingot',
        B: 'gobber2:gobber2_ingot',
        C: '#minecraft:soul_fire_base_blocks',
        D: 'minecraft:nether_star',
        E: 'gobber2:gobber2_glob_nether',
        F: 'minecraft:nether_brick',
        G: 'tconstruct:ichor_slime_ball'
    });
    event.shaped(Item.of('gobber2:gobber2_ingot_end',2), [
        'ABC',
        'GEG',
        'DBF'
    ], {
        A: 'thermal:enderium_ingot',
        B: 'gobber2:gobber2_ingot_nether',
        C: 'minecraft:chorus_flower',
        D: 'minecraft:dragon_breath',
        E: 'gobber2:gobber2_glob_end',
        F: 'tinkers_ingenuity:twilight_ingot',
        G: 'tconstruct:ender_slime_ball'
    });
    event.shaped(Item.of('minecraft:diamond_horse_armor', 1), [
      'AAA',
      'ACA',
      'AAA'
   ],
      {
         C: 'minecraft:leather_horse_armor',
         A: 'minecraft:diamond',
      }
   )
   event.shaped(Item.of('minecraft:iron_horse_armor', 1), [
      'AAA',
      'ACA',
      'AAA'
   ],
      {
         C: 'minecraft:leather_horse_armor',
         A: 'minecraft:iron_ingot',
      }
   )
   event.shaped(Item.of('minecraft:golden_horse_armor', 1), [
      'AAA',
      'ACA',
      'AAA'
   ],
      {
         C: 'minecraft:leather_horse_armor',
         A: 'minecraft:gold_ingot',
      }
   )

   event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [
         {
            "item": "mowziesmobs:wrought_helmet"
         }
      ],
      "result": [
         {
            "count": 24,
            "item": "thermal:steel_plate"
         }
      ],
      "tool": {
         "item": "tconstruct:cleaver"
      }
   })
   event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [
         {
            "item": "mowziesmobs:wrought_axe"
         }
      ],
      "result": [
         {
            "count": 24,
            "item": "thermal:steel_plate"
         }
      ],
      "tool": {
         "item": "tconstruct:cleaver"
      }
   })
   event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [
         {
            "item": "mowziesmobs:sol_visage"
         }
      ],
      "result": [
         {
            "count": 32,
            "item": "tinkers_ingenuity:shine_alloy_ingot"
         }
      ],
      "tool": {
         "item": "tconstruct:cleaver"
      }
   })

   event.shaped(Item.of('kubejs:radient_engine', 1), [
      'AAA',
      ' B ',
      ' C '
   ],
      {
         C: 'twilightforest:fiery_ingot',
         B: 'ad_astra:engine_frame',
         A: 'kubejs:luminous_metal_plate',
      }
   )

   event.replaceInput({id: 'gobber2:gobber2_ring_curing' }, 'minecraft:fermented_spider_eye','tinkerscalibration:oraclium_nugget')

   event.custom({
  "type": "ad_astra:nasa_workbench",
  "ingredients": [
    {
      "ingredient": {
        "item": "ad_astra:rocket_nose_cone"
      }
    },
    {
      "ingredient": {
        "item": "kubejs:luminous_metal_plate"
      }
    },
    {
      "ingredient": {
        "item": "kubejs:luminous_metal_plate"
      }
    },
    {
      "ingredient": {
        "item": "kubejs:luminous_metal_plate"
      }
    },
    {
      "ingredient": {
        "item": "kubejs:luminous_metal_plate"
      }
    },
    {
      "ingredient": {
        "item": "kubejs:luminous_metal_plate"
      }
    },
    {
      "ingredient": {
        "item": "kubejs:luminous_metal_plate"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:rocket_fin"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:steel_tank"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:steel_tank"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:rocket_fin"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:rocket_fin"
      }
    },
    {
      "ingredient": {
        "item": "kubejs:radient_engine"
      }
    },
    {
      "ingredient": {
        "item": "ad_astra:rocket_fin"
      }
    }
  ],
  "output": "ad_astra:tier_2_rocket"
})

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "  A  ",
    " BAB ",
    "AAAAA",
    " BAB ",
    "  A  "
  ],
  "key": {
    "A": {
      "item": "minecraft:crafting_table"
    },
    "B": {
      "item": "create:brass_sheet"
    }
  },
  "result": {
    "item": "extendedcrafting:advanced_table"
  }
})
   event.smithing('extendedcrafting:elite_table','extendedcrafting:advanced_table','mekanism:alloy_reinforced')
   event.smithing('extendedcrafting:ultimate_table','extendedcrafting:elite_table','mekanism:alloy_atomic')
   event.smithing('extendedcrafting:elite_table','extendedcrafting:advanced_table','twilightforest:blue_castle_rune_brick')
   event.smithing('extendedcrafting:ultimate_table','extendedcrafting:elite_table','aether_redux:sentry_chip')

   event.shaped(Item.of('kubejs:pneumatic_shield', 1), [
      ' C ',
      'BBB',
      ' A '
   ],
      {
         C: 'pneumaticcraft:printed_circuit_board',
         B: 'kubejs:carbon_plate',
         A: 'pneumaticcraft:reinforced_air_canister'
      }
   )

   event.replaceInput({id: 'botania:invisibility_cloak' }, 'botania:mana_pearl','etshtinker:lightless_alloy')

   event.shaped(Item.of('mekanism:quantum_entangloporter', 4), [
      'ABA',
      'BCB',
      'ABA'
   ],
      {
         C: 'ae2:quantum_link',
         B: 'ae2:singularity',
         A: 'thermal:invar_block'
      }
   )

   event.shaped(Item.of('extendedcrafting:advanced_table', 1), [
      'ABA',
      ' C ',
      'DDD'
   ],
      {
         C: '#kubejs:tree_treasure_eq',
         B: '#forge:workbenches',
         A: 'twilightforest:fiery_ingot',
         D: 'cloudertinker:questiron_ingot'
      }
   )
   event.shapeless('aether:life_shard', '2x kubejs:life_crystal')
   event.shapeless('2x kubejs:life_crystal', 'aether:life_shard')
   event.shaped(Item.of('cti:orb_of_curse', 4), [
      'ABA',
      'BCB',
      'ABA'
   ],
      {
         C: 'kubejs:evil_mechanism',
         B: 'l2hostility:hostility_essence',
         A: 'undergarden:forgotten_nugget'
      }
   )

   event.recipes.industrialforegoing.fluid_extractor('thermal:rubberwood_log','thermal:stripped_rubberwood_log',0.5,Fluid.of('industrialforegoing:latex',50))
   event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AABAA",
    "ABCBA",
    "BDEDB",
    "BFGFB",
    "AHHHA"
  ],
  "key": {
    "A": {
      "item": "l2complements:life_essence"
    },
    "B": {
      "item": "tconstruct:dragon_scale"
    },
    "C": {
      "item": "minecraft:dragon_breath"
    },
    "D": {
      "item": "l2hostility:hostility_essence"
    },
    "E": {
      "item": "minecraft:egg"
    },
    "F": {
      "item": "cloudertinker:bloodlust_power"
    },
    "G": {
      "item": "l2complements:shulkerate_ingot"
    },
    "H": {
      "item": "ends_delight:raw_dragon_meat"
    }
  },
  "result": {
    "item": "minecraft:dragon_egg"
  }
})
   event.shapeless('aether:enchanted_gravitite', '9x aether_redux:gravitite_ingot')
   event.shapeless('9x aether_redux:gravitite_ingot', 'aether:enchanted_gravitite')
})