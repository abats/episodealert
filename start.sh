#!/usr/bin/env bash
json-server --watch json-server/db.json --routes json-server/routes.json --port 8888 &
npm start &
