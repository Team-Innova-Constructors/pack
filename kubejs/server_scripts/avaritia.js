ServerEvents.recipes(
    event => {
        //中子齿轮
        event.custom({
            type: 'avaritia:shaped_extreme_craft',
            pattern: [
                " A AAA A ",
                "AAABBBAAA",
                " ABCDCBA ",
                "ABC E CBA",
                "ABDEFEDBA",
                "ABC E CBA",
                " ABCDCBA ",
                "AAABBBAAA",
                " A AAA A "
            ],
            key: {
                A: [
                    {item: 'avaritia:neutron_ingot'}
                ],
                B: [
                    {item: 'pneumaticcraft:compressed_iron_gear'}
                ],
                C: [
                    {item: 'etshtinker:exo_alloy'}
                ],
                D: [
                    {item: 'create:precision_mechanism'}
                ],
                E: [
                    {item: 'immersiveengineering:component_steel'}
                ],
                F: [
                    {item: 'thermal:tin_gear'}
                ]
            },
            result: Item.of('avaritia:neutron_gear',2)
        })
        event.custom({
            type: 'avaritia:shaped_extreme_craft',
            pattern: [
                " A AAA A ",
                "AAABBBAAA",
                " ABCDCBA ",
                "ABC E CBA",
                "ABDEFEDBA",
                "ABC E CBA",
                " ABCDCBA ",
                "AAABBBAAA",
                " A AAA A "
            ],
            key: {
                A: [
                    {item: 'avaritia:neutron_ingot'}
                ],
                B: [
                    {item: 'pneumaticcraft:compressed_iron_gear'}
                ],
                C: [
                    {item: 'etshtinker:exo_alloy'}
                ],
                D: [
                    {item: 'create:precision_mechanism'}
                ],
                E: [
                    {item: 'immersiveengineering:component_steel'}
                ],
                F: [
                    {item: 'kubejs:ancient_circuitboard'}
                ]
            },
            result: Item.of('avaritia:neutron_gear',16)
        })
        event.custom({
                    type: 'avaritia:shaped_extreme_craft',
                    pattern: [
                        " A AAA A ",
                        "AAABBBAAA",
                        " ABCDCBA ",
                        "ABC E CBA",
                        "ABDEFEDBA",
                        "ABC E CBA",
                        " ABCDCBA ",
                        "AAABBBAAA",
                        " A AAA A "
                    ],
                    key: {
                        A: [
                            {item: 'avaritia:neutron_ingot'}
                        ],
                        B: [
                            {item: 'pneumaticcraft:compressed_iron_gear'}
                        ],
                        C: [
                            {item: 'etshtinker:exo_alloy'}
                        ],
                        D: [
                            {item: 'create:precision_mechanism'}
                        ],
                        E: [
                            {item: 'immersiveengineering:component_steel'}
                        ],
                        F: [
                            {item: 'avaritia:star_fuel'}
                        ]
                    },
                    result: Item.of('avaritia:neutron_gear',12)
                })
        //中子压印板
        event.custom({
            type: 'avaritia:shaped_extreme_craft',
            pattern: [
                "AAAAAAAAA",
                "ABACCCABA",
                "AABBEBBAA",
                "ACBE EBCA",
                "ACE D ECA",
                "ACBE EBCA",
                "AABBEBBAA",
                "ABACCCABA",
                "AAAAAAAAA"
            ],
            key: {
                A: [
                    {item: 'avaritia:neutron_ingot'}
                ],
                B: [
                    {item: 'avaritia:crystal_matrix_ingot'}
                ],
                C: [
                    {item: 'ae2:singularity'}
                ],
                D: [
                    {item: 'kubejs:ultra_dense_block'}
                ],
                E: [
                    {item: 'avaritia:neutron'}
                ]
            },
            result: {item: 'kubejs:neutronium_singularity_press'}
        })
//恶念板
        event.custom(
            {
  "type": "avaritia:shaped_extreme_craft",
  "pattern": [
    "         ",
    "    A    ",
    "  AABAA  ",
    "AACDEDFAA",
    "GHIJKJIHG",
    "AALDEDMAA",
    "  AANAA  ",
    "    A    ",
    "         "
  ],
  "key": {
    "A": {
      "item": "cataclysm:black_steel_ingot"
    },
    "B": {
      "item": "cataclysm:music_disc_netherite_monstrosity"
    },
    "C": {
      "item": "cataclysm:music_disc_ancient_remnant"
    },
    "D": {
      "item": "cataclysm:witherite_ingot"
    },
    "E": {
      "item": "cataclysm:lava_power_cell"
    },
    "F": {
      "item": "cataclysm:music_disc_the_harbinger"
    },
    "G": {
      "item": "avaritia:star_fuel"
    },
    "H": {
      "item": "cataclysm:ancient_metal_block"
    },
    "I": {
      "item": "cataclysm:cursium_ingot"
    },
    "J": {
      "item": "l2hostility:miracle_powder"
    },
    "K": {
      "item": "cataclysm:music_disc_maledictus"
    },
    "L": {
      "item": "cataclysm:music_disc_the_leviathan"
    },
    "M": {
      "item": "cataclysm:music_disc_ender_guardian"
    },
    "N": {
      "item": "cataclysm:music_disc_ignis"
    }
  },
  "result": {
    "item": "kubejs:evil_processor",
    "count":20
  }
}
        )
        event.custom(
            {
  "type": "avaritia:shaped_extreme_craft",
  "pattern": [
    "         ",
    "    A    ",
    "  AABAA  ",
    "AACDEDFAA",
    "GHIJKJIHG",
    "AALDEDMAA",
    "  AANAA  ",
    "    A    ",
    "         "
  ],
  "key": {
    "A": {
      "item": "cataclysm:black_steel_ingot"
    },
    "B": {
      "item": "cataclysm:music_disc_netherite_monstrosity"
    },
    "C": {
      "item": "cataclysm:music_disc_ancient_remnant"
    },
    "D": {
      "item": "cataclysm:witherite_ingot"
    },
    "E": {
      "item": "cataclysm:lava_power_cell"
    },
    "F": {
      "item": "cataclysm:music_disc_the_harbinger"
    },
    "G": {
      "item": "cataclysm:void_stone"
    },
    "H": {
      "item": "cataclysm:ancient_metal_block"
    },
    "I": {
      "item": "cataclysm:cursium_ingot"
    },
    "J": {
      "item": "l2hostility:miracle_powder"
    },
    "K": {
      "item": "cataclysm:music_disc_maledictus"
    },
    "L": {
      "item": "cataclysm:music_disc_the_leviathan"
    },
    "M": {
      "item": "cataclysm:music_disc_ender_guardian"
    },
    "N": {
      "item": "cataclysm:music_disc_ignis"
    }
  },
  "result": {
    "item": "kubejs:evil_processor",
    "count":4
  }
}
        )
        event.custom(
            {
  "type": "avaritia:shaped_extreme_craft",
  "pattern": [
    "         ",
    "    A    ",
    "  AABAA  ",
    "AACDEDFAA",
    "GHIJKJIHG",
    "AALDEDMAA",
    "  AANAA  ",
    "    A    ",
    "         "
  ],
  "key": {
    "A": {
      "item": "cataclysm:black_steel_ingot"
    },
    "B": {
      "item": "cataclysm:music_disc_netherite_monstrosity"
    },
    "C": {
      "item": "cataclysm:music_disc_ancient_remnant"
    },
    "D": {
      "item": "cataclysm:witherite_ingot"
    },
    "E": {
      "item": "cataclysm:lava_power_cell"
    },
    "F": {
      "item": "cataclysm:music_disc_the_harbinger"
    },
    "G": {
      "item": "kubejs:ancient_circuitboard"
    },
    "H": {
      "item": "cataclysm:ancient_metal_block"
    },
    "I": {
      "item": "cataclysm:cursium_ingot"
    },
    "J": {
      "item": "l2hostility:miracle_powder"
    },
    "K": {
      "item": "cataclysm:music_disc_maledictus"
    },
    "L": {
      "item": "cataclysm:music_disc_the_leviathan"
    },
    "M": {
      "item": "cataclysm:music_disc_ender_guardian"
    },
    "N": {
      "item": "cataclysm:music_disc_ignis"
    }
  },
  "result": {
    "item": "kubejs:evil_processor",
    "count":24
  }
}
        )

        event.remove({id:'avaritia:diamond_lattice'})
        event.shaped('avaritia:diamond_lattice', [
      'BCB',
      'CAC',
      'BCB'
    ],
    {
      A: 'minecraft:netherite_scrap',
      B: 'minecraft:diamond',
      C: 'avaritia:neutron_ingot'
    }
  )
    }
)