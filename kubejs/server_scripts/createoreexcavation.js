ServerEvents.recipes(event =>
{
//机械动力：矿石开掘配方,drilling后面的括号是需要输出的物品,矿脉名称,生成权重,以 32 RPM 为单位的提取时间。
//石英矿
event.recipes.createoreexcavation.drilling([Item.of('minecraft:quartz'),Item.of('minecraft:ancient_debris').withChance(0.05)],'{"text": "石英矿"}', 100, 80)
//钻头等级
.drill('createoreexcavation:netherite_drill')
//生物群落白名单
.biomeWhitelist('minecraft:is_nether')
//应力值
.stress(256)
//配方id
.id("quartz");


//重金属高温熔岩
event.recipes.createoreexcavation.extracting('kubejs:hot_heavymetal_lava 1000','{"text": "重金属高温熔岩"}', 30, 80)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//应力值
.stress(512)
//生物群落白名单
.biomeWhitelist('minecraft:is_overworld')
//配方id
.id("hot_heavymetal_lava");

//晶体高温熔岩
event.recipes.createoreexcavation.extracting('kubejs:hot_heavycrystal_lava 1000','{"text": "晶体高温熔岩"}', 30, 80)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//应力值
.stress(512)
//生物群落白名单
.biomeWhitelist('minecraft:is_overworld')
//配方id
.id("hot_heavycrystal_lava");

event.recipes.createoreexcavation.extracting('tconstruct:sky_slime 2000','{"text": "碧空史莱姆"}', 50, 80)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//应力值
.stress(256)
//生物群落白名单
.biomeWhitelist('minecraft:is_overworld')
//配方id
.id("sky_slime");

event.recipes.createoreexcavation.extracting('tconstruct:earth_slime 2000','{"text": "大地史莱姆"}', 50, 80)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//应力值
.stress(256)
//生物群落白名单
.biomeWhitelist('minecraft:is_overworld')
//配方id
.id("earth_slime");

event.recipes.createoreexcavation.extracting('tconstruct:ender_slime 2000','{"text": "末影史莱姆"}', 50, 80)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//应力值
.stress(256)
//生物群落白名单
.biomeWhitelist('minecraft:is_end')
//配方id
.id("end_slime");


//贫油
event.recipes.createoreexcavation.extracting('immersivepetroleum:crudeoil 500','{"text": "贫油"}', 200, 80)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//应力值
.stress(128)
//生物群落白名单
.biomeWhitelist('minecraft:is_overworld')
//配方id
.id("poor_oil");


//富油
event.recipes.createoreexcavation.extracting('immersivepetroleum:crudeoil 4000','{"text": "富油"}', 20, 80)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//无限量
.alwaysInfinite()
//应力值
.stress(128)
//生物群落白名单
.biomeWhitelist('forge:is_dry/overworld')
//配方id
.id("rich_oil");


//钴-阿迪特伴生矿
event.recipes.createoreexcavation.drilling([Item.of('tconstruct:raw_cobalt'), Item.of('tinkers_thinking:raw_ardite')], '{"text": "钴-阿迪特伴生矿"}', 100, 80)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_nether')
.stress(128)
.id("cobalt_ardite_complex");


//衰变铅矿
event.recipes.createoreexcavation.drilling([Item.of('thermal:raw_lead'), Item.of('mekanism:raw_uranium')],'{"text": "衰变铅矿"}', 100, 80)
.drill('#createoreexcavation:drills')
.biomeWhitelist('minecraft:is_overworld')
.stress(64)
.id("lead");


//重金属矿
event.recipes.createoreexcavation.drilling([Item.of('minecraft:raw_gold'), Item.of('mekanism:raw_osmium'),Item.of('thermal:raw_silver')],'{"text": "重金属矿"}', 100, 80)
.drill('#createoreexcavation:drills')
.biomeWhitelist('minecraft:is_overworld')
.stress(256)
.id("osmium");


//硫化物矿
event.recipes.createoreexcavation.drilling([Item.of('thermal:cinnabar'), Item.of('thermal:sulfur')],'{"text": "朱砂矿"}', 150, 80)
.drill('#createoreexcavation:drills')
.biomeWhitelist('minecraft:is_overworld')
.stress(120)
.id("cinnabar");


//硫化铁矿
event.recipes.createoreexcavation.drilling([Item.of('minecraft:raw_iron'), Item.of('etshtinker:bismuthinite').withChance(0.5)], '{"text": "硫化铁矿"}', 200, 80)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_overworld')
.stress(256)
.id("iron_sulfide");


//赤铁矿
event.recipes.createoreexcavation.drilling([Item.of('minecraft:raw_iron'), Item.of('createoreexcavation:raw_redstone'),Item.of('minecraft:redstone').withChance(0.25)], '{"text": "赤铁矿"}', 100, 80)
.drill('#createoreexcavation:second_createore_drill')
.biomeWhitelist('minecraft:is_overworld')
.stress(256)
.id("red_iron_ore");


//闪锌矿
event.recipes.createoreexcavation.drilling([Item.of('create:raw_zinc'), Item.of('minecraft:raw_iron'),Item.of('thermal:sulfur')], '{"text": "闪锌矿"}', 100, 80)
.drill('#createoreexcavation:second_createore_drill')
.biomeWhitelist('minecraft:is_overworld')
.stress(256)
.id("sphalerite");


//烟煤矿
event.recipes.createoreexcavation.drilling([Item.of('minecraft:coal'), Item.of('thermal:sulfur'),Item.of('gobber2:gobber2_foo').withChance(0.1)], '{"text": "烟煤矿"}', 100, 80)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_overworld')
.stress(128)
.id("bituminous_coal");


//高压晶体宝石矿
event.recipes.createoreexcavation.drilling([Item.of('createoreexcavation:raw_diamond'), Item.of('createoreexcavation:raw_emerald'),Item.of('minecraft:amethyst_cluster'),Item.of('minecraft:lapis_lazuli')], '{"text": "高压晶体矿"}', 50, 80)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_overworld')
.stress(512)
.id("high_pressure_crystals");


//黄铜矿
event.recipes.createoreexcavation.drilling([Item.of('minecraft:raw_copper_block'), Item.of('minecraft:raw_iron'),Item.of('minecraft:raw_gold').withChance(0.3),Item.of('thermal:raw_silver').withChance(0.4)], '{"text": "黄铜矿"}', 50, 80)
.drill('#createoreexcavation:second_createore_drill')
.biomeWhitelist('minecraft:is_overworld')
.stress(256)
.id("chalcopyrite");


//浓质铝硅酸盐矿
event.recipes.createoreexcavation.drilling([Item.of('immersiveengineering:raw_aluminum'), Item.of('minecraft:raw_iron'),Item.of('ae2:silicon').withChance(0.3),Item.of('gobber2:gobber2_globette').withChance(0.1)], '{"text": "浓质铝硅酸盐矿"}', 50, 80)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:water')
.biomeWhitelist('minecraft:is_overworld')
.stress(256)
.id("al");


//硫化镍矿
event.recipes.createoreexcavation.drilling([Item.of('thermal:sulfur_dust').withChance(0.3), Item.of('thermal:raw_tin'),Item.of('thermal:raw_nickel')], '{"text": "硫化镍矿"}', 50, 80)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_overworld')
.stress(256)
.id("surfur_nickel");

//络合物矿
event.recipes.createoreexcavation.drilling([Item.of('kubejs:crystal_ender').withChance(0.2), Item.of('kubejs:crystal_glowstone').withChance(0.2),Item.of('kubejs:crystal_redstone').withChance(0.2)], '{"text": "络合物矿"}', 50, 80)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:water')
.biomeWhitelist('minecraft:is_overworld')
.stress(256)
.id("complex");
},
);