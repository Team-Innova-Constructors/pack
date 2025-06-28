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
})
