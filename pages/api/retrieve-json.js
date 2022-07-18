/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-empty */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import S3 from 'aws-sdk/clients/s3'

export default function (req, res){

        const s3 = new S3({
            // region: "",
            accessKeyId: process.env.S3_ACCESS_KEY,
            secretAccessKey: process.env.S3_SECRET_KEY,
            signatureVersion: "v4"
        })

        // key is url to json file in S3 server
        const fileParams = {
            Bucket: process.env.S3_BUCKET_NAME,
            // Key: name, 
            // Expires: 600,
            // ContentType: type,
            // ACL: "public-read"
        }

        // const data = await s3.getObject(fileParams, (err, data) => {
        //     if (err) 
        //     {
        //         console.log(err, err.stack)
        //     }
        //     else 
        //     {
        //         console.log(data)
        //     }
        // })

        s3.listObjectsV2(fileParams, (err,data) => {
            if (err) 
            {
                console.log(err, err.stack)
            }
            else
            {
                console.log(data);
            }
        })

        res.send(200)

}