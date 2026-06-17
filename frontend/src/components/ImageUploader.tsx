import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, X, FileImage } from 'lucide-react';
import { cn } from '../lib/utils';

interface ImageUploaderProps {
  onImageSelect: (file: File) => void;
  isLoading: boolean;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect, isLoading }) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const processFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const clearImage = () => {
    setPreviewUrl(null);
    setSelectedFile(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handlePredict = () => {
    if (selectedFile) {
      onImageSelect(selectedFile);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {!previewUrl ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={cn(
            "relative group flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-2xl transition-all duration-300 ease-in-out cursor-pointer glass",
            dragActive ? "border-primary bg-primary/5 scale-[1.02]" : "border-card-border hover:border-primary/50 hover:bg-card-border/30"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleChange}
          />
          <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-400 group-hover:text-gray-300">
            <UploadCloud className="w-12 h-12 mb-4" />
            <p className="mb-2 text-sm font-semibold">
              <span className="text-primary">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs">PNG, JPG, JPEG</p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-6 flex flex-col items-center"
        >
          <div className="relative w-full max-w-md mx-auto h-64 rounded-xl overflow-hidden mb-6 border border-card-border">
            <img 
              src={previewUrl} 
              alt="Preview" 
              className="w-full h-full object-cover"
            />
            <button
              onClick={clearImage}
              disabled={isLoading}
              className="absolute top-2 right-2 p-1.5 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur-md transition-colors disabled:opacity-50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-3 mb-6 text-gray-300 w-full max-w-md bg-black/20 p-3 rounded-lg border border-white/5">
            <FileImage className="w-5 h-5 text-primary" />
            <span className="text-sm truncate flex-1">{selectedFile?.name}</span>
            <span className="text-xs text-gray-500">{(selectedFile!.size / 1024 / 1024).toFixed(2)} MB</span>
          </div>

          <button
            onClick={handlePredict}
            disabled={isLoading}
            className="w-full max-w-md bg-primary hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing Image...
              </>
            ) : (
              'Analyze Potato Leaf'
            )}
          </button>
        </motion.div>
      )}
    </div>
  );
};
