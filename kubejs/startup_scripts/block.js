StartupEvents.registry("block",event=>{
    event.create("ultra_dense_block","basic").requiresTool(true).hardness(5.0).resistance(2048).tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_netherite_tool').material('netherite').soundType(SoundType.NETHERITE_BLOCK)
    event.create("protonium_block","basic").requiresTool(true).hardness(8.0).resistance(2048).tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_netherite_tool').material('netherite').soundType(SoundType.NETHERITE_BLOCK)
    event.create("electronium_block","basic").requiresTool(true).hardness(8.0).resistance(2048).tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_netherite_tool').material('netherite').soundType(SoundType.NETHERITE_BLOCK)
    event.create("pyrocrystal_ore","basic").requiresTool(true).hardness(6.0).resistance(2048).tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_netherite_tool').material('netherite').soundType(SoundType.ANCIENT_DEBRIS)
    event.create("infernal_blackstone","basic").requiresTool(true).hardness(1.0).resistance(2048).tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool').material('iron').soundType(SoundType.GILDED_BLACKSTONE)
})