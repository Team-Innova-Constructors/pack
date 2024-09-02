MMEvents.createStructures(event => {
    //过载能量注入器
    event.create("mm:overload_infuser")
        .controllerId("mm:overload_infuser")
        .name("过载能量注入器")
        .layout(a => {
            a.layer([
                "AAAAA",
                "ABBBA",
                "ABJBA",
                "ABBBA",
                "AAAAA"
            ]).layer([
                "AEEEA",
                "E   E",
                "E D E",
                "E   E",
                "AEGEA"
            ]).layer([
                "AEEEA",
                "E   E",
                "E H E",
                "E   E",
                "AGGGA"
            ]).layer([
                "AEEEA",
                "E   E",
                "E D E",
                "E   E",
                "AECEA"
            ]).layer([
                "AAAAA",
                "AIIIA",
                "AIJIA",
                "AIIIA",
                "AAAAA"
            ]).key("A", {
                block: "pneumaticcraft:smooth_plastic_brick_black"
            }).key("I", {
                block: "thermal:enderium_block"
            }).key("D", {
                block: "minecraft:end_rod"
            }).key("E", {
                tag: "mm:is_overloadinfuser_casing"
            }).key("G", {
                block: "minecraft:tinted_glass"
            }).key("H", {
                block: "minecraft:heavy_weighted_pressure_plate"
            }).key("B", {
                block: "thermal:signalum_block"
            }).key("J", {
                tag: "mm:energy_ports/tier3"
            })
        })

    //中子充能仪(低级)
    event.create("mm:neutronium_charger_lesser")
        .controllerId("mm:neutronium_charger_lesser")
        .name("中子充能仪(低级)")
        .layout(a => {
            a.layer([
                " D ",
                " E ",
            ]).layer([
                "   ",
                "ACB",
            ]).key("A", {
                tag: "mm:fluid_ports/tier1"
            }).key("B", {
                tag: "mm:fluid_ports/tier1"
            }).key("D", {
                block: "mekanismgenerators:advanced_solar_generator"
            }).key("E", {
                tag: "mm:energy_ports/tier3"
            })
        })

    //中子充能仪(普通)
    event.create("mm:neutronium_charger_medium")
        .controllerId("mm:neutronium_charger_medium")
        .name("中子充能仪(普通)")
        .layout(a => {
            a.layer([
                " D ",
                " E ",
            ]).layer([
                "   ",
                "ACB",
            ]).key("A", {
                tag: "mm:fluid_ports/tier1"
            }).key("B", {
                tag: "mm:fluid_ports/tier1"
            }).key("D", {
                block: "mekanismgenerators:advanced_solar_generator"
            }).key("E", {
                tag: "mm:energy_ports/tier4"
            })
        })

    //中子充能仪(高级)
    event.create("mm:neutronium_charger_advanced")
        .controllerId("mm:neutronium_charger_advanced")
        .name("中子充能仪(高级)")
        .layout(a => {
            a.layer([
                " D ",
                " E ",
            ]).layer([
                "   ",
                "ACB",
            ]).key("A", {
                tag: "mm:fluid_ports/tier1"
            }).key("B", {
                tag: "mm:fluid_ports/tier1"
            }).key("D", {
                block: "mekanismgenerators:advanced_solar_generator"
            }).key("E", {
                tag: "mm:energy_ports/tier5"
            })
        })

    //巨型胃囊
    event.create("mm:stomach")
    .controllerId("mm:stomach_controller")
    .name("巨型胃囊")
    .layout(a => {
        a.layer([
        "   A   ",
        "  AAA ",
        " ABABA ",
        "AAAAAAA",
        " ABABA ",
        "  AAA  ",
        "   A   ",
        ]).layer([
          "  ABA  ",
          " A   A ",
          "A     A",
          "B     B",
          "A     A",
          " A   A ",
          "  ABA  ",
        ]).layer([
           " ABBBA ",
           "A     A",
           "B     B",
           "B     B",
           "B     B",
           "A     A",
           " ABBBA ",
        ]).layer([
           "ABBBBBA",
           "B     B",
           "B     B",
           "B     B",
           "B     B",
           "B     B",
           "ABBCBBA",
        ]).layer([
            " ABBBA ",
            "A     A",
            "D     F",
            "B     B",
            "E     G",
            "A     A",
            " ABHBA ",
        ]).layer([
            "  ABA  ",
            " A   A ",
            "A     A",
            "B     B",
            "A     A",
            " A   A ",
            "  ABA  ",
        ]).layer([
           "   A   ",
           "  AAA ",
           " ABABA ",
           "AAAAAAA",
           " ABABA ",
           "  AAA ",
           "   A   ",
        ]).key("A", {
            block: 'biomancy:flesh_pillar',
        }).key("B", {
            block: 'biomancy:impermeable_membrane',
        }).key("C", {
            block: "mm:stomach_controller",
        }).key("D", {
            tag: 'mm:item_ports/tier1',
            input:true
        }).key("E", {
            tag: 'mm:item_ports/tier1',
            input:false
        }).key("F", {
            tag: 'mm:fluid_ports/tier1',
            input:true
        }).key("G", {
            tag: 'mm:fluid_ports/tier1',
            input:false
        }).key("H", {
            tag: 'mm:energy_ports/tier1',
            input:true
        })
    })

    //反应堆中子活化器
    event.create("mm:fisson_neutron_activator")
        .controllerId("mm:fisson_neutron_activator")
        .name("反应堆中子活化器")
        .layout(a => {
            a.layer([
                "  GGG  ",
                "  GGG  ",
                "  GGG  ",
                "  GGG  ",
                "  GGG  "
            ]).layer([
                " BAGAB ",
                " B   B ",
                " B D B ",
                " B   B ",
                " BAGAB "
            ]).layer([
                "GAGGGAG",
                "G     G",
                "G     G",
                "G     G",
                "GAGGGAG"
            ]).layer([
                "GGGGGGG",
                "G     G",
                "GD I DG",
                "G     G",
                "GGGCGGG"
            ]).layer([
                "GAGGGAG",
                "G     G",
                "G     G",
                "G     G",
                "GAGGGAG"
            ]).layer([
                " BAGAB ",
                " B   B ",
                " B D B ",
                " B   B ",
                " BAGAB "
            ]).layer([
                "  GGG  ",
                "  GGG  ",
                "  GGG  ",
                "  GGG  ",
                "  GGG  "
            ]).key("A", {
                block: "mekanism:sps_casing"
            }).key("B", {
                block: "mekanismgenerators:reactor_glass"
            }).key("D", {
                block: "kubejs:protonium_block"
            }).key("G", {
                tag: "mm:is_neutronactivator_casing"
            }).key("I", {
                block: "kubejs:electronium_block"
            })
        })
    //一体化集成燃油发动机
    event.create("mm:integrated_fuel_engine")
        .controllerId("mm:integrated_fuel_engine")
        .name("一体化集成燃油发动机")
        .layout(a => {
            a.layer([
                "BBBBBBBBBBBB",
                "B     B    B",
                "B     B    B",
                "B     B    B",
                "B     B    B",
                "B     B    B",
                "BBBBBBBBBBBB"
            ]).layer([
                "B     B    B",
                "       BAAB ",
                "  AAAA AAAA ",
                "  AAAA AAAA ",
                "  AAAA AAAA ",
                "       BAAB ",
                "B     B    B"
            ]).layer([
                "B     B    B",
                "  AAAA AEEA ",
                "AAAAAAAADDF ",
                "AA    AADDF ",
                "AAAAAAAADDF ",
                "  AAAA AEEA ",
                "B     B    B"
            ]).layer([
                "B     B    B",
                "BBAAAABAEEA ",
                "AA    AADDF ",
                "HGGGGGGADDF ",
                "AA    AADDF ",
                "BBAAAABAEEA ",
                "B     B    B"
            ]).layer([
                "B     B    B",
                "BBAAAABAEEA ",
                "AAAAAAAADDF ",
                "AA    AADDF ",
                "AAAAAAAADDF ",
                "BBAAAABAEEA ",
                "B     B    B"
            ]).layer([
                "BBBBBBB    B",
                "BBBBBBBBFFB ",
                "BBAAAABAAAA ",
                "BBAAAABAAAA ",
                "BBAAAABAAAA ",
                "BBBBBBBBCFB ",
                "BBBBBBB    B"
            ]).layer([
                "AAAAAAAAAAAA",
                "AAAAAAAAAAAA",
                "AAAAAAAAAAAA",
                "AAAAAAAAAAAA",
                "AAAAAAAAAAAA",
                "AAAAAAAAAAAA",
                "AAAAAAAAAAAA"
            ]).key("A", {
                block: "immersiveengineering:sheetmetal_steel"
            }).key("B", {
                block: "immersiveengineering:steel_scaffolding_standard"
            }).key("D", {
                block: "minecraft:magma_block"
            }).key("E", {
                block: "minecraft:orange_stained_glass_pane"
            }).key("F", {
                tag: "mm:integrated_fuel_engine_matter"
            }).key("G", {
                block: "minecraft:end_rod"
            }).key("H", {
                tag: "mm:integrated_fuel_engine_energy"
            })
        })
        //熔岩分离工厂
        event.create("mm:lava_centrifugal")
        .controllerId("mm:lava_centrifugal_controller")
        .name("熔岩分离工厂")
        .layout(a => {
            a.layer([
                "       KKKKK",
                "       KIIIK",
                "       KIIIK",
                "       KIIIK",
                "       KKKKK",
            ]).layer([
                "       KIIIK",
                "       IJJJI",
                "       IJJJI",
                "       IJJJI",
                "       KIIIK",
            ]).layer([
                "       KKKKK",
                "       K   K",
                "       K   K",
                "       K   K",
                "       KKKKK",
            ]).layer([
                "       KFEFK",
                "       F   F",
                "  L    E   E",
                "       F   F",
                "       KFEFK",
            ]).layer([
                "       KEFEK",
                "  B    E   E",
                " BBB   F   F",
                "  B    E   E",
                "       KEFEK",
            ]).layer([
                "  A    KFEFK",
                " ABA   F   F",
                "ABBBA  E   E",
                " ABA   F   F",
                "  A    KFEFK",
            ]).layer([
                "  B    KEFEK",
                " B B   E   E",
                "B   B  F   F",
                " B B   E   E",
                "  B    KEFEK",
            ]).layer([
                "  3    KF4FK",
                " B B   F   F",
                "2   GGGG   E",
                " B B   F   F",
                "  C    KF5FK",
            ]).layer([
                "  B    KEFEK",
                " B B   E   E",
                "B   B  F   F",
                " B B   E   E",
                "  1    KEFEK",
            ]).layer([
                "  A    KKKKK",
                " ABA   KDDDK",
                "ABBBA  KDDDK",
                " ABA   KDDDK",
                "  A    KKKKK",
            ]).key("A", {
                block: 'create:cut_granite_bricks',
            }).key("B", {
                block: 'minecraft:polished_blackstone_bricks',
            }).key("D", {
                block: 'immersiveengineering:concrete_tile',
            }).key("E", {
                block: 'immersiveengineering:concrete_leaded',
            }).key("F", {
                block: 'mekanism:steel_casing',
            }).key("G", {
                block: 'ad_astra:fluid_pipe_duct',
            }).key("I", {
                block: 'create:framed_glass',
            }).key("J", {
                block: 'minecraft:blue_ice',
            }).key("K", {
                block: 'mekanism:thermal_evaporation_block',
            }).key("L", {
                block: 'botania:blaze_block',
            }).key("1", {
                tag: 'mm:energy_ports/tier2',
                input:true
            }).key("2", {
                tag: 'mm:item_ports/tier2',
                input:true
            }).key("3", {
                tag: 'mm:fluid_ports/tier2',
                input:true
            }).key("4", {
                tag: 'mm:fluid_ports/tier2',
                input:false
            }).key("5", {
                tag: 'mm:item_ports/tier2',
                input:false
            })
        })

    //魔力核子重构机
    event.create("mm:mana_restructer_appliance")
        .controllerId("mm:mana_restructer_appliance")
        .name("魔力核子重组仪")
        .layout(a => {
            a.layer([
                "       ",
                "   B   ",
                "   D   ",
                " BDDDB ",
                "   D   ",
                "   B   ",
                "       "
            ]).layer([
                "   B   ",
                "       ",
                "       ",
                "B  B  B",
                "       ",
                "       ",
                "   B   "
            ]).layer([
                "   D   ",
                "       ",
                "       ",
                "D     D",
                "       ",
                "       ",
                "   D   "
            ]).layer([
                " BDDDB ",
                "B  B  B",
                "D     D",
                "DB E BD",
                "D     D",
                "B  B  B",
                " BDCDB "
            ]).layer([
                "   D   ",
                "       ",
                "       ",
                "D     D",
                "       ",
                "       ",
                "   D   "
            ]).layer([
                "   B   ",
                "       ",
                "       ",
                "B  B  B",
                "       ",
                "       ",
                "   B   "
            ]).layer([
                "       ",
                "   B   ",
                "   D   ",
                " BDDDB ",
                "   D   ",
                "   B   ",
                "       "
            ]).key("B", {
                block: "botania:shimmerrock"
            }).key("D", {
                tag: "mm:is_manarestructerer"
            }).key("E", {
                block: "mythicbotany:alfsteel_pylon"
            })
        })
    //微型粒子对撞机
    event.create("mm:micro_particle_collider")
        .controllerId("mm:micro_particle_collider")
        .name("微型粒子对撞机")
        .layout(a => {
            a.layer([
                "           ",
                "           ",
                "AAA     AAA",
                "AAA     AAA",
                "AAA     AAA",
                "           ",
                "           "
            ]).layer([
                "           ",
                "AHA     AHA",
                "ABA     ABA",
                "ABBBBBBBBBA",
                "ABA     ABA",
                "AHA     AHA",
                "           "
            ]).layer([
                "AHA     AHA",
                "ABA     ABA",
                "ABBBBBBBBBA",
                "ADDD   DDDA",
                "ABBBBBBBBBA",
                "ABA     ABA",
                "AHA     AHA"
            ]).layer([
                "AHA     AHA",
                "ABBBBBBBBBA",
                "ADDD   DDDA",
                "AEEF G FEEA",
                "ADDD   DDDA",
                "ABBBBBBBBBA",
                "ACA     AHA"
            ]).layer([
                "AHA     AHA",
                "ABA     ABA",
                "ABBBBBBBBBA",
                "ADDD   DDDA",
                "ABBBBBBBBBA",
                "ABA     ABA",
                "AHA     AHA"
            ]).layer([
                "           ",
                "AHA     AHA",
                "ABA     ABA",
                "ABBBBBBBBBA",
                "ABA     ABA",
                "AHA     AHA",
                "           "
            ]).layer([
                "           ",
                "           ",
                "AAA     AAA",
                "AAA     AAA",
                "AAA     AAA",
                "           ",
                "           "
            ]).key("A", {
                block: "mekanism:sps_casing"
            }).key("B", {
                block: "minecraft:tinted_glass"
            }).key("D", {
                block: "kubejs:ultra_dense_block"
            }).key("E", {
                block: "kubejs:electronium_block"
            }).key("F", {
                block: "minecraft:end_rod"
            }).key("G", {
                block: "kubejs:protonium_block"
            }).key("H", {
                tag: "mm:ports/tier5"
            })
        })
    //同位素温差发电机
    event.create("mm:isotrope_thermoelectric_generator")
        .controllerId("mm:isotrope_thermoelectric_generator")
        .name("同位素温差发电机")
        .layout(a => {
            a.layer([
                "A A A",
                "I I I",
                "A A A",
            ]).layer([
                "AGAGA",
                "DEBFD",
                "ADCDA",
            ]).layer([
                "AAAAA",
                "AAAAA",
                "AAAAA",
            ]).key("A", {
                block: "mekanismgenerators:fission_reactor_casing"
            }).key("B", {
                block: "pneumaticcraft:compressed_iron_block"
            }).key("D", {
                tag: "mm:block_breakernplacer"
            }).key("E", {
                block: "minecraft:blue_ice"
            }).key("F", {
                block: "minecraft:magma_block"
            }).key("G", {
                block: "mm:hardlead_item_port_input"
            }).key("I", {
                tag: "mm:energy_ports/tier3"
            })
        })

})