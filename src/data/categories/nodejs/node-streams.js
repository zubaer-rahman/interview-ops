export const node_streams = {
  "id": "node-streams",
  "title": "Node.js Streams",
  "difficulty": "advanced",
  "estimatedMinutes": 30,
  "tldr": [
    "Streams are objects that let you read/write data from a source or to a destination in continuous chunks, processing data as it arrives rather than loading it all into memory.",
    "There are four types of streams in Node.js: Readable (source of data), Writable (destination), Duplex (both readable and writable), and Transform (modify data during read/write).",
    "Streams implement the EventEmitter interface and emit events like \"data\", \"end\", \"error\", \"finish\", \"drain\", and \"close\".",
    "Streams handle backpressure automatically - if a Writable stream cannot accept data as fast as a Readable produces it, the Readable is paused until the Writable catches up."
  ],
  "laymanDefinition": "Streams in Node.js are like a water pipe connecting two tanks. Instead of waiting for the source tank to fill completely and then dumping it all at once into the destination tank (which would require a huge holding tank), a pipe sends a continuous small flow of water. As soon as a drop of water enters the pipe, it starts coming out the other end. This means you can start processing data (like a large video file) the moment the first chunk arrives, without waiting for the entire file to be in memory. If the destination tank is getting full, the pipe automatically slows the flow (backpressure) until there is room again.",
  "deepDive": [
    {
      "heading": "Readable Streams",
      "text": "Readable streams produce data that can be read. Two modes: (1) Flowing mode - data is read automatically and emitted via \"data\" events. (2) Paused mode - data must be explicitly read by calling stream.read(). Methods: pipe(), unpipe(), read([size]), setEncoding(), pause(), resume(), isPaused(). Events: \"data\" (new chunk available), \"end\" (no more data), \"close\" (stream closed), \"error\" (error occurred), \"pause\"/\"resume\" (flow changes). Implement a custom readable: extend stream.Readable and implement _read(size) that pushes data via this.push(chunk) or this.push(null) to signal end. Backpressure: if push() returns false, stop pushing until _read() is called again."
    },
    {
      "heading": "Writable Streams",
      "text": "Writable streams consume data written to them. Methods: write(chunk, encoding, callback) - returns false if the internal buffer exceeds highWaterMark (backpressure signal), end(chunk, encoding, callback) - signals no more writes. Events: \"drain\" - emitted when the internal buffer is empty and it is safe to write again, \"finish\" - emitted after end() is called and all data is flushed, \"error\" - error occurred, \"pipe\"/\"unpipe\" - when a readable is piped to/from. Implement a custom writable: extend stream.Writable and implement _write(chunk, encoding, callback). Call the callback when the chunk is fully consumed. The highWaterMark (default 16KB for objectMode: false, 16 for objectMode: true) controls buffer size and backpressure thresholds."
    },
    {
      "heading": "Duplex and Transform Streams",
      "text": "Duplex streams implement both Readable and Writable interfaces. The readable and writable sides are independent - data written to the writable side does NOT automatically appear on the readable side. Example: net.Socket. Transform streams are a special type of Duplex where the output (readable side) is computed from the input (writable side). Implement _transform(chunk, encoding, callback) - process and push transformed data. Implement _flush(callback) - called before \"end\" to push any remaining data. Common transform streams: zlib.createGzip (compression), crypto.createCipheriv (encryption). The _transform function is called for each chunk and must call callback() after processing. Multiple chunks can be pushed per _transform call, or no chunks (passthrough)."
    },
    {
      "heading": "Backpressure and HighWaterMark",
      "text": "Backpressure is the mechanism that prevents the writable stream buffer from growing unbounded when the consumer is slower than the producer. The highWaterMark (default 16KB) is the threshold. When the internal buffer exceeds highWaterMark, stream.write() returns false. The readable stream should pause until it receives a \"drain\" event (indicating the writable's buffer has been drained below highWaterMark). In flowing mode, the \"data\" event stops firing when pause() is called. The pipe() method handles backpressure automatically - this is why pipe() is recommended over manual event handling. ObjectMode streams have a highWaterMark of 16 objects by default. The buffer length is accessible via stream.writableLength / stream.readableLength. Backpressure is critical for memory management - without it, streaming a 10GB file would require 10GB of RAM."
    },
    {
      "heading": "Stream Best Practices and Common Patterns",
      "text": "(1) Always use pipe() for connecting streams unless you need custom logic - it handles backpressure, errors, and end-of-stream automatically. (2) Use pipeline() from stream/promises (Node 15+) for automatic stream cleanup and error propagation: pipeline( readable, transform, writable, callback ). (3) Always handle \"error\" events - unhandled stream errors crash the process. (4) Use finished() from stream/util to detect stream completion: finished(stream, callback). (5) For large files, use fs.createReadStream() and fs.createWriteStream() instead of readFile/writeFile. (6) Set encoding on Readable streams for string data: readable.setEncoding(\"utf8\"). (7) Use Transform streams for data processing (compression, encryption, parsing). (8) Avoid mixing flowing and paused modes on the same stream. (9) Handle backpressure manually only when pipe() is insufficient (e.g., rate limiting). (10) Use highWaterMark tuning for performance - larger values improve throughput but increase memory usage."
    }
  ],
  "interviewAnswer": "Node.js streams process data chunk-by-chunk rather than loading everything into memory. Four types: Readable (data source - \"data\", \"end\" events), Writable (data destination - \"drain\", \"finish\" events), Duplex (both, independent), Transform (Duplex where output derives from input). Streams handle backpressure via the highWaterMark (16KB default) - when the write buffer exceeds it, write() returns false, signaling the producer to pause. pipe() handles backpressure automatically. Custom streams extend stream.Readable (implement _read()), stream.Writable (implement _write()), or stream.Transform (implement _transform()). Use pipeline() (Node 15+) for proper error handling. Key patterns: fs.createReadStream for large files, zlib streams for compression, Transform for parsing. Always handle \"error\" events on streams.",
  "interviewQuestions": [
    {
      "question": "What are the four types of streams in Node.js?",
      "answer": "Readable (data source), Writable (data destination), Duplex (both, independent I/O), Transform (Duplex where output is computed from input). Readable examples: fs.createReadStream, http.IncomingMessage. Writable: fs.createWriteStream, http.ServerResponse, process.stdout."
    },
    {
      "question": "What is backpressure and why is it important?",
      "answer": "Backpressure occurs when a Writable stream cannot process data as fast as a Readable produces it. Without backpressure, the internal buffer grows unbounded, consuming all available memory. pipe() handles it automatically by pausing the Readable when write() returns false and resuming on \"drain\"."
    },
    {
      "question": "What is the default highWaterMark?",
      "answer": "16KB (16384 bytes) for binary streams, 16 objects for objectMode streams. It is configurable in stream options. Increasing highWaterMark improves throughput but uses more memory."
    },
    {
      "question": "What is the difference between flowing and paused mode in Readable streams?",
      "answer": "Flowing mode: data is read automatically and emitted via \"data\" events. Paused mode: data must be explicitly read by calling stream.read(). pipe() sets flowing mode. Adding a \"data\" listener switches to flowing mode. Removing it switches to paused."
    },
    {
      "question": "How do you create a custom Transform stream?",
      "answer": "Extend stream.Transform and implement _transform(chunk, encoding, callback). Call this.push(data) to output transformed data. Call callback() when done with the chunk. Optionally implement _flush(callback) to push remaining data before end."
    },
    {
      "question": "What does stream.write() returning false mean?",
      "answer": "It means the internal buffer has exceeded highWaterMark. The writable stream is asking the producer to stop writing. The producer should pause until a \"drain\" event is emitted, indicating the buffer has been emptied below highWaterMark."
    },
    {
      "question": "How does pipeline() differ from pipe()?",
      "answer": "pipeline() (stream.promises pipeline or stream.pipeline) provides: (1) Automatic cleanup - destroys all streams on error. (2) Error propagation - errors from any stream in the pipeline are forwarded to the callback. (3) Proper backpressure handling across multiple streams. pipe() does not destroy streams on error and does not propagate errors automatically."
    },
    {
      "question": "What is the purpose of the finished() function?",
      "answer": "finished(stream, callback) from stream/promises detects when a stream is no longer readable/writable/transferable/error. It handles edge cases that the \"end\" and \"finish\" events miss, such as premature destruction or errors."
    },
    {
      "question": "How do you handle errors in streams?",
      "answer": "Attach \"error\" event listeners to each stream. With pipe(), errors are not propagated - each stream needs its own error handler. With pipeline(), errors are automatically forwarded to the callback. Unhandled stream errors crash the process."
    },
    {
      "question": "What is objectMode in streams?",
      "answer": "objectMode allows streams to work with JavaScript objects instead of Buffer/String chunks. HighWaterMark defaults to 16 objects. Used for parsing CSV/JSON lines, database query results, or any structured data stream. Without objectMode, streams only handle Buffer or string data."
    }
  ],
  "diagramSvg": "<svg viewBox=\"0 0 720 280\" xmlns=\"http://www.w3.org/2000/svg\" style=\"max-width:100%;height:auto;font-family:sans-serif\"><defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0,0 L10,5 L0,10\" fill=\"#666\" opacity=\"0.7\"/></marker></defs><rect x=\"0\" y=\"0\" width=\"720\" height=\"280\" rx=\"10\" fill=\"#f8f9fa\" stroke=\"#dee2e6\" stroke-width=\"1\"/><text x=\"360\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#333\">Node.js Stream Types and Flow</text><rect x=\"30\" y=\"55\" width=\"160\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#6c9fff\" stroke-width=\"1.5\"/><text x=\"110\" y=\"71\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Readable</text><text x=\"110\" y=\"94\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Data source</text><line x1=\"110\" y1=\"100\" x2=\"110\" y2=\"120\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"30\" y=\"120\" width=\"160\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/><text x=\"110\" y=\"136\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Transform</text><text x=\"110\" y=\"159\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Processing (gzip, encrypt)</text><line x1=\"110\" y1=\"165\" x2=\"110\" y2=\"185\" stroke=\"#666\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/><rect x=\"30\" y=\"185\" width=\"160\" height=\"45\" rx=\"5\" fill=\"#1a1d28\" stroke=\"#34d399\" stroke-width=\"1.5\"/><text x=\"110\" y=\"201\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\" fill=\"#fff\">Writable</text><text x=\"110\" y=\"224\" text-anchor=\"middle\" font-size=\"9\" fill=\"#ddd\">Data destination</text><text x=\"210\" y=\"78\" font-size=\"10\" fill=\"#9aa0b0\" text-anchor=\"start\">fs.createReadStream, http req</text><text x=\"210\" y=\"143\" font-size=\"10\" fill=\"#9aa0b0\" text-anchor=\"start\">zlib.createGzip, crypto cipher</text><text x=\"210\" y=\"208\" font-size=\"10\" fill=\"#9aa0b0\" text-anchor=\"start\">fs.createWriteStream, http res</text><text x=\"260\" y=\"255\" font-size=\"10\" fill=\"#f87171\" text-anchor=\"start\">Backpressure: write() returns false, readable paus</text><text x=\"260\" y=\"268\" font-size=\"10\" fill=\"#f87171\" text-anchor=\"start\">es until \"drain\"</text></svg>",
  "codeExamples": [
    {
      "title": "Basic Readable/Writable Stream with pipe",
      "useCase": "Copy a file using streams",
      "code": "var fs = require(\"fs\");\n\n// Create a readable stream from source file\nvar readable = fs.createReadStream(\"input.txt\", { highWaterMark: 4096 });\n\n// Create a writable stream to destination file\nvar writable = fs.createWriteStream(\"output.txt\");\n\n// Pipe handles backpressure automatically\nreadable.pipe(writable);\n\n// Listen for completion\nwritable.on(\"finish\", function() {\n  console.log(\"File copied successfully\");\n});\n\nreadable.on(\"error\", function(err) {\n  console.error(\"Read error:\", err.message);\n});\n\nwritable.on(\"error\", function(err) {\n  console.error(\"Write error:\", err.message);\n});",
      "description": "pipe() connects a Readable to a Writable, handling backpressure automatically. The highWaterMark of 4096 bytes controls chunk size. pipe() does NOT destroy streams on error - always attach error handlers to both ends."
    },
    {
      "title": "Custom Transform Stream: Uppercase Converter",
      "useCase": "Create a transform that converts text to uppercase",
      "code": "var Transform = require(\"stream\").Transform;\n\nfunction UpperCaseTransform() {\n  Transform.call(this, { encoding: \"utf8\" });\n}\n\nUpperCaseTransform.prototype = Object.create(Transform.prototype);\n\nUpperCaseTransform.prototype._transform = function(chunk, encoding, callback) {\n  try {\n    var upper = chunk.toString().toUpperCase();\n    this.push(upper);\n    callback();\n  } catch (err) {\n    callback(err);\n  }\n};\n\nvar upper = new UpperCaseTransform();\nprocess.stdin.pipe(upper).pipe(process.stdout);\n\n// Usage: echo \"hello world\" | node upper.js\n// Output: HELLO WORLD",
      "description": "Transform streams modify data in transit. _transform() receives each chunk, processes it, pushes the result, and calls callback(). This uppercase converter extends Transform and implements _transform() to convert each chunk to uppercase."
    },
    {
      "title": "Backpressure Handling Without pipe()",
      "useCase": "Manual backpressure control",
      "code": "var fs = require(\"fs\");\n\nvar readable = fs.createReadStream(\"large-file.txt\");\nvar writable = fs.createWriteStream(\"output.txt\");\n\nfunction writeData() {\n  var chunk;\n  while (null !== (chunk = readable.read())) {\n    var canContinue = writable.write(chunk);\n    if (!canContinue) {\n      console.log(\"Backpressure: pausing read\");\n      readable.pause();\n      writable.once(\"drain\", function() {\n        console.log(\"Buffer drained: resuming read\");\n        writeData();\n      });\n      return;\n    }\n  }\n}\n\nreadable.on(\"readable\", writeData);\n\nwritable.on(\"finish\", function() {\n  console.log(\"Write complete\");\n});",
      "description": "Manual backpressure: read() returns null when buffer is empty. write() returns false when highWaterMark is exceeded, then pause() the readable until \"drain\" fires. This is what pipe() does internally."
    },
    {
      "title": "Streaming HTTP Response Processing",
      "useCase": "Process a large HTTP response chunk by chunk",
      "code": "var http = require(\"http\");\n\nhttp.get(\"http://example.com/large-file\", function(response) {\n  var chunks = [];\n  var totalSize = 0;\n\n  response.on(\"data\", function(chunk) {\n    chunks.push(chunk);\n    totalSize += chunk.length;\n    console.log(\"Received chunk:\", chunk.length, \"bytes\");\n  });\n\n  response.on(\"end\", function() {\n    var buffer = Buffer.concat(chunks);\n    console.log(\"Total received:\", totalSize, \"bytes\");\n    console.log(\"Complete body:\", buffer.toString());\n  });\n\n  response.on(\"error\", function(err) {\n    console.error(\"Stream error:\", err.message);\n  });\n\n  // Pause if we need to slow down consumption\n  response.pause();\n  setTimeout(function() { response.resume(); }, 1000);\n}).on(\"error\", function(err) {\n  console.error(\"Request error:\", err.message);\n});",
      "description": "HTTP responses are Readable streams. The \"data\" event fires for each chunk as it arrives. pause() and resume() control backpressure. For large downloads, pipe directly to a file write stream instead of accumulating in memory."
    },
    {
      "title": "Stream Pipeline with Error Propagation",
      "useCase": "Use pipeline() for proper error handling across multiple streams",
      "code": "var fs = require(\"fs\");\nvar zlib = require(\"zlib\");\nvar pipeline = require(\"stream\").pipeline;\n\n// Read a file, compress it, and write to new file\nvar source = fs.createReadStream(\"input.txt\");\nvar gzip = zlib.createGzip();\nvar destination = fs.createWriteStream(\"input.txt.gz\");\n\npipeline(source, gzip, destination, function(err) {\n  if (err) {\n    console.error(\"Pipeline failed:\", err.message);\n    return;\n  }\n  console.log(\"File compressed successfully\");\n});\n\n// pipeline() destroys all streams on error automatically\n// Unlike pipe(), errors propagate to the callback\n// All streams are properly cleaned up even on failure",
      "description": "pipeline() (Node 15+) provides proper error propagation and cleanup across all streams in the chain. If any stream errors, all streams are destroyed and the callback receives the error. This is the recommended approach over chained pipe() calls."
    }
  ],
  "mcqQuestions": [
    {
      "question": "Which stream type is both readable and writable with independent I/O?",
      "options": [
        "Duplex",
        "Transform",
        "Readable",
        "Writable"
      ],
      "answer": 0,
      "explanation": "Duplex streams implement both Readable and Writable independently (e.g., net.Socket). Transform is a special Duplex where output derives from input."
    },
    {
      "question": "What does stream.write() returning false indicate?",
      "options": [
        "Data was written successfully",
        "Backpressure - buffer exceeds highWaterMark",
        "Stream has ended",
        "Invalid chunk type"
      ],
      "answer": 1,
      "explanation": "write() returns false when the internal buffer exceeds highWaterMark, signaling the producer should pause until \"drain\" fires."
    },
    {
      "question": "What is the default highWaterMark for binary streams?",
      "options": [
        "1024 bytes",
        "4096 bytes",
        "8192 bytes",
        "16384 bytes"
      ],
      "answer": 3,
      "explanation": "Default is 16384 bytes (16KB). For objectMode, it defaults to 16 objects."
    },
    {
      "question": "Which method handles backpressure automatically?",
      "options": [
        "stream.read()",
        "stream.write()",
        "stream.pipe()",
        "stream.end()"
      ],
      "answer": 2,
      "explanation": "pipe() handles backpressure automatically by pausing the readable when write() returns false and resuming on \"drain\" events."
    },
    {
      "question": "What event indicates a writable stream is ready for more data after backpressure?",
      "options": [
        "\"ready\"",
        "\"drain\"",
        "\"flush\"",
        "\"resume\""
      ],
      "answer": 1,
      "explanation": "The \"drain\" event fires when the internal buffer has been emptied below highWaterMark, signaling it is safe to write again."
    },
    {
      "question": "How does pipeline() improve on pipe()?",
      "options": [
        "It is faster",
        "It provides automatic cleanup and error propagation",
        "It increases highWaterMark",
        "It supports objectMode"
      ],
      "answer": 1,
      "explanation": "pipeline() destroys all streams on error and propagates errors to the callback. pipe() does not destroy streams on error and does not propagate errors."
    }
  ]
};
