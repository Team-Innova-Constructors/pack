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
    //金铜堆
	event.remove([{mod: 'iceandfire', output: 'iceandfire:copper_pile' }])
    event.remove([{mod: 'iceandfire', output: 'iceandfire:gold_pile' }])
    event.remove([{mod: 'ad_astra', output: 'ad_astra:steel_ingot' }])
})