# Spring + Angular Hybrid

The Angular SPA is built into a static bundle and embedded in a Spring Boot application that orchestrates the build, injects environment variables, and packages everything into an executable JAR. 

This JAR contains an embedded servlet container, so Spring serves the Angular assets at the root context while also exposing any necessary REST endpoints. 

Thus, the entire stack runs as a single Java process, simplifying deployment and environment configuration.
