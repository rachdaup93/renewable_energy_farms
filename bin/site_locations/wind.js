const windLocations = [
    {
      "siteName": "Ashtabula Wind",
      "state": "ND",
      "county": "Barnes County",
      "renewableType": "Wind",
      "email": "contact@ashtabulawind.net"
    },
    {
      "siteName": "Baldwin Wind",
      "state": "ND",
      "county": "Burleigh County",
      "renewableType": "Wind",
      "email": "contact@baldwinwind.net"
    },
    {
      "siteName": "Butler Ridge",
      "state": "WI",
      "county": "Dodge County,",
      "renewableType": "Wind",
      "email": "contact@butlerridge.net"
    },
    {
      "siteName": "Cerro Gordo",
      "state": "IA",
      "county": "Cerro Gordo County",
      "renewableType": "Wind",
      "email": "contact@cerrogordo.net"
    },
    {
      "siteName": "Day County Wind",
      "state": "SD",
      "county": "Day County",
      "renewableType": "Wind",
      "email": "contact@daycountywind.net"
    },
    {
      "siteName": "Langdon Wind",
      "state": "ND",
      "county": "Cavalier County",
      "renewableType": "Wind",
      "email": "contact@langdonwind.net"
    },
    {
      "siteName": "Wilton Wind Energy Center",
      "state": "ND",
      "county": "Burleigh County",
      "renewableType": "Wind",
      "email": "contact@wiltonwind.net"
    },
    {
      "siteName": "Elk City Wind",
      "state": "OK",
      "county": "Roger Mills County",
      "renewableType": "Wind",
      "email": "contact@elkcitywind.net"
    },
    {
      "siteName": "Mammoth Plains",
      "state": "OK",
      "county": "Dewey County",
      "renewableType": "Wind",
      "email": "contact@mammothplains.net"
    },
    {
      "siteName": "Golden Hills North Wind",
      "state": "CA",
      "county": "Alameda County",
      "renewableType": "Wind",
      "email": "contact@goldenhillsnorthwind.net"
    }
]

const windConditions = [
  {
    "grossMW": 148.5,
    "netMW": 148.5,
    "windVelocity": 35,
    "totalUnits": 100,
    "operatingUnits": 100,
    "totalRatedCapacity" : 200,
    "condition": "Excellent",
    "deploymentRequired": false,
    "serviceRequired": false,
  },
  {
    "grossMW": 102.4,
    "netMW": 65.9,
    "totalUnits": 68,
    "windVelocity": 19,
    "operatingUnits": 60,
    "totalRatedCapacity" : 102,
    "condition": "Fair",
    "deploymentRequired": true,
    "serviceRequired": true,
  },
  {
    "grossMW": 54.0,
    "netMW": 54.0,
    "windVelocity": 25,
    "totalUnits": 50,
    "operatingUnits": 50,
    "totalRatedCapacity" : 98,
    "condition": "Good",
    "deploymentRequired": true,
    "serviceRequired": false,
  },
  {
    "grossMW": 40.5,
    "netMW": 40.5,
    "windVelocity": 32,
    "totalUnits": 100,
    "operatingUnits": 100,
    "totalRatedCapacity" : 100,
    "condition": "Good",
    "deploymentRequired": false,
    "serviceRequired": false,
  },
  {
    "grossMW": "99.0",
    "netMW": "99.0",
    "windVelocity": 22,
    "totalUnits": 72,
    "operatingUnits": 70,
    "totalRatedCapacity" : 76,
    "condition": "Fair",
    "deploymentRequired": true,
    "serviceRequired": false,
  },
  {
    "grossMW": 118.5,
    "netMW": 118.5,
    "windVelocity": 31,
    "totalUnits": 80,
    "operatingUnits": 80,
    "totalRatedCapacity" : 82,
    "condition": "Excellent",
    "deploymentRequired": false,
    "serviceRequired": false,
  },
  {
    "grossMW": 49.5,
    "netMW": 49.5,
    "windVelocity": 23,
    "totalUnits": 90,
    "operatingUnits": 89,
    "totalRatedCapacity" : 100,
    "condition": "Fair",
    "deploymentRequired": true,
    "serviceRequired": true,
  },
  {
    "grossMW": 98.9,
    "netMW": 63.7,
    "windVelocity": 28,
    "totalUnits": 50,
    "operatingUnits": 50,
    "totalRatedCapacity" : 99,
    "condition": "Good",
    "deploymentRequired": false,
    "serviceRequired": false,
  },
  {
    "grossMW": 198.9,
    "netMW": 128.1,
    "windVelocity": 30,
    "totalUnits": 60,
    "operatingUnits": 55,
    "totalRatedCapacity" : 150,
    "condition": "Good",
    "deploymentRequired": true,
    "serviceRequired": false,
  },
  { 
    "grossMW": "46.0",
    "netMW": "29.6",
    "windVelocity": 23,
    "totalUnits": 100,
    "operatingUnits": 80,
    "totalRatedCapacity" : 125,
    "condition": "Poor",
    "deploymentRequired": true,
    "serviceRequired": true,
  }
]
  module.exports = {
    locations: windLocations,
    conditions: windConditions,
  };