import { useState } from 'react';

export default function Report() {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setStatusMessage('Please upload an image.');
      return;
    }
    setIsLoading(true);
    setStatusMessage('Submitting report...');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    setStatusMessage('Report submitted successfully!');
    console.log({ image: image.name, location, notes });

    // Reset form after submission
    setImage(null);
    setImagePreview('');
    setLocation('');
    setNotes('');
    setTimeout(() => setStatusMessage(''), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass-card p-6 md:p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-6 technova-gradient-text">
          Report an Unauthorized Billboard
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="billboard-image" className="block text-sm font-medium text-gray-300 mb-2">
              Upload Billboard Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-600 rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <div className="flex text-sm text-gray-400">
                  <label htmlFor="billboard-image" className="relative cursor-pointer bg-gray-800 rounded-md font-medium text-cyan-400 hover:text-cyan-300 px-1">
                    <span>Upload a file</span>
                    <input id="billboard-image" name="billboard-image" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" required/>
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
              </div>
            </div>
            {imagePreview && <img src={imagePreview} alt="Preview" className="mt-4 rounded-lg max-h-60 mx-auto"/>}
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-300">Location</label>
            <input type="text" name="location" id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="form-input" placeholder="e.g., Near Main Street Intersection" required/>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-300">Additional Notes</label>
            <textarea id="notes" name="notes" rows="3" value={notes} onChange={(e) => setNotes(e.target.value)} className="form-input" placeholder="Describe the issue (e.g., blocking view, offensive content)."></textarea>
          </div>

          <div>
            <button type="submit" className="w-full btn-primary font-bold py-3 px-4 rounded-lg flex items-center justify-center" disabled={isLoading}>
              {isLoading ? <div className="loader"></div> : 'Submit Report'}
            </button>
          </div>
          {statusMessage && <p className="text-center text-sm text-gray-400 mt-4">{statusMessage}</p>}
        </form>
      </div>
    </div>
  );
}
