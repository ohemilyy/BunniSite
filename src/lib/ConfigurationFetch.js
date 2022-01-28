export default async function ConfigurationFetch() {
    const response = await fetch("/config/config.json").then(response => response.json()).catch(e => console.error("Error fetching config:", e));
    return response;
}