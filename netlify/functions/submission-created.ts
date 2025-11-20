export const handler = async (event: any) => {
  const webhookUrl = process.env.FORM_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("FORM_WEBHOOK_URL environment variable is not set");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Webhook URL is not configured" }),
    };
  }

  try {
    const parsedBody = typeof event.body === "string" ? JSON.parse(event.body) : event.body;

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsedBody ?? {}),
    });

    if (!response.ok) {
      console.error("Webhook responded with non-OK status", response.status, response.statusText);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "Failed to deliver webhook" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Error sending form submission to webhook", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error processing form submission" }),
    };
  }
};
