const e={id:"sd-design-twitter",title:"Design Twitter Feed",difficulty:"advanced",estimatedMinutes:30,tldr:["Design a social media news feed like Twitter/Facebook where users post tweets and see a feed of tweets from people they follow.","Core features: post tweet, view timeline (home feed), follow/unfollow user, like/retweet/reply, media (images/video), trending topics, search.","Key metrics: 500M DAU, 500M tweets/day (~6000/sec peak), each tweet ~1KB. Each user follows ~200 accounts. Fan-out read (pull) vs fan-out write (push) for feed generation.","Two feed models: Home Feed (tweets from followed users) — needs real-time updates. Trending Feed (popular topics) — batch computed. Timeline is the core challenge.","Two approaches: PULL (fan-out on read): generate feed on demand by merging followed users' timelines. PUSH (fan-out on write): pre-compute feed for each user when a tweet is posted."],laymanDefinition:"Twitter feed is like a personalized newspaper. PUSH model = the newspaper is printed and delivered to your door every morning (pre-computed). You open it and read immediately. PULL model = you go to the newsstand and pick from available papers when you want to read. Twitter uses PUSH for regular users (pre-computed feed) and PULL for celebrities (million followers would crush PUSH).",deepDive:[{heading:"Fan-Out on Write (Push)",text:"When user tweets: insert tweet into EACH follower\\'s feed timeline. Read: just fetch timeline from cache. Pro: fast reads (O(1)). Con: expensive writes for celebrities (millions of writes per tweet). Twitter: PUSH for users with < 10K followers. Hybrid: PUSH for regular users, PULL for celebrities."},{heading:"Fan-Out on Read (Pull)",text:"When user views feed: fetch recent tweets from all followed users, merge, sort, return. Pro: no write amplification. Con: slow reads (merge K lists). K = number of followed users. Good for: celebrities (few writes, many readers), infrequent readers. Hybrid approach: pre-compute for active followers on tweet."},{heading:"Timeline Storage and Caching",text:"Timeline: Redis sorted sets (feed:userId, score = tweet timestamp). Pre-computed feed stored for 24h. Tweets themselves in DB/cache. Cache: Redis cluster for hot feeds (active users first page). DB: Cassandra/PostgreSQL for tweet storage. Pagination: cursor-based (tweet ID/timestamp) not offset-based."},{heading:"Trending Topics",text:"Batch processing: MapReduce/Spark every 5 minutes. Count hashtags in recent tweets. Normalize by baseline popularity. Demote topics that have been trending too long. Geo-specific trends: separate per region. Real-time: Storm/Flink for streaming trend detection."}],interviewAnswer:"Use hybrid approach: PUSH for regular users (most followers < 10K), PULL for celebrities (millions of followers). Pre-compute feed in Redis sorted sets. Cache aggressively (feed for active users). Use async processing for PUSH (tweet → queue → fan-out workers). Handle celebrity tweets differently (pull on demand).",interviewQuestions:[{question:"What are the two feed generation models?",answer:"PUSH (fan-out on write — pre-compute) and PULL (fan-out on read — on demand)."},{question:"Why hybrid approach?",answer:"PUSH for regular users (fast reads). PULL for celebrities (avoid millions of writes per tweet)."},{question:"How does Twitter feed work?",answer:"Pre-computed timeline in Redis. Celebrities use PULL. Real-time tweets mixed in."},{question:"How to store timelines?",answer:"Redis sorted sets (score = timestamp). TTL = 24h. Pre-computed for active users."},{question:"How to handle tweet ingestion?",answer:"Load balancer → Tweet service → Kafka → Fan-out service + Timeline service + Search index."},{question:"How to paginate feed?",answer:"Cursor-based (tweet_id or timestamp). Offset-based pagination is inefficient for real-time feeds."},{question:"How to handle media?",answer:"Upload to S3/CDN. Tweet contains media URL + thumbnail. Separate media service."},{question:"How to compute trending topics?",answer:"Batch: Spark every 5 min. Count hashtags, normalize, demote stale trends."},{question:"How to rank feed?",answer:"Reverse chronological (simplest). ML-based ranking: engagement score, recency, relevance."},{question:"How to handle deletes/edits?",answer:"Delete/update from all timelines. Expensive — use tombstone records or soft delete."}],diagramSvg:'<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;font-family:sans-serif"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="#666" opacity="0.7"/></marker></defs><rect x="0" y="0" width="500" height="300" rx="10" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/><text x="250" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Design Twitter Feed</text><rect x="10" y="45" width="100" height="32" rx="5" fill="#0070f3" stroke="#0070f3" stroke-width="1.5"/><text x="60" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">User</text><text x="60" y="71" text-anchor="middle" font-size="9" fill="#ddd">Post tweet</text><line x1="110" y1="61" x2="150" y2="61" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="150" y="45" width="100" height="32" rx="5" fill="#28a745" stroke="#28a745" stroke-width="1.5"/><text x="200" y="61" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">API Gateway</text><text x="200" y="71" text-anchor="middle" font-size="9" fill="#ddd">Validate</text><line x1="200" y1="77" x2="210" y2="83" stroke="#666" stroke-width="1.5" marker-end="url(#arrow)"/><rect x="10" y="85" width="100" height="32" rx="5" fill="#ffc107" stroke="#ffc107" stroke-width="1.5"/><text x="60" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Tweet Service</text><text x="60" y="111" text-anchor="middle" font-size="9" fill="#ddd">Store tweet</text><rect x="160" y="85" width="100" height="32" rx="5" fill="#dc3545" stroke="#dc3545" stroke-width="1.5"/><text x="210" y="101" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Fan-out Worker</text><text x="210" y="111" text-anchor="middle" font-size="9" fill="#ddd">Push to followers</text><rect x="10" y="125" width="100" height="32" rx="5" fill="#e83e8c" stroke="#e83e8c" stroke-width="1.5"/><text x="60" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">DB + Cache</text><text x="60" y="151" text-anchor="middle" font-size="9" fill="#ddd">Tweets</text><rect x="160" y="125" width="100" height="32" rx="5" fill="#6610f2" stroke="#6610f2" stroke-width="1.5"/><text x="210" y="141" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Timeline Cache</text><text x="210" y="151" text-anchor="middle" font-size="9" fill="#ddd">Redis sorted set</text><rect x="10" y="160" width="100" height="32" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="60" y="176" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Search Index</text><text x="60" y="186" text-anchor="middle" font-size="9" fill="#ddd">Elasticsearch</text><rect x="10" y="178" width="480" height="52" rx="5" fill="#17a2b8" stroke="#17a2b8" stroke-width="1.5"/><text x="250" y="209" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Twitter Feed</text><text x="250" y="203" font-size="9" fill="#666" text-anchor="middle">Hybrid PUSH/PULL. Redis sorted sets for timeline. Async fan-out. Trending via Spark b</text><text x="250" y="215" font-size="9" fill="#666" text-anchor="middle">atch.</text><text x="240" y="255" font-size="9" fill="#666" text-anchor="middle">Twitter Feed: Hybrid PUSH/PULL. Redis timeline cac</text><text x="240" y="267" font-size="9" fill="#666" text-anchor="middle">he, async fan-out, trending batch processing.</text></svg>',codeExamples:[{title:"Fan-Out on Write Worker",useCase:"Push tweet to followers.",code:`// Fan-out service — called after tweet is stored
async function fanOutTweet(tweet, userId) {
  // Get followers (from Graph DB / Redis cache)
  const followers = await getFollowers(userId);
  const followerCount = followers.length;
  // If celebrity → skip fan-out (use pull model)
  if (followerCount > 10000) {
    await redis.set("celebrity_tweet:" + tweet.id, JSON.stringify(tweet), "EX", 86400);
    return; // followers will pull on demand
  }
  // Fan-out: insert tweet into each follower's timeline
  const pipeline = redis.pipeline();
  // Limit to first 1000 active followers for speed
  const activeFollowers = await getActiveFollowers(userId, 1000);
  for (const followerId of activeFollowers) {
    pipeline.zadd("feed:" + followerId, tweet.timestamp, tweet.id);
    pipeline.zremrangebyrank("feed:" + followerId, 0, -501);
  }
  await pipeline.exec();
  // Push remaining via async queue
  if (activeFollowers.length < followerCount) {
    await queue.send("fanout", { tweetId: tweet.id, followers: followers.slice(1000) });
  }
}`,description:"Fan-out worker — push tweet to active followers, queue rest."},{title:"Timeline Generation (Read)",useCase:"Build timeline on request.",code:`async function getTimeline(userId, cursor, limit = 20) {
  const timelineKey = "feed:" + userId;
  // Check pre-computed feed
  let tweetIds = await redis.zrevrangebyscore(timelineKey, "+inf", cursor || "+inf", "LIMIT", 0, limit);
  const tweets = [];
  // If not enough from pre-computed, fetch celebrity tweets
  if (tweetIds.length < limit) {
    const celebIds = await getFollowedCelebrities(userId);
    for (const celebId of celebIds) {
      const celebTweets = await redis.zrevrangebyscore("celeb_feed:" + celebId, "+inf", cursor || "+inf", "LIMIT", 0, limit - tweetIds.length);
      tweetIds = tweetIds.concat(celebTweets);
    }
    // Merge and sort all
    tweetIds.sort((a, b) => b - a);
    tweetIds = tweetIds.slice(0, limit);
  }
  // Fetch full tweet data from cache/DB
  for (const id of tweetIds) {
    const tweet = await getTweet(id);
    if (tweet) tweets.push(tweet);
  }
  return { tweets, nextCursor: tweetIds[tweetIds.length - 1] };
}`,description:"Timeline generation — pre-computed feed + celebrity pull."},{title:"Tweet Storage (Cassandra)",useCase:"High-write schema.",code:`CREATE TABLE tweets (
  tweet_id TIMEUUID,
  user_id TEXT,
  content TEXT,
  media_ids LIST<TEXT>,
  hashtags SET<TEXT>,
  mentions SET<TEXT>,
  reply_to TEXT,
  retweet_of TEXT,
  created_at TIMESTAMP,
  engagement COUNTER,
  PRIMARY KEY (user_id, tweet_id)
) WITH CLUSTERING ORDER BY (tweet_id DESC);
-- Index for hashtag search:
CREATE MATERIALIZED VIEW tweets_by_hashtag AS
  SELECT * FROM tweets WHERE hashtags IS NOT NULL AND tweet_id IS NOT NULL
  PRIMARY KEY (hashtag, tweet_id);`,description:"Cassandra tweet storage schema with materialized view for hashtags."},{title:"Trending Topics Computation",useCase:"Batch processing.",code:`// Spark job — runs every 5 minutes
val tweets = spark.read.format("cassandra").options(Map("table" -> "tweets", "keyspace" -> "twitter")).load()
  .filter($"created_at" > (System.currentTimeMillis() / 1000) - 3600) // last 1 hour
val hashtagCounts = tweets
  .select(explode($"hashtags").as("hashtag"), $"created_at")
  .groupBy($"hashtag", window($"created_at", "5 minutes"))
  .count()
// Normalize by baseline (average count for this hashtag)
val trending = hashtagCounts
  .join(baseline, "hashtag")
  .withColumn("score", $"count" / ($"baseline" + 1))
  .filter($"score" > 1.5)
  .orderBy($"score".desc)
  .limit(20)
// Save trending topics to Redis
trending.foreach { row =>
  redis.hset("trending", row.hashtag -> row.score.toString)
}`,description:"Trending topics computation with Spark — normalized by baseline."}],mcqQuestions:[{question:"PUSH model (fan-out on write) benefits?",options:["Fast writes","Fast reads","Fewer resources","Simpler code"],answer:1,explanation:"Reads are O(1) — pre-computed feed."},{question:"PULL model better for?",options:["Regular users","Celebrities","All users","Group chats"],answer:1,explanation:"Celebrities — avoids millions of writes per tweet."},{question:"Twitter uses which hybrid approach?",options:["PUSH for all","PUSH for regular, PULL for celebrities","PULL for all","Neither"],answer:1,explanation:"PUSH for regular users, PULL for celebrities."},{question:"How to store timeline?",options:["MySQL","Redis sorted set","S3","Local file"],answer:1,explanation:"Redis sorted set with timestamp as score."},{question:"Trending topics computed how?",options:["Real-time every request","Batch (Spark every 5 min)","On tweet creation","Manual"],answer:1,explanation:"Batch processing every 5 minutes."},{question:"Fan-out writes per celebrity tweet?",options:["Few","Millions","Zero","Hundreds"],answer:1,explanation:"Millions of writes if fan-out for celebrities — avoided via PULL."},{question:"Design Twitter Feed — What reduces errors most?",options:["Automation","Manual processes","Rushing","Bypassing reviews"],answer:0,explanation:"Automation consistently eliminates human errors."},{question:"Design Twitter Feed — What improves speed?",options:["Parallel execution and caching","Serial execution","No optimization","Manual steps"],answer:0,explanation:"Parallel execution and caching significantly improve speed."},{question:"Design Twitter Feed — What is key for monitoring?",options:["Metrics dashboards and alerts","No monitoring","Only error logs","Manual checks"],answer:0,explanation:"Metrics dashboards and alerts provide actionable insights."},{question:"Design Twitter Feed — What ensures quality?",options:["Automated testing in pipeline","No testing","Only manual QA","Skipping code review"],answer:0,explanation:"Automated testing integrated into the pipeline ensures consistent quality."}]};export{e as sd_design_twitter};
