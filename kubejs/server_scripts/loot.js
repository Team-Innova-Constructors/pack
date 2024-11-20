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
    event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["minecraft:end_city"], false)
        .addLoot(LootEntry.of("tinkers_ingenuity:orichalcum_fragment",3)
        .when((c) => c.randomChance(0.25)));
    event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["minecraft:end_city"], false)
        .addLoot(LootEntry.of("tinkers_ingenuity:orichalcum_fragment",2)
        .when((c) => c.randomChance(0.75)));
    event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["minecraft:end_city"], false)
        .addLoot(LootEntry.of("tinkers_ingenuity:orichalcum_fragment",1)
        .when((c) => c.randomChance(0.9)));
    event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["minecraft:end_city"], false)
        .addLoot(LootEntry.of("tinkers_ingenuity:ender_residual_interest",1)
        .when((c) => c.randomChance(1)));
    event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["minecraft:end_city"], false)
        .addLoot(LootEntry.of("tinkers_ingenuity:ender_residual_interest",1)
        .when((c) => c.randomChance(0.5)));
    event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["minecraft:end_city"], false)
        .addLoot(LootEntry.of("tinkers_ingenuity:ender_residual_interest",1)
        .when((c) => c.randomChance(0.25)));
    event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["minecraft:fortress"], false)
        .addLoot(LootEntry.of("tinkers_ingenuity:orichalcum_fragment",1)
        .when((c) => c.randomChance(0.55)));
        
})