-- =====================================================
-- Tanyigbe Blog Setup - Run this in Supabase SQL Editor
-- =====================================================

-- 1. Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL DEFAULT 'Tanyigbe Team',
  featured_image text,
  category text NOT NULL DEFAULT 'community',
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  view_count integer DEFAULT 0
);

-- 2. Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- 3. Create RLS policies
DROP POLICY IF EXISTS "Anyone can view published blog posts" ON blog_posts;
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

-- 4. Create indexes for performance
CREATE INDEX IF NOT EXISTS blog_posts_published_at_idx ON blog_posts(published_at DESC) WHERE published = true;
CREATE INDEX IF NOT EXISTS blog_posts_category_idx ON blog_posts(category) WHERE published = true;
CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON blog_posts(slug);

-- =====================================================
-- 5. Insert 8 Sample Blog Posts
-- =====================================================

-- History Posts (2)
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, published, published_at, view_count)
VALUES
(
  'The Story of Tanyigbe''s Migration and Settlement',
  'story-of-tanyigbe-migration-and-settlement',
  'Discover how our ancestors journeyed from Notsie to establish Tanyigbe, and the rich history that shaped our community.',
  'The history of Tanyigbe is a testament to the resilience and vision of our ancestors. Our journey began in the ancient city of Notsie, where our forefathers lived under the rule of a tyrannical king.

Facing oppression and hardship, the people of Notsie made the courageous decision to escape and seek a new home where they could live in freedom and dignity. The escape from Notsie was carefully planned, with our ancestors walking backwards to confuse their pursuers about the direction of their flight.

After a long and arduous journey, our ancestors discovered the fertile lands that would become Tanyigbe. The name "Tanyigbe" itself reflects our heritage and identity. Here, they established a community built on the values of unity, hard work, and respect for tradition.

The early settlers faced numerous challenges as they cleared the land and established farms. Through cooperation and determination, they built the foundations of what has become our thriving community today.

Our migration story is not just about movement from one place to another—it represents the eternal human quest for freedom, dignity, and a better life. This legacy continues to inspire us as we work together to build a prosperous future for Tanyigbe.',
  'Togbe Kodi Adiko VI',
  'History',
  true,
  NOW() - INTERVAL '30 days',
  245
),
(
  'The Division System: Understanding Tanyigbe''s Four Clans',
  'tanyigbe-division-system-four-clans',
  'Learn about the unique structure of Tanyigbe''s four divisions - Anyigbe, Atidze, Dzafe, and Etoe - and how they work together.',
  'Tanyigbe''s social and administrative structure is built upon four main divisions, each with its own distinct identity, leadership, and contribution to the community''s governance.

The four divisions are:

**Tanyigbe Anyigbe** - The first division represents the foundational settlers and plays a crucial role in maintaining our traditional customs and practices.

**Tanyigbe Atidze** - Known for their agricultural expertise, this division has been instrumental in developing our farming practices and economic sustainability.

**Tanyigbe Dzafe** - This division has a rich tradition of craftsmanship and trade, contributing to the community''s economic diversity.

**Tanyigbe Etoe** - The fourth division brings unique cultural practices and has been central to preserving our oral traditions and folklore.

Each division has its own leadership structure while maintaining unity under the paramount chief. This system ensures balanced representation and shared responsibility in community decision-making.

During major festivals and ceremonies, all four divisions come together in a powerful display of unity and cultural pride. The division system has proven resilient over centuries, adapting to modern governance needs while preserving traditional values.

This unique structure is one of Tanyigbe''s greatest strengths, ensuring that diverse voices are heard and that leadership responsibilities are shared across the community.',
  'Elder Kwame Mensah',
  'History',
  true,
  NOW() - INTERVAL '20 days',
  189
)
ON CONFLICT (slug) DO NOTHING;

