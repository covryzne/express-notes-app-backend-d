const DEFAULT_BASE_URL = 'http://localhost:5000/';

const getBaseURL = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || DEFAULT_BASE_URL;
  return baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
};

export default getBaseURL;
