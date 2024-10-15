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
	//其他匠魂附属
	event.remove({id:'tinkerscalibration:tools/materials/moonsteel'})
	//pnt
	event.remove([{mod: 'thermal', output: 'thermal:phyto_tnt' }])
  	event.remove([{mod: 'createoreexcavation', output: 'createoreexcavation:vein_finder' }])
  	//etshtinker
  	event.remove({id:'etshtinker:thermal/crystalizer/flawless_budding_quartz'})
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
}
)