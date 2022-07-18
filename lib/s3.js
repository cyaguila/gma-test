/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-empty */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import S3 from 'aws-sdk/clients/s3'
import AWS from 'aws-sdk'
import { s3Config } from '../lib/config.js'

AWS.config.update({
    accessKeyId: s3Config.accessKeyId,
    secretAccessKey: s3Config.secretAccessKey
})


const s3 = new S3({
    signatureVersion: "v4",
    accessKeyId: AWS.config.credentials.accessKeyId,
    secretAccessKey: AWS.config.credentials.secretAccessKey
})

// export const s3Request = (obj) => s3.getObject(obj, (err,data) => {
//     if (err) 
//     {
//         // console.log(err, err.stack)
//         // console.log(obj)
//         // throw new Error(err.stack)
//     }
//     else
//     {
//         console.log(data.Body.toString())
//         return data.Body
//     }
// })


export const s3Request = (obj) => {

    var response = s3.getObject(obj, (err, data) => {
        if (err)
        {
            throw new Error(err.stack)
        }
        else 
        {
            console.log(data.Body.toString())
            return data.Body.toString()
        }
    })

    return response

}