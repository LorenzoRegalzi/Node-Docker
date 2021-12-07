docker build -t webapp .

docker run --name webapp_container -p 3000:3000 webapp

docker run --name webapp_container --mount type=bind,source="$(pwd)", destination=/usr/app -p 3000:3000 webapp