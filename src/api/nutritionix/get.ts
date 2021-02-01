/**
 * API convention
 */
export const get = async <T>(operation: string): Promise<T> => {
  const response = await fetch(
    "https://trackapi.nutritionix.com/v2/" + operation,
    {
      headers: {
        "x-app-id": process.env["REACT_APP_NUTRITIONIX_APP_ID"]!,
        "x-app-key": process.env["REACT_APP_NUTRITIONIX_APP_KEY"]!,
      },
    }
  );
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
