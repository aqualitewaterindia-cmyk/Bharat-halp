
import { GoogleGenAI } from "@google/genai";

export async function getEmergencyGuidance(query: string) {
  // Always initialize GoogleGenAI inside the function to use the most current API key from environment
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are an Emergency Assistant for Indian Citizens. 
        Your goal is to provide immediate, actionable safety advice for various emergencies (medical, fire, crime, natural disasters).
        - Use simple, concise language.
        - Prioritize contacting official helplines (112, 100, 108, etc.).
        - If a user asks for specific locations or news, use search grounding if needed (though not strictly required for general advice).
        - Format your response with clear headings and bullet points.
        - Keep the tone professional, calm, and reassuring.`,
        tools: [{ googleSearch: {} }]
      },
    });

    // Extract grounding chunks if available to display sources as per @google/genai guidelines
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || 'Source',
      uri: chunk.web?.uri || '#'
    })) || [];

    return {
      // Access the .text property directly and provide a sensible fallback if undefined
      text: response.text || "I was unable to generate advice. Please call 112 immediately for emergency support.",
      sources
    };
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      text: "I'm having trouble connecting to the emergency database. Please call 112 directly for immediate assistance.",
      sources: []
    };
  }
}
