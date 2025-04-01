ServerEvents.recipes(event =>
{
//机械动力：矿石开掘配方,drilling后面的括号是需要输出的物品,矿脉名称,生成权重,以 32 RPM 为单位的提取时间。
//石英矿
event.recipes.createoreexcavation.drilling([Item.of('minecraft:quartz'),Item.of('minecraft:ancient_debris').withChance(0.3)],'{"text": "石英矿"}', 50, 80)
//钻头等级
.drill('createoreexcavation:netherite_drill')
//生物群落白名单
.biomeWhitelist('minecraft:is_nether')
//应力值
.stress(256)
//配方id
.id("quartz");


//重金属高温熔岩
event.recipes.createoreexcavation.extracting('kubejs:hot_heavymetal_lava 1000','{"text": "重金属高温熔岩"}', 60, 80)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//应力值
.stress(512)
//生物群落白名单
.biomeWhitelist('minecraft:is_overworld')
//配方id
.id("hot_heavymetal_lava");

event.recipes.createoreexcavation.extracting('kubejs:royal_jelly 1000','{"text": "蜂王浆"}', 60, 80)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//应力值
.stress(512)
//生物群落白名单
.biomeWhitelist('minecraft:is_overworld')
//配方id
.id("royal_jelly");

//晶体高温熔岩
event.recipes.createoreexcavation.extracting('kubejs:hot_heavycrystal_lava 1000','{"text": "晶体高温熔岩"}', 60, 80)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//应力值
.stress(512)
//生物群落白名单
.biomeWhitelist('minecraft:is_overworld')
//配方id
.id("hot_heavycrystal_lava");

event.recipes.createoreexcavation.extracting('tconstruct:sky_slime 2000','{"text": "碧空史莱姆"}', 60, 80)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//应力值
.stress(256)
//生物群落白名单
.biomeWhitelist('minecraft:is_overworld')
//配方id
.id("sky_slime");

event.recipes.createoreexcavation.extracting('tconstruct:earth_slime 2000','{"text": "大地史莱姆"}', 60, 80)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//应力值
.stress(256)
//生物群落白名单
.biomeWhitelist('minecraft:is_overworld')
//配方id
.id("earth_slime");

event.recipes.createoreexcavation.extracting('tconstruct:ender_slime 2000','{"text": "末影史莱姆"}', 60, 80)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//应力值
.stress(256)
//生物群落白名单
.biomeWhitelist('minecraft:is_end')
//配方id
.id("end_slime");

//富油
event.recipes.createoreexcavation.extracting('immersivepetroleum:crudeoil 4000','{"text": "富油"}', 30, 80)
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
event.recipes.createoreexcavation.drilling([Item.of('tconstruct:raw_cobalt'), Item.of('tinkers_thinking:raw_ardite'),Item.of('tinkerscalibration:raw_inert_witherium').withChance(0.2)], '{"text": "钴-阿迪特伴生矿"}', 50, 80)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_nether')
.stress(128)
.id("cobalt_ardite_complex");


//朱砂矿
event.recipes.createoreexcavation.drilling([Item.of('thermal:cinnabar'), Item.of('thermal:sulfur')],'{"text": "朱砂矿"}', 60, 80)
.drill('#createoreexcavation:drills')
.biomeWhitelist('minecraft:is_overworld')
.stress(120)
.id("cinnabar");


//硫化铁矿
event.recipes.createoreexcavation.drilling([Item.of('minecraft:raw_iron'), Item.of('etshtinker:bismuthinite').withChance(0.5)], '{"text": "硫化铁矿"}', 60, 80)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_overworld')
.stress(256)
.id("iron_sulfide");


//戈伯矿
event.recipes.createoreexcavation.drilling([Item.of('gobber2:gobber2_globette'),Item.of('gobber2:gobber2_foo').withChance(0.5),Item.of('gobber2:gobber2_foo_nether').withChance(0.3),Item.of('gobber2:gobber2_foo_end').withChance(0.2)], '{"text": "戈伯煤矿"}', 60, 80)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_overworld')
.stress(128)
.id("gobber_ball");


//高压晶体宝石矿
event.recipes.createoreexcavation.drilling([Item.of('createoreexcavation:raw_diamond'), Item.of('createoreexcavation:raw_emerald'),Item.of('minecraft:amethyst_cluster'),Item.of('minecraft:lapis_lazuli')], '{"text": "高压晶体矿"}', 60, 80)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_overworld')
.stress(512)
.id("high_pressure_crystals");


//浓质磷硅酸盐矿
event.recipes.createoreexcavation.drilling([Item.of('ae2:silicon').withChance(0.7),Item.of('minecraft:clay').withChance(0.8),Item.of('thermal:apatite')],'{"text": "浓质磷硅酸盐矿"}', 60, 80)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:water')
.biomeWhitelist('minecraft:is_overworld')
.stress(256)
.id("al");


//络合物矿
event.recipes.createoreexcavation.drilling([Item.of('kubejs:crystal_ender').withChance(0.8), Item.of('kubejs:crystal_glowstone').withChance(0.8),Item.of('kubejs:crystal_redstone').withChance(0.8)], '{"text": "络合物矿"}', 60, 80)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:water')
.biomeWhitelist('minecraft:is_overworld')
.stress(256)
.id("complex");



//工匠金属补给矿
event.recipes.createoreexcavation.drilling([Item.of('tinkerscalibration:raw_magiga').withChance(0.5), Item.of('tinkerscalibration:raw_tonium').withChance(0.5),Item.of('tinkerscalibration:steamium_nugget')], '{"text": "工匠金属矿"}',60, 80)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_overworld')
.stress(256)
.id("tinkersmetal");



//工匠宝石补给矿
event.recipes.createoreexcavation.drilling([Item.of('tinkers_reforged:red_beryl_gem').withChance(0.2), Item.of('tinkers_reforged:epidote_gem').withChance(0.2),Item.of('tinkers_reforged:hureaulite_gem').withChance(0.2),Item.of('tinkerscalibration:corundum').withChance(0.2),Item.of('tinkerscalibration:vibrating_crystal').withChance(0.2),Item.of('tinkerscalibration:spinel').withChance(0.2)], '{"text": "工匠宝石矿"}', 40, 80)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_overworld')
.stress(256)
.id("tinkersgem");


//沉银霍斯恒星金属
event.recipes.createoreexcavation.drilling([Item.of('tinkerscalibration:raw_immersed_silver').withChance(0.8), Item.of('tinkerscalibration:raw_hothium').withChance(0.5),Item.of('tinkerscalibration:raw_stellarium').withChance(0.9)], '{"text": "詹姆氏稀有金属矿"}', 40, 80)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:water')
.biomeWhitelist('forge:is_cold')
.stress(256)
.id("james");

//热核
event.recipes.createoreexcavation.drilling([Item.of('powah:uraninite_raw').withChance(1.2), Item.of('powah:dry_ice').withChance(0.6),Item.of('gobber2:gobber2_foo').withChance(0.9)], '{"text": "热核能源矿"}', 40, 80)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:water')
.biomeWhitelist('minecraft:is_overworld')
.stress(256)
.id("coalanduranium");

},
);