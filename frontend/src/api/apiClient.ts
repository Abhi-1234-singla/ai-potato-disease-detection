import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export interface PredictionResponse {
  success: boolean;
  prediction: string;
  confidence: number;
  message: string;
}

export const predictDisease = async (file: File): Promise<PredictionResponse> => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post<PredictionResponse>(`${API_BASE_URL}/predict`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};
