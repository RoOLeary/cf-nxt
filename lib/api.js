async function fetchAPI(query, { variables } = {}) {

    const res = await fetch(`https://cities.thenextweb.com/api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*', 
        'Access-Control-Allow-Credentials' : true,
        // 'Authorization': 'Bearer 8YjnkaiY0aJ6rJQjwbT2wawiJPAC2PGE'
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    // console.log(res.headers);
  
    const json = await res.json()

    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
  
    return json.data
  }
  
  export async function getAllPostsWithSlug() {
    const data = fetchAPI(`
    query getDublin {
        entries(site: "tnwDublin", section: "pages") {
          id
          title
          slug
          ... on pages_default_Entry {
            id
            pageBlocks {
              __typename
              ... on pageBlocks_blocks_BlockType {
                id
                title
              }
              ... on pageBlocks_challenges_BlockType {
                id
              }
              ... on pageBlocks_faq_BlockType {
                __typename
                id
                hasCta
                ctaLink
                ctaLabel
                
              }
              ... on pageBlocks_partners_BlockType {
                id
              }
              ... on pageBlocks_rewards_BlockType {
                id
              }
              ... on pageBlocks_sessions_BlockType {
                id
              }
              ... on pageBlocks_video_BlockType {
                __typename
                id
                title
                embedCode
              }
              ... on pageBlocks_tickets_BlockType {
                id
              }
              ... on pageBlocks_textVisual_BlockType {
                id
                title
                textVisualHeading
                textVisualCta {
                  ... on textVisualCta_BlockType {
                    id
                    tvCtaIsBlank
                    tvCtaLink
                    tvCtaText
                  }
                }
                textVisualContent
              }
              ... on pageBlocks_text_BlockType {
                id
                heading
                column1
                column2
              }
              ... on pageBlocks_stats_BlockType {
                __typename
                id
                title
                stats {
                  value
                  label
                  col2
                  col1
                }
              }
              ... on pageBlocks_sponsors_BlockType {
                id
              }
              ... on pageBlocks_speakers_BlockType {
                id
              }
              ... on pageBlocks_signup_BlockType {
                id
                signupHeading
                signupText
                hubspotEmbed
              }
            }
          }
        }
      }
    `)
    return data?.entries
  }

  export async function getAllPostsByCategory(slug) {
    const data = await fetchAPI(`
      query getAllPostsByCategory {
        entries(section: "articles", relatedToCategories: [{slug: "${slug}"}]) {
          title
          slug
          ... on articles_default_Entry {
            id
            category {
              slug
            }
            tags {
              id
              slug	
              title
            }
            publishDate
            articleBody
            headline
            subHeadline
          }
        }
      },
    `,{
      variables: {
        where: {
          slug,
        }
      },
    }
  )
  return data
}
  
  export async function getAllPostsForHome(preview) {
    const data = await fetchAPI(
      `
      query getDublin {
        entries(site: "tnwDublin", section: "pages") {
          id
          title
          slug
          ... on pages_default_Entry {
            id
            pageBlocks {
              __typename
              ... on pageBlocks_blocks_BlockType {
                id
                title
              }
              ... on pageBlocks_challenges_BlockType {
                id
              }
              ... on pageBlocks_faq_BlockType {
                __typename
                id
                hasCta
                ctaLink
                ctaLabel
                
              }
              ... on pageBlocks_partners_BlockType {
                id
              }
              ... on pageBlocks_rewards_BlockType {
                id
              }
              ... on pageBlocks_sessions_BlockType {
                id
              }
              ... on pageBlocks_video_BlockType {
                __typename
                id
                title
                embedCode
              }
              ... on pageBlocks_tickets_BlockType {
                id
              }
              ... on pageBlocks_textVisual_BlockType {
                id
                title
                textVisualHeading
                textVisualCta {
                  ... on textVisualCta_BlockType {
                    id
                    tvCtaIsBlank
                    tvCtaLink
                    tvCtaText
                  }
                }
                textVisualContent
              }
              ... on pageBlocks_text_BlockType {
                id
                heading
                column1
                column2
              }
              ... on pageBlocks_stats_BlockType {
                __typename
                id
                title
                stats {
                  value
                  label
                  col2
                  col1
                }
              }
              ... on pageBlocks_sponsors_BlockType {
                id
              }
              ... on pageBlocks_speakers_BlockType {
                id
              }
              ... on pageBlocks_signup_BlockType {
                id
                signupHeading
                signupText
                hubspotEmbed
              }
            }
          }
        }
      }
    `,
    )
    return data
  }
  
  export async function getPostAndMorePosts(slug) {
    const data = await fetchAPI(
        `
        query getDublinSingle {
            entry(section: "pages", site: "tnwDublin", slug: "${slug}") {
              id
              slug
              title
              ... on pages_default_Entry {
                id
                pageBlocks {
                  ... on pageBlocks_video_BlockType {
                    __typename
                    id
                    title
                    embedCode
                  }
                  ... on pageBlocks_tickets_BlockType {
                    __typename
                    id
                    title
                    heading
                    tickets {
                      ... on tickets_default_Entry {
                        id
                        sectionHandle
                        slug
                        title
                        ticketDescription
                        ticketLink
                        ticketLinktext
                        ticketName
                        ticketPrice
                        ticketVat
                      }
                    }
                  }
                  ... on pageBlocks_textVisual_BlockType {
                    __typename
                    id
                    title
                    textVisualHeading
                    textVisualContent
                    textVisualCta {
                      ... on textVisualCta_BlockType {
                        id
                        tvCtaText
                        tvCtaLink
                        tvCtaIsBlank
                      }
                    }
                  }
                  ... on pageBlocks_text_BlockType {
                    __typename
                    id
                    column1
                    column2
                    heading
                  }
                  ... on pageBlocks_stats_BlockType {
                    __typename
                    id
                    title
                    sources
                    stats {
                      label
                      value
                    }
                  }
                  
                  ... on pageBlocks_sponsors_BlockType {
                    __typename
                    id
                    sponsorsTitle
                  }
                  ... on pageBlocks_speakers_BlockType {
                    __typename
                    id
                    title
                  }
                  ... on pageBlocks_signup_BlockType {
                    __typename
                    id
                  }
                  ... on pageBlocks_sessions_BlockType {
                    __typename
                    id
                  }
                  ... on pageBlocks_rewards_BlockType {
                    __typename
                    id
                  }
                  ... on pageBlocks_partners_BlockType {
                    __typename
                    id
                  }
                  ... on pageBlocks_hero_BlockType {
                    __typename
                    id
                    heading
                    eyebrow
                    ctaTitle
                    ctaLink
                  }
                  ... on pageBlocks_faq_BlockType {
                    __typename
                    id
                    text
                    hasCta
                    ctaLink
                    ctaLabel
                  }
                  ... on pageBlocks_columns_BlockType {
                    __typename
                    id
                  }
                  ... on pageBlocks_challenges_BlockType {
                    __typename
                    id
                  }
                  ... on pageBlocks_blocks_BlockType {
                    __typename
                    id
                  }
                }
              }
            }
          }
          
     `,
      {
        variables: {
          where: {
            slug,
          }
        },
      }
    )
    return data
  }
  
  export async function getAllPagesWithSlug() {
    const data = fetchAPI(`
      {
        entries{
          slug
        }
      }
    `)
    return data.allPages
  }
  
  
  export async function getPageBySlug(slug) {
    // console.log(slug);
    const data = await fetchAPI(
      `
      query getPageBySlug {
        entry(section: "pages", slug: "${slug}") {
          id
          title
          slug
          ... on pages_pages_Entry {
            id
            pageBlocks {
              ... on pageBlocks_hero_BlockType {
                __typename
                uid
                subHeadline
                heading
                eyebrow
              }
              ... on pageBlocks_text_BlockType {
                __typename
                uid
                headline
                articleBody
              }
              ... on pageBlocks_imageSlider_BlockType {
                __typename
                uid
                title
                sliderMatrix {
                  ... on sliderMatrix_BlockType {
                    id
                    textHeading
                    textSub
                    textBackground
                    slideImage
                    slideColor(label: true)
                  }
                }
              }
              ... on pageBlocks_faq_BlockType {
                __typename
                uid
                faqHeading
                faqLeadtext
                faqs {
                  ... on faqs_BlockType {
                    id
                    question
                    answer
                  }
                }
              }
              ... on pageBlocks_speakers_BlockType {
                __typename
                uid
                heading
                speakersIntro
                speakers {
                  id
                  slug
                  ... on speakers_speakers_Entry {
                    id
                    speakerName
                    speakerBio
                    speakerCompany
                    speakerCategory {
                      id
                    }
                    companyUrl
                  }
                }
              }
              ... on pageBlocks_video_BlockType {
                __typename
                uid
                title
                videoEmbedCode
                videoTitle
              }
            }
          }
        }
      }
      `
    );
    return data
  }
  
  export async function getPage(slug) {
    const data = await fetchAPI(
      `
        query getPage{
          pages(where: { slug: "${slug}" }){
            id
            title
            slug
            intro_text
            flex_content{
              __typename
                ... on ComponentGeneralBallsack {
                  ballsack_title
                  ballsack_text
                }
                ... on ComponentGeneralContactInfo{
                  address
                  email
                  telephone
                }
                ... on ComponentGeneralAccordion {
                  accordion{
                    title
                    content
                  }
                }
                ... on ComponentGeneralTabs{
                  tabunit{
                    tab_title
                    tab_content
                  }
               }
            }
        }
    }
    `
    );
  
    return data;
  }
  
  export async function getHomePage() {
    const data = await fetchAPI(
      `
      query Home {
        pageBy(uri: "home") {
          title
          slug
          content
        }
      }
  
      `
    );
    return data
  }
  
  export async function getTags(slug) {
    const data = await fetchAPI(
      `
      query getPostsByTags {
        entries(section: "articles", relatedToCategories: {slug: "${slug}"}) {
          id
          slug
          title
          ... on articles_default_Entry {
            id
            subHeadline
            manualRelatedArticles(title: "", subHeadline: "", tags: "") {
              id
            }
          }
        }
        categories {
          id
          slug
        }
      }
      `
    );
    return data
  }