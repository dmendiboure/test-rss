export const revalidate = 60;

export async function GET() {
  //   const data = await fetch("https://api.vercel.app/blog");
  //   const posts = await data.json();

  return new Response(
    JSON.stringify({
      message: "Hello from the posts route!",
      // posts: posts,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