-- Culture Posts (2)
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, published, published_at, view_count)
VALUES
(
  'The Tanyigbe Festival: A Celebration of Heritage and Unity',
  'tanyigbe-festival-celebration-heritage-unity',
  'Experience the vibrant colors, rhythms, and traditions of our annual Tanyigbe Festival, where culture comes alive.',
  'Every year, Tanyigbe comes alive with the colors, sounds, and energy of our traditional festival. This celebration is more than just an event—it''s a reaffirmation of our identity and a bridge between past and present.

The festival typically begins with purification rites performed by our traditional leaders, cleansing the community and seeking blessings from our ancestors for the year ahead. These sacred ceremonies set the spiritual tone for the celebrations to follow.

**Traditional Performances**

The festival showcases the rich cultural heritage of Tanyigbe through various performances:
- Traditional drumming and dancing that has been passed down through generations
- Display of ancestral artifacts and regalia
- Cultural exhibitions showing traditional crafts, farming tools, and household items
- Storytelling sessions where elders share the oral history of our people

**Community Participation**

What makes the Tanyigbe Festival special is the participation of all community members:
- Youth groups perform contemporary interpretations of traditional dances
- Women''s groups prepare traditional dishes and showcase culinary heritage
- Artisans display their crafts and demonstrate traditional skills
- The diaspora returns home, strengthening bonds and sharing experiences

**Unity in Diversity**

The festival brings together all four divisions of Tanyigbe in a spectacular display of unity. Each division contributes its unique traditions, creating a rich tapestry of cultural expression.

For the younger generation, the festival is an opportunity to learn about their heritage in an engaging, celebratory atmosphere. For elders, it''s a chance to pass on knowledge and see traditions continue.

The Tanyigbe Festival stands as a powerful reminder that while we embrace progress and development, we never forget where we came from.',
  'Ama Dzigbordi',
  'Culture',
  true,
  NOW() - INTERVAL '15 days',
  312
),
(
  'Preserving Our Language: The Importance of Ewe in Tanyigbe',
  'preserving-ewe-language-in-tanyigbe',
  'Why maintaining our Ewe language is crucial for preserving our cultural identity and connecting generations.',
  'Language is the soul of culture. As Tanyigbe continues to develop and engage with the modern world, preserving our Ewe language remains a vital priority for maintaining our cultural identity.

**The Role of Language in Identity**

The Ewe language carries within it the wisdom, values, and worldview of our ancestors. Proverbs, songs, and traditional narratives lose much of their meaning and power when translated. Our language is not just a communication tool—it''s a repository of cultural knowledge.

**Challenges We Face**

Like many traditional communities, Tanyigbe faces challenges in language preservation:
- Young people increasingly communicate in English or other languages
- Migration to urban areas reduces daily exposure to Ewe
- Modern education systems primarily use English
- Digital content is predominantly in global languages

**Our Preservation Efforts**

The Tanyigbe community has implemented several initiatives to keep our language vibrant:

1. **Community Language Programs**: Regular gatherings where elders teach traditional Ewe to younger generations
2. **Cultural Performances**: Songs, poetry, and storytelling exclusively in Ewe during festivals and ceremonies
3. **Documentation Projects**: Recording elders speaking about history, customs, and traditional knowledge
4. **Family Encouragement**: Promoting Ewe as the primary language at home

**The Path Forward**

Preserving our language doesn''t mean rejecting English or other languages. Being multilingual is an asset. However, we must ensure that Ewe remains a living, spoken language in Tanyigbe.

We encourage all parents to speak Ewe with their children at home. We call on diaspora members to teach the language to the next generation, even when living far from home. We invite everyone to see language preservation as a shared responsibility.

When we speak Ewe, we honor our ancestors and ensure that future generations can fully connect with their heritage.',
  'Mawuli Agbemava',
  'Culture',
  true,
  NOW() - INTERVAL '10 days',
  198
)
ON CONFLICT (slug) DO NOTHING;

