const codeforcesData = async (username) => {
    const response = await fetch(`https://codeforces.com/api/user.info?handles=${username}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch Codeforces data: ${response.statusText}`);
    }
    const data = await response.json();
    return data.result; //the return is in array formet. 
} 