-- Insert sample blog posts for the Tanyigbe community website
-- These posts cover various categories: History, Culture, Traditional Governance, Tourism, and Development

-- History Posts
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, published, published_at, view_count)
VALUES
(
  'The Story of Tanyigbe''s Migration and Settlement',
  'story-of-tanyigbe-migration-and-settlement',
  'Discover how our ancestors journeyed from Notsie to establish Tanyigbe, and the rich history that shaped our community.',
  E'The history of Tanyigbe is a testament to the resilience and vision of our ancestors. Our journey began in the ancient city of Notsie, where our forefathers lived under the rule of a tyrannical king.\n\nFacing oppression and hardship, the people of Notsie made the courageous decision to escape and seek a new home where they could live in freedom and dignity. The escape from Notsie was carefully planned, with our ancestors walking backwards to confuse their pursuers about the direction of their flight.\n\nAfter a long and arduous journey, our ancestors discovered the fertile lands that would become Tanyigbe. The name "Tanyigbe" itself reflects our heritage and identity. Here, they established a community built on the values of unity, hard work, and respect for tradition.\n\nThe early settlers faced numerous challenges as they cleared the land and established farms. Through cooperation and determination, they built the foundations of what has become our thriving community today.\n\nOur migration story is not just about movement from one place to another—it represents the eternal human quest for freedom, dignity, and a better life. This legacy continues to inspire us as we work together to build a prosperous future for Tanyigbe.',
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
  E'Tanyigbe''s social and administrative structure is built upon four main divisions, each with its own distinct identity, leadership, and contribution to the community''s governance.\n\nThe four divisions are:\n\n**Tanyigbe Anyigbe** - The first division represents the foundational settlers and plays a crucial role in maintaining our traditional customs and practices.\n\n**Tanyigbe Atidze** - Known for their agricultural expertise, this division has been instrumental in developing our farming practices and economic sustainability.\n\n**Tanyigbe Dzafe** - This division has a rich tradition of craftsmanship and trade, contributing to the community''s economic diversity.\n\n**Tanyigbe Etoe** - The fourth division brings unique cultural practices and has been central to preserving our oral traditions and folklore.\n\nEach division has its own leadership structure while maintaining unity under the paramount chief. This system ensures balanced representation and shared responsibility in community decision-making.\n\nDuring major festivals and ceremonies, all four divisions come together in a powerful display of unity and cultural pride. The division system has proven resilient over centuries, adapting to modern governance needs while preserving traditional values.\n\nThis unique structure is one of Tanyigbe''s greatest strengths, ensuring that diverse voices are heard and that leadership responsibilities are shared across the community.',
  'Elder Kwame Mensah',
  'History',
  true,
  NOW() - INTERVAL '20 days',
  189
);

