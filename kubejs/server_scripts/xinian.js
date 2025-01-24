ServerEvents.recipes(event => {
    event.recipes.minecraft.smelting('minecraft:leather', Ingredient.of('minecraft:rotten_flesh'), 0.15, 200);
});
ServerEvents.recipes(event => {
    event.recipes.minecraft.smoking('minecraft:leather', Ingredient.of('minecraft:rotten_flesh'), 0.15, 100);
});
ServerEvents.recipes(event => {
    // 熔炉配方
    event.recipes.minecraft.smelting('minecraft:leather', 'minecraft:phantom_membrane', 0.15, 200);

    // 烟熏炉配方
    event.recipes.minecraft.smoking('minecraft:leather', 'minecraft:phantom_membrane', 0.15, 100);
});
ServerEvents.recipes(event => {
    // 移除鞘翅的合成配方
    event.remove({ output: 'minecraft:elytra' });
});
ServerEvents.recipes(event => {
    event.shaped('minecraft:elytra', [
        'PPP',
        'PPP',
        '   '
    ], {
        P: 'minecraft:phantom_membrane'
    });
});