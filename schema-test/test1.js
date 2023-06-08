const Ajv = require("ajv")
// const localize = require("ajv-i18n")

const ajv = new Ajv({ allErrors: true })
require("ajv-errors")(ajv)

ajv.addFormat("youngAge", data => {
  return data < 35
})

ajv.addKeyword({
  keyword: "test",
  macro: {
    maxLength: 4,
  },
})

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      //   maxLength: 4,
      test: "3",
    },
    age: {
      type: "string",
      format: "youngAge",
    },
  },
}

const vaildate = ajv.compile(schema)

const data = {
  name: "why555",
  age: "33",
}
const vaild = vaildate(data)

if (!vaild) {
  //   localize.zh(vaildate.errors)
  console.log(vaildate.errors)
}
