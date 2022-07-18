export default ({
  name: 'car',
  type: 'document',
  title: 'Inventory',
  fields: 
[
      {
        name: "id",
        title: "ID",
        type: "number"
      }, {
        name: "advertisingCondition",
        title: "Advertising Condition",
        type: "string"
      }, {
        name: "bodyType",
        title: "Body Type",
        type: "string"
      },
      {
        name: "class",
        title: "Class",
        type: "string"
      },
      {
        name: "colorExterior",
        title: "Color Exterior",
        type: "string"
      }, {
        name: "colorInterior",
        title: "Color Interior",
        type: "string"
      },
      {
        name: "condition",
        title: "Condition",
        type: "string"
      }, {
        name: "cylinders",
        title: "Cylinders",
        type: "number"
      }, 
      {
        name: "desc",
        title: "Desc",
        type: 'string'
      }, {
        name: "doors",
        title: "Doors",
        type: "number"
      },
      {
        name: "driveTrain",
        title: "Drivetrain",
        type: "string"
      }, {
        name: "engine",
        title: "Engine",
        type: "string"
      }, {
        name: "feeds",
        title: "Feeds",
        type: "array",
        of: [{type: 'string'}]
      }, {
        name: "fuelCity",
        title: "Fuel City",
        type: "number"
      }, {
        name: "fuelCombined",
        title: "Fuel Combined",
        type: "number"
      }, {
        name: "fuelHighway",
        title: "Fuel Highway",
        type: "number"
      }, {
        name: "fuelType",
        title: "Fuel Type",
        type: "string"
      }, {
        name: "gears",
        title: "Gears",
        type: "string"
      }, {
        name: "hp",
        title: "HP",
        type: "number"
      }, {
        name: "imagesPath",
        title: "Images Path",
        type: "image"
      },
      {
        name: "imagesReordered",
        title: "Images Reordered",
        type: "boolean"
      }, {
        name: "infoHistory",
        title: "Info History",
        type: "string"
      }, 
      {
        name: "infoWebsite",
        title: "Info Website",
        type: "object",
        fields: [
            {
                name: 'hideVin',
                title: 'Hide VIN',
                type: 'number',
            
            },
            {
                name: 'hideMiles',
                title: 'Hide Miles',
                type: 'number',
            
            },
            {
                name: 'hidePrice',
                title: 'Hide Price',
                type: 'number',
            
            }          
        ]
      },
      {
        name: "kbbInfo",
        title: "KBB Info",
        type: "string"
      }, {
        name: "lotName",
        title: "Lot Name",
        type: "string"
      }, {
        name: "make",
        title: "Make",
        type: "string"
      }, {
        name: "miles",
        title: "Miles",
        type: "string"
      }, {
        name: "model",
        title: "Model",
        type: "string"
      }, {
        name: "priceInet",
        title: "Price Inet",
        type: "string"
      }, {
        name: "priceStrikethrough",
        title: "Price Strikethrough",
        type: "string"
      },
      {
        name: "promo",
        title: "Promo",
        type: "object",
        fields: [
            {
                name: 'title',
                title: 'Title',
                type: 'string'
            },
            {
                name: 'startDate',
                title: 'Start Date',
                type: 'date'
            },
            {
                name: 'endDate',
                title: 'End Date',
                type: 'date'
            },
            {
                name: 'promoId',
                title: 'Promo ID',
                type: 'number'
            },
            {
                name: 'discount',
                title: 'Discount',
                type: 'number'
            },

        ]
      },
      {
        name: "status",
        title: "Status",
        type: "string"
      }, {
        name: "stockNo",
        title: "StockNo",
        type: "string"
      }, {
        name: "transmission",
        title: "Transmission",
        type: "string"
      }, {
        name: "trim",
        title: "Trim",
        type: "string"
      }, {
        name: "vehType",
        title: "Veh Type",
        type: "string"
      }, {
        name: "videoSource",
        title: "Video Source",
        type: "string"
      }, {
        name: "videoUrl",
        title: "Video URL",
        type: "string"
      }, {
        name: "vin",
        title: "VIN",
        type: "string"
      }, {
        name: "weight",
        title: "Weight",
        type: "string"
      }, {
        name: "year",
        title: "Year",
        type: "number"
      }, {
        name: "dirty",
        title: "Dirty",
        type: "boolean"
      }, {
        name: "mileage",
        title: "Mileage",
        type: "number"
      },
      {
        name: "images",
        title: "Images",
        type: "array",
        of: [
            {
                type: 'object',
                fields: [
                    {
                        name: 'title',
                        title: 'title',
                        type: 'string'
                    },
                    {
                        name: 'dirty',
                        title: 'dirty',
                        type: 'boolean'
                    },
                    {
                        name: 'order',
                        title: 'order',
                        type: 'number'
                    },

                ]
            }
            ]
      },
      {
        name: "rawOptions",
        title: "rawOptions",
        type: "array",
        of: [{type: 'string'}]
      },
      {
        name: "catOptions",
        title: "catOptions",
        type: "object",
        fields: [
          {
            name: 'lighting',
            title: 'lighting',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'optionName',
                    title: 'Option Name',
                    type: 'string'
                  },
                  {
                    name: 'sortOrder',
                    title: 'Sort Order',
                    type: 'number'
                  }
                ]
              }
            ]
        },
          {
            name: 'other',
            title: 'Other',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'optionName',
                    title: 'Option Name',
                    type: 'string'
                  },
                  {
                    name: 'sortOrder',
                    title: 'Sort Order',
                    type: 'number'
                  }
                ]
              }
            ]
        },
        {
          name: 'seats',
          title: 'Seats',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'optionName',
                  title: 'Option Name',
                  type: 'string'
                },
                {
                  name: 'sortOrder',
                  title: 'Sort Order',
                  type: 'number'
                }
              ]
            }
          ]
      },
      {
        name: 'exterior',
        title: 'Exterior',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'optionName',
                title: 'Option Name',
                type: 'string'
              },
              {
                name: 'sortOrder',
                title: 'Sort Order',
                type: 'number'
              }
            ]
          }
        ]
    },
    {
      name: 'steering',
      title: 'Steering',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'optionName',
              title: 'Option Name',
              type: 'string'
            },
            {
              name: 'sortOrder',
              title: 'Sort Order',
              type: 'number'
            }
          ]
        }
      ]
  },
  {
    name: 'roofGlass',
    title: 'Roof and Glass',
    type: 'array',
    of: [
      {
        type: 'object',
        fields: [
          {
            name: 'optionName',
            title: 'Option Name',
            type: 'string'
          },
          {
            name: 'sortOrder',
            title: 'Sort Order',
            type: 'number'
          }
        ]
      }
    ]
},
{
  name: 'cargoTowing',
  title: 'Cargo and Towing',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'optionName',
          title: 'Option Name',
          type: 'string'
        },
        {
          name: 'sortOrder',
          title: 'Sort Order',
          type: 'number'
        }
      ]
    }
  ]
},
{
name: 'wheelsTires',
title: 'Wheels and Tires',
type: 'array',
of: [
  {
    type: 'object',
    fields: [
      {
        name: 'optionName',
        title: 'Option Name',
        type: 'string'
      },
      {
        name: 'sortOrder',
        title: 'Sort Order',
        type: 'number'
      }
    ]
  }
]
},
{
name: 'accessoryPackage',
title:'Accessory Packages',
type: 'array',
of: [
  {
    type: 'object',
    fields: [
      {
        name: 'optionName',
        title: 'Option Name',
        type: 'string'
      },
      {
        name: 'sortOrder',
        title: 'Sort Order',
        type: 'number'
      }
    ]
  }
]
},
{
name: 'safetySecurity',
title: 'Safety and Security',
type: 'array',
of: [
  {
    type: 'object',
    fields: [
      {
        name: 'optionName',
        title: 'Option Name',
        type: 'string'
      },
      {
        name: 'sortOrder',
        title: 'Sort Order',
        type: 'number'
      }
    ]
  }
]
},
{
name: 'brakingTraction',
title: 'Braking and Traction',
type: 'array',
of: [
{
  type: 'object',
  fields: [
    {
      name: 'optionName',
      title: 'Option Name',
      type: 'string'
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number'
    }
  ]
}
]
},
{
name: 'comfortConvenience',
title: 'Comfort and Convenience',
type: 'array',
of: [
{
  type: 'object',
  fields: [
    {
      name: 'optionName',
      title: 'Option Name',
      type: 'string'
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number'
    }
  ]
}
]
},
{
name: 'entertainmentInstrumentation',
title: 'Entertainment and Instrumentation',
type: 'array',
of: [
{
  type: 'object',
  fields: [
    {
      name: 'optionName',
      title: 'Option Name',
      type: 'string'
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number'
    }
  ]
}
]
},]},
]
})