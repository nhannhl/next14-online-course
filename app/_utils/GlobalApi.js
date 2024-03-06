const { gql, default: request } = require("graphql-request");

const MASTER_URL = `https://api-us-east-1-shared-usea1-02.hygraph.com/v2/${process.env.NEXT_PUBLIC_HYGRAPH_API_KEY}/master`;

const queryData = (query) => {
  return request(MASTER_URL, query);
}

const getAllCourseList = async () => {
  const query = gql`query MyQuery {
      courseLists(first: 20, orderBy: createdAt_DESC) {
        author
        name
        free
        id
        description
        demoUrl
        slug
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
        totalChapters
        sourceCode
        tag
        banner {
          url
        }
      }
    }`;

    return await queryData(query);
};

const getSideBanner = async () => {
  const query = gql`query MyQuery {
    sideBanners {
      id
      name
      url
      banner {
        id
        url
      }
    }
  }`;

  return await queryData(query);
}

const getCourseBySlug = async (slugStr) => {
  const query = gql`query MyQuery {
    courseList(where: {slug: "`+ slugStr +`"}) {
      author
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
        }
      }
      demoUrl
      description
      free
      id
      name
      tag
      totalChapters
      sourceCode
      slug
    }
  }`;

  return await queryData(query);
}

export default {
  getAllCourseList,
  getSideBanner,
  getCourseBySlug
};