const Ajv = require("ajv")
const addFormats = require("ajv-formats")
const ajv = new Ajv()

addFormats(ajv)

const schema = {
  type: "object",
  properties: {
    foo: {
      type: "string",
      format: "ipv4",
    },
    old: {
      type: "string",
      format: "fourLength",
    },
  },
  required: ["old"],
}
ajv.addFormat("fourLength", data => {
  return data.length === 4
})
const data = {
  old: "2333",
}

const validate = ajv.compile(schema)
if (!validate(data)) {
  console.log(validate.errors)
}
