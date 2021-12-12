FROM openjdk:8-jdk-slim
COPY "./taget/spring-boot-docker-0.0.2.jar" "Calculadora.jar"
EXPOSE 8080
ENTRYPOINT [ "java","-jar","Calculadora.jar" ]