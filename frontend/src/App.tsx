import { useState } from 'react';
import { Hero } from './components/Hero';
import { ImageUploader } from './components/ImageUploader';
import { PredictionResult } from './components/PredictionResult';
import { predictDisease } from './api/apiClient';
import type { PredictionResponse } from './api/apiClient';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = async (file: File) => {
    setIsLoading(true);
    setError(null);
    try {
      const prediction = await predictDisease(file);
      setResult(prediction);
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.detail || "An error occurred during prediction.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(59,130,246,0.1)] opacity-50 blur-[80px]"></div>
      </div>

      <main className="container mx-auto px-4 pb-20">
        <Hero />
        
        <div className="mt-8 relative z-10">
          {!result ? (
            <div className="flex flex-col items-center">
              <ImageUploader onImageSelect={handleImageSelect} isLoading={isLoading} />
              
              {error && (
                <div className="mt-6 w-full max-w-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 px-4 py-3 rounded-xl text-sm text-center">
                  {error}
                </div>
              )}
            </div>
          ) : (
            <PredictionResult result={result} onReset={handleReset} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
