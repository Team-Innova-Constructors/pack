ServerEvents.recipes(event => {
    event.replaceInput({mod:'powah',output:'powah:crystal_nitro'}, '#forge:storage_blocks/redstone','#forge:ingots/tungsten')

    event.replaceInput({mod:'powah',output:'powah:capacitor_hardened'}, 'powah:dielectric_paste','etshtinker:hardlead_plate')
    event.replaceInput({mod:'powah',output:'powah:capacitor_blazing'}, 'powah:dielectric_paste','kubejs:zirconium_alloy')
    event.replaceInput({mod:'powah',output:'powah:capacitor_niotic'}, 'powah:dielectric_paste','kubejs:violium_alloy')
    event.replaceInput({mod:'powah',output:'powah:capacitor_spirited'}, 'powah:dielectric_paste','etshtinker:trinity_intereactive_alloy')
    event.replaceInput({mod:'powah',output:'powah:capacitor_nitro'}, 'powah:dielectric_paste','mekanism:pellet_plutonium')

    event.replaceInput({id:'powah:crafting/thermo_generator_basic'}, 'powah:dielectric_paste','kubejs:dielectric_paste_1')
    event.replaceInput({id:'powah:crafting/thermo_generator_hardened'}, 'powah:dielectric_paste','kubejs:dielectric_paste_2')
    event.replaceInput({id:'powah:crafting/thermo_generator_blazing'}, 'powah:dielectric_paste','kubejs:dielectric_paste_3')
    event.replaceInput({id:'powah:crafting/thermo_generator_niotic'}, 'powah:dielectric_paste','kubejs:dielectric_paste_4')
    event.replaceInput({id:'powah:crafting/thermo_generator_spirited'}, 'powah:dielectric_paste','kubejs:dielectric_paste_5')
    event.replaceInput({id:'powah:crafting/thermo_generator_nitro'}, 'powah:dielectric_paste','kubejs:dielectric_paste_6')

    event.recipes.powah.energizing(["minecraft:cobblestone"], "minecraft:tnt",10000)
    event.recipes.powah.energizing(["minecraft:emerald"], "powah:crystal_spirited",8000000)
    event.recipes.powah.energizing(["minecraft:diamond"], "powah:crystal_niotic",2400000)
    event.recipes.powah.energizing(["minecraft:blaze_rod"], "powah:crystal_blazing",600000)
    event.recipes.powah.energizing(['minecraft:blue_ice','minecraft:blue_ice'],'powah:dry_ice',150000)
    event.recipes.powah.energizing(['minecraft:ice','minecraft:ice','minecraft:ice','minecraft:ice','minecraft:ice','minecraft:ice'],Item.of('minecraft:packed_ice',6),5000)
    event.recipes.powah.energizing(['minecraft:packed_ice','minecraft:packed_ice','minecraft:packed_ice','minecraft:packed_ice','minecraft:packed_ice','minecraft:packed_ice'],Item.of('minecraft:blue_ice',6),45000)
    event.recipes.powah.energizing(["minecraft:cobblestone"], "minecraft:tnt",10000)
    event.recipes.powah.energizing(["minecraft:iron_ingot","minecraft:gold_ingot"],  Item.of("powah:steel_energized",2),100000)
    event.recipes.powah.energizing(["minecraft:iron_block","minecraft:gold_block"],  Item.of('powah:energized_steel_block',2),900000)
    event.recipes.powah.energizing(['minecraft:bone_meal','thermal:phytogro','botania:mana_powder','biomancy:nutrient_paste'], 'kubejs:phytogro_zero',80000)
    event.recipes.powah.energizing(['tinkers_reforged:red_beryl_gem',"tinkers_reforged:hureaulite_gem","tinkerscalibration:vibrating_crystal","tinkers_reforged:epidote_gem","minecraft:diamond","ae2:fluix_crystal"], Item.of("etshtinker:earth_crystal",1),2500000)
    event.recipes.powah.energizing(["ae2:quartz_block","ae2:quartz_block","ae2:quartz_block","ae2:quartz_block","ae2:quartz_block","ae2:quartz_block"], Item.of("ae2:charged_certus_quartz_crystal",24),1024000)
    let level=[
      "nitro",
      "spirited",
      "niotic",
      "blazing",
    ]
    let type=[
      'powah:battery_',
      'powah:energy_cell_',
      'powah:energy_cable_',
      'powah:energizing_rod_',
      'powah:player_transmitter_',
      'powah:energy_hopper_',
      'powah:energy_discharger_',
    ]
    for(let i of level){
      for(let j of type){
        event.replaceInput({mod:'powah',output:`${j}`+`${i}`}, "powah:capacitor_"+`${i}`,"powah:crystal_"+`${i}`)
        event.replaceInput({mod:'powah',output:`${j}`+'hardened'}, 'powah:capacitor_hardened',"powah:steel_energized")
      }
    }
    //反应堆
    event.shaped(
      Item.of('powah:reactor_basic',4), [
        'ABA',
        'BCB',
        'ABA'
      ],
      {
        A: '#forge:ingots/invar',
        B: 'powah:capacitor_basic_large',
        C: 'powah:uraninite'
      }
    )
    event.shaped(
      Item.of('powah:reactor_hardened',4), [
        'ABA',
        'BCB',
        'ABA'
      ],
      {
        A: '#forge:ingots/steel',
        B: 'powah:capacitor_hardened',
        C: 'powah:uraninite'
      }
    )
    event.shaped(
      Item.of('powah:reactor_blazing',4), [
        'ABA',
        'BCB',
        'ABA'
      ],
      {
        A: 'kubejs:compressed_hardlead',
        B: 'powah:capacitor_blazing',
        C: 'powah:uraninite'
      }
    )
    event.shaped(
      Item.of('powah:reactor_niotic',4), [
        'ABA',
        'BCB',
        'ABA'
      ],
      {
        A: 'kubejs:zirconium_alloy',
        B: 'powah:capacitor_niotic',
        C: 'powah:uraninite'
      }
    )
    event.shaped(
      Item.of('powah:reactor_spirited',4), [
        'ABA',
        'BCB',
        'ABA'
      ],
      {
        A: 'kubejs:violium_alloy',
        B: 'powah:capacitor_spirited',
        C: 'powah:uraninite'
      }
    )
    event.shaped(
      Item.of('powah:reactor_nitro',4), [
        'ABA',
        'BCB',
        'ABA'
      ],
      {
        A: 'etshtinker:trinity_intereactive_alloy',
        B: 'powah:capacitor_nitro',
        C: 'powah:uraninite'
      }
    )
    //核心
    event.shaped(
    Item.of('kubejs:core_basic',1), [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: '#forge:ingots/invar',
      B: 'powah:photoelectric_pane',
      C: 'powah:capacitor_basic_large'
    }
    )
    event.shaped(
    Item.of('kubejs:core_harden',1), [
          'ABA',
          'BCB',
          'ABA'
        ],
        {
          A: 'kubejs:compressed_hardlead',
          B: 'kubejs:core_basic',
          C: 'powah:capacitor_hardened'
        }
        )
    event.shaped(
    Item.of('kubejs:core_blaze',1), [
       'ABA',
       'BCB',
       'ABA'
    ],
    {
      A: 'kubejs:zirconium_alloy',
      B: 'kubejs:core_harden',
      C: 'powah:capacitor_blazing'
    }
    )
    event.shaped(
    Item.of('kubejs:core_diamond',1), [
           'ABA',
           'BCB',
           'ABA'
        ],
        {
          A: 'etshtinker:electronium',
          B: 'kubejs:core_blaze',
          C: 'powah:capacitor_niotic'
        }
        )
    event.shaped(
    Item.of('kubejs:core_emerald',1), [
           'ABA',
           'BCB',
           'ABA'
        ],
        {
          A: 'mekanism:pellet_plutonium',
          B: 'kubejs:core_diamond',
          C: 'powah:capacitor_spirited'
        }
        )
    event.shaped(
    Item.of('kubejs:core_nether',1), [
           'ABA',
           'BCB',
           'ABA'
        ],
        {
          A: 'etshtinker:anti_neutronium',
          B: 'kubejs:core_emerald',
          C: 'powah:capacitor_nitro'
        }
        )
    //太阳能板
    event.shaped(
    Item.of('powah:solar_panel_basic',1), [
      'CBC',
      'BAB',
      'CBC'
    ],
    {
      A: 'kubejs:core_basic',
      B: 'powah:solar_panel_starter',
      C: '#forge:ingots/steel'
    }
    )
    event.shaped(
    Item.of('powah:solar_panel_hardened',1), [
          'CBC',
          'BAB',
          'CBC'
        ],
        {
          A: 'kubejs:core_harden',
          B: 'powah:solar_panel_basic',
          C: 'immersiveengineering:plate_duroplast'
        }
        )
    event.shaped(
    Item.of('powah:solar_panel_blazing',1), [
          'CBC',
          'BAB',
          'CBC'
        ],
        {
          A: 'kubejs:core_blaze',
          B: 'powah:solar_panel_hardened',
          C:'pneumaticcraft:printed_circuit_board'
        }
    )
    event.shaped(
    Item.of('powah:solar_panel_niotic',1), [
          'CBC',
          'BAB',
          'CBC'
        ],
        {
          A: 'kubejs:core_diamond',
          B: 'powah:solar_panel_blazing',
          C:'etshtinker:ultra_dense'
        }
    )
    event.shaped(
    Item.of('powah:solar_panel_spirited',1), [
          'CBC',
          'BAB',
          'CBC'
        ],
        {
          A: 'kubejs:core_emerald',
          B: 'powah:solar_panel_niotic',
          C:'mekanism:pellet_polonium'
        }
    )
    event.shaped(
    Item.of('powah:solar_panel_nitro',1), [
          'CBC',
          'BAB',
          'CBC'
        ],
        {
          A: 'kubejs:core_nether',
          B: 'powah:solar_panel_spirited',
          C:'etshtinker:alloy_fracture'
        }
        )
    let pannel =[
      'powah:crafting/solar_panel_nitro',
      'powah:crafting/solar_panel_spirited',
      'powah:crafting/solar_panel_niotic',
      'powah:crafting/solar_panel_blazing',
      'powah:crafting/solar_panel_hardened',
      'powah:crafting/solar_panel_basic',
    ]
    for (let i of pannel) {event.remove({id:`${i}`})}

    event.custom({
    "type": "thermal:smelter",
    "ingredient": [
        {
          "item": "mekanism:dust_coal",
          "count":6
        },
        {
          "item": "minecraft:clay_ball",
          "count":4
        },
        {
          "item": "minecraft:blaze_powder",
          "count":2
        }
    ],
    "result": [
      {
        "item": "powah:dielectric_paste",
        "count": 24
      },
      {
        "item": "powah:dielectric_paste",
        "chance": 12
      }
    ],
    "experience": 2
  })
  event.custom({
    "type": "thermal:smelter",
    "ingredient": [
        {
          "item": "powah:dielectric_paste",
          "count":12
        },
        {
          "tag": "forge:bitumen",
          "count":2
        },
        {
          "item": "thermal:rosin",
          "count":1
        }
    ],
    "result": [
      {
        "item": "kubejs:dielectric_paste_1",
        "count": 24
      },
      {
        "item": "kubejs:dielectric_paste_1",
        "chance": 12
      }
    ],
    "experience": 2
  })
  event.custom({
    "type": "thermal:smelter",
    "ingredient": [
        {
          "item": "powah:dielectric_paste",
          "count":12
        },
        {
          "item": "immersiveengineering:plate_duroplast",
          "count":1
        },
        {
          "item": "immersiveengineering:dust_hop_graphite",
          "count":1
        }
    ],
    "result": [
      {
        "item": "kubejs:dielectric_paste_2",
        "count": 24
      },
      {
        "item": "kubejs:dielectric_paste_2",
        "chance": 12
      }
    ],
    "experience": 2
  })
  event.custom({
    "type": "thermal:smelter",
    "ingredient": [
        {
          "item": "powah:dielectric_paste",
          "count":12
        },
        {
          "item": "pneumaticcraft:plastic",
          "count":2
        },
        {
          "item": "immersivepetroleum:paraffin_wax",
          "count":1
        }
    ],
    "result": [
      {
        "item": "kubejs:dielectric_paste_3",
        "count": 24
      },
      {
        "item": "kubejs:dielectric_paste_3",
        "chance": 12
      }
    ],
    "experience": 2
  })
  event.custom({
    "type": "thermal:smelter",
    "ingredient": [
        {
          "item": "powah:dielectric_paste",
          "count":12
        },
        {
          "item": "mekanism:substrate",
          "count":1
        },
        {
          "item": "mekanism:hdpe_sheet",
          "count":1
        }
    ],
    "result": [
      {
        "item": "kubejs:dielectric_paste_4",
        "count": 24
      },
      {
        "item": "kubejs:dielectric_paste_4",
        "chance": 12
      }
    ],
    "experience": 2
  })
  event.custom({
    "type": "thermal:smelter",
    "ingredient": [
        {
          "item": "powah:dielectric_paste",
          "count":12
        },
        {
          "item": "etshtinker:activated_chroma_plate",
          "count":1
        },
        {
          "item": "kubejs:carbon_plate",
          "count":1
        }
    ],
    "result": [
      {
        "item": "kubejs:dielectric_paste_5",
        "count": 24
      },
      {
        "item": "kubejs:dielectric_paste_5",
        "chance": 12
      }
    ],
    "experience": 2
  })
  event.custom({
    "type": "thermal:smelter",
    "ingredient": [
        {
          "item": "powah:dielectric_paste",
          "count":12
        },
        {
          "item": "avaritia:neutron_ingot",
          "count":1
        }
    ],
    "result": [
      {
        "item": "kubejs:dielectric_paste_6",
        "count": 24
      },
      {
        "item": "kubejs:dielectric_paste_6",
        "chance": 12
      }
    ],
    "experience": 2
  })
  event.shaped(
    Item.of('powah:photoelectric_pane',32), [
          'ADA',
          'BEB',
          'CDC'
        ],
        {
          A: 'kubejs:dielectric_paste_2',
          B: 'kubejs:dielectric_paste_4',
          C:'kubejs:dielectric_paste_6',
          D:'minecraft:lapis_lazuli',
          E:'#forge:glass_panes'
        }
        )

})
PowahEvents.registerHeatSource(event => {
    event.add('twilightforest:fiery_block', 2750);
	event.add('etshtinker:meteoralloy_block', 3500);
	event.add('kubejs:stellaralloy_block', 5000);
	event.add('iceandfire:dragonsteel_fire_block', 8000);
	event.add('solidarytinker:dwarf_block', 11500);
	event.add('avaritia:infinity', 32768);
})
PowahEvents.registerCoolants(event => {
	event.addFluid("kubejs:fluid_cryotheum", -40);
})
PowahEvents.registerMagmaticFluid(event => {
})