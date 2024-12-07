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
    let mc =[
        'gold',
        'iron',
        'copper'
    ]
    let dusts =[
        'diamond',
        'lapis'
    ]
    let mods =[
        'mekanism',
        'thermal',
        'immersiveengineering',
        'create',
        'tconstruct',
        'ad_astra',
        'createaddition'
    ]
    let id =[
        'minecraft:smelting',
        'minecraft:blasting',
        'minecraft:crafting_shaped',
        'minecraft:crafting_shapeless',
        'thermal:press',
        'thermal:pulverizer',
        'thermal:smelter',
        'thermal:centrifuge',
        'thermal:pyrolyzer',
        'mekanism:crushing',
        'mekanism:enriching',
        'mekanism:metallurgic_infusing',
        'immersiveengineering:crusher',
        'immersiveengineering:arc_furnace',
        'immersiveengineering:blast_furnace',
        'immersiveengineering:metal_press',
        'create:pressing',
        'create:crushing',
        'immersiveengineering:hammer_crushing',
        'ad_astra:hammering',
    ]
    for (let i of mods){
        for (let k of id){
            for (let j of materials){
                event.replaceOutput({mod:`${i}`,type:`${k}`,output:'#forge:ingots/'+`${j}`},'#forge:ingots/'+`${j}`,'thermal:'+`${j}`+'_ingot')
                event.replaceOutput({mod:`${i}`,type:`${k}`,output:'#forge:storage_blocks/'+`${j}`},'#forge:storage_blocks/'+`${j}`,'thermal:'+`${j}`+'_block')
                event.replaceOutput({mod:`${i}`,type:`${k}`,output:'#forge:nuggets/'+`${j}`},'#forge:nuggets/'+`${j}`,'thermal:'+`${j}`+'_nugget')
                event.replaceOutput({mod:`${i}`,type:`${k}`,output:'#forge:dusts/'+`${j}`},'#forge:dusts/'+`${j}`,'thermal:'+`${j}`+'_dust')
                event.replaceOutput({mod:`${i}`,type:`${k}`,output:'#forge:plates/'+`${j}`},'#forge:plates/'+`${j}`,'thermal:'+`${j}`+'_plate')
            }
            for (let j of mc){
                event.replaceOutput({mod:`${i}`,type:`${k}`,output:'#forge:dusts/'+`${j}`},'#forge:dusts/'+`${j}`,'thermal:'+`${j}`+'_dust')
                event.replaceOutput({mod:`${i}`,type:`${k}`,output:'#forge:plates/'+`${j}`},'#forge:plates/'+`${j}`,'thermal:'+`${j}`+'_plate')
            }
            for (let j of dusts){
                event.replaceOutput({mod:`${i}`,type:`${k}`,output:'#forge:dusts/'+`${j}`},'#forge:dusts/'+`${j}`,'thermal:'+`${j}`+'_dust')
            }
            event.replaceOutput({mod:`${i}`,type:`${k}`,output:'#forge:ingots/steel'},'#forge:ingots/steel','thermal:steel_ingot')
            event.replaceOutput({mod:`${i}`,type:`${k}`,output:'#forge:storage_blocks/steel'},'#forge:storage_blocks/steel','immersiveengineering:storage_steel')
            event.replaceOutput({mod:`${i}`,type:`${k}`,output:'#forge:nuggets/steel'},'#forge:nuggets/steel','thermal:steel_nugget')
            event.replaceOutput({mod:`${i}`,type:`${k}`,output:'#forge:dusts/steel'},'#forge:dusts/steel','thermal:steel_dust')
            event.replaceOutput({mod:`${i}`,type:`${k}`,output:'#forge:plates/steel'},'#forge:plates/steel','thermal:steel_plate')
            event.replaceOutput({mod:`${i}`,type:`${k}`,output:'#forge:dusts/obsidian'},'#forge:dusts/obsidian','create:powdered_obsidian')
            event.replaceOutput({mod:`${i}`,type:`${k}`,output:'#forge:nuggets/copper'},'#forge:nuggets/copper','create:copper_nugget')
            event.replaceOutput({mod:`${i}`,type:`${k}`,output:'#forge:ingots/rose_gold'},'#forge:ingots/steel','tconstruct:rose_gold_ingot')
            event.replaceOutput({mod:`${i}`,type:`${k}`,output:'#forge:storage_blocks/rose_gold'},'#forge:storage_blocks/steel','tconstruct:rose_gold_block')
            event.replaceOutput({mod:`${i}`,type:`${k}`,output:'#forge:nuggets/rose_gold'},'#forge:nuggets/steel','tconstruct:rose_gold_nugget')
        }
    }
})