import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import type { PredictionResponse } from '../api/apiClient';

interface PredictionResultProps {
  result: PredictionResponse;
  onReset: () => void;
}

export const PredictionResult: React.FC<PredictionResultProps> = ({ result, onReset }) => {
  const isHealthy = result.prediction.toLowerCase().includes('healthy');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto p-4"
    >
      <div className="glass rounded-2xl p-8 relative overflow-hidden">
        {/* Background gradient hint based on result */}
        <div 
          className={`absolute inset-0 opacity-10 pointer-events-none ${isHealthy ? 'bg-gradient-to-br from-emerald-500 to-transparent' : 'bg-gradient-to-br from-rose-500 to-transparent'}`}
        />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-sm font-medium text-gray-400 mb-1">Analysis Result</h2>
              <div className="flex items-center gap-2">
                {isHealthy ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-rose-400" />
                )}
                <h3 className="text-2xl font-bold text-white">{result.prediction}</h3>
              </div>
            </div>
            
            <div className="text-right">
              <h2 className="text-sm font-medium text-gray-400 mb-1">Confidence</h2>
              <div className="text-2xl font-bold text-primary">
                {result.confidence}%
              </div>
            </div>
          </div>

          {/* Progress bar for confidence */}
          <div className="w-full bg-black/40 rounded-full h-2.5 mb-8 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${result.confidence}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`h-2.5 rounded-full ${isHealthy ? 'bg-emerald-500' : 'bg-rose-500'}`}
            />
          </div>

          <div className="bg-black/20 rounded-xl p-4 border border-white/5 mb-8">
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">Status: </span>
              {result.message}
            </p>
          </div>

          <button
            onClick={onReset}
            className="w-full bg-white/5 hover:bg-white/10 text-white font-medium py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 border border-white/10"
          >
            <RefreshCw className="w-4 h-4" />
            Analyze Another Image
          </button>
        </div>
      </div>
    </motion.div>
  );
};