-- Culture Posts
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, published, published_at, view_count)
VALUES
(
  'The Tanyigbe Festival: A Celebration of Heritage and Unity',
  'tanyigbe-festival-celebration-heritage-unity',
  'Experience the vibrant colors, rhythms, and traditions of our annual Tanyigbe Festival, where culture comes alive.',
  E'Every year, Tanyigbe comes alive with the colors, sounds, and energy of our traditional festival. This celebration is more than just an event—it''s a reaffirmation of our identity and a bridge between past and present.\n\nThe festival typically begins with purification rites performed by our traditional leaders, cleansing the community and seeking blessings from our ancestors for the year ahead. These sacred ceremonies set the spiritual tone for the celebrations to follow.\n\n**Traditional Performances**\n\nThe festival showcases the rich cultural heritage of Tanyigbe through various performances:\n- Traditional drumming and dancing that has been passed down through generations\n- Display of ancestral artifacts and regalia\n- Cultural exhibitions showing traditional crafts, farming tools, and household items\n- Storytelling sessions where elders share the oral history of our people\n\n**Community Participation**\n\nWhat makes the Tanyigbe Festival special is the participation of all community members:\n- Youth groups perform contemporary interpretations of traditional dances\n- Women''s groups prepare traditional dishes and showcase culinary heritage\n- Artisans display their crafts and demonstrate traditional skills\n- The diaspora returns home, strengthening bonds and sharing experiences\n\n**Unity in Diversity**\n\nThe festival brings together all four divisions of Tanyigbe in a spectacular display of unity. Each division contributes its unique traditions, creating a rich tapestry of cultural expression.\n\nFor the younger generation, the festival is an opportunity to learn about their heritage in an engaging, celebratory atmosphere. For elders, it''s a chance to pass on knowledge and see traditions continue.\n\nThe Tanyigbe Festival stands as a powerful reminder that while we embrace progress and development, we never forget where we came from.',
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
  E'Language is the soul of culture. As Tanyigbe continues to develop and engage with the modern world, preserving our Ewe language remains a vital priority for maintaining our cultural identity.\n\n**The Role of Language in Identity**\n\nThe Ewe language carries within it the wisdom, values, and worldview of our ancestors. Proverbs, songs, and traditional narratives lose much of their meaning and power when translated. Our language is not just a communication tool—it''s a repository of cultural knowledge.\n\n**Challenges We Face**\n\nLike many traditional communities, Tanyigbe faces challenges in language preservation:\n- Young people increasingly communicate in English or other languages\n- Migration to urban areas reduces daily exposure to Ewe\n- Modern education systems primarily use English\n- Digital content is predominantly in global languages\n\n**Our Preservation Efforts**\n\nThe Tanyigbe community has implemented several initiatives to keep our language vibrant:\n\n1. **Community Language Programs**: Regular gatherings where elders teach traditional Ewe to younger generations\n2. **Cultural Performances**: Songs, poetry, and storytelling exclusively in Ewe during festivals and ceremonies\n3. **Documentation Projects**: Recording elders speaking about history, customs, and traditional knowledge\n4. **Family Encouragement**: Promoting Ewe as the primary language at home\n\n**The Path Forward**\n\nPreserving our language doesn''t mean rejecting English or other languages. Being multilingual is an asset. However, we must ensure that Ewe remains a living, spoken language in Tanyigbe.\n\nWe encourage all parents to speak Ewe with their children at home. We call on diaspora members to teach the language to the next generation, even when living far from home. We invite everyone to see language preservation as a shared responsibility.\n\nWhen we speak Ewe, we honor our ancestors and ensure that future generations can fully connect with their heritage.',
  'Mawuli Agbemava',
  'Culture',
  true,
  NOW() - INTERVAL '10 days',
  198
);

-- Traditional Governance Posts
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, published, published_at, view_count)
VALUES
(
  'The Role of Togbe Kodi Adiko VI in Modern Tanyigbe',
  'role-of-togbe-kodi-adiko-vi-modern-tanyigbe',
  'How our paramount chief bridges traditional leadership and contemporary development for the benefit of all.',
  E'Under the leadership of Togbe Kodi Adiko VI, Tanyigbe has experienced remarkable progress while maintaining strong connections to our traditional values and governance systems.\n\n**Traditional Authority in Modern Times**\n\nTogbe Kodi Adiko VI exemplifies how traditional leadership can effectively guide a community through modern challenges. His approach combines:\n- Deep respect for ancestral wisdom and customary practices\n- Progressive vision for education, healthcare, and infrastructure development\n- Strategic partnerships with government and development organizations\n- Inclusive decision-making that engages all community members\n\n**Major Achievements**\n\nDuring his reign, several significant developments have transformed Tanyigbe:\n\n1. **Education Support**: Eight consecutive years of comprehensive BECE support, including materials, meals, and transportation for all candidates\n2. **Infrastructure Advocacy**: Persistent pursuit of the town roads project, now awarded for construction under the Big Push agenda\n3. **Healthcare Access**: Establishment of a community clinic managed by a qualified Physician Assistant\n4. **Youth Development**: Ongoing efforts to create a Youth Skills Development and ICT Centre\n\n**Leadership Philosophy**\n\nTogbe Kodi Adiko VI believes that development must serve the people while preserving cultural identity. His leadership demonstrates that tradition and progress are not opposing forces but complementary elements of community advancement.\n\n**Collaboration and Unity**\n\nA hallmark of his leadership is the emphasis on collaboration. He works closely with:\n- The four divisional chiefs to ensure balanced representation\n- Community elders who provide wisdom and historical perspective\n- Youth organizations that bring fresh ideas and energy\n- The Tanyigbe diaspora who contribute resources and expertise\n- Government officials and development partners\n\n**The Road Ahead**\n\nUnder Togbe Kodi Adiko VI''s continued leadership, Tanyigbe is positioned for sustainable development that improves lives without compromising our cultural heritage. His vision of a prosperous, educated, and healthy Tanyigbe is becoming reality through persistent effort and community unity.',
  'Tanyigbe Communications Team',
  'Traditional Governance',
  true,
  NOW() - INTERVAL '8 days',
  276
);

