export const sql_triggers = {
  "id": "sql-triggers",
  "title": "Triggers",
  "difficulty": "advanced",
  "estimatedMinutes": 25,
  "tldr": [
    "A trigger is a database function that automatically executes when a specified event occurs on a table.",
    "Trigger events: INSERT, UPDATE, DELETE, or TRUNCATE. Timing: BEFORE, AFTER, or INSTEAD OF.",
    "Statement-level triggers fire once per SQL statement. Row-level triggers fire once per affected row.",
    "Triggers enforce business rules, maintain audit logs, update summary tables, and cascade changes."
  ],
  "laymanDefinition": "A trigger is like an automatic action that happens whenever something changes. Like setting up an automatic email notification when a new user signs up. You define the trigger once, and it runs every time the event occurs without manual intervention.",
  "deepDive": [
    {
      "heading": "Trigger Timing",
      "text": "BEFORE trigger — runs before the operation. Can modify the new row or prevent the operation. AFTER trigger — runs after the operation. Cannot modify the row but can access OLD and NEW data. INSTEAD OF — replaces the operation (views)."
    },
    {
      "heading": "Row vs Statement Level",
      "text": "FOR EACH ROW — fires once per affected row. Has access to OLD and NEW row data. FOR EACH STATEMENT — fires once per SQL statement regardless of rows affected. No per-row data access. Row-level is more common."
    },
    {
      "heading": "OLD and NEW References",
      "text": "OLD — the row before the operation (UPDATE/DELETE). NEW — the row after the operation (INSERT/UPDATE). OLD and NEW are RECORD types. Access fields: OLD.salary, NEW.name."
    },
    {
      "heading": "Trigger Functions",
      "text": "Must return TRIGGER type. RETURN NEW — proceed with operation. RETURN NULL — skip operation (for BEFORE triggers). RETURN OLD — for DELETE. Created with CREATE FUNCTION ... RETURNS TRIGGER, then attached with CREATE TRIGGER."
    },
    {
      "heading": "Triggers and Performance",
      "text": "Row-level triggers on large operations can be slow. Each row execution adds overhead. Minimize trigger logic. Use statement-level triggers when per-row data is not needed. Avoid triggers that query the same table (recursion risk)."
    }
  ],
  "interviewAnswer": "Triggers are powerful for maintaining data integrity automatically. However, they can make debugging difficult since the execution is implicit. Use triggers sparingly and document them thoroughly. Prefer application-level logic when possible.",
  "interviewQuestions": [
    {
      "question": "What is a trigger?",
      "answer": "A database function that automatically executes on INSERT, UPDATE, DELETE, or TRUNCATE events."
    },
    {
      "question": "What are the trigger timing options?",
      "answer": "BEFORE (before operation), AFTER (after operation), INSTEAD OF (replaces operation for views)."
    },
    {
      "question": "What is the difference between row and statement triggers?",
      "answer": "Row-level (FOR EACH ROW) fires per row, has OLD/NEW access. Statement-level fires once per statement."
    },
    {
      "question": "What does OLD represent in a trigger?",
      "answer": "The row data before the operation. Available in UPDATE and DELETE triggers."
    },
    {
      "question": "What does NEW represent?",
      "answer": "The row data after the operation. Available in INSERT and UPDATE triggers."
    },
    {
      "question": "Can a trigger prevent an operation?",
      "answer": "Yes. In a BEFORE trigger, RETURN NULL aborts the operation. Raise an exception to produce an error."
    },
    {
      "question": "Can triggers be recursive?",
      "answer": "Yes. A trigger that modifies the same table can fire itself again. PostgreSQL limits recursion depth (max_stack_depth)."
    },
    {
      "question": "What is an INSTEAD OF trigger?",
      "answer": "Replaces the triggering operation entirely. Mainly used on views to make them updatable."
    },
    {
      "question": "How do you view triggers?",
      "answer": "PostgreSQL: SELECT * FROM pg_triggers; or \\dy in psql."
    },
    {
      "question": "Can you disable a trigger temporarily?",
      "answer": "Yes. ALTER TABLE table_name DISABLE TRIGGER trigger_name; For all: ALTER TABLE table_name DISABLE TRIGGER ALL;"
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Triggers</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">BEFORE</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Pre-check</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">AFTER</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Post-action</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">INSTEAD OF</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">View modify</text><rect x=\"170\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"220\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">FOR EACH ROW</text><text x=\"220\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Per row</text><rect x=\"170\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"220\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">FOR EACH STMT</text><text x=\"220\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Per stmt</text><rect x=\"170\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#6610f2\" stroke=\"#6610f2\" stroke-width=\"1.5\"/><text x=\"220\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">OLD / NEW</text><text x=\"220\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Row data</text><line x1=\"100\" y1=\"48\" x2=\"130\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"100\" y1=\"78\" x2=\"130\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"100\" y1=\"108\" x2=\"130\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"280\" y=\"35\" width=\"200\" height=\"95\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"380\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Triggers</text><text x=\"380\" y=\"102\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Automatic execution on table events.</text><text x=\"380\" y=\"113\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\"> Use for validation, audit, and casc</text><text x=\"380\" y=\"124\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">ading.</text><text x=\"240\" y=\"170\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Triggers: Automatic functions executed on INSERT, </text><text x=\"240\" y=\"182\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">UPDATE, DELETE events.</text></svg>",
  "codeExamples": [
    {
      "title": "Before Insert Validation",
      "useCase": "Ensure data quality.",
      "code": "CREATE FUNCTION validate_employee()\nRETURNS TRIGGER AS $$\nBEGIN\n  IF NEW.salary < 0 THEN\n    RAISE EXCEPTION 'Salary cannot be negative: %', NEW.salary;\n  END IF;\n  IF NEW.email IS NULL THEN\n    NEW.email = LOWER(NEW.name) || '@company.com';\n  END IF;\n  RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;\n\nCREATE TRIGGER trg_validate_employee\nBEFORE INSERT ON employees\nFOR EACH ROW EXECUTE FUNCTION validate_employee();",
      "description": "Validates and auto-fills data before insert."
    },
    {
      "title": "Audit Log Trigger",
      "useCase": "Track all changes.",
      "code": "CREATE FUNCTION audit_employee_changes()\nRETURNS TRIGGER AS $$\nBEGIN\n  INSERT INTO employee_audit(employee_id, changed_by, changed_at, old_data, new_data)\n  VALUES (OLD.id, current_user, NOW(),\n    ROW(OLD.*)::TEXT, ROW(NEW.*)::TEXT);\n  RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;\n\nCREATE TRIGGER trg_audit_employees\nAFTER UPDATE ON employees\nFOR EACH ROW EXECUTE FUNCTION audit_employee_changes();",
      "description": "Logs all employee updates to an audit table for compliance."
    },
    {
      "title": "Update Summary Table Trigger",
      "useCase": "Maintain aggregated data.",
      "code": "CREATE FUNCTION update_dept_summary()\nRETURNS TRIGGER AS $$\nBEGIN\n  IF TG_OP = 'INSERT' OR TG_OP = 'UPDATE' THEN\n    INSERT INTO dept_summary(dept_id, emp_count, total_salary)\n    VALUES (NEW.dept_id, 1, NEW.salary)\n    ON CONFLICT (dept_id) DO UPDATE SET\n      emp_count = dept_summary.emp_count + 1,\n      total_salary = dept_summary.total_salary + NEW.salary;\n  END IF;\n  RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;",
      "description": "Keeps department summary table in sync with employee changes."
    },
    {
      "title": "INSTEAD OF Trigger on View",
      "useCase": "Make views updatable.",
      "code": "CREATE FUNCTION update_employee_view()\nRETURNS TRIGGER AS $$\nBEGIN\n  UPDATE employees SET\n    name = NEW.name, salary = NEW.salary\n  WHERE id = OLD.id;\n  RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;\n\nCREATE TRIGGER trg_update_emp_view\nINSTEAD OF UPDATE ON employee_details_view\nFOR EACH ROW EXECUTE FUNCTION update_employee_view();",
      "description": "INSTEAD OF trigger makes a complex view support UPDATE operations."
    },
    {
      "title": "Delete Cascade Trigger",
      "useCase": "Custom cascade logic.",
      "code": "CREATE FUNCTION cascade_delete_department()\nRETURNS TRIGGER AS $$\nBEGIN\n  -- Archive employees before delete\n  INSERT INTO employee_archive SELECT * FROM employees WHERE dept_id = OLD.id;\n  DELETE FROM employees WHERE dept_id = OLD.id;\n  RETURN OLD;\nEND;\n$$ LANGUAGE plpgsql;\n\nCREATE TRIGGER trg_cascade_dept\nBEFORE DELETE ON departments\nFOR EACH ROW EXECUTE FUNCTION cascade_delete_department();",
      "description": "Custom cascade: archives employees before deleting a department."
    }
  ],
  "mcqQuestions": [
    {
      "question": "When does a BEFORE trigger fire?",
      "options": [
        "Before the operation",
        "After the operation",
        "Instead of operation",
        "On commit"
      ],
      "answer": 0,
      "explanation": "BEFORE triggers fire before the data modification."
    },
    {
      "question": "What does FOR EACH ROW mean?",
      "options": [
        "Once per statement",
        "Once per row",
        "Once per table",
        "Once per transaction"
      ],
      "answer": 1,
      "explanation": "FOR EACH ROW fires the trigger once per affected row."
    },
    {
      "question": "What does OLD contain?",
      "options": [
        "New row data",
        "Old row data",
        "Table metadata",
        "Trigger data"
      ],
      "answer": 1,
      "explanation": "OLD contains the row data before modification."
    },
    {
      "question": "How do you abort an operation in a trigger?",
      "options": [
        "RETURN NULL",
        "RAISE EXCEPTION",
        "ROLLBACK",
        "Both A and B"
      ],
      "answer": 3,
      "explanation": "RETURN NULL or RAISE EXCEPTION both abort the operation."
    },
    {
      "question": "What trigger type makes views updatable?",
      "options": [
        "BEFORE",
        "AFTER",
        "INSTEAD OF",
        "FOR EACH ROW"
      ],
      "answer": 2,
      "explanation": "INSTEAD OF triggers replace the operation, making views writable."
    },
    {
      "question": "How do you disable a trigger?",
      "options": [
        "DROP TRIGGER",
        "DISABLE TRIGGER",
        "ALTER TABLE ... DISABLE TRIGGER",
        "DEACTIVATE TRIGGER"
      ],
      "answer": 2,
      "explanation": "ALTER TABLE table_name DISABLE TRIGGER trigger_name disables it."
    }
  ]
};
