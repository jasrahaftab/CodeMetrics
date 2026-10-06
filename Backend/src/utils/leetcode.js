
const query = `
  query userPublicProfile($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        realName
        userAvatar
        ranking
        reputation
        countryName
        school
        websites
      }
      submitStats {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
        totalSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }
  }
`;

const leetcodeData = async (username) => {
    const response = await fetch(`https://leetcode.com/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: query,
            variables: {
                username,
            },
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch LeetCode data: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data.data.matchedUser);
    return data.data.matchedUser;
    // what's the formet of the returned data?
    // { username: string, profile: { realName: string, userAvatar: string, ranking: number, reputation: number, countryName: string, school: string, websites: string[] }, submitStats: { acSubmissionNum: { difficulty: string, count: number, submissions: number }[], totalSubmissionNum: { difficulty: string, count: number, submissions: number }[] } } 
}