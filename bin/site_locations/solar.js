const solarLocations = [
    {
      "siteName": "Coolidge Solar",
      "state": "VT",
      "county": "Windsor County",
      "renewableType": "Solar",
      "email": "contact@coolidgesolar.net"
    },
    {
      "siteName": "Bluebell Solar",
      "state": "TX",
      "county": "Sterling County",
      "renewableType": "Solar",
      "email": "contact@bluebellsolar.net"
    },
    {
      "siteName": "Carousel Solar",
      "state": "CO",
      "county": "Kit Carson County",
      "renewableType": "Solar",
      "email": "contact@carouselwind.net"
    },
    {
      "siteName": "Genesis Solar",
      "state": "CA",
      "county": "Riverside County",
      "renewableType": "Solar",
      "email": "contact@genesissolar.net"
    },
    {
      "siteName": "Hatch Solar",
      "state": "CA",
      "county": "Dona Ana County",
      "renewableType": "Solar",
      "email": "contact@hatchsolar.net"
    },
    {
      "siteName": "Mountain View Solar",
      "state": "NV",
      "county": "Clark County",
      "renewableType": "Solar",
      "email": "contact@mountainviewsolar.net"
    },
    {
      "siteName": "Coolidge Solar",
      "state": "VT",
      "county": "Windsor County",
      "renewableType": "Solar",
      "email": "contact@coolidgesolar.net"
    },
    {
      "siteName": "Whitney Point Solar",
      "state": "CA",
      "county": "Fresno County",
      "renewableType": "Solar",
      "email": "contact@whitneypointsolar.net"
    },
    {
      "siteName": "Titan Solar",
      "state": "CO",
      "county": "Arapahoe County",
      "renewableType": "Solar",
      "email": "contact@titansolar.net"
    },
    {
      "siteName": "White Oak Solar",
      "state": "GA",
      "county": "Burke County",
      "renewableType": "Solar",
      "email": "contact@whiteoaksolar.net"
    }
  ]

  const solarConditions = [
      {      
      "grossMW": 19.6,
      "netMW": 19.6,
      "irradiance": 1325,
      "totalUnits": 2000,
      "operatingUnits": 2000,
      "condition": "Good",
      "deploymentRequired": false,
      "serviceRequired": false,
    },
    {
        "grossMW": 114.0,
        "netMW": 114.0,
        "irradiance": 1267,
        "totalUnits": 1000,
        "operatingUnits": 1000,
        "condition": "Good",
        "deploymentRequired": false,
        "serviceRequired": false,
    },
    {
        "grossMW": 149.7,
        "netMW": 96.4,
        "irradiance": 1256,
        "totalUnits": 3000,
        "operatingUnits": 2500,
        "condition": "Poor",
        "deploymentRequired": true,
        "serviceRequired": true,
    },
    {
        "grossMW": 250.0,
        "netMW": 161.0,
        "irradiance": 1125,
        "totalUnits": 1500,
        "operatingUnits": 1500,
        "condition": "Excellent",
        "deploymentRequired": false,
        "serviceRequired": false,
    },
    {
        "grossMW": 5.0,
        "netMW": 5.0,
        "irradiance": 1364,
        "totalUnits": 2000,
        "operatingUnits": 2000,
        "condition": "Fair",
        "deploymentRequired": false,
        "serviceRequired": true,
    },
    {
        "grossMW": 20.0,
        "netMW": 12.9,
        "irradiance": 1325,
        "totalUnits": 1000,
        "operatingUnits": 1000,
        "condition": "Excellent",
        "deploymentRequired": false,
        "serviceRequired": false,
    },
    {
        "grossMW": "19.6",
        "netMW": "19.6",
        "irradiance": "1297",
        "totalUnits": 2000,
        "operatingUnits": 1999,
        "condition": "Fair",
        "deploymentRequired": true,
        "serviceRequired": true,
    },
    {
        "grossMW": 20.0,
        "netMW": 20.0,
        "irradiance": 1136,
        "totalUnits": 3000,
        "operatingUnits": 3000,
        "condition": "Excellent",
        "deploymentRequired": false,
        "serviceRequired": false,
    },
    {
        "grossMW": 50.0,
        "netMW": 50.0,
        "irradiance": 1254,
        "totalUnits": 6000,
        "operatingUnits": 5789,
        "condition": "Fair",
        "deploymentRequired": true,
        "serviceRequired": true,
    },
    {
        "grossMW": 76.5,
        "netMW": 76.5,
        "irradiance": 1265,
        "totalUnits": 4000,
        "operatingUnits": 4000,
        "condition": "Good",
        "deploymentRequired": false,
        "serviceRequired": true,
    }
  ]

  module.exports = {
      locations: solarLocations,
      conditions: solarConditions,
  };