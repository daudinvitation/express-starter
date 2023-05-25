const fields = ["name"];

const fieldsFormatted = {};

for (let i = 0; i < fields.length; i++) {
  fieldsFormatted[fields[i]] = {
    type: String,
    required: true,
  };
}

module.exports = {
  fieldsFormatted,
};
