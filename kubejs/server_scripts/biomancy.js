ServerEvents.recipes(event => {
    event.shaped(Item.of('biomancy:primordial_core',1), [
        'BBB',
        'BAB',
        'BBB'
      ],
      {
        A: 'minecraft:spider_eye',
        B: '#biomancy:raw_meat',
      }
    )
})