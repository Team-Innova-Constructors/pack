ServerEvents.recipes(event => {

	let proje = [
		'projecte:transmutation_table',
		'projecte:transmutation_tablet',
		'projecte:philosophers_stone',
		'projecte:philosophers_stone_alt',
		'projecte:collector_mk1',
		'projecte:collector_mk2',
		'projecte:collector_mk3',
		'projecte:condenser_mk1',
		'projecte:condenser_mk2',
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
	//热力锭铸膜
	event.remove([{mod: 'thermal', output: 'thermal:chiller_ingot_cast' }])
	//工匠联合
	event.remove({id:'solidarytinker:table/icefantasy_ingot'})
	event.remove({id:'solidarytinker:casting/starfall_ingot'})
	event.remove({id:'solidarytinker:smeltery/alloy/takeru'})
	event.remove({id:'solidarytinker:table/experience_steel_ingot'})
	event.remove({id:'solidarytinker:casting/extremelycoldsteel_ingot'})
	event.remove({id:'solidarytinker:smeltery/alloy/super_dt'})
	event.remove({id:'botania:mana_infusion/magicuranium_ingot'})
	event.remove({id:'solidarytinker:smeltery/alloy/dwarf'})
	//其他匠魂附属
	event.remove({id:'tinkerscalibration:tools/materials/moonsteel'})
	event.remove({id:'tinkers_ingenuity:tables/materials/sea_dream'})
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
	let pjearm =[
		'projecte:rm_helmet',
		'projecte:rm_chestplate',
		'projecte:rm_leggings',
		'projecte:rm_boots',
		'projecte:gem_helmet',
		'projecte:gem_chestplate',
		'projecte:gem_leggings',
		'projecte:gem_boots',
		'projecte:dm_helmet',
		'projecte:dm_chestplate',
		'projecte:dm_leggings',
		'projecte:dm_boots'
	]
	for (let i of meka){
		event.remove([{ id: `${i}` }])
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

	event.remove([{mod: 'tinkers_ingenuity', output: 'tinkers_ingenuity:shuriken' }])
	event.remove({mod: 'explorerscompass', output: 'explorerscompass:explorerscompass' })
	event.remove({mod: 'naturescompass', output: 'naturescompass:naturescompass' })
	event.remove({id:'l2hostility:curse_of_wrath'})
	event.remove({id:'l2hostility:book_of_omniscience'})
	event.remove({mod: 'l2hostility', output: 'l2hostility:curse_of_pride' })
	event.remove({id:'megacells:inscriber/bulk_cell_component'})
	event.remove({id:'thermal:fuels/compression/creosote'})

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
	  'cyclic:uncrafter'
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
}
)