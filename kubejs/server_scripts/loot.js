LootJS.modifiers(event => {
    //根据结构添加
    //想要加新的直接写新数组,然后加一行下面的addLootToStructure
    //addLootToStructure函数第一个参数对应结构(可以标签),第二个参数对应StructurelootTables的数组名
    const StructurelootTables = {
        //村庄通用
        village: [
            { item: "immersiveengineering:treated_wood_horizontal", count: 4, chance: 0.75 },
            { item: 'lightmanscurrency:coin_gold', count: 1, chance: 1 },
            { item: 'lightmanscurrency:coin_gold', count: 3, chance: 0.25 },
        ],
        //黄金地牢
        gold_dungeon: [
            { item: "kubejs:violium_core", count: 12, chance: 1 },
        ],
        //白银地牢
        silver_dungeon: [
            { item: "cti:electronium_ammo", count: 2, chance: 0.7 },
        ],
        //下僻巢穴
        catacombs: [
            { item: "cti:protonium_ammo", count: 2, chance: 0.7 },
            { item: "kubejs:aetherium_core", count: 9, chance: 1 },
        ],
        //AD的陨石
        meteor: [
            { item: 'ae2:item_storage_cell_16k', count: 1, chance: 1 },
            { item: 'ae2:item_storage_cell_16k', count: 2, chance: 0.75 },
            { item: 'ae2:fluid_storage_cell_16k', count: 1, chance: 1 },
            { item: 'ae2:fluid_storage_cell_16k', count: 2, chance: 0.75 },
        ],
        //月球村庄
        moonVillage: [
            { item: 'ae2:item_storage_cell_256k', count: 1, chance: 0.3 },
            { item: 'ae2:fluid_storage_cell_256k', count: 1, chance: 0.3 },
            { item: 'appmek:chemical_storage_cell_256k', count: 1, chance: 0.3 },
            { item: 'ae2:fluix_smart_dense_cable', count: 26, chance: 0.8 },
            { item: 'ae2:drive', count: 1, chance: 0.4 },
            { item: 'ae2:energy_cell', count: 1, chance: 0.4 },
        ],
        //月球地牢
        moonDungeon: [
            { item: 'megacells:cell_component_1m', count: 2, chance: 0.3 },
            { item: 'megacells:cell_component_4m', count: 1, chance: 0.15 },
            { item: 'bigger_ae2:quantum_cell_component', count: 1, chance: 0.3 },
            { item: 'bigger_ae2:quantum_cell_component', count: 2, chance: 0.15 },
            { item: 'ae2:dense_energy_cell', count: 1, chance: 0.8 },
            { item: 'megacells:mega_energy_cell', count: 1, chance: 0.2 },
            { item: 'gravitationalmodulatingunittweaks:module_gravitational_modulating_additional_unit', count: 1, chance: 0.2 },
            { item: 'ae2:creative_energy_cell', count: 1, chance: 0.05 },
        ],
    };
    function addLootToStructure(structureID, lootEntries) {
        lootEntries.forEach(entry => {
            event.addLootTypeModifier(LootType.CHEST)
                .anyStructure([structureID], false)
                .addLoot(LootEntry.of(entry.item, entry.count)
                    .when((c) => c.randomChance(entry.chance)));
        });
    }

    addLootToStructure('#minecraft:village', StructurelootTables.village);
    addLootToStructure('aether:gold_dungeon', StructurelootTables.gold_dungeon);
    addLootToStructure("undergarden:catacombs", StructurelootTables.catacombs);
    addLootToStructure("aether:silver_dungeon", StructurelootTables.silver_dungeon);
    addLootToStructure("ad_astra:meteor", StructurelootTables.meteor);
    addLootToStructure("ad_astra:lunar_tower", StructurelootTables.moonVillage);
    addLootToStructure("ad_astra:lunarian_village", StructurelootTables.moonVillage);
    addLootToStructure("ad_astra:moon_dungeon", StructurelootTables.moonDungeon);
    addLootToStructure("ad_astra:moon_dungeon", StructurelootTables.moonDungeon);


    //根据战利品表ID增加战利品,可以用指令/loot来查看精确ID
    //和结构添加不同的是有些结构会重复利用原版的已有的战利品表,那类来这边加
    const LootToLootTables = {
        //下界堡垒
        fortress: [
            { item: "tinkers_ingenuity:orichalcum_fragment", count: 1, chance: 0.85 },//山铜碎块
            { item: 'etshtinker:basalz_signalum', count: 1, chance: 1 },//地岩信素
            { item: 'etshtinker:basalz_signalum', count: 3, chance: 0.8 },
        ],
        //末地城
        end_city: [
            { item: "tinkers_ingenuity:orichalcum_fragment", count: 3, chance: 0.7 },//山铜碎块
            { item: "tinkers_ingenuity:orichalcum_fragment", count: 1, chance: 1 },
            { item: "tinkers_ingenuity:ender_residual_interest", count: 1, chance: 1 },//末影残息
        ],
        //悚陵
        mausoleum:[
            { item: 'etshtinker:blizz_enderium', count: 5, chance: 0.6 },//霜覆末影
            { item: 'etshtinker:blizz_enderium', count: 2, chance: 1 },
        ],
        //沙漠神殿
        desertPyramid:[
            { item: 'etshtinker:blitz_lumium', count: 1, chance: 1 },//震荡流明
            { item: 'etshtinker:blitz_lumium', count: 3, chance: 0.85 },
        ],
        //迷阵冰封箱子
        frozenChest:[
            { item: 'avaritia:infinity_nugget', count: 1, chance: 1 },//无尽液滴
            { item: Item.of('tconstruct:creative_slot', '{slot:"abilities"}'), count: 1, chance: 0.8 },//创造能力槽
        ],
        //亡灵海盗船普通宝藏
        seas_dungeon_ship_cheap:[
            { item: 'cyclic:gem_amber', count: 2, chance: 0.6 },//琥珀结晶
            { item: 'tconstruct:hepatizon_ingot', count: 2, chance: 0.6 },//黑色科林斯青铜
        ],
        //亡灵海盗船高级宝藏
        seas_dungeon_ship_treasure:[
            { item: 'cyclic:gem_obsidian', count: 2, chance: 0.6 },//黑耀石结晶
            { item: 'industrialforegoing:advanced_black_hole_tank', count: 1, chance: 0.4 },//黑洞流体储罐T3
            { item: 'l2complements:explosion_shard', count: 2, chance: 0.4 },//破灭残片
            { item: Item.of('sophisticatedstorage:netherite_barrel', '{woodType:"oak"}'), count: 1, chance: 0.4 },//下界合金木桶
        ],
        //掠夺者营地
        pillager_outpost_treasure:[
            { item: 'lightmanscurrency:coin_gold', count: 2, chance: 0.8 },//金币
            { item: 'lightmanscurrency:coin_gold', count: 2, chance: 0.8 },//金币
        ],
        //飞艇燃料箱
        small_blimp_coal_chest:[
            { item: 'gobber2:gobber2_foo', count: 5, chance: 0.9 },//戈伯煤炭三种
            { item: 'gobber2:gobber2_foo_nether', count: 5, chance: 0.8 },
            { item: 'gobber2:gobber2_foo_end', count: 5, chance: 0.7 },
            { item: 'projecte:alchemical_coal', count: 5, chance: 0.4 },//等价炼金煤炭
        ],
        //飞艇红石箱子
        small_blimp_redstone_chest:[
            { item: 'kubejs:crystal_redstone', count: 12, chance: 0.9 },//红石络合物
            { item: 'minecraft:redstone_block', count: 5, chance: 0.7 },//红石块
            
        ],
        //飞艇宝藏
        small_blimp_treasure:[
            { item: 'l2complements:space_shard', count: 3, chance: 0.5 },//逐日之翼
            { item: 'l2complements:soul_flame', count: 2, chance: 0.7 },//魂火
            { item: 'l2complements:cursed_droplet', count: 3, chance: 0.8 },//亡魂泪
        ],
        //冰火墓地
        iaf_graveyard:[
            {item: 'enigmaticlegacy:soul_compass', count: 1, chance: 1 },
        ]
    }
    function addLootToTable(LootTableID, lootEntries) {
        lootEntries.forEach(entry => {
            event.addLootTableModifier(LootTableID)
            .addLoot(LootEntry.of(entry.item, entry.count)
                    .when((c) => c.randomChance(entry.chance)))
        });
    }

    addLootToTable("minecraft:chests/nether_fortress/fort_inside", LootToLootTables.fortress);
    addLootToTable("minecraft:chests/nether_fortress/fort_inside_generic", LootToLootTables.fortress);
    addLootToTable("minecraft:chests/end_city_treasure", LootToLootTables.end_city);
    addLootToTable("iceandfire:chest/mausoleum_chest", LootToLootTables.mausoleum);
    addLootToTable("iceandfire:chest/graveyard", LootToLootTables.iaf_graveyard);
    addLootToTable("minecraft:chests/desert_pyramid", LootToLootTables.desertPyramid);
    addLootToTable("aquamirae:chests/frozen_chest", LootToLootTables.frozenChest);
    addLootToTable("dungeons_arise:chests/undead_pirate_ship/undead_pirate_ship_barrels", LootToLootTables.seas_dungeon_ship_cheap);
    addLootToTable("dungeons_arise:chests/undead_pirate_ship/undead_pirate_ship_enchants", LootToLootTables.seas_dungeon_ship_cheap);
    addLootToTable("dungeons_arise:chests/undead_pirate_ship/undead_pirate_ship_supply", LootToLootTables.seas_dungeon_ship_cheap);
    addLootToTable("dungeons_arise:chests/undead_pirate_ship/undead_pirate_ship_treasure", LootToLootTables.seas_dungeon_ship_treasure);
    addLootToTable("dungeons_arise:chests/small_blimp/small_blimp_coal_storage", LootToLootTables.small_blimp_coal_chest);
    addLootToTable("dungeons_arise:chests/small_blimp/small_blimp_redstone_chamber", LootToLootTables.small_blimp_redstone_chest);
    addLootToTable("dungeons_arise:chests/small_blimp/small_blimp_treasure", LootToLootTables.small_blimp_treasure);
    addLootToTable("dungeons_arise_seven_seas:chests/corsair_corvette/corsair_corvette_barrels", LootToLootTables.seas_dungeon_ship_cheap);
    addLootToTable("dungeons_arise_seven_seas:chests/corsair_corvette/corsair_corvette_normal", LootToLootTables.seas_dungeon_ship_cheap);
    addLootToTable("dungeons_arise_seven_seas:chests/corsair_corvette/corsair_corvette_treasure", LootToLootTables.seas_dungeon_ship_treasure);


    //全局战利品表(按照表移除,参照data/forge/globalxxxx那个)
    function removeGlobalLoot(GlobalLootID) {
        event.removeGlobalModifier(GlobalLootID);
    }

    const globalLootToRemove = [
        "farmersdelight:add_loot_abandoned_mineshaft",
        "farmersdelight:add_loot_bastion_hoglin_stable",
        "farmersdelight:add_loot_bastion_treasure",
        "farmersdelight:add_loot_end_city_treasure",
        "farmersdelight:add_loot_pillager_outpost",
        "farmersdelight:add_loot_ruined_portal",
        "farmersdelight:add_loot_shipwreck_supply",
        "farmersdelight:add_loot_simple_dungeon",
        "farmersdelight:add_loot_village_butcher",
        "farmersdelight:add_loot_village_plains_house",
        "farmersdelight:add_loot_village_taiga_house",
        "farmersdelight:add_loot_village_snowy_house",
        "farmersdelight:add_loot_village_desert_house",
        "farmersdelight:add_loot_village_savanna_house",
        "aether:gloves_loot_leather",
        "aether:gloves_loot_gold",
        "aether:gloves_loot_chain",
        "aether:gloves_loot_iron",
        "aether:gloves_loot_diamond",
        "aether:gloves_loot_netherite",
        "ars_nouveau:dungeon_loot",
        "pneumaticcraft:dungeon_loot"
    ];
    globalLootToRemove.forEach(removeGlobalLoot);

    //按照战利品位置来移除
    function disableLootbyLocation(lootId) {
        event.disableLootModification(lootId);
    }
    const lootLocation = [
        "sophisticatedbackpacks:inject/chests/woodland_mansion",
        "sophisticatedbackpacks:inject/chests/simple_dungeon",
        "sophisticatedbackpacks:inject/chests/shipwreck_treasure",
        "sophisticatedbackpacks:inject/chests/nether_bridge",
        "sophisticatedbackpacks:inject/chests/end_city_treasure",
        "sophisticatedbackpacks:inject/chests/desert_pyramid",
        "sophisticatedbackpacks:inject/chests/bastion_treasure",
        "sophisticatedbackpacks:inject/chests/abandoned_mineshaft"
    ];
    lootLocation.forEach(disableLootbyLocation);

    //移除全局宝箱中的特定物品(部分战利品数据包中没有战利品表,或者injector用这个移除)
    function removeLootFromChest(lootId) {
        event.addLootTypeModifier(LootType.CHEST).removeLoot(lootId);
    }
    const lootToRemoveFromChest = [
        'tconstruct:earth_slime_sapling',
        '#kubejs:vanilla_equipment',
        'tconstruct:earth_slime_grass_seeds',
        'tconstruct:blood_slime_sapling',
        'tconstruct:blood_slime_grass_seeds',
        'tconstruct:sky_slime_grass_seeds',
        'tconstruct:sky_slime_sapling',
        'tconstruct:ender_slime_grass_seeds',
        'tconstruct:ender_slime_sapling',
        "sophisticatedbackpacks:backpack",
        "sophisticatedbackpacks:copper_backpack",
        "sophisticatedbackpacks:iron_backpack",
        "sophisticatedbackpacks:gold_backpack",
        "sophisticatedbackpacks:diamond_backpack",
        "sophisticatedbackpacks:magnet_upgrade",
        'sophisticatedbackpacks:advanced_magnet_upgrade',
        "sophisticatedbackpacks:feeding_upgrade",
        'minecraft:leather_horse_armor',
        'minecraft:golden_horse_armor',
        'minecraft:iron_horse_armor',
        'minecraft:diamond_horse_armor',

    ];
    lootToRemoveFromChest.forEach(removeLootFromChest);
})