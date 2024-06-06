import ApiService from "./ApiServcie";

const api = new ApiService();
const base_url = 'https://demo6396395.mockable.io'

export  async function getBcfBoards(){
    try {        
        return await api.request(`${base_url}/bcf-boards` , 'GET');
    } catch (error) {
        throw error;
    }
}

export  async function getPrompts(){
    try {
        return await api.request(`${base_url}/prompts` , 'GET');
    } catch (error) {
        throw error;
    }
}