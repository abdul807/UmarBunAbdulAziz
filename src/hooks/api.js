const FirebaseURL = "https://react-cd9ef-default-rtdb.firebaseio.com";

export async function SendMessage(UserData) {
  const response = await fetch(`${FirebaseURL}/messages.json`, {
    method: "POST",
    body: JSON.stringify(UserData),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  // const data = await response.json()

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response;
}
