ServerEvents.recipes(event => {
    //金铜堆
	event.remove([{mod: 'iceandfire', output: 'iceandfire:copper_pile' }])
    event.remove([{mod: 'iceandfire', output: 'iceandfire:gold_pile' }])
    event.remove([{mod: 'ad_astra', output: 'ad_astra:steel_ingot' }])
})