export const sql_date_functions = {
  "id": "sql-date-functions",
  "title": "Date/Time Functions",
  "difficulty": "beginner",
  "estimatedMinutes": 20,
  "tldr": [
    "SQL date/time functions handle date arithmetic, extraction, formatting, and conversion.",
    "CURRENT_DATE returns today's date. CURRENT_TIMESTAMP / NOW() returns current date and time.",
    "EXTRACT or DATE_PART retrieves specific parts (year, month, day, hour) from dates/timestamps.",
    "Date arithmetic: date + INTERVAL '1 day', AGE() for difference between dates, DATEDIFF() in MySQL."
  ],
  "laymanDefinition": "Date/time functions are like a calendar and clock built into the database. You can add days, find the difference between dates, extract the month, or format dates for display.",
  "deepDive": [
    {
      "heading": "Current Date/Time",
      "text": "CURRENT_DATE — today. CURRENT_TIME — current time. CURRENT_TIMESTAMP — date + time. NOW() — same as CURRENT_TIMESTAMP. LOCALTIME / LOCALTIMESTAMP — without timezone. PostgreSQL supports all of these."
    },
    {
      "heading": "EXTRACT and DATE_PART",
      "text": "EXTRACT(YEAR FROM timestamp) — get year. EXTRACT(MONTH FROM date). EXTRACT(DOW FROM date) — day of week (0=Sunday). PostgreSQL also supports DATE_PART(\\'year\\', timestamp). MySQL: EXTRACT and YEAR(), MONTH(), DAY() functions."
    },
    {
      "heading": "Date Arithmetic",
      "text": "PostgreSQL: date + INTERVAL \\'1 day\\', date - INTERVAL \\'3 months\\', date + integer (adds days). AGE(date1, date2) returns interval. MySQL: DATE_ADD(date, INTERVAL 1 DAY), DATEDIFF(date1, date2)."
    },
    {
      "heading": "Formatting Dates",
      "text": "TO_CHAR(timestamp, \\'YYYY-MM-DD\\') — format date as string (PostgreSQL). TO_CHAR(timestamp, \\'Mon DD, YYYY\\') — \\'Jan 15, 2024\\'. MySQL: DATE_FORMAT(date, \\'%Y-%m-%d\\')."
    },
    {
      "heading": "Date Truncation",
      "text": "DATE_TRUNC(\\'month\\', timestamp) — truncates to first of month (PostgreSQL). DATE_TRUNC(\\'year\\', timestamp) — truncates to Jan 1. Essential for grouping by month/year: GROUP BY DATE_TRUNC(\\'month\\', order_date)."
    }
  ],
  "interviewAnswer": "Date/time functions are essential for reporting, aging analysis, and time-based grouping. PostgreSQL has the most comprehensive date/time support of any SQL database.",
  "interviewQuestions": [
    {
      "question": "How do you get today\\'s date?",
      "answer": "CURRENT_DATE returns the current date. CURRENT_TIMESTAMP and NOW() return date and time."
    },
    {
      "question": "How do you extract the year from a date?",
      "answer": "EXTRACT(YEAR FROM date_column). PostgreSQL also supports DATE_PART(\\'year\\', date_column)."
    },
    {
      "question": "How do you add days to a date?",
      "answer": "PostgreSQL: date + INTERVAL \\'7 days\\' or date + 7. MySQL: DATE_ADD(date, INTERVAL 7 DAY)."
    },
    {
      "question": "How do you find the difference between two dates?",
      "answer": "PostgreSQL: AGE(end_date, start_date) returns interval. MySQL: DATEDIFF(end_date, start_date) returns days."
    },
    {
      "question": "How do you format a date as a string?",
      "answer": "PostgreSQL: TO_CHAR(date, \\'YYYY-MM-DD\\'). MySQL: DATE_FORMAT(date, \\'%Y-%m-%d\\')."
    },
    {
      "question": "What does DATE_TRUNC do?",
      "answer": "Truncates a timestamp to a specified precision. DATE_TRUNC(\\'month\\', date) returns first day of month at midnight."
    },
    {
      "question": "What is the difference between TIMESTAMP and TIMESTAMPTZ?",
      "answer": "TIMESTAMP stores date/time without timezone. TIMESTAMPTZ (TIMESTAMP WITH TIME ZONE) stores with timezone and converts to UTC."
    },
    {
      "question": "How do you get the day of week?",
      "answer": "EXTRACT(DOW FROM date) — 0=Sunday, 6=Saturday (PostgreSQL). MySQL: DAYOFWEEK(date) — 1=Sunday."
    },
    {
      "question": "How do you get the last day of the month?",
      "answer": "PostgreSQL: (DATE_TRUNC(\\'month\\', date) + INTERVAL \\'1 month\\' - INTERVAL \\'1 day\\')::DATE."
    },
    {
      "question": "Can you index date columns?",
      "answer": "Yes. B-tree indexes work well for date columns, especially for range queries and ORDER BY."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 500 300\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"500\" height=\"300\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"250\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Date/Time Functions</text><rect x=\"10\" y=\"35\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#0070f3\" stroke=\"#0070f3\" stroke-width=\"1.5\"/><text x=\"60\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">NOW()</text><text x=\"60\" y=\"54\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Current time</text><rect x=\"10\" y=\"65\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#28a745\" stroke=\"#28a745\" stroke-width=\"1.5\"/><text x=\"60\" y=\"81\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">EXTRACT</text><text x=\"60\" y=\"84\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Get part</text><rect x=\"10\" y=\"95\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#ffc107\" stroke=\"#ffc107\" stroke-width=\"1.5\"/><text x=\"60\" y=\"111\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">+ INTERVAL</text><text x=\"60\" y=\"114\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Add time</text><rect x=\"10\" y=\"125\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#dc3545\" stroke=\"#dc3545\" stroke-width=\"1.5\"/><text x=\"60\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">AGE()</text><text x=\"60\" y=\"144\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Difference</text><rect x=\"10\" y=\"155\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e83e8c\" stroke=\"#e83e8c\" stroke-width=\"1.5\"/><text x=\"60\" y=\"171\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">TO_CHAR</text><text x=\"60\" y=\"174\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Format</text><line x1=\"110\" y1=\"48\" x2=\"140\" y2=\"48\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"78\" x2=\"140\" y2=\"78\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"108\" x2=\"140\" y2=\"108\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"138\" x2=\"140\" y2=\"138\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><line x1=\"110\" y1=\"168\" x2=\"140\" y2=\"168\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"150\" y=\"35\" width=\"230\" height=\"155\" rx=\"5\" fill=\"#17a2b8\" stroke=\"#17a2b8\" stroke-width=\"1.5\"/><text x=\"265\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Date/Time Functions</text><text x=\"265\" y=\"173\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Manipulate, extract, format, and compute </text><text x=\"265\" y=\"184\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">with dates and timestamps.</text><text x=\"240\" y=\"220\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">Date/Time Functions: Date arithmetic, extraction, </text><text x=\"240\" y=\"232\" font-size=\"9\" fill=\"#666\" text-anchor=\"middle\">formatting, and timezone handling.</text></svg>",
  "codeExamples": [
    {
      "title": "Current Timestamp Variations",
      "useCase": "Getting current date/time.",
      "code": "SELECT\n  CURRENT_DATE AS today,\n  CURRENT_TIME AS time_now,\n  CURRENT_TIMESTAMP AS ts_now,\n  NOW() AS now,\n  LOCALTIMESTAMP AS local_ts;",
      "description": "Shows various ways to get current date and time in PostgreSQL."
    },
    {
      "title": "EXTRACT for Reporting",
      "useCase": "Analyze orders by time parts.",
      "code": "SELECT\n  EXTRACT(YEAR FROM order_date) AS year,\n  EXTRACT(MONTH FROM order_date) AS month,\n  EXTRACT(DOW FROM order_date) AS day_of_week,\n  COUNT(*) AS orders\nFROM orders\nGROUP BY year, month, day_of_week\nORDER BY year, month;",
      "description": "Breaks down orders by year, month, and day of week."
    },
    {
      "title": "Date Arithmetic",
      "useCase": "Find pending actions.",
      "code": "SELECT\n  name, last_login,\n  AGE(CURRENT_DATE, last_login) AS time_since_login,\n  last_login + INTERVAL '90 days' AS expiry_date\nFROM users\nWHERE last_login < CURRENT_DATE - INTERVAL '30 days'\nORDER BY last_login;",
      "description": "Finds inactive users and calculates their account expiry."
    },
    {
      "title": "DATE_TRUNC for Grouping",
      "useCase": "Monthly sales aggregation.",
      "code": "SELECT\n  DATE_TRUNC('month', order_date) AS month,\n  COUNT(*) AS orders,\n  SUM(amount) AS total_sales\nFROM orders\nWHERE order_date >= '2024-01-01'\nGROUP BY DATE_TRUNC('month', order_date)\nORDER BY month;",
      "description": "Groups orders by month using date truncation."
    },
    {
      "title": "TO_CHAR Formatting",
      "useCase": "User-friendly date display.",
      "code": "SELECT\n  TO_CHAR(order_date, 'Mon DD, YYYY') AS formatted_date,\n  TO_CHAR(order_date, 'Day') AS weekday,\n  TO_CHAR(order_date, 'HH12:MI AM') AS time_of_day\nFROM orders\nLIMIT 5;",
      "description": "Formats dates and times for display in reports."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which function returns current date and time?",
      "options": [
        "CURRENT_DATE",
        "CURRENT_TIMESTAMP",
        "CURRENT_TIME",
        "TODAY()"
      ],
      "answer": 1,
      "explanation": "CURRENT_TIMESTAMP returns current date and time."
    },
    {
      "question": "What does EXTRACT(YEAR FROM date) do?",
      "options": [
        "Adds a year",
        "Gets the year part",
        "Removes year",
        "Converts to year"
      ],
      "answer": 1,
      "explanation": "EXTRACT retrieves a specific date part."
    },
    {
      "question": "How do you add 7 days to a date in PostgreSQL?",
      "options": [
        "date + 7",
        "date + INTERVAL '7 days'",
        "DATE_ADD(date, 7)",
        "Both A and B"
      ],
      "answer": 3,
      "explanation": "PostgreSQL accepts date + integer (days) or date + INTERVAL."
    },
    {
      "question": "What does AGE() return?",
      "options": [
        "Years only",
        "An interval",
        "Days only",
        "A timestamp"
      ],
      "answer": 1,
      "explanation": "AGE() returns the interval between two dates."
    },
    {
      "question": "What does DATE_TRUNC(\\'month\\', ts) do?",
      "options": [
        "Removes month",
        "First day of month",
        "Last day of month",
        "Middle of month"
      ],
      "answer": 1,
      "explanation": "DATE_TRUNC truncates to the specified precision — first day of month."
    },
    {
      "question": "Which function formats dates?",
      "options": [
        "FORMAT_DATE",
        "TO_CHAR",
        "DATE_FORMAT",
        "Both B and C"
      ],
      "answer": 3,
      "explanation": "TO_CHAR (PostgreSQL) and DATE_FORMAT (MySQL) format dates."
    }
  ]
};
