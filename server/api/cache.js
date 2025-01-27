
export default function handler(req, res) {
    try {
      console.log('Clearing cache...');
      clearCache();
  
      res.status(200).json({ message: 'Cache cleared successfully!' });
    } catch (error) {
      console.error('Error clearing cache:', error);
      res.status(500).json({ message: 'Failed to clear cache.' });
    }
  }
  
  
  function clearCache() {
    console.log('Cache cleared!');
  }