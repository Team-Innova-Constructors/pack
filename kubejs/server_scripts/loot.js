LootJS.modifiers(event => {
//移除该模组全部战利品（极度暴力不建议）
    event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["#minecraft:village"], false)
        .addLoot(LootEntry.of("immersiveengineering:treated_wood_horizontal")
        .when((c) => c.randomChance(2.75)));
     event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["#minecraft:village"], false)
        .addLoot(LootEntry.of('lightmanscurrency:coin_gold')
        .when((c) => c.randomChance(0.75)));
    event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["undergarden:catacombs"], false)
        .addLoot(LootEntry.of("kubejs:aetherium_core",9)
        .when((c) => c.randomChance(9.5)));
    event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["aether:gold_dungeon"], false)
        .addLoot(LootEntry.of("kubejs:violium_core",12)
        .when((c) => c.randomChance(12.5)));
    event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["undergarden:catacombs"], false)
        .addLoot(LootEntry.of("cti:protonium_ammo",9)
        .when((c) => c.randomChance(1.75)));
    event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["aether:silver_dungeon"], false)
        .addLoot(LootEntry.of("cti:electronium_ammo",9)
        .when((c) => c.randomChance(1.75)));
        
})