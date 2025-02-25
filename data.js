var APP_DATA = {
  "scenes": [
    {
      "id": "0-lounge",
      "name": "Lounge",
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
      "faceSize": 1750,
      "initialViewParameters": {
        "yaw": 0.6140385641107606,
        "pitch": 0.02721414551552037,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -0.6227317570772364,
          "pitch": -0.002487510159161488,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -0.44636246215726416,
          "pitch": 0.016598189431860533,
          "rotation": 0,
          "target": "2-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
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
      "faceSize": 1750,
      "initialViewParameters": {
        "yaw": -0.2566805044008973,
        "pitch": 0.013241752768514914,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 2.977498582146035,
          "pitch": 0.02617318138301883,
          "rotation": 0,
          "target": "0-lounge"
        },
        {
          "yaw": 0.07440534307959368,
          "pitch": 0.011998014136764823,
          "rotation": 0,
          "target": "2-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom",
      "name": "Bedroom",
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
      "faceSize": 1750,
      "initialViewParameters": {
        "yaw": 0.36366314959736457,
        "pitch": 0.037580295261562924,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 0.4750353734794537,
          "pitch": 0.027958723279327913,
          "rotation": 0,
          "target": "4-dressing"
        },
        {
          "yaw": -1.2722988364672538,
          "pitch": 0.03512486506846457,
          "rotation": 0,
          "target": "3-wardrobe"
        },
        {
          "yaw": -0.00967516161039228,
          "pitch": 0.016622647494067166,
          "rotation": 0,
          "target": "5-bath"
        },
        {
          "yaw": 2.9081655029936826,
          "pitch": 0.12030047729765769,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wardrobe",
      "name": "Wardrobe",
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
      "faceSize": 1750,
      "initialViewParameters": {
        "yaw": -1.4526919238944096,
        "pitch": -0.02572693858331121,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 0.058970663880087315,
          "pitch": 0.06681979005121441,
          "rotation": 0,
          "target": "5-bath"
        },
        {
          "yaw": 0.5212286373370993,
          "pitch": 0.012003640693777129,
          "rotation": 0,
          "target": "4-dressing"
        },
        {
          "yaw": 2.192767902613012,
          "pitch": 0.07617237855420811,
          "rotation": 0,
          "target": "2-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dressing",
      "name": "Dressing",
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
      "faceSize": 1750,
      "initialViewParameters": {
        "yaw": 1.377007848795099,
        "pitch": -0.018734112957098148,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -0.9704802629148048,
          "pitch": 0.02433193029753511,
          "rotation": 0,
          "target": "3-wardrobe"
        },
        {
          "yaw": -1.373235182546816,
          "pitch": 0.03400205260589928,
          "rotation": 0,
          "target": "2-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bath",
      "name": "Bath",
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
      "faceSize": 1750,
      "initialViewParameters": {
        "yaw": -1.8014883137640378,
        "pitch": 0.036224936879261094,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.28827333821447,
          "pitch": 0.0655382483972371,
          "rotation": 0,
          "target": "3-wardrobe"
        },
        {
          "yaw": 1.0865452553739559,
          "pitch": 0.04078037172564741,
          "rotation": 0,
          "target": "2-bedroom"
        },
        {
          "yaw": -1.9739980082753412,
          "pitch": 0.16836723701637268,
          "rotation": 0,
          "target": "6-shower-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-shower-area",
      "name": "Shower Area",
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
      "faceSize": 1750,
      "initialViewParameters": {
        "yaw": 2.5934006917949013,
        "pitch": 0.03862504247318377,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -0.30322116312259517,
          "pitch": 0.02528663801711062,
          "rotation": 0,
          "target": "5-bath"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