-- Tourism Posts
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, published, published_at, view_count)
VALUES
(
  'Discovering Tanyigbe: A Guide for First-Time Visitors',
  'discovering-tanyigbe-guide-for-visitors',
  'Everything you need to know about visiting Tanyigbe, from cultural sites to local cuisine and community hospitality.',
  E'Welcome to Tanyigbe! Whether you''re a diaspora member returning home or a first-time visitor, our community offers rich cultural experiences and warm hospitality.\n\n**Getting to Tanyigbe**\n\nTanyigbe is located in the Volta Region of Ghana. The community is accessible by road, with regular transport from Ho, the regional capital. The journey offers beautiful views of the surrounding landscape.\n\n**Cultural Sites to Visit**\n\n1. **The Paramount Chief''s Palace**: Learn about traditional governance and see historic regalia and artifacts\n2. **Divisional Areas**: Each of the four divisions has unique features and welcomes respectful visitors\n3. **Sacred Groves**: Traditional spiritual sites that connect us to our ancestral heritage\n4. **Community Gathering Spaces**: Where festivals and important ceremonies take place\n\n**Experience Local Life**\n\n- **Agriculture**: Visit cocoa farms and see traditional farming methods alongside modern techniques\n- **Craftsmanship**: Watch artisans at work in masonry, carpentry, and traditional crafts\n- **Market Days**: Experience the vibrant trade and social interaction at local markets\n- **Traditional Cuisine**: Sample authentic Ewe dishes prepared with locally grown ingredients\n\n**Cultural Etiquette**\n\nWhen visiting Tanyigbe, please observe these customs:\n- Greet elders and community members respectfully\n- Ask permission before taking photographs, especially at cultural sites\n- Dress modestly, particularly when visiting the chief''s palace or attending ceremonies\n- Participate respectfully in any cultural activities you''re invited to join\n\n**Best Times to Visit**\n\nWhile Tanyigbe welcomes visitors year-round, the annual festival period offers the most vibrant cultural experience. The community comes alive with traditional performances, ceremonies, and celebrations.\n\n**Accommodation and Hospitality**\n\nTanyigbe''s warm hospitality is legendary. Diaspora members often stay with family, while other visitors can find accommodation in nearby Ho or arrange community homestays for a more authentic experience.\n\n**Contributing to the Community**\n\nMany visitors choose to support local development initiatives. Whether through the diaspora association, direct community projects, or supporting local artisans and farmers, your contribution helps build a better Tanyigbe.\n\nWe look forward to welcoming you to Tanyigbe, where every visitor becomes part of our extended family.',
  'Selorm Adzah',
  'Tourism',
  true,
  NOW() - INTERVAL '5 days',
  167
);

