ServerEvents.recipes(event => {
    function addSevering(entityType,item,count){
        event.custom(
            {
                "type": "tconstruct:severing",
                "entity": {
                    "type": entityType
                },
                "result": {
                    "count": count,
                    "item": item
                }
            }
        )
    }
    function addMelting(item,fluid,amount,temp,time){
        event.custom(
            {
                "type":"tconstruct:melting",
                "ingredient":{
                    "item":item
                },
                "temperature": temp,
                "time": time,
                "result":{
                    "fluid": fluid,
                    "amount": amount
                }
            }
        )
    }

    addSevering("aether:valkyrie","kubejs:broken_victory_medal",2)

    addMelting("aether:valkyrie_boots","kubejs:molten_valkyrie",3600,3250,100)
    addMelting("aether:valkyrie_helmet","kubejs:molten_valkyrie",4500,3250,125)
    addMelting("aether:valkyrie_chestplate","kubejs:molten_valkyrie",7200,3250,200)
    addMelting("aether:valkyrie_leggings","kubejs:molten_valkyrie",1800,3250,175)

    addMelting("aether:phoenix_boots","kubejs:molten_phoenix",360,3475,100)
    addMelting("aether:phoenix_helmet","kubejs:molten_phoenix",450,3475,125)
    addMelting("aether:phoenix_chestplate","kubejs:molten_phoenix",720,3475,200)
    addMelting("aether:phoenix_leggings","kubejs:molten_phoenix",630,3475,175)
    addMelting("aether:phoenix_gloves","kubejs:molten_phoenix",180,3475,100)

    addMelting("aether:gravitite_sword","kubejs:molten_gravitite",180,2500,100)
    addMelting("aether:gravitite_boots","kubejs:molten_gravitite",360,2500,100)
    addMelting("aether:gravitite_helmet","kubejs:molten_gravitite",450,2500,100)
    addMelting("aether:gravitite_chestplate","kubejs:molten_gravitite",720,2500,100)
    addMelting("aether:gravitite_leggings","kubejs:molten_gravitite",630,2500,100)
    addMelting("aether:gravitite_gloves","kubejs:molten_gravitite",180,2500,100)

    addMelting("aether:valkyrie_hoe","kubejs:molten_valkyrie",1800,3250,100)
    addMelting("aether:valkyrie_axe","kubejs:molten_valkyrie",2700,3250,100)
    addMelting("aether:valkyrie_shovel","kubejs:molten_valkyrie",900,3250,100)
    addMelting("aether:valkyrie_pickaxe","kubejs:molten_valkyrie",2700,3250,100)
    addMelting("aether:valkyrie_gloves","kubejs:molten_valkyrie",1800,3250,100)

    addSevering("undergarden:forgotten_guardian","undergarden:forgotten_ingot",2)

    event.custom(
            {
                "type":"tconstruct:casting_table",
                "cast": { "tag": "forge:plates/steel" },
                "cast_consumed": true,
                "fluid": {
                    "name": "tinkers_ingenuity:molten_shine_alloy",
                    "amount": 180
                },
                "result": "kubejs:luminous_metal_plate",
                "cooling_time": 20
            }
    )

    event.custom(
        {
  "type": "tconstruct:ore_melting",
  "byproducts": [
    {
      "amount": 270,
      "fluid": "etshtinker:molten_bismuth"
    }
  ],
  "ingredient": {
    "item": "etshtinker:bismuthinite"
  },
  "rate": "metal",
  "result": {
    "amount": 1500,
    "fluid": "tconstruct:seared_stone"
  },
  "temperature": 1500,
  "time": 60
}
    )
    event.custom(
            {
                "type":"tconstruct:casting_table",
                "cast": { "item": "etshtinker:activated_chroma_plate" },
                "cast_consumed": false,
                "fluid": {
                    "name": "immersiveengineering:phenolic_resin",
                    "amount": 250
                },
                "result": "immersiveengineering:plate_duroplast",
                "cooling_time": 5
            }
    )

    event.custom(
            {
  "type": "tconstruct:modifier",
  "allow_crystal": true,
  "inputs": [
    {
      "item": "aquamirae:oxygelium"
    },
    {
      "item": "aquamirae:elodea"
    },
    {
      "item": "kubejs:luminous_metal_plate"
    },
    {
      "item": "twilightforest:torchberries"
    },
    {
      "item": "aquamirae:esca"
    }
  ],
  "level": 1,
  "result": "cti:oxygelium_bud_helmet",
  "tools": {
    "tag": "tconstruct:modifiable/armor/helmets"
  }
}
    )

    event.custom({
  "type": "tconstruct:ore_melting",
  "ingredient": {
    "item":"aether_redux:veridium_ore"
  },
  "rate": "metal",
  "result": {
    "amount": 180,
    "fluid": "kubejs:molten_veridium"
  },
  "temperature": 2000,
  "time": 120
})
    event.custom({
  "type": "tconstruct:ore_melting",
  "ingredient": {
    "item": "aether_redux:raw_veridium"
  },
  "rate": "metal",
  "result": {
    "amount": 90,
    "fluid": "kubejs:molten_veridium"
  },
  "temperature": 200,
  "time": 60
})
    
    
})