-- Traditional Governance Posts (1)
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, published, published_at, view_count)
VALUES
(
  'The Role of Togbe Kodi Adiko VI in Modern Tanyigbe',
  'role-of-togbe-kodi-adiko-vi-modern-tanyigbe',
  'How our paramount chief bridges traditional leadership and contemporary development for the benefit of all.',
  'Under the leadership of Togbe Kodi Adiko VI, Tanyigbe has experienced remarkable progress while maintaining strong connections to our traditional values and governance systems.

**Traditional Authority in Modern Times**

Togbe Kodi Adiko VI exemplifies how traditional leadership can effectively guide a community through modern challenges. His approach combines:
- Deep respect for ancestral wisdom and customary practices
- Progressive vision for education, healthcare, and infrastructure development
- Strategic partnerships with government and development organizations
- Inclusive decision-making that engages all community members

**Major Achievements**

During his reign, several significant developments have transformed Tanyigbe:

1. **Education Support**: Eight consecutive years of comprehensive BECE support, including materials, meals, and transportation for all candidates
2. **Infrastructure Advocacy**: Persistent pursuit of the town roads project, now awarded for construction under the Big Push agenda
3. **Healthcare Access**: Establishment of a community clinic managed by a qualified Physician Assistant
4. **Youth Development**: Ongoing efforts to create a Youth Skills Development and ICT Centre

**Leadership Philosophy**

Togbe Kodi Adiko VI believes that development must serve the people while preserving cultural identity. His leadership demonstrates that tradition and progress are not opposing forces but complementary elements of community advancement.

**Collaboration and Unity**

A hallmark of his leadership is the emphasis on collaboration. He works closely with:
- The four divisional chiefs to ensure balanced representation
- Community elders who provide wisdom and historical perspective
- Youth organizations that bring fresh ideas and energy
- The Tanyigbe diaspora who contribute resources and expertise
- Government officials and development partners

**The Road Ahead**

Under Togbe Kodi Adiko VI''s continued leadership, Tanyigbe is positioned for sustainable development that improves lives without compromising our cultural heritage. His vision of a prosperous, educated, and healthy Tanyigbe is becoming reality through persistent effort and community unity.',
  'Tanyigbe Communications Team',
  'Traditional Governance',
  true,
  NOW() - INTERVAL '8 days',
  276
)
ON CONFLICT (slug) DO NOTHING;

-- Tourism Posts (1)
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, published, published_at, view_count)
VALUES
(
  'Discovering Tanyigbe: A Guide for First-Time Visitors',
  'discovering-tanyigbe-guide-for-visitors',
  'Everything you need to know about visiting Tanyigbe, from cultural sites to local cuisine and community hospitality.',
  'Welcome to Tanyigbe! Whether you''re a diaspora member returning home or a first-time visitor, our community offers rich cultural experiences and warm hospitality.

**Getting to Tanyigbe**

Tanyigbe is located in the Volta Region of Ghana. The community is accessible by road, with regular transport from Ho, the regional capital. The journey offers beautiful views of the surrounding landscape.

**Cultural Sites to Visit**

1. **The Paramount Chief''s Palace**: Learn about traditional governance and see historic regalia and artifacts
2. **Divisional Areas**: Each of the four divisions has unique features and welcomes respectful visitors
3. **Sacred Groves**: Traditional spiritual sites that connect us to our ancestral heritage
4. **Community Gathering Spaces**: Where festivals and important ceremonies take place

**Experience Local Life**

- **Agriculture**: Visit cocoa farms and see traditional farming methods alongside modern techniques
- **Craftsmanship**: Watch artisans at work in masonry, carpentry, and traditional crafts
- **Market Days**: Experience the vibrant trade and social interaction at local markets
- **Traditional Cuisine**: Sample authentic Ewe dishes prepared with locally grown ingredients

**Cultural Etiquette**

When visiting Tanyigbe, please observe these customs:
- Greet elders and community members respectfully
- Ask permission before taking photographs, especially at cultural sites
- Dress modestly, particularly when visiting the chief''s palace or attending ceremonies
- Participate respectfully in any cultural activities you''re invited to join

**Best Times to Visit**

While Tanyigbe welcomes visitors year-round, the annual festival period offers the most vibrant cultural experience. The community comes alive with traditional performances, ceremonies, and celebrations.

**Accommodation and Hospitality**

Tanyigbe''s warm hospitality is legendary. Diaspora members often stay with family, while other visitors can find accommodation in nearby Ho or arrange community homestays for a more authentic experience.

**Contributing to the Community**

Many visitors choose to support local development initiatives. Whether through the diaspora association, direct community projects, or supporting local artisans and farmers, your contribution helps build a better Tanyigbe.

We look forward to welcoming you to Tanyigbe, where every visitor becomes part of our extended family.',
  'Selorm Adzah',
  'Tourism',
  true,
  NOW() - INTERVAL '5 days',
  167
)
ON CONFLICT (slug) DO NOTHING;

