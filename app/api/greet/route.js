// app/api/greet/route.js
export const runtime = 'edge';

export async function POST(request) {
  const body = await request.json();
  const name = body.name;

  // Define the external API URL
  //const externalApiUrl = 'https://tiktokmoneycalc.com/wp-admin/admin-ajax.php';

  // Send a POST request to the external API
  const response = await fetch("https://tiktokmoneycalc.com/wp-admin/admin-ajax.php", {
    "headers": {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7D0Ity8qMap5zZK3"
    },
    //"referrer": "https://tiktokmoneycalc.com/",
    //"referrerPolicy": "strict-origin-when-cross-origin",
    "body": "------WebKitFormBoundary7D0Ity8qMap5zZK3\r\nContent-Disposition: form-data; name=\"action\"\r\n\r\ntiktok-calculate\r\n------WebKitFormBoundary7D0Ity8qMap5zZK3\r\nContent-Disposition: form-data; name=\"username\"\r\n\r\n"+name+"\r\n------WebKitFormBoundary7D0Ity8qMap5zZK3--\r\n",
    "method": "POST"
  });
  //println(response);
  //console.log(response);

  if (!response.ok) {
    const errorData = await response.json();
    return new Response(JSON.stringify({ error: 'Failed to forward data', details: errorData }), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Parse the response from the external API
  const responseData = await response.json();
  console.log(responseData);
  // Return the response from the external API back to the client
  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });

  /** if (!name) {
    return new Response(JSON.stringify({ error: 'Name is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }



  return new Response(JSON.stringify({ message: `Hello, ${name}!` }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
  **/
}
