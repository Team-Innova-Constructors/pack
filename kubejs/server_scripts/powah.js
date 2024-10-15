ServerEvents.recipes(event => {
    event.replaceInput({mod:'powah',output:'powah:crystal_nitro'}, '#forge:storage_blocks/redstone','#forge:ingots/tungsten')
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
          C: 'avaritia:neutron_ingot'
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
    event.recipes.powah.energizing(["minecraft:cobblestone"], "minecraft:tnt",1000)
})