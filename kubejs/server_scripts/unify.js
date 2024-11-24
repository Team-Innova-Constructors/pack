ServerEvents.recipes(event => {
    let materials =[
        'tin',
        'nickel',
        'silver',
        'electrum',
        'invar',
        'bronze',
        'lead',
        'constantan'
    ]
    let materials2 =[
        'tin',
        'nickel',
        'silver',
        'electrum',
        'invar',
        'bronze',
        'lead',
        'constantan',
        'gold',
        'iron',
        'copper'
    ]
    let mods =[
        'mekanism',
        'thermal',
        'immersiveengineering',
        'create',
        'tconstruct'
    ]
    for (let i of mods){
        for (let j of materials){
            event.replaceOutput({mod:`${i}`,type:'minecraft:smelting',output:'#forge:ingots/'+`${j}`},'#forge:ingots/'+`${j}`,'thermal:'+`${j}`+'_ingot')
            event.replaceOutput({mod:`${i}`,type:'minecraft:blasting',output:'#forge:ingots/'+`${j}`},'#forge:ingots/'+`${j}`,'thermal:'+`${j}`+'_ingot')
        }

    }
})