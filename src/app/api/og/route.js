import { ImageResponse } from 'next/og';

// Define a default title in case none is provided
const defaultTitle = 'Blog; Jermaine Antwi';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? defaultTitle;
  const imageUrl = `http://localhost:3000/images/projects/blog%20SEO.jpg`;
  const fontUrl = 'http://localhost:3000/fonts/NewKansasSemiBold.ttf'; 

  try {
    const fontResponse = await fetch(fontUrl);
    if (!fontResponse.ok) {
      throw new Error(`Failed to fetch font file: ${fontResponse.status} ${fontResponse.statusText}`);
    }
    const fontData = await fontResponse.arrayBuffer();

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 80,
            color: 'white',
            width: '100%',
            height: '100%',
            padding: '50px 80px',
            lineHeight: '85px',
            textAlign: 'center',
            justifyContent: 'center',
            fontFamily: 'HeadingFont',
            alignItems: 'center',
            display: 'flex',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {title}
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          { data: fontData, name: 'HeadingFont', weight: 700 },
        ],
      },
    );
  } catch (error) {
    console.error('Error in GET function:', error);
    throw error;
  }
}