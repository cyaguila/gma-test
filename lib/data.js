export const blogData = [

  {
    title: "Blog 1",
    topic: 'Servicing',
    blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.",
    date: "04/27/2022",
    author: "author 1",
    imageUrl: "https://i.imgur.com/Q9KaU7i.png"
  },
  {
    title: "Blog 2",
    topic: 'Maintenance',
    blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.",
    date: "04/27/2022",
    author: "author 2",
    imageUrl: "https://i.imgur.com/Q9KaU7i.png"
  },
  {
    title: "Blog 3",
    topic: 'Maintenance',
    blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.",
    date: "04/27/2022",
    author: "author 3",
    imageUrl: "https://i.imgur.com/Q9KaU7i.png"
  },
  {
    title: "Blog 4",
    topic: 'Miscellaneous',
    blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.",
    date: "04/27/2022",
    author: "author 4",
    imageUrl: "https://i.imgur.com/Q9KaU7i.png"
  }
]




// transforms the inventory data from S3 to be uploaded to Sanity
export const transformInventory = (obj) => {
    const imageFix = {
      "_type": "image",
      // "_sanityAsset": "image@"+obj.imagesPath -- change to this when images are set
      "_sanityAsset": "image@http://placecorgi.com/260/180"
    }

    return {
      _id: `imported-car-${obj.id}`,
      _type: 'car',
      id: obj.id,
      advertisingCondition: obj.advertisingCondition,
      bodyType: obj.bodyType,
      class: obj.class,
      colorExterior: obj.colorExterior,
      colorInterior: obj.colorInterior,
      condition: obj.condition,
      cylinders: obj.cylinders,
      desc: obj.desc,
      doors: obj.doors,
      driveTrain: obj.driveTrain,
      engine: obj.engine,
      feeds: obj.feeds,
      fuelCity: obj.fuelCity,
      fuelCombined: obj.fuelCombined,
      fuelHighway: obj.fuelHighway,
      fuelType: obj.fuelType,
      gears: obj.gears,
      hp: obj.hp,
      imagesPath: imageFix,
      imagesReordered: obj.imagesReordered,
      infoHistory: obj.infoHistory,
      infoWebsite: obj.infoWebsite,
      kbbInfo: obj.kbbInfo,
      lotName: obj.lotName,
      make: obj.make,
      miles: obj.miles,
      model: obj.model,
      priceInet: obj.priceInet,
      priceStrikethrough: obj.priceStrikethrough,
      promo: obj.promo,
      status: obj.status,
      stockNo: obj.stockNo,
      transmission: obj.transmission,
      trim: obj.trim,
      vehType: obj.vehType,
      videoSource: obj.videoSource,
      videoUrl: obj.videoUrl,
      vin: obj.vin,
      weight: obj.weight,
      year: obj.year,
      dirty: obj.dirty,
      mileage: obj.mileage,
      images: obj.images,
      rawOptions: obj.rawOptions,
      catOptions: obj.catOptions,

    }
  }

export const transformDealer = (obj) => {

    return {
        _type: 'dealer',
        city: obj.city,
        dealerName: obj.name,
        phone: obj.phone,
        state: obj.state,
        street: obj.street,
        zip: obj.zip
    }
}

export const findCar = (arr, val) => {

  return arr.filter(car => car._id == val )

}
  // const transformSettings = (obj) => {

  //   return {
  //     _type: 'webSetting',
  //     hours: obj.hours,
  //     websiteInfo: obj.website,
  //   }
  // }

  // const webSettings = transformSettings(objectData)