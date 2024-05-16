import vine from '@vinejs/vine'

export const createVeillesValidator = vine.compile(
  vine.object({
    titre: vine.string().trim(),
    description: vine.string(),
    date_publication: vine.date(),
    source: vine.string(),
    lien: vine.string(),
    image_url: vine.string(),
    category: vine.string(),
  })
)
