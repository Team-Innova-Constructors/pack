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

    addMelting("aether:valkyrie_boots","kubejs:molten_valkyrie",360,3250,100)
    addMelting("aether:valkyrie_helmet","kubejs:molten_valkyrie",450,3250,125)
    addMelting("aether:valkyrie_chestplate","kubejs:molten_valkyrie",720,3250,200)
    addMelting("aether:valkyrie_leggings","kubejs:molten_valkyrie",630,3250,175)

    addMelting("aether:phoenix_boots","kubejs:molten_phoenix",360,3475,100)
    addMelting("aether:phoenix_helmet","kubejs:molten_phoenix",450,3475,125)
    addMelting("aether:phoenix_chestplate","kubejs:molten_phoenix",720,3475,200)
    addMelting("aether:phoenix_leggings","kubejs:molten_phoenix",630,3475,175)

    addMelting("aether:gravitite_sword","kubejs:molten_gravitite",180,2500,100)

    addMelting("aether:valkyrie_lance","kubejs:molten_valkyrie",180,3250,100)
    addMelting("aether:valkyrie_hoe","kubejs:molten_valkyrie",180,3250,100)
    addMelting("aether:valkyrie_axe","kubejs:molten_valkyrie",180,3250,100)
    addMelting("aether:valkyrie_shovel","kubejs:molten_valkyrie",180,3250,100)
    addMelting("aether:valkyrie_pickaxe","kubejs:molten_valkyrie",180,3250,100)

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
    "amount": 2000,
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
    
    
})