var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "LIVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1978614013330056,
          "pitch": 0.18666222068840987,
          "rotation": 3.141592653589793,
          "target": "1-under-stairs"
        },
        {
          "yaw": 0.46138457673963273,
          "pitch": 0.051459507366010016,
          "rotation": 5.497787143782138,
          "target": "2-dining"
        },
        {
          "yaw": 0.6748566487039955,
          "pitch": -0.5153151825806805,
          "rotation": 0,
          "target": "6-ff-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-under-stairs",
      "name": "UNDER STAIRS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4802743105210796,
          "pitch": 0.1607616058007384,
          "rotation": 3.141592653589793,
          "target": "0-living-room"
        },
        {
          "yaw": -1.7722702707307434,
          "pitch": 0.07559767718924704,
          "rotation": 3.141592653589793,
          "target": "2-dining"
        },
        {
          "yaw": -1.8472671552306288,
          "pitch": -0.05075333270604965,
          "rotation": 3.141592653589793,
          "target": "3-kitchen"
        },
        {
          "yaw": -1.4941079787945561,
          "pitch": 0.009532454457186645,
          "rotation": 3.141592653589793,
          "target": "5-seating-near-kitchen"
        },
        {
          "yaw": 1.2949784503016293,
          "pitch": -0.03007204783755668,
          "rotation": 0,
          "target": "6-ff-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.674272034841243,
          "pitch": 0.10837318499622839,
          "rotation": 3.141592653589793,
          "target": "0-living-room"
        },
        {
          "yaw": 2.6698533506027555,
          "pitch": -0.558310726082837,
          "rotation": 0,
          "target": "6-ff-lounge"
        },
        {
          "yaw": 2.4971535375546585,
          "pitch": 0.3037907608725945,
          "rotation": 3.141592653589793,
          "target": "1-under-stairs"
        },
        {
          "yaw": 0.2681940604827098,
          "pitch": 0.005408382533094169,
          "rotation": 3.141592653589793,
          "target": "5-seating-near-kitchen"
        },
        {
          "yaw": -0.21499008911641937,
          "pitch": -0.046611018246840885,
          "rotation": 0,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8246712569250771,
          "pitch": 0.027828162157062408,
          "rotation": 0.7853981633974483,
          "target": "4-utility"
        },
        {
          "yaw": 2.753874147789597,
          "pitch": -0.5334339317398324,
          "rotation": 0,
          "target": "6-ff-lounge"
        },
        {
          "yaw": 2.8730492922337874,
          "pitch": 0.134151210039839,
          "rotation": 3.141592653589793,
          "target": "2-dining"
        },
        {
          "yaw": 2.041786337170432,
          "pitch": 0.0901136996094607,
          "rotation": 4.71238898038469,
          "target": "5-seating-near-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-utility",
      "name": "UTILITY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.928438878292642,
          "pitch": 0.12853581240170442,
          "rotation": 3.141592653589793,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-seating-near-kitchen",
      "name": "SEATING NEAR KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7003487113082176,
          "pitch": 0.05965902011379676,
          "rotation": 3.141592653589793,
          "target": "2-dining"
        },
        {
          "yaw": 2.1411278848879913,
          "pitch": -0.05656768873937956,
          "rotation": 7.853981633974483,
          "target": "3-kitchen"
        },
        {
          "yaw": 1.442834701277084,
          "pitch": -0.1404871552913871,
          "rotation": 0,
          "target": "6-ff-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-ff-lounge",
      "name": "FF LOUNGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0269439663650655,
          "pitch": 0.16144618984574066,
          "rotation": 3.141592653589793,
          "target": "0-living-room"
        },
        {
          "yaw": -2.933507613864748,
          "pitch": -0.3169663441092787,
          "rotation": 0,
          "target": "7-bedroom-01"
        },
        {
          "yaw": 0.22710785367487318,
          "pitch": -0.19569478278655872,
          "rotation": 0,
          "target": "9-bedroom-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-01",
      "name": "BEDROOM 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7162577835091675,
          "pitch": -0.00582412537375987,
          "rotation": 0,
          "target": "6-ff-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-02",
      "name": "BEDROOM 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6903926288542479,
          "pitch": -0.1287590340114111,
          "rotation": 1.5707963267948966,
          "target": "6-ff-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-03",
      "name": "BEDROOM 03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8404509914512772,
          "pitch": 0.03834723343388191,
          "rotation": 0.7853981633974483,
          "target": "6-ff-lounge"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "MUZAMMIL RESIDENCE",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