-- Development Posts
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, published, published_at, view_count)
VALUES
(
  'Breaking Ground: The Tanyigbe Town Roads Project',
  'breaking-ground-tanyigbe-town-roads-project',
  'After a decade of advocacy, the town roads project has been awarded for construction. Here''s what it means for our community.',
  E'After ten years of persistent advocacy and community mobilization, Tanyigbe''s town roads project has been awarded for construction under President John D. Mahama''s Big Push agenda. This milestone represents more than infrastructure—it''s a testament to what sustained community effort can achieve.\n\n**The Journey**\n\nThe quest for improved roads began over a decade ago when community leaders identified transportation infrastructure as a critical need. Through the years:\n- Multiple delegations met with government officials\n- Technical proposals and community needs assessments were prepared\n- The diaspora lobbied and advocated from various locations\n- Community members remained united in their vision\n\n**What This Means for Tanyigbe**\n\nThe town roads project will transform daily life in several ways:\n\n1. **Economic Impact**\n   - Easier transport of farm produce to markets\n   - Reduced vehicle maintenance costs\n   - Improved access for commercial activities\n   - Potential for increased property values\n\n2. **Social Benefits**\n   - Better access to healthcare facilities\n   - Easier commute for students\n   - Enhanced connectivity between the four divisions\n   - Improved emergency response capabilities\n\n3. **Development Catalyst**\n   - Foundation for attracting more investment\n   - Improved accessibility for visitors and diaspora\n   - Enhanced conditions for community events and festivals\n   - Better integration with regional development plans\n\n**The Construction Phase**\n\nAs construction begins, the community is preparing:\n- Identifying any necessary land arrangements\n- Planning for temporary traffic management\n- Organizing community participation where appropriate\n- Ensuring the project meets our long-term needs\n\n**Lessons in Advocacy**\n\nThe success of this project offers valuable lessons:\n- Persistence pays off—ten years of effort is bearing fruit\n- Unity is strength—all divisions worked together\n- Strategic partnerships matter—collaboration with government was crucial\n- Documentation and proper proposals strengthen advocacy\n\n**Looking Forward**\n\nThe town roads project is just one element of Tanyigbe''s development vision. With improved infrastructure in place, we''re better positioned to pursue other initiatives in education, healthcare, and economic development.\n\nThis achievement belongs to everyone who advocated, supported, and believed in a better future for Tanyigbe. As construction vehicles arrive and work begins, we celebrate not just the roads themselves, but what they represent: the power of community vision and determination.',
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
  E'For eight consecutive years, every BECE candidate in Tanyigbe''s four basic schools has received comprehensive support during their critical examinations. This sustained commitment to education is transforming lives and creating opportunities.\n\n**What the Program Provides**\n\nEvery year, BECE candidates receive:\n- Complete learning materials and study guides\n- Daily nutritious meals during the examination period\n- Mathematical sets and required examination tools\n- Full transportation to and from examination centers\n- Moral and motivational support from community leaders\n\n**The Impact**\n\nThe results speak for themselves:\n- Improved pass rates across all four schools\n- Reduced financial burden on families\n- Increased confidence among students\n- Better concentration during exams due to proper nutrition and reduced stress\n- More students continuing to secondary education\n\n**Why This Matters**\n\nEducation is the foundation of community development. Every child who succeeds in their BECE:\n- Opens doors to secondary and tertiary education\n- Gains skills that benefit the entire community\n- Becomes a role model for younger students\n- Contributes to breaking cycles of poverty\n- Represents Tanyigbe''s investment in its future\n\n**Beyond BECE: A Holistic Approach**\n\nThe BECE support program is part of a broader educational vision that includes:\n\n1. **Infrastructure Support**: Regular donations of chairs, books, and equipment to TASHS\n2. **Academic Competition**: The enhanced NorDU Junior High School Quiz Competition with Mathematics, Science, and ICT\n3. **Mentorship**: Forums where successful community members share experiences\n4. **Future Plans**: The proposed Youth Skills Development and ICT Centre\n\n**Community Investment**\n\nThis program is funded through:\n- Contributions from the traditional authority\n- Diaspora support and fundraising\n- Local business sponsorships\n- Community fundraising events\n\n**Student Testimonials**\n\n"Without the support program, my family would have struggled to provide everything I needed for BECE. Knowing the community believed in me gave me confidence to excel." - Former BECE candidate, now in secondary school\n\n**The Next Eight Years**\n\nAs we celebrate eight years of success, we''re committed to continuing and expanding this support. Our vision is that no Tanyigbe child should miss educational opportunities due to financial constraints.\n\nEvery contribution to this program is an investment in Tanyigbe''s future. When our children succeed, our entire community thrives.',
  'Gifty Amewu',
  'Development',
  true,
  NOW() - INTERVAL '1 day',
  298
);

-- Print confirmation message
SELECT 'Sample blog posts inserted successfully!' as status;