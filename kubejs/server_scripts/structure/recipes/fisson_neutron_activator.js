MMEvents.createProcesses(event => {
    //各种中子锭
    event.create("mm:neutroningot_from_ud")
        .structureId("mm:fisson_neutron_activator")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            chance:0.4,
            ingredient: {
                type: "mm:item",
                item: "etshtinker:ultra_dense",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:superheated_sodium",
                amount: 20480000
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "avaritia:neutron_ingot",
                count: 2
            }
        }).output({
            type: "mm:output/simple",
            chance:0.5,
            ingredient: {
                type: "mm:item",
                item: "avaritia:neutron_ingot",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:sodium",
                amount: 20480000
            }
        })
    event.create("mm:neutroningot_from_osneshard")
        .structureId("mm:fisson_neutron_activator")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            chance:0.1,
            ingredient: {
                type: "mm:item",
                item: "etshtinker:os_induced_netherstarshard",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:superheated_sodium",
                amount: 20480000
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "avaritia:neutron_ingot",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            chance:0.25,
            ingredient: {
                type: "mm:item",
                item: "avaritia:neutron_ingot",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:sodium",
                amount: 20480000
            }
        })
    event.create("mm:neutroningot_from_zralloy")
        .structureId("mm:fisson_neutron_activator")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            chance:0.35,
            ingredient: {
                type: "mm:item",
                item: "kubejs:zirconium_alloy",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:superheated_sodium",
                amount: 20480000
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "avaritia:neutron_ingot",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            chance:0.5,
            ingredient: {
                type: "mm:item",
                item: "avaritia:neutron_ingot",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:sodium",
                amount: 20480000
            }
        })
    event.create("mm:neutroningot_from_zralloy")
        .structureId("mm:fisson_neutron_activator")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            chance:0.35,
            ingredient: {
                type: "mm:item",
                item: "kubejs:zirconium_alloy",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:superheated_sodium",
                amount: 20480000
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "avaritia:neutron_ingot",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            chance:0.5,
            ingredient: {
                type: "mm:item",
                item: "avaritia:neutron_ingot",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:sodium",
                amount: 20480000
            }
        })
    event.create("mm:neutroningot_from_w")
        .structureId("mm:fisson_neutron_activator")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            chance:0.75,
            ingredient: {
                type: "mm:item",
                item: "etshtinker:tungsten_ingot",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:superheated_sodium",
                amount: 20480000
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "avaritia:neutron_ingot",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            chance:0.75,
            ingredient: {
                type: "mm:item",
                item: "avaritia:neutron_ingot",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            chance:0.25,
            ingredient: {
                type: "mm:item",
                item: "avaritia:neutron_ingot",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:sodium",
                amount: 20480000
            }
        })
    event.create("mm:neutroningot_from_actchromaplate")
        .structureId("mm:fisson_neutron_activator")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "etshtinker:activated_chroma_plate",
                count: 64
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:superheated_sodium",
                amount: 40960000
            }
        })
        .output({
            type: "mm:output/simple",
            chance:0.75,
            ingredient: {
                type: "mm:item",
                item: "avaritia:neutron_ingot",
                count: 1
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 16384000
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:sodium",
                amount: 40960000
            }
        })
    //氘氚转化
    event.create("mm:deut_fromhygn")
        .structureId("mm:fisson_neutron_activator")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            chance:0.01,
            ingredient: {
                type: "mm:item",
                item: "etshtinker:protonium",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            chance:0.001,
            ingredient: {
                type: "mm:item",
                item: "etshtinker:electronium",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:superheated_sodium",
                amount: 2048000
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"mekanism:hydrogen",
                amount: 10000
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 120000000
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid:"mekanismgenerators:deuterium",
                amount: 10000
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:sodium",
                amount: 2048000
            }
        })
    event.create("mm:tritium_fromdeut")
        .structureId("mm:fisson_neutron_activator")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            chance:0.02,
            ingredient: {
                type: "mm:item",
                item: "etshtinker:protonium",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            chance:0.002,
            ingredient: {
                type: "mm:item",
                item: "etshtinker:electronium",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:superheated_sodium",
                amount: 2048000
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid:"mekanismgenerators:deuterium",
                amount: 10000
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 160000000
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid:"mekanismgenerators:tritium",
                amount: 10000
            }
        }).output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:sodium",
                amount: 2048000
            }
        })
        
})