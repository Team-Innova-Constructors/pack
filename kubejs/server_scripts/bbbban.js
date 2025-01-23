ServerEvents.recipes(event => {
	let proje = [
		'projecte:transmutation_table',
		'projecte:transmutation_tablet',
		'projecte:philosophers_stone',
		'projecte:philosophers_stone_alt',
		'projecte:collector_mk1',
		'projecte:collector_mk2',
		'projecte:collector_mk3',
		'projecte:dm_helmet',
		'projecte:dm_chestplate',
		'projecte:dm_leggings',
		'projecte:dm_boots',
		'projecte:rm_helmet',
		'projecte:rm_chestplate',
		'projecte:rm_leggings',
		'projecte:rm_boots',
		'projecte:gem_helmet',
		'projecte:gem_chestplate',
		'projecte:gem_leggings',
		'projecte:gem_boots',
		'projecte:red_matter',
		'projecte:condenser_mk1',
		'projecte:condenser_mk2',
		'projecte:alchemical_chest',
		'projecte:gem_of_eternal_density',
	]
	for (let i of proje) {event.remove({id:`${i}`})}
  	//重力透镜
  	event.remove({id:'botania:lens_weight'})
  	event.remove({id:'twilightforest:uncrafting_table'})
  	//等价交换
	event.remove({id:'projecte:rm_katar'})
	event.remove({id:'projecte:rm_sword'})
	event.remove({id:'projecte:rm_hammer'})
	event.remove({id:'projecte:rm_morning_star'})
	event.remove({id:'projecte:rm_shovel'})
	event.remove({id:'projecte:rm_shovel'})
	event.remove({id:'projecte:rm_axe'})
	event.remove({id:'projecte:rm_pick'})
	event.remove({id:'projecte:watch_of_flowing_time'})
	event.remove({mod:'projecte',type:'crafting_shapeless',input:'projecte:philosophers_stone'})
	//铸币
	event.remove({id:'lightmanscurrency:coinmint'})
	//工匠联合
	event.remove({id:'solidarytinker:table/icefantasy_ingot'})
	event.remove({id:'solidarytinker:casting/starfall_ingot'})
	event.remove({id:'solidarytinker:table/experience_steel_ingot'})
	event.remove({id:'solidarytinker:casting/extremelycoldsteel_ingot'})
	event.remove({id:'solidarytinker:smeltery/alloy/super_dt'})
	event.remove({id:'solidarytinker:context/botania/mana_infusion/magicuranium_ingot'})
	event.remove({id:'solidarytinker:context/mekanism/reaction/extremelycoldsteel_ingot'})
	event.remove({id:'solidarytinker:smeltery/alloy/dwarf'})
	//其他匠魂附属
	event.remove({id:'tinkerscalibration:tools/materials/moonsteel'})
	event.remove({id:'tinkers_ingenuity:tables/materials/sea_dream'})
	event.remove({id:'tconstruct:smeltery/alloys/molten_pewter'})
	//pnt
	event.remove([{mod: 'thermal', output: 'thermal:phyto_tnt' }])
  	event.remove([{mod: 'createoreexcavation', output: 'createoreexcavation:vein_finder' }])
  	//etshtinker
  	event.remove({id:'etshtinker:thermal/crystalizer/flawless_budding_quartz'})
	//沉浸
	event.remove({id:'immersiveengineering:crafting/blastbrick'})
	//杂七杂八
	event.remove([{mod: 'dreadsteel', output: 'dreadsteel:dreadsteel_ingot' }])
    event.remove([{mod: 'biomancy', output: 'biomancy:primordial_core' }])
	event.remove({id:'projecte:dark_matter'})
	event.remove({id:'projecte:red_matter_alt'})
	event.remove({id:'tinkersinnovation:items/polychrome_mix'})
	event.remove({id:'thermal:machines/smelter/smelter_alloy_rose_gold'})

	//meka套
	let meka =[
		'mekanism:mekasuit_helmet',
		'mekanism:mekasuit_bodyarmor',
		'mekanism:mekasuit_pants',
		'mekanism:mekasuit_boots'
	]
	for (let i of meka){
		event.remove([{id: `${i}` }])
	}
  	//热力锭
      let thermalingot=[
		'thermal:fire_charge/signalum_ingot_4',
		'thermal:fire_charge/lumium_ingot_4',
		'thermal:fire_charge/enderium_ingot_2'
	]
	for(let i of thermalingot){
		event.remove([{id: `${i}` }])
	}

	event.remove({mod:'explorerscompass', output: 'explorerscompass:explorerscompass' })
	event.remove({mod:'naturescompass', output: 'naturescompass:naturescompass' })
	event.remove({id:'l2hostility:curse_of_wrath'})
	event.remove({id:'l2hostility:book_of_omniscience'})
	event.remove({mod:'l2hostility', output: 'l2hostility:curse_of_pride' })
	event.remove({mod:'l2hostility', output: 'l2hostility:curse_of_wrath' })
	event.remove({id:'megacells:inscriber/bulk_cell_component'})
	event.remove({id:'thermal:fuels/compression/creosote'})
	event.remove({id:'thermal:machines/refinery/refinery_heavy_oil'})
	event.remove({id:'thermal:machines/refinery/refinery_light_oil'})
	event.remove({id:'thermal:machines/refinery/refinery_crude_oil'})
	event.remove({id:'etshtinker:immersiveengineering/arcfurnace/exo_alloy'})
	event.remove({id:'enigmaticlegacy:etherium_ingot_from_blasting'})
	event.remove({id:'enigmaticlegacy:etherium_ingot'})
	event.remove({id:'waystones:warp_stone'})
	event.remove({id:'gobber2:blastfurnace'})
	event.remove({id:'immersiveengineering:blastfurnace/steel'})
	event.remove({id:'immersiveengineering:blastfurnace/steel_block'})
	event.remove({id:'toms_storage:adv_wireless_terminal'})
	event.remove({id:'industrialforegoing:gold_gear'})
	event.remove({id:'create:sequenced_assembly/precision_mechanism'})
	event.remove({id:'tconstruct:smeltery/melting/metal/iron/ingot_1'})
	event.remove({id:'tconstruct:smeltery/melting/metal/iron/nugget_3'})
	event.remove({id:'tconstruct:smeltery/melting/metal/gold/powered_rail'})
	event.remove({id:'thermal:machines/smelter/smelter_alloy_enderium'})
	event.remove({id:'l2hostility:greed_of_nidhoggur'})
	event.remove({id:'immersiveengineering:smelting/slag_glass'})


	//移除原有矿脉
	let coe =[
	'createoreexcavation:extractor/water',
	'createoreexcavation:drilling/coal',
	'createoreexcavation:drilling/copper',
	'createoreexcavation:drilling/diamond',
	'createoreexcavation:drilling/emerald',
	'createoreexcavation:drilling/glowstone',
	'createoreexcavation:drilling/hardened_diamond',
	'createoreexcavation:drilling/iron',
	'createoreexcavation:drilling/gold',
	'createoreexcavation:drilling/quartz',
	'createoreexcavation:drilling/redstone',
	'createoreexcavation:drilling/zinc',
	]
	for (let i of coe) {event.remove({id:`${i}`})}
	let immersiveengineeringore =[
	'immersiveengineering:mineral/amethyst_crevasse',
	'immersiveengineering:mineral/ancient_seabed',
	'immersiveengineering:mineral/hardened_clay_pan',
	'immersiveengineering:mineral/bituminous_coal',
	'immersiveengineering:mineral/cooled_lava_tube',
	'immersiveengineering:mineral/igneous_rock',
	'immersiveengineering:mineral/silt',
	'immersiveengineering:mineral/nether_silt',
	'immersiveengineering:mineral/beryl',
	'immersiveengineering:mineral/cinnabar',
	'immersivepetroleum:reservoirs/aquifer',
	'immersivepetroleum:reservoirs/lava',
	'immersivepetroleum:reservoirs/oil',
	'immersivepetroleum:coking/petcoke',
	]
	for (let i of immersiveengineeringore) {event.remove({id:`${i}`})}
	//莱特兰附魔书
	let l2enchantbook =[
	'l2complements:enchantments/projectile_reject',
	'l2complements:enchantments/fire_reject',
	'l2complements:enchantments/environment_reject',
	'l2complements:enchantments/explosion_reject',
	'l2complements:enchantments/magic_reject',
	'l2complements:enchantments/invincible',
	'l2complements:enchantments/void_touch',
	]
	for (let i of l2enchantbook) {event.remove({id:`${i}`})}
	//循环
	let cyclics =[
      'cyclic:soulstone',
      'cyclic:crafter',
      'cyclic:sprinkler',
      'cyclic:terra_glass',
      'cyclic:quiver_damage',
      'cyclic:charm_attack_speed',
      'cyclic:solidifier/solidifier_obsflower',
      'cyclic:apple_sprout_diamond',
      'cyclic:heart',
      'cyclic:magic_net_alt',
      'cyclic:magic_net',
      'cyclic:offset_scepter',
      'cyclic:solidifier/solidifier_obs_legacy',
      'cyclic:peace_candle',
      'cyclic:water_candle',
      'cyclic:teleport',
      'cyclic:build_scepter',
      'cyclic:replace_scepter',
      'cyclic:workbench',
      'cyclic:wand_missile',
      'cyclic:wand_hypno',
	  'cyclic:uncrafter',
	  'cyclic:sleeping_mat',
	  'cyclic:charm_crit',
	  'cyclic:crafting_stick',
	  'cyclic:crafting_bag',
	  'cyclic:crusher/rail',
	  'cyclic:crusher/activator_rail',
	  'cyclic:crusher/powered_rail',
	  'cyclic:crusher/detector_rail'
    ]
    for (let i of cyclics) {event.remove({id:`${i}`})}
    //堆
	let pile =[
		'lightmanscurrency:coinpile_copper',
		'lightmanscurrency:coinpile_iron',
		'lightmanscurrency:coinpile_gold',
		'lightmanscurrency:coinpile_emerald',
		'lightmanscurrency:coinpile_diamond',
		'lightmanscurrency:coinpile_netherite',
		'lightmanscurrency:coinblock_copper',
		'lightmanscurrency:coinblock_iron',
		'lightmanscurrency:coinblock_gold',
		'lightmanscurrency:coinblock_emerald',
		'lightmanscurrency:coinblock_diamond',
		'lightmanscurrency:coinblock_netherite'
	]
	for (let i of pile){
		event.remove([{ mod : 'lightmanscurrency' , output: `${i}` }])
	}
	//并行
	let accelerator =[
		'bigger_ae2:4_core_crafting_accelerator',
		'bigger_ae2:256_core_crafting_accelerator',
		'bigger_ae2:64_core_crafting_accelerator',
		'bigger_ae2:16_core_crafting_accelerator',
		'bigger_ae2:1024_core_crafting_accelerator'
	]
	for (let i of accelerator){
		event.remove([{ mod : 'bigger_ae2' , output: `${i}` }])
	}
}
)