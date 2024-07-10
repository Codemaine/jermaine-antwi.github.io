import { readdir } from 'fs/promises'; // Import readdir from fs/promises

export async function GET(req) {
  try {
    const slugs = await readdir('./src/app/writing/(blogs)', { withFileTypes: true }); // Corrected path and added await
    console.log(slugs);

    // Filter to get only directories
    const directories = slugs.filter((dirent) => dirent.isDirectory());

    // Retrieve metadata from MDX files
    const posts = await Promise.all(
      directories.map(async (dirent) => {
        const name = dirent.name;
        const { meta } = await import(`@/app/writing/(blogs)/${name}/page.mdx`); // Corrected path and added await
        console.log(name);
        console.log(meta);
        return { slug: name, ...meta };
      })
    );

    // Sort posts from newest to oldest
    posts.sort((a, b) => +new Date(b.dateWritten) - +new Date(a.dateWritten));

    console.log(posts);
    // Return a Response object with caching headers
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate=59', // Cache for 1 hour and revalidate
      },
    });
  } catch (error) {
    console.error('Failed to load blogs:', error); // Log the error for debugging
    return new Response(JSON.stringify({ error: 'Failed to load blogs' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}