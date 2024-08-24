MMEvents.createProcesses(event => {
    //煤炭转换
    event.create("mm:alchemical_coal")
        .structureId("mm:mana_restructer_appliance")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "manaliquidizer:mana_fluid",
                amount: 10000
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "botania:alchemy_catalyst",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:coal",
                count: 4
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "projecte:alchemical_coal",
                count: 1
            }
        })
    event.create("mm:mobius_fuel")
        .structureId("mm:mana_restructer_appliance")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "manaliquidizer:mana_fluid",
                amount: 100000
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "botania:alchemy_catalyst",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "projecte:alchemical_coal",
                count: 4
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "projecte:mobius_fuel",
                count: 1
            }
        })
    event.create("mm:aeternalis_fuel")
        .structureId("mm:mana_restructer_appliance")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "manaliquidizer:mana_fluid",
                amount: 1000000
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "botania:alchemy_catalyst",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "projecte:mobius_fuel",
                count: 4
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "projecte:aeternalis_fuel",
                count: 1
            }
        })
    event.create("mm:aeternalis_fuel_alter")
        .structureId("mm:mana_restructer_appliance")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "manaliquidizer:mana_fluid",
                amount: 1600000
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "botania:conjuration_catalyst",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:coal",
                count: 64
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "projecte:aeternalis_fuel",
                count: 1
            }
        })
    
    //不稳定奇异物质
    event.create("mm:unstable_exotic_matter_frommana")
        .structureId("mm:mana_restructer_appliance")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "manaliquidizer:mana_fluid",
                amount: 500000
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:mekanism/gas",
                gas: "mekanismgenerators:deuterium",
                amount: 10000
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "botania:conjuration_catalyst",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "botania:manasteel_block",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "etshtinker:unstable_exotic_matter",
                amount: 1000
            }
        })
    //奇异物质转化
    event.create("mm:iron_fromexotic")
        .structureId("mm:mana_restructer_appliance")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "manaliquidizer:mana_fluid",
                amount: 100000
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "botania:gaia_spreader",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:coal",
                count: 4
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "minecraft:iron_ingot",
                count: 1
            }
        })

    event.create("mm:gold_fromexotic")
        .structureId("mm:mana_restructer_appliance")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "manaliquidizer:mana_fluid",
                amount: 100000
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "botania:gaia_spreader",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:iron_ingot",
                count: 4
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "minecraft:gold_ingot",
                count: 1
            }
        })
    event.create("mm:bismuthinite_fromexotic")
        .structureId("mm:mana_restructer_appliance")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "manaliquidizer:mana_fluid",
                amount: 100000
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "botania:gaia_spreader",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:gold_ingot",
                count: 4
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:bismuthinite",
                count: 1
            }
        })
    event.create("mm:diamond_fromexotic")
        .structureId("mm:mana_restructer_appliance")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "manaliquidizer:mana_fluid",
                amount: 100000
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "etshtinker:unstable_exotic_matter",
                amount: 100
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "botania:gaia_spreader",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:bismuthinite",
                count: 4
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "minecraft:diamond",
                count: 1
            }
        })
    event.create("mm:scarp_fromexotic")
        .structureId("mm:mana_restructer_appliance")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "manaliquidizer:mana_fluid",
                amount: 100000
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "etshtinker:unstable_exotic_matter",
                amount: 100
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "botania:gaia_spreader",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "minecraft:diamond",
                count: 4
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "tconstruct:debris_nugget",
                count: 3
            }
        })
    event.create("mm:netherrack_fromexotic")
        .structureId("mm:mana_restructer_appliance")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "manaliquidizer:mana_fluid",
                amount: 100000
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "etshtinker:unstable_exotic_matter",
                amount: 200
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "botania:alchemy_catalyst",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                tag: "forge:cobblestone",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "minecraft:netherrack",
                count: 1
            }
        })
    event.create("mm:endstone_fromexotic")
        .structureId("mm:mana_restructer_appliance")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "manaliquidizer:mana_fluid",
                amount: 100000
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "etshtinker:unstable_exotic_matter",
                amount: 200
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "botania:conjuration_catalyst",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                tag: "forge:cobblestone",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "minecraft:end_stone",
                count: 1
            }
        })
    //奇异物质
    event.create("mm:em_stablize")
        .structureId("mm:mana_restructer_appliance")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "manaliquidizer:mana_fluid",
                amount: 10000000
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "etshtinker:unstable_exotic_matter",
                amount: 1000
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "botania:conjuration_catalyst",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mekanism:gauge_dropper",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mekanism:pellet_antimatter",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:exotic_matter",
                count: 1
            }
        })
})