ServerEvents.recipes(event => {
  event.recipes.immersiveengineeringBlastFurnaceFuel('thermal:tar').time(600)
  event.recipes.immersiveengineeringBlastFurnaceFuel('gobber2:gobber2_foo').time(24000)
  event.recipes.immersiveengineeringBlastFurnaceFuel('gobber2:gobber2_foo_nether').time(36000)
  event.recipes.immersiveengineeringBlastFurnaceFuel('gobber2:gobber2_foo_end').time(48000)
  event.recipes.immersiveengineeringBlastFurnace('thermal:steel_ingot','minecraft:iron_ingot','immersiveengineering:slag').time(400)
  event.recipes.immersiveengineeringBlastFurnace('immersiveengineering:storage_steel','minecraft:iron_block','9x immersiveengineering:slag').time(3600)
  event.custom({
  "type": "immersiveengineering:mixer",
  "energy": 3200,
  "fluid": {
    "amount": 250,
    "tag": "forge:phenolic_resin"
  },
  "inputs": [
    {
      "base_ingredient": {
        "tag": "forge:dusts/redstone"
      },
      "count": 64
    }
  ],
  "result": {
    "amount": 4000,
    "fluid": "kubejs:redstone_additive"
  }
})

event.custom({
  "type": "immersiveengineering:mixer",
  "energy": 3200,
  "fluid": {
    "amount": 250,
    "tag": "forge:phenolic_resin"
  },
  "inputs": [
    {
      "base_ingredient": {
        "tag": "forge:dusts/diamond"
      },
      "count": 64
    }
  ],
  "result": {
    "amount": 4000,
    "fluid": "kubejs:diamond_additive"
  }
})

event.custom({
  "type": "immersiveengineering:mixer",
  "energy": 3200,
  "fluid": {
    "amount": 250,
    "tag": "forge:phenolic_resin"
  },
  "inputs": [
    {
      "base_ingredient": {
        "tag": "forge:dusts/obsidian"
      },
      "count": 64
    }
  ],
  "result": {
    "amount": 4000,
    "fluid": "kubejs:obsidian_additive"
  }
})

event.custom({
  "type": "immersiveengineering:refinery",
  "energy": 480,
  "input0": {
    "amount": 40,
    "tag": "forge:benzene"
  },
  "catalyst": {
    "item": "etshtinker:activated_chroma_plate"
  },
  "result": {
    "amount": 10,
    "fluid": "kubejs:radical_initiator"
  }
})

event.custom({
  "type": "immersiveengineering:fermenter",
  "energy": 6400,
  "fluid": {
    "amount": 160,
    "fluid": "kubejs:methane"
  },
  "input": {
    "item": "mekanism:bio_fuel"
  },
  "result": {
    "item": "mekanism:substrate",
    "count":4
  }
})

event.custom({
  "type": "immersiveengineering:refinery",
  "energy": 480,
  "input0": {
    "amount": 50,
    "tag": "forge:ethanol"
  },
  "catalyst": {
    "item": "twilightforest:fiery_ingot"
  },
  "result": {
    "amount": 50,
    "fluid": "mekanism:ethene"
  }
})

  event.replaceInput({id:'immersiveengineering:crafting/rs_engineering'},'#forge:ingots/copper','create:copper_casing')
  event.replaceInput({id:'immersiveengineering:crafting/light_engineering'},'#forge:ingots/copper','create:andesite_casing')
  event.replaceInput({id:'immersiveengineering:crafting/heavy_engineering'},'#forge:ingots/electrum','create:brass_casing')
})