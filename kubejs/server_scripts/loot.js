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
        ]
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


    //根据战利品表ID增加战利品,可以用指令/loot来查看精确ID
    //和结构添加不同的是有些结构会重复利用原版的已有的战利品表,那类来这边加
    const LootToLootTables = {
        //下界堡垒
        fortress: [
            { item: "tinkers_ingenuity:orichalcum_fragment", count: 1, chance: 0.85 },
        ],
        //末地城
        end_city: [
            { item: "tinkers_ingenuity:orichalcum_fragment", count: 3, chance: 0.7 },
            { item: "tinkers_ingenuity:orichalcum_fragment", count: 1, chance: 1 },
            { item: "tinkers_ingenuity:ender_residual_interest", count: 1, chance: 1 },
        ],
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
    ];
    lootToRemoveFromChest.forEach(removeLootFromChest);
})