ServerEvents.recipes(event => {
    //替换塑料片
    event.replaceInput({mod:'industrialforegoing',input:'industrialforegoing:plastic'}, 'industrialforegoing:plastic','pneumaticcraft:plastic')
    event.replaceOutput({mod:'industrialforegoing',output:'industrialforegoing:plastic'}, 'industrialforegoing:plastic','pneumaticcraft:plastic')
    //机器框架
    event.replaceInput({mod:'industrialforegoing',output:'industrialforegoing:machine_frame_pity'}, '#forge:ingots/iron','pneumaticcraft:plastic')
    event.replaceInput({mod:'industrialforegoing',output:'industrialforegoing:machine_frame_simple'}, '#forge:ingots/iron','etshtinker:chroma_plate')
    event.replaceInput({mod:'industrialforegoing',output:'industrialforegoing:machine_frame_advanced'}, '#forge:ingots/gold','kubejs:zirconium_alloy')
    event.replaceInput({mod:'industrialforegoing',output:'industrialforegoing:machine_frame_supreme'}, '#forge:ingots/netherite','etshtinker:electronium')
    //屠宰机
    event.replaceInput({mod:'industrialforegoing',output:'industrialforegoing:mob_crusher'}, 'industrialforegoing:machine_frame_advanced','industrialforegoing:machine_frame_supreme')
    event.replaceInput({mod:'industrialforegoing',output:'industrialforegoing:mob_slaughter_factory'}, 'industrialforegoing:machine_frame_pity','industrialforegoing:machine_frame_simple')
})