export const revalidate = 60;

export async function GET() {
  // rss feed
  const feed =
    "<rss version='2.0'><channel><title>My RSS Feed</title><link>http://example.com</link><description>This is a sample RSS feed</description></channel></rss>";

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
