ServerEvents.recipes(event => {

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
	for (let i of proje) {event.remove({id:`${i}`})}



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
}
)