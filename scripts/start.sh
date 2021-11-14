#!/bin/bash
cd /home/ubuntu/Todays-Chef/server

authbind --deep pm2 start app.js