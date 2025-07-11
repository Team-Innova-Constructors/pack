ServerEvents.recipes(event => {
    function metalMaterial(materialId,fluid,ingot,temp){
        event.custom(
            {
                "type":"tconstruct:melting",
                "ingredient":{
                    "item":ingot
                },
                "temperature": temp,
                "time": 20,
                "result":{
                    "fluid": fluid,
                    "amount": 90
                }
            }
        )
        event.custom(
            {
                "type":"tconstruct:casting_table",
                "cast": { "tag": "tconstruct:casts/multi_use/ingot" },
                "cast_consumed": false,
                "fluid": {
                    "name": fluid,
                    "amount": 90
                },
                "result": ingot,
                "cooling_time": 20
            }
        )
        event.custom(
            {
                "type":"tconstruct:casting_table",
                "cast": { "tag": "tconstruct:casts/single_use/ingot" },
                "cast_consumed": true,
                "fluid": {
                    "name": fluid,
                    "amount": 90
                },
                "result": ingot,
                "cooling_time": 20
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_fluid",
                "fluid": {
                    "name": fluid,
                    "amount": 90
                },
                "temperature": temp,
                "output": materialId
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_melting",
                "result": {
                    "name": fluid,
                    "amount": 90
                },
                "temperature": temp,
                "input": materialId,
            }
        )
        event.custom(
            {
                "type": "tconstruct:material",
                "ingredient": {
                    "item": ingot
                },
                "value": 1,
                "needed": 1,
                "material": materialId
            }
        )
    }
    function metalMaterialNoIngotMelt(materialId,fluid,ingot,temp){
        event.custom(
            {
                "type": "tconstruct:material_fluid",
                "fluid": {
                    "name": fluid,
                    "amount": 90
                },
                "temperature": temp,
                "output": materialId
            }
        )
        event.custom(
            {
                "type": "tconstruct:material_melting",
                "result": {
                    "name": fluid,
                    "amount": 90
                },
                "temperature": temp,
                "input": materialId,
            }
        )
        event.custom(
            {
                "type": "tconstruct:material",
                "ingredient": {
                    "item": ingot
                },
                "value": 1,
                "needed": 1,
                "material": materialId
            }
        )
    }
    function craftableMaterial(materialId,ingred_item){
        event.custom(
            {
                "type": "tconstruct:material",
                "ingredient": {
                    "item": ingred_item
                },
                "value": 1,
                "needed": 1,
                "material": materialId
            }
        )
    }

    metalMaterial("kubejs:veridium","kubejs:molten_veridium","aether_redux:veridium_ingot",1500)
    metalMaterial("kubejs:sentrite","kubejs:molten_sentrite","kubejs:sentrite",2000)
    metalMaterial("kubejs:refined_sentrite","kubejs:molten_refined_sentrite","aether_redux:refined_sentrite",2000)
    metalMaterial("kubejs:gravitite","kubejs:molten_gravitite","aether_redux:gravitite_ingot",3000)
    metalMaterial("kubejs:phoenix","kubejs:molten_phoenix","kubejs:phoenix_ingot",3350)
    metalMaterial("kubejs:valkyrie","kubejs:molten_valkyrie","kubejs:valkyrie_ingot",3200)
    craftableMaterial("kubejs:life_crystal","aether:life_shard")
    metalMaterialNoIngotMelt("kubejs:forgotten_metal","tcintegrations:forgotten","undergarden:forgotten_ingot",4950)
})