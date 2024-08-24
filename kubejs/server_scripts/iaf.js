ServerEvents.recipes(event => {
    event.shaped(Item.of('iceandfire:gold_pile',1), [
        'LL '
    ],
    {
        L: '#forge:nuggets/gold',
    })
    event.shaped(Item.of('iceandfire:copper_pile',1), [
        'LL '
    ],
    {
        L: '#forge:nuggets/copper',
    })
})