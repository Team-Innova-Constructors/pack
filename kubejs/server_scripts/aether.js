ServerEvents.recipes(event => {
    event.custom({
        "type": "aether:enchanting",
        "category": "enchanting_misc",
        "cookingtime": 20,
        "experience": 1,
        "ingredient": {
            "item": "kubejs:thermite"
        },
        "result": "kubejs:aetheric_thermite"
    })
    event.custom({
        "type": "aether:enchanting",
        "category": "enchanting_misc",
        "cookingtime": 10,
        "experience": 1,
        "ingredient": {
            "item": "kubejs:broken_victory_medal"
        },
        "result": "aether:victory_medal"
    })
    event.custom({
        "type": "aether:enchanting",
        "category": "enchanting_misc",
        "cookingtime": 40,
        "experience": 1,
        "ingredient": {
            "tag": "aether:sentry_blocks"
        },
        "result": "kubejs:sentrite"
    })

    event.remove({id:'aether_redux:refine_sentrite_smelt'})
    event.remove({id:'aether_redux:refine_sentrite_blast'})
})
