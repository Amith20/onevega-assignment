import ServiceInterface from "./ServiceInterface";

export default class ApiService extends ServiceInterface {
    async request(
        url: string,
        method: string = "GET",
    ) {

        let options: RequestInit = {
            method, // HTTP method (e.g., GET, POST, PUT, DELETE)
        };

        try {
            const response = await fetch(url, options);

            if (!response || !response.ok) {
                throw new Error(`HTTP request failed with status ${response?.status ?? ''}`);
            }

            const responseData = response && response.ok ? await response.json() : null;

            if (responseData == null) {
                throw new Error("Data is empty");
            }
            // Check for a 'statusCode' property in the response JSON
            if (responseData.statusCode !== undefined &&
                responseData.statusCode !== 200 &&
                responseData.statusCode !== 201) {
                throw new Error(responseData.statusMessage);
            }

            return responseData;
        } catch (error) {
            throw error;
        }
    }
}
