MMEvents.createProcesses(event => {
    //过载超致密
    event.create("mm:overchargedultradense")
        .structureId("mm:overload_infuser")
        .ticks(5)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:ultra_dense",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 750000
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "kubejs:overchargedultradense",
                count: 1
            }
        })
    //中子充能仪(普通)
    event.create("mm:neutronium_charger_medium_make")
        .structureId("mm:overload_infuser")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mm:neutronium_charger_lesser",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mekaevolution:absolute_control_circuit",
                count: 4
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "kubejs:overchargedultradense",
                count: 6
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 150000,
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:overchargedneutronium",
                amount: 90,
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "mm:neutronium_charger_medium",
                count: 1
            }
        })
    //过载超致密接口
    event.create("mm:overcharged_ultra_dense_energy_port_inputmake")
        .structureId("mm:overload_infuser")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mm:ultra_dense_energy_port_input",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1500000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:overchargedneutronium",
                amount: 90,
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "mm:overcharged_ultra_dense_energy_port_input",
                count: 1
            }
        })
    event.create("mm:overcharged_ultra_dense_energy_port_outputmake")
        .structureId("mm:overload_infuser")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mm:ultra_dense_energy_port_output",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1500000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:overchargedneutronium",
                amount: 90,
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "mm:overcharged_ultra_dense_energy_port_output",
                count: 1
            }
        })
    event.create("mm:overcharged_ultra_dense_fluid_port_inputmake")
        .structureId("mm:overload_infuser")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mm:ultra_dense_fluid_port_input",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1500000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:overchargedneutronium",
                amount: 90,
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "mm:overcharged_ultra_dense_fluid_port_input",
                count: 1
            }
        })
    event.create("mm:overcharged_ultra_dense_fluid_port_outputmake")
        .structureId("mm:overload_infuser")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mm:ultra_dense_fluid_port_output",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1500000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:overchargedneutronium",
                amount: 90,
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "mm:overcharged_ultra_dense_fluid_port_output",
                count: 1
            }
        })
    event.create("mm:overcharged_ultra_dense_item_port_inputmake")
        .structureId("mm:overload_infuser")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mm:ultra_dense_item_port_input",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1500000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:overchargedneutronium",
                amount: 90,
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "mm:overcharged_ultra_dense_item_port_input",
                count: 1
            }
        })
    event.create("mm:overcharged_ultra_dense_item_port_outputmake")
        .structureId("mm:overload_infuser")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mm:ultra_dense_item_port_output",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1500000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:overchargedneutronium",
                amount: 90,
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "mm:overcharged_ultra_dense_item_port_output",
                count: 1
            }
        })
    event.create("mm:overcharged_ultra_dense_air_port_outputmake")
        .structureId("mm:overload_infuser")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mm:ultra_dense_air_port_output",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1500000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:overchargedneutronium",
                amount: 90,
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "mm:overcharged_ultra_dense_air_port_output",
                count: 1
            }
        })
    event.create("mm:overcharged_ultra_dense_air_port_inputmake")
        .structureId("mm:overload_infuser")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mm:ultra_dense_air_port_input",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1500000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:overchargedneutronium",
                amount: 90,
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "mm:overcharged_ultra_dense_air_port_input",
                count: 1
            }
        })
    event.create("mm:overcharged_ultra_dense_kinetic_port_outputmake")
        .structureId("mm:overload_infuser")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mm:ultra_dense_kinetic_port_output",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1500000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:overchargedneutronium",
                amount: 90,
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "mm:overcharged_ultra_dense_kinetic_port_output",
                count: 1
            }
        })
    event.create("mm:overcharged_ultra_dense_kinetic_port_inputmake")
        .structureId("mm:overload_infuser")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mm:ultra_dense_kinetic_port_input",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1500000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:overchargedneutronium",
                amount: 90,
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "mm:overcharged_ultra_dense_kinetic_port_input",
                count: 1
            }
        })
    event.create("mm:overcharged_ultra_dense_gas_port_outputmake")
        .structureId("mm:overload_infuser")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mm:ultra_dense_gas_port_output",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1500000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:overchargedneutronium",
                amount: 90,
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "mm:overcharged_ultra_dense_gas_port_output",
                count: 1
            }
        })
    event.create("mm:overcharged_ultra_dense_gas_port_inputmake")
        .structureId("mm:overload_infuser")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mm:ultra_dense_gas_port_input",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1500000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:overchargedneutronium",
                amount: 90,
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "mm:overcharged_ultra_dense_gas_port_input",
                count: 1
            }
        })
        event.create("mm:overcharged_ultra_dense_slurry_port_outputmake")
        .structureId("mm:overload_infuser")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mm:ultra_dense_slurry_port_output",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1500000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:overchargedneutronium",
                amount: 90,
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "mm:overcharged_ultra_dense_slurry_port_output",
                count: 1
            }
        })
    event.create("mm:overcharged_ultra_dense_slurry_port_inputmake")
        .structureId("mm:overload_infuser")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mm:ultra_dense_slurry_port_input",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1500000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:overchargedneutronium",
                amount: 90,
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "mm:overcharged_ultra_dense_slurry_port_input",
                count: 1
            }
        })
    event.create("mm:overcharged_ultra_dense_infuse_port_outputmake")
        .structureId("mm:overload_infuser")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mm:ultra_dense_infuse_port_output",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1500000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:overchargedneutronium",
                amount: 90,
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "mm:overcharged_ultra_dense_infuse_port_output",
                count: 1
            }
        })
    event.create("mm:overcharged_ultra_dense_infuse_port_inputmake")
        .structureId("mm:overload_infuser")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "mm:ultra_dense_infuse_port_input",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1500000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:overchargedneutronium",
                amount: 90,
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "mm:overcharged_ultra_dense_infuse_port_input",
                count: 1
            }
        })
    //充能赛特斯
    event.create("mm:charge_certus")
        .structureId("mm:overload_infuser")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "ae2:certus_quartz_crystal",
                count: 64
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 409600
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "ae2:charged_certus_quartz_crystal",
                count: 64
            }
        })
    //恒星燃料
    event.create("mm:star_fuel")
        .structureId("mm:overload_infuser")
        .ticks(20)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 163840000
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:annihilating_plasma",
                amount: 1000,
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"etshtinker:overchargedneutronium",
                amount: 1000,
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"mekanism:ethene",
                amount: 1000,
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "projecte:aeternalis_fuel",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"immersiveengineering:biodiesel",
                amount: 1000,
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"createaddition:bioethanol",
                amount: 1000,
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"solidarytinker:super_dt",
                amount: 1000,
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"mekanismgenerators:fusion_fuel",
                amount: 1000,
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "avaritia:star_fuel",
                count: 1
            }
        })
    //奇迹物质
    event.create("mm:charge_certus")
        .structureId("mm:overload_infuser")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "kubejs:tungsten_ingot",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "kubejs:zirconium_alloy",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:activated_chroma_plate",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: 'kubejs:overchargedultradense',
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:electronium",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:anti_neutronium",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:exotic_matter",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:evil_orb",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 1073741824
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:exo_alloy",
                count: 1
            }
        })
})