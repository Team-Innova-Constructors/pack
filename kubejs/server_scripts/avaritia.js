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
    }
)