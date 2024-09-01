MMEvents.createProcesses(event => {
    //靶丸发电
    event.create("mm:plutonium_thermoelectric")
        .structureId("mm:isotrope_thermoelectric_generator")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "mekanism:pellet_plutonium",
                count: 63
            }
        })
        .input({
            type: "mm:input/consume",
            chance:0.0001,
            ingredient: {
                type: "mm:item",
                item: "mekanism:pellet_plutonium",
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 16000000
            }
        })
    event.create("mm:polonium_thermoelectric")
        .structureId("mm:isotrope_thermoelectric_generator")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "mekanism:pellet_polonium",
                count: 63
            }
        })
        .input({
            type: "mm:input/consume",
            chance:0.001,
            ingredient: {
                type: "mm:item",
                item: "mekanism:pellet_polonium",
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 100000000
            }
        })
    //铀铀发电
    event.create("mm:uranium_thermoelectric")
        .structureId("mm:isotrope_thermoelectric_generator")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                tag: "forge:ingots/uranium",
                count: 63
            }
        })
        .input({
            type: "mm:input/consume",
            chance:0.005,
            ingredient: {
                type: "mm:item",
                tag: "forge:ingots/uranium",
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 80000
            }
        })
    event.create("mm:uranium_block_thermoelectric")
        .structureId("mm:isotrope_thermoelectric_generator")
        .ticks(10)
        .input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                tag: "forge:storage_blocks/uranium",
                count: 63
            }
        })
        .input({
            type: "mm:input/consume",
            chance:0.005,
            ingredient: {
                type: "mm:item",
                tag: "forge:storage_blocks/uranium",
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 640000
            }
        })
        //等离子体发电
    event.create("mm:plasma_thermoelectric")
        .structureId("mm:isotrope_thermoelectric_generator")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            chance:0,
            ingredient: {
                type: "mm:item",
                item: "etshtinker:stable_plasma",
                count: 63
            }
        })
        .input({
            type: "mm:input/consume",
            chance:0.0002,
            ingredient: {
                type: "mm:item",
                item: "etshtinker:stable_plasma",
                count: 1
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:energy",
                amount: 1073741824
            }
        })
})
