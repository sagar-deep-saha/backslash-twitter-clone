// API configuration
const API_URL = import.meta.env.DEV 
  ? 'http://localhost:8001/api'
  : 'https://backslash-twitter-back-xi.vercel.app/api';

export const fetchTweets = async () => {
  try {
    console.log('Fetching tweets from:', API_URL);
    const response = await fetch(`${API_URL}/tweets`);
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Error response:', errorData);
      throw new Error(errorData.detail || 'Failed to fetch tweets');
    }
    
    const data = await response.json();
    console.log('Fetched tweets:', data);
    return data;
  } catch (error) {
    console.error('Error fetching tweets:', error);
    throw error;
  }
};

export const createTweet = async (tweet) => {
  try {
    console.log('Creating tweet:', tweet);
    console.log('API URL:', API_URL);
    
    const response = await fetch(`${API_URL}/tweets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(tweet),
    });
    
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Error response:', errorData);
      throw new Error(errorData.detail || 'Failed to create tweet');
    }
    
    const data = await response.json();
    console.log('Tweet created:', data);
    return data;
  } catch (error) {
    console.error('Error creating tweet:', error);
    throw error;
  }
};

export const fetchUrlContent = async (url) => {
  try {
    console.log('Fetching URL content:', url);
    const response = await fetch(`${API_URL}/fetch-url?url=${encodeURIComponent(url)}`);
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Error response:', errorData);
      throw new Error(errorData.detail || 'Failed to fetch URL content');
    }
    
    const data = await response.json();
    console.log('URL content fetched:', data);
    return data;
  } catch (error) {
    console.error('Error fetching URL content:', error);
    throw error;
  }
}; 