LootJS.modifiers(event => {
//移除该模组全部战利品（极度暴力不建议）
    event.removeGlobalModifier("@sophisticatedbackpacks");


    event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["#minecraft:village"], false)
        .addLoot(LootEntry.of("immersiveengineering:treated_wood_horizontal")
        .when((c) => c.randomChance(0.75)));
     event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["#minecraft:village"], false)
        .addLoot(LootEntry.of('lightmanscurrency:coin_gold')
        .when((c) => c.randomChance(0.75)));
})