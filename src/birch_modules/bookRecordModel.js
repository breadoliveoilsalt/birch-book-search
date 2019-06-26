export class BookRecord {

  constructor(properties) {
    validateProperties(properties)
    this.imageURL = validateImageURL(properties)
    this.title = validateTitle(properties)
    this.authors = validateAuthors(properties)
    this.publisher = validatePublisher(properties)
    this.additionalInfoURL = validateAdditionalInfoURL(properties)
  }

}

///// PRIVATE FUNCTIONS

function validateProperties(properties) {
  if (typeof properties !== "object" || properties instanceof Array) {
    throw new Error("Must initialize BookRecord instance by passing in an object/hash.")
  }
}

function validateImageURL(properties) {
  try {
    return exists(properties.imageLinks.thumbnail) ? properties.imageLinks.thumbnail : null
  } catch {
    return null
  }
}

function validateTitle(properties) {
  try {
    return exists(properties.title) ? properties.title : null
  } catch {
    return null
  }
}

function validateAuthors(properties) {
  try {
    let authors = null

    if (exists(properties.authors) && properties.authors.length > 0) {
      authors = properties.authors[0]

      for (let i = 1; i < properties.authors.length; i++) {
        authors += ` & ${properties.authors[i]}`
      }
    }
    return authors
  } catch {
    return null
  }
}

function validatePublisher(properties) {
  try {
    return exists(properties.publisher) ? properties.publisher : null
  } catch {
    return null
  }
}

function validateAdditionalInfoURL(properties) {
  try {
    return exists(properties.infoLink) ? properties.infoLink : null
  } catch {
    return null
  }
}

function exists(property) {
  return property !== undefined && property !== ""
}
