/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-empty */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

// SANITY QUERIES
const postFields = `
    _id,
    year,
    make,
    model,
    mileage,
    stockNo,
    priceInet,
    colorExterior,
    colorInterior,
    transmission,
    trim,
    imagesPath,
    bodyType
`

export const indexQuery = `
*[_type == "car"] {
    ${postFields}
  } 
`

// Queries for web settings
export const settingsQuery = `
*[_type == "webSetting"]
`

export const idQuery = `
*[_type == "car"] {_id}
`

export const fullQuery = `
*[_type == "car"]
`

// S3 QUERIES

export const s3Bucket = {
  Bucket: process.env.AWS_BUCKET_NAME,
  Key: process.env.AWS_BUCKET_KEY

}