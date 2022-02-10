#Build
FROM maven:3.8.4-jdk-8 AS maven

WORKDIR /spring_notification_service

#copy pom
COPY pom.xml .

#resolve maven dependencies
RUN mvn clean package -Dmaven.test.skip -Dmaven.main.skip -Dspring-boot.repackage.skip && rm -r target/

#copy source
COPY src ./src

# build the app (no dependency download here)
RUN mvn clean package  -Dmaven.test.skip

ARG JAR_FILE=spring-notification-service-0.0.1-SNAPSHOT.jar

#Deploy
FROM openjdk:8-jdk-alpine
EXPOSE 8080
VOLUME /tmp
COPY --from=maven /spring_notification_service/target/spring-notification-service-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]