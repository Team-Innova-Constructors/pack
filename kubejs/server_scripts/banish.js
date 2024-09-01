ServerEvents.recipes(event => {
	event.remove({output:'twilightforest:uncrafting_table'})
	event.remove({output:'projecte:rm_katar'})
	event.remove({output:'projecte:rm_sword'})
	event.remove({output:'projecte:rm_hammer'})
	event.remove({output:'projecte:rm_morning_star'})
	event.remove({output:'projecte:rm_shovel'})
	event.remove({output:'projecte:rm_shovel'})
	event.remove({output:'projecte:rm_axe'})
	event.remove({output:'projecte:rm_pick'})
	let proje = [
		'projecte:transmutation_table',
		'projecte:transmutation_tablet',
		'projecte:philosophers_stone',
		'projecte:collector_mk1',
		'projecte:collector_mk2',
		'projecte:collector_mk3',
		'projecte:condenser_mk1',
		'projecte:condenser_mk2',
	]
	for (let i of proje) {event.remove({output:`${i}`})}
	//重力透镜
	event.remove({output:'botania:lens_weight'})

	//通过模组id和物品移除的配方物品
    // event.remove({ id: 'mekanism:metallurgic_infuser' })
	event.remove([{mod: 'ad_astra', output: 'ad_astra:steel_ingot' }])
	//pnt
	event.remove([{mod: 'thermal', output: 'thermal:phyto_tnt' }])
	event.remove([{mod: 'createoreexcavation', output: 'createoreexcavation:vein_finder' }])
	//meka套
	let meka =[
		'mekanism:mekasuit_helmet',
		'mekanism:mekasuit_bodyarmor',
		'mekanism:mekasuit_pants',
		'mekanism:mekasuit_boots'
	]
	for (let i of meka){
		event.remove([{mod: 'mekanism', output: `${i}` }])
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
		event.remove([{mod: 'projecte', output: `${i}` }])
	}
	//热力锭
	let thermalingot=[
		'thermal:signalum_ingot',
		'thermal:lumium_ingot',
		'thermal:enderium_ingot'
	]
	for(let i of thermalingot){
		event.remove([{type:'crafting_shapeless', output: `${i}` }])
	}
	event.remove({ id: 'tinkers_reforged:titanium_ingot_to_block' })
	//超致密
	event.remove([{mod: 'etshtinker', output: 'etshtinker:ultra_dense' }])
	//奇迹物质
	event.remove([{mod: 'etshtinker', output: 'etshtinker:exo_alloy' }])
	//热力锭铸膜
	event.remove([{mod: 'thermal', output: 'thermal:chiller_ingot_cast' }])
	//金铜堆
	event.remove([{mod: 'iceandfire', output: 'iceandfire:copper_pile' }])
    event.remove([{mod: 'iceandfire', output: 'iceandfire:gold_pile' }])
	//数采和电板
	event.remove([{mod: 'mekanism', output: 'mekanism:digital_miner' }])
	event.remove([{mod: 'mekaevolution', output: 'mekaevolution:supreme_control_circuit' }])
	event.remove([{mod: 'mekanism', output: 'mekanism:elite_control_circuit' }])
	event.remove([{mod: 'mekaevolution', output: 'mekaevolution:absolute_control_circuit' }])
	event.remove([{mod: 'mekaevolution', output: 'mekaevolution:cosmic_control_circuit' }])
	//血肉重铸
	event.remove([{mod: 'biomancy', output: 'biomancy:primordial_core' }])
	//悚怖钢
	event.remove([{mod: 'dreadsteel', output: 'dreadsteel:dreadsteel_ingot' }])
	//三一默认配方
	event.remove([{mod: 'etshtinker', output: 'etshtinker:trinity_intereactive_alloy' }])
	//神晶AE配方
	event.remove({ id: 'etshtinker:ae2/soakwater/blood_certus' })
	event.remove({ id: 'etshtinker:ae2/soakwater/soul_fluix' })
	//硫化橡胶熔炉配方
	event.remove({ id: 'thermal:smelting/cured_rubber_from_smelting' })
}
)