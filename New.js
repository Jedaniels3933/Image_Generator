


const OpenAI= require('openai');
const openai = new OpenAI({
    apiKey: "INSERT YOUR API KEY HERE"
});

const image_generate = async () => {
    
    const response = await openai.images.generate({
        model: 'dall-e-3',
        // model: "dall-e-2",
        style: "vivid",
        prompt: "Generate an image of a powerful and majestic horse with a radiant coat, standing proudly in the heart of a lush green meadow. The warmth of the sunlight creates a glow on the horse's shiny coat. The horse's head is raised high, revealing expressive and vibrant eyes. The backdrop features whimsical clouds scattered across an expansive, vibrant blue sky.",
        n:1,

        size: "1024x1024"


    })
    // image_url = response.data.images[0].url;
    console.log("response", response.data);
   
}
image_generate();


