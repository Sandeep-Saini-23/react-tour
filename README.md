Command to configure npm ====> npm init
To install bundler ==> npm i -D parcel
To install react ==> npm i react
To install react-dom ==> npm i react-dom
To run development server ==> npx pracel index.html

import React from 'react'
import ReactDOM from 'react-dom/client'

set the script type as module
<script type='module' src='./App.js'><script>

set the scripts ==> "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  }

set browsersList => "browsersList": [
    "last 2 versions"
  ]

