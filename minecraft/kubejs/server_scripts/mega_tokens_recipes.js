ServerEvents.recipes(event => {
  // Remove original addon recipes
  event.remove({ id: 'horret-fakemegas:mega/noivernite' })
  event.remove({ id: 'horret-fakemegas:noivernite' })

  event.remove({ id: 'horret-fakemegas:mega/cerulite' })
  event.remove({ id: 'horret-fakemegas:cerulite' })

  event.remove({ id: 'horret-fakemegas:mega/flygonite' })
  event.remove({ id: 'horret-fakemegas:flygonite' })

  event.remove({ id: 'horret-fakemegas:mega/drifblimite' })
  event.remove({ id: 'horret-fakemegas:drifblimite' })

  // Noivernite
  event.shaped(
    'mega_showdown:noivernite',
    [
     'A',
     'B',
     'C'
    ],
    {
      A: 'cobblemon:dragon_fang',
      B: 'mega_showdown:mega_stone',
      C: 'cobblemon:fairy_gem'
    }
  ).id('mega_showdown:crafting_noivernite')

  // Cerulite
  event.shaped(
    'mega_showdown:cerulite',
    [
      'A',
      'B',
      'C'
    ],
    {
      A: 'cobblemon:spell_tag',
      B: 'mega_showdown:mega_stone',
      C: 'cobblemon:fire_gem'
    }
  ).id('mega_showdown:crafting_cerulite')

  // Flygonite
  event.shaped(
    'mega_showdown:flygonite',
    [
      'A',
      'B',
      'C'
    ],
    {
      A: 'minecraft:sand',
      B: Item.of('mega_showdown:mega_stone', 2),
      C: 'cobblemon:bug_gem'
    }
  ).id('mega_showdown:crafting_flygonite')

  // Drifblimite
  event.shaped(
    'mega_showdown:drifblimite',
    [
      'A',
      'B',
      'C'
    ],
    {
      A: 'cobblemon:spell_tag',
      B: Item.of('mega_showdown:mega_stone', 2),
      C: 'minecraft:gold_ingot'
    }
  ).id('mega_showdown:crafting_drifblimite')
})




