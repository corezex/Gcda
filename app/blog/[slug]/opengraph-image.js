import { ImageResponse } from 'next/og';
import { getBlogMetaBySlug } from '@/data/blogMeta';

export const runtime = 'edge';
export const alt = 'GCDA Career Guidance Blog';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Generate per-post OG image for better CTR (Recommendation #4)
export default async function Image({ params }) {
  const post = getBlogMetaBySlug(params.slug);

  const title = post?.title || 'GCDA Career Guidance Blog';
  const category = post?.category || 'Career Guidance';
  const description = post?.description?.slice(0, 120) || 'Practical, India-specific career guidance for students, parents, and professionals.';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #c45b40 0%, #2d1b1a 100%)',
          color: 'white',
          padding: '60px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              opacity: 0.9,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ background: 'white', color: '#c45b40', padding: '6px 14px', borderRadius: '6px', fontWeight: 800 }}>GCDA</span>
            <span>{category}</span>
          </div>
          <div style={{ fontSize: 48, fontWeight: 800, lineHeight: '1.1', maxWidth: '900px' }}>{title}</div>
          <div style={{ fontSize: 20, opacity: 0.85, maxWidth: '800px', lineHeight: '1.4' }}>{description}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 18, opacity: 0.8 }}>
          <span>gcdassociation.org • Career Counselling Across India • 438 Cities</span>
          <span>Since 2013 • 50K+ Sessions</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
