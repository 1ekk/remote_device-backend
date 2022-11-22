docker build -t 1ekk/btn_proxy:1.0 .
docker run --name btn_proxy -d -p 8080:8080 -v "C:\Users\ivank\Desktop\1ek\PROJECTS\DOCKER\config":/app/config 1ekk/btn_proxy:1.0