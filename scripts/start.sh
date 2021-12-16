#!/bin/bash
cd /home/ubuntu/Todays-Chef/server


export ACCESS_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names ACCESS_SECRET --query Parameters[0].Value | sed 's/"//g')
export ACCESS_KEY_AWS=$(aws ssm get-parameters --region ap-northeast-2 --names ACCESS_KEY_AWS --query Parameters[0].Value | sed 's/"//g')
export ACCESS_SECRET_KEY_AWS=$(aws ssm get-parameters --region ap-northeast-2 --names ACCESS_SECRET_KEY_AWS --query Parameters[0].Value | sed 's/"//g')
export CLIENT_URL=$(aws ssm get-parameters --region ap-northeast-2 --names CLIENT_URL --query Parameters[0].Value | sed 's/"//g')
export DATABASE_USER=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_USER --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PORT=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PORT --query Parameters[0].Value | sed 's/"//g')
export DATABASE_HOST=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_HOST --query Parameters[0].Value | sed 's/"//g')
export GOOGLE_CLIENT_ID=$(aws ssm get-parameters --region ap-northeast-2 --names GOOGLE_CLIENT_ID --query Parameters[0].Value | sed 's/"//g')
export GOOGLE_CLIENT_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names GOOGLE_CLIENT_SECRET --query Parameters[0].Value | sed 's/"//g')
export IAMPORT_RESTAPI_KEY=$(aws ssm get-parameters --region ap-northeast-2 --names IAMPORT_RESTAPI_KEY --query Parameters[0].Value | sed 's/"//g')
export IAMPORT_RESTAPI_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names IAMPORT_RESTAPI_SECRET --query Parameters[0].Value | sed 's/"//g')
export KAKAO_REST_API=$(aws ssm get-parameters --region ap-northeast-2 --names KAKAO_REST_API --query Parameters[0].Value | sed 's/"//g')
export NODEMAILER_ACCOUT_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names NODEMAILER_ACCOUT_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export NODEMAILER_ACCOUT_USER=$(aws ssm get-parameters --region ap-northeast-2 --names NODEMAILER_ACCOUT_USER --query Parameters[0].Value | sed 's/"//g')
export REDIRECT_URI=$(aws ssm get-parameters --region ap-northeast-2 --names REDIRECT_URI --query Parameters[0].Value | sed 's/"//g')
export REFRESH_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names REFRESH_SECRET --query Parameters[0].Value | sed 's/"//g')
export SERVER_PORT=$(aws ssm get-parameters --region ap-northeast-2 --names SERVER_PORT --query Parameters[0].Value | sed 's/"//g')
export SERVER_URL=$(aws ssm get-parameters --region ap-northeast-2 --names SERVER_URL --query Parameters[0].Value | sed 's/"//g')

authbind --deep pm2 start app.js