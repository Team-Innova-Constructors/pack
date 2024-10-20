ServerEvents.recipes(event =>
{
//机械动力：矿石开掘配方,drilling后面的括号是需要输出的物品,矿脉名称,生成权重,以 32 RPM 为单位的提取时间。
//残骸碎片
event.recipes.createoreexcavation.drilling('minecraft:ancient_debris','{"text": "残骸碎片"}', 10, 600)
//钻头等级
.drill('createoreexcavation:netherite_drill')
//生物群落白名单
.biomeWhitelist('minecraft:is_nether')
//无限量
.alwaysInfinite()
//应力值
.stress(1024)
//配方id
.id("netherite");

//碧空史莱姆
event.recipes.createoreexcavation.extracting('tconstruct:sky_slime 2000','{"text": "碧空史莱姆"}', 10, 400)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//无限量
.alwaysInfinite()
//应力值
.stress(512)
//生物群落白名单
.biomeWhitelist('minecraft:is_overworld')
//配方id
.id("sky_slime");


//贫油
event.recipes.createoreexcavation.extracting('immersivepetroleum:crudeoil 500','{"text": "贫油"}', 10, 600)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//无限量
.alwaysInfinite()
//应力值
.stress(512)
//生物群落白名单
.biomeWhitelist('minecraft:is_overworld')
//配方id
.id("poor_oil");




//富油
event.recipes.createoreexcavation.extracting('immersivepetroleum:crudeoil 4000','{"text": "富油"}', 20, 200)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//无限量
.alwaysInfinite()
//应力值
.stress(512)
//生物群落白名单
.biomeWhitelist('forge:is_dry/overworld')
//配方id
.id("rich_oil");





//钴-阿迪特伴生矿
event.recipes.createoreexcavation.drilling([Item.of('tconstruct:raw_cobalt'), Item.of('tinkers_thinking:raw_ardite')], '{"text": "钴-阿迪特伴生矿"}', 15, 400)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_nether')
.alwaysInfinite()
.stress(192)
.id("cobalt_ardite_complex");


//铅矿
event.recipes.createoreexcavation.drilling([Item.of('thermal:raw_lead'), Item.of('mekanism:raw_uranium')],'{"text": "衰变铅矿"}', 15, 150)
.drill('#createoreexcavation:drills')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(96)
.id("lead");


//锇矿
event.recipes.createoreexcavation.drilling([Item.of('minecraft:raw_gold'), Item.of('mekanism:raw_osmium')],'{"text": "重金属矿"}', 10, 150)
.drill('#createoreexcavation:drills')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(128)
.id("osmium");

//硫化物矿
event.recipes.createoreexcavation.drilling([Item.of('thermal:cinnabar'), Item.of('thermal:sulfur')],'{"text": "朱砂矿"}', 10, 400)
.drill('#createoreexcavation:drills')
.biomeWhitelist('minecraft:is_overworld')
.fluid('minecraft:lava')
.alwaysInfinite()
.stress(128)
.id("cinnabar");

//硫化铁矿
event.recipes.createoreexcavation.drilling([Item.of('minecraft:raw_iron'), Item.of('etshtinker:bismuthinite').withChance(0.1)], '{"text": "硫化铁矿"}', 4, 400)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(192)
.id("iron_sulfide");
},
);