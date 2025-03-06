export default async function handler(req, res) {
    if (req.method === "GET") {
        return res.status(200).json({ message: "API is working! Use POST to interact with Mistral." });
    }
    
    try {
        const { userInput } = req.body || {};

        if (!userInput) {
            return res.status(400).json({ error: "User input is required" });
        }

        const apiKey = process.env.MISTRAL_API_KEY;

        const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "mistral-large-latest",
                messages: [{ role: "user", content: userInput }]
            })
        });

        const data = await response.json();
        
        // Log raw Mistral response to debug
        console.log("Raw Mistral Response:", data);

        // ✅ Ensure content is valid
        if (!data.choices || !data.choices[0] || !data.choices[0].message.content.trim()) {
            return res.status(500).json({ error: "Mistral returned an empty response" });
        }

        // ✅ Trim and clean the response content
        const parsedContent = data.choices[0].message.content.trim();

        return res.status(200).json({ response: parsedContent });
    } catch (error) {
        return res.status(500).json({ error: "Failed to parse Mistral response", details: error.message });
    }
}

