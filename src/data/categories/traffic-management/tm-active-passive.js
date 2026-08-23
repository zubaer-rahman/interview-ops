export const tm_active_passive = {
  "id": "tm-active-passive",
  "title": "Active-Passive",
  "difficulty": "advanced",
  "estimatedMinutes": 20,
  "tldr": [
    "Active-Passive has one active primary handling traffic and one or more passive standbys waiting to take over.",
    "Standby can be hot (fully running but idle), warm (running but reduced), or cold (stopped, started on failover).",
    "Simpler than Active-Active — no conflict resolution, easier data replication.",
    "Trade-off: standby resources are underutilized (cost), failover takes time (standby promotion)."
  ],
  "laymanDefinition": "Active-Passive is like having a designated driver. One person drives (active) while the other sits in the passenger seat (passive). If the driver gets tired, they switch. This is simpler than both driving simultaneously (Active-Active), but the passenger is idle during the trip.",
  "deepDive": [
    {
      "heading": "Hot Standby",
      "text": "Standby is fully running with all resources allocated. Replication is synchronous or near-synchronous. Failover is fastest (seconds to minutes). Highest standby cost. Used by: AWS RDS Multi-AZ, synchronous database replication."
    },
    {
      "heading": "Warm Standby",
      "text": "Standby has core services running at reduced capacity. Replication is asynchronous. Scale up on failover. Moderate failover time (minutes). Used by: Pilot Light DR strategy."
    },
    {
      "heading": "Cold Standby",
      "text": "Standby has no resources running. Infrastructure must be provisioned on failover. Data backups restored on failover. Slowest failover (hours to days). Cheapest option. Used by: Backup & Restore DR strategy."
    },
    {
      "heading": "Failover Process",
      "text": "1. Health monitor detects primary failure. 2. DNS/LB updated to point to standby. 3. Standby promoted to active. 4. If hot: instant. If warm: scale up. If cold: provision and restore. 5. Traffic resumes. 6. Original primary becomes new standby when recovered."
    }
  ],
  "interviewAnswer": "Active-Passive is the pragmatic choice for most production systems. Use hot standby for critical services (database), warm standby for DR. Accept standby cost as insurance. Automate failover but test manually. Document promotion procedure.",
  "interviewQuestions": [
    {
      "question": "What is Active-Passive?",
      "answer": "One active server, one or more standby servers waiting to take over."
    },
    {
      "question": "What is hot standby?",
      "answer": "Standby fully running, synchronous replication, fastest failover."
    },
    {
      "question": "What is warm standby?",
      "answer": "Standby running at reduced capacity, async replication, moderate failover time."
    },
    {
      "question": "What is cold standby?",
      "answer": "Standby has no resources — provision on failover, slowest failover."
    },
    {
      "question": "Active-Passive vs Active-Active?",
      "answer": "AP: simpler, one idle, slower failover. AA: full utilization, complex, instant."
    },
    {
      "question": "What is standby promotion?",
      "answer": "Process of making the standby the new active server."
    },
    {
      "question": "What is synchronous replication?",
      "answer": "Data written to both primary and standby before acknowledging write."
    },
    {
      "question": "What is asynchronous replication?",
      "answer": "Primary acknowledges write before data reaches standby."
    },
    {
      "question": "What is split-brain?",
      "answer": "Both servers think they\\'re active — prevented by fencing/STONITH."
    },
    {
      "question": "What is fencing?",
      "answer": "Isolating the failed primary to prevent split-brain."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Active-Passive</text><rect x=\"10\" y=\"35\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"75\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Primary (Active)</text><text x=\"75\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Traffic →</text><line x1=\"140\" y1=\"48\" x2=\"180\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"190\" y=\"35\" width=\"150\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"265\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Health Monitor</text><text x=\"265\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Failover trigger</text><line x1=\"340\" y1=\"48\" x2=\"380\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"390\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"440\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Standby (Passive)</text><text x=\"440\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Waiting</text><rect x=\"10\" y=\"70\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"75\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Hot: Running, sync</text><text x=\"75\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Fast failover</text><rect x=\"150\" y=\"70\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"215\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Warm: Reduced, async</text><text x=\"215\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Moderate</text><rect x=\"290\" y=\"70\" width=\"130\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"355\" y=\"86\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Cold: Stopped</text><text x=\"355\" y=\"89\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Slow failover</text><text x=\"240\" y=\"115\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Active-Passive: One server active, standby waits. </text><text x=\"240\" y=\"208\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Failover promotes standby to active.</text></svg>",
  "codeExamples": [
    {
      "title": "AWS RDS Multi-AZ (Active-Passive)",
      "useCase": "DB active-passive.",
      "code": "resource \"aws_db_instance\" \"main\" {\n  engine = \"postgres\"\n  multi_az = true\n  # Synchronous replication to standby in another AZ\n  # AWS manages failover automatically\n  backup_retention_period = 7\n  monitoring_interval = 5\n  # On failover:\n  # 1. DNS updated to standby\n  # 2. Standby promoted to primary\n  # 3. New standby provisioned\n}",
      "description": "AWS RDS Multi-AZ: synchronous replication to standby, automatic failover."
    },
    {
      "title": "Keepalived + HAProxy Active-Passive",
      "useCase": "VIP failover.",
      "code": "vrrp_instance VI_1 {\n  state MASTER        # Primary: MASTER, Standby: BACKUP\n  interface eth0\n  virtual_router_id 51\n  priority 100        # Primary: 100, Standby: 90\n  advert_int 1\n  virtual_ipaddress {\n    192.168.1.100/24  # Virtual IP\n  }\n  track_script {\n    chk_haproxy       # Check HAProxy health\n  }\n}",
      "description": "Keepalived VRRP: MASTER has virtual IP, BACKUP takes over if MASTER fails."
    },
    {
      "title": "Patroni (PostgreSQL HA)",
      "useCase": "Postgres active-passive.",
      "code": "patroni: true,\nscope: mydb,\nnamespace: /service/\npostgresql:\n  use_pg_rewind: true,\n  use_slots: true,\n  parameters:\n    wal_level: replica,\n    hot_standby: \"on\",\nrestapi:\n  listen: \"0.0.0.0:8008\"\netcd:\n  hosts: [\"etcd1:2379\", \"etcd2:2379\"]\n# Patroni manages automatic failover + replica promotion",
      "description": "Patroni manages PostgreSQL HA with automatic failover via DCS."
    },
    {
      "title": "Terraform Active-Passive Multi-AZ",
      "useCase": "Infra as code.",
      "code": "resource \"aws_lb_target_group\" \"primary\" {\n  name = \"primary-tg\"\n  health_check { enabled = true }\n}\n\nresource \"aws_lb_target_group\" \"standby\" {\n  name = \"standby-tg\"\n  health_check { enabled = true }\n}\n\n# Listener forwards to primary by default\n# On failover, update listener to standby\nresource \"aws_lb_listener_rule\" \"main\" {\n  action {\n    target_group_arn = aws_lb_target_group.primary.arn\n  }\n}",
      "description": "Terraform-managed active-passive with ALB target groups."
    }
  ],
  "mcqQuestions": [
    {
      "question": "What is active-passive?",
      "options": [
        "Both servers active",
        "One active, one standby",
        "No redundancy",
        "Manual only"
      ],
      "answer": 1,
      "explanation": "One active, one or more standby servers."
    },
    {
      "question": "Fastest standby type?",
      "options": [
        "Cold",
        "Warm",
        "Hot",
        "None"
      ],
      "answer": 2,
      "explanation": "Hot standby is fully running with sync replication."
    },
    {
      "question": "Cheapest standby type?",
      "options": [
        "Cold",
        "Warm",
        "Hot",
        "None"
      ],
      "answer": 0,
      "explanation": "Cold standby has no running resources."
    },
    {
      "question": "What problem does fencing prevent?",
      "options": [
        "Data corruption",
        "Split-brain",
        "Slow failover",
        "Network issues"
      ],
      "answer": 1,
      "explanation": "Fencing prevents split-brain (both servers thinking they\\'re active)."
    },
    {
      "question": "What AWS service provides active-passive for RDS?",
      "options": [
        "RDS Single-AZ",
        "RDS Multi-AZ",
        "RDS Read Replica",
        "Aurora Serverless"
      ],
      "answer": 1,
      "explanation": "RDS Multi-AZ provides active-passive with automatic failover."
    },
    {
      "question": "What is VRRP?",
      "options": [
        "Database protocol",
        "Virtual Router Redundancy Protocol",
        "Security protocol",
        "DNS protocol"
      ],
      "answer": 1,
      "explanation": "VRRP provides virtual IP failover between servers."
    }
  ]
};
