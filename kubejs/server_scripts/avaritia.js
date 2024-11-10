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
            result: {item: 'avaritia:neutron_gear'}
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
            result: Item.of('avaritia:neutron_gear',8)
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
                    result: Item.of('avaritia:neutron_gear',3)
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
    }
)