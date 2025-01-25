ServerEvents.recipes(event => {
    event.recipes.minecraft.smelting('minecraft:leather', 'minecraft:phantom_membrane', 0.15, 200);
    event.recipes.minecraft.smelting('minecraft:leather', Ingredient.of('minecraft:rotten_flesh'), 0.15, 200);
    event.recipes.minecraft.smoking('minecraft:leather', 'minecraft:phantom_membrane', 0.15, 100);
    event.recipes.minecraft.smoking('minecraft:leather', Ingredient.of('minecraft:rotten_flesh'), 0.15, 100);
});