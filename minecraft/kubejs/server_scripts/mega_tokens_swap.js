const FAKE_TO_REAL = {
  'mega_showdown:noivernite':
    'minecraft:paper[custom_model_data=220001,item_name=\'{"italic":false,"translate":"item.name.noivernite"}\',lore=[\'{"color":"gray","italic":false,"translate":"item.desc.noivernite"}\'],mega_showdown:registry_type_component="mega",mega_showdown:registry_location_component="horret-fakemegas:noivernite"]',

  'mega_showdown:cerulite':
    'minecraft:paper[custom_model_data=220002,item_name=\'{"italic":false,"translate":"item.name.cerulite"}\',lore=[\'{"color":"gray","italic":false,"translate":"item.desc.cerulite"}\'],mega_showdown:registry_type_component="mega",mega_showdown:registry_location_component="horret-fakemegas:cerulite"]',

  'mega_showdown:flygonite':
    'minecraft:paper[custom_model_data=220003,item_name=\'{"italic":false,"translate":"item.name.flygonite"}\',lore=[\'{"color":"gray","italic":false,"translate":"item.desc.flygonite"}\'],mega_showdown:registry_type_component="mega",mega_showdown:registry_location_component="horret-fakemegas:flygonite"]',

  'mega_showdown:drifblimite':
    'minecraft:paper[custom_model_data=220004,item_name=\'{"italic":false,"translate":"item.name.drifblimite"}\',lore=[\'{"color":"gray","italic":false,"translate":"item.desc.drifblimite"}\'],mega_showdown:registry_type_component="mega",mega_showdown:registry_location_component="horret-fakemegas:drifblimite"]'
}

function swap(player, id) {
  const real = FAKE_TO_REAL[id]
  if (!real) return

  const count = player.inventory.count(id)
  if (count <= 0) return

  player.inventory.clear(id)
  player.give(Item.of(real, count))
}

PlayerEvents.loggedIn(e => {
  for (const id in FAKE_TO_REAL) swap(e.player, id)
})

PlayerEvents.inventoryChanged(e => {
  if (e.item && FAKE_TO_REAL[e.item.id]) {
    swap(e.player, e.item.id)
  }
})



