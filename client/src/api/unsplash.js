import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 25a6f4fffe73f860e79098bfbc62d6a0db67a0f48c1a16fae616f5eefe7735e2'
  }
});
