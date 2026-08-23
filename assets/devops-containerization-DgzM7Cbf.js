const e={id:"devops-containerization",title:"Containerization",difficulty:"intermediate",estimatedMinutes:20,tldr:["Containerization packages an application with all its dependencies into a standardized unit (container) that runs consistently across any environment — developer laptop, test server, or production.","Docker is the leading container platform. Containers are lightweight, portable, and isolated from the host system and other containers using operating system-level virtualization.","Unlike VMs, containers share the host OS kernel, making them smaller (MB vs GB) and faster to start (milliseconds vs minutes). Each container gets its own filesystem, network, and process space.","Key concepts: Dockerfile (build instructions), images (read-only templates), containers (running instances), registries (image storage — Docker Hub, ECR, ACR), and Docker Compose (multi-container applications)."],laymanDefinition:"Containers are like standardized shipping containers for software. Just as shipping containers revolutionized global trade by fitting on any ship, truck, or train, Docker containers run identically on any system. Everything the application needs is packed inside — code, runtime, libraries, configuration — like a self-contained apartment. No more it works on my machine. Each container is isolated from others, just like shipping containers stacked on a ship.",deepDive:[{heading:"Docker Architecture",text:"Docker uses client-server architecture. Docker client (CLI) talks to Docker daemon (dockerd) via REST API. Daemon builds, runs, and manages containers. Images are stored in registries (public Docker Hub, private ECR/Acr). Containers are running instances of images. Docker Compose orchestrates multi-container applications with a YAML file. Docker Desktop provides a GUI for local development. Under the hood, containers use Linux kernel features: namespaces (isolation), cgroups (resource limits), union filesystem (layered images)."},{heading:"Dockerfile and Image Layers",text:"Dockerfile: instructions to build an image. Each instruction creates a layer: FROM (base image), RUN (execute commands), COPY (add files), CMD/ENTRYPOINT (start command). Layers are cached and reused — order matters (put infrequently changing layers first). Multi-stage builds: use one image for building (with SDKs) and another for running (minimal). Result: smaller images. Example: Node.js build in full image → copy artifacts to alpine image. Image layers are read-only; container adds a writable layer on top."},{heading:"Container Lifecycle and Management",text:"States: created (image loaded), running (process executing), paused (frozen), stopped (exited), deleted (removed). Key commands: docker run (create + start), docker exec (run command in running container), docker logs (view stdout/stderr), docker stop (graceful stop), docker kill (force stop), docker rm (remove stopped container). Volume mounts: bind mount (host path), volume (Docker-managed), tmpfs (in-memory). Network: bridge (default), host (shared with host), overlay (multi-host)."},{heading:"Docker Compose for Multi-Container Apps",text:"docker-compose.yml defines services (containers), networks, and volumes. Example: web app, database, cache, queue. Each service specifies image (or build context), ports, environment variables, volumes, and dependencies. depends_on controls startup order. Health checks verify service readiness. Profiles enable conditional services (dev vs production). Deploy section (Swarm mode): replicas, resource limits, restart policy. Compose is ideal for development environments and single-host deployments."},{heading:"Container Security Best Practices",text:"Use minimal base images (alpine, distroless). Run as non-root user. Scan images for vulnerabilities (Trivy, Snyk, Docker Scan). Use multi-stage builds to reduce attack surface. Never store secrets in images — use secrets at runtime (Docker secrets, environment variables from vault). Sign and verify images with Docker Content Trust. Limit resource usage (--memory, --cpus). Read-only root filesystem (--read-only). Drop unnecessary Linux capabilities. Use seccomp and AppArmor profiles."}],interviewAnswer:"Containerization with Docker enables consistent, portable, and efficient application deployment. Use multi-stage builds for small images. Follow security best practices: minimal base images, non-root users, vulnerability scanning. Use Docker Compose for multi-container applications in development. For production, use an orchestrator like Kubernetes. Containers are the standard unit of deployment in modern cloud-native architectures.",interviewQuestions:[{question:"What is containerization?",answer:"Packaging an application with all dependencies into a standardized, portable unit called a container."},{question:"How are containers different from VMs?",answer:"Containers share host OS kernel (lightweight, fast start). VMs include full OS (heavier, slower start)."},{question:"What is Docker?",answer:"The leading container platform for building, shipping, and running containerized applications."},{question:"What is a Dockerfile?",answer:"A text file with instructions for building a Docker image."},{question:"What is a Docker image?",answer:"A read-only template with instructions for creating containers. Built from a Dockerfile."},{question:"What is a Docker container?",answer:"A runnable instance of a Docker image — isolated process with its own filesystem and network."},{question:"What is Docker Compose?",answer:"A tool for defining and running multi-container Docker applications using a YAML file."},{question:"What is a Docker registry?",answer:"A repository for storing and distributing Docker images (Docker Hub, ECR, ACR)."},{question:"What is the difference between CMD and ENTRYPOINT?",answer:"CMD provides default arguments. ENTRYPOINT defines the executable. They can be combined."},{question:"What is a multi-stage build?",answer:"Using multiple FROM statements in a Dockerfile to separate build environment from runtime — results in smaller images."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Containerization</text><rect x="10" y="35" width="100" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Dockerfile</text><text x="60" y="54" text-anchor="middle" font-size="9" fill="#ddd">Build instructions</text><rect x="10" y="65" width="100" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="60" y="81" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Image</text><text x="60" y="84" text-anchor="middle" font-size="9" fill="#ddd">Read-only template</text><rect x="10" y="95" width="100" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="111" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Container</text><text x="60" y="114" text-anchor="middle" font-size="9" fill="#ddd">Running instance</text><line x1="110" y1="48" x2="140" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="78" x2="140" y2="78" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><line x1="110" y1="108" x2="140" y2="108" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="35" width="130" height="80" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Docker</text><text x="215" y="109" text-anchor="middle" font-size="9" fill="#ddd">Container platform</text><rect x="10" y="130" width="100" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Registry</text><text x="60" y="149" text-anchor="middle" font-size="9" fill="#ddd">Image storage</text><rect x="10" y="160" width="100" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="60" y="176" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Compose</text><text x="60" y="179" text-anchor="middle" font-size="9" fill="#ddd">Multi-container</text><rect x="300" y="35" width="180" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="390" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Containerization</text><text x="390" y="151" text-anchor="middle" font-size="9" fill="#ddd">Standardized, portable, lightwei</text><text x="390" y="162" text-anchor="middle" font-size="9" fill="#ddd">ght application packaging. Docke</text><text x="390" y="173" text-anchor="middle" font-size="9" fill="#ddd">r, images, containers, registrie</text><text x="390" y="184" text-anchor="middle" font-size="9" fill="#ddd">s, Compose.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Containerization: Portable app packaging. Docker, </text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle">images, containers, registries, Compose, multi-sta</text><text x="240" y="244" font-size="9" fill="#666" text-anchor="middle">ge builds.</text></svg>',codeExamples:[{title:"Dockerfile with Multi-Stage Build",useCase:"Build a Go app efficiently.",code:`# Dockerfile — Multi-stage build for Go app
# Stage 1: Build
FROM golang:1.21 AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o myapp .

# Stage 2: Runtime
FROM alpine:3.19
RUN apk --no-cache add ca-certificates tzdata
RUN adduser -D appuser
USER appuser
WORKDIR /app
COPY --from=builder /app/myapp .
EXPOSE 8080
CMD ["./myapp"]`,description:"Multi-stage Dockerfile: builds Go binary in full image, then copies only the binary to a minimal alpine runtime image."},{title:"Docker Compose for Web App",useCase:"Multi-container application.",code:`# docker-compose.yml — Web app with PostgreSQL
version: "3.9"
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/myapp
      - REDIS_URL=redis://cache:6379
    depends_on:
      db:
        condition: service_healthy
      cache:
        condition: service_started

  db:
    image: postgres:16-alpine
    volumes:
      - pgdata:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: myapp
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user"]
      interval: 5s

  cache:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  pgdata:`,description:"Docker Compose configuration for a web app with PostgreSQL database and Redis cache with health checks."},{title:"Docker Networking",useCase:"Connect containers.",code:`# Create custom bridge network
$ docker network create --driver bridge app-network

# Run containers on the network
$ docker run -d --name web --network app-network -p 80:80 nginx
$ docker run -d --name api --network app-network my-api:latest
$ docker run -d --name db --network app-network postgres:16

# Containers can reach each other by name
# web can resolve "api" and "db" via DNS
# No need to expose ports for inter-container communication

# Inspect network
$ docker network inspect app-network

# Network types:
# - bridge (default): isolated, internal DNS, port mapping for external
# - host: container uses host networking stack, no isolation
# - overlay: multi-host networking (Swarm/Kubernetes)
# - macvlan: assign MAC address to container, appears as physical device`,description:"Docker custom bridge network enabling DNS-based container discovery without port exposure for inter-container communication."},{title:"Container Resource Limits",useCase:"Control container resources.",code:`# Run container with resource limits
$ docker run -d \\
  --name web \\
  --memory="512m" \\
  --memory-reservation="256m" \\
  --cpus="0.5" \\
  --pids-limit=100 \\
  --read-only \\
  --tmpfs /tmp:rw,noexec,nosuid,size=64m \\
  --security-opt=no-new-privileges:true \\
  --cap-drop=ALL \\
  --cap-add=NET_BIND_SERVICE \\
  nginx:alpine

# Update limits on running container
$ docker update --memory="1g" --cpus="1" web

# View resource usage
$ docker stats web

# Docker Compose resource limits:
# services:
#   web:
#     deploy:
#       resources:
#         limits:
#           cpus: "0.5"
#           memory: 512M
#         reservations:
#           cpus: "0.25"
#           memory: 256M`,description:"Docker resource limits for memory, CPU, processes, read-only filesystem, and capability dropping for container security."},{title:"Docker Security Scanning",useCase:"Vulnerability assessment.",code:`# Scan image with Trivy (open-source)
$ trivy image nginx:alpine

# Scan with Docker Scout (integrated)
$ docker scout quickview nginx:alpine
$ docker scout recommendations nginx:alpine

# Scan with Snyk
$ snyk container test nginx:alpine --file=Dockerfile

# CI/CD integration
# .github/workflows/scan.yml
name: Container Security Scan
on: [push]
jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build image
        run: docker build -t myapp:\${{ github.sha }} .
      - name: Scan with Trivy
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: myapp:\${{ github.sha }}
          format: sarif
          output: trivy-results.sarif
      - name: Upload results
        uses: github/codeql-action/upload-sarif@v2
        with:
          sarif_file: trivy-results.sarif`,description:"Container vulnerability scanning with Trivy, Docker Scout, and Snyk integrated into CI/CD pipeline."}],mcqQuestions:[{question:"How are containers different from VMs?",options:["Containers are larger","Containers share host OS kernel, VMs have full OS per instance","Containers are slower","Containers require hypervisor"],answer:1,explanation:"Containers share the host kernel; VMs each have their own OS."},{question:"What is a Docker image?",options:["A running container","A read-only template for creating containers","A Dockerfile instruction","A network configuration"],answer:1,explanation:"Images are read-only templates built from Dockerfiles used to create containers."},{question:"What is the purpose of multi-stage builds?",options:["Faster execution","Smaller final images by separating build and runtime","Better networking","More secure by default"],answer:1,explanation:"Multi-stage builds use one stage for building and another minimal stage for running."},{question:"What does docker-compose manage?",options:["Single containers only","Multi-container applications defined in YAML","Kubernetes clusters","Cloud resources"],answer:1,explanation:"Docker Compose manages multi-container applications defined in a docker-compose.yml file."},{question:"What is the difference between VOLUME and bind mount?",options:["Similar concept","Volume is Docker-managed, bind mount maps host directory","Volume is for Windows only","Bind mount is slower"],answer:1,explanation:"Volumes are managed by Docker. Bind mounts map specific host directories into containers."},{question:"Why run containers with --read-only flag?",options:["Faster startup","Prevent container filesystem modifications for security","Smaller image size","Better networking"],answer:1,explanation:"--read-only prevents runtime filesystem modifications, reducing the attack surface."},{question:"Containerization — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Containerization — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Containerization — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Containerization — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as devops_containerization};
