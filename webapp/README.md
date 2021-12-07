docker build -t webapp .

docker run --name webapp_container -p 3000:3000 webapp