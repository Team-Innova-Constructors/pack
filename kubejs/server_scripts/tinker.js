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

    addSevering("aether:valkyrie","kubejs:broken_victory_medal",2)
    
})