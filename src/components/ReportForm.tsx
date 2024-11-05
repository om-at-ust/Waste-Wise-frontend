import React from 'react';
import { Camera, Upload, X } from 'lucide-react';

export default function ReportForm() {
  const [image, setImage] = React.useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add submission logic here
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Issue Description
        </label>
        <textarea
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          placeholder="Describe the issue..."
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Upload Photo
        </label>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          className="hidden"
        />
        
        {!image ? (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="mt-1 flex justify-center items-center w-full h-32 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-emerald-500"
          >
            <div className="space-y-1 text-center">
              <Camera className="mx-auto h-12 w-12 text-gray-400" />
              <div className="text-sm text-gray-600">
                <span className="text-emerald-600 hover:text-emerald-500">
                  Upload a photo
                </span>
                {' '}or drag and drop
              </div>
            </div>
          </button>
        ) : (
          <div className="relative mt-1">
            <img
              src={image}
              alt="Preview"
              className="w-full h-32 object-cover rounded-md"
            />
            <button
              type="button"
              onClick={() => setImage(null)}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
      >
        Submit Report
      </button>
    </form>
  );
}