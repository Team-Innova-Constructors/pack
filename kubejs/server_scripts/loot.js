LootJS.modifiers(event => {
//移除该模组全部战利品
    event.removeGlobalModifier("@farmersdelight");
    event.removeGlobalModifier("@tconstruct");
    event.removeGlobalModifier("@ars_nouveau");
    event.removeGlobalModifier("@sophisticatedbackpacks");
    event.removeGlobalModifier("@extradelight");
    
    event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["#minecraft:village"], false)
        .addLoot(LootEntry.of("solidarytinker:starfall_ingot").when((c) => c.randomChance(1)));
})