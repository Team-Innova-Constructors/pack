MMEvents.createProcesses(event => {
    event.create("mm:overchargetneutronium_lesser")
        .structureId("mm:neutronium_charger_lesser")
        .ticks(20)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "tinkers_ingenuity:molten_neutronium",
                amount: 1
            }
        })
        .input({
            type: "mm:input/consume",
            per_tick:true,
            ingredient: {
                type: "mm:energy",
                amount: 750000,
            }
        })
        .output({
            type: "mm:output/simple",
            chance:0.75,
            ingredient: {
                type: "mm:fluid",
                fluid: "etshtinker:overchargedneutronium",
                amount: 1
            }
        })

    event.create("mm:overchargetneutronium_medium")
        .structureId("mm:neutronium_charger_medium")
        .ticks(4)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "tinkers_ingenuity:molten_neutronium",
                amount: 1
            }
        })
        .input({
            type: "mm:input/consume",
            per_tick:true,
            ingredient: {
                type: "mm:energy",
                amount: 25000000
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "etshtinker:overchargedneutronium",
                amount: 1
            }
        })

    event.create("mm:overchargetneutronium_advanced")
        .structureId("mm:neutronium_charger_advanced")
        .ticks(1)
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:fluid",
                fluid: "tinkers_ingenuity:molten_neutronium",
                amount: 10
            }
        })
        .input({
            type: "mm:input/consume",
            ingredient: {
                type: "mm:energy",
                amount: 150000000
            }
        })
        .output({
            type: "mm:output/simple",
            ingredient: {
                type: "mm:fluid",
                fluid: "etshtinker:overchargedneutronium",
                amount: 10
            }
        })
})