const e={id:"log-rotation",title:"Log Rotation",difficulty:"beginner",estimatedMinutes:10,tldr:["Log rotation is the process of archiving, compressing, or deleting old log files to prevent disk space exhaustion while preserving recent logs for debugging.","Without rotation, a single log file grows indefinitely — filling the disk, crashing the application, and making log analysis impractical (gigabyte-sized files).","Key parameters: max file size (100MB), max age (30 days), max files (10), compression (gzip), naming pattern (app.log -> app.2024-06-15.log.gz).","Rotation strategies: size-based (rotate when file exceeds N MB), time-based (rotate daily/hourly), hybrid (rotate on first trigger)."],laymanDefinition:"Log rotation is like having a self-cleaning notebook. When a page fills up, you tear it out, file it in a labeled folder (archive), and start a fresh page. When the filing cabinet fills up, you shred the oldest folders (delete). Without this, the notebook keeps growing until it bursts the binder and covers your desk in paper.",deepDive:[{heading:"Linux logrotate Tool (Standard)",text:"The standard log rotation tool for Linux servers. Configuration files in /etc/logrotate.d/. Supports: size threshold, daily/weekly/monthly rotation, compression (gzip), post-rotation scripts (restart service, signal application), date-based naming, max number of rotated files. Cron job runs logrotate daily."},{heading:"Size-Based vs Time-Based Rotation",text:"Size-based: rotate when file exceeds threshold (100MB). Good for high-volume apps with predictable log rates. Time-based: rotate every N hours/days. Predictable archive naming, easier to correlate with time periods. Hybrid: rotate on whichever triggers first. Recommended: size-based with max age as safety net."},{heading:"Compression and Archiving",text:"Gzip rotated logs: reduces size by 80-90%. Trade-off: cannot search compressed logs without decompression. Strategies: compress after N days, keep last N uncompressed for quick debugging, archive to cold storage (S3/Glacier) after retention period. Use pigz (parallel gzip) for faster compression of large files."},{heading:"Application-Level Rotation (Log4j/Winston)",text:"Some logging libraries support rotation internally (Log4j\\'s RollingFileAppender, Winston\\'s File transport with maxsize). Benefits: no external tool needed, application-controlled naming, programmatic configuration. Drawbacks: application crash during rotation can lose data. Recommended: use system-level logrotate for production, app-level as fallback."},{heading:"Docker/Kubernetes Log Rotation",text:"Docker uses json-file logging driver by default — rotates via max-size and max-file flags. Kubernetes: kubelet handles log rotation (max 10 files, 10MB each by default). In Kubernetes, sidecar containers with log shippers (Fluentbit) provide more control. Best practice: containers log to stdout, let the runtime handle rotation."}],interviewAnswer:"Log rotation is a simple but critical operational practice. Always configure rotation before deploying to production — a disk-full crash from unrotated logs is embarrassing and preventable. Use logrotate on Linux, configure Docker's max-size/max-file, and set retention policies. Compress old logs but keep recent ones uncompressed for quick grep access.",interviewQuestions:[{question:"What is log rotation?",answer:"Archiving, compressing, or deleting old log files to prevent disk space exhaustion while retaining recent logs for debugging."},{question:"Why is log rotation important?",answer:"Without it, log files grow indefinitely — filling disks, crashing apps, and making analysis impractical."},{question:"What is the Linux logrotate tool?",answer:"The standard log rotation utility for Linux — configured in /etc/logrotate.d/ with cron-based execution."},{question:"What are common rotation triggers?",answer:"File size (100MB), time interval (daily), or hybrid (first trigger)."},{question:"What is gzip compression in log rotation?",answer:"Compresses rotated logs (80-90% size reduction). Recent logs kept uncompressed for quick searching."},{question:"How does Docker handle log rotation?",answer:"Via json-file logging driver options: --log-opt max-size=10m --log-opt max-file=3."},{question:"How does Kubernetes handle log rotation?",answer:"kubelet rotates logs automatically (default: 10 files, 10MB each). Use sidecar containers for more control."},{question:"What is a post-rotation script?",answer:"A command run after rotation (logrotate: postrotate/endscript). Used to restart services or send SIGHUP."},{question:"What is the dateext option in logrotate?",answer:"Adds date to rotated filenames instead of sequential numbers: app.log -> app-20240615.gz."},{question:"How many rotated logs should you keep?",answer:"Depends on retention policy. Common: 30 daily logs (1 month) or 7 daily + 4 weekly (rolling month)."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Log Rotation</text><rect x="10" y="35" width="110" height="25" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="65" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">app.log</text><text x="65" y="54" text-anchor="middle" font-size="9" fill="#ddd">Active file</text><line x1="120" y1="48" x2="150" y2="48" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="35" width="110" height="25" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="215" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Size Exceeded</text><text x="215" y="54" text-anchor="middle" font-size="9" fill="#ddd">100MB threshold</text><line x1="160" y1="60" x2="160" y2="80" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="70" width="110" height="25" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="65" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Rotate</text><text x="65" y="89" text-anchor="middle" font-size="9" fill="#ddd">Rename + compress</text><line x1="120" y1="83" x2="150" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="160" y="70" width="110" height="25" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="215" y="86" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">app.1.log.gz</text><text x="215" y="89" text-anchor="middle" font-size="9" fill="#ddd">Archived</text><rect x="10" y="105" width="110" height="25" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="65" y="121" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">New app.log</text><text x="65" y="124" text-anchor="middle" font-size="9" fill="#ddd">Fresh file</text><rect x="10" y="135" width="110" height="25" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="65" y="151" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Delete Oldest</text><text x="65" y="154" text-anchor="middle" font-size="9" fill="#ddd">Retention limit</text><rect x="290" y="35" width="190" height="155" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="385" y="51" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Log Rotation</text><text x="385" y="162" text-anchor="middle" font-size="9" fill="#ddd">Prevent disk-full crashes. Archive</text><text x="385" y="173" text-anchor="middle" font-size="9" fill="#ddd">, compress, and purge old logs aut</text><text x="385" y="184" text-anchor="middle" font-size="9" fill="#ddd">omatically.</text><text x="240" y="220" font-size="9" fill="#666" text-anchor="middle">Log Rotation: Automatically archive, compress, and</text><text x="240" y="232" font-size="9" fill="#666" text-anchor="middle"> delete old log files to manage disk space.</text></svg>',codeExamples:[{title:"Linux logrotate Configuration",useCase:"Standard rotation setup.",code:`# /etc/logrotate.d/myapp
/var/log/myapp/*.log {
    daily
    rotate 30
    size 100M
    compress
    delaycompress
    missingok
    notifempty
    dateext
    postrotate
        systemctl reload myapp 2>/dev/null || true
    endscript
}

# Options explained:
# daily: rotate every day
# rotate 30: keep 30 rotated files
# size 100M: also rotate if file > 100MB
# compress: gzip rotated files
# delaycompress: skip compressing the most recent
#   rotated file (easier to debug)
# missingok: no error if log file missing
# dateext: use date in filename (app-20240615.gz)`,description:"logrotate configuration for a typical application — hybrid size+time rotation with compression."},{title:"Docker Container Log Rotation",useCase:"Prevent Docker logs from filling disk.",code:`# Option 1: docker run flags
docker run \\
  --log-driver json-file \\
  --log-opt max-size='10m' \\
  --log-opt max-file='3' \\
  myapp

# Option 2: Docker Compose
services:
  myapp:
    image: myapp
    logging:
      driver: json-file
      options:
        max-size: '10m'
        max-file: '3'

# Option 3: Global daemon.json
# /etc/docker/daemon.json
{ "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}`,description:"Docker log rotation prevents containers from filling disk with log files."},{title:"Winston File Rotation (Node.js)",useCase:"Application-level rotation.",code:`const winston = require('winston');
require('winston-daily-rotate-file');

const transport = new winston.transports.DailyRotateFile({
  filename: 'logs/application-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  maxSize: '100m',
  maxFiles: '30d',
  zippedArchive: true,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  )
});

transport.on('rotate', (oldFilename, newFilename) => {
  console.log('Log rotated:', oldFilename, '->', newFilename);
});

const logger = winston.createLogger({
  transports: [transport]
});`,description:"Winston daily rotation with size limit, 30-day retention, and automatic gzip compression."},{title:"Manual Log Rotation Script (Bash)",useCase:"Simple rotation for any app.",code:`#!/bin/bash
LOG_FILE="/var/log/myapp/app.log"
MAX_SIZE=104857600  # 100MB in bytes
RETENTION_DAYS=30

# Check file size
if [ -f "$LOG_FILE" ] && [ $(stat -c%s "$LOG_FILE") -gt $MAX_SIZE ]; then
  # Rotate: rename with timestamp
  TIMESTAMP=$(date +%Y%m%d-%H%M%S)
  mv "$LOG_FILE" "\${LOG_FILE}.\${TIMESTAMP}"

  # Reopen log file (send SIGHUP if app supports it)
  kill -HUP $(cat /var/run/myapp.pid) 2>/dev/null

  # Compress old log
  gzip "\${LOG_FILE}.\${TIMESTAMP}" &

  # Delete logs older than retention period
  find /var/log/myapp -name "*.gz" -mtime +$RETENTION_DAYS -delete
fi`,description:"Simple manual log rotation script that checks size, rotates, compresses, and purges old logs."},{title:"Kubernetes Log Rotation Config",useCase:"Pod-level log management.",code:`# Node-level kubelet config
# /var/lib/kubelet/config.yaml
containerLogMaxSize: "10Mi"
containerLogMaxFiles: 5

# Or use a sidecar with log rotation
apiVersion: v1
kind: Pod
metadata:
  name: myapp
spec:
  containers:
  - name: app
    image: myapp
    volumeMounts:
    - name: logs
      mountPath: /var/log/app
  - name: log-rotator
    image: tutt/rotate:latest
    volumeMounts:
    - name: logs
      mountPath: /var/log/app
  volumes:
  - name: logs
    emptyDir: {}`,description:"Kubernetes log rotation via kubelet config or sidecar container pattern."}],mcqQuestions:[{question:"What problem does log rotation solve?",options:["Log format consistency","Disk space exhaustion from unbounded log growth","Log encryption","Log query speed"],answer:1,explanation:"Log rotation prevents log files from growing until they fill the disk and crash the application."},{question:"What is the Linux tool for log rotation?",options:["cron","logrotate","rsyslog","systemd"],answer:1,explanation:"logrotate is the standard Linux utility for automated log rotation."},{question:"What does the compress option in logrotate do?",options:["Deletes old logs","Gzips rotated logs","Encrypts logs","Splits logs"],answer:1,explanation:"compress applies gzip compression to rotated log files, reducing size by ~80-90%."},{question:"How does Docker control log rotation?",options:["Via Dockerfile","Via --log-opt max-size and max-file","Via docker-compose.yml only","Automatically"],answer:1,explanation:"Docker log rotation is configured with max-size and max-file logging options."},{question:"What is a post-rotation script?",options:["Script to analyze logs","Script run after logrotate finishes","Script to delete logs","Script to create logs"],answer:1,explanation:"Post-rotation scripts typically reload or restart the application to reopen log file handles."},{question:"What is the default Kubernetes log rotation?",options:["No rotation","10 files, 10MB each (configurable)","Daily rotation","Size-based only"],answer:1,explanation:"kubelet rotates logs by default with configurable max size and max file count."},{question:"Log Rotation — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Log Rotation — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Log Rotation — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Log Rotation — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as log_rotation};
