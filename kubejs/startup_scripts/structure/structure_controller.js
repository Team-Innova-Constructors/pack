MMEvents.registerControllers(event => {
    event.create("stomach_controller")
        .name("巨型胃囊")
        .type( "mm:machine")
    event.create("lava_centrifugal_controller")
        .name("熔岩分离工厂")
        .type( "mm:machine")
    event.create("neutronium_charger_lesser")
        .name("中子充能仪(低级)")
        .type( "mm:machine")
    event.create("neutronium_charger_medium")
        .name("中子充能仪(普通)")
        .type( "mm:machine")
    event.create("neutronium_charger_advanced")
        .name("中子充能仪(高级)")
        .type( "mm:machine")

    event.create("overload_infuser")
        .name("过载能量注入器")
        .type( "mm:machine")

    event.create("fisson_neutron_activator")
        .name("反应堆中子活化器")
        .type( "mm:machine")

    event.create("integrated_fuel_engine")
        .name("一体化集成燃油发动机")
        .type( "mm:machine")

    event.create("mana_restructer_appliance")
        .name("魔力核子重组仪")
        .type( "mm:machine")

    event.create("micro_particle_collider")
        .name("微型粒子对撞机")
        .type( "mm:machine")

    event.create("isotrope_thermoelectric_generator")
        .name("同位素温差发电机")
        .type( "mm:machine")
});