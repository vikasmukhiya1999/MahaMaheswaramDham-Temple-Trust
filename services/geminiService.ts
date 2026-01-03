
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askSpiritualGuide(query: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are the Spiritual Guide for MahaMaheswaramDham Temple Trust. 
        Be polite, humble, and spiritual. 
        Knowledge base: 
        - Facilities: Vivah Bhawan (free/low-cost weddings for poor), Open Gym, Public Park, Yagya Shala, Dharamshala.
        - Seva: Annadaan (Daily food), Gau Seva (Cows), Clothes distribution.
        - Location: Situated in a serene divine atmosphere (General Himalayan or North Indian context).
        - Trust Mission: "Service to Humanity is Service to God".
        Answer users about temple timings (4 AM to 10 PM), donation categories, and spiritual significance.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "The divine voice is silent for a moment. Please ask again shortly or contact the temple office directly.";
  }
}
