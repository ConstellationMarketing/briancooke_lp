import { Handler } from '@netlify/functions';

interface ConsultationData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse the request body
    const data: ConsultationData = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Get Zapier webhook URL from environment variable
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;

    if (!zapierWebhookUrl) {
      console.error('ZAPIER_WEBHOOK_URL not configured');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Configuration error' }),
      };
    }

    // Send to Zapier
    const zapierResponse = await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!zapierResponse.ok) {
      console.error('Zapier request failed:', await zapierResponse.text());
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to process request' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Consultation request received' }),
    };
  } catch (error) {
    console.error('Error processing consultation form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

export { handler };