-- Development Posts (2)
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, published, published_at, view_count)
VALUES
(
  'Breaking Ground: The Tanyigbe Town Roads Project',
  'breaking-ground-tanyigbe-town-roads-project',
  'After a decade of advocacy, the town roads project has been awarded for construction. Here''s what it means for our community.',
  'After ten years of persistent advocacy and community mobilization, Tanyigbe''s town roads project has been awarded for construction under President John D. Mahama''s Big Push agenda. This milestone represents more than infrastructure—it''s a testament to what sustained community effort can achieve.

**The Journey**

The quest for improved roads began over a decade ago when community leaders identified transportation infrastructure as a critical need. Through the years:
- Multiple delegations met with government officials
- Technical proposals and community needs assessments were prepared
- The diaspora lobbied and advocated from various locations
- Community members remained united in their vision

**What This Means for Tanyigbe**

The town roads project will transform daily life in several ways:

1. **Economic Impact**
   - Easier transport of farm produce to markets
   - Reduced vehicle maintenance costs
   - Improved access for commercial activities
   - Potential for increased property values

2. **Social Benefits**
   - Better access to healthcare facilities
   - Easier commute for students
   - Enhanced connectivity between the four divisions
   - Improved emergency response capabilities

3. **Development Catalyst**
   - Foundation for attracting more investment
   - Improved accessibility for visitors and diaspora
   - Enhanced conditions for community events and festivals
   - Better integration with regional development plans

**The Construction Phase**

As construction begins, the community is preparing:
- Identifying any necessary land arrangements
- Planning for temporary traffic management
- Organizing community participation where appropriate
- Ensuring the project meets our long-term needs

**Lessons in Advocacy**

The success of this project offers valuable lessons:
- Persistence pays off—ten years of effort is bearing fruit
- Unity is strength—all divisions worked together
- Strategic partnerships matter—collaboration with government was crucial
- Documentation and proper proposals strengthen advocacy

**Looking Forward**

The town roads project is just one element of Tanyigbe''s development vision. With improved infrastructure in place, we''re better positioned to pursue other initiatives in education, healthcare, and economic development.

This achievement belongs to everyone who advocated, supported, and believed in a better future for Tanyigbe. As construction vehicles arrive and work begins, we celebrate not just the roads themselves, but what they represent: the power of community vision and determination.',
  'Isaac Kwami',
  'Development',
  true,
  NOW() - INTERVAL '3 days',
  423
),
(
  'Education First: Eight Years of BECE Support Transforms Young Lives',
  'education-first-eight-years-bece-support',
  'How consistent support for BECE candidates is changing educational outcomes and creating opportunities for Tanyigbe youth.',
  'For eight consecutive years, every BECE candidate in Tanyigbe''s four basic schools has received comprehensive support during their critical examinations. This sustained commitment to education is transforming lives and creating opportunities.

**What the Program Provides**

Every year, BECE candidates receive:
- Complete learning materials and study guides
- Daily nutritious meals during the examination period
- Mathematical sets and required examination tools
- Full transportation to and from examination centers
- Moral and motivational support from community leaders

**The Impact**

The results speak for themselves:
- Improved pass rates across all four schools
- Reduced financial burden on families
- Increased confidence among students
- Better concentration during exams due to proper nutrition and reduced stress
- More students continuing to secondary education

**Why This Matters**

Education is the foundation of community development. Every child who succeeds in their BECE:
- Opens doors to secondary and tertiary education
- Gains skills that benefit the entire community
- Becomes a role model for younger students
- Contributes to breaking cycles of poverty
- Represents Tanyigbe''s investment in its future

**Beyond BECE: A Holistic Approach**

The BECE support program is part of a broader educational vision that includes:

1. **Infrastructure Support**: Regular donations of chairs, books, and equipment to TASHS
2. **Academic Competition**: The enhanced NorDU Junior High School Quiz Competition with Mathematics, Science, and ICT
3. **Mentorship**: Forums where successful community members share experiences
4. **Future Plans**: The proposed Youth Skills Development and ICT Centre

**Community Investment**

This program is funded through:
- Contributions from the traditional authority
- Diaspora support and fundraising
- Local business sponsorships
- Community fundraising events

**Student Testimonials**

"Without the support program, my family would have struggled to provide everything I needed for BECE. Knowing the community believed in me gave me confidence to excel." - Former BECE candidate, now in secondary school

**The Next Eight Years**

As we celebrate eight years of success, we''re committed to continuing and expanding this support. Our vision is that no Tanyigbe child should miss educational opportunities due to financial constraints.

Every contribution to this program is an investment in Tanyigbe''s future. When our children succeed, our entire community thrives.',
  'Gifty Amewu',
  'Development',
  true,
  NOW() - INTERVAL '1 day',
  298
)
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 6. Verify the setup
-- =====================================================

SELECT
  category,
  COUNT(*) as post_count
FROM blog_posts
WHERE published = true
GROUP BY category
ORDER BY category;

SELECT '✓ Setup complete! Blog table created and 8 sample posts added.' as status;
