MMEvents.createProcesses(event => {
    //钚和钋
    event.create("mm:plutonium_from_neut")
        .structureId("mm:micro_particle_collider")
        .ticks(50)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                tag: "forge:storage_blocks/uranium",
                count: 1
            }
        }).input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "avaritia:neutron_nugget",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:hydrofluoric_acid",
                amount: 1000
            }
        }).input({
            type: "mm:input/consume",
            per_tick:true,
            ingredient: {
                type: "mm:energy",
                amount: 96000000
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:plutonium",
                amount: 1000
            }
        })

    event.create("mm:polonium_from_neut")
        .structureId("mm:micro_particle_collider")
        .ticks(100)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                tag: "forge:storage_blocks/uranium",
                count: 1
            }
        }).input({
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
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:hydrofluoric_acid",
                amount: 1000
            }
        }).input({
            type: "mm:input/consume",
            per_tick:true,
            ingredient: {
                type: "mm:energy",
                amount: 96000000
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:mekanism/gas",
                gas:"mekanism:polonium",
                amount: 1000
            }
        })
            //三位一体
    event.create("mm:trinity_from_collider")
        .structureId("mm:micro_particle_collider")
        .ticks(20)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "kubejs:overchargedultradense",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:electronium",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:protonium",
                count: 1
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 333333333
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:item",
                item: "etshtinker:trinity_intereactive_alloy",
                count: 1
            }
        })
})