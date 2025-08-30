ServerEvents.recipes(event => {
    event.custom({
        "type": "tconstruct:melting_fuel",
        "fluid": {
            "name": "cti:lava_heated",
            "amount": 50
        },
        "duration": 200,
        "temperature": 2000
    })
    event.custom({
        "type": "tconstruct:melting_fuel",
        "fluid": {
            "name": "cti:lava_overheated",
            "amount": 40
        },
        "duration": 200,
        "temperature": 3500
    })
    event.custom({
        "type": "tconstruct:melting_fuel",
        "fluid": {
            "name": "cti:lava_gaseous",
            "amount": 30
        },
        "duration": 200,
        "temperature": 5000
    })
    event.custom({
        "type": "tconstruct:melting_fuel",
        "fluid": {
            "name": "cti:lava_plasmatic",
            "amount": 20
        },
        "duration": 200,
        "temperature": 7000
    })
    event.custom({
        "type": "tconstruct:melting_fuel",
        "fluid": {
            "name": "cti:lava_atomic",
            "amount": 10
        },
        "duration": 200,
        "temperature": 9500
    })

    event.custom({
        "type": "tconstruct:alloy",
        "result": {
            "fluid": "cti:lava_heated",
            "amount": 10000
        },
        "inputs": [
            {
                "fluid": "minecraft:lava",
                "amount": 10000
            },
            {
                "tag": "cti:fuel/twilight_forest_eq",
                "amount": 100
            }
        ],
        "temperature": 1500
    })

    event.custom({
        "type": "tconstruct:alloy",
        "result": {
            "fluid": "cti:lava_gaseous",
            "amount": 16000
        },
        "inputs": [
            {
                "fluid": "cti:lava_overheated",
                "amount": 16000
            },
            {
                "fluid": "kubejs:molten_phoenix",
                "amount": 90
            }
        ],
        "temperature": 3500
    })

    event.custom({
        "type": "tconstruct:alloy",
        "result": {
            "fluid": "cti:lava_plasmatic",
            "amount": 4000
        },
        "inputs": [
            {
                "fluid": "cti:lava_gaseous",
                "amount": 4000
            },
            {
                "fluid": "tinkers_ingenuity:fire_dragon_blood",
                "amount": 100
            }
        ],
        "temperature": 4500
    })

    event.custom({
        "type": "tconstruct:alloy",
        "result": {
            "fluid": "cti:lava_overheated",
            "amount": 1000
        },
        "inputs": [
            {
                "fluid": "cti:lava_heated",
                "amount": 1000
            },
            {
                "fluid": "etshtinker:molten_knsu",
                "amount": 100
            }
        ],
        "temperature": 3500
    })

    event.custom({
        "type": "pneumaticcraft:fluid_mixer",
        "fluid_output": {
            "amount": 4000,
            "fluid": "cti:lava_gaseous"
        },
        "input1": {
            "type": "pneumaticcraft:fluid",
            "amount": 1000,
            "fluid": "immersivepetroleum:gasoline"
        },
        "input2": {
            "type": "pneumaticcraft:fluid",
            "amount": 4000,
            "fluid": "cti:lava_overheated"
        },
        "item_output": {
            "item": "minecraft:blaze_powder"
        },
        "pressure": 3.0,
        "time": 40
    })
    event.custom({
        "type": "pneumaticcraft:fluid_mixer",
        "fluid_output": {
            "amount": 4000,
            "fluid": "cti:lava_plasmatic"
        },
        "input1": {
            "type": "pneumaticcraft:fluid",
            "amount": 1000,
            "fluid": "kubejs:ethyne"
        },
        "input2": {
            "type": "pneumaticcraft:fluid",
            "amount": 4000,
            "fluid": "cti:lava_overheated"
        },
        "item_output": {
            "item": "minecraft:blaze_powder"
        },
        "pressure": 3.0,
        "time": 40
    })

    event.custom({
        "type": "pneumaticcraft:fluid_mixer",
        "fluid_output": {
            "amount": 4000,
            "fluid": "cti:lava_plasmatic"
        },
        "input1": {
            "type": "pneumaticcraft:fluid",
            "amount": 16000,
            "fluid": "mekanismgenerators:fusion_fuel"
        },
        "input2": {
            "type": "pneumaticcraft:fluid",
            "amount": 4000,
            "fluid": "cti:lava_gaseous"
        },
        "item_output": {
            "item": "avaritia:neutron_pile"
        },
        "pressure": 3.0,
        "time": 40
    })

    event.custom({
        "type": "pneumaticcraft:fluid_mixer",
        "fluid_output": {
            "amount": 4000,
            "fluid": "cti:lava_atomic"
        },
        "input1": {
            "type": "pneumaticcraft:fluid",
            "amount": 100,
            "fluid": "etshtinker:overchargedneutronium"
        },
        "input2": {
            "type": "pneumaticcraft:fluid",
            "amount": 4000,
            "fluid": "cti:lava_plasmatic"
        },
        "item_output": {
            "item": "avaritia:neutron_nugget"
        },
        "pressure": 3.0,
        "time": 40
    })

    event.custom({
        "type": "pneumaticcraft:fluid_mixer",
        "fluid_output": {
            "amount": 4000,
            "fluid": "cti:lava_overheated"
        },
        "input1": {
            "type": "pneumaticcraft:fluid",
            "amount": 500,
            "fluid": "industrialforegoing:biofuel"
        },
        "input2": {
            "type": "pneumaticcraft:fluid",
            "amount": 4000,
            "fluid": "cti:lava_heated"
        },
        "item_output": {
            "item": "mekanism:dust_charcoal"
        },
        "pressure": 3.0,
        "time": 40
    })

    event.custom({
        "type": "pneumaticcraft:fluid_mixer",
        "fluid_output": {
            "amount": 4000,
            "fluid": "cti:lava_heated"
        },
        "input1": {
            "type": "pneumaticcraft:fluid",
            "amount": 100,
            "fluid": "industrialforegoing:latex"
        },
        "input2": {
            "type": "pneumaticcraft:fluid",
            "amount": 4000,
            "fluid": "minecraft:lava"
        },
        "item_output": {
            "item": "immersiveengineering:dust_hop_graphite"
        },
        "pressure": 3.0,
        "time": 40
    })

    function ieRefineryNoCat(input1,i1Count,input2,i2count,output,oCount,energy){
        event.custom({
            "type": "immersiveengineering:refinery",
            "energy": energy,
            "input0": {
                "amount": i1Count,
                "tag": input1
            },
            "input1": {
                "amount": i2count,
                "tag": input2
            },
            "result": {
                "amount": oCount,
                "fluid": output
            }
        })
    }
    function ieRefineryWithCat(input1,i1Count,input2,i2count,output,oCount,catalyst,energy){
        event.custom({
            "type": "immersiveengineering:refinery",
            "energy": energy,
            "catalyst": {
                "item": catalyst
            },
            "input0": {
                "amount": i1Count,
                "tag": input1
            },
            "input1": {
                "amount": i2count,
                "tag": input2
            },
            "result": {
                "amount": oCount,
                "fluid": output
            }
        })
    }

    ieRefineryNoCat("minecraft:lava",10,"tconstruct:blazing_blood",1,"cti:lava_heated",10,100)
    ieRefineryNoCat("minecraft:lava",10,"forge:hydrogen",10,"cti:lava_heated",10,100)
    ieRefineryWithCat("cti:lava_heated",10,"cti:fuel/diesel_eq",10,"cti:lava_overheated",10,"etshtinker:activated_chroma_plate",480)

})