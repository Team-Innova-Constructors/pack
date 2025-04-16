ServerEvents.recipes(event => {
	//等价交换相关
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
		'projecte:dark_matter',
		'projecte:red_matter_alt',
		'projecte:rm_katar',
		'projecte:rm_sword',
		'projecte:rm_hammer',
		'projecte:rm_morning_star',
		'projecte:rm_shovel',
		'projecte:rm_shovel',
		'projecte:rm_axe',
		'projecte:rm_pick',
		'projecte:watch_of_flowing_time'
	]
	for (let i of proje) { event.remove({ id: `${i}` }) }
	event.remove({ mod: 'projecte', type: 'crafting_shapeless', input: 'projecte:philosophers_stone' })
	event.remove([{ mod: 'thermal', output: 'thermal:phyto_tnt' }])
	event.remove([{ mod: 'createoreexcavation', output: 'createoreexcavation:vein_finder' }])
	event.remove([{ mod: 'dreadsteel', output: 'dreadsteel:dreadsteel_ingot' }])
	event.remove([{ mod: 'biomancy', output: 'biomancy:primordial_core' }])
	event.remove([{ mod: 'biomancy', output: 'biomancy:maw_hopper' }])
	event.remove([{ mod: 'botania', output: 'botania:loonium' }])
	event.remove([{ mod: 'enigmaticlegacy', output: 'enigmaticlegacy:extradimensional_eye' }])

	//杂七杂八的按照ID移除的配方
	let other = [
		//l2
		'l2hostility:curse_of_wrath',
		'l2hostility:book_of_omniscience',
		'l2hostility:greed_of_nidhoggur',
		'l2complements:vanilla/renew/elytra',
		'l2complements:craft/totem_of_dream',
		'l2hostility:charm_of_looting_2',
		'l2hostility:charm_of_looting_3',
		'l2hostility:charm_of_looting_4',
		'l2hostility:curse_of_envy',
		'l2hostility:curse_of_gluttony',
		'l2hostility:curse_of_lust',
		'l2hostility:curse_of_sloth',
		'l2hostility:abrahadabra',
		'l2hostility:curse_of_greed',
		//pnc的油
		'pneumaticcraft:refinery/oil_2',
		'pneumaticcraft:refinery/oil_3',

		'pneumaticcraft:amadron/lpg_to_emerald',
		'pneumaticcraft:thermo_plant/kerosene',
		'pneumaticcraft:thermo_plant/gasoline',
		'pneumaticcraft:thermo_plant/lpg',
		'pneumaticcraft:thermo_plant/plastic_from_lpg',

		'pneumaticcraft:thermo_plant/lubricant_from_biodiesel',
		'pneumaticcraft:thermo_plant/lubricant_from_diesel',
		'pneumaticcraft:fluid_mixer/biodiesel',
		//热力的
		'thermal:fire_charge/signalum_ingot_4',
		'thermal:fire_charge/lumium_ingot_4',
		'thermal:fire_charge/enderium_ingot_2',
		'thermal:fuels/compression/creosote',
		'thermal:machines/refinery/refinery_heavy_oil',
		'thermal:machines/refinery/refinery_light_oil',
		'thermal:machines/refinery/refinery_crude_oil',
		'thermal:machines/smelter/smelter_alloy_rose_gold',
		'thermal:fuels/compression/compression_refined_fuel',
		'thermal:machines/smelter/smelter_alloy_enderium',
		//mek
		'mekanism:compat/ae2/decorative/certus_quartz/crushing/block_to_chiseled_block',
		'mekanism:mekasuit_helmet',
		'mekanism:mekasuit_bodyarmor',
		'mekanism:mekasuit_pants',
		'mekanism:mekasuit_boots',
		//机械动力和其附属
		'create:sequenced_assembly/precision_mechanism',
		'createutilities:mixing/void_steel_ingot',
		//沉浸
		'immersiveengineering:crafting/blastbrick',
		'immersiveengineering:blastfurnace/steel_block',
		'immersiveengineering:blastfurnace/steel',
		'immersiveengineering:smelting/slag_glass',
		//植物魔法
		'botania:lens_weight',
		//神秘遗物
		'enigmaticlegacy:etherium_ingot_from_blasting',
		'enigmaticlegacy:etherium_ingot',
		//指路石,那个盘子会刷物品
		'waystones:warp_stone',
		'waystones:warp_plate',
		//戈伯
		'gobber2:blastfurnace',
		'gobber2:gobber2_ingot',
		'gobber2:gobber2_ingot_nether',
		'gobber2:gobber2_ingot_end',
		//etshtinker
		'etshtinker:immersiveengineering/arcfurnace/exo_alloy',
		'etshtinker:thermal/crystalizer/flawless_budding_quartz',
		//工匠创新等匠魂附属
		'tinkersinnovation:items/polychrome_mix',
		'cherrytinker:tables/enchantedgold_block',
		'cherrytinker:tables/enchantedgold_ingot',
		'solidarytinker:table/icefantasy_ingot',
		'solidarytinker:casting/starfall_ingot',
		'solidarytinker:table/experience_steel_ingot',
		'solidarytinker:casting/extremelycoldsteel_ingot',
		'solidarytinker:smeltery/alloy/super_dt',
		'solidarytinker:context/botania/mana_infusion/magicuranium_ingot',
		'solidarytinker:context/mekanism/reaction/extremelycoldsteel_ingot',
		'solidarytinker:smeltery/alloy/dwarf',
		'tinkerscalibration:tools/materials/moonsteel',
		'tinkers_ingenuity:tables/materials/sea_dream',
		//匠魂
		'tconstruct:smeltery/melting/metal/gold/powered_rail',
		'tconstruct:smeltery/melting/metal/iron/nugget_3',
		'tconstruct:smeltery/melting/metal/iron/ingot_1',
		'tconstruct:smeltery/alloys/molten_pewter',
		'tconstruct:smeltery/melting/metal/signalum/ingot',
		//其他
		'lightmanscurrency:coinmint',
		'twilightforest:uncrafting_table',
		'entangled:block',
		'megacells:inscriber/bulk_cell_component',
	]
	for (let k of other) { event.remove({ id: `${k}` }) }

	//其他根据mod和物品ID移除的配方
	event.remove({ mod: 'explorerscompass', output: 'explorerscompass:explorerscompass' })
	event.remove({ mod: 'naturescompass', output: 'naturescompass:naturescompass' })
	event.remove({ mod: 'l2hostility', output: 'l2hostility:curse_of_pride' })
	event.remove({ mod: 'l2hostility', output: 'l2hostility:curse_of_wrath' })
	event.remove({ mod: 'cyclic', output: 'cyclic:tile_transporter_empty' })
	event.remove({ mod: 'industrialforegoing', output: 'industrialforegoing:item_transporter_type' })
	event.remove({ mod: 'industrialforegoing', output: 'industrialforegoing:fluid_transporter_type' })
	event.remove({ mod: 'industrialforegoing', output: 'industrialforegoing:world_transporter_type' })

	event.remove({ id: 'toms_storage:adv_wireless_terminal' })
	event.remove({ id: 'industrialforegoing:gold_gear' })
	event.remove({ id: 'drinkbeer:trade_box_normal' })
	//powah能耗增加
	let powah = [
		'powah:energizing/dry_ice',
		'powah:energizing/certus_quartz_to_charged_certus_quartz',
		'powah:energizing/spirited_crystal',
		'powah:energizing/niotic_crystal',
		'powah:energizing/energized_steel',
		'powah:energizing/blazing_crystal',
		'powah:energizing/blazing_crystal_2',
	]
	for (let k of powah) { event.remove({ id: `${k}` }) }
	//移除原有矿脉
	let coe = [
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
	for (let i of coe) { event.remove({ id: `${i}` }) }
	let immersiveengineeringore = [
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
		'immersiveengineering:mineral/auricupride',
		'immersiveengineering:mineral/chalcopyrite',
		'createaddition:compat/immersiveengineering/sphalerite',
		'immersivepetroleum:reservoirs/aquifer',
		'immersivepetroleum:reservoirs/lava',
		'immersivepetroleum:reservoirs/oil',
		'immersivepetroleum:coking/petcoke',
	]
	for (let i of immersiveengineeringore) { event.remove({ id: `${i}` }) }
	//莱特兰附魔书
	let l2enchantbook = [
		'l2complements:enchantments/projectile_reject',
		'l2complements:enchantments/fire_reject',
		'l2complements:enchantments/environment_reject',
		'l2complements:enchantments/explosion_reject',
		'l2complements:enchantments/magic_reject',
		'l2complements:enchantments/invincible',
		'l2complements:enchantments/void_touch',
	]
	for (let i of l2enchantbook) { event.remove({ id: `${i}` }) }
	//循环
	let cyclics = [
		'cyclic:soulstone',
		'cyclic:flute_summoning',
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
	for (let i of cyclics) { event.remove({ id: `${i}` }) }
	//堆
	let pile = [
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
	for (let i of pile) {
		event.remove([{ mod: 'lightmanscurrency', output: `${i}` }])
	}
	//并行
	let accelerator = [
		'bigger_ae2:4_core_crafting_accelerator',
		'bigger_ae2:256_core_crafting_accelerator',
		'bigger_ae2:64_core_crafting_accelerator',
		'bigger_ae2:16_core_crafting_accelerator',
		'bigger_ae2:1024_core_crafting_accelerator'
	]
	for (let i of accelerator) {
		event.remove([{ mod: 'bigger_ae2', output: `${i}` }])
	}

	//过时的生铁配方
	let pigiron = [
		'createaddition:compat/tconstruct/pig_iron',
		'createaddition:compat/tconstruct/pig_iron_2',
		'thermal:compat/tconstruct/smelter_alloy_tconstruct_pigiron_ingot'
	]
	for (let i of pigiron) { event.remove({ id: `${i}` }) }
}
)