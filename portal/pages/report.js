import { useState, useEffect } from 'react';
import { createReport } from '../lib/api'; 

export default function Report() {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [reporter, setReporter] = useState('');
  const [coords, setCoords] = useState({ latitude: null, longitude: null });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setCoords({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
        (err) => console.error("Could not get location:", err)
      );
    }
  }, []);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) {
      setImagePreview(URL.createObjectURL(selectedFile));
    } else {
      setImagePreview('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please upload an image.');
      return;
    }
    setIsLoading(true);
    setError('');
    setStatusMessage('Submitting report...');

    try {
      const result = await createReport({
        file,
        latitude: coords.latitude,
        longitude: coords.longitude,
        reporter: reporter || 'Anonymous',
      });
      setStatusMessage('Report submitted successfully! AI analysis complete.');
      console.log('Server response:', result);
      // Reset form
      setFile(null);
      setImagePreview('');
      setReporter('');
    } catch (err) {
      setError(err.message || 'An unknown error occurred.');
      setStatusMessage('');
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setStatusMessage('');
        setError('');
      }, 5000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass-card p-6 md:p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-6 technova-gradient-text">
          Report an Unauthorized Billboard
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div>
            <label htmlFor="billboard-image" className="block text-sm font-medium text-gray-300 mb-2">Billboard Photo *</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-600 rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <div className="flex text-sm text-gray-400">
                  <label htmlFor="billboard-image" className="relative cursor-pointer bg-gray-800 rounded-md font-medium text-cyan-400 hover:text-cyan-300 px-1">
                    <span>Upload a file</span>
                    <input id="billboard-image" name="billboard-image" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" required/>
                  </label>
                </div>
                <p className="text-xs text-gray-500">You consent to civic reporting.</p>
              </div>
            </div>
            {imagePreview && <img src={imagePreview} alt="Preview" className="mt-4 rounded-lg max-h-60 mx-auto"/>}
          </div>

          {/* Location & Reporter Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300">Location (auto-detected)</label>
                <input type="text" value={coords.latitude ? `${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)}` : 'Fetching...'} className="form-input bg-gray-700" readOnly/>
              </div>
              <div>
                <label htmlFor="reporter" className="block text-sm font-medium text-gray-300">Name (for Leaderboard)</label>
                <input id="reporter" name="reporter" type="text" value={reporter} onChange={(e) => setReporter(e.target.value)} className="form-input" placeholder="Anonymous" />
              </div>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="w-full btn-primary font-bold py-3 px-4 rounded-lg flex items-center justify-center" disabled={isLoading}>
              {isLoading ? <div className="loader"></div> : 'Submit Report'}
            </button>
          </div>
          {statusMessage && <p className="text-center text-sm text-green-400 mt-4">{statusMessage}</p>}
          {error && <p className="text-center text-sm text-red-400 mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
}
