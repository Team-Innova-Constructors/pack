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
})