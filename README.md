#WhatsUp - Chat Application


login page

![Screenshot (88)](https://github.com/rishul25/Mern-chat-App/assets/85450019/a8498e97-5312-48f8-900a-be4c85f28c14)

register page 

![Screenshot (89)](https://github.com/rishul25/Mern-chat-App/assets/85450019/624ba756-1411-4d09-b5f0-b897f2043eba)

Installation Guide
Requirements
Nodejs
Mongodb
Both should be installed and make sure mongodb is running.

git clone https://github.com/koolkishan/chat-app-react-nodejs
cd chat-app-react-nodejs
Now rename env files from .env.example to .env

cd public
mv .env.example .env
cd ..
cd server
mv .env.example .env
cd ..
Now install the dependencies

cd server
yarn
cd ..
cd public
yarn
We are almost done, Now just start the development server.

For Frontend.

cd public
yarn start
For Backend.

Open another terminal in folder, Also make sure mongodb is running in background.

cd server
yarn start
Done! Now open localhost:3000 in your browser.