LootJS.modifiers(event => {
    const lootTables = {
        //村庄通用
        village: [
            { item: "immersiveengineering:treated_wood_horizontal", count: 4, chance: 0.75 },
            { item: 'lightmanscurrency:coin_gold', count: 1, chance: 1 },
            { item: 'lightmanscurrency:coin_gold', count: 3, chance: 0.25 },
        ],
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
            { item: "kubejs:aetherium_core", count: 9, chance: 1},
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
    addLootToStructure('#minecraft:village', lootTables.village);
    addLootToStructure('minecraft:end_city', lootTables.end_city);
    addLootToStructure('aether:gold_dungeon', lootTables.gold_dungeon);
    addLootToStructure("undergarden:catacombs", lootTables.catacombs);
    addLootToStructure("aether:silver_dungeon", lootTables.silver_dungeon);
    addLootToStructure("minecraft:fortress", lootTables.fortress);
    addLootToStructure("ad_astra:meteor", lootTables.meteor);
})