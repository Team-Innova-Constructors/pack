MMEvents.createProcesses(event => {
    //发电
    event.create("mm:fe_from_diesel")
        .structureId("mm:integrated_fuel_engine")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:diesel",
                amount: 20
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "immersiveengineering:dynamo",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 4096000
            }
        })
    event.create("mm:fe_from_gasoline")
        .structureId("mm:integrated_fuel_engine")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:gasoline",
                amount: 20
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "immersiveengineering:dynamo",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 10240000
            }
        })
    event.create("mm:fe_from_napalm")
        .structureId("mm:integrated_fuel_engine")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:napalm",
                amount: 40
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "immersiveengineering:dynamo",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 21600000
            }
        })
    //硬铅生产
    event.create("mm:hardpb_from_diesel")
        .structureId("mm:integrated_fuel_engine")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:diesel",
                amount: 20
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "create:mechanical_press",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:bismuth_ingot",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                tag: "forge:ingots/lead",
                count: 2
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 3996000
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:hardlead_plate",
                count: 4
            }
        })
    event.create("mm:hardpb_from_gasoline")
        .structureId("mm:integrated_fuel_engine")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:gasoline",
                amount: 20
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "create:mechanical_press",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:bismuth_ingot",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                tag: "forge:ingots/lead",
                count: 2
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 5020000
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:hardlead_plate",
                count: 4
            }
        })
    event.create("mm:hardpb_from_napalm")
        .structureId("mm:integrated_fuel_engine")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:napalm",
                amount: 40
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "create:mechanical_press",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:bismuth_ingot",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                tag: "forge:ingots/lead",
                count: 2
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 9924000
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:hardlead_plate",
                count: 4
            }
        })

    //辉铋矿提炼
    event.create("mm:bi_from_diesel")
        .structureId("mm:integrated_fuel_engine")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:diesel",
                amount: 20
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "minecraft:water",
                amount: 1000
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "create:basin",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:bismuthinite",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:bismuth_ingot",
                count: 2
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:mekanism/gas",
                gas: "mekanism:sulfuric_acid",
                amount: 1000
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 3986000
            }
        })
    event.create("mm:bi_from_gasoline")
        .structureId("mm:integrated_fuel_engine")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:gasoline",
                amount: 20
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "minecraft:water",
                amount: 1000
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "create:basin",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:bismuthinite",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:bismuth_ingot",
                count: 2
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:mekanism/gas",
                gas: "mekanism:sulfuric_acid",
                amount: 1000
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 4920000
            }
        })
    event.create("mm:bi_from_napalm")
        .structureId("mm:integrated_fuel_engine")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:napalm",
                amount: 40
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "minecraft:water",
                amount: 1000
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "create:basin",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:bismuthinite",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:bismuth_ingot",
                count: 2
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:mekanism/gas",
                gas: "mekanism:sulfuric_acid",
                amount: 1000
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 9824000
            }
        })

    //沙砾分离
    event.create("mm:gravelsp_from_diesel")
        .structureId("mm:integrated_fuel_engine")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:diesel",
                amount: 20
            }
        }).input({
            type: "mm:input/consume",
            chance:0.5,
            ingredient: {
                type: "mm:fluid",
                fluid: "minecraft:lava",
                amount: 100
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "create:crushing_wheel",
                count: 2
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                tag: "forge:gravel",
                count: 4
            }
        }).output({
            type: "mm:output/simple",
            chance:0.5,
            ingredient: {
                type: "mm:item",
                item: "create:crushed_raw_uranium",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            chance:0.5,
            ingredient: {
                type: "mm:item",
                item: "mekanism:fluorite_gem",
                count: 3
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 920000
            }
        })
    event.create("mm:gravelsp_from_gasoline")
        .structureId("mm:integrated_fuel_engine")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:gasoline",
                amount: 20
            }
        }).input({
            type: "mm:input/consume",
            chance:0.5,
            ingredient: {
                type: "mm:fluid",
                fluid: "minecraft:lava",
                amount: 100
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "create:crushing_wheel",
                count: 2
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                tag: "forge:gravel",
                count: 4
            }
        }).output({
            type: "mm:output/simple",
            chance:0.5,
            ingredient: {
                type: "mm:item",
                item: "create:crushed_raw_uranium",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            chance:0.5,
            ingredient: {
                type: "mm:item",
                item: "mekanism:fluorite_gem",
                count: 3
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 1760000
            }
        })
    event.create("mm:gravelsp_from_napalm")
        .structureId("mm:integrated_fuel_engine")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:napalm",
                amount: 40
            }
        }).input({
            type: "mm:input/consume",
            chance:0.5,
            ingredient: {
                type: "mm:fluid",
                fluid: "minecraft:lava",
                amount: 100
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "create:crushing_wheel",
                count: 2
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                tag: "forge:gravel",
                count: 4
            }
        }).output({
            type: "mm:output/simple",
            chance:0.75,
            ingredient: {
                type: "mm:item",
                item: "create:crushed_raw_uranium",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            chance:0.75,
            ingredient: {
                type: "mm:item",
                item: "mekanism:fluorite_gem",
                count: 3
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 3996000
            }
        })
    //原油再生
    event.create("mm:oilreproduction_from_diesel")
        .structureId("mm:integrated_fuel_engine")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:diesel",
                amount: 20
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:mekanism/gas",
                gas: "mekanism:hydrogen",
                amount: 100000
            }
        }).input({
            type: "mm:input/consume",
            chance:0.02,
            ingredient: {
                type: "mm:item",
                item: "kubejs:compressed_hardlead",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "immersiveengineering:dust_hop_graphite",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "createaddition:biomass",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:crudeoil",
                amount: 100
            }
        })
    event.create("mm:oilreproduction_from_gasoline")
        .structureId("mm:integrated_fuel_engine")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:gasoline",
                amount: 20
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:mekanism/gas",
                gas: "mekanism:hydrogen",
                amount: 100000
            }
        }).input({
            type: "mm:input/consume",
            chance:0.02,
            ingredient: {
                type: "mm:item",
                item: "kubejs:compressed_hardlead",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "immersiveengineering:dust_hop_graphite",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "createaddition:biomass",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:crudeoil",
                amount: 100
            }
        })
    event.create("mm:oilreproduction_from_napalm")
        .structureId("mm:integrated_fuel_engine")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:napalm",
                amount: 40
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:mekanism/gas",
                gas: "mekanism:hydrogen",
                amount: 100000
            }
        }).input({
            type: "mm:input/consume",
            chance:0.005,
            ingredient: {
                type: "mm:item",
                item: "kubejs:compressed_hardlead",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "immersiveengineering:dust_hop_graphite",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "createaddition:biomass",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:crudeoil",
                amount: 100
            }
        })

    //发应力
    event.create("mm:rotate_from_diesel")
        .structureId("mm:integrated_fuel_engine")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:diesel",
                amount: 2
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "createaddition:electric_motor",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:create/kinetic",
                speed: 256
            }
        })
    event.create("mm:rotate_from_gasoline")
        .structureId("mm:integrated_fuel_engine")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:gasoline",
                amount: 2
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "createaddition:electric_motor",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:create/kinetic",
                speed: 256
            }
        })
    event.create("mm:rotate_from_napalm")
        .structureId("mm:integrated_fuel_engine")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "immersivepetroleum:napalm",
                amount: 2
            }
        }).input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "createaddition:electric_motor",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:create/kinetic",
                speed: 256
            }
        })
})